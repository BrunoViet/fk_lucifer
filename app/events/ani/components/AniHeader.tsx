import styles from "@/app/events/ani/styles.module.css";
import Image from "next/image";
import Till from "@/public/images/ani/till.png";
import Ivan from "@/public/images/ani/ivan.png";
import Sua from "@/public/images/ani/sua.png";
import Mizi from "@/public/images/ani/mizi.png";
import Hyuna from "@/public/images/ani/hyuna.png";
import Luka from "@/public/images/ani/luka.png";
import Rank1 from "@/public/images/ani/rank1.png";
import Rank2 from "@/public/images/ani/rank2.png";
import Rank3 from "@/public/images/ani/rank3.png";
import Rank4 from "@/public/images/ani/rank4.png";
import Rank5 from "@/public/images/ani/rank5.png";
import Rank6 from "@/public/images/ani/rank6.png";
import { formatThousand } from "@/lib/utils";
import { useCharacterPoints } from "@/hooks/query/useCharacterPoints";

const BannerImgs = {
  till: Till,
  ivan: Ivan,
  sua: Sua,
  mizi: Mizi,
  hyuna: Hyuna,
  luka: Luka,
};

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
            const charImg =
              BannerImgs[
                b.character_name.toLowerCase() as keyof typeof BannerImgs
              ];
            return (
              <div key={b.character_name} className="relative w-full my-2 flex items-stretch gap-3">
                {/* Rank badge */}
                <div className="flex-none self-stretch grid place-items-center z-10">
                  <Image src={rankImg} alt={`#${index + 1}`} quality={100} priority className="h-28 w-28 md:h-32 md:w-32 object-contain" />
                </div>

                {/* Progress bar - full width, character image always visible */}
                <div className="relative flex-1 h-28 md:h-32 rounded-md overflow-hidden">
                  {/* Character image - full bar, always visible */}
                  <div className="absolute inset-0 pointer-events-none opacity-25">
                    <Image
                      src={charImg}
                      alt={b.character_name}
                      fill
                      sizes="100vw"
                      className="object-cover object-left"
                      priority
                      style={{
                        objectPosition: "left center",
                      }}
                    />
                  </div>

                  {/* Colored overlay for progress - prominent, shows progress width */}
                  {/* When progress reaches max (100%), reduce opacity to highlight character image */}
                  <div 
                    className={`h-full ${color} transition-all duration-1000 ease-out`}
                    style={{ 
                      width: `${widthPct}%`,
                      opacity: widthPct >= 100 ? 0.4 : 0.85
                    }}
                  />

                  {/* Lighter overlay for better text readability - reduced opacity for clearer image */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent pointer-events-none" />

                  {/* Labels - text overlaying the bar */}
                  <div className="absolute inset-0 flex items-center z-10">
                    <div className="px-4">
                      <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8),0_0_8px_rgba(0,0,0,0.6)] font-extrabold tracking-wide text-3xl select-none">
                        {b.character_name.toUpperCase()}
                      </span>
                    </div>
                    <div className="ml-auto pr-4">
                      <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8),0_0_8px_rgba(0,0,0,0.6)] font-extrabold text-3xl select-none">
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
