"use client";
import { EVENT_BG_IMGS, BarrageTextList, FAQ_DATA } from "../constant";
import CountDownWithBg from "./CountDownWithBg";
import { Leaderboard } from "./Leaderboard";
import { CallToAction } from "./CallToAction";
import { useEventStatus } from "../../hooks/useEventStatus";
import FAQ from "./FAQ";
import Image from "next/image";
import JackpotBanner from "./JackpotBanner";
import { BarrageContainer } from "./Barrage";

interface EventPageProps {
  /** 打开购物车抽屉的回调函数 */
  onOpenCartDrawer: () => void;
}

export default function EventPage({ onOpenCartDrawer }: EventPageProps) {
  // 使用自定义 hook 管理活动状态
  const { isEventStarted } = useEventStatus();
  return (
    <div className="w-full flex flex-col items-center justify-start overflow-hidden">
      <div className="relative w-full">
        <Image
          src={EVENT_BG_IMGS.banner}
          alt=""
          className="w-full object-cover"
          quality={100}
          priority={true}
        />
        <BarrageContainer
          messages={BarrageTextList.map(
            (item) => `@${item.username}: ${item.text}`
          )}
          rows={4}
          opacity={0.9}
          fontSize={16}
          className="w-full h-1/2 absolute top-0 left-0"
        />
      </div>
      <JackpotBanner />
      {!isEventStarted && <CountDownWithBg />}
      <Image
        src={EVENT_BG_IMGS.prizes}
        alt=""
        className="w-full object-cover"
        quality={100}
        priority={true}
      />
      <Image
        src={EVENT_BG_IMGS.howToWin}
        alt=""
        className="w-full object-cover"
        quality={100}
        priority={true}
      />
      <Leaderboard />
      <CallToAction onOpenCartDrawer={onOpenCartDrawer} />
      <Image
        src={EVENT_BG_IMGS.declaration}
        alt=""
        className="w-full object-cover"
        quality={100}
        priority={true}
      />
      <FAQ faqData={FAQ_DATA}/>
    </div>
  );
}
