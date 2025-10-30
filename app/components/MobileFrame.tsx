"use client";

import React, { ReactNode, useState, useEffect } from "react";

interface MobileFrameProps {
  children: ReactNode;
}

/**
 * 手机边框组件
 * 在桌面端显示手机边框效果，移动端直接显示内容
 * 支持等比例缩放，根据屏幕高度自动调整大小
 */
export const MobileFrame: React.FC<MobileFrameProps> = ({ children }) => {
  const [scale, setScale] = useState(1);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const calculateScale = () => {
      const baseHeight = 812;

      const availableHeight = window.innerHeight;

      const calculatedScale = availableHeight / baseHeight;

      const finalScale = Math.max(1, calculatedScale);

      setScale(finalScale);
      setIsReady(true);
    };

    // 初始计算
    calculateScale();

    // 监听窗口大小变化
    window.addEventListener("resize", calculateScale);

    // 清理事件监听器
    return () => {
      window.removeEventListener("resize", calculateScale);
    };
  }, []);

  return (
    <>
      {/* 移动端直接显示内容 */}
      <div className="block md:hidden scrollbar-hide bg-black">{children}</div>

      {/* 桌面端显示手机边框 */}
      <div className="hidden md:block min-h-screen bg-gray-900 scrollbar-hide">
        {isReady && (
          <div className="flex items-center justify-center min-h-screen scrollbar-hide">
            <div
              className="relative scrollbar-hide"
              style={{
                transform: `scale(${scale})`,
                transformOrigin: "center center",
              }}
            >
              <div className="w-[375px] h-[812px] p-2 scrollbar-hide">
                <div className="w-full h-full bg-black overflow-hidden relative scrollbar-hide">
                  <div className="w-full h-full overflow-y-auto scrollbar-hide">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
