import { CurrencyCode } from "@shopify/hydrogen-react/storefront-api-types";

// 获取多个产品的查询
export const GET_PRODUCTS_QUERY =
/* GraphQL */ `
  query getProducts($ids: [ID!]!) {
    nodes(ids: $ids) {
      ... on Product {
        id
        title
        handle
        description
        onlineStoreUrl
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        images(first: 1) {
          nodes {
              id
              url(transform: { maxHeight: 600 })
              altText
              width
              height
          }
        }
        options(first: 250) {
            id
            name
            values
        }
        variants(first: 250) {
            nodes {
              id
              availableForSale
              price {
                amount
                currencyCode
              }
              selectedOptions {
                name
                value
              }
              image {
                id
                url
                altText
              }
            }
          }
      }
    }
  }
`;

// 产品数据类型定义
export interface ShopifyProduct {
    id: string;
    title: string;
    handle: string;
    description: string;
    onlineStoreUrl: string;
    priceRange: {
        minVariantPrice: {
            amount: string;
            currencyCode: CurrencyCode;
        };
    };
    images: {
        nodes: Array<{
            id: string;
            url: string;
            altText: string;
            width: number;
            height: number;
        }>;
    };
    options: Array<{
        id: string;
        name: string;
        values: string[];
    }>;
    variants: {
        nodes: Array<{
            id: string;
            availableForSale: boolean;
            price: {
                amount: string;
                currencyCode: CurrencyCode;
            };
            selectedOptions: Array<{
                name: string;
                value: string;
            }>;
            image: {
                id: string;
                url: string;
                altText: string;
            };
        }>;
    };
}
