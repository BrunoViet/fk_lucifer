export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.0.2 (a4e00ff)"
  }
  public: {
    Tables: {
      accounting: {
        Row: {
          actual_profit: number | null
          actual_shipping_price: number | null
          anticipated_profit: number | null
          courier: Database["public"]["Enums"]["courier"] | null
          created_at: string
          id: number
          order_id: number | null
          rated_shipping_price: number | null
          source: string | null
          tracking_number: string | null
        }
        Insert: {
          actual_profit?: number | null
          actual_shipping_price?: number | null
          anticipated_profit?: number | null
          courier?: Database["public"]["Enums"]["courier"] | null
          created_at?: string
          id?: number
          order_id?: number | null
          rated_shipping_price?: number | null
          source?: string | null
          tracking_number?: string | null
        }
        Update: {
          actual_profit?: number | null
          actual_shipping_price?: number | null
          anticipated_profit?: number | null
          courier?: Database["public"]["Enums"]["courier"] | null
          created_at?: string
          id?: number
          order_id?: number | null
          rated_shipping_price?: number | null
          source?: string | null
          tracking_number?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "accounting_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "by_custom_order"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "accounting_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "cn_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "accounting_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "kr_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "accounting_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_accuracy"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "accounting_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_core_data"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "accounting_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_flat_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "accounting_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_profit_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "accounting_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_transaction_entries"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "accounting_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "accounting_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "accounting_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "payoneer_order_transaction_match"
            referencedColumns: ["order_id"]
          },
        ]
      }
      accounting_line_items: {
        Row: {
          description: string | null
          domestic_fee: number | null
          fo_line_item_id: number | null
          id: number
          price: number | null
          purchase_order_id: number | null
          shipment_quantity: number | null
          supplier_price: number | null
          tracking_number: string | null
        }
        Insert: {
          description?: string | null
          domestic_fee?: number | null
          fo_line_item_id?: number | null
          id?: number
          price?: number | null
          purchase_order_id?: number | null
          shipment_quantity?: number | null
          supplier_price?: number | null
          tracking_number?: string | null
        }
        Update: {
          description?: string | null
          domestic_fee?: number | null
          fo_line_item_id?: number | null
          id?: number
          price?: number | null
          purchase_order_id?: number | null
          shipment_quantity?: number | null
          supplier_price?: number | null
          tracking_number?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "accounting_line_items_fo_line_item_id_fkey"
            columns: ["fo_line_item_id"]
            isOneToOne: false
            referencedRelation: "fulfillment_order_line_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "accounting_line_items_purchase_order_id_fkey"
            columns: ["purchase_order_id"]
            isOneToOne: false
            referencedRelation: "purchase_order_status_view"
            referencedColumns: ["purchase_order_id"]
          },
          {
            foreignKeyName: "accounting_line_items_purchase_order_id_fkey"
            columns: ["purchase_order_id"]
            isOneToOne: false
            referencedRelation: "purchase_orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "accounting_line_items_purchase_order_id_fkey"
            columns: ["purchase_order_id"]
            isOneToOne: false
            referencedRelation: "transaction_purchase_matching"
            referencedColumns: ["purchase_id"]
          },
          {
            foreignKeyName: "accounting_line_items_purchase_order_id_fkey"
            columns: ["purchase_order_id"]
            isOneToOne: false
            referencedRelation: "transaction_v2_purchase_matching"
            referencedColumns: ["purchase_id"]
          },
          {
            foreignKeyName: "accounting_line_items_tracking_number_fkey"
            columns: ["tracking_number"]
            isOneToOne: false
            referencedRelation: "accounting"
            referencedColumns: ["tracking_number"]
          },
        ]
      }
      app_routes: {
        Row: {
          href: string
          icon: string | null
          id: number
          label: string | null
          sort_order: number | null
          title: string
        }
        Insert: {
          href: string
          icon?: string | null
          id?: number
          label?: string | null
          sort_order?: number | null
          title: string
        }
        Update: {
          href?: string
          icon?: string | null
          id?: number
          label?: string | null
          sort_order?: number | null
          title?: string
        }
        Relationships: []
      }
      auto_bulk_purc: {
        Row: {
          code: string | null
          cookies: Json | null
          created_at: string
          id: number
          info: Json | null
        }
        Insert: {
          code?: string | null
          cookies?: Json | null
          created_at?: string
          id?: number
          info?: Json | null
        }
        Update: {
          code?: string | null
          cookies?: Json | null
          created_at?: string
          id?: number
          info?: Json | null
        }
        Relationships: []
      }
      auto_purc: {
        Row: {
          code: string | null
          cookies: Json[]
          created_at: string
          id: number
          p_url: string
          quantity: number
        }
        Insert: {
          code?: string | null
          cookies: Json[]
          created_at?: string
          id?: number
          p_url: string
          quantity: number
        }
        Update: {
          code?: string | null
          cookies?: Json[]
          created_at?: string
          id?: number
          p_url?: string
          quantity?: number
        }
        Relationships: []
      }
      auto_purc_ck: {
        Row: {
          cookies: Json | null
          created_at: string
          id: number
          shopurl: string | null
        }
        Insert: {
          cookies?: Json | null
          created_at?: string
          id?: number
          shopurl?: string | null
        }
        Update: {
          cookies?: Json | null
          created_at?: string
          id?: number
          shopurl?: string | null
        }
        Relationships: []
      }
      auto_purc_options: {
        Row: {
          created_at: string
          id: number
          option1: Json[] | null
          option2: Json[] | null
          pUrl: string
          supplier: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          option1?: Json[] | null
          option2?: Json[] | null
          pUrl: string
          supplier?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          option1?: Json[] | null
          option2?: Json[] | null
          pUrl?: string
          supplier?: string | null
        }
        Relationships: []
      }
      backup_inventory_variants: {
        Row: {
          barcode: string | null
          created_at: string | null
          deadline: string | null
          fts: unknown | null
          id: number | null
          image: Json | null
          korean_title: string | null
          line_item_id: number | null
          out_of_stock: boolean | null
          price: number | null
          purchase_link: string | null
          quantity: number | null
          title: string | null
          updated_at: string | null
        }
        Insert: {
          barcode?: string | null
          created_at?: string | null
          deadline?: string | null
          fts?: unknown | null
          id?: number | null
          image?: Json | null
          korean_title?: string | null
          line_item_id?: number | null
          out_of_stock?: boolean | null
          price?: number | null
          purchase_link?: string | null
          quantity?: number | null
          title?: string | null
          updated_at?: string | null
        }
        Update: {
          barcode?: string | null
          created_at?: string | null
          deadline?: string | null
          fts?: unknown | null
          id?: number | null
          image?: Json | null
          korean_title?: string | null
          line_item_id?: number | null
          out_of_stock?: boolean | null
          price?: number | null
          purchase_link?: string | null
          quantity?: number | null
          title?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      batches: {
        Row: {
          batch_name: string | null
          batch_no: string | null
          created_at: string
          id: number
        }
        Insert: {
          batch_name?: string | null
          batch_no?: string | null
          created_at?: string
          id?: number
        }
        Update: {
          batch_name?: string | null
          batch_no?: string | null
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      biz_forwarding_orders: {
        Row: {
          code: string
          created_at: string
          creator_id: string | null
          id: number
          updated_at: string
        }
        Insert: {
          code: string
          created_at?: string
          creator_id?: string | null
          id?: number
          updated_at?: string
        }
        Update: {
          code?: string
          created_at?: string
          creator_id?: string | null
          id?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "biz_forwarding_orders_creator_id_fkey"
            columns: ["creator_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      biz_shipments: {
        Row: {
          actual_price: number | null
          code: string | null
          consignee: Json | null
          courier: Database["public"]["Enums"]["courier"] | null
          created_at: string
          creator_id: string | null
          forwarding_id: number | null
          id: number
          incoming_tracking_number: string | null
          pieces: Json | null
          rate_price: number | null
          shipment_id: number | null
          status: Database["public"]["Enums"]["biz_shipments_status"] | null
          tracking_number: string | null
        }
        Insert: {
          actual_price?: number | null
          code?: string | null
          consignee?: Json | null
          courier?: Database["public"]["Enums"]["courier"] | null
          created_at?: string
          creator_id?: string | null
          forwarding_id?: number | null
          id?: number
          incoming_tracking_number?: string | null
          pieces?: Json | null
          rate_price?: number | null
          shipment_id?: number | null
          status?: Database["public"]["Enums"]["biz_shipments_status"] | null
          tracking_number?: string | null
        }
        Update: {
          actual_price?: number | null
          code?: string | null
          consignee?: Json | null
          courier?: Database["public"]["Enums"]["courier"] | null
          created_at?: string
          creator_id?: string | null
          forwarding_id?: number | null
          id?: number
          incoming_tracking_number?: string | null
          pieces?: Json | null
          rate_price?: number | null
          shipment_id?: number | null
          status?: Database["public"]["Enums"]["biz_shipments_status"] | null
          tracking_number?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "biz_shipments_forwarding_id_fkey"
            columns: ["forwarding_id"]
            isOneToOne: false
            referencedRelation: "biz_forwarding_orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "suyouda_shipments_creator_id_fkey"
            columns: ["creator_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "suyouda_shipments_shipment_id_fkey"
            columns: ["shipment_id"]
            isOneToOne: false
            referencedRelation: "shipments"
            referencedColumns: ["id"]
          },
        ]
      }
      biz_users_fee: {
        Row: {
          created_at: string
          fee_rate: number | null
          id: number
          update_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          fee_rate?: number | null
          id?: number
          update_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          fee_rate?: number | null
          id?: number
          update_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "biz_users_fee_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      BookExcel: {
        Row: {
          currencyCode: string
          date: string
          docInfoId: number
          dutyAmount: string | null
          dutyBook: string | null
          dutyExRate: string | null
          edn: string
          id: number
          isFromOldDb: boolean | null
          isMerge: boolean
          lineItemIds: number[] | null
          smallExport: string | null
          smallExRate: string | null
          smallSales: string | null
          totalExportAmount: string
          totalExRate: string
          totalFca: string
          trackNo: string | null
        }
        Insert: {
          currencyCode: string
          date: string
          docInfoId: number
          dutyAmount?: string | null
          dutyBook?: string | null
          dutyExRate?: string | null
          edn: string
          id?: number
          isFromOldDb?: boolean | null
          isMerge?: boolean
          lineItemIds?: number[] | null
          smallExport?: string | null
          smallExRate?: string | null
          smallSales?: string | null
          totalExportAmount: string
          totalExRate: string
          totalFca: string
          trackNo?: string | null
        }
        Update: {
          currencyCode?: string
          date?: string
          docInfoId?: number
          dutyAmount?: string | null
          dutyBook?: string | null
          dutyExRate?: string | null
          edn?: string
          id?: number
          isFromOldDb?: boolean | null
          isMerge?: boolean
          lineItemIds?: number[] | null
          smallExport?: string | null
          smallExRate?: string | null
          smallSales?: string | null
          totalExportAmount?: string
          totalExRate?: string
          totalFca?: string
          trackNo?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "BookExcel_docInfoId_fkey"
            columns: ["docInfoId"]
            isOneToOne: false
            referencedRelation: "DocInfo"
            referencedColumns: ["id"]
          },
        ]
      }
      bulk_ratings: {
        Row: {
          cheapest_courier: string | null
          city: string | null
          country_code: string
          created_at: string
          dhl: number | null
          done: boolean | null
          fedex: number | null
          id: number
          postal: string | null
          province_code: string | null
          rincos: number | null
          suyoda: number | null
          ups: number | null
          weight: number
        }
        Insert: {
          cheapest_courier?: string | null
          city?: string | null
          country_code: string
          created_at?: string
          dhl?: number | null
          done?: boolean | null
          fedex?: number | null
          id?: number
          postal?: string | null
          province_code?: string | null
          rincos?: number | null
          suyoda?: number | null
          ups?: number | null
          weight: number
        }
        Update: {
          cheapest_courier?: string | null
          city?: string | null
          country_code?: string
          created_at?: string
          dhl?: number | null
          done?: boolean | null
          fedex?: number | null
          id?: number
          postal?: string | null
          province_code?: string | null
          rincos?: number | null
          suyoda?: number | null
          ups?: number | null
          weight?: number
        }
        Relationships: []
      }
      bundle_items: {
        Row: {
          bundle_id: number
          created_at: string | null
          id: number
          inventory_variant_id: number
          quantity: number
          updated_at: string | null
        }
        Insert: {
          bundle_id: number
          created_at?: string | null
          id: number
          inventory_variant_id: number
          quantity: number
          updated_at?: string | null
        }
        Update: {
          bundle_id?: number
          created_at?: string | null
          id?: number
          inventory_variant_id?: number
          quantity?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bundle_items_bundle_id_fkey"
            columns: ["bundle_id"]
            isOneToOne: false
            referencedRelation: "inventory_variants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bundle_items_inventory_variant_id_fkey"
            columns: ["inventory_variant_id"]
            isOneToOne: false
            referencedRelation: "inventory_variants"
            referencedColumns: ["id"]
          },
        ]
      }
      bundles: {
        Row: {
          created_at: string
          id: number
          inventory_variants: Json[]
          name: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: number
          inventory_variants: Json[]
          name?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: number
          inventory_variants?: Json[]
          name?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      combined_orders: {
        Row: {
          combination_id: string
          created_at: string
          id: number
          order_id: number
        }
        Insert: {
          combination_id: string
          created_at?: string
          id?: number
          order_id: number
        }
        Update: {
          combination_id?: string
          created_at?: string
          id?: number
          order_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "combined_orders_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "by_custom_order"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "combined_orders_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "cn_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "combined_orders_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "kr_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "combined_orders_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_accuracy"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "combined_orders_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_core_data"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "combined_orders_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_flat_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "combined_orders_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_profit_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "combined_orders_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_transaction_entries"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "combined_orders_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "combined_orders_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "combined_orders_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "payoneer_order_transaction_match"
            referencedColumns: ["order_id"]
          },
        ]
      }
      comments: {
        Row: {
          created_at: string
          id: number
          images: Json[] | null
          inventory_id: number | null
          line_item_id: number | null
          order_id: number | null
          text: string | null
          user_email: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          images?: Json[] | null
          inventory_id?: number | null
          line_item_id?: number | null
          order_id?: number | null
          text?: string | null
          user_email?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          images?: Json[] | null
          inventory_id?: number | null
          line_item_id?: number | null
          order_id?: number | null
          text?: string | null
          user_email?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "comments_inventory_id_fkey"
            columns: ["inventory_id"]
            isOneToOne: false
            referencedRelation: "inventory_variants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_line_item_id_fkey"
            columns: ["line_item_id"]
            isOneToOne: false
            referencedRelation: "line_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "by_custom_order"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "comments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "cn_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "comments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "kr_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "comments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_accuracy"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "comments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_core_data"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "comments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_flat_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "comments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_profit_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "comments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_transaction_entries"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "comments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "comments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "payoneer_order_transaction_match"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "comments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      couriers_invoices: {
        Row: {
          courier: Database["public"]["Enums"]["courier"]
          created_at: string
          id: number
          insertion_id: string | null
          meta_data: Json
          quantity: number | null
          shipping_cost: string
          tracking_number: string
        }
        Insert: {
          courier: Database["public"]["Enums"]["courier"]
          created_at?: string
          id?: number
          insertion_id?: string | null
          meta_data: Json
          quantity?: number | null
          shipping_cost: string
          tracking_number: string
        }
        Update: {
          courier?: Database["public"]["Enums"]["courier"]
          created_at?: string
          id?: number
          insertion_id?: string | null
          meta_data?: Json
          quantity?: number | null
          shipping_cost?: string
          tracking_number?: string
        }
        Relationships: []
      }
      custom_order: {
        Row: {
          case: boolean | null
        }
        Insert: {
          case?: boolean | null
        }
        Update: {
          case?: boolean | null
        }
        Relationships: []
      }
      customer: {
        Row: {
          amount_spent: number | null
          created_at: string | null
          currency_code: string | null
          display_name: string | null
          email: string | null
          first_name: string | null
          id: number
          image_url: string | null
          last_name: string | null
          last_order_id: number | null
          lifetime_duration: string | null
          locale: string | null
          note: string | null
          number_of_orders: number | null
          phone: string | null
          product_subscriber_status: string | null
          shopify_gid: string | null
          state: string | null
          unsubscribe_url: string | null
          updated_at: string | null
          valid_email_address: boolean | null
          verified_email: boolean | null
        }
        Insert: {
          amount_spent?: number | null
          created_at?: string | null
          currency_code?: string | null
          display_name?: string | null
          email?: string | null
          first_name?: string | null
          id: number
          image_url?: string | null
          last_name?: string | null
          last_order_id?: number | null
          lifetime_duration?: string | null
          locale?: string | null
          note?: string | null
          number_of_orders?: number | null
          phone?: string | null
          product_subscriber_status?: string | null
          shopify_gid?: string | null
          state?: string | null
          unsubscribe_url?: string | null
          updated_at?: string | null
          valid_email_address?: boolean | null
          verified_email?: boolean | null
        }
        Update: {
          amount_spent?: number | null
          created_at?: string | null
          currency_code?: string | null
          display_name?: string | null
          email?: string | null
          first_name?: string | null
          id?: number
          image_url?: string | null
          last_name?: string | null
          last_order_id?: number | null
          lifetime_duration?: string | null
          locale?: string | null
          note?: string | null
          number_of_orders?: number | null
          phone?: string | null
          product_subscriber_status?: string | null
          shopify_gid?: string | null
          state?: string | null
          unsubscribe_url?: string | null
          updated_at?: string | null
          valid_email_address?: boolean | null
          verified_email?: boolean | null
        }
        Relationships: []
      }
      customers_points: {
        Row: {
          change_type: string | null
          created_at: string
          customer_id: number
          foli_id: number | null
          id: number
          order_id: number | null
          points_change: number | null
          price: number | null
          quantity: number | null
        }
        Insert: {
          change_type?: string | null
          created_at?: string
          customer_id: number
          foli_id?: number | null
          id?: number
          order_id?: number | null
          points_change?: number | null
          price?: number | null
          quantity?: number | null
        }
        Update: {
          change_type?: string | null
          created_at?: string
          customer_id?: number
          foli_id?: number | null
          id?: number
          order_id?: number | null
          points_change?: number | null
          price?: number | null
          quantity?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "customers_points_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customer"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "customers_points_foli_id_fkey"
            columns: ["foli_id"]
            isOneToOne: false
            referencedRelation: "fulfillment_order_line_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "customers_points_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "by_custom_order"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "customers_points_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "cn_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "customers_points_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "kr_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "customers_points_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_accuracy"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "customers_points_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_core_data"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "customers_points_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_flat_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "customers_points_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_profit_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "customers_points_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_transaction_entries"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "customers_points_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "customers_points_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "customers_points_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "payoneer_order_transaction_match"
            referencedColumns: ["order_id"]
          },
        ]
      }
      DocInfo: {
        Row: {
          createdAt: string
          email: string
          id: number
          name: string
        }
        Insert: {
          createdAt?: string
          email: string
          id?: number
          name: string
        }
        Update: {
          createdAt?: string
          email?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      exchange_rates: {
        Row: {
          base: string
          date: string
          rate: number
          target: string
        }
        Insert: {
          base: string
          date: string
          rate: number
          target: string
        }
        Update: {
          base?: string
          date?: string
          rate?: number
          target?: string
        }
        Relationships: []
      }
      fedex_reports: {
        Row: {
          created_at: string
          file_name: string | null
          from: string | null
          id: number
          report_id: string
          report_name: string
          to: string | null
          variable_id: number | null
        }
        Insert: {
          created_at?: string
          file_name?: string | null
          from?: string | null
          id?: number
          report_id: string
          report_name: string
          to?: string | null
          variable_id?: number | null
        }
        Update: {
          created_at?: string
          file_name?: string | null
          from?: string | null
          id?: number
          report_id?: string
          report_name?: string
          to?: string | null
          variable_id?: number | null
        }
        Relationships: []
      }
      fulfillment_line_items: {
        Row: {
          fulfillment_id: number
          id: number
          line_item_id: number
          order_id: number | null
          quantity: number
        }
        Insert: {
          fulfillment_id: number
          id: number
          line_item_id: number
          order_id?: number | null
          quantity: number
        }
        Update: {
          fulfillment_id?: number
          id?: number
          line_item_id?: number
          order_id?: number | null
          quantity?: number
        }
        Relationships: [
          {
            foreignKeyName: "fulfillment_line_items_fulfillment_id_fkey"
            columns: ["fulfillment_id"]
            isOneToOne: false
            referencedRelation: "fulfillments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fulfillment_line_items_fulfillment_id_fkey"
            columns: ["fulfillment_id"]
            isOneToOne: false
            referencedRelation: "order_core_data"
            referencedColumns: ["fulfillment_order_id"]
          },
          {
            foreignKeyName: "fulfillment_line_items_fulfillment_id_fkey"
            columns: ["fulfillment_id"]
            isOneToOne: false
            referencedRelation: "order_flat_summary"
            referencedColumns: ["fulfillment_order_id"]
          },
          {
            foreignKeyName: "fulfillment_line_items_line_item_id_fkey"
            columns: ["line_item_id"]
            isOneToOne: false
            referencedRelation: "line_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fulfillment_line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "by_custom_order"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillment_line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "cn_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillment_line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "kr_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillment_line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_accuracy"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillment_line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_core_data"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillment_line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_flat_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillment_line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_profit_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillment_line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_transaction_entries"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillment_line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fulfillment_line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillment_line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "payoneer_order_transaction_match"
            referencedColumns: ["order_id"]
          },
        ]
      }
      fulfillment_order_line_items: {
        Row: {
          created_at: string
          financial_summaries: Json | null
          fulfillment_order_id: number | null
          id: number
          image: Json | null
          inventory_variant_id: number | null
          order_id: number | null
          product_title: string | null
          remaining_quantity: number | null
          requires_shipping: boolean | null
          shop_id: number | null
          sku: string | null
          total_quantity: number | null
          variant_id: number | null
          variant_title: string | null
          vendor: string | null
          webhook_id: string | null
          weight: Json | null
        }
        Insert: {
          created_at?: string
          financial_summaries?: Json | null
          fulfillment_order_id?: number | null
          id?: number
          image?: Json | null
          inventory_variant_id?: number | null
          order_id?: number | null
          product_title?: string | null
          remaining_quantity?: number | null
          requires_shipping?: boolean | null
          shop_id?: number | null
          sku?: string | null
          total_quantity?: number | null
          variant_id?: number | null
          variant_title?: string | null
          vendor?: string | null
          webhook_id?: string | null
          weight?: Json | null
        }
        Update: {
          created_at?: string
          financial_summaries?: Json | null
          fulfillment_order_id?: number | null
          id?: number
          image?: Json | null
          inventory_variant_id?: number | null
          order_id?: number | null
          product_title?: string | null
          remaining_quantity?: number | null
          requires_shipping?: boolean | null
          shop_id?: number | null
          sku?: string | null
          total_quantity?: number | null
          variant_id?: number | null
          variant_title?: string | null
          vendor?: string | null
          webhook_id?: string | null
          weight?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "fulfillment_order_line_items_fulfillment_order_id_fkey"
            columns: ["fulfillment_order_id"]
            isOneToOne: false
            referencedRelation: "fulfillment_orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fulfillment_order_line_items_fulfillment_order_id_fkey"
            columns: ["fulfillment_order_id"]
            isOneToOne: false
            referencedRelation: "order_fulfillments_view"
            referencedColumns: ["fulfillment_id"]
          },
          {
            foreignKeyName: "fulfillment_order_line_items_inventory_variant_id_fkey"
            columns: ["inventory_variant_id"]
            isOneToOne: false
            referencedRelation: "inventory_variants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fulfillment_order_line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "by_custom_order"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillment_order_line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "cn_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillment_order_line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "kr_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillment_order_line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_accuracy"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillment_order_line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_core_data"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillment_order_line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_flat_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillment_order_line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_profit_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillment_order_line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_transaction_entries"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillment_order_line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fulfillment_order_line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillment_order_line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "payoneer_order_transaction_match"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillment_order_line_items_shop_id_fkey"
            columns: ["shop_id"]
            isOneToOne: false
            referencedRelation: "shops"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fulfillment_order_line_items_variant_id_fkey"
            columns: ["variant_id"]
            isOneToOne: false
            referencedRelation: "variants"
            referencedColumns: ["id"]
          },
        ]
      }
      fulfillment_orders: {
        Row: {
          created_at: string
          delivery_method: Json | null
          destination: Json | null
          fulfill_at: string | null
          fulfill_by: string | null
          fulfillment_holds: Json | null
          fulfillments: Json[] | null
          id: number
          order_id: number | null
          order_name: string
          order_processed_at: string | null
          request_status: string | null
          shop_id: number | null
          status: string | null
          updated_at: string | null
          webhook_id: string | null
        }
        Insert: {
          created_at?: string
          delivery_method?: Json | null
          destination?: Json | null
          fulfill_at?: string | null
          fulfill_by?: string | null
          fulfillment_holds?: Json | null
          fulfillments?: Json[] | null
          id?: number
          order_id?: number | null
          order_name: string
          order_processed_at?: string | null
          request_status?: string | null
          shop_id?: number | null
          status?: string | null
          updated_at?: string | null
          webhook_id?: string | null
        }
        Update: {
          created_at?: string
          delivery_method?: Json | null
          destination?: Json | null
          fulfill_at?: string | null
          fulfill_by?: string | null
          fulfillment_holds?: Json | null
          fulfillments?: Json[] | null
          id?: number
          order_id?: number | null
          order_name?: string
          order_processed_at?: string | null
          request_status?: string | null
          shop_id?: number | null
          status?: string | null
          updated_at?: string | null
          webhook_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fulfillment_orders_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "by_custom_order"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillment_orders_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "cn_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillment_orders_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "kr_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillment_orders_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_accuracy"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillment_orders_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_core_data"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillment_orders_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_flat_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillment_orders_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_profit_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillment_orders_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_transaction_entries"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillment_orders_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fulfillment_orders_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillment_orders_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "payoneer_order_transaction_match"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillment_orders_shop_id_fkey"
            columns: ["shop_id"]
            isOneToOne: false
            referencedRelation: "shops"
            referencedColumns: ["id"]
          },
        ]
      }
      fulfillments: {
        Row: {
          created_at: string | null
          delivered_at: string | null
          display_status: string | null
          estimated_delivery_at: string | null
          fulfillment_order_id: number | null
          fulfillment_orders: Json | null
          id: number
          in_transit_at: string | null
          legacy_resource_id: string | null
          name: string | null
          order_id: number
          origin_address: Json | null
          requires_shipping: boolean | null
          status: string | null
          total_quantity: number | null
          tracking_info: Json | null
          tracking_number: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          delivered_at?: string | null
          display_status?: string | null
          estimated_delivery_at?: string | null
          fulfillment_order_id?: number | null
          fulfillment_orders?: Json | null
          id: number
          in_transit_at?: string | null
          legacy_resource_id?: string | null
          name?: string | null
          order_id: number
          origin_address?: Json | null
          requires_shipping?: boolean | null
          status?: string | null
          total_quantity?: number | null
          tracking_info?: Json | null
          tracking_number?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          delivered_at?: string | null
          display_status?: string | null
          estimated_delivery_at?: string | null
          fulfillment_order_id?: number | null
          fulfillment_orders?: Json | null
          id?: number
          in_transit_at?: string | null
          legacy_resource_id?: string | null
          name?: string | null
          order_id?: number
          origin_address?: Json | null
          requires_shipping?: boolean | null
          status?: string | null
          total_quantity?: number | null
          tracking_info?: Json | null
          tracking_number?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fulfillments_fulfillment_order_id_fkey"
            columns: ["fulfillment_order_id"]
            isOneToOne: false
            referencedRelation: "fulfillment_orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fulfillments_fulfillment_order_id_fkey"
            columns: ["fulfillment_order_id"]
            isOneToOne: false
            referencedRelation: "order_fulfillments_view"
            referencedColumns: ["fulfillment_id"]
          },
          {
            foreignKeyName: "fulfillments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "by_custom_order"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "cn_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "kr_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_accuracy"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_core_data"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_flat_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_profit_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_transaction_entries"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fulfillments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "payoneer_order_transaction_match"
            referencedColumns: ["order_id"]
          },
        ]
      }
      group_invites: {
        Row: {
          accepted_at: string | null
          created_at: string
          group_id: string
          id: string
          invited_by: string
          invited_email: string
          roles: string[]
          user_id: string | null
        }
        Insert: {
          accepted_at?: string | null
          created_at?: string
          group_id: string
          id?: string
          invited_by: string
          invited_email: string
          roles?: string[]
          user_id?: string | null
        }
        Update: {
          accepted_at?: string | null
          created_at?: string
          group_id?: string
          id?: string
          invited_by?: string
          invited_email?: string
          roles?: string[]
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "group_invites_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "group_invites_invited_by_fkey"
            columns: ["invited_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "group_invites_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      group_users: {
        Row: {
          created_at: string
          group_id: string
          id: string
          metadata: Json
          role: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          group_id: string
          id?: string
          metadata?: Json
          role?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          group_id?: string
          id?: string
          metadata?: Json
          role?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "group_users_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "group_users_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      groups: {
        Row: {
          created_at: string
          id: string
          metadata: Json
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          metadata?: Json
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          metadata?: Json
          updated_at?: string
        }
        Relationships: []
      }
      horlisunseoul: {
        Row: {
          brand: string | null
          created_at: string
          id: number
          image: string | null
          name: string | null
          options: string[] | null
          price: string | null
        }
        Insert: {
          brand?: string | null
          created_at?: string
          id?: number
          image?: string | null
          name?: string | null
          options?: string[] | null
          price?: string | null
        }
        Update: {
          brand?: string | null
          created_at?: string
          id?: number
          image?: string | null
          name?: string | null
          options?: string[] | null
          price?: string | null
        }
        Relationships: []
      }
      icn_pushs: {
        Row: {
          created_at: string
          id: number
          order_no: string | null
          push_icn: boolean | null
          push_suyoda: boolean | null
          req: Json | null
          resp: Json | null
          shipment_id: number | null
          success_at: string | null
          tp_waybill_no: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          order_no?: string | null
          push_icn?: boolean | null
          push_suyoda?: boolean | null
          req?: Json | null
          resp?: Json | null
          shipment_id?: number | null
          success_at?: string | null
          tp_waybill_no?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          order_no?: string | null
          push_icn?: boolean | null
          push_suyoda?: boolean | null
          req?: Json | null
          resp?: Json | null
          shipment_id?: number | null
          success_at?: string | null
          tp_waybill_no?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "icn_pushs_shipment_id_fkey"
            columns: ["shipment_id"]
            isOneToOne: true
            referencedRelation: "shipments"
            referencedColumns: ["id"]
          },
        ]
      }
      images: {
        Row: {
          created_at: string
          id: number
          line_item_id: number | null
          path: string | null
          type: Database["public"]["Enums"]["images_type"] | null
          url: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          line_item_id?: number | null
          path?: string | null
          type?: Database["public"]["Enums"]["images_type"] | null
          url?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          line_item_id?: number | null
          path?: string | null
          type?: Database["public"]["Enums"]["images_type"] | null
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "images_line_item_id_fkey"
            columns: ["line_item_id"]
            isOneToOne: false
            referencedRelation: "line_items"
            referencedColumns: ["id"]
          },
        ]
      }
      inventory_bundles: {
        Row: {
          created_at: string
          id: number
        }
        Insert: {
          created_at?: string
          id?: number
        }
        Update: {
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      inventory_changes: {
        Row: {
          change_date: string | null
          change_quantity: number
          change_type: string
          current_quantity: number | null
          id: number
          inventory_variant_id: number
        }
        Insert: {
          change_date?: string | null
          change_quantity: number
          change_type: string
          current_quantity?: number | null
          id?: number
          inventory_variant_id: number
        }
        Update: {
          change_date?: string | null
          change_quantity?: number
          change_type?: string
          current_quantity?: number | null
          id?: number
          inventory_variant_id?: number
        }
        Relationships: []
      }
      inventory_config: {
        Row: {
          allocate_inventory: boolean | null
          id: number
          updated_at: string | null
        }
        Insert: {
          allocate_inventory?: boolean | null
          id?: number
          updated_at?: string | null
        }
        Update: {
          allocate_inventory?: boolean | null
          id?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      inventory_item_allocations: {
        Row: {
          allocated_at: string | null
          id: number
          inventory_item_id: number | null
          line_item_id: number | null
        }
        Insert: {
          allocated_at?: string | null
          id?: number
          inventory_item_id?: number | null
          line_item_id?: number | null
        }
        Update: {
          allocated_at?: string | null
          id?: number
          inventory_item_id?: number | null
          line_item_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "inventory_item_allocations_inventory_item_id_fkey"
            columns: ["inventory_item_id"]
            isOneToOne: false
            referencedRelation: "inventory_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_item_allocations_line_item_id_fkey"
            columns: ["line_item_id"]
            isOneToOne: false
            referencedRelation: "line_items"
            referencedColumns: ["id"]
          },
        ]
      }
      inventory_items: {
        Row: {
          allocated_lineitem_id: number | null
          created_at: string
          draft: boolean | null
          id: number
          inventory_variant_id: number | null
          lineitem_id: number | null
          location: string | null
          note: string | null
          order_id: number | null
          order_name: string | null
          price: number | null
          purchase_order_id: number | null
          rack_id: number | null
          shipment_id: number | null
          shipped_at: string | null
          status: Database["public"]["Enums"]["inventory_item_status"] | null
          stock_in_time: string | null
          test: boolean | null
          title: string | null
          tracking_number: string | null
          updated_at: string
          variant_id: number | null
        }
        Insert: {
          allocated_lineitem_id?: number | null
          created_at?: string
          draft?: boolean | null
          id?: number
          inventory_variant_id?: number | null
          lineitem_id?: number | null
          location?: string | null
          note?: string | null
          order_id?: number | null
          order_name?: string | null
          price?: number | null
          purchase_order_id?: number | null
          rack_id?: number | null
          shipment_id?: number | null
          shipped_at?: string | null
          status?: Database["public"]["Enums"]["inventory_item_status"] | null
          stock_in_time?: string | null
          test?: boolean | null
          title?: string | null
          tracking_number?: string | null
          updated_at?: string
          variant_id?: number | null
        }
        Update: {
          allocated_lineitem_id?: number | null
          created_at?: string
          draft?: boolean | null
          id?: number
          inventory_variant_id?: number | null
          lineitem_id?: number | null
          location?: string | null
          note?: string | null
          order_id?: number | null
          order_name?: string | null
          price?: number | null
          purchase_order_id?: number | null
          rack_id?: number | null
          shipment_id?: number | null
          shipped_at?: string | null
          status?: Database["public"]["Enums"]["inventory_item_status"] | null
          stock_in_time?: string | null
          test?: boolean | null
          title?: string | null
          tracking_number?: string | null
          updated_at?: string
          variant_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "inventory_items_allocated_lineitem_id_fkey"
            columns: ["allocated_lineitem_id"]
            isOneToOne: false
            referencedRelation: "line_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_items_inventory_variant_id_fkey"
            columns: ["inventory_variant_id"]
            isOneToOne: false
            referencedRelation: "inventory_variants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_items_lineitem_id_fkey"
            columns: ["lineitem_id"]
            isOneToOne: false
            referencedRelation: "line_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "by_custom_order"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "inventory_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "cn_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "inventory_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "kr_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "inventory_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_accuracy"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "inventory_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_core_data"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "inventory_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_flat_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "inventory_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_profit_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "inventory_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_transaction_entries"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "inventory_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "inventory_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "payoneer_order_transaction_match"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "inventory_items_purchase_order_id_fkey"
            columns: ["purchase_order_id"]
            isOneToOne: false
            referencedRelation: "purchase_order_status_view"
            referencedColumns: ["purchase_order_id"]
          },
          {
            foreignKeyName: "inventory_items_purchase_order_id_fkey"
            columns: ["purchase_order_id"]
            isOneToOne: false
            referencedRelation: "purchase_orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_items_purchase_order_id_fkey"
            columns: ["purchase_order_id"]
            isOneToOne: false
            referencedRelation: "transaction_purchase_matching"
            referencedColumns: ["purchase_id"]
          },
          {
            foreignKeyName: "inventory_items_purchase_order_id_fkey"
            columns: ["purchase_order_id"]
            isOneToOne: false
            referencedRelation: "transaction_v2_purchase_matching"
            referencedColumns: ["purchase_id"]
          },
          {
            foreignKeyName: "inventory_items_rack_id_fkey"
            columns: ["rack_id"]
            isOneToOne: false
            referencedRelation: "racks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_items_shipment_id_fkey"
            columns: ["shipment_id"]
            isOneToOne: false
            referencedRelation: "shipments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_items_variant_id_fkey"
            columns: ["variant_id"]
            isOneToOne: false
            referencedRelation: "variants"
            referencedColumns: ["id"]
          },
        ]
      }
      inventory_items_draft: {
        Row: {
          created_at: string
          draft: boolean | null
          id: number
          inventory_variant_id: number | null
          lineitem_id: number | null
          location: string | null
          order_name: string | null
          price: number | null
          purchase_order_id: number | null
          status: Database["public"]["Enums"]["inventory_item_status"] | null
          title: string | null
          tracking_number: string | null
          updated_at: string
          variant_id: number | null
        }
        Insert: {
          created_at?: string
          draft?: boolean | null
          id?: number
          inventory_variant_id?: number | null
          lineitem_id?: number | null
          location?: string | null
          order_name?: string | null
          price?: number | null
          purchase_order_id?: number | null
          status?: Database["public"]["Enums"]["inventory_item_status"] | null
          title?: string | null
          tracking_number?: string | null
          updated_at?: string
          variant_id?: number | null
        }
        Update: {
          created_at?: string
          draft?: boolean | null
          id?: number
          inventory_variant_id?: number | null
          lineitem_id?: number | null
          location?: string | null
          order_name?: string | null
          price?: number | null
          purchase_order_id?: number | null
          status?: Database["public"]["Enums"]["inventory_item_status"] | null
          title?: string | null
          tracking_number?: string | null
          updated_at?: string
          variant_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "inventory_items_draft_inventory_variant_id_fkey"
            columns: ["inventory_variant_id"]
            isOneToOne: false
            referencedRelation: "inventory_variants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_items_draft_lineitem_id_fkey"
            columns: ["lineitem_id"]
            isOneToOne: false
            referencedRelation: "line_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_items_draft_purchase_order_id_fkey"
            columns: ["purchase_order_id"]
            isOneToOne: false
            referencedRelation: "purchase_orders_draft"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_items_draft_variant_id_fkey"
            columns: ["variant_id"]
            isOneToOne: false
            referencedRelation: "variants"
            referencedColumns: ["id"]
          },
        ]
      }
      inventory_locations: {
        Row: {
          created_at: string
          id: number
          inventory_variant_id: number | null
          location: string | null
          quantity: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          inventory_variant_id?: number | null
          location?: string | null
          quantity?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          inventory_variant_id?: number | null
          location?: string | null
          quantity?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "inventory_locations_inventory_variant_id_fkey"
            columns: ["inventory_variant_id"]
            isOneToOne: false
            referencedRelation: "inventory_variants"
            referencedColumns: ["id"]
          },
        ]
      }
      inventory_locations_backup: {
        Row: {
          created_at: string | null
          id: number | null
          inventory_variant_id: number | null
          location: string | null
          quantity: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number | null
          inventory_variant_id?: number | null
          location?: string | null
          quantity?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number | null
          inventory_variant_id?: number | null
          location?: string | null
          quantity?: number | null
        }
        Relationships: []
      }
      inventory_summary: {
        Row: {
          id: number
          incoming: number | null
          is_active: boolean | null
          onhand: number | null
          shipped: number | null
          total_unfulfilled_quantity_authorized: number | null
          total_unfulfilled_quantity_non_authorized: number | null
        }
        Insert: {
          id: number
          incoming?: number | null
          is_active?: boolean | null
          onhand?: number | null
          shipped?: number | null
          total_unfulfilled_quantity_authorized?: number | null
          total_unfulfilled_quantity_non_authorized?: number | null
        }
        Update: {
          id?: number
          incoming?: number | null
          is_active?: boolean | null
          onhand?: number | null
          shipped?: number | null
          total_unfulfilled_quantity_authorized?: number | null
          total_unfulfilled_quantity_non_authorized?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "inventory_summary_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "inventory_variants"
            referencedColumns: ["id"]
          },
        ]
      }
      inventory_variants: {
        Row: {
          barcode: string | null
          category: string | null
          category_cn: string | null
          cn_batch: number | null
          codename_gift_price: number | null
          country_code_of_origin: string | null
          created_at: string
          deadline: string | null
          description: string | null
          entry: boolean | null
          fts: unknown | null
          height: number | null
          hscode_cn: string | null
          id: number
          image: Json | null
          is_bundle: boolean | null
          is_custom_product: boolean | null
          korean_title: string | null
          length: number | null
          line_item_id: number | null
          merged: boolean | null
          monetary_value: number | null
          order_name: string | null
          origin_country: string | null
          out_of_stock: boolean | null
          points_rates: number | null
          price: number | null
          price_cn: number | null
          purchase_link: string | null
          quantity: number
          requires_shipping: boolean | null
          shutline_gift_price: number | null
          sku: string | null
          title: string
          title_cn: string | null
          top_gift_price: number | null
          updated_at: string | null
          volumetric_weight: number | null
          warehouse_location: string | null
          weight: number | null
          width: number | null
        }
        Insert: {
          barcode?: string | null
          category?: string | null
          category_cn?: string | null
          cn_batch?: number | null
          codename_gift_price?: number | null
          country_code_of_origin?: string | null
          created_at?: string
          deadline?: string | null
          description?: string | null
          entry?: boolean | null
          fts?: unknown | null
          height?: number | null
          hscode_cn?: string | null
          id?: number
          image?: Json | null
          is_bundle?: boolean | null
          is_custom_product?: boolean | null
          korean_title?: string | null
          length?: number | null
          line_item_id?: number | null
          merged?: boolean | null
          monetary_value?: number | null
          order_name?: string | null
          origin_country?: string | null
          out_of_stock?: boolean | null
          points_rates?: number | null
          price?: number | null
          price_cn?: number | null
          purchase_link?: string | null
          quantity?: number
          requires_shipping?: boolean | null
          shutline_gift_price?: number | null
          sku?: string | null
          title: string
          title_cn?: string | null
          top_gift_price?: number | null
          updated_at?: string | null
          volumetric_weight?: number | null
          warehouse_location?: string | null
          weight?: number | null
          width?: number | null
        }
        Update: {
          barcode?: string | null
          category?: string | null
          category_cn?: string | null
          cn_batch?: number | null
          codename_gift_price?: number | null
          country_code_of_origin?: string | null
          created_at?: string
          deadline?: string | null
          description?: string | null
          entry?: boolean | null
          fts?: unknown | null
          height?: number | null
          hscode_cn?: string | null
          id?: number
          image?: Json | null
          is_bundle?: boolean | null
          is_custom_product?: boolean | null
          korean_title?: string | null
          length?: number | null
          line_item_id?: number | null
          merged?: boolean | null
          monetary_value?: number | null
          order_name?: string | null
          origin_country?: string | null
          out_of_stock?: boolean | null
          points_rates?: number | null
          price?: number | null
          price_cn?: number | null
          purchase_link?: string | null
          quantity?: number
          requires_shipping?: boolean | null
          shutline_gift_price?: number | null
          sku?: string | null
          title?: string
          title_cn?: string | null
          top_gift_price?: number | null
          updated_at?: string | null
          volumetric_weight?: number | null
          warehouse_location?: string | null
          weight?: number | null
          width?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "inventory_variants_line_item_id_fkey"
            columns: ["line_item_id"]
            isOneToOne: false
            referencedRelation: "line_items"
            referencedColumns: ["id"]
          },
        ]
      }
      iv_cn_title: {
        Row: {
          id: number
          title: string | null
          title_cn: string | null
        }
        Insert: {
          id?: number
          title?: string | null
          title_cn?: string | null
        }
        Update: {
          id?: number
          title?: string | null
          title_cn?: string | null
        }
        Relationships: []
      }
      JsonlUploaded: {
        Row: {
          gid: string | null
          id: number
          shopId: number
          stagedUploadPath: string | null
          type: string | null
        }
        Insert: {
          gid?: string | null
          id?: number
          shopId: number
          stagedUploadPath?: string | null
          type?: string | null
        }
        Update: {
          gid?: string | null
          id?: number
          shopId?: number
          stagedUploadPath?: string | null
          type?: string | null
        }
        Relationships: []
      }
      landing_settings: {
        Row: {
          created_at: string
          id: number
          name: string
          value: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
          value?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          value?: string | null
        }
        Relationships: []
      }
      landing_translations: {
        Row: {
          created_at: string
          id: number
          input: string | null
          language_code: string | null
          resource_id: number | null
          resource_type: string | null
          result: Json | null
        }
        Insert: {
          created_at?: string
          id?: number
          input?: string | null
          language_code?: string | null
          resource_id?: number | null
          resource_type?: string | null
          result?: Json | null
        }
        Update: {
          created_at?: string
          id?: number
          input?: string | null
          language_code?: string | null
          resource_id?: number | null
          resource_type?: string | null
          result?: Json | null
        }
        Relationships: []
      }
      line_items: {
        Row: {
          created_at: string
          current_quantity: number | null
          custom_attributes: Json | null
          customer_reject_note: string | null
          customer_reply: boolean | null
          discounted_unit_price_after_all_discounts_set: Json | null
          id: number
          image: Json | null
          inventory_variant_id: number | null
          is_bulk_import: boolean | null
          is_bundle: boolean | null
          is_from_bundle: boolean
          name: string | null
          non_fulfillable_quantity: number | null
          order_id: number | null
          original_total_set: Json | null
          original_unit_price_set: Json | null
          priority: number | null
          product_id: number | null
          quantity: number | null
          refundable_quantity: number | null
          request_delivery: boolean | null
          request_refund: boolean | null
          requires_shipping: boolean | null
          shop_id: number | null
          sku: string | null
          title: string | null
          unfulfilled_quantity: number | null
          updated_at: string | null
          variant_id: number | null
          variant_title: string | null
          vendor: string | null
          webhook_id: string | null
        }
        Insert: {
          created_at?: string
          current_quantity?: number | null
          custom_attributes?: Json | null
          customer_reject_note?: string | null
          customer_reply?: boolean | null
          discounted_unit_price_after_all_discounts_set?: Json | null
          id?: number
          image?: Json | null
          inventory_variant_id?: number | null
          is_bulk_import?: boolean | null
          is_bundle?: boolean | null
          is_from_bundle?: boolean
          name?: string | null
          non_fulfillable_quantity?: number | null
          order_id?: number | null
          original_total_set?: Json | null
          original_unit_price_set?: Json | null
          priority?: number | null
          product_id?: number | null
          quantity?: number | null
          refundable_quantity?: number | null
          request_delivery?: boolean | null
          request_refund?: boolean | null
          requires_shipping?: boolean | null
          shop_id?: number | null
          sku?: string | null
          title?: string | null
          unfulfilled_quantity?: number | null
          updated_at?: string | null
          variant_id?: number | null
          variant_title?: string | null
          vendor?: string | null
          webhook_id?: string | null
        }
        Update: {
          created_at?: string
          current_quantity?: number | null
          custom_attributes?: Json | null
          customer_reject_note?: string | null
          customer_reply?: boolean | null
          discounted_unit_price_after_all_discounts_set?: Json | null
          id?: number
          image?: Json | null
          inventory_variant_id?: number | null
          is_bulk_import?: boolean | null
          is_bundle?: boolean | null
          is_from_bundle?: boolean
          name?: string | null
          non_fulfillable_quantity?: number | null
          order_id?: number | null
          original_total_set?: Json | null
          original_unit_price_set?: Json | null
          priority?: number | null
          product_id?: number | null
          quantity?: number | null
          refundable_quantity?: number | null
          request_delivery?: boolean | null
          request_refund?: boolean | null
          requires_shipping?: boolean | null
          shop_id?: number | null
          sku?: string | null
          title?: string | null
          unfulfilled_quantity?: number | null
          updated_at?: string | null
          variant_id?: number | null
          variant_title?: string | null
          vendor?: string | null
          webhook_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "line_items_inventory_variant_id_fkey"
            columns: ["inventory_variant_id"]
            isOneToOne: false
            referencedRelation: "inventory_variants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "by_custom_order"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "cn_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "kr_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_accuracy"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_core_data"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_flat_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_profit_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_transaction_entries"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "payoneer_order_transaction_match"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "line_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "line_items_shop_id_fkey"
            columns: ["shop_id"]
            isOneToOne: false
            referencedRelation: "shops"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "line_items_variant_id_fkey"
            columns: ["variant_id"]
            isOneToOne: false
            referencedRelation: "variants"
            referencedColumns: ["id"]
          },
        ]
      }
      line_items_ready_to_ship: {
        Row: {
          allocated_qty: number | null
          incoming_allocated_qty: number | null
          index_count: number | null
          inventory_variant_id: number | null
          last_estimated_time: string | null
          li_updated_at: string | null
          line_item_id: number
          order_created_at: string | null
          order_name: string | null
          order_updated_at: string | null
          purchased: boolean | null
          ready_to_ship: boolean
          search_vector: unknown | null
          title: string | null
          unfulfilled_quantity: number | null
        }
        Insert: {
          allocated_qty?: number | null
          incoming_allocated_qty?: number | null
          index_count?: number | null
          inventory_variant_id?: number | null
          last_estimated_time?: string | null
          li_updated_at?: string | null
          line_item_id: number
          order_created_at?: string | null
          order_name?: string | null
          order_updated_at?: string | null
          purchased?: boolean | null
          ready_to_ship?: boolean
          search_vector?: unknown | null
          title?: string | null
          unfulfilled_quantity?: number | null
        }
        Update: {
          allocated_qty?: number | null
          incoming_allocated_qty?: number | null
          index_count?: number | null
          inventory_variant_id?: number | null
          last_estimated_time?: string | null
          li_updated_at?: string | null
          line_item_id?: number
          order_created_at?: string | null
          order_name?: string | null
          order_updated_at?: string | null
          purchased?: boolean | null
          ready_to_ship?: boolean
          search_vector?: unknown | null
          title?: string | null
          unfulfilled_quantity?: number | null
        }
        Relationships: []
      }
      logs_allocate_inventory_failed: {
        Row: {
          created_at: string
          error_message: string | null
          id: number
          inventory_variant_id: number | null
          retry: boolean | null
          retry_at: string | null
        }
        Insert: {
          created_at?: string
          error_message?: string | null
          id?: number
          inventory_variant_id?: number | null
          retry?: boolean | null
          retry_at?: string | null
        }
        Update: {
          created_at?: string
          error_message?: string | null
          id?: number
          inventory_variant_id?: number | null
          retry?: boolean | null
          retry_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "logs_allocate_inventory_failed_inventory_variant_id_fkey"
            columns: ["inventory_variant_id"]
            isOneToOne: false
            referencedRelation: "inventory_variants"
            referencedColumns: ["id"]
          },
        ]
      }
      logs_cancel_warehouse: {
        Row: {
          created_at: string
          id: number
          inventory_variant_id: number | null
          purchase_order_id: number | null
          quantity: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          inventory_variant_id?: number | null
          purchase_order_id?: number | null
          quantity?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          inventory_variant_id?: number | null
          purchase_order_id?: number | null
          quantity?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "logs_cancel_warehouse_inventory_variant_id_fkey"
            columns: ["inventory_variant_id"]
            isOneToOne: false
            referencedRelation: "inventory_variants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "logs_cancel_warehouse_purchase_order_id_fkey"
            columns: ["purchase_order_id"]
            isOneToOne: false
            referencedRelation: "purchase_order_status_view"
            referencedColumns: ["purchase_order_id"]
          },
          {
            foreignKeyName: "logs_cancel_warehouse_purchase_order_id_fkey"
            columns: ["purchase_order_id"]
            isOneToOne: false
            referencedRelation: "purchase_orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "logs_cancel_warehouse_purchase_order_id_fkey"
            columns: ["purchase_order_id"]
            isOneToOne: false
            referencedRelation: "transaction_purchase_matching"
            referencedColumns: ["purchase_id"]
          },
          {
            foreignKeyName: "logs_cancel_warehouse_purchase_order_id_fkey"
            columns: ["purchase_order_id"]
            isOneToOne: false
            referencedRelation: "transaction_v2_purchase_matching"
            referencedColumns: ["purchase_id"]
          },
        ]
      }
      logs_stock_in: {
        Row: {
          created_at: string
          id: number
          inventory_variant_id: number | null
          location: string | null
          purchase_order_id: number | null
          quantity: number | null
          tracking_number: string | null
          type: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          inventory_variant_id?: number | null
          location?: string | null
          purchase_order_id?: number | null
          quantity?: number | null
          tracking_number?: string | null
          type?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          inventory_variant_id?: number | null
          location?: string | null
          purchase_order_id?: number | null
          quantity?: number | null
          tracking_number?: string | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "logs_stock_in_inventory_variant_id_fkey"
            columns: ["inventory_variant_id"]
            isOneToOne: false
            referencedRelation: "inventory_variants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "logs_stock_in_purchase_order_id_fkey"
            columns: ["purchase_order_id"]
            isOneToOne: false
            referencedRelation: "purchase_order_status_view"
            referencedColumns: ["purchase_order_id"]
          },
          {
            foreignKeyName: "logs_stock_in_purchase_order_id_fkey"
            columns: ["purchase_order_id"]
            isOneToOne: false
            referencedRelation: "purchase_orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "logs_stock_in_purchase_order_id_fkey"
            columns: ["purchase_order_id"]
            isOneToOne: false
            referencedRelation: "transaction_purchase_matching"
            referencedColumns: ["purchase_id"]
          },
          {
            foreignKeyName: "logs_stock_in_purchase_order_id_fkey"
            columns: ["purchase_order_id"]
            isOneToOne: false
            referencedRelation: "transaction_v2_purchase_matching"
            referencedColumns: ["purchase_id"]
          },
        ]
      }
      logs_sync_order_error: {
        Row: {
          created_at: string
          error: string | null
          id: number
          order_id: string | null
          resync: boolean | null
          resync_at: string | null
          shop_id: number | null
        }
        Insert: {
          created_at?: string
          error?: string | null
          id?: number
          order_id?: string | null
          resync?: boolean | null
          resync_at?: string | null
          shop_id?: number | null
        }
        Update: {
          created_at?: string
          error?: string | null
          id?: number
          order_id?: string | null
          resync?: boolean | null
          resync_at?: string | null
          shop_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "logs_sync_order_error_shop_id_fkey"
            columns: ["shop_id"]
            isOneToOne: false
            referencedRelation: "shops"
            referencedColumns: ["id"]
          },
        ]
      }
      mabang: {
        Row: {
          company: string | null
          created_at: string
          id: number
          order_name: string | null
          tracking_number: string | null
        }
        Insert: {
          company?: string | null
          created_at?: string
          id?: number
          order_name?: string | null
          tracking_number?: string | null
        }
        Update: {
          company?: string | null
          created_at?: string
          id?: number
          order_name?: string | null
          tracking_number?: string | null
        }
        Relationships: []
      }
      mabang_duplicate: {
        Row: {
          company: string | null
          created_at: string
          id: number
          order_name: string | null
          tracking_number: string | null
        }
        Insert: {
          company?: string | null
          created_at?: string
          id?: number
          order_name?: string | null
          tracking_number?: string | null
        }
        Update: {
          company?: string | null
          created_at?: string
          id?: number
          order_name?: string | null
          tracking_number?: string | null
        }
        Relationships: []
      }
      makestar_products: {
        Row: {
          agencyName: string | null
          albumSaleGuideResponse: Json | null
          brandEnglishName: string | null
          brandIdx: number | null
          brandKoreanName: string | null
          brandName: string | null
          brandType: string | null
          buyLimitCnt: number | null
          buyLimitYn: string | null
          buyPerYn: string | null
          category: string | null
          createdAt: string | null
          ctgrList: Json | null
          ctmrLimitCnt: number | null
          ctmrPerYn: string | null
          dcDiv: string | null
          dcEdDt: string | null
          dcFee: number | null
          dcRatio: number | null
          dcStDt: string | null
          dcTermYn: string | null
          dcYn: string | null
          displaySaleQuantity: string | null
          displaySaleTerm: string | null
          dlvyDiv: string | null
          dlvyPsbYn: string | null
          dlvyYn: string | null
          dpCtgrList: Json | null
          dpYn: string | null
          dtlDesc: string | null
          erInfoI18n: Json | null
          etcGuide: string | null
          evtYn: string | null
          excInfo: Json | null
          exclusiveEventId: Json | null
          faqList: Json | null
          iconNew: string | null
          imagePath: string | null
          imgList: Json | null
          langCd: string | null
          langCrcy: string | null
          limitYn: string | null
          logoPath: string | null
          optGrp: Json | null
          optList: Json | null
          optYn: string | null
          pdBasicGuideApplyYn: string | null
          pdCd: string
          pdDiv: string | null
          pdInfoOfrGuide: string | null
          pdNm: string | null
          pdType: string | null
          pdVideo: string | null
          pdWeight: number | null
          posterOptions: Json | null
          posterQty: number | null
          price: number | null
          recomYn: string | null
          releaseDate: string | null
          retExcGuide: string | null
          rlseInfo: Json | null
          saleEdDt: string | null
          saleEdTermYn: string | null
          salePrice: number | null
          saleStat: string | null
          saleStDt: string | null
          specialPdYn: string | null
          stkCnt: number | null
          stkCntDpYn: string | null
          tags: string | null
          thumbI18nUrl: string | null
          totalSaleQuantity: number | null
        }
        Insert: {
          agencyName?: string | null
          albumSaleGuideResponse?: Json | null
          brandEnglishName?: string | null
          brandIdx?: number | null
          brandKoreanName?: string | null
          brandName?: string | null
          brandType?: string | null
          buyLimitCnt?: number | null
          buyLimitYn?: string | null
          buyPerYn?: string | null
          category?: string | null
          createdAt?: string | null
          ctgrList?: Json | null
          ctmrLimitCnt?: number | null
          ctmrPerYn?: string | null
          dcDiv?: string | null
          dcEdDt?: string | null
          dcFee?: number | null
          dcRatio?: number | null
          dcStDt?: string | null
          dcTermYn?: string | null
          dcYn?: string | null
          displaySaleQuantity?: string | null
          displaySaleTerm?: string | null
          dlvyDiv?: string | null
          dlvyPsbYn?: string | null
          dlvyYn?: string | null
          dpCtgrList?: Json | null
          dpYn?: string | null
          dtlDesc?: string | null
          erInfoI18n?: Json | null
          etcGuide?: string | null
          evtYn?: string | null
          excInfo?: Json | null
          exclusiveEventId?: Json | null
          faqList?: Json | null
          iconNew?: string | null
          imagePath?: string | null
          imgList?: Json | null
          langCd?: string | null
          langCrcy?: string | null
          limitYn?: string | null
          logoPath?: string | null
          optGrp?: Json | null
          optList?: Json | null
          optYn?: string | null
          pdBasicGuideApplyYn?: string | null
          pdCd: string
          pdDiv?: string | null
          pdInfoOfrGuide?: string | null
          pdNm?: string | null
          pdType?: string | null
          pdVideo?: string | null
          pdWeight?: number | null
          posterOptions?: Json | null
          posterQty?: number | null
          price?: number | null
          recomYn?: string | null
          releaseDate?: string | null
          retExcGuide?: string | null
          rlseInfo?: Json | null
          saleEdDt?: string | null
          saleEdTermYn?: string | null
          salePrice?: number | null
          saleStat?: string | null
          saleStDt?: string | null
          specialPdYn?: string | null
          stkCnt?: number | null
          stkCntDpYn?: string | null
          tags?: string | null
          thumbI18nUrl?: string | null
          totalSaleQuantity?: number | null
        }
        Update: {
          agencyName?: string | null
          albumSaleGuideResponse?: Json | null
          brandEnglishName?: string | null
          brandIdx?: number | null
          brandKoreanName?: string | null
          brandName?: string | null
          brandType?: string | null
          buyLimitCnt?: number | null
          buyLimitYn?: string | null
          buyPerYn?: string | null
          category?: string | null
          createdAt?: string | null
          ctgrList?: Json | null
          ctmrLimitCnt?: number | null
          ctmrPerYn?: string | null
          dcDiv?: string | null
          dcEdDt?: string | null
          dcFee?: number | null
          dcRatio?: number | null
          dcStDt?: string | null
          dcTermYn?: string | null
          dcYn?: string | null
          displaySaleQuantity?: string | null
          displaySaleTerm?: string | null
          dlvyDiv?: string | null
          dlvyPsbYn?: string | null
          dlvyYn?: string | null
          dpCtgrList?: Json | null
          dpYn?: string | null
          dtlDesc?: string | null
          erInfoI18n?: Json | null
          etcGuide?: string | null
          evtYn?: string | null
          excInfo?: Json | null
          exclusiveEventId?: Json | null
          faqList?: Json | null
          iconNew?: string | null
          imagePath?: string | null
          imgList?: Json | null
          langCd?: string | null
          langCrcy?: string | null
          limitYn?: string | null
          logoPath?: string | null
          optGrp?: Json | null
          optList?: Json | null
          optYn?: string | null
          pdBasicGuideApplyYn?: string | null
          pdCd?: string
          pdDiv?: string | null
          pdInfoOfrGuide?: string | null
          pdNm?: string | null
          pdType?: string | null
          pdVideo?: string | null
          pdWeight?: number | null
          posterOptions?: Json | null
          posterQty?: number | null
          price?: number | null
          recomYn?: string | null
          releaseDate?: string | null
          retExcGuide?: string | null
          rlseInfo?: Json | null
          saleEdDt?: string | null
          saleEdTermYn?: string | null
          salePrice?: number | null
          saleStat?: string | null
          saleStDt?: string | null
          specialPdYn?: string | null
          stkCnt?: number | null
          stkCntDpYn?: string | null
          tags?: string | null
          thumbI18nUrl?: string | null
          totalSaleQuantity?: number | null
        }
        Relationships: []
      }
      MakestarGoods: {
        Row: {
          agencyName: string | null
          brandEnglishName: string | null
          brandIdx: string | null
          brandKoreanName: string | null
          brandName: string | null
          brandType: string | null
          buyLimitCnt: string | null
          buyLimitYn: string | null
          buyPerYn: string | null
          ctgrList: Json | null
          ctmrLimitCnt: string | null
          ctmrPerYn: string | null
          dcDiv: string | null
          dcEdDt: string | null
          dcFee: string | null
          dcRatio: string | null
          dcStDt: string | null
          dcTermYn: string | null
          dcYn: string | null
          displaySaleQuantity: string | null
          displaySaleTerm: string | null
          dlvyDiv: string | null
          dlvyPsbYn: string | null
          dlvyYn: string | null
          dpCtgrList: Json | null
          dpYn: string | null
          dtlDesc: string | null
          erInfoI18n: Json | null
          etcGuide: string | null
          evtYn: string | null
          excInfo: Json | null
          exclusiveEventId: string | null
          faqList: Json | null
          iconNew: string | null
          id: number
          imagePath: string | null
          imgList: Json | null
          langCd: string | null
          langCrcy: string | null
          limitYn: string | null
          logoPath: string | null
          optGrp: Json | null
          optList: Json | null
          optYn: string | null
          pdBasicGuideApplyYn: string | null
          pdCd: string
          pdDiv: string | null
          pdInfoOfrGuide: string | null
          pdNm: string | null
          pdType: string | null
          pdVideo: string | null
          pdWeight: string | null
          posterOptions: Json | null
          posterQty: string | null
          price: string | null
          productId: string | null
          productTitle: string | null
          recomYn: string | null
          releaseDate: string | null
          retExcGuide: string | null
          rlseInfo: Json | null
          saleEdDt: string | null
          saleEdTermYn: string | null
          salePrice: string | null
          saleStat: string | null
          saleStDt: string | null
          specialPdYn: string | null
          stkCnt: string | null
          stkCntDpYn: string | null
          tags: string | null
          thumbI18nUrl: string | null
          totalSaleQuantity: string | null
          type: string | null
          updatedAt: string | null
          updateType: string | null
          variantTitle: string | null
        }
        Insert: {
          agencyName?: string | null
          brandEnglishName?: string | null
          brandIdx?: string | null
          brandKoreanName?: string | null
          brandName?: string | null
          brandType?: string | null
          buyLimitCnt?: string | null
          buyLimitYn?: string | null
          buyPerYn?: string | null
          ctgrList?: Json | null
          ctmrLimitCnt?: string | null
          ctmrPerYn?: string | null
          dcDiv?: string | null
          dcEdDt?: string | null
          dcFee?: string | null
          dcRatio?: string | null
          dcStDt?: string | null
          dcTermYn?: string | null
          dcYn?: string | null
          displaySaleQuantity?: string | null
          displaySaleTerm?: string | null
          dlvyDiv?: string | null
          dlvyPsbYn?: string | null
          dlvyYn?: string | null
          dpCtgrList?: Json | null
          dpYn?: string | null
          dtlDesc?: string | null
          erInfoI18n?: Json | null
          etcGuide?: string | null
          evtYn?: string | null
          excInfo?: Json | null
          exclusiveEventId?: string | null
          faqList?: Json | null
          iconNew?: string | null
          id?: number
          imagePath?: string | null
          imgList?: Json | null
          langCd?: string | null
          langCrcy?: string | null
          limitYn?: string | null
          logoPath?: string | null
          optGrp?: Json | null
          optList?: Json | null
          optYn?: string | null
          pdBasicGuideApplyYn?: string | null
          pdCd: string
          pdDiv?: string | null
          pdInfoOfrGuide?: string | null
          pdNm?: string | null
          pdType?: string | null
          pdVideo?: string | null
          pdWeight?: string | null
          posterOptions?: Json | null
          posterQty?: string | null
          price?: string | null
          productId?: string | null
          productTitle?: string | null
          recomYn?: string | null
          releaseDate?: string | null
          retExcGuide?: string | null
          rlseInfo?: Json | null
          saleEdDt?: string | null
          saleEdTermYn?: string | null
          salePrice?: string | null
          saleStat?: string | null
          saleStDt?: string | null
          specialPdYn?: string | null
          stkCnt?: string | null
          stkCntDpYn?: string | null
          tags?: string | null
          thumbI18nUrl?: string | null
          totalSaleQuantity?: string | null
          type?: string | null
          updatedAt?: string | null
          updateType?: string | null
          variantTitle?: string | null
        }
        Update: {
          agencyName?: string | null
          brandEnglishName?: string | null
          brandIdx?: string | null
          brandKoreanName?: string | null
          brandName?: string | null
          brandType?: string | null
          buyLimitCnt?: string | null
          buyLimitYn?: string | null
          buyPerYn?: string | null
          ctgrList?: Json | null
          ctmrLimitCnt?: string | null
          ctmrPerYn?: string | null
          dcDiv?: string | null
          dcEdDt?: string | null
          dcFee?: string | null
          dcRatio?: string | null
          dcStDt?: string | null
          dcTermYn?: string | null
          dcYn?: string | null
          displaySaleQuantity?: string | null
          displaySaleTerm?: string | null
          dlvyDiv?: string | null
          dlvyPsbYn?: string | null
          dlvyYn?: string | null
          dpCtgrList?: Json | null
          dpYn?: string | null
          dtlDesc?: string | null
          erInfoI18n?: Json | null
          etcGuide?: string | null
          evtYn?: string | null
          excInfo?: Json | null
          exclusiveEventId?: string | null
          faqList?: Json | null
          iconNew?: string | null
          id?: number
          imagePath?: string | null
          imgList?: Json | null
          langCd?: string | null
          langCrcy?: string | null
          limitYn?: string | null
          logoPath?: string | null
          optGrp?: Json | null
          optList?: Json | null
          optYn?: string | null
          pdBasicGuideApplyYn?: string | null
          pdCd?: string
          pdDiv?: string | null
          pdInfoOfrGuide?: string | null
          pdNm?: string | null
          pdType?: string | null
          pdVideo?: string | null
          pdWeight?: string | null
          posterOptions?: Json | null
          posterQty?: string | null
          price?: string | null
          productId?: string | null
          productTitle?: string | null
          recomYn?: string | null
          releaseDate?: string | null
          retExcGuide?: string | null
          rlseInfo?: Json | null
          saleEdDt?: string | null
          saleEdTermYn?: string | null
          salePrice?: string | null
          saleStat?: string | null
          saleStDt?: string | null
          specialPdYn?: string | null
          stkCnt?: string | null
          stkCntDpYn?: string | null
          tags?: string | null
          thumbI18nUrl?: string | null
          totalSaleQuantity?: string | null
          type?: string | null
          updatedAt?: string | null
          updateType?: string | null
          variantTitle?: string | null
        }
        Relationships: []
      }
      MakestarUploadResp: {
        Row: {
          id: number
          platform: string | null
          productId: string
          upInfo: Json[] | null
        }
        Insert: {
          id?: number
          platform?: string | null
          productId: string
          upInfo?: Json[] | null
        }
        Update: {
          id?: number
          platform?: string | null
          productId?: string
          upInfo?: Json[] | null
        }
        Relationships: []
      }
      marchmoster_refunds: {
        Row: {
          created_at: string
          id: number
          notes: string | null
          order_id: number
          processed_at: string | null
          processed_by: string | null
          refund_line_items: Json[] | null
          requested_at: string
          selected_gift: number
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: number
          notes?: string | null
          order_id: number
          processed_at?: string | null
          processed_by?: string | null
          refund_line_items?: Json[] | null
          requested_at?: string
          selected_gift: number
          status?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: number
          notes?: string | null
          order_id?: number
          processed_at?: string | null
          processed_by?: string | null
          refund_line_items?: Json[] | null
          requested_at?: string
          selected_gift?: number
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "marchmoster_refunds_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "by_custom_order"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "marchmoster_refunds_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "cn_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "marchmoster_refunds_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "kr_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "marchmoster_refunds_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_accuracy"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "marchmoster_refunds_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_core_data"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "marchmoster_refunds_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_flat_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "marchmoster_refunds_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_profit_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "marchmoster_refunds_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_transaction_entries"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "marchmoster_refunds_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marchmoster_refunds_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "marchmoster_refunds_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "payoneer_order_transaction_match"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "marchmoster_refunds_selected_gift_fkey"
            columns: ["selected_gift"]
            isOneToOne: false
            referencedRelation: "inventory_variants"
            referencedColumns: ["id"]
          },
        ]
      }
      marketplace_bunjang_products: {
        Row: {
          created_at: string
          isSold: boolean
          product_id: number
          product_id_str: string | null
          response: Json | null
        }
        Insert: {
          created_at?: string
          isSold?: boolean
          product_id: number
          product_id_str?: string | null
          response?: Json | null
        }
        Update: {
          created_at?: string
          isSold?: boolean
          product_id?: number
          product_id_str?: string | null
          response?: Json | null
        }
        Relationships: []
      }
      merge_inventory_log: {
        Row: {
          created_at: string
          from_inventory_id: number | null
          from_variant_title: string | null
          id: number
          to_inventory_id: number | null
          to_variant_title: string | null
        }
        Insert: {
          created_at?: string
          from_inventory_id?: number | null
          from_variant_title?: string | null
          id?: number
          to_inventory_id?: number | null
          to_variant_title?: string | null
        }
        Update: {
          created_at?: string
          from_inventory_id?: number | null
          from_variant_title?: string | null
          id?: number
          to_inventory_id?: number | null
          to_variant_title?: string | null
        }
        Relationships: []
      }
      merge_orders: {
        Row: {
          created_at: string
          customer_id: string | null
          id: number
          new_shipping_cost: number | null
          orders: string[] | null
          original_shipping_cost: number | null
          refund_shipping: boolean | null
          shipping_address: Json | null
          shipping_difference: number | null
          status: string | null
          total_weight_kg: number | null
        }
        Insert: {
          created_at?: string
          customer_id?: string | null
          id?: number
          new_shipping_cost?: number | null
          orders?: string[] | null
          original_shipping_cost?: number | null
          refund_shipping?: boolean | null
          shipping_address?: Json | null
          shipping_difference?: number | null
          status?: string | null
          total_weight_kg?: number | null
        }
        Update: {
          created_at?: string
          customer_id?: string | null
          id?: number
          new_shipping_cost?: number | null
          orders?: string[] | null
          original_shipping_cost?: number | null
          refund_shipping?: boolean | null
          shipping_address?: Json | null
          shipping_difference?: number | null
          status?: string | null
          total_weight_kg?: number | null
        }
        Relationships: []
      }
      metafield_definition: {
        Row: {
          description: string | null
          id: number
          key: string | null
          metafieldsCount: number | null
          name: string | null
          namespace: string | null
          ownerType: Json | null
          pinnedPosition: number | null
          standardTemplate: Json | null
          type: Json | null
          useAsCollectionCondition: boolean | null
          validations: Json | null
          validationStatus: string | null
        }
        Insert: {
          description?: string | null
          id?: number
          key?: string | null
          metafieldsCount?: number | null
          name?: string | null
          namespace?: string | null
          ownerType?: Json | null
          pinnedPosition?: number | null
          standardTemplate?: Json | null
          type?: Json | null
          useAsCollectionCondition?: boolean | null
          validations?: Json | null
          validationStatus?: string | null
        }
        Update: {
          description?: string | null
          id?: number
          key?: string | null
          metafieldsCount?: number | null
          name?: string | null
          namespace?: string | null
          ownerType?: Json | null
          pinnedPosition?: number | null
          standardTemplate?: Json | null
          type?: Json | null
          useAsCollectionCondition?: boolean | null
          validations?: Json | null
          validationStatus?: string | null
        }
        Relationships: []
      }
      mix_order_rating: {
        Row: {
          all_cn_rate: number | null
          cn_amount: number | null
          cn_rate: number | null
          cn_weight: number | null
          combine: boolean | null
          created_at: string
          error: boolean | null
          export_packing_list: boolean | null
          id: number
          kr_amount: number | null
          kr_rate: number | null
          kr_weight: number | null
          order_created_at: string | null
          order_id: number | null
          order_name: string | null
          shipping_fee: number | null
          shipping_title: string | null
        }
        Insert: {
          all_cn_rate?: number | null
          cn_amount?: number | null
          cn_rate?: number | null
          cn_weight?: number | null
          combine?: boolean | null
          created_at?: string
          error?: boolean | null
          export_packing_list?: boolean | null
          id?: number
          kr_amount?: number | null
          kr_rate?: number | null
          kr_weight?: number | null
          order_created_at?: string | null
          order_id?: number | null
          order_name?: string | null
          shipping_fee?: number | null
          shipping_title?: string | null
        }
        Update: {
          all_cn_rate?: number | null
          cn_amount?: number | null
          cn_rate?: number | null
          cn_weight?: number | null
          combine?: boolean | null
          created_at?: string
          error?: boolean | null
          export_packing_list?: boolean | null
          id?: number
          kr_amount?: number | null
          kr_rate?: number | null
          kr_weight?: number | null
          order_created_at?: string | null
          order_id?: number | null
          order_name?: string | null
          shipping_fee?: number | null
          shipping_title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "mix_order_rating_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "by_custom_order"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "mix_order_rating_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "cn_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "mix_order_rating_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "kr_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "mix_order_rating_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_accuracy"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "mix_order_rating_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_core_data"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "mix_order_rating_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_flat_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "mix_order_rating_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_profit_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "mix_order_rating_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_transaction_entries"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "mix_order_rating_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mix_order_rating_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "mix_order_rating_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "payoneer_order_transaction_match"
            referencedColumns: ["order_id"]
          },
        ]
      }
      notes: {
        Row: {
          created_at: string
          id: number
          images: Json[] | null
          line_item_id: number | null
          order_id: number | null
          text: string | null
          user_email: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          images?: Json[] | null
          line_item_id?: number | null
          order_id?: number | null
          text?: string | null
          user_email?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          images?: Json[] | null
          line_item_id?: number | null
          order_id?: number | null
          text?: string | null
          user_email?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "notes_line_item_id_fkey"
            columns: ["line_item_id"]
            isOneToOne: false
            referencedRelation: "line_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notes_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "by_custom_order"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "notes_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "cn_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "notes_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "kr_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "notes_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_accuracy"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "notes_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_core_data"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "notes_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_flat_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "notes_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_profit_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "notes_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_transaction_entries"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "notes_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notes_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "notes_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "payoneer_order_transaction_match"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "notes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      order_localization_extensions: {
        Row: {
          country_code: string | null
          created_at: string
          id: number
          key: string | null
          order_id: number | null
          purpose: string | null
          title: string | null
          value: string | null
        }
        Insert: {
          country_code?: string | null
          created_at?: string
          id?: number
          key?: string | null
          order_id?: number | null
          purpose?: string | null
          title?: string | null
          value?: string | null
        }
        Update: {
          country_code?: string | null
          created_at?: string
          id?: number
          key?: string | null
          order_id?: number | null
          purpose?: string | null
          title?: string | null
          value?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "order_localization_extension_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "by_custom_order"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "order_localization_extension_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "cn_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "order_localization_extension_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "kr_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "order_localization_extension_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_accuracy"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "order_localization_extension_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_core_data"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "order_localization_extension_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_flat_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "order_localization_extension_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_profit_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "order_localization_extension_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_transaction_entries"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "order_localization_extension_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_localization_extension_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "order_localization_extension_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "payoneer_order_transaction_match"
            referencedColumns: ["order_id"]
          },
        ]
      }
      orders: {
        Row: {
          additional_fees: Json | null
          alerts: Json | null
          app: Json | null
          billing_address: Json | null
          billing_address_matches_shipping_address: boolean | null
          can_mark_as_paid: boolean | null
          can_notify_customer: boolean | null
          cancel_reason: string | null
          cancellation: Json | null
          cancelled_at: string | null
          capturable: boolean | null
          cart_discount_amount_set: Json | null
          channel_information: Json | null
          client_ip: string | null
          closed: boolean | null
          closed_at: string | null
          combine_cn_kr: boolean | null
          confirmation_number: string | null
          confirmed: boolean | null
          created_at: string
          currency_code: string | null
          current_cart_discount_amount_set: Json | null
          current_subtotal_line_items_quantity: number | null
          current_subtotal_price_set: Json | null
          current_tax_lines: Json | null
          current_total_additional_fees_set: Json | null
          current_total_discounts_set: Json | null
          current_total_duties_set: Json | null
          current_total_price_set: Json | null
          current_total_tax_set: Json | null
          current_total_weight: number | null
          custom_attributes: Json | null
          customer: Json | null
          customer_accepts_marketing: boolean | null
          customer_id: number | null
          customer_journey_summary: Json | null
          customer_locale: string | null
          discount_code: string | null
          discount_codes: string[] | null
          display_address: Json | null
          display_financial_status: string | null
          display_fulfillment_status: string | null
          disputes: Json | null
          edited: boolean | null
          email: string | null
          email_sent_at: string | null
          estimated_taxes: boolean | null
          export: boolean | null
          exported_pl: boolean | null
          exported_yw: boolean | null
          fulfill_mabang: boolean | null
          fulfillable: boolean | null
          fulfilled_cn: boolean | null
          fulfillments: Json | null
          fully_paid: boolean | null
          has_cn_outbound_image: boolean | null
          has_timeline_comment: boolean | null
          id: number
          is_custom_order: boolean | null
          is_merged: boolean | null
          is_pre_order: boolean | null
          kr_to_cn: string | null
          legacy_resource_id: string | null
          localization_extensions: Json[] | null
          mabang_fulfilled_at: string | null
          merchant_editable: boolean | null
          merchant_editable_errors: string[] | null
          merchant_of_record_app: Json | null
          metafield: Json | null
          name: string | null
          need_reship: boolean | null
          net_payment_set: Json | null
          note: string | null
          note_internal: string | null
          notify_customer: boolean | null
          order_export: boolean | null
          original_total_additional_fees_set: Json | null
          original_total_duties_set: Json | null
          original_total_price_set: Json | null
          out_of_stock: boolean | null
          pending_shipment: boolean | null
          phone: string | null
          picked_up_cn: boolean | null
          po_number: string | null
          presentment_currency_code: string | null
          processed_at: string | null
          publication: Json | null
          purchased: boolean | null
          refund_discrepancy_set: Json | null
          refundable: boolean | null
          refunds: Json | null
          registered_source_url: string | null
          remaining_status: string | null
          requires_shipping: boolean | null
          restockable: boolean | null
          return_status: string | null
          shipping_address: Json | null
          shipping_line: Json | null
          shipping_title: string | null
          shop_id: number | null
          show_gift_1: boolean | null
          show_gift_2: boolean | null
          show_gift_3: boolean | null
          signature: string | null
          signature_count: number | null
          source: Database["public"]["Enums"]["order_source"] | null
          source_identifier: string | null
          status: string | null
          subtotal_line_items_quantity: number | null
          subtotal_price_set: Json | null
          tags: string[] | null
          tax_exempt: boolean | null
          tax_lines: Json | null
          taxes_included: boolean | null
          test: boolean | null
          total_capturable_set: Json | null
          total_discounts_set: Json | null
          total_outstanding_set: Json | null
          total_price_set: Json | null
          total_received_set: Json | null
          total_refunded_set: Json | null
          total_refunded_shipping_set: Json | null
          total_shipping_price_set: Json | null
          total_tax_set: Json | null
          total_tip_received_set: Json | null
          total_weight: number | null
          transactions: Json[] | null
          unpaid: boolean | null
          updated_at: string | null
        }
        Insert: {
          additional_fees?: Json | null
          alerts?: Json | null
          app?: Json | null
          billing_address?: Json | null
          billing_address_matches_shipping_address?: boolean | null
          can_mark_as_paid?: boolean | null
          can_notify_customer?: boolean | null
          cancel_reason?: string | null
          cancellation?: Json | null
          cancelled_at?: string | null
          capturable?: boolean | null
          cart_discount_amount_set?: Json | null
          channel_information?: Json | null
          client_ip?: string | null
          closed?: boolean | null
          closed_at?: string | null
          combine_cn_kr?: boolean | null
          confirmation_number?: string | null
          confirmed?: boolean | null
          created_at?: string
          currency_code?: string | null
          current_cart_discount_amount_set?: Json | null
          current_subtotal_line_items_quantity?: number | null
          current_subtotal_price_set?: Json | null
          current_tax_lines?: Json | null
          current_total_additional_fees_set?: Json | null
          current_total_discounts_set?: Json | null
          current_total_duties_set?: Json | null
          current_total_price_set?: Json | null
          current_total_tax_set?: Json | null
          current_total_weight?: number | null
          custom_attributes?: Json | null
          customer?: Json | null
          customer_accepts_marketing?: boolean | null
          customer_id?: number | null
          customer_journey_summary?: Json | null
          customer_locale?: string | null
          discount_code?: string | null
          discount_codes?: string[] | null
          display_address?: Json | null
          display_financial_status?: string | null
          display_fulfillment_status?: string | null
          disputes?: Json | null
          edited?: boolean | null
          email?: string | null
          email_sent_at?: string | null
          estimated_taxes?: boolean | null
          export?: boolean | null
          exported_pl?: boolean | null
          exported_yw?: boolean | null
          fulfill_mabang?: boolean | null
          fulfillable?: boolean | null
          fulfilled_cn?: boolean | null
          fulfillments?: Json | null
          fully_paid?: boolean | null
          has_cn_outbound_image?: boolean | null
          has_timeline_comment?: boolean | null
          id?: number
          is_custom_order?: boolean | null
          is_merged?: boolean | null
          is_pre_order?: boolean | null
          kr_to_cn?: string | null
          legacy_resource_id?: string | null
          localization_extensions?: Json[] | null
          mabang_fulfilled_at?: string | null
          merchant_editable?: boolean | null
          merchant_editable_errors?: string[] | null
          merchant_of_record_app?: Json | null
          metafield?: Json | null
          name?: string | null
          need_reship?: boolean | null
          net_payment_set?: Json | null
          note?: string | null
          note_internal?: string | null
          notify_customer?: boolean | null
          order_export?: boolean | null
          original_total_additional_fees_set?: Json | null
          original_total_duties_set?: Json | null
          original_total_price_set?: Json | null
          out_of_stock?: boolean | null
          pending_shipment?: boolean | null
          phone?: string | null
          picked_up_cn?: boolean | null
          po_number?: string | null
          presentment_currency_code?: string | null
          processed_at?: string | null
          publication?: Json | null
          purchased?: boolean | null
          refund_discrepancy_set?: Json | null
          refundable?: boolean | null
          refunds?: Json | null
          registered_source_url?: string | null
          remaining_status?: string | null
          requires_shipping?: boolean | null
          restockable?: boolean | null
          return_status?: string | null
          shipping_address?: Json | null
          shipping_line?: Json | null
          shipping_title?: string | null
          shop_id?: number | null
          show_gift_1?: boolean | null
          show_gift_2?: boolean | null
          show_gift_3?: boolean | null
          signature?: string | null
          signature_count?: number | null
          source?: Database["public"]["Enums"]["order_source"] | null
          source_identifier?: string | null
          status?: string | null
          subtotal_line_items_quantity?: number | null
          subtotal_price_set?: Json | null
          tags?: string[] | null
          tax_exempt?: boolean | null
          tax_lines?: Json | null
          taxes_included?: boolean | null
          test?: boolean | null
          total_capturable_set?: Json | null
          total_discounts_set?: Json | null
          total_outstanding_set?: Json | null
          total_price_set?: Json | null
          total_received_set?: Json | null
          total_refunded_set?: Json | null
          total_refunded_shipping_set?: Json | null
          total_shipping_price_set?: Json | null
          total_tax_set?: Json | null
          total_tip_received_set?: Json | null
          total_weight?: number | null
          transactions?: Json[] | null
          unpaid?: boolean | null
          updated_at?: string | null
        }
        Update: {
          additional_fees?: Json | null
          alerts?: Json | null
          app?: Json | null
          billing_address?: Json | null
          billing_address_matches_shipping_address?: boolean | null
          can_mark_as_paid?: boolean | null
          can_notify_customer?: boolean | null
          cancel_reason?: string | null
          cancellation?: Json | null
          cancelled_at?: string | null
          capturable?: boolean | null
          cart_discount_amount_set?: Json | null
          channel_information?: Json | null
          client_ip?: string | null
          closed?: boolean | null
          closed_at?: string | null
          combine_cn_kr?: boolean | null
          confirmation_number?: string | null
          confirmed?: boolean | null
          created_at?: string
          currency_code?: string | null
          current_cart_discount_amount_set?: Json | null
          current_subtotal_line_items_quantity?: number | null
          current_subtotal_price_set?: Json | null
          current_tax_lines?: Json | null
          current_total_additional_fees_set?: Json | null
          current_total_discounts_set?: Json | null
          current_total_duties_set?: Json | null
          current_total_price_set?: Json | null
          current_total_tax_set?: Json | null
          current_total_weight?: number | null
          custom_attributes?: Json | null
          customer?: Json | null
          customer_accepts_marketing?: boolean | null
          customer_id?: number | null
          customer_journey_summary?: Json | null
          customer_locale?: string | null
          discount_code?: string | null
          discount_codes?: string[] | null
          display_address?: Json | null
          display_financial_status?: string | null
          display_fulfillment_status?: string | null
          disputes?: Json | null
          edited?: boolean | null
          email?: string | null
          email_sent_at?: string | null
          estimated_taxes?: boolean | null
          export?: boolean | null
          exported_pl?: boolean | null
          exported_yw?: boolean | null
          fulfill_mabang?: boolean | null
          fulfillable?: boolean | null
          fulfilled_cn?: boolean | null
          fulfillments?: Json | null
          fully_paid?: boolean | null
          has_cn_outbound_image?: boolean | null
          has_timeline_comment?: boolean | null
          id?: number
          is_custom_order?: boolean | null
          is_merged?: boolean | null
          is_pre_order?: boolean | null
          kr_to_cn?: string | null
          legacy_resource_id?: string | null
          localization_extensions?: Json[] | null
          mabang_fulfilled_at?: string | null
          merchant_editable?: boolean | null
          merchant_editable_errors?: string[] | null
          merchant_of_record_app?: Json | null
          metafield?: Json | null
          name?: string | null
          need_reship?: boolean | null
          net_payment_set?: Json | null
          note?: string | null
          note_internal?: string | null
          notify_customer?: boolean | null
          order_export?: boolean | null
          original_total_additional_fees_set?: Json | null
          original_total_duties_set?: Json | null
          original_total_price_set?: Json | null
          out_of_stock?: boolean | null
          pending_shipment?: boolean | null
          phone?: string | null
          picked_up_cn?: boolean | null
          po_number?: string | null
          presentment_currency_code?: string | null
          processed_at?: string | null
          publication?: Json | null
          purchased?: boolean | null
          refund_discrepancy_set?: Json | null
          refundable?: boolean | null
          refunds?: Json | null
          registered_source_url?: string | null
          remaining_status?: string | null
          requires_shipping?: boolean | null
          restockable?: boolean | null
          return_status?: string | null
          shipping_address?: Json | null
          shipping_line?: Json | null
          shipping_title?: string | null
          shop_id?: number | null
          show_gift_1?: boolean | null
          show_gift_2?: boolean | null
          show_gift_3?: boolean | null
          signature?: string | null
          signature_count?: number | null
          source?: Database["public"]["Enums"]["order_source"] | null
          source_identifier?: string | null
          status?: string | null
          subtotal_line_items_quantity?: number | null
          subtotal_price_set?: Json | null
          tags?: string[] | null
          tax_exempt?: boolean | null
          tax_lines?: Json | null
          taxes_included?: boolean | null
          test?: boolean | null
          total_capturable_set?: Json | null
          total_discounts_set?: Json | null
          total_outstanding_set?: Json | null
          total_price_set?: Json | null
          total_received_set?: Json | null
          total_refunded_set?: Json | null
          total_refunded_shipping_set?: Json | null
          total_shipping_price_set?: Json | null
          total_tax_set?: Json | null
          total_tip_received_set?: Json | null
          total_weight?: number | null
          transactions?: Json[] | null
          unpaid?: boolean | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customer"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_shop_id_fkey"
            columns: ["shop_id"]
            isOneToOne: false
            referencedRelation: "shops"
            referencedColumns: ["id"]
          },
        ]
      }
      orders_exports: {
        Row: {
          created_at: string
          file_path: string
          id: number
          order_ids: Json[] | null
        }
        Insert: {
          created_at?: string
          file_path: string
          id?: number
          order_ids?: Json[] | null
        }
        Update: {
          created_at?: string
          file_path?: string
          id?: number
          order_ids?: Json[] | null
        }
        Relationships: []
      }
      outbound_images: {
        Row: {
          created_at: string
          id: number
          outbound_id: number | null
          path: string | null
          url: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          outbound_id?: number | null
          path?: string | null
          url?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          outbound_id?: number | null
          path?: string | null
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "outbound_images_outbound_id_fkey"
            columns: ["outbound_id"]
            isOneToOne: false
            referencedRelation: "outbounds"
            referencedColumns: ["id"]
          },
        ]
      }
      outbounds: {
        Row: {
          confirm: boolean | null
          created_at: string
          id: number
          order_id: number | null
          origin: string | null
          tracking_number: string | null
        }
        Insert: {
          confirm?: boolean | null
          created_at?: string
          id?: number
          order_id?: number | null
          origin?: string | null
          tracking_number?: string | null
        }
        Update: {
          confirm?: boolean | null
          created_at?: string
          id?: number
          order_id?: number | null
          origin?: string | null
          tracking_number?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "outbounds_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "by_custom_order"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "outbounds_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "cn_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "outbounds_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "kr_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "outbounds_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_accuracy"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "outbounds_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_core_data"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "outbounds_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_flat_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "outbounds_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_profit_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "outbounds_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_transaction_entries"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "outbounds_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "outbounds_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "outbounds_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "payoneer_order_transaction_match"
            referencedColumns: ["order_id"]
          },
        ]
      }
      package_line_items: {
        Row: {
          allocated_quantity: number
          created_at: string
          id: number
          inventory_variant_id: number | null
          package_id: number | null
          quantity: number
        }
        Insert: {
          allocated_quantity?: number
          created_at?: string
          id?: number
          inventory_variant_id?: number | null
          package_id?: number | null
          quantity: number
        }
        Update: {
          allocated_quantity?: number
          created_at?: string
          id?: number
          inventory_variant_id?: number | null
          package_id?: number | null
          quantity?: number
        }
        Relationships: [
          {
            foreignKeyName: "pacakage_line_items_inventory_variant_id_fkey"
            columns: ["inventory_variant_id"]
            isOneToOne: false
            referencedRelation: "inventory_variants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "package_line_items_package_id_fkey"
            columns: ["package_id"]
            isOneToOne: false
            referencedRelation: "packages"
            referencedColumns: ["id"]
          },
        ]
      }
      packages: {
        Row: {
          created_at: string
          id: number
          purchase_order_id: number | null
          tracking_number: string
        }
        Insert: {
          created_at?: string
          id?: number
          purchase_order_id?: number | null
          tracking_number: string
        }
        Update: {
          created_at?: string
          id?: number
          purchase_order_id?: number | null
          tracking_number?: string
        }
        Relationships: [
          {
            foreignKeyName: "packages_purchase_order_id_fkey"
            columns: ["purchase_order_id"]
            isOneToOne: false
            referencedRelation: "purchase_order_status_view"
            referencedColumns: ["purchase_order_id"]
          },
          {
            foreignKeyName: "packages_purchase_order_id_fkey"
            columns: ["purchase_order_id"]
            isOneToOne: false
            referencedRelation: "purchase_orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "packages_purchase_order_id_fkey"
            columns: ["purchase_order_id"]
            isOneToOne: false
            referencedRelation: "transaction_purchase_matching"
            referencedColumns: ["purchase_id"]
          },
          {
            foreignKeyName: "packages_purchase_order_id_fkey"
            columns: ["purchase_order_id"]
            isOneToOne: false
            referencedRelation: "transaction_v2_purchase_matching"
            referencedColumns: ["purchase_id"]
          },
        ]
      }
      payoneer_fees: {
        Row: {
          created_at: string | null
          fee_amount_currency: string | null
          fee_amount_value: number | null
          fee_percent_rate: number | null
          financial_detail_id: number | null
          flat_fee_rate_currency: string | null
          flat_fee_rate_value: number | null
          id: number
          network: string | null
          posting_sub_type: string | null
          posting_sub_type_name: string | null
          posting_type_name: string | null
        }
        Insert: {
          created_at?: string | null
          fee_amount_currency?: string | null
          fee_amount_value?: number | null
          fee_percent_rate?: number | null
          financial_detail_id?: number | null
          flat_fee_rate_currency?: string | null
          flat_fee_rate_value?: number | null
          id?: number
          network?: string | null
          posting_sub_type?: string | null
          posting_sub_type_name?: string | null
          posting_type_name?: string | null
        }
        Update: {
          created_at?: string | null
          fee_amount_currency?: string | null
          fee_amount_value?: number | null
          fee_percent_rate?: number | null
          financial_detail_id?: number | null
          flat_fee_rate_currency?: string | null
          flat_fee_rate_value?: number | null
          id?: number
          network?: string | null
          posting_sub_type?: string | null
          posting_sub_type_name?: string | null
          posting_type_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payoneer_fees_financial_detail_id_fkey"
            columns: ["financial_detail_id"]
            isOneToOne: false
            referencedRelation: "payoneer_financial_details"
            referencedColumns: ["id"]
          },
        ]
      }
      payoneer_financial_details: {
        Row: {
          billing_amount_currency: string | null
          billing_amount_value: number | null
          created_at: string | null
          detail_id: number | null
          fx_rate_with_markup: number | null
          fx_rate_without_markup: number | null
          id: number
          net_amount_excluding_rolling_reserve_currency: string | null
          net_amount_excluding_rolling_reserve_value: number | null
          original_amount_currency: string | null
          original_amount_value: number | null
          posting_sub_type_name: string | null
          posting_type_name: string | null
          total_fee_amount_currency: string | null
          total_fee_amount_value: number | null
        }
        Insert: {
          billing_amount_currency?: string | null
          billing_amount_value?: number | null
          created_at?: string | null
          detail_id?: number | null
          fx_rate_with_markup?: number | null
          fx_rate_without_markup?: number | null
          id?: number
          net_amount_excluding_rolling_reserve_currency?: string | null
          net_amount_excluding_rolling_reserve_value?: number | null
          original_amount_currency?: string | null
          original_amount_value?: number | null
          posting_sub_type_name?: string | null
          posting_type_name?: string | null
          total_fee_amount_currency?: string | null
          total_fee_amount_value?: number | null
        }
        Update: {
          billing_amount_currency?: string | null
          billing_amount_value?: number | null
          created_at?: string | null
          detail_id?: number | null
          fx_rate_with_markup?: number | null
          fx_rate_without_markup?: number | null
          id?: number
          net_amount_excluding_rolling_reserve_currency?: string | null
          net_amount_excluding_rolling_reserve_value?: number | null
          original_amount_currency?: string | null
          original_amount_value?: number | null
          posting_sub_type_name?: string | null
          posting_type_name?: string | null
          total_fee_amount_currency?: string | null
          total_fee_amount_value?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "payoneer_financial_details_detail_id_fkey"
            columns: ["detail_id"]
            isOneToOne: false
            referencedRelation: "payoneer_transaction_details"
            referencedColumns: ["id"]
          },
        ]
      }
      payoneer_payout_events: {
        Row: {
          created_at: string | null
          detail_id: number | null
          id: number
          payout_amount_currency: string | null
          payout_amount_value: number | null
          payout_date: string | null
          payout_event_name: string | null
          payout_status: string | null
        }
        Insert: {
          created_at?: string | null
          detail_id?: number | null
          id?: number
          payout_amount_currency?: string | null
          payout_amount_value?: number | null
          payout_date?: string | null
          payout_event_name?: string | null
          payout_status?: string | null
        }
        Update: {
          created_at?: string | null
          detail_id?: number | null
          id?: number
          payout_amount_currency?: string | null
          payout_amount_value?: number | null
          payout_date?: string | null
          payout_event_name?: string | null
          payout_status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payoneer_payout_events_detail_id_fkey"
            columns: ["detail_id"]
            isOneToOne: false
            referencedRelation: "payoneer_transaction_details"
            referencedColumns: ["id"]
          },
        ]
      }
      payoneer_transaction_details: {
        Row: {
          created_at: string | null
          currency: string | null
          group_id: string
          id: number
          total_net_amount_currency: string | null
          total_net_amount_value: number | null
          total_net_debit_amount_currency: string | null
          total_net_debit_amount_value: number | null
          transaction_id: number | null
        }
        Insert: {
          created_at?: string | null
          currency?: string | null
          group_id: string
          id?: number
          total_net_amount_currency?: string | null
          total_net_amount_value?: number | null
          total_net_debit_amount_currency?: string | null
          total_net_debit_amount_value?: number | null
          transaction_id?: number | null
        }
        Update: {
          created_at?: string | null
          currency?: string | null
          group_id?: string
          id?: number
          total_net_amount_currency?: string | null
          total_net_amount_value?: number | null
          total_net_debit_amount_currency?: string | null
          total_net_debit_amount_value?: number | null
          transaction_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "payoneer_transaction_details_transaction_id_fkey"
            columns: ["transaction_id"]
            isOneToOne: false
            referencedRelation: "payoneer_order_transaction_match"
            referencedColumns: ["payoneer_transaction_pk"]
          },
          {
            foreignKeyName: "payoneer_transaction_details_transaction_id_fkey"
            columns: ["transaction_id"]
            isOneToOne: false
            referencedRelation: "payoneer_transactions"
            referencedColumns: ["id"]
          },
        ]
      }
      payoneer_transactions: {
        Row: {
          amount_currency: string | null
          amount_value: number | null
          captured_amount_currency: string | null
          captured_amount_value: number | null
          card_last_four: string | null
          card_masked_number: string | null
          cardholder_name: string | null
          country: string | null
          created_at: string | null
          customer_email: string | null
          customer_name: string | null
          customer_number: string | null
          division: string | null
          division_name: string | null
          financial_institution_code: string | null
          group_id: string
          id: number
          merchant_transaction_id: string | null
          payment_method: string | null
          raw_data: Json | null
          result_info: string | null
          risk_level: string | null
          status: string | null
          status_reason: string | null
          transaction_date: string | null
          transaction_source: string | null
          updated_at: string | null
        }
        Insert: {
          amount_currency?: string | null
          amount_value?: number | null
          captured_amount_currency?: string | null
          captured_amount_value?: number | null
          card_last_four?: string | null
          card_masked_number?: string | null
          cardholder_name?: string | null
          country?: string | null
          created_at?: string | null
          customer_email?: string | null
          customer_name?: string | null
          customer_number?: string | null
          division?: string | null
          division_name?: string | null
          financial_institution_code?: string | null
          group_id: string
          id?: number
          merchant_transaction_id?: string | null
          payment_method?: string | null
          raw_data?: Json | null
          result_info?: string | null
          risk_level?: string | null
          status?: string | null
          status_reason?: string | null
          transaction_date?: string | null
          transaction_source?: string | null
          updated_at?: string | null
        }
        Update: {
          amount_currency?: string | null
          amount_value?: number | null
          captured_amount_currency?: string | null
          captured_amount_value?: number | null
          card_last_four?: string | null
          card_masked_number?: string | null
          cardholder_name?: string | null
          country?: string | null
          created_at?: string | null
          customer_email?: string | null
          customer_name?: string | null
          customer_number?: string | null
          division?: string | null
          division_name?: string | null
          financial_institution_code?: string | null
          group_id?: string
          id?: number
          merchant_transaction_id?: string | null
          payment_method?: string | null
          raw_data?: Json | null
          result_info?: string | null
          risk_level?: string | null
          status?: string | null
          status_reason?: string | null
          transaction_date?: string | null
          transaction_source?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      paypal_tracking_logs: {
        Row: {
          carrier: string | null
          created_at: string
          errors: Json[] | null
          id: number
          order_id: number | null
          result: Json | null
          tracking_number: string | null
          updated_at: string | null
        }
        Insert: {
          carrier?: string | null
          created_at?: string
          errors?: Json[] | null
          id?: number
          order_id?: number | null
          result?: Json | null
          tracking_number?: string | null
          updated_at?: string | null
        }
        Update: {
          carrier?: string | null
          created_at?: string
          errors?: Json[] | null
          id?: number
          order_id?: number | null
          result?: Json | null
          tracking_number?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "paypal_tracking_logs_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "by_custom_order"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "paypal_tracking_logs_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "cn_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "paypal_tracking_logs_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "kr_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "paypal_tracking_logs_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_accuracy"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "paypal_tracking_logs_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_core_data"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "paypal_tracking_logs_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_flat_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "paypal_tracking_logs_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_profit_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "paypal_tracking_logs_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_transaction_entries"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "paypal_tracking_logs_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "paypal_tracking_logs_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "paypal_tracking_logs_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "payoneer_order_transaction_match"
            referencedColumns: ["order_id"]
          },
        ]
      }
      paypal_transactions: {
        Row: {
          available_balance_currency: string | null
          available_balance_value: number | null
          created_at: string | null
          custom_field: string | null
          ending_balance_currency: string | null
          ending_balance_value: number | null
          fee_currency: string | null
          fee_value: number | null
          id: number
          invoice_id: string | null
          paypal_account_id: string | null
          paypal_reference_id: string | null
          paypal_reference_id_type: string | null
          protection_eligibility: string | null
          shipping_currency: string | null
          shipping_value: number | null
          transaction_currency: string | null
          transaction_event_code: string | null
          transaction_id: string | null
          transaction_initiation_date: string | null
          transaction_status: string | null
          transaction_updated_date: string | null
          transaction_value: number | null
        }
        Insert: {
          available_balance_currency?: string | null
          available_balance_value?: number | null
          created_at?: string | null
          custom_field?: string | null
          ending_balance_currency?: string | null
          ending_balance_value?: number | null
          fee_currency?: string | null
          fee_value?: number | null
          id?: number
          invoice_id?: string | null
          paypal_account_id?: string | null
          paypal_reference_id?: string | null
          paypal_reference_id_type?: string | null
          protection_eligibility?: string | null
          shipping_currency?: string | null
          shipping_value?: number | null
          transaction_currency?: string | null
          transaction_event_code?: string | null
          transaction_id?: string | null
          transaction_initiation_date?: string | null
          transaction_status?: string | null
          transaction_updated_date?: string | null
          transaction_value?: number | null
        }
        Update: {
          available_balance_currency?: string | null
          available_balance_value?: number | null
          created_at?: string | null
          custom_field?: string | null
          ending_balance_currency?: string | null
          ending_balance_value?: number | null
          fee_currency?: string | null
          fee_value?: number | null
          id?: number
          invoice_id?: string | null
          paypal_account_id?: string | null
          paypal_reference_id?: string | null
          paypal_reference_id_type?: string | null
          protection_eligibility?: string | null
          shipping_currency?: string | null
          shipping_value?: number | null
          transaction_currency?: string | null
          transaction_event_code?: string | null
          transaction_id?: string | null
          transaction_initiation_date?: string | null
          transaction_status?: string | null
          transaction_updated_date?: string | null
          transaction_value?: number | null
        }
        Relationships: []
      }
      printer: {
        Row: {
          created_at: string
          name: string
          supported_couriers: Database["public"]["Enums"]["courier"][] | null
        }
        Insert: {
          created_at?: string
          name: string
          supported_couriers?: Database["public"]["Enums"]["courier"][] | null
        }
        Update: {
          created_at?: string
          name?: string
          supported_couriers?: Database["public"]["Enums"]["courier"][] | null
        }
        Relationships: []
      }
      product_discount: {
        Row: {
          created_at: string
          discount: number | null
          group_id: string | null
          id: number
          product_id: number | null
        }
        Insert: {
          created_at?: string
          discount?: number | null
          group_id?: string | null
          id?: number
          product_id?: number | null
        }
        Update: {
          created_at?: string
          discount?: number | null
          group_id?: string | null
          id?: number
          product_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "product_discount_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_discount_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      product_metafields: {
        Row: {
          created_at: string
          id: number
          key: string | null
          product_id: number | null
          value: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          key?: string | null
          product_id?: number | null
          value?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          key?: string | null
          product_id?: number | null
          value?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "product_metafields_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          alternate_name: string | null
          category: Json | null
          created_at: string
          description: string | null
          description_html: string | null
          featured_image: Json | null
          handle: string | null
          id: number
          max_variant_price: number | null
          min_variant_price: number | null
          payload_new: Json | null
          payload_old: Json | null
          price_range_v2: Json | null
          product_type: string | null
          published_at: string | null
          seo: Json | null
          shop_id: number | null
          size_chart: Json | null
          source: string
          status: string | null
          tags: string[] | null
          template_suffix: string | null
          title: string | null
          total_inventory: number | null
          total_variants: number | null
          updated_at: string | null
          vendor: string | null
        }
        Insert: {
          alternate_name?: string | null
          category?: Json | null
          created_at?: string
          description?: string | null
          description_html?: string | null
          featured_image?: Json | null
          handle?: string | null
          id?: number
          max_variant_price?: number | null
          min_variant_price?: number | null
          payload_new?: Json | null
          payload_old?: Json | null
          price_range_v2?: Json | null
          product_type?: string | null
          published_at?: string | null
          seo?: Json | null
          shop_id?: number | null
          size_chart?: Json | null
          source: string
          status?: string | null
          tags?: string[] | null
          template_suffix?: string | null
          title?: string | null
          total_inventory?: number | null
          total_variants?: number | null
          updated_at?: string | null
          vendor?: string | null
        }
        Update: {
          alternate_name?: string | null
          category?: Json | null
          created_at?: string
          description?: string | null
          description_html?: string | null
          featured_image?: Json | null
          handle?: string | null
          id?: number
          max_variant_price?: number | null
          min_variant_price?: number | null
          payload_new?: Json | null
          payload_old?: Json | null
          price_range_v2?: Json | null
          product_type?: string | null
          published_at?: string | null
          seo?: Json | null
          shop_id?: number | null
          size_chart?: Json | null
          source?: string
          status?: string | null
          tags?: string[] | null
          template_suffix?: string | null
          title?: string | null
          total_inventory?: number | null
          total_variants?: number | null
          updated_at?: string | null
          vendor?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "products_shop_id_fkey"
            columns: ["shop_id"]
            isOneToOne: false
            referencedRelation: "shops"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          current_group_id: string | null
          email: string | null
          id: string
        }
        Insert: {
          current_group_id?: string | null
          email?: string | null
          id: string
        }
        Update: {
          current_group_id?: string | null
          email?: string | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_current_group_id_fkey"
            columns: ["current_group_id"]
            isOneToOne: false
            referencedRelation: "groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      purchase_order_images: {
        Row: {
          created_at: string
          id: number
          path: string | null
          purchase_order_id: number | null
          url: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          path?: string | null
          purchase_order_id?: number | null
          url?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          path?: string | null
          purchase_order_id?: number | null
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "purchase_order_images_purchase_order_id_fkey"
            columns: ["purchase_order_id"]
            isOneToOne: false
            referencedRelation: "purchase_order_status_view"
            referencedColumns: ["purchase_order_id"]
          },
          {
            foreignKeyName: "purchase_order_images_purchase_order_id_fkey"
            columns: ["purchase_order_id"]
            isOneToOne: false
            referencedRelation: "purchase_orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "purchase_order_images_purchase_order_id_fkey"
            columns: ["purchase_order_id"]
            isOneToOne: false
            referencedRelation: "transaction_purchase_matching"
            referencedColumns: ["purchase_id"]
          },
          {
            foreignKeyName: "purchase_order_images_purchase_order_id_fkey"
            columns: ["purchase_order_id"]
            isOneToOne: false
            referencedRelation: "transaction_v2_purchase_matching"
            referencedColumns: ["purchase_id"]
          },
        ]
      }
      purchase_orders: {
        Row: {
          code: string
          created_at: string
          destination: string | null
          draft: boolean | null
          ed_date: string | null
          fee: number | null
          fts: unknown | null
          id: number
          note: string | null
          screenshot_url: string | null
          status: Database["public"]["Enums"]["po_status"]
          supplier: string | null
          updated_at: string
        }
        Insert: {
          code: string
          created_at?: string
          destination?: string | null
          draft?: boolean | null
          ed_date?: string | null
          fee?: number | null
          fts?: unknown | null
          id?: number
          note?: string | null
          screenshot_url?: string | null
          status?: Database["public"]["Enums"]["po_status"]
          supplier?: string | null
          updated_at?: string
        }
        Update: {
          code?: string
          created_at?: string
          destination?: string | null
          draft?: boolean | null
          ed_date?: string | null
          fee?: number | null
          fts?: unknown | null
          id?: number
          note?: string | null
          screenshot_url?: string | null
          status?: Database["public"]["Enums"]["po_status"]
          supplier?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      purchase_orders_draft: {
        Row: {
          code: string
          created_at: string
          destination: string | null
          draft: boolean | null
          ed_date: string | null
          fee: number | null
          fts: unknown | null
          id: number
          note: string | null
          status: Database["public"]["Enums"]["po_status"]
          supplier: string | null
          updated_at: string
        }
        Insert: {
          code: string
          created_at?: string
          destination?: string | null
          draft?: boolean | null
          ed_date?: string | null
          fee?: number | null
          fts?: unknown | null
          id?: number
          note?: string | null
          status?: Database["public"]["Enums"]["po_status"]
          supplier?: string | null
          updated_at?: string
        }
        Update: {
          code?: string
          created_at?: string
          destination?: string | null
          draft?: boolean | null
          ed_date?: string | null
          fee?: number | null
          fts?: unknown | null
          id?: number
          note?: string | null
          status?: Database["public"]["Enums"]["po_status"]
          supplier?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      racks: {
        Row: {
          barcode: string | null
          created_at: string
          id: number
          name: string
        }
        Insert: {
          barcode?: string | null
          created_at?: string
          id?: number
          name: string
        }
        Update: {
          barcode?: string | null
          created_at?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      result: {
        Row: {
          json_agg: Json | null
        }
        Insert: {
          json_agg?: Json | null
        }
        Update: {
          json_agg?: Json | null
        }
        Relationships: []
      }
      shipment_details: {
        Row: {
          checked: boolean | null
          checked_at: string | null
          created_at: string
          fulfillment_order_line_item_id: number | null
          id: number
          inventory_item_id: number | null
          inventory_variant_id: number | null
          order_id: number | null
          order_name: string | null
          shipment_id: number | null
        }
        Insert: {
          checked?: boolean | null
          checked_at?: string | null
          created_at?: string
          fulfillment_order_line_item_id?: number | null
          id?: number
          inventory_item_id?: number | null
          inventory_variant_id?: number | null
          order_id?: number | null
          order_name?: string | null
          shipment_id?: number | null
        }
        Update: {
          checked?: boolean | null
          checked_at?: string | null
          created_at?: string
          fulfillment_order_line_item_id?: number | null
          id?: number
          inventory_item_id?: number | null
          inventory_variant_id?: number | null
          order_id?: number | null
          order_name?: string | null
          shipment_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "shipment_details_fulfillment_order_line_item_id_fkey"
            columns: ["fulfillment_order_line_item_id"]
            isOneToOne: false
            referencedRelation: "fulfillment_order_line_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shipment_details_inventory_item_id_fkey"
            columns: ["inventory_item_id"]
            isOneToOne: false
            referencedRelation: "inventory_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shipment_details_inventory_variant_id_fkey"
            columns: ["inventory_variant_id"]
            isOneToOne: false
            referencedRelation: "inventory_variants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shipment_details_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "by_custom_order"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "shipment_details_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "cn_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "shipment_details_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "kr_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "shipment_details_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_accuracy"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "shipment_details_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_core_data"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "shipment_details_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_flat_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "shipment_details_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_profit_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "shipment_details_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_transaction_entries"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "shipment_details_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shipment_details_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "shipment_details_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "payoneer_order_transaction_match"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "shipment_details_shipment_id_fkey"
            columns: ["shipment_id"]
            isOneToOne: false
            referencedRelation: "shipments"
            referencedColumns: ["id"]
          },
        ]
      }
      shipment_images: {
        Row: {
          created_at: string
          id: number
          path: string | null
          shipment_id: number | null
          url: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          path?: string | null
          shipment_id?: number | null
          url?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          path?: string | null
          shipment_id?: number | null
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "shipment_images_shipment_id_fkey"
            columns: ["shipment_id"]
            isOneToOne: false
            referencedRelation: "shipments"
            referencedColumns: ["id"]
          },
        ]
      }
      shipments: {
        Row: {
          cancelled: boolean | null
          cancelled_at: string | null
          checked: boolean | null
          created_at: string
          creator_id: string | null
          file_name: string | null
          fulfilled: boolean | null
          fulfilled_at: string | null
          id: number
          image_uploaded: boolean | null
          is_exported: boolean
          is_inventory_deducted: boolean | null
          isIcn: boolean | null
          order_id: number | null
          picked_up: boolean | null
          reprint: number | null
          shipping_account_id: number
          tracking_number: string
        }
        Insert: {
          cancelled?: boolean | null
          cancelled_at?: string | null
          checked?: boolean | null
          created_at?: string
          creator_id?: string | null
          file_name?: string | null
          fulfilled?: boolean | null
          fulfilled_at?: string | null
          id?: number
          image_uploaded?: boolean | null
          is_exported?: boolean
          is_inventory_deducted?: boolean | null
          isIcn?: boolean | null
          order_id?: number | null
          picked_up?: boolean | null
          reprint?: number | null
          shipping_account_id: number
          tracking_number: string
        }
        Update: {
          cancelled?: boolean | null
          cancelled_at?: string | null
          checked?: boolean | null
          created_at?: string
          creator_id?: string | null
          file_name?: string | null
          fulfilled?: boolean | null
          fulfilled_at?: string | null
          id?: number
          image_uploaded?: boolean | null
          is_exported?: boolean
          is_inventory_deducted?: boolean | null
          isIcn?: boolean | null
          order_id?: number | null
          picked_up?: boolean | null
          reprint?: number | null
          shipping_account_id?: number
          tracking_number?: string
        }
        Relationships: [
          {
            foreignKeyName: "shipments_creator_id_fkey"
            columns: ["creator_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shipments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "by_custom_order"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "shipments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "cn_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "shipments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "kr_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "shipments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_accuracy"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "shipments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_core_data"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "shipments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_flat_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "shipments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_profit_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "shipments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_transaction_entries"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "shipments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shipments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "shipments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "payoneer_order_transaction_match"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "shipments_shipping_account_id_fkey"
            columns: ["shipping_account_id"]
            isOneToOne: false
            referencedRelation: "shipping_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      shipments_cn: {
        Row: {
          company: string | null
          created_at: string
          error_message: string | null
          id: number
          order_id: number | null
          status: boolean | null
          tracking_number: string | null
        }
        Insert: {
          company?: string | null
          created_at?: string
          error_message?: string | null
          id?: number
          order_id?: number | null
          status?: boolean | null
          tracking_number?: string | null
        }
        Update: {
          company?: string | null
          created_at?: string
          error_message?: string | null
          id?: number
          order_id?: number | null
          status?: boolean | null
          tracking_number?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "shipments_cn_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "by_custom_order"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "shipments_cn_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "cn_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "shipments_cn_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "kr_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "shipments_cn_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_accuracy"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "shipments_cn_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_core_data"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "shipments_cn_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_flat_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "shipments_cn_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_profit_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "shipments_cn_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_transaction_entries"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "shipments_cn_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shipments_cn_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "shipments_cn_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "payoneer_order_transaction_match"
            referencedColumns: ["order_id"]
          },
        ]
      }
      shipments_expo: {
        Row: {
          created_at: string
          id: number
          tracking_number: string
        }
        Insert: {
          created_at?: string
          id?: number
          tracking_number: string
        }
        Update: {
          created_at?: string
          id?: number
          tracking_number?: string
        }
        Relationships: []
      }
      shipments_exports: {
        Row: {
          courier: Database["public"]["Enums"]["courier"] | null
          created_at: string
          file_path: string
          id: number
        }
        Insert: {
          courier?: Database["public"]["Enums"]["courier"] | null
          created_at?: string
          file_path: string
          id?: number
        }
        Update: {
          courier?: Database["public"]["Enums"]["courier"] | null
          created_at?: string
          file_path?: string
          id?: number
        }
        Relationships: []
      }
      shipments_variants: {
        Row: {
          category: string
          created_at: string
          description: string
          id: number
          monetary_value: number
          origin_country: string
          unmodified_description: string
          weight: number
        }
        Insert: {
          category: string
          created_at?: string
          description: string
          id?: number
          monetary_value: number
          origin_country: string
          unmodified_description?: string
          weight: number
        }
        Update: {
          category?: string
          created_at?: string
          description?: string
          id?: number
          monetary_value?: number
          origin_country?: string
          unmodified_description?: string
          weight?: number
        }
        Relationships: []
      }
      shipping_accounts: {
        Row: {
          courier: Database["public"]["Enums"]["courier"]
          courier_data: Json
          courier_region: string
          created_at: string
          default_printer: string
          id: number
          name: string
        }
        Insert: {
          courier: Database["public"]["Enums"]["courier"]
          courier_data: Json
          courier_region?: string
          created_at?: string
          default_printer: string
          id?: number
          name: string
        }
        Update: {
          courier?: Database["public"]["Enums"]["courier"]
          courier_data?: Json
          courier_region?: string
          created_at?: string
          default_printer?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      shipping_info_cn: {
        Row: {
          company: string | null
          created_at: string
          creator_id: string | null
          file_path: string | null
          id: number
          message: string | null
          order_name: string | null
          show_custom_message: boolean | null
          status: string | null
          tracking_number: string | null
        }
        Insert: {
          company?: string | null
          created_at?: string
          creator_id?: string | null
          file_path?: string | null
          id?: number
          message?: string | null
          order_name?: string | null
          show_custom_message?: boolean | null
          status?: string | null
          tracking_number?: string | null
        }
        Update: {
          company?: string | null
          created_at?: string
          creator_id?: string | null
          file_path?: string | null
          id?: number
          message?: string | null
          order_name?: string | null
          show_custom_message?: boolean | null
          status?: string | null
          tracking_number?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "shipping_info_cn_creator_id_fkey"
            columns: ["creator_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      shops: {
        Row: {
          created_at: string
          current_bulk_operation: Json | null
          group_id: string
          id: number
          makestar_upload_count: number | null
          makestarLastUpAt: string | null
          name: string
          received_webhooks: Json[] | null
          shopify_access_token: string
          shopify_api_key: string
          shopify_api_secret: string
          sync_time: string | null
          updated_at: string | null
          yes24_upload_count: number | null
        }
        Insert: {
          created_at?: string
          current_bulk_operation?: Json | null
          group_id?: string
          id?: number
          makestar_upload_count?: number | null
          makestarLastUpAt?: string | null
          name: string
          received_webhooks?: Json[] | null
          shopify_access_token: string
          shopify_api_key: string
          shopify_api_secret: string
          sync_time?: string | null
          updated_at?: string | null
          yes24_upload_count?: number | null
        }
        Update: {
          created_at?: string
          current_bulk_operation?: Json | null
          group_id?: string
          id?: number
          makestar_upload_count?: number | null
          makestarLastUpAt?: string | null
          name?: string
          received_webhooks?: Json[] | null
          shopify_access_token?: string
          shopify_api_key?: string
          shopify_api_secret?: string
          sync_time?: string | null
          updated_at?: string | null
          yes24_upload_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "shops_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "groups"
            referencedColumns: ["id"]
          },
        ]
      }
      social_comments: {
        Row: {
          approved: boolean | null
          author: Json
          created_at: string | null
          id: string
          like_count: number | null
          media: Json | null
          original_post_id: string
          platform: Database["public"]["Enums"]["social_platform_enum"]
          text: string | null
        }
        Insert: {
          approved?: boolean | null
          author: Json
          created_at?: string | null
          id: string
          like_count?: number | null
          media?: Json | null
          original_post_id: string
          platform: Database["public"]["Enums"]["social_platform_enum"]
          text?: string | null
        }
        Update: {
          approved?: boolean | null
          author?: Json
          created_at?: string | null
          id?: string
          like_count?: number | null
          media?: Json | null
          original_post_id?: string
          platform?: Database["public"]["Enums"]["social_platform_enum"]
          text?: string | null
        }
        Relationships: []
      }
      temp_cn_inventory: {
        Row: {
          created_at: string
          id: number
          onhand: number | null
          real_onhand: number | null
          reship_quantity: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          onhand?: number | null
          real_onhand?: number | null
          reship_quantity?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          onhand?: number | null
          real_onhand?: number | null
          reship_quantity?: number | null
        }
        Relationships: []
      }
      temp_inventory_allocation: {
        Row: {
          allocated_quantity: number
          incoming_allocated_quantity: number | null
          inventory_variant_id: number
          onhand: number | null
        }
        Insert: {
          allocated_quantity?: number
          incoming_allocated_quantity?: number | null
          inventory_variant_id: number
          onhand?: number | null
        }
        Update: {
          allocated_quantity?: number
          incoming_allocated_quantity?: number | null
          inventory_variant_id?: number
          onhand?: number | null
        }
        Relationships: []
      }
      temp_line_items_ready_to_ship: {
        Row: {
          allocated_qty: number | null
          incoming_allocated_qty: number | null
          index_count: number | null
          inventory_variant_id: number | null
          last_estimated_time: string | null
          li_updated_at: string | null
          line_item_id: number
          order_created_at: string | null
          order_name: string | null
          order_updated_at: string | null
          purchased: boolean | null
          ready_to_ship: boolean
          search_vector: unknown | null
          title: string | null
          unfulfilled_quantity: number | null
        }
        Insert: {
          allocated_qty?: number | null
          incoming_allocated_qty?: number | null
          index_count?: number | null
          inventory_variant_id?: number | null
          last_estimated_time?: string | null
          li_updated_at?: string | null
          line_item_id: number
          order_created_at?: string | null
          order_name?: string | null
          order_updated_at?: string | null
          purchased?: boolean | null
          ready_to_ship?: boolean
          search_vector?: unknown | null
          title?: string | null
          unfulfilled_quantity?: number | null
        }
        Update: {
          allocated_qty?: number | null
          incoming_allocated_qty?: number | null
          index_count?: number | null
          inventory_variant_id?: number | null
          last_estimated_time?: string | null
          li_updated_at?: string | null
          line_item_id?: number
          order_created_at?: string | null
          order_name?: string | null
          order_updated_at?: string | null
          purchased?: boolean | null
          ready_to_ship?: boolean
          search_vector?: unknown | null
          title?: string | null
          unfulfilled_quantity?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "temp_line_items_ready_to_ship_inventory_variant_id_fkey"
            columns: ["inventory_variant_id"]
            isOneToOne: false
            referencedRelation: "inventory_variants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "temp_line_items_ready_to_ship_line_item_id_fkey"
            columns: ["line_item_id"]
            isOneToOne: true
            referencedRelation: "line_items"
            referencedColumns: ["id"]
          },
        ]
      }
      temp_resend_orders: {
        Row: {
          id: number
          name: string
          ready: boolean | null
          resent: boolean
        }
        Insert: {
          id: number
          name: string
          ready?: boolean | null
          resent?: boolean
        }
        Update: {
          id?: number
          name?: string
          ready?: boolean | null
          resent?: boolean
        }
        Relationships: []
      }
      total_weight: {
        Row: {
          coalesce: number | null
        }
        Insert: {
          coalesce?: number | null
        }
        Update: {
          coalesce?: number | null
        }
        Relationships: []
      }
      tracking_number_update: {
        Row: {
          company: string | null
          created_at: string
          done: boolean | null
          id: number
          order_name: string | null
          tracking_number: string | null
        }
        Insert: {
          company?: string | null
          created_at?: string
          done?: boolean | null
          id?: number
          order_name?: string | null
          tracking_number?: string | null
        }
        Update: {
          company?: string | null
          created_at?: string
          done?: boolean | null
          id?: number
          order_name?: string | null
          tracking_number?: string | null
        }
        Relationships: []
      }
      transaction: {
        Row: {
          allocation_time: string | null
          allocation_user_id: string | null
          Amount: number | null
          belong_user: number | null
          CardApprovalCost: number | null
          CardApprovalNum: string | null
          CardApprovalType: string | null
          CardNum: string | null
          CorpNum: string | null
          Currency: string | null
          custom_unique: string
          format_dt: string | null
          id: number
          InstallmentMonths: string | null
          Memo: string | null
          PaymentPlan: string | null
          rebate: number | null
          ServiceCharge: number | null
          Tax: number | null
          TotalAmount: number | null
          UseDT: string | null
          UseKey: string | null
          UseStoreAddr: string | null
          UseStoreBizType: string | null
          UseStoreCeo: string | null
          UseStoreCorpNum: string | null
          UseStoreName: string | null
          UseStoreNum: string | null
          UseStoreTaxType: number | null
          UseStoreTel: string | null
        }
        Insert: {
          allocation_time?: string | null
          allocation_user_id?: string | null
          Amount?: number | null
          belong_user?: number | null
          CardApprovalCost?: number | null
          CardApprovalNum?: string | null
          CardApprovalType?: string | null
          CardNum?: string | null
          CorpNum?: string | null
          Currency?: string | null
          custom_unique: string
          format_dt?: string | null
          id?: number
          InstallmentMonths?: string | null
          Memo?: string | null
          PaymentPlan?: string | null
          rebate?: number | null
          ServiceCharge?: number | null
          Tax?: number | null
          TotalAmount?: number | null
          UseDT?: string | null
          UseKey?: string | null
          UseStoreAddr?: string | null
          UseStoreBizType?: string | null
          UseStoreCeo?: string | null
          UseStoreCorpNum?: string | null
          UseStoreName?: string | null
          UseStoreNum?: string | null
          UseStoreTaxType?: number | null
          UseStoreTel?: string | null
        }
        Update: {
          allocation_time?: string | null
          allocation_user_id?: string | null
          Amount?: number | null
          belong_user?: number | null
          CardApprovalCost?: number | null
          CardApprovalNum?: string | null
          CardApprovalType?: string | null
          CardNum?: string | null
          CorpNum?: string | null
          Currency?: string | null
          custom_unique?: string
          format_dt?: string | null
          id?: number
          InstallmentMonths?: string | null
          Memo?: string | null
          PaymentPlan?: string | null
          rebate?: number | null
          ServiceCharge?: number | null
          Tax?: number | null
          TotalAmount?: number | null
          UseDT?: string | null
          UseKey?: string | null
          UseStoreAddr?: string | null
          UseStoreBizType?: string | null
          UseStoreCeo?: string | null
          UseStoreCorpNum?: string | null
          UseStoreName?: string | null
          UseStoreNum?: string | null
          UseStoreTaxType?: number | null
          UseStoreTel?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "transaction_allocation_user_id_fkey"
            columns: ["allocation_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transaction_belong_user_fkey1"
            columns: ["belong_user"]
            isOneToOne: false
            referencedRelation: "transaction_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      transaction_accounts: {
        Row: {
          balance: number | null
          calc_by_allocation_time: string | null
          calc_time: string | null
          card_num: string | null
          id: number
          name: string | null
          user_id: string | null
        }
        Insert: {
          balance?: number | null
          calc_by_allocation_time?: string | null
          calc_time?: string | null
          card_num?: string | null
          id?: number
          name?: string | null
          user_id?: string | null
        }
        Update: {
          balance?: number | null
          calc_by_allocation_time?: string | null
          calc_time?: string | null
          card_num?: string | null
          id?: number
          name?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "transaction_accounts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      transaction_balance_logs: {
        Row: {
          account_id: number
          action_user: string | null
          amount: number | null
          created_at: string
          id: number
          old_balance: number | null
          trans_date: string | null
        }
        Insert: {
          account_id: number
          action_user?: string | null
          amount?: number | null
          created_at?: string
          id?: number
          old_balance?: number | null
          trans_date?: string | null
        }
        Update: {
          account_id?: number
          action_user?: string | null
          amount?: number | null
          created_at?: string
          id?: number
          old_balance?: number | null
          trans_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "transaction_balance_logs_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "transaction_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transaction_balance_logs_action_user_fkey"
            columns: ["action_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      transaction_v2_accounts: {
        Row: {
          balance: number
          created_at: string | null
          id: number
          name: string
        }
        Insert: {
          balance?: number
          created_at?: string | null
          id?: number
          name: string
        }
        Update: {
          balance?: number
          created_at?: string | null
          id?: number
          name?: string
        }
        Relationships: []
      }
      transaction_v2_accounts_users: {
        Row: {
          account_id: number | null
          created_at: string
          id: number
          user_id: string
        }
        Insert: {
          account_id?: number | null
          created_at?: string
          id?: number
          user_id?: string
        }
        Update: {
          account_id?: number | null
          created_at?: string
          id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "transaction_v2_accounts_users_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "transaction_v2_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transaction_v2_accounts_users_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      transaction_v2_balance_history: {
        Row: {
          account_id: number
          change_amount: number
          change_reason: string
          created_at: string | null
          id: number
          new_balance: number
          previous_balance: number
          transaction_id: number | null
        }
        Insert: {
          account_id: number
          change_amount: number
          change_reason: string
          created_at?: string | null
          id?: number
          new_balance: number
          previous_balance: number
          transaction_id?: number | null
        }
        Update: {
          account_id?: number
          change_amount?: number
          change_reason?: string
          created_at?: string | null
          id?: number
          new_balance?: number
          previous_balance?: number
          transaction_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "transaction_v2_balance_history_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "transaction_v2_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transaction_v2_balance_history_transaction_id_fkey"
            columns: ["transaction_id"]
            isOneToOne: false
            referencedRelation: "transaction_v2_purchase_matching"
            referencedColumns: ["transaction_id"]
          },
          {
            foreignKeyName: "transaction_v2_balance_history_transaction_id_fkey"
            columns: ["transaction_id"]
            isOneToOne: false
            referencedRelation: "transaction_v2_transactions"
            referencedColumns: ["id"]
          },
        ]
      }
      transaction_v2_bank_cards: {
        Row: {
          card_number: string
          created_at: string | null
          id: number
          is_public: boolean
        }
        Insert: {
          card_number: string
          created_at?: string | null
          id?: number
          is_public?: boolean
        }
        Update: {
          card_number?: string
          created_at?: string | null
          id?: number
          is_public?: boolean
        }
        Relationships: []
      }
      transaction_v2_card_ownership_history: {
        Row: {
          account_id: number
          card_id: number
          created_at: string | null
          end_date: string | null
          id: number
          start_date: string
        }
        Insert: {
          account_id: number
          card_id: number
          created_at?: string | null
          end_date?: string | null
          id?: number
          start_date: string
        }
        Update: {
          account_id?: number
          card_id?: number
          created_at?: string | null
          end_date?: string | null
          id?: number
          start_date?: string
        }
        Relationships: [
          {
            foreignKeyName: "transaction_v2_card_ownership_history_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "transaction_v2_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transaction_v2_card_ownership_history_card_id_fkey"
            columns: ["card_id"]
            isOneToOne: false
            referencedRelation: "transaction_v2_bank_cards"
            referencedColumns: ["id"]
          },
        ]
      }
      transaction_v2_inflow_transactions: {
        Row: {
          amount: number
          created_at: string | null
          currency: string
          id: number
          reconciliation_id: number
          remarks: string | null
          transaction_date: string
          updated_at: string | null
        }
        Insert: {
          amount: number
          created_at?: string | null
          currency: string
          id?: number
          reconciliation_id: number
          remarks?: string | null
          transaction_date: string
          updated_at?: string | null
        }
        Update: {
          amount?: number
          created_at?: string | null
          currency?: string
          id?: number
          reconciliation_id?: number
          remarks?: string | null
          transaction_date?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "transaction_v2_inflow_transactions_reconciliation_id_fkey"
            columns: ["reconciliation_id"]
            isOneToOne: false
            referencedRelation: "transaction_v2_reconciliation_records"
            referencedColumns: ["id"]
          },
        ]
      }
      transaction_v2_mark_types: {
        Row: {
          id: number
          mark_type: string
        }
        Insert: {
          id?: number
          mark_type: string
        }
        Update: {
          id?: number
          mark_type?: string
        }
        Relationships: []
      }
      transaction_v2_outflow_transactions: {
        Row: {
          amount: number
          created_at: string | null
          currency: string
          id: number
          reconciliation_id: number
          remarks: string | null
          transaction_date: string
          updated_at: string | null
        }
        Insert: {
          amount: number
          created_at?: string | null
          currency: string
          id?: number
          reconciliation_id: number
          remarks?: string | null
          transaction_date: string
          updated_at?: string | null
        }
        Update: {
          amount?: number
          created_at?: string | null
          currency?: string
          id?: number
          reconciliation_id?: number
          remarks?: string | null
          transaction_date?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "transaction_v2_outflow_transactions_reconciliation_id_fkey"
            columns: ["reconciliation_id"]
            isOneToOne: false
            referencedRelation: "transaction_v2_reconciliation_records"
            referencedColumns: ["id"]
          },
        ]
      }
      transaction_v2_rebate_history: {
        Row: {
          account_id: number
          created_at: string | null
          end_date: string | null
          id: number
          rebate_percentage: number
          start_date: string
        }
        Insert: {
          account_id: number
          created_at?: string | null
          end_date?: string | null
          id?: number
          rebate_percentage: number
          start_date: string
        }
        Update: {
          account_id?: number
          created_at?: string | null
          end_date?: string | null
          id?: number
          rebate_percentage?: number
          start_date?: string
        }
        Relationships: [
          {
            foreignKeyName: "transaction_v2_rebate_history_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "transaction_v2_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      transaction_v2_reconciliation_records: {
        Row: {
          created_at: string | null
          id: number
          status: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      transaction_v2_store_mark_types: {
        Row: {
          created_at: string | null
          id: number
          mark_type_id: number
          store_name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          mark_type_id: number
          store_name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          mark_type_id?: number
          store_name?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "transaction_v2_store_mark_types_mark_type_id_fkey"
            columns: ["mark_type_id"]
            isOneToOne: false
            referencedRelation: "transaction_v2_mark_types"
            referencedColumns: ["id"]
          },
        ]
      }
      transaction_v2_transactions: {
        Row: {
          account_id: number | null
          allocation_by: string | null
          allocation_status: string
          amount: number
          card_number: string
          created_at: string | null
          id: number
          mark_type: string | null
          match_po_by: string | null
          note: string | null
          po_code: string | null
          raw_data: Json | null
          rebate_amount: number | null
          store_name: string | null
          take_advantage_of_local: string | null
          transaction_time: string
          transaction_type: string
          unique_identifier: string
        }
        Insert: {
          account_id?: number | null
          allocation_by?: string | null
          allocation_status?: string
          amount: number
          card_number: string
          created_at?: string | null
          id?: number
          mark_type?: string | null
          match_po_by?: string | null
          note?: string | null
          po_code?: string | null
          raw_data?: Json | null
          rebate_amount?: number | null
          store_name?: string | null
          take_advantage_of_local?: string | null
          transaction_time: string
          transaction_type: string
          unique_identifier: string
        }
        Update: {
          account_id?: number | null
          allocation_by?: string | null
          allocation_status?: string
          amount?: number
          card_number?: string
          created_at?: string | null
          id?: number
          mark_type?: string | null
          match_po_by?: string | null
          note?: string | null
          po_code?: string | null
          raw_data?: Json | null
          rebate_amount?: number | null
          store_name?: string | null
          take_advantage_of_local?: string | null
          transaction_time?: string
          transaction_type?: string
          unique_identifier?: string
        }
        Relationships: [
          {
            foreignKeyName: "transaction_v2_transactions_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "transaction_v2_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transaction_v2_transactions_allocation_by_fkey"
            columns: ["allocation_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transaction_v2_transactions_match_po_by_fkey"
            columns: ["match_po_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transaction_v2_transactions_po_code_fkey"
            columns: ["po_code"]
            isOneToOne: false
            referencedRelation: "fol_cost_data"
            referencedColumns: ["po_code"]
          },
          {
            foreignKeyName: "transaction_v2_transactions_po_code_fkey"
            columns: ["po_code"]
            isOneToOne: false
            referencedRelation: "inventory_resolved"
            referencedColumns: ["po_code"]
          },
          {
            foreignKeyName: "transaction_v2_transactions_po_code_fkey"
            columns: ["po_code"]
            isOneToOne: false
            referencedRelation: "purchase_orders"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "transaction_v2_transactions_po_code_fkey"
            columns: ["po_code"]
            isOneToOne: false
            referencedRelation: "transaction_purchase_matching"
            referencedColumns: ["po_code"]
          },
          {
            foreignKeyName: "transaction_v2_transactions_po_code_fkey"
            columns: ["po_code"]
            isOneToOne: false
            referencedRelation: "transaction_v2_purchase_matching"
            referencedColumns: ["po_code"]
          },
        ]
      }
      update_inventory_logs: {
        Row: {
          created_at: string | null
          error_message: string | null
          fixed: boolean | null
          fulfillment_order_line_item_id: number | null
          id: number
          inventory_variant_id: number | null
          order_name: string | null
          reduce_by: number
          success: boolean | null
        }
        Insert: {
          created_at?: string | null
          error_message?: string | null
          fixed?: boolean | null
          fulfillment_order_line_item_id?: number | null
          id?: number
          inventory_variant_id?: number | null
          order_name?: string | null
          reduce_by: number
          success?: boolean | null
        }
        Update: {
          created_at?: string | null
          error_message?: string | null
          fixed?: boolean | null
          fulfillment_order_line_item_id?: number | null
          id?: number
          inventory_variant_id?: number | null
          order_name?: string | null
          reduce_by?: number
          success?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "inventory_update_failures_fulfillment_order_line_item_id_fkey"
            columns: ["fulfillment_order_line_item_id"]
            isOneToOne: false
            referencedRelation: "fulfillment_order_line_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "update_inventory_logs_inventory_variant_id_fkey"
            columns: ["inventory_variant_id"]
            isOneToOne: false
            referencedRelation: "inventory_variants"
            referencedColumns: ["id"]
          },
        ]
      }
      user_routes: {
        Row: {
          id: number
          route_id: number
          user_id: string
        }
        Insert: {
          id?: number
          route_id: number
          user_id: string
        }
        Update: {
          id?: number
          route_id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_user_routes_route"
            columns: ["route_id"]
            isOneToOne: false
            referencedRelation: "app_routes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_user_routes_user"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      variant_name_changes: {
        Row: {
          created_at: string
          id: number
          inventory_variant_id: number | null
          new_name: string | null
          old_name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          inventory_variant_id?: number | null
          new_name?: string | null
          old_name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          inventory_variant_id?: number | null
          new_name?: string | null
          old_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "variant_name_changes_inventory_variant_id_fkey"
            columns: ["inventory_variant_id"]
            isOneToOne: false
            referencedRelation: "inventory_variants"
            referencedColumns: ["id"]
          },
        ]
      }
      variants: {
        Row: {
          available_for_sale: boolean | null
          barcode: string | null
          bundle_id: number | null
          compare_at_price: Json | null
          created_at: string | null
          currency_code: string | null
          currently_not_in_stock: boolean | null
          display_name: string | null
          fts: unknown | null
          fulfillment_service: string | null
          grams: number | null
          id: number
          image: Json | null
          image_id: string | null
          inventory_item: Json | null
          inventory_quantity: number | null
          inventory_variant_id: number | null
          option: Json | null
          presentment_prices: Json | null
          price: number | null
          product_id: number | null
          requires_components: boolean | null
          requires_shipping: boolean | null
          selected_options: Json | null
          sellable_online_quantity: number | null
          shop_id: number | null
          sku: string | null
          source: string | null
          tax_code: string | null
          taxable: boolean | null
          title: string
          updated_at: string | null
          weight: number | null
          weight_unit: string | null
        }
        Insert: {
          available_for_sale?: boolean | null
          barcode?: string | null
          bundle_id?: number | null
          compare_at_price?: Json | null
          created_at?: string | null
          currency_code?: string | null
          currently_not_in_stock?: boolean | null
          display_name?: string | null
          fts?: unknown | null
          fulfillment_service?: string | null
          grams?: number | null
          id?: number
          image?: Json | null
          image_id?: string | null
          inventory_item?: Json | null
          inventory_quantity?: number | null
          inventory_variant_id?: number | null
          option?: Json | null
          presentment_prices?: Json | null
          price?: number | null
          product_id?: number | null
          requires_components?: boolean | null
          requires_shipping?: boolean | null
          selected_options?: Json | null
          sellable_online_quantity?: number | null
          shop_id?: number | null
          sku?: string | null
          source?: string | null
          tax_code?: string | null
          taxable?: boolean | null
          title: string
          updated_at?: string | null
          weight?: number | null
          weight_unit?: string | null
        }
        Update: {
          available_for_sale?: boolean | null
          barcode?: string | null
          bundle_id?: number | null
          compare_at_price?: Json | null
          created_at?: string | null
          currency_code?: string | null
          currently_not_in_stock?: boolean | null
          display_name?: string | null
          fts?: unknown | null
          fulfillment_service?: string | null
          grams?: number | null
          id?: number
          image?: Json | null
          image_id?: string | null
          inventory_item?: Json | null
          inventory_quantity?: number | null
          inventory_variant_id?: number | null
          option?: Json | null
          presentment_prices?: Json | null
          price?: number | null
          product_id?: number | null
          requires_components?: boolean | null
          requires_shipping?: boolean | null
          selected_options?: Json | null
          sellable_online_quantity?: number | null
          shop_id?: number | null
          sku?: string | null
          source?: string | null
          tax_code?: string | null
          taxable?: boolean | null
          title?: string
          updated_at?: string | null
          weight?: number | null
          weight_unit?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "variants_bundle_id_fkey"
            columns: ["bundle_id"]
            isOneToOne: false
            referencedRelation: "bundles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "variants_inventory_variant_id_fkey"
            columns: ["inventory_variant_id"]
            isOneToOne: false
            referencedRelation: "inventory_variants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "variants_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "variants_shop_id_fkey"
            columns: ["shop_id"]
            isOneToOne: false
            referencedRelation: "shops"
            referencedColumns: ["id"]
          },
        ]
      }
      webhooks: {
        Row: {
          created_at: string
          id: number
          order_id: string | null
          shop_id: number | null
          type: string | null
          webhook_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          order_id?: string | null
          shop_id?: number | null
          type?: string | null
          webhook_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          order_id?: string | null
          shop_id?: number | null
          type?: string | null
          webhook_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "webhooks_shop_id_fkey"
            columns: ["shop_id"]
            isOneToOne: false
            referencedRelation: "shops"
            referencedColumns: ["id"]
          },
        ]
      }
      Yes24Goods: {
        Row: {
          articleImgList: Json | null
          author: string | null
          content: string | null
          contentHtml: string | null
          coverImg: string | null
          createdAt: string
          description: string | null
          descriptionGoogle: string | null
          descriptionHtml: string | null
          descriptionMangaupdates: string | null
          genres: Json[] | null
          goodsNo: string
          id: number
          inToTheBook: string | null
          inToTheBookHtml: string | null
          isbn: string | null
          isbn13: string | null
          isHit: boolean | null
          makerreview: string | null
          makerreviewHtml: string | null
          price: number | null
          publicationDate: string | null
          publisher: string | null
          queryMangaUpdates: boolean
          queryPrice: boolean
          recommendationList: Json | null
          regdate: string | null
          salePrice: number | null
          shopPrice: number | null
          subTitle: string | null
          synopsis: string | null
          synopsisHtml: string | null
          title: string | null
          titleGoogle: string | null
          titleMangaupdates: string | null
          type: string | null
          update: string | null
          updatedAt: string | null
        }
        Insert: {
          articleImgList?: Json | null
          author?: string | null
          content?: string | null
          contentHtml?: string | null
          coverImg?: string | null
          createdAt?: string
          description?: string | null
          descriptionGoogle?: string | null
          descriptionHtml?: string | null
          descriptionMangaupdates?: string | null
          genres?: Json[] | null
          goodsNo: string
          id?: number
          inToTheBook?: string | null
          inToTheBookHtml?: string | null
          isbn?: string | null
          isbn13?: string | null
          isHit?: boolean | null
          makerreview?: string | null
          makerreviewHtml?: string | null
          price?: number | null
          publicationDate?: string | null
          publisher?: string | null
          queryMangaUpdates?: boolean
          queryPrice?: boolean
          recommendationList?: Json | null
          regdate?: string | null
          salePrice?: number | null
          shopPrice?: number | null
          subTitle?: string | null
          synopsis?: string | null
          synopsisHtml?: string | null
          title?: string | null
          titleGoogle?: string | null
          titleMangaupdates?: string | null
          type?: string | null
          update?: string | null
          updatedAt?: string | null
        }
        Update: {
          articleImgList?: Json | null
          author?: string | null
          content?: string | null
          contentHtml?: string | null
          coverImg?: string | null
          createdAt?: string
          description?: string | null
          descriptionGoogle?: string | null
          descriptionHtml?: string | null
          descriptionMangaupdates?: string | null
          genres?: Json[] | null
          goodsNo?: string
          id?: number
          inToTheBook?: string | null
          inToTheBookHtml?: string | null
          isbn?: string | null
          isbn13?: string | null
          isHit?: boolean | null
          makerreview?: string | null
          makerreviewHtml?: string | null
          price?: number | null
          publicationDate?: string | null
          publisher?: string | null
          queryMangaUpdates?: boolean
          queryPrice?: boolean
          recommendationList?: Json | null
          regdate?: string | null
          salePrice?: number | null
          shopPrice?: number | null
          subTitle?: string | null
          synopsis?: string | null
          synopsisHtml?: string | null
          title?: string | null
          titleGoogle?: string | null
          titleMangaupdates?: string | null
          type?: string | null
          update?: string | null
          updatedAt?: string | null
        }
        Relationships: []
      }
      yeseyesee: {
        Row: {
          additionalDescription: string | null
          availableForSale: boolean | null
          compareAtPriceRange: Json | null
          createdAt: string
          description: string | null
          descriptionHtml: string | null
          featuredImage: Json | null
          handle: string | null
          id: number
          notice: string | null
          options: Json | null
          priceRange: Json | null
          productType: string | null
          publishedAt: string | null
          sizeChart: Json | null
          sourceId: number | null
          tag: Json | null
          tags: string[] | null
          title: string
          totalInventory: number | null
          variants: Json | null
          vendor: string | null
        }
        Insert: {
          additionalDescription?: string | null
          availableForSale?: boolean | null
          compareAtPriceRange?: Json | null
          createdAt: string
          description?: string | null
          descriptionHtml?: string | null
          featuredImage?: Json | null
          handle?: string | null
          id?: number
          notice?: string | null
          options?: Json | null
          priceRange?: Json | null
          productType?: string | null
          publishedAt?: string | null
          sizeChart?: Json | null
          sourceId?: number | null
          tag?: Json | null
          tags?: string[] | null
          title: string
          totalInventory?: number | null
          variants?: Json | null
          vendor?: string | null
        }
        Update: {
          additionalDescription?: string | null
          availableForSale?: boolean | null
          compareAtPriceRange?: Json | null
          createdAt?: string
          description?: string | null
          descriptionHtml?: string | null
          featuredImage?: Json | null
          handle?: string | null
          id?: number
          notice?: string | null
          options?: Json | null
          priceRange?: Json | null
          productType?: string | null
          publishedAt?: string | null
          sizeChart?: Json | null
          sourceId?: number | null
          tag?: Json | null
          tags?: string[] | null
          title?: string
          totalInventory?: number | null
          variants?: Json | null
          vendor?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      by_custom_order: {
        Row: {
          line_items: Json | null
          order_app_id: Json | null
          order_createdat: string | null
          order_displayfinancialstatus: string | null
          order_displayfulfillmentstatus: string | null
          order_id: number | null
          order_name: string | null
          shop_id: number | null
          shop_name: string | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_shop_id_fkey"
            columns: ["shop_id"]
            isOneToOne: false
            referencedRelation: "shops"
            referencedColumns: ["id"]
          },
        ]
      }
      cn_orders_ready_to_ship: {
        Row: {
          order_id: number | null
          ready_to_ship: boolean | null
        }
        Relationships: []
      }
      combined_inventory_items: {
        Row: {
          created_at: string | null
          draft: boolean | null
          id: number | null
          inventory_variant_id: number | null
          lineitem_id: number | null
          location: string | null
          order_name: string | null
          price: number | null
          purchase_order_id: number | null
          status: Database["public"]["Enums"]["inventory_item_status"] | null
          title: string | null
          tracking_number: string | null
          updated_at: string | null
          variant_id: number | null
        }
        Relationships: []
      }
      combined_purchase_orders: {
        Row: {
          code: string | null
          created_at: string | null
          destination: string | null
          draft: boolean | null
          ed_date: string | null
          fee: number | null
          fts: unknown | null
          id: number | null
          note: string | null
          status: Database["public"]["Enums"]["po_status"] | null
          supplier: string | null
          updated_at: string | null
        }
        Relationships: []
      }
      fol_cost_data: {
        Row: {
          domestic_fee: number | null
          fol_id: number | null
          fulfillment_id: number | null
          inventory_variant_id: number | null
          po_code: string | null
          price: number | null
          quantity: number | null
          supplier_price: number | null
          title: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fulfillment_line_items_fulfillment_id_fkey"
            columns: ["fulfillment_id"]
            isOneToOne: false
            referencedRelation: "fulfillments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fulfillment_line_items_fulfillment_id_fkey"
            columns: ["fulfillment_id"]
            isOneToOne: false
            referencedRelation: "order_core_data"
            referencedColumns: ["fulfillment_order_id"]
          },
          {
            foreignKeyName: "fulfillment_line_items_fulfillment_id_fkey"
            columns: ["fulfillment_id"]
            isOneToOne: false
            referencedRelation: "order_flat_summary"
            referencedColumns: ["fulfillment_order_id"]
          },
          {
            foreignKeyName: "line_items_inventory_variant_id_fkey"
            columns: ["inventory_variant_id"]
            isOneToOne: false
            referencedRelation: "inventory_variants"
            referencedColumns: ["id"]
          },
        ]
      }
      inventory_resolved: {
        Row: {
          inventory_variant_id: number | null
          item_count: number | null
          order_key: string | null
          po_code: string | null
          po_fee: number | null
          purchase_order_id: number | null
          supplier_price: number | null
        }
        Relationships: [
          {
            foreignKeyName: "inventory_items_inventory_variant_id_fkey"
            columns: ["inventory_variant_id"]
            isOneToOne: false
            referencedRelation: "inventory_variants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_items_purchase_order_id_fkey"
            columns: ["purchase_order_id"]
            isOneToOne: false
            referencedRelation: "purchase_order_status_view"
            referencedColumns: ["purchase_order_id"]
          },
          {
            foreignKeyName: "inventory_items_purchase_order_id_fkey"
            columns: ["purchase_order_id"]
            isOneToOne: false
            referencedRelation: "purchase_orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_items_purchase_order_id_fkey"
            columns: ["purchase_order_id"]
            isOneToOne: false
            referencedRelation: "transaction_purchase_matching"
            referencedColumns: ["purchase_id"]
          },
          {
            foreignKeyName: "inventory_items_purchase_order_id_fkey"
            columns: ["purchase_order_id"]
            isOneToOne: false
            referencedRelation: "transaction_v2_purchase_matching"
            referencedColumns: ["purchase_id"]
          },
        ]
      }
      kr_orders_ready_to_ship: {
        Row: {
          order_id: number | null
          ready_to_ship: boolean | null
        }
        Relationships: []
      }
      order_accuracy: {
        Row: {
          accurate: string | null
          order_id: number | null
          tracking_number: string | null
        }
        Relationships: []
      }
      order_core_data: {
        Row: {
          company: string | null
          courier: Database["public"]["Enums"]["courier"] | null
          created_at: string | null
          customer_name: string | null
          exchange_rate: number | null
          fulfillment_order_id: number | null
          order_financial_status: string | null
          order_id: number | null
          order_name: string | null
          order_price: number | null
          rated_shipping_price: number | null
          ship_cost: number | null
          ship_date: string | null
          tracking_number: string | null
        }
        Relationships: []
      }
      order_flat_summary: {
        Row: {
          accurate: string | null
          company: string | null
          courier: Database["public"]["Enums"]["courier"] | null
          created_at: string | null
          customer_name: string | null
          exchange_rate: number | null
          fulfillment_order_id: number | null
          order_financial_status: string | null
          order_id: number | null
          order_name: string | null
          order_price: number | null
          profit: number | null
          rated_profit: number | null
          rated_shipping_price: number | null
          ship_cost: number | null
          ship_date: string | null
          tracking_number: string | null
        }
        Relationships: []
      }
      order_fulfillments_view: {
        Row: {
          company: string | null
          created_at: string | null
          delivered_at: string | null
          fulfillment_id: number | null
          intransit_at: string | null
          name: string | null
          order_id: number | null
          status: string | null
          tracking_number: string | null
          updated_at: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fulfillment_orders_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "by_custom_order"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillment_orders_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "cn_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillment_orders_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "kr_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillment_orders_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_accuracy"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillment_orders_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_core_data"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillment_orders_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_flat_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillment_orders_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_profit_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillment_orders_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_transaction_entries"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillment_orders_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fulfillment_orders_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "fulfillment_orders_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "payoneer_order_transaction_match"
            referencedColumns: ["order_id"]
          },
        ]
      }
      order_icn_status: {
        Row: {
          all_in_cn: boolean | null
          all_in_icn: boolean | null
          has_cn: boolean | null
          has_icn: boolean | null
          has_non_cn: boolean | null
          has_non_icn: boolean | null
          has_other_location: boolean | null
          not_in_icn_or_cn: boolean | null
          order_id: number | null
        }
        Relationships: [
          {
            foreignKeyName: "line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "by_custom_order"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "cn_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "kr_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_accuracy"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_core_data"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_flat_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_profit_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_transaction_entries"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "payoneer_order_transaction_match"
            referencedColumns: ["order_id"]
          },
        ]
      }
      order_location_status: {
        Row: {
          all_in_cn: boolean | null
          all_in_icn: boolean | null
          all_in_icn_and_cn: boolean | null
          all_not_in_icn: boolean | null
          all_not_in_icn_or_cn: boolean | null
          order_id: number | null
          some_in_cn: boolean | null
          some_in_icn: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "by_custom_order"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "cn_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "kr_orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_accuracy"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_core_data"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_flat_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_profit_summary"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order_transaction_entries"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders_ready_to_ship"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "line_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "payoneer_order_transaction_match"
            referencedColumns: ["order_id"]
          },
        ]
      }
      order_profit_summary: {
        Row: {
          order_id: number | null
          profit: number | null
          rated_profit: number | null
        }
        Relationships: []
      }
      order_transaction_entries: {
        Row: {
          amount: number | null
          created_at: string | null
          currency_code: string | null
          elem: Json | null
          formatted_gateway: string | null
          gateway: string | null
          is_test: boolean | null
          kind: string | null
          order_id: number | null
          payment_id: string | null
          processed_at: string | null
          shop_id: number | null
          status: string | null
          transaction_id: string | null
          unsettled_amount: number | null
          unsettled_currency_code: string | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_shop_id_fkey"
            columns: ["shop_id"]
            isOneToOne: false
            referencedRelation: "shops"
            referencedColumns: ["id"]
          },
        ]
      }
      orders_ready_to_ship: {
        Row: {
          order_id: number | null
          ready_to_ship: boolean | null
        }
        Relationships: []
      }
      payoneer_order_transaction_match: {
        Row: {
          order_id: number | null
          payoneer_transaction_pk: number | null
        }
        Relationships: []
      }
      paypal_order_transaction_match: {
        Row: {
          order_id: number | null
          paypal_transaction_pk: number | null
        }
        Relationships: []
      }
      product_price_range_view: {
        Row: {
          max_price: number | null
          min_price: number | null
        }
        Relationships: []
      }
      product_types_view: {
        Row: {
          product_type: string | null
        }
        Relationships: []
      }
      product_vendor_view: {
        Row: {
          vendor: string | null
        }
        Relationships: []
      }
      purchase_order_status_view: {
        Row: {
          purchase_order_id: number | null
          status: Database["public"]["Enums"]["po_status"] | null
        }
        Relationships: []
      }
      transaction_purchase_matching: {
        Row: {
          po_code: string | null
          po_time: string | null
          purchase_id: number | null
          t_cost: number | null
          t_time: string | null
          time_diff_seconds: number | null
          transaction_id: number | null
        }
        Relationships: []
      }
      transaction_v2_purchase_matching: {
        Row: {
          po_code: string | null
          po_time: string | null
          purchase_id: number | null
          t_cost: number | null
          t_time: string | null
          time_diff_seconds: number | null
          transaction_id: number | null
        }
        Relationships: []
      }
      transcripts: {
        Row: {
          enumlabel: unknown | null
        }
        Insert: {
          enumlabel?: unknown | null
        }
        Update: {
          enumlabel?: unknown | null
        }
        Relationships: []
      }
      users: {
        Row: {
          aud: string | null
          banned_until: string | null
          confirmation_sent_at: string | null
          confirmation_token: string | null
          confirmed_at: string | null
          created_at: string | null
          deleted_at: string | null
          email: string | null
          email_change: string | null
          email_change_confirm_status: number | null
          email_change_sent_at: string | null
          email_change_token_current: string | null
          email_change_token_new: string | null
          email_confirmed_at: string | null
          encrypted_password: string | null
          id: string | null
          instance_id: string | null
          invited_at: string | null
          is_anonymous: boolean | null
          is_sso_user: boolean | null
          is_super_admin: boolean | null
          last_sign_in_at: string | null
          phone: string | null
          phone_change: string | null
          phone_change_sent_at: string | null
          phone_change_token: string | null
          phone_confirmed_at: string | null
          raw_app_meta_data: Json | null
          raw_user_meta_data: Json | null
          reauthentication_sent_at: string | null
          reauthentication_token: string | null
          recovery_sent_at: string | null
          recovery_token: string | null
          role: string | null
          updated_at: string | null
        }
        Insert: {
          aud?: string | null
          banned_until?: string | null
          confirmation_sent_at?: string | null
          confirmation_token?: string | null
          confirmed_at?: string | null
          created_at?: string | null
          deleted_at?: string | null
          email?: string | null
          email_change?: string | null
          email_change_confirm_status?: number | null
          email_change_sent_at?: string | null
          email_change_token_current?: string | null
          email_change_token_new?: string | null
          email_confirmed_at?: string | null
          encrypted_password?: string | null
          id?: string | null
          instance_id?: string | null
          invited_at?: string | null
          is_anonymous?: boolean | null
          is_sso_user?: boolean | null
          is_super_admin?: boolean | null
          last_sign_in_at?: string | null
          phone?: string | null
          phone_change?: string | null
          phone_change_sent_at?: string | null
          phone_change_token?: string | null
          phone_confirmed_at?: string | null
          raw_app_meta_data?: Json | null
          raw_user_meta_data?: Json | null
          reauthentication_sent_at?: string | null
          reauthentication_token?: string | null
          recovery_sent_at?: string | null
          recovery_token?: string | null
          role?: string | null
          updated_at?: string | null
        }
        Update: {
          aud?: string | null
          banned_until?: string | null
          confirmation_sent_at?: string | null
          confirmation_token?: string | null
          confirmed_at?: string | null
          created_at?: string | null
          deleted_at?: string | null
          email?: string | null
          email_change?: string | null
          email_change_confirm_status?: number | null
          email_change_sent_at?: string | null
          email_change_token_current?: string | null
          email_change_token_new?: string | null
          email_confirmed_at?: string | null
          encrypted_password?: string | null
          id?: string | null
          instance_id?: string | null
          invited_at?: string | null
          is_anonymous?: boolean | null
          is_sso_user?: boolean | null
          is_super_admin?: boolean | null
          last_sign_in_at?: string | null
          phone?: string | null
          phone_change?: string | null
          phone_change_sent_at?: string | null
          phone_change_token?: string | null
          phone_confirmed_at?: string | null
          raw_app_meta_data?: Json | null
          raw_user_meta_data?: Json | null
          reauthentication_sent_at?: string | null
          reauthentication_token?: string | null
          recovery_sent_at?: string | null
          recovery_token?: string | null
          role?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      add_transaction_account_and_assign_transaction: {
        Args: {
          p_balance: number
          p_card_suffix: string
          p_name: string
          p_start_time: string
        }
        Returns: {
          new_balance: number
        }[]
      }
      adjust_inventory_cte: {
        Args: { _change_qty: number; _iv_id: number; _note: string }
        Returns: {
          inserted_count: number
          onhand_after: number
          shipped_count: number
        }[]
      }
      allocate_inventory: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      allocate_inventory_by_order: {
        Args: { p_order_id: number }
        Returns: undefined
      }
      allocate_inventory_by_variant: {
        Args: { _inventory_variant_id: number }
        Returns: undefined
      }
      allocate_inventory_for_ready_orders: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      allocate_shipment_details: {
        Args: { fulfillment_id: number; items: Json[] }
        Returns: undefined
      }
      allocation_transaction_procedure: {
        Args: {
          account_id: number
          p_allocation_time: string
          transaction_ids: number[]
          user_id: string
        }
        Returns: undefined
      }
      assign_inventory_items_rpc: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      backfill_event_points: {
        Args: { _end_at?: string; _start_at?: string }
        Returns: undefined
      }
      bulk_swap_some_in_icn: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      by_custom_order_rpc: {
        Args: {
          date_from_param?: string
          date_to_param?: string
          hide_oos_param?: boolean
          limit_param?: number
          name_param?: string
          offset_param?: number
          sort_by_param?: string
        }
        Returns: {
          line_items: Json
          order_app_id: Json
          order_createdat: string
          order_displayfinancialstatus: string
          order_displayfulfillmentstatus: string
          order_id: number
          order_name: string
          shop_id: number
          shop_name: string
        }[]
      }
      by_product: {
        Args: {
          hide_deadline_param: boolean
          hide_oos_param: boolean
          no_old_param: boolean
          search_param: string
        }
        Returns: {
          comments: Json
          inventory_deadline: string
          inventory_quantity: number
          inventory_stock_status: boolean
          inventory_supplier: string
          inventory_variant_id: number
          inventory_variant_purchase_link: string
          inventory_variant_title: string
          last_purchase_price: number
          line_items: Json
          lineitem_count: number
          product_featuredimage: string
          product_id: number
          product_title: string
          product_vendor: string
          purchase_quantity: number
          shop_name: string
          total_count: number
          unfulfilled_quantity_sum: number
          variant_id: number
          variant_image: string
          variant_last_line_item_at: string
          variant_title: string
        }[]
      }
      by_product_iv: {
        Args: {
          _financial_status: number
          hide_deadline_param: boolean
          hide_oos_param: boolean
          search_param: string
        }
        Returns: {
          comments: Json
          inventory_deadline: string
          inventory_quantity: number
          inventory_stock_status: boolean
          inventory_supplier: string
          inventory_variant_id: number
          inventory_variant_purchase_link: string
          inventory_variant_title: string
          last_purchase_price: number
          line_items: Json
          product_purchase_link: string
          purchase_quantity: number
          shop_id: number
          total_count: number
          unfulfilled_quantity_sum: number
          variant_image: Json
          variant_last_line_item_at: string
          vendor: string
        }[]
      }
      by_product_iv_temp: {
        Args: {
          _financial_status: number
          hide_deadline_param: boolean
          hide_oos_param: boolean
          search_param: string
        }
        Returns: {
          comments: Json
          inventory_deadline: string
          inventory_quantity: number
          inventory_stock_status: boolean
          inventory_supplier: string
          inventory_variant_id: number
          inventory_variant_purchase_link: string
          inventory_variant_title: string
          last_purchase_price: number
          line_items: Json
          purchase_quantity: number
          shop_id: number
          total_count: number
          unfulfilled_quantity_sum: number
          variant_image: Json
          variant_last_line_item_at: string
          vendor: string
        }[]
      }
      by_product_iv_v2: {
        Args: {
          _financial_status: number
          cursor: number
          hide_deadline_param: boolean
          hide_oos_param: boolean
          no_search_param: string
          page_size: number
          product_title_param: string
          search_param: string
          sort_by_param: string
          variant_title_param: string
          vendor_param: string
        }
        Returns: {
          comments: Json
          inventory_deadline: string
          inventory_quantity: number
          inventory_stock_status: boolean
          inventory_supplier: string
          inventory_variant_id: number
          inventory_variant_purchase_link: string
          inventory_variant_title: string
          last_purchase_price: number
          line_items: Json
          product_purchase_link: string
          purchase_quantity: number
          shop_id: number
          total_count: number
          unfulfilled_quantity_sum: number
          variant_image: Json
          variant_last_line_item_at: string
          vendor: string
        }[]
      }
      calculate_purchase_quantity: {
        Args: { ivid: number; max_purchase: number }
        Returns: number
      }
      cancel_warehouse: {
        Args: {
          p_inventory_variant_id: number
          p_purchase_order_id: number
          p_quantity: number
        }
        Returns: undefined
      }
      check_all_items_have_images: {
        Args: { _order_id: number }
        Returns: boolean
      }
      check_at_least_one_icn: {
        Args: { p_order_id: number }
        Returns: boolean
      }
      check_is_all_icn: {
        Args: { p_order_id: number }
        Returns: boolean
      }
      check_is_all_purchased: {
        Args: { order_id_input: number }
        Returns: boolean
      }
      check_order_images: {
        Args: { _order_id: number }
        Returns: boolean
      }
      check_some_but_not_all_icn: {
        Args: { p_order_id: number }
        Returns: boolean
      }
      copy_order_with_associations: {
        Args: { src_order_id: number }
        Returns: number
      }
      copy_purchase_order: {
        Args: { po_id: number }
        Returns: undefined
      }
      create_inventory_items: {
        Args: { p_inventory_variant_id: number; p_quantity: number }
        Returns: undefined
      }
      create_reconciliation_rpc: {
        Args: {
          p_existing_inflow_ids?: string
          p_existing_outflow_ids?: string
          p_inflow_transactions: string
          p_outflow_transactions: string
        }
        Returns: {
          created_at: string
          rec_id: number
          status: string
        }[]
      }
      db_pre_request: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      deduct_shipment_inventory: {
        Args: { _shipment_id: number }
        Returns: undefined
      }
      dmetaphone: {
        Args: { "": string }
        Returns: string
      }
      dmetaphone_alt: {
        Args: { "": string }
        Returns: string
      }
      export_orders_by_names: {
        Args: { order_names: string[] }
        Returns: {
          "*sku": string
          "*买家姓名": string
          "*买家账号": string
          "*交易编号": string
          "*商品单价": string
          "*商品数量": number
          "*国家": string
          "*城市": string
          "*电话1": string
          "*省份/州": string
          "*订单编号": string
          "*邮寄地址": string
          image: string
          itemid: string
          买家自选物流方式: string
          付款时间: string
          原始运费金额: string
          原始金额: string
          商品重量: string
          备注: string
          备用地址: string
          总金额: string
          物流公司: string
          电话2: string
          称重重量: string
          货运单号: string
          货运方式: string
          邮编: string
          预估运费: string
        }[]
      }
      gbt_bit_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbt_bool_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbt_bool_fetch: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbt_bpchar_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbt_bytea_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbt_cash_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbt_cash_fetch: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbt_date_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbt_date_fetch: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbt_decompress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbt_enum_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbt_enum_fetch: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbt_float4_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbt_float4_fetch: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbt_float8_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbt_float8_fetch: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbt_inet_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbt_int2_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbt_int2_fetch: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbt_int4_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbt_int4_fetch: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbt_int8_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbt_int8_fetch: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbt_intv_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbt_intv_decompress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbt_intv_fetch: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbt_macad_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbt_macad_fetch: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbt_macad8_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbt_macad8_fetch: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbt_numeric_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbt_oid_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbt_oid_fetch: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbt_text_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbt_time_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbt_time_fetch: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbt_timetz_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbt_ts_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbt_ts_fetch: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbt_tstz_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbt_uuid_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbt_uuid_fetch: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbt_var_decompress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbt_var_fetch: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbtreekey_var_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbtreekey_var_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbtreekey16_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbtreekey16_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbtreekey2_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbtreekey2_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbtreekey32_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbtreekey32_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbtreekey4_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbtreekey4_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbtreekey8_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      gbtreekey8_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      generate_uid: {
        Args: { size: number }
        Returns: string
      }
      generate_unique_biz_forwarding_order_code: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      generate_unique_biz_shipments_code: {
        Args: { size: number }
        Returns: string
      }
      generate_unique_ean13: {
        Args: { inventory_variant_id: number }
        Returns: string
      }
      generate_unique_po_code: {
        Args: { size: number }
        Returns: string
      }
      get_account_detail: {
        Args: { account_id: number }
        Returns: Json
      }
      get_accounting_overview: {
        Args: {
          courier_param?: string
          date_range_selected?: string
          from_param?: string
          max_profit?: number
          min_profit?: number
          profit_param?: number
          to_param?: string
        }
        Returns: {
          accurateOrder: Json
          allOrder: Json
          purcNotAccurateOrder: Json
          shipNotAccurateOrder: Json
          shippingLastUpdate: Json
        }[]
      }
      get_accounting_overview_by_accurate_param: {
        Args: {
          accurate_param?: string
          courier_param?: string
          date_range_selected?: string
          from_param?: string
          max_profit?: number
          min_profit?: number
          profit_param?: number
          to_param?: string
        }
        Returns: {
          actual_profit: number
          actual_shipping_price: number
          amount: string
          anticipated_profit: number
          id: number
          rated_shipping_price: number
          supplier_price: number
        }[]
      }
      get_accounting_overview_v2: {
        Args: {
          v_accurate_param?: string
          v_courier_param?: string
          v_date_range_selected?: string
          v_from_param?: string
          v_max_profit?: number
          v_min_profit?: number
          v_profit_param?: string
          v_search_param?: string
          v_sort_by_param?: string
          v_to_param?: string
        }
        Returns: {
          accurate: string
          order_count: number
          total_domestic_fee: number
          total_order_price: number
          total_profit: number
          total_rated_profit: number
          total_rated_shipping_price: number
          total_ship_cost: number
          total_supplier_cost: number
        }[]
      }
      get_all_anticipated_profit: {
        Args: {
          date_range_selected?: string
          from_param?: string
          to_param?: string
        }
        Returns: {
          accountingCount: number
          allActualProfit: number
          allAnticipatedProfit: number
        }[]
      }
      get_all_pendding_purchase_cost: {
        Args: Record<PropertyKey, never>
        Returns: {
          cost: number
          inventory_variant_id: number
          order_names: string[]
          price: number
          purchased_count: number
          un_quantity: number
        }[]
      }
      get_all_transaction_records: {
        Args: {
          end_date?: string
          exclude_ids?: number[]
          filter_currency?: string
          filter_type?: string
          is_matched?: boolean
          max_amount?: number
          min_amount?: number
          p_page?: number
          p_page_size?: number
          search_remarks?: string
          start_date?: string
        }
        Returns: {
          amount: number
          created_at: string
          currency: string
          id: number
          reconciliation_id: number
          remarks: string
          total_count: number
          transaction_date: string
          type: string
          updated_at: string
        }[]
      }
      get_allocated_locations: {
        Args: { _ivid: number; _liid: number }
        Returns: {
          location: string
          total_quantity: number
        }[]
      }
      get_balance_historys: {
        Args: {
          end_date?: string
          p_account_id?: number
          p_limit?: number
          p_mark_type?: string
          p_offset?: number
          start_date?: string
        }
        Returns: {
          account_id: number
          amount: number
          change_amount: number
          change_reason: string
          history_id: number
          history_time: string
          new_balance: number
          previous_balance: number
          store_name: string
          total_count: number
          transaction_id: number
          transaction_time: string
        }[]
      }
      get_bank_card_detail: {
        Args: { card_id: number }
        Returns: Json
      }
      get_bank_cards_with_current_owner: {
        Args: Record<PropertyKey, never>
        Returns: {
          card_id: number
          card_number: string
          created_at: string
          current_owner_id: number
          is_public: boolean
          owner_name: string
          ownership_start_date: string
        }[]
      }
      get_biz_forwarding_order_detail: {
        Args: { v_creator_id: string; v_order_code: string }
        Returns: {
          code: string
          created_at: string
          creator_email: string
          creator_id: string
          id: number
          order_status: string
          shipments: Json
          total_actual_cost: number
          total_estimated_cost: number
          total_packages: number
          updated_at: string
        }[]
      }
      get_biz_forwarding_orders: {
        Args: {
          page?: number
          page_size?: number
          v_from_param?: string
          v_search_param?: string
          v_sort_by_param?: string
          v_status_param?: string
          v_to_param?: string
        }
        Returns: {
          code: string
          created_at: string
          creator_email: string
          creator_id: string
          id: number
          shipments: Json
          status: string
          total_actual_cost: number
          total_count: number
          total_estimated_cost: number
          total_packages: number
          updated_at: string
        }[]
      }
      get_biz_shipments: {
        Args: {
          page?: number
          page_size?: number
          v_courier_param?: string
          v_from_param?: string
          v_max_price?: number
          v_min_price?: number
          v_sort_by_param?: string
          v_to_param?: string
          v_tracking_param?: string
        }
        Returns: {
          actual_price: number
          associated_info: string
          consignee: Json
          courier: string
          created_at: string
          creator_id: string
          id: number
          pieces: Json
          rate_price: number
          shipment_id: number
          total_count: number
          tracking_number: string
        }[]
      }
      get_bulk_shipment_orders: {
        Args: {
          p_only_single_line_item: boolean
          p_page_index: number
          p_page_size: number
          p_search: string
        }
        Returns: {
          id: number
          line_items: Json
          name: string
          note: string
          shipping_address: Json
          shipping_line: Json
          total_count: number
        }[]
      }
      get_bulk_shipment_orders_cn: {
        Args: {
          p_only_single_line_item: boolean
          p_page_index: number
          p_page_size: number
          p_search: string
        }
        Returns: {
          id: number
          line_items: Json
          name: string
          note: string
          shipping_line: Json
          total_count: number
        }[]
      }
      get_card_last_update: {
        Args: Record<PropertyKey, never>
        Returns: {
          last_transaction_time: string
          transaction_type: string
        }[]
      }
      get_character_points_adjusted: {
        Args: Record<PropertyKey, never>
        Returns: {
          adjusted_net_points: number
          character_name: string
          earn_points: number
          refund_points: number
        }[]
      }
      get_character_points_adjusted_by_customer: {
        Args: { p_customer_id?: number; p_end?: string; p_start?: string }
        Returns: {
          adjusted_net_points: number
          character_name: string
          customer_id: number
          earn_points: number
          email: string
          first_name: string
          last_name: string
          refund_points: number
        }[]
      }
      get_character_points_customer_detail: {
        Args: {
          p_character: string
          p_end?: string
          p_limit?: number
          p_offset?: number
          p_start?: string
        }
        Returns: {
          adjusted_net_points: number
          customer_id: number
          earn_points: number
          email: string
          first_name: string
          last_name: string
          net_points: number
          refund_points: number
        }[]
      }
      get_cn_fulfillments: {
        Args: { p_order_name: string }
        Returns: {
          fulfillment_id: number
          tracking_number: string
        }[]
      }
      get_cn_grouped_orders: {
        Args: {
          p_min_count?: number
          p_origin?: string
          p_ready_to_ship?: boolean
          p_remaining_status?: string
        }
        Returns: {
          first_created_at: string
          group_key: string
          last_created_at: string
          order_count: number
          order_names: string[]
          sig: Json
        }[]
      }
      get_cn_inventory_summary: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: number
          image: string
          incoming: number
          onhand: number
          title: string
          title_cn: string
          total_unfulfilled_quantity_non_authorized: number
        }[]
      }
      get_codename_pl: {
        Args: Record<PropertyKey, never>
        Returns: {
          barcode: string
          image: string
          inventory_variant_id: number
          item_ids: number[]
          location: string
          orders_info: Json
          quantity: number
          title: string
        }[]
      }
      get_combine_no_pl: {
        Args: Record<PropertyKey, never>
        Returns: {
          barcode: string
          image: string
          inventory_variant_id: number
          location: string
          orders_info: Json
          quantity: number
          title: string
        }[]
      }
      get_combine_pl: {
        Args: Record<PropertyKey, never>
        Returns: {
          barcode: string
          image: string
          inventory_variant_id: number
          location: string
          orders_info: Json
          quantity: number
          title: string
        }[]
      }
      get_comments_approval_stats: {
        Args: Record<PropertyKey, never>
        Returns: {
          approval_rate: number
          approved_comments: number
          pending_comments: number
          total_comments: number
        }[]
      }
      get_completed_shipments: {
        Args: {
          accurate_param?: string
          courier_param?: string
          date_range_selected?: string
          from_param?: string
          max_profit?: number
          min_profit?: number
          profit_param?: number
          search_param?: string
          shipping_param?: string
          sort_by_param?: string
          to_param?: string
        }
        Returns: {
          orderInfo: Json
          shipmentList: Json
        }[]
      }
      get_completed_shipments2: {
        Args: {
          profit_param?: number
          search_param?: string
          sort_by_param?: string
        }
        Returns: {
          orderInfo: Json
          shipmentList: Json
        }[]
      }
      get_couriers_last_update: {
        Args: Record<PropertyKey, never>
        Returns: {
          courier: string
          last_updated_at: string
        }[]
      }
      get_customer_points: {
        Args: {
          p_limit?: number
          p_max_points?: number
          p_min_points?: number
          p_offset?: number
          p_search?: string
        }
        Returns: {
          current_points: number
          customer_id: number
          email: string
          first_name: string
          last_name: string
          order_names: string[]
          total_count: number
          total_earn_points: number
          total_redeem_points: number
          total_refund_points: number
        }[]
      }
      get_customer_points_detail: {
        Args: {
          p_customer_id: number
          p_limit?: number
          p_offset?: number
          p_sort?: string
        }
        Returns: {
          change_type: string
          created_at: string
          customer_id: number
          foli_id: number
          id: number
          order_id: number
          order_name: string
          points_change: number
          price: number
          quantity: number
          total_count: number
          variant_image: string
          variant_title: string
        }[]
      }
      get_download_po: {
        Args: { po_id_input: number }
        Returns: {
          ed_date: string
          image: Json
          incoming: number
          inventory_variant_id: number
          lineitems_unfulfilled_quantity: number
          onhand: number
          po_code: string
          po_id: number
          price: number
          quantity: number
          shipped: number
          supplier: string
          title: string
          total_incoming: number
          total_onhand: number
        }[]
      }
      get_download_po_draft: {
        Args: { po_id_input: number }
        Returns: {
          ed_date: string
          image: Json
          incoming: number
          inventory_variant_id: number
          lineitems_unfulfilled_quantity: number
          onhand: number
          po_code: string
          po_id: number
          price: number
          quantity: number
          shipped: number
          supplier: string
          title: string
          total_incoming: number
          total_onhand: number
        }[]
      }
      get_earliest_ed_date_by_iv_id: {
        Args: { _iv_id: number }
        Returns: string
      }
      get_export_soyuda: {
        Args: { _order_ids: number[] }
        Returns: {
          destination: Json
          name: string
          subtotal_line_items_quantity: number
          total_price_set: Json
        }[]
      }
      get_group_users: {
        Args: { p_group_id: string }
        Returns: {
          created_at: string
          group_id: string
          id: string
          role: string
          user_email: string
          user_id: string
        }[]
      }
      get_history_locations: {
        Args: { inventory_variant_id_input: number }
        Returns: {
          location: string
          quantity: number
        }[]
      }
      get_icn_pl: {
        Args: Record<PropertyKey, never>
        Returns: {
          barcode: string
          image: string
          inventory_variant_id: number
          item_ids: number[]
          location: string
          orders_info: Json
          quantity: number
          title: string
        }[]
      }
      get_icn_shipments: {
        Args: {
          p_courier?: string
          p_limit?: number
          p_offset?: number
          p_order_name?: string
          p_push_icn?: boolean
          p_push_suyoda?: boolean
          p_tracking_number?: string
        }
        Returns: {
          cancelled: boolean
          courier: string
          created_at: string
          order_id: number
          order_no: string
          push_icn: boolean
          push_id: number
          push_suyoda: boolean
          raw_order_name: string
          resp: Json
          shipment_id: number
          total_count: number
          tp_waybill_no: string
          tracking_number: string
        }[]
      }
      get_inventories: {
        Args: { page_param: number; page_size: number; search_text: string }
        Returns: {
          barcode: string
          created_at: string
          id: number
          image: Json
          incoming: number
          onhand: number
          shipped: number
          title: string
          total_count: number
        }[]
      }
      get_inventory_detail: {
        Args: { _id: number }
        Returns: {
          barcode: string
          country_code_of_origin: string
          created_at: string
          deadline: string
          height: number
          id: number
          image: Json
          is_custom_product: boolean
          korean_title: string
          length: number
          line_item_id: number
          location_data: Json
          order_name: string
          out_of_stock: boolean
          price: number
          purchase_link: string
          quantity: number
          title: string
          total_incoming: number
          total_on_hand: number
          total_shipped: number
          updated_at: string
          volumetric_weight: number
          weight: number
          width: number
        }[]
      }
      get_inventory_detail_2: {
        Args: { _id: number }
        Returns: {
          barcode: string
          created_at: string
          deadline: string
          height: number
          id: number
          image: Json
          is_custom_product: boolean
          korean_title: string
          length: number
          line_item_id: number
          location_data: Json
          order_name: string
          out_of_stock: boolean
          price: number
          purchase_link: string
          quantity: number
          title: string
          total_incoming: number
          total_on_hand: number
          total_shipped: number
          updated_at: string
          volumetric_weight: number
          weight: number
          width: number
        }[]
      }
      get_inventory_detail_3: {
        Args: { _id: number }
        Returns: {
          barcode: string
          created_at: string
          deadline: string
          height: number
          id: number
          image: Json
          is_custom_product: boolean
          korean_title: string
          length: number
          line_item_id: number
          location_data: Json
          order_name: string
          out_of_stock: boolean
          price: number
          purchase_link: string
          quantity: number
          title: string
          total_incoming: number
          total_on_hand: number
          total_shipped: number
          updated_at: string
          volumetric_weight: number
          weight: number
          width: number
        }[]
      }
      get_inventory_details: {
        Args: { _ivid: number }
        Returns: {
          display_name: string
          unfulfilled_quantity: number
        }[]
      }
      get_inventory_location: {
        Args: { inventory_variant_id_input: number; po_id_input?: number }
        Returns: {
          location: string
          quantity: number
        }[]
      }
      get_inventory_locations: {
        Args: { page_param: number; page_size: number }
        Returns: {
          barcode: string
          id: number
          image: Json
          ivid: number
          location: string
          quantity: number
          title: string
          total_count: number
        }[]
      }
      get_inventory_locations_for_line_item: {
        Args: { _iv_id: number; _order_id: number }
        Returns: {
          barcode: string
          location_info: Json
          title: string
        }[]
      }
      get_inventory_locations_for_line_items: {
        Args: { _iv_ids: number[]; _order_id: number }
        Returns: {
          barcode: string
          inventory_variant_id: number
          location_info: Json
          title: string
        }[]
      }
      get_inventory_summary: {
        Args: {
          filter_out_of_stock?: boolean
          filter_pending_purchase?: boolean
          filter_positive?: boolean
          limit_input: number
          offset_input: number
          search_text?: string
        }
        Returns: {
          barcode: string
          id: number
          image: Json
          incoming: number
          onhand: number
          out_of_stock: boolean
          shipped: number
          title: string
          total_count: number
          total_unfulfilled_quantity_authorized: number
          total_unfulfilled_quantity_non_authorized: number
        }[]
      }
      get_inventory_summary_cn: {
        Args: {
          filter_out_of_stock?: boolean
          filter_pending_purchase?: boolean
          filter_positive?: boolean
          limit_input: number
          offset_input: number
          search_text?: string
        }
        Returns: {
          barcode: string
          id: number
          image: Json
          incoming: number
          onhand: number
          out_of_stock: boolean
          shipped: number
          title: string
          title_cn: string
          total_count: number
          total_unfulfilled_quantity_authorized: number
          total_unfulfilled_quantity_non_authorized: number
        }[]
      }
      get_inventory_summary2: {
        Args: {
          filter_out_of_stock?: boolean
          filter_pending_purchase?: boolean
          filter_positive?: boolean
          limit_input?: number
          offset_input?: number
          search_text?: string
        }
        Returns: {
          barcode: string
          id: number
          image: Json
          incoming: number
          onhand: number
          out_of_stock: boolean
          shipped: number
          title: string
          total_count: number
          total_unfulfilled_quantity_authorized: number
          total_unfulfilled_quantity_non_authorized: number
        }[]
      }
      get_line_items_with_tracking_numbers: {
        Args: { tracking_numbers: string[] }
        Returns: {
          category: string
          discounted_unit_price_after_all_discounts_set: Json
          id: number
          name: string
          original_unit_price_set: Json
          quantity: number
          tracking_number: string
        }[]
      }
      get_lottery_order_summary: {
        Args: Record<PropertyKey, never>
        Returns: {
          email: string
          total_amount: number
          total_quantity: number
        }[]
      }
      get_lottery_order_summary2: {
        Args: Record<PropertyKey, never>
        Returns: {
          email: string
          total_amount: number
          total_quantity: number
        }[]
      }
      get_mergeable_order_groups_by_customer: {
        Args: { p_customer_id: string }
        Returns: {
          address1: string
          address2: string
          city: string
          country_code: string
          order_count: number
          order_ids: number[]
          order_names: string[]
          province_code: string
          zip: string
        }[]
      }
      get_mergeable_orders: {
        Args: { p_order_id: number }
        Returns: {
          order_id: number
        }[]
      }
      get_most_similar_translation: {
        Args:
          | { desired_locale: string; given_text: string }
          | { korean_text: string }
        Returns: {
          similarity: number
          translation: string
        }[]
      }
      get_non_shipping_unfulfilled_variants: {
        Args: Record<PropertyKey, never>
        Returns: {
          display_name: string
          id: number
        }[]
      }
      get_not_in_accounting_shipments: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: number
          tracking_number: string
        }[]
      }
      get_notify_customer_orders: {
        Args: {
          _all?: boolean
          _page_index: number
          _page_size: number
          _search?: string
        }
        Returns: {
          created_at: string
          email: string
          email_sent_at: string
          id: number
          line_items: Json
          name: string
          row_count: number
        }[]
      }
      get_order_details: {
        Args: { _order_id: number }
        Returns: Json
      }
      get_order_details_cn: {
        Args: { _order_id: number }
        Returns: Json
      }
      get_order_fulfillment_details: {
        Args: { order_ids: number[] }
        Returns: {
          category_cn: string
          codename_gift_price: number
          cpf_cnpj: string
          destination: Json
          financial_summaries: Json
          hscode_cn: string
          iv_id: number
          note: string
          order_id: number
          order_name: string
          price_cn: number
          remaining_quantity: number
          rfc: string
          shipping_title: string
          shutline_gift_price: number
          title: string
          title_cn: string
          top_gift_price: number
        }[]
      }
      get_order_fulfillment_details_reship: {
        Args: { order_ids: number[] }
        Returns: {
          category_cn: string
          codename_gift_price: number
          cpf_cnpj: string
          destination: Json
          financial_summaries: Json
          hscode_cn: string
          iv_id: number
          note: string
          order_id: number
          order_name: string
          price_cn: number
          remaining_quantity: number
          rfc: string
          shipping_title: string
          shutline_gift_price: number
          title: string
          title_cn: string
          top_gift_price: number
        }[]
      }
      get_order_line_items_by_tracking_numbers_from_ware_bak: {
        Args: { tracking_numbers: string[] }
        Returns: {
          custom_product_name: string
          id: number
          price: number
          product_title: string
          quantity: number
          tracking_number: string
        }[]
      }
      get_order_names_by_inventory_variant_id: {
        Args: { inventory_variant_id_input: number }
        Returns: Json
      }
      get_order_profit_list: {
        Args: {
          page?: number
          page_size?: number
          v_accurate_param?: string
          v_courier_param?: string
          v_date_range_selected?: string
          v_from_param?: string
          v_max_profit?: number
          v_min_profit?: number
          v_profit_param?: string
          v_search_param?: string
          v_sort_by_param?: string
          v_to_param?: string
        }
        Returns: {
          current_rate: number
          customer_name: string
          order_created_at: string
          order_financial_status: string
          order_id: number
          order_name: string
          order_price: number
          profit: number
          rated_profit: number
          shipments: Json
          total_count: number
        }[]
      }
      get_order_shipments: {
        Args: {
          accurate_param?: string
          courier_param?: string
          date_range_selected?: string
          from_param?: string
          max_profit?: number
          min_profit?: number
          page_index?: number
          page_size?: number
          profit_param?: string
          search_param?: string
          sort_by_param?: string
          sort_order_param?: string
          to_param?: string
        }
        Returns: {
          customer_name: string
          order_created_at: string
          order_financial_status: string
          order_id: string
          order_name: string
          order_price: number
          profit: number
          shipments: Json
        }[]
      }
      get_order_summary: {
        Args: Record<PropertyKey, never>
        Returns: {
          total_net_payment_price: number
          total_supplier_price: number
          total_unfulfilled_quantity: number
        }[]
      }
      get_orders: {
        Args: {
          _combine?: string
          _country?: string
          _exported_pl?: boolean
          _financial_status?: string
          _fulfill_mabang?: boolean
          _fulfillment_status?: string
          _has_cn_outbound_image?: boolean
          _is_custom_order?: boolean
          _limit?: number
          _offset?: number
          _oos?: boolean
          _ready_to_ship?: string
          _search?: string
          _status?: string
          _variant?: string
          _warehouse_location?: string
        }
        Returns: {
          cancel_reason: string
          created_at: string
          display_financial_status: string
          display_fulfillment_status: string
          email: string
          id: number
          is_custom_order: boolean
          name: string
          note: string
          ready_to_ship: boolean
          shipping_address: Json
          shipping_title: string
          status: string
          total_count: number
        }[]
      }
      get_orders_all_in_icn: {
        Args: {
          p_page_index: number
          p_page_size: number
          p_shipping_title?: string
        }
        Returns: {
          id: number
          line_items: Json
          name: string
          note: string
          shipping_line: Json
          total_count: number
        }[]
      }
      get_orders_allocation: {
        Args: { _order_ids: number[] }
        Returns: {
          image_url: string
          location: string
          name: string
          title: string
          total_quantity: number
        }[]
      }
      get_orders_allocation_kr: {
        Args: { _order_ids: number[] }
        Returns: {
          image_url: string
          location: string
          name: string
          title: string
          total_quantity: number
        }[]
      }
      get_orders_cn: {
        Args: {
          _combine?: string
          _country?: string
          _export?: boolean
          _exported_pl?: boolean
          _financial_status?: string
          _fulfill_mabang?: boolean
          _fulfillment_status?: string
          _is_custom_order?: boolean
          _limit?: number
          _location?: string
          _offset?: number
          _oos?: boolean
          _ready_to_ship?: boolean
          _search?: string
          _status?: string
          _variant?: string
          _warehouse_location?: string
        }
        Returns: {
          cancel_reason: string
          created_at: string
          display_financial_status: string
          display_fulfillment_status: string
          email: string
          id: number
          is_custom_order: boolean
          name: string
          note: string
          ready_to_ship: boolean
          shipping_address: Json
          status: string
          total_count: number
        }[]
      }
      get_orders_temp: {
        Args: {
          _combine?: string
          _exported_pl?: boolean
          _financial_status?: string
          _fulfill_mabang?: boolean
          _fulfillment_status?: string
          _is_custom_order?: boolean
          _limit?: number
          _offset?: number
          _oos?: boolean
          _ready_to_ship?: string
          _search?: string
          _status?: string
          _variant?: string
          _warehouse_location?: string
        }
        Returns: {
          cancel_reason: string
          created_at: string
          display_financial_status: string
          display_fulfillment_status: string
          email: string
          id: number
          is_custom_order: boolean
          name: string
          note: string
          ready_to_ship: boolean
          shipping_address: Json
          status: string
          total_count: number
        }[]
      }
      get_orders_without_fulfillment: {
        Args: { _offset: number; limit_count: number; start_date: string }
        Returns: {
          id: number
          shop: Json
          total_count: number
        }[]
      }
      get_outbounds: {
        Args: { page_param: number; page_size: number; search_text: string }
        Returns: {
          created_at: string
          id: number
          orders: Json
          outbound_images: Json
          total_count: number
          tracking_number: string
        }[]
      }
      get_outbounds_temp: {
        Args: {
          origin_param: string
          page_param: number
          page_size: number
          search_text: string
        }
        Returns: {
          confirm: boolean
          created_at: string
          id: number
          orders: Json
          outbound_images: Json
          total_count: number
          tracking_number: string
        }[]
      }
      get_packing_list_by_order_ids: {
        Args: { order_ids: number[] }
        Returns: {
          barcode: string
          id: number
          image: string
          location: string
          orders_info: Json
          quantity: number
          title: string
        }[]
      }
      get_pending_refunds: {
        Args: { _page_index: number; _page_size: number; _search?: string }
        Returns: {
          line_items: Json
          order_created_at: string
          order_id: number
          order_name: string
          row_count: number
        }[]
      }
      get_po_detail: {
        Args: { po_code: string }
        Returns: Json
      }
      get_po_list: {
        Args: {
          p_amount?: number
          p_code?: string
          p_page?: number
          p_page_size?: number
          p_sort_by?: string
          p_time?: string
        }
        Returns: {
          diff_amount: number
          diff_seconds: number
          po_code: string
          po_cost: number
          po_created_at: string
          po_id: number
          total_count: number
        }[]
      }
      get_purchase_orders_with_inventory: {
        Args: {
          custom_filter?: boolean
          limit_input?: number
          offset_input?: number
          po_id_input?: number
          search?: string
          status_filter?: string
        }
        Returns: Json
      }
      get_reconciliations_rpc: {
        Args: { p_page?: number; p_page_size?: number }
        Returns: {
          created_at: string
          inflow_transactions: Json
          outflow_transactions: Json
          reconciliation_id: number
          status: string
          total_count: number
          updated_at: string
        }[]
      }
      get_resend_order_gifts: {
        Args: Record<PropertyKey, never>
        Returns: {
          gift_id: string
          inventory_variant_id: number
          is_gift: boolean
          line_item_id: number
          order_id: number
          product_id: string
          qty: number
          title: string
        }[]
      }
      get_reship_groups: {
        Args: Record<PropertyKey, never>
        Returns: {
          first_created_at: string
          group_key: string
          last_created_at: string
          order_count: number
          order_names: string[]
          sig: Json
        }[]
      }
      get_shipment_details: {
        Args: { _shipment_id: number }
        Returns: {
          barcode: string
          checked_quantity: number
          id: number
          image: Json
          image_urls: string[]
          title: string
          total_quantity: number
        }[]
      }
      get_shipments: {
        Args: { p_page_index: number; p_page_size: number; p_search: string }
        Returns: {
          cancelled: boolean
          cancelled_at: string
          checked: boolean
          created_at: string
          file_name: string
          fulfilled: boolean
          fulfilled_at: string
          id: number
          image_uploaded: boolean
          is_exported: boolean
          is_inventory_deducted: boolean
          order_data: Json
          picked_up: boolean
          shipping_account: Json
          total_count: number
          tracking_number: string
          user_email: string
        }[]
      }
      get_shipments_items_by_suyoda: {
        Args: { tracking_numbers: string[] }
        Returns: {
          created_at: string
          line_items: Json
          order_id: number
        }[]
      }
      get_shipments_temp: {
        Args: {
          p_courier?: string
          p_page_index: number
          p_page_size: number
          p_search: string
        }
        Returns: {
          cancelled: boolean
          cancelled_at: string
          checked: boolean
          created_at: string
          file_name: string
          fulfilled: boolean
          fulfilled_at: string
          id: number
          image_uploaded: boolean
          is_exported: boolean
          is_inventory_deducted: boolean
          order_data: Json
          picked_up: boolean
          shipping_account: Json
          total_count: number
          tracking_number: string
          user_email: string
        }[]
      }
      get_shipped_orders: {
        Args: { inventory_variant_id_input: number }
        Returns: {
          order_name: string
          quantity: number
          shipment_created_at: string
        }[]
      }
      get_shipping_titles: {
        Args: Record<PropertyKey, never>
        Returns: {
          title: string
        }[]
      }
      get_shopname_orderid_by_bundleid_fnc: {
        Args: { bundle_id_param: number }
        Returns: {
          bundle_id: number
          order_id: number
          shop_name: string
          variant_id: number
        }[]
      }
      get_shops: {
        Args: Record<PropertyKey, never>
        Returns: {
          created_at: string
          current_bulk_operation: Json | null
          group_id: string
          id: number
          makestar_upload_count: number | null
          makestarLastUpAt: string | null
          name: string
          received_webhooks: Json[] | null
          shopify_access_token: string
          shopify_api_key: string
          shopify_api_secret: string
          sync_time: string | null
          updated_at: string | null
          yes24_upload_count: number | null
        }[]
      }
      get_summary_by_user: {
        Args: { p_user_id: string }
        Returns: {
          account_id: number
          balance: number
          name: string
          t_last_update: string
          total_rebate: number
        }[]
      }
      get_timeout_po: {
        Args: Record<PropertyKey, never>
        Returns: {
          code: string
          ed_date: string
          id: number
        }[]
      }
      get_total_pending_purchase_cost: {
        Args: Record<PropertyKey, never>
        Returns: {
          out_of_stock_cost: number
          out_of_stock_shipping_price: number
          total_cost: number
          total_shipping_price: number
        }[]
      }
      get_total_supplier_cost_by_order_id: {
        Args: { _order_id: number }
        Returns: {
          order_supplier_cost: number
        }[]
      }
      get_transaction_heatmap: {
        Args: { p_card_id?: number; p_end_date?: string; p_start_date?: string }
        Returns: {
          total_amount: number
          transaction_count: number
          transaction_date: string
        }[]
      }
      get_transaction_type_distribution: {
        Args: {
          end_date?: string
          p_account_id?: number
          p_mark_type?: string
          start_date?: string
        }
        Returns: {
          totalAmount: number
          transactions: number
          type: string
        }[]
      }
      get_transactions: {
        Args: {
          p_allocation_type?: string
          p_amount_filter?: string
          p_card_num?: string
          p_date_from?: string
          p_date_to?: string
          p_is_match_po?: string
          p_name_filter?: string
          p_page?: number
          p_page_size?: number
        }
        Returns: {
          allocation_time: string
          belong_user: number
          CardApprovalCost: number
          CardNum: string
          format_dt: string
          id: number
          po_code: string
          rebate: number
          time_diff_seconds: number
          total_count: number
          transaction_account_name: string
          UseDT: string
          UseStoreName: string
        }[]
      }
      get_transactions_by_user: {
        Args: { p_page?: number; p_page_size?: number; p_user_id: string }
        Returns: {
          amount: number
          card_number: string
          id: number
          name: string
          rebate_amount: number
          store_name: string
          total_count: number
          transaction_time: string
          transaction_type: string
        }[]
      }
      get_transactions_v2: {
        Args: {
          p_account_id?: number
          p_allocation_status?: string
          p_card_num?: string
          p_date_from?: string
          p_date_to?: string
          p_is_match_po?: string
          p_mark_type?: string
          p_max_amount?: number
          p_min_amount?: number
          p_page?: number
          p_page_size?: number
          p_store_name?: string
          p_transaction_type?: string
        }
        Returns: {
          account_id: number
          allocation_status: string
          amount: number
          card_number: string
          id: number
          mark_type: string
          note: string
          po_code: string
          rebate_amount: number
          store_name: string
          take_advantage_of_local: string
          time_diff_seconds: number
          total_count: number
          transaction_account_name: string
          transaction_time: string
          transaction_type: string
        }[]
      }
      get_unfulfilled_orders: {
        Args: { order_names: string[] }
        Returns: {
          combine: boolean
          display_fulfillment_status: string
          id: number
          name: string
        }[]
      }
      get_unfulfilled_orders_cost: {
        Args: Record<PropertyKey, never>
        Returns: {
          normal_orders_purc_cost: number
          normal_orders_shipping_price: number
          oos_purc_cost: number
          oos_shipping_price: number
          ready_shipping_price: number
        }[]
      }
      get_unique_mark_types: {
        Args: Record<PropertyKey, never>
        Returns: {
          mark_type: string
        }[]
      }
      get_unmatched_po_list: {
        Args: {
          p_from?: string
          p_page?: number
          p_page_size?: number
          p_search?: string
          p_sort_by?: string
          p_to?: string
        }
        Returns: Json
      }
      get_user_claims: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      get_user_rebate_for_quarters: {
        Args: { belong_user_param: number; format_dt_param: string }
        Returns: {
          quarter_end: string
          quarter_label: string
          quarter_start: string
          rebate: number
          user_id: number
        }[]
      }
      get_user_transaction_summary: {
        Args: {
          end_date?: string
          p_account_id?: number
          p_mark_type?: string
          start_date?: string
        }
        Returns: {
          balance: number
          netAmount: number
          rebate: number
          totalAmount: number
          transactions: number
          user: string
        }[]
      }
      get_variant_inventory_compare: {
        Args: {
          limit_param?: number
          offset_param?: number
          search_param?: string
        }
        Returns: {
          iv_id: number
          iv_title: string
          p_title: string
          v_display_name: string
          v_id: number
          v_ivid: number
          v_title: string
        }[]
      }
      gtrgm_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_decompress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_options: {
        Args: { "": unknown }
        Returns: undefined
      }
      gtrgm_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      handle_cancel_fulfillment: {
        Args: { order_id_input: number }
        Returns: undefined
      }
      handle_package_and_inventory: {
        Args: {
          lineitems: Json
          purchase_order_id: number
          tracking_number: string
        }
        Returns: Json
      }
      import_payoneer_transactions: {
        Args: { p_transactions: Json[] }
        Returns: {
          error_count: number
          errors: string[]
          inserted_count: number
          updated_count: number
        }[]
      }
      import_transactions_from_old_data: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      import_transactions_from_old_data_cash: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      inventory_bind: {
        Args:
          | {
              line_item_id_param?: number
              new_ivid?: number
              old_ivid: number
              purchase_link_param?: string
              title_param?: string
              variant_id_param?: number
            }
          | {
              lineitemid: string
              newivid: string
              oldivid: string
              purchaselink: string
              title_param: string
              variantid: string
            }
        Returns: {
          id: number
          title: string
        }[]
      }
      is_combined_fnc: {
        Args: { orderid: number }
        Returns: boolean
      }
      is_custom_fnc: {
        Args: { orderid: number }
        Returns: boolean
      }
      is_super_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      jwt_is_expired: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      lottery_draw: {
        Args: Record<PropertyKey, never>
        Returns: {
          email: string
          final_rank: number
          is_deferred: boolean
          original_rank: number
          prize_level: number
          prize_type: string
        }[]
      }
      manual_stock_in: {
        Args: {
          _iv_id: number
          _location: string
          _quantity: number
          _tracking_number: string
        }
        Returns: undefined
      }
      manual_stock_in_test: {
        Args: {
          _iv_id: number
          _location: string
          _quantity: number
          _tracking_number: string
        }
        Returns: undefined
      }
      mark_as_shipped: {
        Args: { _inventory_variant_id: number; _quantity: number }
        Returns: undefined
      }
      marketplace_search_translations: {
        Args: { term: string }
        Returns: {
          created_at: string
          id: number
          input: string | null
          language_code: string | null
          resource_id: number | null
          resource_type: string | null
          result: Json | null
        }[]
      }
      merge_inventory_variants: {
        Args: { from_ivid: number; to_ivid: number }
        Returns: undefined
      }
      one_click_stock_in: {
        Args: { poid: number }
        Returns: undefined
      }
      orders_list_fnc: {
        Args: {
          cancel_reason_param?: string
          cursor_param?: number
          customer_email_param?: string
          customer_name_param?: string
          date_from_param?: string
          date_to_param?: string
          financial_status_param?: string[]
          fulfillment_status_param?: string[]
          is_custom_param?: boolean
          no_search_param?: string
          only_all_purchased_param?: boolean
          only_combined_param?: boolean
          order_name_param?: string
          page_size_param?: number
          product_title_param?: string
          ready_to_ship_param?: boolean
          search_param?: string
          shipping_address_param?: string
          shop_ids_param?: number[]
          sort_by_param?: string
          variant_id_param?: string
          variant_title_param?: string
        }
        Returns: {
          app: Json
          cancel_reason: string
          created_at: string
          current_total_price_set: Json
          customer: Json
          display_financial_status: string
          display_fulfillment_status: string
          id: number
          is_combined: boolean
          line_items: Json
          name: string
          net_payment_set: Json
          shipping_address: Json
          shop_id: number
          total_price_set: Json
        }[]
      }
      orders_list_fnc_lite: {
        Args: {
          cursor_param?: number
          page_size_param?: number
          ready_to_ship_param?: boolean
          search_param?: string
          shop_ids_param?: number[]
        }
        Returns: {
          app: Json
          cancel_reason: string
          created_at: string
          current_total_price_set: Json
          customer: Json
          display_financial_status: string
          display_fulfillment_status: string
          id: number
          is_combined: boolean
          line_items: Json
          name: string
          net_payment_set: Json
          shipping_address: Json
          shop_id: number
          total_price_set: Json
        }[]
      }
      po_list_fnc: {
        Args: {
          codes_param: string[]
          date_from_param: string
          date_to_param: string
          destination_param: string
          search_param: string
          supplier_param: string
          title_param: string
          type_param: string
        }
        Returns: {
          code: string
          created_at: string
          destination: string
          draft: boolean
          ed_date: string
          fee: string
          id: number
          inventory_items: Json
          note: string
          status: string
          supplier: string
          total_count: number
          updated_at: string
        }[]
      }
      process_mix_orders: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      process_multiple_orders: {
        Args: { order_names: string[] }
        Returns: undefined
      }
      process_multiple_orders_cn: {
        Args: { order_names: string[] }
        Returns: undefined
      }
      process_order_inventory: {
        Args: { order_name: string }
        Returns: undefined
      }
      process_order_inventory_cn: {
        Args: { order_name: string }
        Returns: undefined
      }
      process_order_inventory_swap: {
        Args: { p_order_id: number } | { p_order_id: number; toicn: boolean }
        Returns: undefined
      }
      process_stock_in: {
        Args: {
          p_inventory_variant_id: number
          p_location: string
          p_purchase_order_id: number
          p_quantity: number
          p_tracking_number?: string
        }
        Returns: undefined
      }
      process_swap_inventory_locations: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      purchase_orders_by_code: {
        Args: { po_code: string }
        Returns: {
          image: Json
          incoming_count: number
          items: Json
          iv_barcode: string
          ivid: number
          onhand_count: number
          poid: number
          title: string
        }[]
      }
      read_secret: {
        Args: { secret_name: string }
        Returns: string
      }
      recalculate_balances: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      recalculate_balances_by_allocation_time: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      reduce_inventory_quantities: {
        Args: { list: Json }
        Returns: undefined
      }
      refresh_inventory_summary_mv: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      restore_shipment_inventory: {
        Args: { _tracking_number: string }
        Returns: undefined
      }
      search_social_comments: {
        Args: {
          approved_filter?: boolean
          author_filter?: string
          content_filter?: string
          end_date?: string
          original_post_id_filter?: string
          page_limit?: number
          page_offset?: number
          platform_filter?: string
          start_date?: string
        }
        Returns: {
          approved: boolean
          author: Json
          created_at: string
          id: string
          like_count: number
          media: Json
          original_post_id: string
          platform: string
          text: string
          total: number
        }[]
      }
      set_limit: {
        Args: { "": number }
        Returns: number
      }
      ship_inventory_items: {
        Args: {
          _ivid: number
          _order_id: number
          _order_name: string
          qty: number
        }
        Returns: undefined
      }
      show_limit: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      show_trgm: {
        Args: { "": string }
        Returns: string[]
      }
      soundex: {
        Args: { "": string }
        Returns: string
      }
      split_inventory_variant: {
        Args: { _variant_id: number }
        Returns: undefined
      }
      summarize_inventory_locations: {
        Args: { _order_ids: number[] }
        Returns: {
          inventory_title: string
          location: string
          order_names: Json
          total_quantity: number
        }[]
      }
      swap_inventory_locations: {
        Args: {
          iv_id: number
          li_id: number
          old_location: string
          total_quantity: number
        }
        Returns: undefined
      }
      temp_get_inventory_location: {
        Args: { _id: number }
        Returns: {
          location: string
          quantity: number
        }[]
      }
      temp_stock_in: {
        Args: { purchase_order_id_input: number }
        Returns: undefined
      }
      temp_update_inventory_location: {
        Args: {
          _inventory_variant_id: number
          exclude_item_ids: number[]
          new_location: string
          required_quantity: number
        }
        Returns: undefined
      }
      test_allocate_inventory: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      test_by_product: {
        Args: { no_old_param: boolean; search_param: string }
        Returns: {
          inventory_quantity: number
          inventory_supplier: string
          inventory_variant_id: number
          inventory_variant_purchase_link: string
          inventory_variant_title: string
          last_purchase_price: number
          line_items: Json
          lineitem_count: number
          product_featuredimage: string
          product_id: number
          product_title: string
          product_vendor: string
          purchase_quantity: number
          shop_name: string
          total_count: number
          unfulfilled_quantity_sum: number
          variant_id: number
          variant_image: string
          variant_last_line_item_at: string
          variant_title: string
        }[]
      }
      test_get_variant_inventory_compare: {
        Args: {
          limit_param?: number
          offset_param?: number
          search_param?: string
        }
        Returns: {
          iv_id: number
          iv_title: string
          li_name: string
          p_title: string
          v_display_name: string
          v_id: number
          v_ivid: number
          v_title: string
        }[]
      }
      test_orders_list_fnc: {
        Args:
          | Record<PropertyKey, never>
          | {
              cancel_reason_param?: string
              cursor_param?: number
              customer_email_param?: string
              customer_name_param?: string
              date_from_param?: string
              date_to_param?: string
              financial_status_param?: string
              fulfillment_status_param?: string
              is_custom_param?: boolean
              only_combined_param?: boolean
              order_name_param?: string
              page_size_param?: number
              product_title_param?: string
              ready_to_ship_param?: boolean
              search_param?: string
              shipping_address_param?: string
              shop_ids_param?: number[]
              sort_by_param?: string
              variant_title_param?: string
            }
          | {
              customer_email_param: string
              customer_name_param: string
              date_from_param: string
              date_to_param: string
              financial_status_param: string
              fulfillment_status_param: string
              is_custom_param: boolean
              order_name_param: string
              product_title_param: string
              ready_to_ship_param: boolean
              search_param: string
              shipping_address_param: string
              shop_ids_param: number[]
              variant_title_param: string
            }
          | {
              customer_email_param: string
              customer_name_param: string
              date_from_param: string
              date_to_param: string
              financial_status_param: string
              fulfillment_status_param: string
              order_name_param: string
              product_title_param: string
              ready_to_ship_param: boolean
              search_param: string
              shipping_address_param: string
              shop_ids_param: number[]
              variant_title_param: string
            }
        Returns: {
          additional_fees: Json | null
          alerts: Json | null
          app: Json | null
          billing_address: Json | null
          billing_address_matches_shipping_address: boolean | null
          can_mark_as_paid: boolean | null
          can_notify_customer: boolean | null
          cancel_reason: string | null
          cancellation: Json | null
          cancelled_at: string | null
          capturable: boolean | null
          cart_discount_amount_set: Json | null
          channel_information: Json | null
          client_ip: string | null
          closed: boolean | null
          closed_at: string | null
          combine_cn_kr: boolean | null
          confirmation_number: string | null
          confirmed: boolean | null
          created_at: string
          currency_code: string | null
          current_cart_discount_amount_set: Json | null
          current_subtotal_line_items_quantity: number | null
          current_subtotal_price_set: Json | null
          current_tax_lines: Json | null
          current_total_additional_fees_set: Json | null
          current_total_discounts_set: Json | null
          current_total_duties_set: Json | null
          current_total_price_set: Json | null
          current_total_tax_set: Json | null
          current_total_weight: number | null
          custom_attributes: Json | null
          customer: Json | null
          customer_accepts_marketing: boolean | null
          customer_id: number | null
          customer_journey_summary: Json | null
          customer_locale: string | null
          discount_code: string | null
          discount_codes: string[] | null
          display_address: Json | null
          display_financial_status: string | null
          display_fulfillment_status: string | null
          disputes: Json | null
          edited: boolean | null
          email: string | null
          email_sent_at: string | null
          estimated_taxes: boolean | null
          export: boolean | null
          exported_pl: boolean | null
          exported_yw: boolean | null
          fulfill_mabang: boolean | null
          fulfillable: boolean | null
          fulfilled_cn: boolean | null
          fulfillments: Json | null
          fully_paid: boolean | null
          has_cn_outbound_image: boolean | null
          has_timeline_comment: boolean | null
          id: number
          is_custom_order: boolean | null
          is_merged: boolean | null
          is_pre_order: boolean | null
          kr_to_cn: string | null
          legacy_resource_id: string | null
          localization_extensions: Json[] | null
          mabang_fulfilled_at: string | null
          merchant_editable: boolean | null
          merchant_editable_errors: string[] | null
          merchant_of_record_app: Json | null
          metafield: Json | null
          name: string | null
          need_reship: boolean | null
          net_payment_set: Json | null
          note: string | null
          note_internal: string | null
          notify_customer: boolean | null
          order_export: boolean | null
          original_total_additional_fees_set: Json | null
          original_total_duties_set: Json | null
          original_total_price_set: Json | null
          out_of_stock: boolean | null
          pending_shipment: boolean | null
          phone: string | null
          picked_up_cn: boolean | null
          po_number: string | null
          presentment_currency_code: string | null
          processed_at: string | null
          publication: Json | null
          purchased: boolean | null
          refund_discrepancy_set: Json | null
          refundable: boolean | null
          refunds: Json | null
          registered_source_url: string | null
          remaining_status: string | null
          requires_shipping: boolean | null
          restockable: boolean | null
          return_status: string | null
          shipping_address: Json | null
          shipping_line: Json | null
          shipping_title: string | null
          shop_id: number | null
          show_gift_1: boolean | null
          show_gift_2: boolean | null
          show_gift_3: boolean | null
          signature: string | null
          signature_count: number | null
          source: Database["public"]["Enums"]["order_source"] | null
          source_identifier: string | null
          status: string | null
          subtotal_line_items_quantity: number | null
          subtotal_price_set: Json | null
          tags: string[] | null
          tax_exempt: boolean | null
          tax_lines: Json | null
          taxes_included: boolean | null
          test: boolean | null
          total_capturable_set: Json | null
          total_discounts_set: Json | null
          total_outstanding_set: Json | null
          total_price_set: Json | null
          total_received_set: Json | null
          total_refunded_set: Json | null
          total_refunded_shipping_set: Json | null
          total_shipping_price_set: Json | null
          total_tax_set: Json | null
          total_tip_received_set: Json | null
          total_weight: number | null
          transactions: Json[] | null
          unpaid: boolean | null
          updated_at: string | null
        }[]
      }
      test_rpc: {
        Args:
          | {
              customer_email_param: string
              customer_name_param: string
              date_from_param: string
              date_to_param: string
              financial_status_param: string
              fulfillment_status_param: string
              order_name_param: string
              product_title_param: string
              search_param: string
              shipping_address_param: string
              shop_ids_param: number[]
              variant_title_param: string
            }
          | { search_param: string }
        Returns: {
          app: Json
          created_at: string
          customer: Json
          display_financial_status: string
          display_fulfillment_status: string
          id: number
          line_items: Json
          name: string
          shipping_address: Json
          shop_id: number
          total_count: number
          total_price_set: Json
        }[]
      }
      text_soundex: {
        Args: { "": string }
        Returns: string
      }
      transaction_v2_add_cash_transaction: {
        Args: {
          p_account_id: number
          p_allocation_by: string
          p_amount: number
          p_note: string
          p_transaction_time: string
          p_unique_identifier: string
        }
        Returns: undefined
      }
      transaction_v2_assign_transaction: {
        Args: {
          p_account_id: number
          p_allocation_by: string
          p_transaction_id: number
        }
        Returns: undefined
      }
      transaction_v2_bulk_assign_transactions: {
        Args: {
          p_account_id: number
          p_allocation_by: string
          p_transaction_ids: number[]
        }
        Returns: undefined
      }
      transaction_v2_bulk_mark_transactions: {
        Args: { p_mark_type: string; p_transaction_ids: number[] }
        Returns: undefined
      }
      transaction_v2_cancel_assignment: {
        Args: { p_cancellation_by: string; p_transaction_ids: number[] }
        Returns: undefined
      }
      transaction_v2_import_transactions: {
        Args: { p_transactions: Json[] }
        Returns: undefined
      }
      transaction_v2_mark_transaction: {
        Args: { p_mark_type: string; p_transaction_id: number }
        Returns: undefined
      }
      transaction_v2_match_po: {
        Args: {
          p_match_po_by: string
          p_po_code: string
          p_transaction_id: number
        }
        Returns: undefined
      }
      update_biz_shipments_actual_price_job: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      update_comments_approval: {
        Args: { comment_ids: string[]; new_approved_status: boolean }
        Returns: {
          comment_id: string
          updated_count: number
        }[]
      }
      update_inventory_item_location: {
        Args: {
          iv_id: number
          new_location?: string
          old_location?: string
          po_id_input?: number
          quantity_to_update: number
        }
        Returns: undefined
      }
      update_inventory_item_to_onhand: {
        Args: { sd_id: number }
        Returns: undefined
      }
      update_inventory_items: {
        Args: { data: Json }
        Returns: undefined
      }
      update_inventory_status: {
        Args: { id_input: number; limit_input: number }
        Returns: undefined
      }
      update_inventory_status_2: {
        Args: { id_input: number; limit_input: number }
        Returns: undefined
      }
      update_inventory_summary: {
        Args: { _inventory_variant_id: number }
        Returns: undefined
      }
      update_inventory_variants: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      update_line_items_with_inventory_variants: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      update_order_flags: {
        Args: { _order_id: number }
        Returns: undefined
      }
      update_order_is_custom_order: {
        Args: { _order_id: number }
        Returns: undefined
      }
      update_order_ready_to_ship: {
        Args: { _order_id: number }
        Returns: undefined
      }
      update_out_of_stock: {
        Args: { _inventory_variant_id: number; _oos: boolean }
        Returns: undefined
      }
      update_reconciliation_rpc: {
        Args: {
          p_inflow_transactions: string
          p_outflow_transactions: string
          p_reconciliation_id: number
          p_status?: string
        }
        Returns: {
          reconciliation_id: number
          status: string
          updated_at: string
        }[]
      }
      update_shipment_checked_status: {
        Args: { _shipment_id: number }
        Returns: undefined
      }
      update_supplier_price: {
        Args: { p_inventory_variant_id: number; p_supplier_price: number }
        Returns: undefined
      }
      update_variant_bind: {
        Args: { _variant_id: number }
        Returns: undefined
      }
      upsertorders: {
        Args: {
          _fulfillment_order_line_items: Json[]
          _fulfillment_orders: Json[]
          _line_items: Json[]
          _order: Json
        }
        Returns: undefined
      }
      user_has_group_role: {
        Args: { group_id: string; group_role: string }
        Returns: boolean
      }
      user_is_group_member: {
        Args: { group_id: string }
        Returns: boolean
      }
    }
    Enums: {
      biz_shipments_status: "incoming" | "onhand" | "shipped" | "delivered"
      courier: "fedex" | "dhl" | "ups" | "rincos" | "suyoda" | "4px"
      images_type: "in" | "out"
      inventory_item_status: "incoming" | "onhand" | "shipped"
      InventoryItemType: "custom" | "normal"
      order_source: "shopify"
      po_status: "ordered" | "partial" | "received"
      product_source: "shopify"
      ProductVariantType: "shopify" | "custom"
      social_platform_enum: "x" | "facebook" | "ins"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      biz_shipments_status: ["incoming", "onhand", "shipped", "delivered"],
      courier: ["fedex", "dhl", "ups", "rincos", "suyoda", "4px"],
      images_type: ["in", "out"],
      inventory_item_status: ["incoming", "onhand", "shipped"],
      InventoryItemType: ["custom", "normal"],
      order_source: ["shopify"],
      po_status: ["ordered", "partial", "received"],
      product_source: ["shopify"],
      ProductVariantType: ["shopify", "custom"],
      social_platform_enum: ["x", "facebook", "ins"],
    },
  },
} as const
