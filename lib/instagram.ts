/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/instagram.ts
// TypeScript Instagram Graph API 封装库

export interface InstagramAPIOptions {
    accessToken: string;
    userId: string;
}

export class InstagramAPI {
    private accessToken: string;
    private userId: string;
    // private baseUrl: string = 'https://graph.instagram.com/v23.0';
    private baseUrl: string = 'https://graph.facebook.com/v23.0';

    constructor(options: InstagramAPIOptions) {
        this.accessToken = options.accessToken;
        this.userId = options.userId;
    }

    private async makeRequest<T>(endpoint: string, params: Record<string, any> = {}): Promise<T> {
        const url = new URL(`${this.baseUrl}${endpoint}`);
        url.searchParams.append('access_token', this.accessToken);
        Object.entries(params).forEach(([key, value]) => {
            if (value !== null && value !== undefined) {
                url.searchParams.append(key, String(value));
            }
        });
        const response = await fetch(url.toString());
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error?.message || 'Instagram API Error');
        }
        return await response.json();
    }

    // 搜索话题标签
    async searchHashtag(hashtag: string) {
        return this.makeRequest<{ data: Array<{ id: string }> }>(
            '/ig_hashtag_search',
            { user_id: this.userId, q: hashtag }
        );
    }

    // 获取话题最新媒体
    async getHashtagRecentMedia(hashtagId: string, fields = 'id,caption,media_type,media_url,thumbnail_url,timestamp,like_count,comments_count,permalink') {
        return this.makeRequest<{ data: any[] }>(
            `/${hashtagId}/recent_media`,
            { user_id: this.userId, fields }
        );
    }

    // 获取话题热门媒体
    async getHashtagTopMedia(hashtagId: string, fields = 'id,caption,media_type,media_url,thumbnail_url,timestamp,like_count,comments_count,permalink') {
        return this.makeRequest<{ data: any[] }>(
            `/${hashtagId}/top_media`,
            { user_id: this.userId, fields }
        );
    }

    // 获取媒体评论
    async getMediaComments(mediaId: string, fields = 'id,text,timestamp,username,like_count,replies{id,text,timestamp,username}') {
        return this.makeRequest<{ data: any[] }>(
            `/${mediaId}/comments`,
            { fields }
        );
    }

    // 获取媒体详情
    async getMediaDetails(mediaId: string, fields = 'id,caption,media_type,media_url,thumbnail_url,timestamp,like_count,comments_count,permalink,username') {
        return this.makeRequest<any>(
            `/${mediaId}`,
            { fields }
        );
    }

    // 回复评论
    async replyToComment(commentId: string, message: string) {
        const url = `${this.baseUrl}/${commentId}/replies`;
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message, access_token: this.accessToken })
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error?.message || 'Failed to reply to comment');
        }
        return await response.json();
    }

    // 获取 business_discovery 信息
    async getBusinessDiscovery(username: string, fields = 'followers_count,media_count,media') {
        const endpoint = `/${this.userId}`;
        const queryFields = `business_discovery.username(${username}){${fields}}`;
        return this.makeRequest<any>(endpoint, { fields: queryFields });
    }

    // 获取 Facebook 公共主页
    async getFacebookPage() {
        //     curl -i -X GET 
        //  "https://graph.facebook.com/user_id/accounts"
        this.baseUrl = "https://graph.facebook.com";
        // const endpoint = `/${this.userId}/accounts`;
        const endpoint = `/me/accounts`;
        return this.makeRequest<any>(endpoint);
    }

    // 获取 Facebook 主页里的帖子（post）
    async getFBPagePosts(pageId: string, pageAccessToken: string) {
        this.accessToken = pageAccessToken;
        const endpoint = `/${pageId}/feed`;
        return this.makeRequest<any>(endpoint);
    }

    async getFBPagePostComments(postId: string, pageAccessToken: string) {
        this.accessToken = pageAccessToken;
        const endpoint = `/${postId}/comments`;
        this.baseUrl = "https://graph.facebook.com";
        return this.makeRequest<any>(endpoint);
    }
}
