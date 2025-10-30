import { NextResponse } from 'next/server';

export async function GET() {
    const app_id = process.env.FB_APP_ID;
    const app_secret = process.env.FB_APP_SECRET;
    const user_access_token = process.env.FB_USER_TOKEN;
    const api_version = process.env.INSTAGRAM_API_VERSION;

    if (!app_id || !app_secret || !user_access_token) {
        return NextResponse.json({ error: 'Missing required parameters.' }, { status: 400 });
    }

    const url = `https://graph.facebook.com/${api_version}/oauth/access_token?grant_type=fb_exchange_token&client_id=${app_id}&client_secret=${app_secret}&fb_exchange_token=${user_access_token}`;

    try {
        const res = await fetch(url, { method: 'GET' });
        const data = await res.json();
        if (!res.ok) {
            return NextResponse.json({ error: data.error || 'Failed to get long-lived token.' }, { status: res.status });
        }
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
    }
}
