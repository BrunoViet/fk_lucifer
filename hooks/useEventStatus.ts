import { useState, useEffect } from 'react';
const EVENT_START_TIME = process.env.NEXT_PUBLIC_EVENT_START_TIME!;

/**
 * 活动状态管理 Hook
 * 用于检查活动是否已开始，并实时更新状态
 * 
 * @returns {
 *   isEventStarted: boolean - 活动是否已开始
 *   timeUntilStart: number - 距离活动开始的毫秒数（如果活动未开始）
 * }
 */
export const useEventStatus = () => {
    // 活动开始状态管理
    const [isEventStarted, setIsEventStarted] = useState(() => {
        const now = new Date();
        const startTime = new Date(EVENT_START_TIME);
        return now >= startTime;
    });

    // 距离活动开始的时间（毫秒）
    const [timeUntilStart, setTimeUntilStart] = useState(() => {
        const now = new Date();
        const startTime = new Date(EVENT_START_TIME);
        return Math.max(0, startTime.getTime() - now.getTime());
    });

    // 实时检查活动开始状态
    useEffect(() => {
        const checkEventStatus = () => {
            const now = new Date();
            const startTime = new Date(EVENT_START_TIME);
            const started = now >= startTime;
            const timeLeft = Math.max(0, startTime.getTime() - now.getTime());

            setIsEventStarted(started);
            setTimeUntilStart(timeLeft);
        };

        // 每秒检查一次活动状态
        const timer = setInterval(checkEventStatus, 1000);

        // 清理定时器
        return () => clearInterval(timer);
    }, []);

    return {
        isEventStarted,
        timeUntilStart
    };
};