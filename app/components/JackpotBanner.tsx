"use client";
import { memo } from "react";
import Image from "next/image";
import { awareFont, EVENT_BG_IMGS, FUTURA_EXTRA_BLACK } from "../constant";
import { cn } from "@/lib/utils";

/**
 * 中奖横幅组件
 */
const JackpotBanner = memo(() => {
  return (
    <div className="w-full relative">
      <Image
        src={EVENT_BG_IMGS.jackpot}
        alt=""
        className="w-full object-cover"
        quality={100}
        priority={true}
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <div className="bg-[#d61c45] text-white text-2xl font-bold text-center w-[95%] mx-auto">
          {/* 激烈闪烁的中奖文字，伴随颜色变化效果 */}
          <div>
            <style jsx>{`
              .jackpot-flash {
                animation: flashIntense 0.3s infinite alternate;
              }

              @keyframes flashIntense {
                0% {
                  color: #ffffff;
                  text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff,
                    0 0 15px #ffffff;
                  opacity: 1;
                }
                25% {
                  color: #ffd700;
                  text-shadow: 0 0 10px #ffd700, 0 0 20px #ffd700,
                    0 0 30px #ffd700;
                  opacity: 0.8;
                }
                50% {
                  color: #ffff00;
                  text-shadow: 0 0 15px #ffff00, 0 0 25px #ffff00,
                    0 0 35px #ffff00;
                  opacity: 1;
                }
                75% {
                  color: #ff6b35;
                  text-shadow: 0 0 10px #ff6b35, 0 0 20px #ff6b35,
                    0 0 30px #ff6b35;
                  opacity: 0.9;
                }
                100% {
                  color: #ffffff;
                  text-shadow: 0 0 20px #ffffff, 0 0 30px #ffffff,
                    0 0 40px #ffffff;
                  opacity: 1;
                  transform: scale(1.05);
                }
              }
            `}</style>
            <span
              className={cn("jackpot-flash font-light", awareFont.className)}
            >
              WE HIT THE JACKPOT!
            </span>
          </div>
        </div>
        <div className="border-5 border-t-0 border-[#d61c45] w-[90%]  max-w-[90%] mx-auto bg-black flex justify-center items-center p-2 py-6 text-white">
          <div
            className={cn(
              "font-bold flex-3/4 text-sm",
              FUTURA_EXTRA_BLACK.className
            )}
          >
            WE&apos;VE SECURED
            <br />
            <span className="text-[#d61c45]">
              <span className="text-xl text-yellow-300">THREE</span>{" "}
              AUTHOR&apos;S AUTOGRAPH
            </span>
            <br />
            WHICH WILL BE AWARDED TO
            <br />
            THE <span className="text-[#d61c45]">FIRST PRIZE WINNERS!</span>
            <br />
            MORE MIGHT BE COMING,
            <br />
            KEEP YOUR ORDERS COMING!
          </div>
          <Image
            src={EVENT_BG_IMGS.jackpotBook}
            alt=""
            className="w-1/4 object-cover flex-1/4"
            quality={100}
            priority={true}
          />
        </div>
      </div>
    </div>
  );
});

JackpotBanner.displayName = "JackpotBanner";

export default JackpotBanner;
