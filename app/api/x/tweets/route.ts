import { XAuthClient } from "@/lib/x";
import { NextResponse } from "next/server";
import { TweetApiUtils } from "twitter-openapi-typescript/dist/src/apis/tweetApi";
import { format } from "date-fns";
import { Comment } from "../../type";
import { retryWithBackoff } from "@/lib/utils";
import { supabaseAdmin } from "@/utils/supabaseAdmin";
import { prepareForSupabaseInsert } from "@/utils/sanitizeForSupabase.ts";

export const maxDuration = 300;
export const dynamic = "force-dynamic";

async function getAllTweetComments(tweetApi: TweetApiUtils, focalTweetId: string): Promise<Comment[]> {
    const allComments: Comment[] = [];
    let cursor: string | undefined = undefined;

    do {
        try {
            // 获取推文详情（包含评论）
            const response = await retryWithBackoff(() => tweetApi.getTweetDetail({
                focalTweetId,
                ...(cursor ? { cursor } : {})
            }))

            // 提取评论数据
            const entries = response.data.data;
            const comments: Comment[] = [];

            // 遍历条目查找评论
            for (const entry of entries) {
                // entries[0]是当前推文，排除当前推文、作者自己的评论、发现更多推文
                if (entry.tweet.restId !== focalTweetId && entry.user.restId !== entries[0]!.user.restId && entry.tweet.legacy?.inReplyToStatusIdStr === focalTweetId) {

                    const tweetResult = entry.tweet.legacy;
                    if (tweetResult) {
                        const [start, end] = tweetResult.displayTextRange;
                        comments.push({
                            id: tweetResult.idStr,
                            text: tweetResult.fullText.slice(start, end).trim() || null,
                            media: tweetResult.extendedEntities?.media.map(m => ({
                                id: m.idStr,
                                url: m.mediaUrlHttps,
                                type: m.type
                            })) || [],
                            author: {
                                id: entry.user.restId,
                                name: entry.user.legacy.name,
                                username: entry.user.legacy.screenName
                            },
                            created_at: format(tweetResult.createdAt, 'yyyy-MM-dd HH:mm:ssx'),
                            like_count: tweetResult.favoriteCount,
                            platform: 'x',
                            original_post_id: focalTweetId
                        });
                    }
                }
            }

            // 将当前页的评论添加到总列表中
            allComments.push(...comments);

            // 获取下一页的游标
            const bottomCursor = response.data.cursor?.bottom;
            cursor = response.data.data.length !== 0 && bottomCursor ? bottomCursor.value : undefined;

            // 添加延迟以避免请求过于频繁
            await new Promise(resolve => setTimeout(resolve, 1000));

        } catch (error) {
            console.error("X 获取评论时出错:", error);
            break;
        }
    } while (cursor);

    return allComments;
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const tweetId = searchParams.get('tweetId')!;

    try {
        const client = await XAuthClient();
        const tweetApi = client.getTweetApi();

        // 获取所有评论
        const comments = prepareForSupabaseInsert(await getAllTweetComments(tweetApi, tweetId));

        if (comments.length > 0) {
            const { error } = await supabaseAdmin.from('social_comments').upsert(comments, {
                onConflict: 'id',
                ignoreDuplicates: false
            })
            if (error) {
                throw new Error("X Supabase 插入错误");
            }
        }

        return NextResponse.json({
            success: true,
            tweetId,
            count: comments.length
        });
    } catch (error) {
        console.error("X API 错误:", error);
        return NextResponse.json({
            success: false,
            error: error instanceof Error ? error.message : "未知错误"
        }, { status: 500 });
    }
}