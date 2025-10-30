// app/api/instagram/hashtag/route.ts

import { NextResponse } from 'next/server';
import { InstagramAPI } from '@/lib/instagram';

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const tag = searchParams.get('tag');
        if (!tag) {
            return new NextResponse('Missing hashtag parameter', { status: 400 });
        }

        const accessToken = process.env.FB_USER_LONG_LIVED_TOKEN;
        const userId = process.env.INS_BUSINESS_ACCOUNT_ID;
        if (!accessToken || !userId) {
            throw new Error('Missing INS_BUSINESS_ACCOUNT_ID or access token');
        }
        const api = new InstagramAPI({ accessToken, userId });
        // 第一步：查询标签 ID
        const searchData = await api.searchHashtag(tag);
        const hashtagId = searchData.data?.[0]?.id;
        if (!hashtagId) {
            throw new Error('Hashtag not found');
        }
        // 第二步：获取标签的媒体列表
        const mediaData = await api.getHashtagRecentMedia(hashtagId, 'id,caption,media_url,timestamp');
        return NextResponse.json(mediaData);
    } catch (err) {
        const errorMsg = err instanceof Error ? err.message : String(err);
        console.error('Error fetching hashtag media:', errorMsg);
        return new NextResponse(`Error: ${errorMsg}`, { status: 500 });
    }
}
