"use client";
import Image from "next/image";
import styles from "@/app/events/ani/styles.module.css";
import GMizi from "@/public/images/ani/g_mizi.png";
import GSua from "@/public/images/ani/g_sua.png";
import GTill from "@/public/images/ani/g_till.png";
import GIvan from "@/public/images/ani/g_ivan.png";
import GHyuna from "@/public/images/ani/g_hyuna.png";
import GLuka from "@/public/images/ani/g_luka.png";
import MiziArrow from "@/public/images/ani/mizi_arrow.png";
import SuaArrow from "@/public/images/ani/sua_arrow.png";
import TillArrow from "@/public/images/ani/till_arrow.png";
import IvanArrow from "@/public/images/ani/ivan_arrow.png";
import HyunaArrow from "@/public/images/ani/hyuna_arrow.png";
import LukaArrow from "@/public/images/ani/luka_arrow.png";
import Carousel, { CarouselRef } from "@/components/carousel";
import { useRef, useState } from "react";
import { useProducts } from "@/hooks/useProducts";
import { Loader, ChevronDown, ChevronUp } from "lucide-react";
import ImageWithViewDialog from "./ImageWithViewDialog";
import { AddToCartButton, ProductProvider } from "@shopify/hydrogen-react";

const Bgs = {
  mizi: GMizi,
  sua: GSua,
  till: GTill,
  ivan: GIvan,
  hyuna: GHyuna,
  luka: GLuka,
};

const Arrows = {
  mizi: MiziArrow,
  sua: SuaArrow,
  till: TillArrow,
  ivan: IvanArrow,
  hyuna: HyunaArrow,
  luka: LukaArrow,
};

const Goods = {
  mizi: [
    "8744574288024",
    "8729796608152",
    "8744567013528",
    "8753963892888",
    "8797341057176",
  ],
  sua: ["8797337878680", "8797333323928", "8796219080856", "8796215771288"],
  till: [
    "8795356692632",
    "8763151057048",
    "8763326824600",
    "8763301429400",
    "8763143061656",
  ],
  ivan: [
    "8797916954776",
    "8797926588568",
    "8797960667288",
    "8797959422104",
    "8797956243608",
    "8797955293336",
    "8797952606360",
  ],
  hyuna: ["8797945888920", "8797938712728"],
  luka: ["8797928685720"],
};

export default function FactionGoods({
  onOpenCartDrawer,
}: {
  onOpenCartDrawer: () => void;
}) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <section className={styles.factionGoodsSection}>
      <div className={styles.sectionHeaderImage} style={{ position: "relative" }}>
        <Image
          src="/images/ani/Asset 15.png"
          alt="Faction Goods"
          width={800}
          height={200}
          sizes="(max-width: 768px) 100vw, 500px"
          className={styles.fullWidthImg}
        />
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute top-1/2 -translate-y-1/2 left-4 z-20 bg-black/70 hover:bg-black/90 text-white hover:text-gray-300 transition-all duration-300 flex items-center justify-center p-3 md:p-4 rounded-full"
          aria-label={isExpanded ? "Collapse section" : "Expand section"}
        >
          {isExpanded ? (
            <ChevronUp className="w-10 h-10 md:w-12 md:h-12" />
          ) : (
            <ChevronDown className="w-10 h-10 md:w-12 md:h-12" />
          )}
        </button>
      </div>
      {isExpanded && (
        <div className={styles.goodsGrid}>
        {Object.keys(Goods).map((key) => {
          return (
            <GridItem
              name={key}
              key={key}
              onOpenCartDrawer={onOpenCartDrawer}
            />
          );
        })}
        </div>
      )}
    </section>
  );
}

const GridItem = ({
  name,
  onOpenCartDrawer,
}: {
  name: string;
  onOpenCartDrawer: () => void;
}) => {
  const carouselRef = useRef<CarouselRef | null>(null);
  const { products, loading, error } = useProducts(
    Goods[name as keyof typeof Goods]
  );
  if (loading) {
    return (
      <div className="py-2 px-2">
        <div className="flex items-center justify-center h-20">
          {/* 加载中图标 */}
          <Loader className="animate-spin w-6 h-6" />
        </div>
      </div>
    );
  }
  return (
    <div className="relative w-full h-full">
      <Image
        src={Arrows[name as keyof typeof Arrows]}
        alt={name}
        quality={100}
        priority={true}
        onClick={() => carouselRef.current?.goToPrev()}
        className="absolute top-1/2 left-0 h-1/6 w-auto cursor-pointer z-10"
      />
      <Image
        src={Arrows[name as keyof typeof Arrows]}
        alt={name}
        quality={100}
        priority={true}
        onClick={() => carouselRef.current?.goToNext()}
        className="absolute top-1/2 right-0 h-1/6 w-auto transform rotate-180 cursor-pointer z-10"
      />
      <Image
        src={Bgs[name as keyof typeof Bgs]}
        alt={name}
        quality={100}
        priority={true}
      />
      <div className="w-full h-full absolute top-0 left-0 p-2 flex justify-center items-center flex-col gap-1">
        <div className="w-[60%] h-[70%] pt-2 max-sm:pt-1">
          <Carousel options={{ loop: true }} ref={carouselRef}>
            {products.map((product, index) => {
              const firstVariant = product.variants.nodes[0];
              return (
                <Carousel.Slide key={product.id}>
                  {/* 最多两行，超出隐藏 */}
                  <div className="text-center text-xl max-sm:text-[10px] line-clamp-2">
                    {product.title}
                  </div>
                  <div className="h-[40%] max-h-[40%] w-full overflow-hidden">
                    <ImageWithViewDialog
                      src={firstVariant.image.url}
                      alt={firstVariant.image.altText || ""}
                    />
                  </div>
                  <div className="text-center text-2xl md:text-3xl max-sm:text-sm font-bold text-white bg-pink-500 px-4 py-2 rounded-lg shadow-lg">
                    $ {product.priceRange.minVariantPrice.amount}
                  </div>
                  <ProductProvider data={product}>
                    <AddToCartButton
                      variantId={firstVariant.id}
                      className="text-center text-lg md:text-xl max-sm:text-sm font-bold text-white bg-[#d11c45] hover:bg-[#b91c3c] px-4 py-3 rounded-lg cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 w-full"
                      onClick={() => {
                        onOpenCartDrawer();
                      }}
                    >
                      ADD TO CART
                    </AddToCartButton>
                  </ProductProvider>
                </Carousel.Slide>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};
