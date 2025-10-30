export interface Comment {
    id: string;
    text: string | null;
    media: { id: string, url: string, type: string }[]
    author: {
        id: string;
        name: string;
        username: string;
    };
    created_at: string;
    like_count: number;
    platform: 'x' | 'facebook' | 'ins';
    original_post_id: string;
}