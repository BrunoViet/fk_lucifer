"use client";

import React, { useState, useCallback, useMemo } from "react";
import { useLotteryOrderSummary } from "../../hooks/query/useLotteryOrderSummary";
import { useEventStatus } from "../../hooks/useEventStatus";
import PreEventNotice from "./PreEventNotice";
import { LeaderboardItem } from "./LeaderboardItem";
import { LeaderboardModal } from "./LeaderboardModal";
import { formatAmount } from "./leaderboard-utils";
import { DISPLAY_COUNT } from "./leaderboard-constants";
import { LeaderboardData } from "../actions/get_lottery_order_summary";
import { awareFont, EVENT_BG_IMGS } from "../constant";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ConfirmedBadge } from "./ConfirmedBadge";

/**
 * 排行榜组件
 * 红色背景，显示前5名用户排行，支持查看所有排名
 * 使用 TanStack Query 实现5分钟缓存
 */
export const Leaderboard: React.FC = () => {
  const [showAllModal, setShowAllModal] = useState(false);
  const { isEventStarted } = useEventStatus();

  // 使用 TanStack Query 获取排行榜数据，带5分钟缓存
  const {
    data: allLeaderboardData = [],
    isLoading,
    error,
    refetch,
    isRefetching,
  } = useLotteryOrderSummary();

  // 计算显示的排行榜数据（前N名）
  const leaderboardData = useMemo(() => {
    return allLeaderboardData.slice(0, DISPLAY_COUNT);
  }, [allLeaderboardData]);

  // 打开查看所有排名弹窗
  const handleShowAllRankings = useCallback(() => {
    setShowAllModal(true);
  }, []);

  // 关闭弹窗
  const handleCloseModal = useCallback(() => {
    setShowAllModal(false);
  }, []);

  return (
    <div className="relative w-full">
      {/* 背景图片 - 使用相对定位确保容器有正确的高度 */}
      <Image
        src={EVENT_BG_IMGS.leaderboard}
        alt=""
        className="w-full object-cover"
        quality={100}
        priority={true}
      />
      {/* 内容区域 - 使用绝对定位覆盖在背景图片上 */}
      <div className="absolute inset-0 w-full">
        {/* 标题 */}
        <div
          className={cn(
            "bg-[#d11c45] mt-6.5 text-white text-center w-fit px-8 py-1 mx-auto font-bold text-xl relative",
            awareFont.className
          )}
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%)",
          }}
        >
          LEADERBOARD
        </div>
        {/* 排行 */}
        <div className="w-[90%] bg-[#d11c45] h-58 mx-auto mt-4 relative transform translate-x-2">
          <div className="w-full h-full bg-black border-[#d11c45] border mx-auto mt-2 absolute -left-2 -top-4 p-4 flex flex-col items-center justify-start gap-1">
            {!isEventStarted && <PreEventNotice />}
            {/* Loading 状态 */}
            {(isLoading || isRefetching) && isEventStarted && (
              <div className="flex items-center justify-center h-full text-white">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                <span className="ml-2">
                  {isRefetching ? "refreshing..." : "loading..."}
                </span>
              </div>
            )}

            {/* 错误状态 */}
            {error && !isLoading && !isRefetching && isEventStarted && (
              <div className="flex items-center justify-center h-full text-red-400 text-center">
                <div>
                  <div className="text-sm font-bold">
                    fetch lottery order summary failed
                  </div>
                  <div className="text-xs mt-1">{error.message}</div>
                  <button
                    onClick={() => refetch()}
                    className="mt-2 px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-xs rounded transition-colors"
                  >
                    retry
                  </button>
                </div>
              </div>
            )}

            {/* 排行榜数据 */}
            {!isLoading && !isRefetching && !error && isEventStarted && (
              <>
                {leaderboardData.length === 0 ? (
                  <div className="flex items-center justify-center h-full text-white text-center">
                    <div>
                      <div className="text-sm font-bold">no data</div>
                      <div className="text-xs mt-1">no user has ordered</div>
                    </div>
                  </div>
                ) : (
                  <>
                    {leaderboardData.map(
                      (user: LeaderboardData, index: number) => (
                        <LeaderboardItem
                          key={user.email}
                          user={user}
                          index={index}
                          isModal={false}
                        />
                      )
                    )}
                    {/* 查看更多按钮 - 当总数据超过显示数量时显示 */}
                    {allLeaderboardData.length > DISPLAY_COUNT && (
                      <button
                        onClick={handleShowAllRankings}
                        className="bg-gray-800 hover:bg-gray-700 w-full px-2 py-1 flex justify-center items-center text-xs text-white border border-[#d11c45] transition-colors duration-200"
                      >
                        <span className="font-bold">
                          More ({allLeaderboardData.length})
                        </span>
                        <svg
                          className="w-3 h-3 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    )}
                  </>
                )}
              </>
            )}
          </div>
          <div className="absolute w-[85%] right-0 bottom-0">
            <div className="w-full bg-[#d11c45] h-5 relative transform translate-x-4 translate-y-4">
              <div className="w-full h-full bg-black border-[#d11c45] border absolute -left-2 -top-4 p-4 flex items-center justify-end text-[0.7rem] font-bold text-white">
                <ConfirmedBadge
                  className="absolute -top-0.5 -left-1.5 z-10"
                  defaultExpanded
                />
                {!isLoading &&
                !isRefetching &&
                !error &&
                isEventStarted &&
                leaderboardData.length > 0 ? (
                  <div className="text-center">
                    <div className={awareFont.className}>
                      CURRENT TOP SPENDER
                    </div>
                    <div className="text-[0.5rem] font-normal">
                      {leaderboardData[0].email} -{" "}
                      {formatAmount(leaderboardData[0].total_amount)}
                    </div>
                  </div>
                ) : (
                  "CURRENT TOP SPENDER"
                )}
              </div>
            </div>
          </div>
          <div className="text-white text-center text-[0.5rem] font-bold absolute -bottom-9 -right-22 w-full">
            LEADERBOARD UPDATES EVERY HOUR
          </div>
        </div>
      </div>

      {/* 查看所有排名弹窗 */}
      <LeaderboardModal
        isOpen={showAllModal}
        onClose={handleCloseModal}
        data={allLeaderboardData}
      />
    </div>
  );
};
