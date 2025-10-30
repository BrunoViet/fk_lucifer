'use server'

import { supabaseAdmin as supabase } from "@/utils/supabaseAdmin";

/**
 * 获取彩票订单汇总数据
 * 用于排行榜显示前5名用户的消费情况
 * @returns Promise<{ success: boolean; data: LeaderboardData[] }>
 */
export async function get_lottery_order_summary() {
    try {
        // 直接调用数据库函数获取抽奖订单汇总
        const { data, error } = await supabase.rpc("get_lottery_order_summary");

        if (error) {
            console.error("fetch lottery order summary failed:", error);
            throw new Error(`fetch lottery order summary failed: ${error.message}`);
        }

        // 格式化邮箱并返回数据
        const formattedData = data?.map((item: { email: string; total_quantity: number; total_amount: number; }) => ({
            ...item,
            email: formatEmail(item.email),
        })) || [];

        return {
            success: true,
            data: formattedData,
        }
    } catch (error) {
        console.error('get lottery order summary failed:', error)
        return {
            success: false,
            data: [],
            error: error instanceof Error ? error.message : 'get lottery order summary failed',
        }
    }
}

/**
 * 格式化邮箱显示
 * 隐藏部分字符，只显示@符号前面的字符，并且只显示前两个和最后一个字符，其他字符用*替换
 * 如果@符号前面的字符小于等于3个字符，不做处理
 * @param email - 原始邮箱地址
 * @returns 格式化后的邮箱地址
 */
const formatEmail = (email: string): string => {
    const [username, domain] = email.split("@");
    if (!username || !domain) return email;
    if (username.length <= 3) return email;
    return `${username.slice(0, 2)}***${username.slice(-1)}`;
};

// 定义排行榜数据类型
export type LeaderboardData = {
    email: string
    total_quantity: number
    total_amount: number
}