-- 创建 platform 枚举类型
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'social_platform_enum') THEN
        CREATE TYPE social_platform_enum AS ENUM ('x', 'facebook', 'ins');
    END IF;
END$$;

-- 创建 social_comments 表
CREATE TABLE IF NOT EXISTS social_comments (
    id TEXT PRIMARY KEY,                       -- 评论唯一ID
    text TEXT NOT NULL,                        -- 评论内容
    media JSONB DEFAULT '[]'::jsonb,           -- 媒体数组 [{ id, url, type }]
    author JSONB NOT NULL,                     -- 作者信息 { id, name, username }
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(), -- 创建时间
    like_count INTEGER DEFAULT 0,              -- 点赞数量
    platform social_platform_enum NOT NULL,    -- 平台类型
    original_post_id TEXT NOT NULL             -- 原始帖子的ID
);

-- 创建索引
CREATE INDEX IF NOT EXISTS idx_social_comments_platform 
    ON social_comments(platform);

CREATE INDEX IF NOT EXISTS idx_social_comments_original_post_id 
    ON social_comments(original_post_id);

CREATE INDEX IF NOT EXISTS idx_social_comments_created_at 
    ON social_comments(created_at DESC);