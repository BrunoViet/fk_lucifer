"use client";
import React from "react";
import { Toaster } from "sonner";
import EventPage from "./components/EventPage";
import { CartDrawer } from "./components/CartDrawer";
import { useCartDrawer } from "../hooks/useCartDrawer";
import { useCart } from "@shopify/hydrogen-react";
import { ShoppingCart } from "lucide-react";
import AniPage from "./events/ani/AniPage";

/**
 * 主应用组件
 * 集成移动端页面和桌面端手机边框效果
 */
function App() {
  const { isOpen, openDrawer, closeDrawer } = useCartDrawer();
  const { totalQuantity } = useCart();

  return (
    <div className="relative h-full bg-[#0a0a0a] flex justify-center items-center">
      {/* 购物车按钮 */}
      <button
        onClick={openDrawer}
        className="fixed top-1/3 right-3 z-30 bg-[#d11c45] text-white p-2 rounded-full shadow-lg hover:bg-[#b91c3c] transition-colors"
      >
        <div className="relative">
          <ShoppingCart className="w-5 h-5" />
          {Number(totalQuantity) > 0 && (
            <span className="absolute -top-1 -right-1 bg-white text-[#d11c45] text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
              {Number(totalQuantity)}
            </span>
          )}
        </div>
      </button>

      {/* <EventPage onOpenCartDrawer={openDrawer} /> */}
      <AniPage onOpenCartDrawer={openDrawer}/>
      <Toaster />

      {/* 购物车抽屉 */}
      <CartDrawer isOpen={isOpen} onClose={closeDrawer} />
    </div>
  );
}

export default App;
