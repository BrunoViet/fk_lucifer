"use client";

import { Store } from "lucide-react";
import { EVENT_BG_IMGS } from "../constant";
import Image from "next/image";

export default function BuyNowButton({
  onOpenCartDrawer,
}: {
  onOpenCartDrawer: () => void;
}) {
  return (
    <div className="w-full flex justify-between items-center">
      <div
        className="bg-green-600 w-fit p-1 mx-auto cursor-pointer hover:bg-green-500"
        onClick={onOpenCartDrawer}
      >
        <div className="text-white border-3 border-white text-center  flex items-center gap-1 w-fit px-4 py-1 mx-auto font-bold text-md relative">
          <Image
            src={EVENT_BG_IMGS.shoppingCart}
            alt=""
            className="w-5 h-5 object-center"
            quality={100}
            priority={true}
          />
          <div>BUY NOW</div>
        </div>
      </div>
      <div
        className="bg-blue-600 w-fit p-1 mx-auto cursor-pointer hover:bg-blue-500"
        onClick={() => {
          window.open(
            "https://www.harum.io/collections/alien-stage-rabbit-baby-series",
            "_blank"
          );
        }}
      >
        <div className="text-white border-3 border-white text-center  flex items-center gap-1 w-fit px-4 py-1 mx-auto font-bold text-md relative">
          <Store className="w-5 h-5" />
          <div>View Store</div>
        </div>
      </div>
    </div>
  );
}
