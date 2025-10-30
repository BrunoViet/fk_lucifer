import React from "react";
import { EventProducts } from "./EventProducts";
import BuyNowButton from "./BuyNowButton";
import { awareFont, EVENT_BG_IMGS } from "../constant";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface CallToActionProps {
  /** 打开购物车抽屉的回调函数 */
  onOpenCartDrawer: () => void;
}

/**
 * 行动号召组件
 * 鼓励用户立即购买
 */
export const CallToAction: React.FC<CallToActionProps> = ({
  onOpenCartDrawer,
}) => {
  return (
    <div className="relative w-full">
      {/* 背景图片 - 使用相对定位确保容器有正确的高度 */}
      <Image
        src={EVENT_BG_IMGS.callToAction}
        alt=""
        className="w-full object-cover"
        quality={100}
        priority={true}
      />
      {/* 内容区域 - 使用绝对定位覆盖在背景图片上 */}
      <div className="absolute inset-0 w-full">
        {/* 标题 */}
        <div className="w-[70%] bg-[#547bbc] h-10 mt-9 relative">
          <div
            className={cn(
              "w-full h-full bg-black absolute -left-2 text-white -top-2 p-4 flex flex-col items-center justify-center font-bold text-xl",
              awareFont.className
            )}
          >
            EVENT PRODUCT
          </div>
        </div>
        <EventProducts onOpenCartDrawer={onOpenCartDrawer} />
        {/* 行动号召 */}
        <div className="w-full text-center">
          <div className="font-bold text-[1.25rem] mt-1 text-white">
            WHAT ARE YOU WAITING FOR?
          </div>
          <div className="text-[0.7rem] font-bold text-white">
            SHOP NOW AND WIN AMAZING PRIZES!
          </div>
        </div>
        {/* 行动号召按钮 */}
        <div className="w-full text-center mt-2">
          <BuyNowButton onOpenCartDrawer={onOpenCartDrawer} />
        </div>
      </div>
    </div>
  );
};
