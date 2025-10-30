import { ImageProps } from 'next/image';
import { EVENT_BG_IMGS } from '../constant';

/**
 * 排行榜相关工具函数
 */

/**
 * 根据排名索引获取对应的排名图片URL
 * @param index - 排名索引（从0开始）
 * @returns 排名图片URL，如果不是前三名则返回空字符串
 */
export const getRankImg = (index: number): ImageProps['src'] => {
    switch (index) {
        case 0:
            return EVENT_BG_IMGS.gold;
        case 1:
            return EVENT_BG_IMGS.silver;
        case 2:
            return EVENT_BG_IMGS.copper;
        default:
            return "";
    }
};

/**
 * 格式化金额显示
 * @param amount - 金额数值
 * @returns 格式化后的金额字符串，如 "$1,234.56"
 */
export const formatAmount = (amount: number): string => {
    return `$${amount.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })}`;
};