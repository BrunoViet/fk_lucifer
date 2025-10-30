import React from "react";
import { LeaderboardData } from "../actions/get_lottery_order_summary";
import { LeaderboardItem } from "./LeaderboardItem";

/**
 * 排行榜弹窗组件的属性接口
 */
interface LeaderboardModalProps {
  /** 是否显示弹窗 */
  isOpen: boolean;
  /** 关闭弹窗的回调函数 */
  onClose: () => void;
  /** 所有排行榜数据 */
  data: LeaderboardData[];
}

/**
 * 排行榜弹窗组件
 * 用于显示完整的排行榜列表
 */
export const LeaderboardModal: React.FC<LeaderboardModalProps> = ({
  isOpen,
  onClose,
  data,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 w-full h-full">
      {/* 背景遮罩 */}
      <div
        className="absolute inset-0 bg-black/80 bg-opacity-75"
        onClick={onClose}
      />

      {/* 弹窗内容 */}
      <div className="relative bg-black border-2 border-[#d11c45] max-w-5/6 w-5/6 max-h-3/4 flex flex-col">
        {/* 弹窗标题和关闭按钮 */}
        <div className="bg-[#d11c45] px-4 py-3 flex justify-between items-center">
          <h3 className="text-white font-bold text-lg">Top {data.length}</h3>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Close"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* 排行榜列表 */}
        <div className="flex-1 overflow-y-auto scrollbar-hide p-4">
          <div className="space-y-2">
            {data.map((user, index) => (
              <LeaderboardItem
                key={user.email}
                user={user}
                index={index}
                isModal={true}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
