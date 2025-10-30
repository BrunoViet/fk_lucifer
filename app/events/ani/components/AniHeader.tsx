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
  const { data, error, isLoading } = useCharacterPoints();
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
        {data
          ?.sort((a, b) => b.adjusted_net_points - a.adjusted_net_points)
          .map((b, index) => (
            <div key={b.character_name} className={styles.bannerItem}>
              <Image
                src={RankImgs[(index + 1) as keyof typeof RankImgs]}
                alt={b.character_name}
                quality={100}
                priority={true}
                className={styles.rank}
              />
              <span className={styles.points}>
                {formatThousand(b.adjusted_net_points)}
              </span>
              <Image
                src={
                  BannerImgs[
                    b.character_name.toLowerCase() as keyof typeof BannerImgs
                  ]
                }
                alt={b.character_name}
                quality={100}
                priority={true}
              />
            </div>
          ))}
      </div>
    </header>
  );
}
