"use client";

import { ShopifyProvider, CartProvider } from "@shopify/hydrogen-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

const storeDomain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
const publicStorefrontToken =
  process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN!;
const storefrontApiVersion =
  process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_VERSION!;

export default function ShopifyProviders({
  children,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  // 创建 QueryClient 实例，配置默认选项
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // 默认缓存时间 5 分钟
            staleTime: 5 * 60 * 1000,
            // 缓存保持时间 10 分钟
            gcTime: 10 * 60 * 1000,
            // 失败重试次数
            retry: 2,
            // 重试延迟
            retryDelay: (attemptIndex) =>
              Math.min(1000 * 2 ** attemptIndex, 30000),
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ShopifyProvider
        languageIsoCode={"EN"}
        countryIsoCode="US"
        storeDomain={storeDomain}
        storefrontToken={publicStorefrontToken}
        storefrontApiVersion={storefrontApiVersion}
      >
        <CartProvider>{children}</CartProvider>
      </ShopifyProvider>
    </QueryClientProvider>
  );
}
