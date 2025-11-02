"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import PointsBg from "@/public/images/ani/points_bg.png";
import PointsArrow from "@/public/images/ani/points_arrow.png";
import Carousel, { CarouselRef } from "@/components/carousel";
import { useRef, useState } from "react";
import { ChevronDown, ChevronUp, Loader } from "lucide-react";
import { useProducts } from "@/hooks/useProducts";
import { AddToCartButton, ProductProvider } from "@shopify/hydrogen-react";

const PointsGoods = [
  {
    img: "https://cdn.shopify.com/s/files/1/1374/2665/files/IMG_7527_x600.jpg?v=1752218912",
    name: "Alien Stage Plush Doll THEME SERIES MIZI",
    price: 10000,
    url: "",
    productId: "8744574288024", // Add Shopify product ID here if available
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1374/2665/files/alienstagesunnydoll-instafb-1080x1080_1_x600.png?v=1750407553",
    name: "Alien Stage Plush Doll THEME SERIES MIZI 2",
    price: 20000,
    url: "",
    productId: "8729796608152",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1374/2665/files/3_33d6e32f-9f96-4454-9465-b765d7920eb2_x600.png?v=1750407711",
    name: "Alien Stage Plush Doll THEME SERIES SUA",
    price: 10000,
    url: "",
    productId: "8744567013528",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1374/2665/files/IMG_7527_x600.jpg?v=1752218912",
    name: "Alien Stage Plush Doll THEME SERIES SUA 2",
    price: 20000,
    url: "",
    productId: "",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1374/2665/files/1_33089f96-8694-48fb-ad80-9ec7c268a5b4_x600.png?v=1750570732",
    name: "Alien Stage Plush Doll THEME SERIES TILL",
    price: 10000,
    url: "",
    productId: "",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1374/2665/files/1_33089f96-8694-48fb-ad80-9ec7c268a5b4_x600.png?v=1750570732",
    name: "Alien Stage Plush Doll THEME SERIES Ivan",
    price: 10000,
    url: "",
    productId: "",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1374/2665/files/6394975C-CF6E-4EA2-81CC-EBEFF74F6800_x600.jpg?v=1754711062",
    name: "Alien Stage Plush Doll THEME SERIES Ivan 2",
    price: 20000,
    url: "",
    productId: "",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1374/2665/files/6394975C-CF6E-4EA2-81CC-EBEFF74F6800_x600.jpg?v=1754711062",
    name: "Alien Stage Plush Doll THEME SERIES Ivan 3",
    price: 30000,
    url: "",
    productId: "",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1374/2665/files/6394975C-CF6E-4EA2-81CC-EBEFF74F6800_x600.jpg?v=1754711062",
    name: "Alien Stage Plush Doll THEME SERIES Hyuna",
    price: 10000,
    url: "",
    productId: "",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1374/2665/files/6394975C-CF6E-4EA2-81CC-EBEFF74F6800_x600.jpg?v=1754711062",
    name: "Alien Stage Plush Doll THEME SERIES Hyuna 2",
    price: 20000,
    url: "",
    productId: "",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1374/2665/files/6394975C-CF6E-4EA2-81CC-EBEFF74F6800_x600.jpg?v=1754711062",
    name: "Alien Stage Plush Doll THEME SERIES Hyuna 3",
    price: 30000,
    url: "",
    productId: "",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1374/2665/files/6394975C-CF6E-4EA2-81CC-EBEFF74F6800_x600.jpg?v=1754711062",
    name: "Alien Stage Plush Doll THEME SERIES Hyuna 4",
    price: 40000,
    url: "",
    productId: "",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1374/2665/files/6394975C-CF6E-4EA2-81CC-EBEFF74F6800_x600.jpg?v=1754711062",
    name: "Alien Stage Plush Doll THEME SERIES Luka",
    price: 10000,
    url: "https://cdn.shopify.com/s/files/1/1374/2665/files/6394975C-CF6E-4EA2-81CC-EBEFF74F6800_x600.jpg?v=1754711062",
    productId: "",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1374/2665/files/6394975C-CF6E-4EA2-81CC-EBEFF74F6800_x600.jpg?v=1754711062",
    name: "Alien Stage Plush Doll THEME SERIES Luka 2",
    price: 20000,
    url: "",
    productId: "",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1374/2665/files/6394975C-CF6E-4EA2-81CC-EBEFF74F6800_x600.jpg?v=1754711062",
    name: "Alien Stage Plush Doll THEME SERIES Luka 3",
    price: 30000,
    url: "",
    productId: "",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1374/2665/files/6394975C-CF6E-4EA2-81CC-EBEFF74F6800_x600.jpg?v=1754711062",
    name: "Alien Stage Plush Doll THEME SERIES Luka 4",
    price: 40000,
    url: "",
    productId: "",
  },
];

