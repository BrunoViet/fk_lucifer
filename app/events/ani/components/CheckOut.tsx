import Image from "next/image";
import CheckoutBtn from "@/public/images/ani/checkout.png";
import ViewStore from "@/public/images/ani/viewstore.png";
import { useCart } from "@shopify/hydrogen-react";
import { cn } from "@/lib/utils";
export const CheckOut = () => {
  const { checkoutUrl, status } = useCart();
  const canCheckout = checkoutUrl && status !== "updating";
  return (
    <div className="w-full flex justify-center items-center pb-20">
      <Image
        src={CheckoutBtn}
        alt="Checkout Button"
        quality={100}
        priority={true}
        // 鼠标悬停、点击时放大一点点
        className={cn(
          "w-2/5 h-full object-cover hover:scale-110 active:scale-110 transition-all duration-300 ease-in-out",
          canCheckout ? "cursor-pointer" : "cursor-not-allowed"
        )}
        onClick={() => {
          if (canCheckout) {
            window.location.href = checkoutUrl;
          }
        }}
      />
      <Image
        src={ViewStore}
        alt="View Store Button"
        quality={100}
        priority={true}
        className="w-2/5 h-full object-cover hover:scale-110 active:scale-110 transition-all duration-300 ease-in-out"
        onClick={() => {
          window.open("https://www.harum.io/", "_blank");
        }}
      />
    </div>
  );
};
