// app/api/instagram/pages/route.ts

import { NextResponse } from 'next/server';
import { InstagramAPI } from '@/lib/instagram';

export async function GET() {
    try {
        const accessToken = process.env.FB_USER_LONG_LIVED_TOKEN;
        // const userId = process.env.INS_BUSINESS_ACCOUNT_ID;
        const userId = process.env.FB_APP_ID;
        if (!accessToken || !userId) {
            throw new Error('Missing INS_BUSINESS_ACCOUNT_ID or access token');
        }
        const api = new InstagramAPI({ accessToken, userId });
        const data = await api.getFacebookPage();
        return NextResponse.json(data);
    } catch (err) {
        const errorMsg = err instanceof Error ? err.message : String(err);
        console.error('Error fetching Facebook page data:', errorMsg);
        return new NextResponse(`Error: ${errorMsg}`, { status: 500 });
    }
}
