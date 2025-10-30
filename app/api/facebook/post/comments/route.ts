import { NextResponse } from 'next/server';
import { InstagramAPI } from '@/lib/instagram';

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const postId = searchParams.get('id');
        if (!postId) {
            return new NextResponse('Missing post id', { status: 400 });
        }
        // post token
        const accessToken = 'EAAKwWmKMGOsBPSMT0heP8rZAwAUfk8cAcyQ0Xulr6UKXRAZCaWFrjJCeQZBKkow4vuq2T3zA1jIh2CdLGtAdVEZAFjiWBNyvhax7g4ZAhD2CtQ6ToHaiZA86twpblT5mReU9yEDnfGZB7DvibGHIwwtxA9nKCVhkBn1ZAJZCYCjXQanE83VwOxI8KyXBKGAncbFksoR5K';
        const userId = process.env.FB_APP_ID;
        if (!accessToken || !userId) {
            throw new Error('Missing FB_APP_ID or access token');
        }
        const api = new InstagramAPI({ accessToken, userId });
        const data = await api.getFBPagePostComments(postId, accessToken);
        return NextResponse.json(data);
    } catch (err) {
        const errorMsg = err instanceof Error ? err.message : String(err);
        console.error('Error fetching Facebook post comments data:', errorMsg);
        return new NextResponse(`Error: ${errorMsg}`, { status: 500 });
    }
}
