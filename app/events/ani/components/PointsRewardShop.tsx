import { cn, formatThousand } from "@/lib/utils";
import Image from "next/image";
import PointsBg from "@/public/images/ani/points_bg.png";
import PointsArrow from "@/public/images/ani/points_arrow.png";
import Carousel, { CarouselRef } from "@/components/carousel";
import { useRef } from "react";
import { usePointsByEmail } from "@/hooks/query/usePointsByEmail";
import { useCustomer } from "@/hooks/useCustomer";
import { Loader } from "lucide-react";

const PointsGoods = [
  {
    img: "https://cdn.shopify.com/s/files/1/1374/2665/files/IMG_7527_x600.jpg?v=1752218912",
    name: "Alien Stage Plush Doll THEME SERIES MIZI",
    price: 10000,
    url: "",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1374/2665/files/alienstagesunnydoll-instafb-1080x1080_1_x600.png?v=1750407553",
    name: "Alien Stage Plush Doll THEME SERIES MIZI 2",
    price: 20000,
    url: "",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1374/2665/files/3_33d6e32f-9f96-4454-9465-b765d7920eb2_x600.png?v=1750407711",
    name: "Alien Stage Plush Doll THEME SERIES SUA",
    price: 10000,
    url: "",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1374/2665/files/IMG_7527_x600.jpg?v=1752218912",
    name: "Alien Stage Plush Doll THEME SERIES SUA 2",
    price: 20000,
    url: "",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1374/2665/files/1_33089f96-8694-48fb-ad80-9ec7c268a5b4_x600.png?v=1750570732",
    name: "Alien Stage Plush Doll THEME SERIES TILL",
    price: 10000,
    url: "",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1374/2665/files/1_33089f96-8694-48fb-ad80-9ec7c268a5b4_x600.png?v=1750570732",
    name: "Alien Stage Plush Doll THEME SERIES Ivan",
    price: 10000,
    url: "",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1374/2665/files/6394975C-CF6E-4EA2-81CC-EBEFF74F6800_x600.jpg?v=1754711062",
    name: "Alien Stage Plush Doll THEME SERIES Ivan 2",
    price: 20000,
    url: "",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1374/2665/files/6394975C-CF6E-4EA2-81CC-EBEFF74F6800_x600.jpg?v=1754711062",
    name: "Alien Stage Plush Doll THEME SERIES Ivan 3",
    price: 30000,
    url: "",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1374/2665/files/6394975C-CF6E-4EA2-81CC-EBEFF74F6800_x600.jpg?v=1754711062",
    name: "Alien Stage Plush Doll THEME SERIES Hyuna",
    price: 10000,
    url: "",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1374/2665/files/6394975C-CF6E-4EA2-81CC-EBEFF74F6800_x600.jpg?v=1754711062",
    name: "Alien Stage Plush Doll THEME SERIES Hyuna 2",
    price: 20000,
    url: "",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1374/2665/files/6394975C-CF6E-4EA2-81CC-EBEFF74F6800_x600.jpg?v=1754711062",
    name: "Alien Stage Plush Doll THEME SERIES Hyuna 3",
    price: 30000,
    url: "",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1374/2665/files/6394975C-CF6E-4EA2-81CC-EBEFF74F6800_x600.jpg?v=1754711062",
    name: "Alien Stage Plush Doll THEME SERIES Hyuna 4",
    price: 40000,
    url: "",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1374/2665/files/6394975C-CF6E-4EA2-81CC-EBEFF74F6800_x600.jpg?v=1754711062",
    name: "Alien Stage Plush Doll THEME SERIES Luka",
    price: 10000,
    url: "https://cdn.shopify.com/s/files/1/1374/2665/files/6394975C-CF6E-4EA2-81CC-EBEFF74F6800_x600.jpg?v=1754711062",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1374/2665/files/6394975C-CF6E-4EA2-81CC-EBEFF74F6800_x600.jpg?v=1754711062",
    name: "Alien Stage Plush Doll THEME SERIES Luka 2",
    price: 20000,
    url: "",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1374/2665/files/6394975C-CF6E-4EA2-81CC-EBEFF74F6800_x600.jpg?v=1754711062",
    name: "Alien Stage Plush Doll THEME SERIES Luka 3",
    price: 30000,
    url: "",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1374/2665/files/6394975C-CF6E-4EA2-81CC-EBEFF74F6800_x600.jpg?v=1754711062",
    name: "Alien Stage Plush Doll THEME SERIES Luka 4",
    price: 40000,
    url: "",
  },
];

type Goods = {
  img: string;
  name: string;
  price: number;
  url: string;
};

const GoodsCount = 6;

export default function PointsRewardShop() {
  const carouselRef = useRef<CarouselRef>(null);
  const { customer } = useCustomer();
  const { data, error, isLoading } = usePointsByEmail(customer?.emailAddress);

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
      <div className="w-full">
        <Image
          src="/images/ani/points_title.png"
          alt="Faction Goods"
          width={800}
          height={200}
          sizes="(max-width: 768px) 100vw, 500px"
          className="w-full block h-auto"
        />
      </div>
      <div className="w-full relative">
        <Image
          src="/images/ani/points_current.png"
          alt="Faction Goods"
          width={800}
          height={200}
          className="w-full block h-auto translate-x-8"
        />
        <div className="absolute text-4xl max-sm:text-xl font-bold top-1/2 max-sm:top-[40%] max-sm:left-[40%] left-[35%]">
          {isLoading && <Loader className="inline-block animate-spin" />}
          {data && formatThousand(data[0]?.current_points || 0)}
        </div>
      </div>
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
        <div className="w-[70%] h-full flex items-center absolute inset-0 left-[15%] py-20 max-sm:py-6">
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
                      <div className="text-center text-xl max-sm:text-[10px]">
                        {good.price} Pts
                      </div>
                      <div className="text-center text-xl max-sm:text-[10px] bg-black p-2 max-sm:p-0 cursor-pointer hover:bg-gray-800 transition-colors">
                        ADD TO CART
                      </div>
                    </div>
                  ))}
                </div>
              </Carousel.Slide>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
