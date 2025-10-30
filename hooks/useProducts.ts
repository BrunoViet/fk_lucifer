"use client";

import { useState, useEffect } from 'react';
import { useShop } from '@shopify/hydrogen-react';
import {
    GET_PRODUCTS_QUERY,
    ShopifyProduct,
} from '../app/graphql/queries';

/**
 * 自定义hook：获取产品数据
 * 使用Shopify GraphQL API获取真实的产品信息
 */
export const useProducts = (productIds: string[]) => {
    const [products, setProducts] = useState<ShopifyProduct[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const { storeDomain, storefrontToken, storefrontApiVersion } = useShop();

    useEffect(() => {
        const fetchProducts = async () => {
            if (!productIds.length || !storeDomain || !storefrontToken) {
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                setError(null);

                const cleanDomain = storeDomain.replace(/^https?:\/\//, ''); // 移除协议前缀
                const apiUrl = `https://${cleanDomain}/api/${storefrontApiVersion}/graphql.json`;

                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Shopify-Storefront-Access-Token': storefrontToken,
                    },
                    body: JSON.stringify({
                        query: GET_PRODUCTS_QUERY,
                        variables: {
                            ids: productIds.map(id => `gid://shopify/Product/${id}`),
                        },
                    }),
                });

                if (!response.ok) {
                    const errorText = await response.text();
                    console.error('API Response Error:', {
                        status: response.status,
                        statusText: response.statusText,
                        body: errorText
                    });
                    throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
                }

                const data = await response.json();

                if (data.errors) {
                    throw new Error(data.errors[0]?.message || '获取产品数据失败');
                }

                // 转换数据格式
                const shopifyProducts = data.data.nodes.filter((node: ShopifyProduct | null) => node !== null) as ShopifyProduct[];

                setProducts(shopifyProducts);
            } catch (err) {
                console.error('获取产品数据失败:', err);
                setError(err instanceof Error ? err.message : '获取产品数据失败');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [productIds, storeDomain, storefrontToken, storefrontApiVersion]);

    return { products, loading, error };
};

/**
 * 获取单个产品的hook
 */
export const useProduct = (productId: string) => {
    const { products, loading, error } = useProducts([productId]);
    return {
        product: products[0] || null,
        loading,
        error,
    };
};