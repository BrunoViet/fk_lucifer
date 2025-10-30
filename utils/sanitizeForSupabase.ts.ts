/**
 * @file sanitizeForSupabase.ts
 * @description 通用数据清理工具，用于在向 Supabase 插入或更新 JSONB 数据前，
 *              自动清理非法 Unicode（例如半个 emoji）、移除 undefined 字段、
 *              并保证 JSON 可被 PostgreSQL 正确解析。
 */

type JSONValue =
    | string
    | number
    | boolean
    | null
    | JSONValue[]
    | { [key: string]: JSONValue };

/**
 * 清理非法 Unicode（例如孤立的 surrogate 字符）
 * @param str 输入字符串
 * @returns 清理后的安全字符串
 */
export function sanitizeUnicode(str: string): string {
    return str
        // 移除孤立的高代理项（High Surrogate）
        .replace(/([\uD800-\uDBFF])(?![\uDC00-\uDFFF])/g, "")
        // 移除孤立的低代理项（Low Surrogate）
        .replace(/(?<![\uD800-\uDBFF])([\uDC00-\uDFFF])/g, "");
}

/**
 * 深度清理对象中的非法值、undefined、非法 Unicode 等
 * @param data 任意对象
 * @returns 清理后的对象，可安全传入 Supabase
 */
export function sanitizeForSupabase<T>(data: T): T {
    if (data === null || data === undefined) return data;

    if (typeof data === "string") {
        return sanitizeUnicode(data) as T;
    }

    if (Array.isArray(data)) {
        return data
            .map((item) => sanitizeForSupabase(item))
            .filter((item) => item !== undefined) as T;
    }

    if (typeof data === "object") {
        const cleanObj: Record<string, JSONValue> = {};
        for (const [key, value] of Object.entries(data)) {
            if (value === undefined) continue; // 移除 undefined 字段
            cleanObj[key] = sanitizeForSupabase(value);
        }
        return cleanObj as T;
    }

    return data;
}

/**
 * 封装 Supabase 插入前的安全数据构建函数
 * @example
 * const safeData = prepareForSupabaseInsert(commentData);
 * await supabase.from("social_comments").insert(safeData);
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function prepareForSupabaseInsert<T extends Record<string, any>>(data: T): T {
    try {
        const sanitized = sanitizeForSupabase(data);
        JSON.stringify(sanitized); // 验证是否可序列化
        return sanitized;
    } catch (err) {
        console.error("❌ Supabase 数据序列化错误:", err);
        throw new Error("数据中包含无法序列化为 JSON 的内容");
    }
}