type Goods = {
  img: string;
  name: string;
  price: number;
  url: string;
  productId?: string; // Optional Shopify product ID
};

const GoodsCount = 6;

type Good = ReturnType<typeof useProducts>["products"][number];

export default function PointsRewardShop({
  onOpenCartDrawer,
}: {
  onOpenCartDrawer: () => void;
}) {
  const [isExpanded, setIsExpanded] = useState(true);
  const carouselRef = useRef<CarouselRef>(null);
  
  // Extract product IDs from PointsGoods
  const productIds = PointsGoods.map(good => good.productId).filter((id): id is string => !!id);
  const { products, loading, error } = useProducts(productIds);
  
  // Create a map of product ID to Shopify product for quick lookup
  const productMap = new Map(products.map(p => {
    // Extract numeric ID from GID format: "gid://shopify/Product/123456" -> "123456"
    const numericId = p.id.split('/').pop() || '';
    return [numericId, p];
  }));

  //   把Goods数组切分成每页GoodsCount个商品
  function bunkGoods(Goods: Goods[]): Goods[][] {
    const result: Goods[][] = [];
    for (let i = 0; i < Goods.length; i += GoodsCount) {
      result.push(Goods.slice(i, i + GoodsCount));
    }
    return result;
  }

  return (
    <section className="w-full m-[2rem_0]">
      <div className="w-full" style={{ position: "relative" }}>
        <Image
          src="/images/ani/points_title.png"
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
          className="absolute top-2/5 -left-2 max-sm:-left-[0.1rem] h-1/8 w-auto cursor-pointer z-10"
        />
        <Image
          src={PointsArrow}
          alt="Points Arrow"
          quality={100}
          priority={true}
          onClick={() => carouselRef.current?.goToNext()}
          className="absolute top-2/5 -right-1 max-sm:-right-[0.2rem] h-1/8 w-auto transform rotate-180 cursor-pointer z-10"
        />
        <Image
          src={PointsBg}
          alt="Points Background"
          quality={100}
          priority={true}
          className="w-full h-full object-cover translate translate-x-2 max-sm:translate-x-1.5"
        />
        <div className="h-full flex items-center absolute inset-0 left-0 right-0 py-20 max-sm:py-6 pl-16 pr-16 max-sm:pl-12 max-sm:pr-12">
          <Carousel
            options={{ loop: true }}
            ref={carouselRef}
            className="w-full h-full"
          >
            {/* 每一页GoodsCount个商品 */}
            {bunkGoods(PointsGoods).map((goods, index) => (
              <Carousel.Slide key={index} className="w-full h-full">
                <div
                  className={cn(
                    `grid grid-cols-3 gap-8 max-sm:gap-2 w-full h-full auto-rows-fr`
                  )}
                >
                  {goods.map((good, index) => (
                    <div
                      key={index}
                      className="flex flex-col h-full items-center justify-between"
                    >
                      {/* 最多两行，超出隐藏 */}
                      <div className="text-center text-xl max-sm:text-[8px] line-clamp-2">
                        {good.name}
                      </div>
                      <Image
                        src={good.img}
                        alt={good.name}
                        width={3}
                        height={3}
                        quality={100}
                        priority={true}
                        className="w-full h-[60%] object-cover aspect-square"
                      />
                      <div className="text-center text-2xl md:text-3xl max-sm:text-sm font-bold text-white bg-pink-500 px-4 py-2 rounded-lg shadow-lg">
                        {good.price} Pts
                      </div>
                      {good.productId && productMap.has(good.productId) ? (
                        <ProductProvider data={productMap.get(good.productId)!}>
                          <AddToCartButton
                            variantId={productMap.get(good.productId)!.variants.nodes[0].id}
                            className="text-center text-lg md:text-xl max-sm:text-sm font-bold text-white bg-[#d11c45] hover:bg-[#b91c3c] px-4 py-3 rounded-lg cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 w-full"
                            onClick={() => {
                              onOpenCartDrawer();
                            }}
                          >
                            ADD TO CART
                          </AddToCartButton>
                        </ProductProvider>
                      ) : (
                        <div 
                          onClick={() => {
                            // If no productId, just open cart drawer
                            onOpenCartDrawer();
                          }}
                          className="text-center text-lg md:text-xl max-sm:text-sm font-bold text-white bg-[#d11c45] hover:bg-[#b91c3c] px-4 py-3 rounded-lg cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                        >
                          ADD TO CART
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Carousel.Slide>
            ))}
          </Carousel>
        </div>
      </div>
      </>
      )}
    </section>
  );
}
