"use client";
import React, { useEffect } from "react";
import { useCart } from "@shopify/hydrogen-react";
import { X, Minus, Plus, ShoppingCart } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
  DrawerFooter,
} from "@/components/ui/drawer";
import { formatAmount } from "./leaderboard-utils";
import Image from "next/image";

interface CartDrawerProps {
  /** 抽屉是否打开 */
  isOpen: boolean;
  /** 关闭抽屉的回调函数 */
  onClose: () => void;
}

/**
 * 购物车抽屉组件
 * 使用 shadcn Drawer 组件实现，显示购物车商品列表和结账功能
 */
export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  // 使用Shopify的购物车hook
  const {
    lines,
    totalQuantity,
    cost,
    linesUpdate,
    linesRemove,
    checkoutUrl,
    status,
  } = useCart();

  // 更新商品数量
  const updateQuantity = (lineId: string, quantity: number) => {
    if (quantity <= 0) {
      linesRemove([lineId]);
    } else {
      linesUpdate([{ id: lineId, quantity }]);
    }
  };

  // 移除商品
  const removeItem = (lineId: string) => {
    linesRemove([lineId]);
  };

  return (
    <Drawer
      open={isOpen}
      direction="right"
      onOpenChange={(open) => !open && onClose()}
    >
      <DrawerContent className="h-full w-full bg-gray-900 border-gray-700">
        {/* 抽屉头部 */}
        <DrawerHeader className="flex items-center justify-between p-4 border-b border-gray-700 bg-gray-800">
          <DrawerTitle className="text-lg font-bold text-white flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Your Cart
              {Number(totalQuantity) > 0 && (
                <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                  {Number(totalQuantity)}
                </span>
              )}
            </div>
            <DrawerClose asChild>
              <button
                onClick={onClose}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </DrawerClose>
          </DrawerTitle>
        </DrawerHeader>

        {/* 商品列表 - 调整高度计算，为底部结算区域预留空间 */}
        <div className="flex-1 overflow-y-auto p-4">
          {(() => {
            // 过滤掉数量为0的商品
            const validLines =
              lines?.filter(
                (line) =>
                  line &&
                  line.merchandise &&
                  line.merchandise.product &&
                  line.quantity &&
                  line.quantity > 0
              ) || [];

            return validLines.length > 0 ? (
              <div className="space-y-4">
                {validLines
                  .filter((l) => l !== undefined)
                  .map((line) => {
                    const variant = line.merchandise!;
                    const product = variant.product;

                    return (
                      <div
                        key={line.id}
                        className="flex gap-2 border border-gray-600 rounded-lg bg-gray-800 justify-center items-center p-2"
                      >
                        {/* 商品图片 */}
                        <div className="w-12 h-12 bg-gray-700 rounded-md overflow-hidden flex-shrink-0">
                          {variant.image && (
                            <Image
                              src={variant.image.url!}
                              alt={
                                variant.image.altText ||
                                product?.title ||
                                "Product image"
                              }
                              className="w-full h-full object-cover"
                              width={100}
                              height={100}
                              quality={100}
                              priority={true}
                            />
                          )}
                        </div>

                        {/* 商品信息 */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xs font-medium text-white line-clamp-2">
                            {product?.title || "Product"}
                          </h3>
                          {variant.selectedOptions &&
                            variant.selectedOptions.length > 0 && (
                              <p className="text-xs text-gray-400 mt-1">
                                {variant.selectedOptions
                                  .map((option) => option?.value)
                                  .filter(Boolean)
                                  .join(", ")}
                              </p>
                            )}
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs font-bold text-blue-400">
                              {variant.price &&
                              variant.price.amount &&
                              variant.price.currencyCode
                                ? formatAmount(parseFloat(variant.price.amount))
                                : "N/A"}
                            </span>
                            <button
                              onClick={() => line.id && removeItem(line.id)}
                              className="text-xs text-red-400 hover:text-red-300"
                            >
                              Remove
                            </button>
                          </div>
                        </div>

                        {/* 数量控制 */}
                        <div className="flex flex-col items-center gap-2">
                          <div className="flex items-center border border-gray-600 rounded bg-gray-700">
                            <button
                              onClick={() =>
                                line.id &&
                                line.quantity &&
                                updateQuantity(line.id, line.quantity - 1)
                              }
                              className="p-1 hover:bg-gray-600 transition-colors text-white"
                              disabled={status === "updating"}
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-3 py-1 text-sm font-medium min-w-[2rem] text-center text-white">
                              {line.quantity || 0}
                            </span>
                            <button
                              onClick={() =>
                                line.id &&
                                line.quantity &&
                                updateQuantity(line.id, line.quantity + 1)
                              }
                              className="p-1 hover:bg-gray-600 transition-colors text-white"
                              disabled={status === "updating"}
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-gray-400">
                <ShoppingCart className="w-16 h-16 mb-4 text-gray-600" />
                <p className="text-lg font-medium mb-2 text-white">
                  Your cart is empty
                </p>
                <p className="text-sm text-center text-gray-400">
                  Add some products to get started!
                </p>
              </div>
            );
          })()}
        </div>
        <DrawerFooter className="flex justify-center">
          {(() => {
            const validLines =
              lines?.filter(
                (line) =>
                  line &&
                  line.merchandise &&
                  line.merchandise.product &&
                  line.quantity &&
                  line.quantity > 0
              ) || [];

            return (
              validLines.length > 0 && (
                <div className="border-t border-gray-700 p-4 bg-gray-800 mt-auto flex-shrink-0">
                  {/* 小计 */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-medium text-white">
                      Subtotal
                    </span>
                    <span className="text-lg font-bold text-blue-400">
                      {cost?.subtotalAmount &&
                        cost.subtotalAmount.amount &&
                        cost.subtotalAmount.currencyCode &&
                        formatAmount(parseFloat(cost.subtotalAmount.amount))}
                    </span>
                  </div>

                  <p className="text-xs text-gray-400 mb-4">
                    Shipping and taxes calculated at checkout
                  </p>

                  {/* 结账按钮 */}
                  <div className="space-y-2">
                    <button
                      onClick={() => {
                        if (checkoutUrl) {
                          window.location.href = checkoutUrl;
                        }
                      }}
                      disabled={!checkoutUrl || status === "updating"}
                      className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Checkout
                    </button>

                    <button
                      onClick={onClose}
                      className="w-full bg-gray-700 text-white py-3 px-4 rounded-lg font-medium border border-gray-600 hover:bg-gray-600 transition-colors"
                    >
                      Continue Shopping
                    </button>
                  </div>
                </div>
              )
            );
          })()}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
