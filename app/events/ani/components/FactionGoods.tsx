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
import { BarChart, Loader, Minus, Plus, X } from "lucide-react";
import ImageWithViewDialog from "./ImageWithViewDialog";
import { Button } from "@/components/ui/button";
import {
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
  Drawer,
} from "@/components/ui/drawer";
import { AddToCartButton, ProductProvider } from "@shopify/hydrogen-react";
import { useCartDrawer } from "@/hooks/useCartDrawer";

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
  return (
    <section className={styles.factionGoodsSection}>
      <div className={styles.sectionHeaderImage}>
        <Image
          src="/images/ani/Asset 15.png"
          alt="Faction Goods"
          width={800}
          height={200}
          sizes="(max-width: 768px) 100vw, 500px"
          className={styles.fullWidthImg}
        />
      </div>
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
                  <div className="text-center text-xl max-sm:text-[10px]">
                    $ {product.priceRange.minVariantPrice.amount}
                  </div>
                  <Drawer direction="bottom">
                    <DrawerTrigger asChild>
                      <div className="text-center text-xl max-sm:text-[10px] bg-black p-2 max-sm:p-0 cursor-pointer hover:bg-gray-800 transition-colors">
                        ADD TO CART
                      </div>
                    </DrawerTrigger>
                    <DrawerContent className="h-1/2 mx-auto bg-gray-900 text-white border-t-gray-900">
                      <DrawerHeader>
                        <DrawerTitle className="text-white">
                          {product.title}
                        </DrawerTitle>
                      </DrawerHeader>
                      <div className="px-2 overflow-auto space-y-4">
                        {product.variants.nodes.map((variant) => (
                          <div
                            key={variant.id}
                            className="border border-gray-700 rounded-lg p-4 hover:bg-gray-800 transition-colors bg-gray-850"
                          >
                            <div className="flex items-center space-x-4">
                              {/* 变体图片 */}
                              <div className="flex-shrink-0">
                                <ImageWithViewDialog
                                  src={variant.image.url}
                                  alt={variant.image.altText || ""}
                                  className="w-16 h-16 object-cover rounded-lg cursor-pointer border border-gray-600"
                                />
                              </div>

                              {/* 变体信息 */}
                              <div className="flex-1">
                                <h3 className="font-medium text-gray-100">
                                  {variant.selectedOptions
                                    .map((option) => option.value)
                                    .join(" / ")}
                                </h3>
                                <p className="text-lg font-bold text-white mt-1">
                                  ${variant.price.amount}
                                </p>
                              </div>

                              {/* 添加到购物车按钮 */}
                              <div className="flex-shrink-0">
                                <ProductProvider data={product}>
                                  <AddToCartButton
                                    variantId={variant.id}
                                    className="bg-[#d11c45] hover:bg-[#b91c3c] text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-lg"
                                    onClick={() => {
                                      // 添加到购物车成功后打开购物车
                                      onOpenCartDrawer();
                                    }}
                                  >
                                    Add to Cart
                                  </AddToCartButton>
                                </ProductProvider>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </DrawerContent>
                  </Drawer>
                </Carousel.Slide>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};
