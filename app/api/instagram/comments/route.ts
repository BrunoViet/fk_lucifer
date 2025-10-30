// app/api/instagram/comments/route.ts

import { NextResponse } from 'next/server';
import { InstagramAPI } from '@/lib/instagram';

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const mediaId = searchParams.get('id');
        if (!mediaId) {
            return new NextResponse('Missing media ID', { status: 400 });
        }

        const accessToken = process.env.FB_USER_LONG_LIVED_TOKEN;
        const userId = process.env.INS_BUSINESS_ACCOUNT_ID;
        if (!accessToken || !userId) {
            throw new Error('Missing INS_BUSINESS_ACCOUNT_ID or access token');
        }
        const api = new InstagramAPI({ accessToken, userId });
        // 获取评论（带 replies）
        const comments = await api.getMediaComments(mediaId);
        return NextResponse.json(comments);
    } catch (err) {
        const errorMsg = err instanceof Error ? err.message : String(err);
        console.error('Error fetching comments:', errorMsg);
        return new NextResponse(`Error: ${errorMsg}`, { status: 500 });
    }
}
