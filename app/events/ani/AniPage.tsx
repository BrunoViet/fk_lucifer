"use client";

import dynamic from "next/dynamic";
import styles from "./styles.module.css";
import AniHeader from "./components/AniHeader";
import Image from "next/image";
import BgImage from "@/public/images/ani/bg.png";
import GridImage from "@/public/images/ani/grid.png";
import RulesSection from "./components/RulesSection";
import FactionGoods from "./components/FactionGoods";
import PointsRewardShop from "./components/PointsRewardShop";
import OffersDiscounts from "./components/OffersDiscounts";
import NewProducts from "./components/NewProducts";
import ShopBySeries from "./components/ShopBySeries";
import { CheckOut } from "./components/CheckOut";
import TermsSection from "./components/TermsSection";
import Comments from "./components/Comments";
import FAQ from "@/app/components/FAQ";
import { FAQ_ANI } from "@/app/constant";

const CustomerAvatar = dynamic(() => import("./components/CustomerAvatar"), {
  ssr: false,
});

export default function AniPage({
  onOpenCartDrawer,
}: {
  onOpenCartDrawer: () => void;
}) {
  return (
    <main className={styles.main}>
      <Image
        src={BgImage}
        alt=""
        className="w-full object-cover absolute top-0 left-0 z-0"
        quality={100}
        priority={true}
      />
      <CustomerAvatar />
      <Image
        src={GridImage}
        alt=""
        className="w-full object-contain transform scale-130 absolute top-0 left-0"
        quality={100}
        priority={true}
      />
      <div className={styles.container}>
        <AniHeader />
        <Comments />
        <RulesSection />
        <FactionGoods onOpenCartDrawer={onOpenCartDrawer} />
        <PointsRewardShop />
        <OffersDiscounts onOpenCartDrawer={onOpenCartDrawer} />
        <NewProducts onOpenCartDrawer={onOpenCartDrawer} />
        <ShopBySeries onOpenCartDrawer={onOpenCartDrawer} />
        <CheckOut />
        <TermsSection />
        <FAQ faqData={FAQ_ANI} className="bg-transparent" />
      </div>
    </main>
  );
}
