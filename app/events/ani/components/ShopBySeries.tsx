"use client";
import { cn, formatThousand } from "@/lib/utils";
import Image from "next/image";
import AniPlushBg from "@/public/images/ani/shop_aniplus.png";
import ThemeSeriesBg from "@/public/images/ani/shop_theme_series.png";
import RabbitSeriesBg from "@/public/images/ani/shop_rabbit_series.png";
import AnaktGardenBg from "@/public/images/ani/shop_anakt_garden.png";
import BabySeriesBg from "@/public/images/ani/shop_baby_series.png";
import FreeStageBg from "@/public/images/ani/shop_free_stage.png";
import MarchMonsterBg from "@/public/images/ani/shop_march_monster.png";
import RecollectionBg from "@/public/images/ani/shop_recollection.png";
import NewBg from "@/public/images/ani/shop_new.png";
import AetBg from "@/public/images/ani/shop_aet.png";
import PointsArrow from "@/public/images/ani/points_arrow.png";
import Carousel, { CarouselRef } from "@/components/carousel";
import { useCallback, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useProducts } from "@/hooks/useProducts";
import ImageWithViewDialog from "./ImageWithViewDialog";
import { ProductProvider, AddToCartButton } from "@shopify/hydrogen-react";

const testData = [
  "8744574288024",
  "8729796608152",
  "8744567013528",
  "8753963892888",
  "8797341057176",
  "8797337878680",
  "8797333323928",
  "8796219080856",
  "8796215771288",
  "8795356692632",
  "8763151057048",
  "8763326824600",
  "8763301429400",
  "8763143061656",
  "8797916954776",
  "8797926588568",
  "8797960667288",
  "8797959422104",
  "8797956243608",
  "8797955293336",
  "8797952606360",
  "8797945888920",
  "8797938712728",
  "8797928685720",
];
const Goods = [
  {
    bg: AniPlushBg,
    goods: testData,
    alignLeft: false,
  },
  {
    bg: ThemeSeriesBg,
    goods: testData,
    alignLeft: true,
  },
  {
    bg: RabbitSeriesBg,
    goods: testData,
    alignLeft: false,
  },
  {
    bg: AnaktGardenBg,
    goods: testData,
    alignLeft: true,
  },
  {
    bg: AetBg,
    goods: testData,
    alignLeft: false,
  },
  {
    bg: BabySeriesBg,
    goods: testData,
    alignLeft: true,
  },
  {
    bg: RecollectionBg,
    goods: testData,
    alignLeft: false,
  },
  {
    bg: MarchMonsterBg,
    goods: testData,
    alignLeft: true,
  },
  {
    bg: FreeStageBg,
    goods: testData,
    alignLeft: false,
  },
  {
    bg: NewBg,
    goods: testData,
    alignLeft: true,
  },
];

type Good = ReturnType<typeof useProducts>["products"][number];

const GoodsCount = 6;

export default function ShopBySeries({
  onOpenCartDrawer,
}: {
  onOpenCartDrawer: () => void;
}) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <section className="w-full m-[2rem_0]">
      <div className="w-full" style={{ position: "relative" }}>
        <Image
          src="/images/ani/shop_title.png"
          alt="Faction Goods"
          width={800}
          height={200}
          sizes="(max-width: 768px) 100vw, 500px"
          className="w-full block h-auto"
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
      <>
      {Goods.map((goods, index) => (
        <SeriesItem
          key={index}
          goods={goods}
          onOpenCartDrawer={onOpenCartDrawer}
        />
      ))}
      </>
      )}
    </section>
  );
}

const SeriesItem = ({
  goods,
  onOpenCartDrawer,
}: {
  goods: (typeof Goods)[0];
  onOpenCartDrawer: () => void;
}) => {
  const { bg, goods: ids, alignLeft } = goods;
  const carouselRef = useRef<CarouselRef>(null);
  const { products, loading, error } = useProducts(ids);

  //   把Goods数组切分成每页GoodsCount个商品
  function bunkGoods(Goods: Good[]): Good[][] {
    const result: Good[][] = [];
    for (let i = 0; i < Goods.length; i += GoodsCount) {
      result.push(Goods.slice(i, i + GoodsCount));
    }
    return result;
  }

  return (
    <div className="w-full relative flex justify-center items-center">
      <Image
        src={PointsArrow}
        alt="Points Arrow"
        quality={100}
        priority={true}
        onClick={() => carouselRef.current?.goToPrev()}
        className={cn(
          "absolute top-4/9 h-1/8 w-auto cursor-pointer z-10",
          alignLeft ? "left-[12.5%]" : "-left-[1%]"
        )}
      />
      <Image
        src={PointsArrow}
        alt="Points Arrow"
        quality={100}
        priority={true}
        onClick={() => carouselRef.current?.goToNext()}
        className={cn(
          "absolute top-4/9 h-1/8 w-auto transform rotate-180 cursor-pointer z-10",
          alignLeft ? "-right-[1%]" : "right-[12%]"
        )}
      />
      <Image
        src={bg}
        alt="Points Background"
        quality={100}
        priority={true}
        className="w-full h-full object-cover"
      />
      <div
        className={cn(
          "absolute inset-0 flex justify-center items-center left-0 right-0",
          alignLeft && "ml-[12.5%]"
        )}
      >
        <div className="h-[72%] flex items-center mt-[8%] pl-16 pr-16 max-sm:pl-12 max-sm:pr-12 w-full">
          <Carousel
            options={{ loop: true }}
            ref={carouselRef}
            className="w-full h-full"
          >
            {/* 每一页GoodsCount个商品 */}
            {bunkGoods(products).map((chunk, index) => (
              <Carousel.Slide key={index} className="w-full h-full">
                <div
                  className={cn(
                    `grid grid-cols-3 gap-1 w-full h-full auto-rows-fr`
                  )}
                >
                  {chunk.map((product, index) => {
                    const firstVariant = product.variants.nodes[0];
                    return (
                      <div
                        key={index}
                        className="flex flex-col h-full items-center justify-between"
                      >
                        {/* 最多两行，超出隐藏 */}
                        <div className="text-center lg:text-xl md:text-[14px] max-sm:text-[8px] line-clamp-2">
                          {product.title}
                        </div>
                        <ImageWithViewDialog
                          src={firstVariant.image.url}
                          alt={firstVariant.image.altText || ""}
                          className="w-full h-[12vw] max-h-[205px] object-cover aspect-square"
                        />
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
                      </div>
                    );
                  })}
                </div>
              </Carousel.Slide>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};
