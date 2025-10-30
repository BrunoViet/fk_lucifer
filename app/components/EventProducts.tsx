"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { AddToCartButton, ProductProvider } from "@shopify/hydrogen-react";
import { useProducts } from "../../hooks/useProducts";
import { Loader, X } from "lucide-react";
import { EVENT_BG_IMGS, EVENT_PRODUCT_IDS } from "../constant";
import Image from "next/image";

// 产品变体类型定义
interface ProductVariant {
  id: string;
  price: {
    amount: string;
  };
  image: {
    url: string;
    altText: string;
  };
  selectedOptions: Array<{
    name: string;
    value: string;
  }>;
}

// 产品类型定义
interface Product {
  id: string;
  title: string;
  variants: {
    nodes: ProductVariant[];
  };
}

interface EventProductsProps {
  /** 打开购物车抽屉的回调函数 */
  onOpenCartDrawer: () => void;
}

/**
 * 活动商品轮播组件
 * 蓝色背景，使用embla-carousel-react实现自动滚动
 * 点击Add to Cart时弹出抽屉展示产品选项
 */
export const EventProducts: React.FC<EventProductsProps> = ({
  onOpenCartDrawer,
}) => {
  // 获取产品数据
  const { products, loading, error } = useProducts(EVENT_PRODUCT_IDS);

  // 图片放大模态框状态
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    alt: string;
  } | null>(null);

  // 产品选项抽屉状态
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // 如果GraphQL查询失败，使用备用数据
  const displayProducts = error ? [] : products;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  // 自动滚动功能
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      scrollNext();
    }, 3000); // 每3秒自动滚动

    return () => clearInterval(autoplay);
  }, [emblaApi, scrollNext]);

  // 打开产品选项抽屉
  const openProductDrawer = useCallback((product: Product) => {
    setSelectedProduct(product);
    setIsDrawerOpen(true);
  }, []);

  // 关闭产品选项抽屉
  const closeProductDrawer = useCallback(() => {
    setIsDrawerOpen(false);
    setTimeout(() => setSelectedProduct(null), 300); // 等待动画完成后清除数据
  }, []);

  // 如果正在加载，显示加载状态
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

  // 如果没有产品数据（包括备用数据），显示空状态
  if (!displayProducts.length) {
    return (
      <div className="py-2 px-2">
        <div className="flex items-center justify-center h-20">
          <div className="text-white text-sm">Event Products Empty</div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-2 px-2">
      {/* 轮播容器 */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {displayProducts.map((product) => {
            // 使用第一个变体作为展示
            const firstVariant = product.variants.nodes[0];
            if (!firstVariant) return null;

            return (
              <div key={product.id} className="flex-[0_0_25%] min-w-0">
                <div className="bg-[#d11c45] border border-[#d11c45] mx-1 pb-1">
                  {/* 商品图片 */}
                  <div
                    className="w-full h-22 bg-black mb-.5 flex items-center justify-center cursor-pointer"
                    onClick={() => {
                      setSelectedImage({
                        url: firstVariant.image.url,
                        alt: firstVariant.image.altText || product.title,
                      });
                    }}
                  >
                    <Image
                      src={firstVariant.image.url}
                      alt={firstVariant.image.altText || ""}
                      className="w-full h-full object-cover"
                      width={100}
                      height={100}
                      quality={100}
                      priority={true}
                    />
                  </div>

                  {/* 商品名称 */}
                  <h3 className="text-[0.3rem] font-bold text-center mb-1 h-4 line-clamp-2 text-white">
                    {product.title}
                  </h3>

                  {/* 单一价格 */}
                  <p className="text-[.6rem] leading-1 font-bold text-center mb-1 text-white">
                    ${product.priceRange.minVariantPrice.amount}
                  </p>
                </div>
                {/* 购买按钮 */}
                <div
                  className="w-full cursor-pointer"
                  onClick={() => openProductDrawer(product)}
                >
                  <div className="-translate-y-1">
                    <div className="w-[50%] bg-[#547bbc] h-4 mx-auto">
                      <div className="w-full h-full bg-black text-white transform -translate-x-0.5 -translate-y-0.5 font-bold text-[0.3rem] text-center flex items-center justify-center">
                        <div className="flex items-center gap-1">
                          <Image
                            src={EVENT_BG_IMGS.shoppingCart}
                            alt=""
                            className="w-2 h-2 object-center"
                            quality={100}
                            priority={true}
                          />
                          <div className="text-white">Add to Cart</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 产品选项抽屉 */}
      {isDrawerOpen && selectedProduct && (
        <div className="fixed inset-0 z-50">
          {/* 背景遮罩 */}
          <div
            className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
              isDrawerOpen ? "bg-opacity-75" : "bg-opacity-0"
            }`}
            onClick={closeProductDrawer}
          />

          {/* 抽屉内容 */}
          <div
            className={`absolute bottom-0 text-white left-0 right-0 bg-gray-900 rounded-t-lg transform transition-transform duration-300 ease-out ${
              isDrawerOpen ? "translate-y-0" : "translate-y-full"
            }`}
            style={{ maxHeight: "50vh" }}
          >
            {/* 抽屉头部 */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <h2 className="text-lg font-bold text-white">
                {selectedProduct.title}
              </h2>
              <button
                onClick={closeProductDrawer}
                className="p-2 hover:bg-gray-800 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-400 hover:text-white" />
              </button>
            </div>

            {/* 抽屉内容区域 */}
            <div
              className="p-4 overflow-y-auto scrollbar-hide"
              style={{ maxHeight: "calc(50vh - 150px)" }}
            >
              <div className="grid grid-cols-1 gap-4">
                {selectedProduct.variants.nodes.map((variant) => (
                  <div
                    key={variant.id}
                    className="border border-gray-700 rounded-lg p-4 hover:bg-gray-800 transition-colors bg-gray-850"
                  >
                    <div className="flex items-center space-x-4">
                      {/* 变体图片 */}
                      <div className="flex-shrink-0">
                        <Image
                          src={variant.image.url}
                          alt={variant.image.altText || ""}
                          className="w-16 h-16 object-cover rounded-lg cursor-pointer border border-gray-600"
                          onClick={() => {
                            setSelectedImage({
                              url: variant.image.url,
                              alt:
                                variant.image.altText || selectedProduct.title,
                            });
                          }}
                          width={100}
                          height={100}
                          quality={100}
                          priority={true}
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
                        <ProductProvider data={selectedProduct}>
                          <AddToCartButton
                            variantId={variant.id}
                            className="bg-[#d11c45] hover:bg-[#b91c3c] text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-lg"
                            onClick={() => {
                              // 添加到购物车成功后关闭抽屉并打开购物车
                              closeProductDrawer();
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
            </div>
          </div>
        </div>
      )}

      {/* 图片放大模态框 */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-4xl mx-4">
            {/* 关闭按钮 */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* 放大的图片 */}
            <Image
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
              quality={100}
              priority={true}
            />
          </div>
        </div>
      )}
    </div>
  );
};
