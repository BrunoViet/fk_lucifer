import React from "react";
import { LeaderboardData } from "../actions/get_lottery_order_summary";
import { getRankImg, formatAmount } from "./leaderboard-utils";
import Image from "next/image";
import { ConfirmedBadge } from "./ConfirmedBadge";

/**
 * 排行榜单项组件的属性接口
 */
interface LeaderboardItemProps {
  /** 用户数据 */
  user: LeaderboardData;
  /** 排名索引（从0开始） */
  index: number;
  /** 是否为弹窗模式（影响样式） */
  isModal?: boolean;
  /** 是否显示确认签名奖品徽标 */
  showBadge?: boolean;
}

/**
 * 排行榜单项组件
 * 可复用于主排行榜和弹窗中的排行榜
 */
export const LeaderboardItem: React.FC<LeaderboardItemProps> = ({
  user,
  index,
  isModal = false,
  showBadge = false,
}) => {
  return (
    <div
      className={`bg-[#547bbc] w-full flex justify-between items-center text-sm text-black ${
        isModal ? "px-3 py-2" : "px-2 py-1"
      }`}
    >
      <div
        className={`flex items-center ${
          isModal ? "gap-3" : "justify-between max-w-[35%] w-[35%] gap-2"
        }`}
      >
        <div className="relative flex items-center">
          {index < 3 ? (
            <Image
              src={getRankImg(index)}
              alt=""
              className={isModal ? "w-8 h-6" : "min-w-8 min-h-6 w-8 h-6"}
              quality={100}
              priority={true}
            />
          ) : (
            <div className={isModal ? "" : "min-w-8 min-h-6"}>
              <div
                className={`bg-black text-white text-center flex items-center justify-center text-xs font-bold ${
                  isModal ? "w-8 h-6" : "w-6 h-6 ml-1"
                }`}
              >
                {index + 1}
              </div>
            </div>
          )}
          {/* Confirmed Signed Prize 徽标 - 悬浮在皇冠左上角，可点击展开，带发光波纹特效 */}
          {showBadge && (
            <ConfirmedBadge className="absolute -top-2 -left-2 z-10" />
          )}
        </div>
        <div>
          <div className={`font-bold text-xs ${isModal ? "" : "truncate"}`}>
            {user.email}
          </div>
          <div className="font-light text-[0.5rem] leading-[0.5rem]">
            {user.total_quantity} ITEMS
          </div>
        </div>
      </div>
      <div className={isModal ? "text-right" : "items-end"}>
        <div className={`font-bold text-xs ${isModal ? "" : "text-end"}`}>
          {formatAmount(user.total_amount)}
        </div>
        <div
          className={`font-light text-[0.5rem] leading-[0.5rem] ${
            isModal ? "" : "text-end"
          }`}
        >
          TOTAL SPENT
        </div>
      </div>
    </div>
  );
};
