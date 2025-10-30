import { cn, formatThousand } from "@/lib/utils";
import Image from "next/image";
import PointsBg from "@/public/images/ani/offers_bg.png";
import PointsArrow from "@/public/images/ani/points_arrow.png";
import Carousel, { CarouselRef } from "@/components/carousel";
import { useRef } from "react";
import { useProducts } from "@/hooks/useProducts";
import { Loader } from "lucide-react";
import ImageWithViewDialog from "./ImageWithViewDialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
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
      <div className="w-full">
        <Image
          src="/images/ani/offers_title.png"
          alt="Faction Goods"
          width={800}
          height={200}
          sizes="(max-width: 768px) 100vw, 500px"
          className="w-full block h-auto"
        />
      </div>
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
          <div className="w-[70%] h-full flex items-center absolute inset-0 left-[15%] py-20 max-sm:py-6">
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
    </section>
  );
}
