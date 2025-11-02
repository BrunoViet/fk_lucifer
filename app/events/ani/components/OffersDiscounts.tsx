"use client";
import { cn, formatThousand } from "@/lib/utils";
import Image from "next/image";
import PointsBg from "@/public/images/ani/offers_bg.png";
import PointsArrow from "@/public/images/ani/points_arrow.png";
import Carousel, { CarouselRef } from "@/components/carousel";
import { useRef, useState } from "react";
import { useProducts } from "@/hooks/useProducts";
import { Loader, ChevronDown, ChevronUp } from "lucide-react";
import ImageWithViewDialog from "./ImageWithViewDialog";
import { AddToCartButton, ProductProvider } from "@shopify/hydrogen-react";

const Goods = [
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

type Good = ReturnType<typeof useProducts>["products"][number];

const GoodsCount = 6;

export default function OffersDiscounts({
  onOpenCartDrawer,
}: {
  onOpenCartDrawer: () => void;
}) {
  const [isExpanded, setIsExpanded] = useState(true);
  const carouselRef = useRef<CarouselRef>(null);
  const { products, loading, error } = useProducts(Goods);

  //   把Goods数组切分成每页GoodsCount个商品
  function bunkGoods(Goods: Good[]): Good[][] {
    const result: Good[][] = [];
    for (let i = 0; i < Goods.length; i += GoodsCount) {
      result.push(Goods.slice(i, i + GoodsCount));
    }
    return result;
  }

  return (
    <section className="w-full m-[2rem_0]">
      <div className="w-full" style={{ position: "relative" }}>
        <Image
          src="/images/ani/offers_title.png"
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
      <div className="w-full relative flex justify-center items-center">
        <Image
          src={PointsArrow}
          alt="Points Arrow"
          quality={100}
          priority={true}
          onClick={() => carouselRef.current?.goToPrev()}
          className="absolute top-2/5 left-2 max-sm:left-1 h-1/8 w-auto cursor-pointer z-10"
        />
        <Image
          src={PointsArrow}
          alt="Points Arrow"
          quality={100}
          priority={true}
          onClick={() => carouselRef.current?.goToNext()}
          className="absolute top-2/5 right-2 max-sm:right-1 h-1/8 w-auto transform rotate-180 cursor-pointer z-10"
        />
        <Image
          src={PointsBg}
          alt="Points Background"
          quality={100}
          priority={true}
          className="w-full h-full object-cover"
        />
        {loading && (
          <div className="py-2 px-2">
            <div className="flex items-center justify-center h-20">
              {/* 加载中图标 */}
              <Loader className="animate-spin w-6 h-6" />
            </div>
          </div>
        )}
        {!loading && !error && (
          <div className="h-full flex items-center absolute inset-0 left-0 right-0 py-20 max-sm:py-6 pl-16 pr-16 max-sm:pl-12 max-sm:pr-12">
            <Carousel
              options={{ loop: true }}
              ref={carouselRef}
              className="w-full h-full"
            >
              {/* 每一页GoodsCount个商品 */}
              {bunkGoods(products).map((goods, index) => (
                <Carousel.Slide key={index} className="w-full h-full">
                  <div
                    className={cn(
                      `grid grid-cols-3 gap-8 max-sm:gap-2 w-full h-full auto-rows-fr`
                    )}
                  >
                    {goods.map((product, index) => {
                      const firstVariant = product.variants.nodes[0];
                      return (
                        <div
                          key={index}
                          className="flex flex-col h-full items-center justify-between"
                        >
                          {/* 最多两行，超出隐藏 */}
                          <div className="text-center text-xl max-sm:text-[8px] line-clamp-2">
                            {product.title}
                          </div>
                          <ImageWithViewDialog
                            src={firstVariant.image.url}
                            alt={firstVariant.image.altText || ""}
                            className="w-full h-[60%] object-cover aspect-square"
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
        )}
      </div>
      </>
      )}
    </section>
  );
}
