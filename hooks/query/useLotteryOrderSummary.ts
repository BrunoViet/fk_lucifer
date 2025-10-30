"use client";

import { useQuery, QueryClient } from "@tanstack/react-query";
import { get_lottery_order_summary } from "../../app/actions/get_lottery_order_summary";

/**
 * 彩票订单汇总数据查询 Hook
 * 使用 TanStack Query 实现5分钟缓存
 * 
 * @returns {
 *   data: LeaderboardData[] | undefined - 排行榜数据
 *   isLoading: boolean - 加载状态
 *   error: Error | null - 错误信息
 *   refetch: () => void - 手动刷新函数
 *   isRefetching: boolean - 重新获取状态
 * }
 */
export const useLotteryOrderSummary = () => {
    return useQuery({
        // 查询键，用于缓存标识
        queryKey: ["lottery-order-summary"],

        // 查询函数
        queryFn: async () => {
            const result = await get_lottery_order_summary();

            if (!result.success) {
                throw new Error(result.error || "fetch lottery order summary failed");
            }

            return result.data;
        },

        // 缓存时间 5 分钟（数据在5分钟内被认为是新鲜的）
        staleTime: 5 * 60 * 1000,

        // 垃圾回收时间 10 分钟（缓存保持时间）
        gcTime: 10 * 60 * 1000,

        // 失败重试配置
        retry: (failureCount, error) => {
            // 最多重试 2 次
            if (failureCount >= 2) return false;

            // 如果是网络错误或服务器错误，进行重试
            if (error instanceof Error) {
                return error.message.includes("fetch") || error.message.includes("network");
            }

            return true;
        },

        // 重试延迟（指数退避）
        retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),

        // 窗口重新获得焦点时重新获取数据
        refetchOnWindowFocus: false,

        // 重新连接时重新获取数据
        refetchOnReconnect: true,

        // 组件挂载时重新获取数据（如果数据已过期）
        refetchOnMount: true,
    });
};

/**
 * 手动使缓存失效，强制重新获取数据
 * 
 * @param queryClient - QueryClient 实例
 */
export const invalidateLotteryOrderSummary = (queryClient: QueryClient) => {
    queryClient.invalidateQueries({
        queryKey: ["lottery-order-summary"],
    });
};
