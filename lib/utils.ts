import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

// 千分位格式化
export function formatThousand(num: number) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

/**
 * 重试函数，带指数退避
 * @param fn 要执行的异步函数
 * @param maxRetries 最大重试次数
 * @param initialDelay 初始延迟时间（毫秒）
 * @returns 返回函数执行结果
 */
export async function retryWithBackoff<T>(
    fn: () => Promise<T>,
    maxRetries = 3,
    initialDelay = 1000,
): Promise<T> {
    let retries = 0;
    let delay = initialDelay;

    while (true) {
        try {
            return await fn();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            if (retries >= maxRetries) {
                throw error;
            }

            // 检查是否是 502 错误或其他需要重试的错误
            if (
                error?.response?.status === 502 ||
                error?.response?.status === 503 ||
                error?.response?.status === 504
            ) {
                console.log(
                    `请求失败，${delay}ms 后重试 (${retries + 1}/${maxRetries})...`,
                );
                await new Promise((resolve) => setTimeout(resolve, delay));
                retries++;
                delay *= 2; // 指数退避
                continue;
            }

            // 其他错误直接抛出
            throw error;
        }
    }
}