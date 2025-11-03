import styles from "@/app/events/ani/styles.module.css";
import Image from "next/image";
import Rank1 from "@/public/images/ani/rank1.png";
import Rank2 from "@/public/images/ani/rank2.png";
import Rank3 from "@/public/images/ani/rank3.png";
import Rank4 from "@/public/images/ani/rank4.png";
import Rank5 from "@/public/images/ani/rank5.png";
import Rank6 from "@/public/images/ani/rank6.png";
import { formatThousand } from "@/lib/utils";
import { useCharacterPoints } from "@/hooks/query/useCharacterPoints";

// Character images will be resolved dynamically from public folder with pattern `${name}_new.png`.
const getCharacterImgPath = (name: string) => `/images/ani/${name.toLowerCase()}_new.png`;

const RankImgs = {
  1: Rank1,
  2: Rank2,
  3: Rank3,
  4: Rank4,
  5: Rank5,
  6: Rank6,
};

export default function AniHeader() {
  const { data, error, isLoading, isFetching } = useCharacterPoints();
  const colors = [
    "bg-[#c36a6a]",
    "bg-[#0b5586]",
    "bg-[#48b9d7]",
    "bg-[#e6a3be]",
    "bg-[#c7801b]",
    "bg-[#8a8a8a]",
  ];
  return (
    <header className={styles.header}>
      <div className={styles.titleSection}>
        <div className={styles.mainTitleImage}>
          <Image
            src="/images/ani/Asset 8.png"
            alt="HARUMIO ALIEN STAGE CELEBRATION MONTH"
            width={800}
            height={200}
            className={styles.titleImg}
            priority
          />
        </div>
        <p className={styles.subtitle}>
          JOIN THE MONTH-LONG EXCLUSIVE FAN EVENT!
        </p>
        <div className={styles.eventDates}>SEPTEMBER 20 - OCTOBER 26</div>
      </div>
      <div className={styles.banner}>
        {(() => {
          const sorted = data
            ?.sort((a, b) => b.adjusted_net_points - a.adjusted_net_points) ?? [];
          const maxPoints = Math.max(
            1,
            ...sorted.map((i) => Number(i.adjusted_net_points) || 0)
          );
          return sorted.map((b, index) => {
            const widthPct = Math.max(
              8,
              Math.round(((Number(b.adjusted_net_points) || 0) / maxPoints) * 100)
            );
            const scaleX = Math.max(
              1,
              Math.round(((Number(b.adjusted_net_points) || 0) / maxPoints) * 10)
            );
            const color = colors[index % colors.length];
            const rankImg = RankImgs[(index + 1) as keyof typeof RankImgs];
            const charNewPath = getCharacterImgPath(b.character_name);
            const LEFT_SECTION_PCT = 36; // reserved left area for portrait + name
            // Calculate progress width for the right section only (excluding left portrait area)
            const rightSectionPct = 100 - LEFT_SECTION_PCT;
            // Use discrete scale (1x..10x) to map to right section width so 1x,2x khác nhau rõ ràng
            const progressBarWidthPct = (scaleX / 10) * rightSectionPct;
            // Position multiplier at the end of progress bar (starting from LEFT_SECTION_PCT)
            const progressBarEndPct = LEFT_SECTION_PCT + progressBarWidthPct;
            const multiplierLeftPct = Math.max(progressBarEndPct, LEFT_SECTION_PCT + 6);
            return (
              <div key={b.character_name} className="relative w-full my-3">

                {/* Rank badge as separate overlay: half inside, half outside on the left */}
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 z-30">
                  <Image src={rankImg} alt={`#${index + 1}`} fill sizes="64px" className="object-contain" priority />
                </div>

                {/* Progress bar - full width, with two overlays from the same image */}
                <div className="relative h-28 md:h-32 rounded-md overflow-hidden">
                  {/* Left section background - same color as progress bar */}
                  <div
                    className={`absolute top-0 bottom-0 z-5 ${color} saturate-150 brightness-110 transition-all duration-1000 ease-out`}
                    style={{ 
                      width: `${LEFT_SECTION_PCT}%`, 
                      opacity: widthPct >= 100 ? 0.7 : 1
                    }}
                  />
                  {/* Background faded image just behind the left foreground image */}
                  <div className="absolute top-0 bottom-0 w-[28%] md:w-[24%] pointer-events-none opacity-30 z-20 left-[14%] md:left-[11%]">
                    <Image src={charNewPath} alt={b.character_name} fill sizes="25vw" className="object-cover object-left" priority style={{ objectPosition: "left 35% center" }} />
                  </div>

                  {/* Right section background */}
                  <div
                    className="absolute top-0 bottom-0 right-0 bg-white/5 z-5"
                    style={{ left: `${LEFT_SECTION_PCT}%` }}
                  />
                  {/* Colored overlay for progress - starts from right of portrait area */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 z-10 ${color} transition-all duration-1000 ease-out saturate-150 brightness-110`}
                    style={{
                      left: `${LEFT_SECTION_PCT}%`,
                      width: `${progressBarWidthPct}%`,
                      opacity: widthPct >= 100 ? 0.7 : 1
                    }}
                  />

                  {/* Horizontal gradient overlay across the middle of the progress bar */}
                  <div
                    className="absolute top-0 bottom-0 z-20 pointer-events-none"
                    style={{
                      left: `${LEFT_SECTION_PCT}%`,
                      width: `${progressBarWidthPct}%`,
                      background: "linear-gradient(to right, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.2) 80%, rgba(255,255,255,0.0) 100%)"
                    }}
                  />

                  {/* Lighter overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-transparent pointer-events-none" />

                  {/* Foreground crisp image anchored to the left, overlaying the bar */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[28%] md:w-[24%] pointer-events-none z-30"
                    style={{
                      left: b.character_name.toLowerCase() === "mizi" || b.character_name.toLowerCase() === "hyuna" ? "40px" : 0,
                      WebkitMaskImage:
                        "linear-gradient(to right, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
                      maskImage:
                        "linear-gradient(to right, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
                    }}
                  >
                    <Image src={charNewPath} alt={b.character_name} fill sizes="25vw" className="object-cover object-left" priority style={{ objectPosition: "left 35% center" }} />
                  </div>

                  {/* Labels - text overlaying the bar */}
                  <div className="absolute inset-0 flex items-center z-40">
                    {/* Name sits over the left image with a small gap from the rank badge */}
                    <div className="pl-12 md:pl-16">
                      <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8),0_0_8px_rgba(0,0,0,0.6)] font-extrabold tracking-wide text-4xl md:text-5xl lg:text-6xl select-none">
                        {b.character_name.toUpperCase()}
                      </span>
                    </div>
                    {/* Multiplier pinned to the right edge of the current bar fill */}
                    <div
                      className="absolute top-0 bottom-0 z-50 flex items-center"
                      style={{ left: `${multiplierLeftPct}%`, transform: "translateX(-100%)" }}
                    >
                      <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8),0_0_8px_rgba(0,0,0,0.6)] font-extrabold text-4xl md:text-5xl lg:text-6xl select-none leading-none">
                        {scaleX}x
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          });
        })()}
      </div>
    </header>
  );
}
