"use client";

import React from "react";

/**
 * 活动开始前的提示组件
 * 显示活动开始时间和排行榜相关信息
 */
export const PreEventNotice: React.FC = () => {
  return (
    <div className="w-full h-full text-center text-white font-bold text-md flex justify-center items-center">
      Event Start At 12:00 PM, August 8th
    </div>
  );
};

export default PreEventNotice;
