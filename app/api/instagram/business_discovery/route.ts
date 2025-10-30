// app/api/instagram/business_discovery/route.ts

import { NextResponse } from 'next/server';
import { InstagramAPI } from '@/lib/instagram';

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const username = searchParams.get('username');
        if (!username) {
            return new NextResponse('Missing username', { status: 400 });
        }

        const accessToken = process.env.FB_USER_LONG_LIVED_TOKEN;
        const userId = process.env.INS_BUSINESS_ACCOUNT_ID;
        if (!accessToken || !userId) {
            throw new Error('Missing INS_BUSINESS_ACCOUNT_ID or access token');
        }
        const api = new InstagramAPI({ accessToken, userId });
        const data = await api.getBusinessDiscovery(username);
        return NextResponse.json(data);
    } catch (err) {
        const errorMsg = err instanceof Error ? err.message : String(err);
        console.error('Error fetching business discovery data:', errorMsg);
        return new NextResponse(`Error: ${errorMsg}`, { status: 500 });
    }
}
