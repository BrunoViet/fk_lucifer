select
  COUNT(d.email) as "numberOfPeople",
  SUM(d.orders_quantity) as "ordersQuantity",
  SUM(d.item_quantity) as "totalItemQuantity",
  SUM(d.total_amount) as "totalAmount"
from
  (
    select
      o.email,
      COUNT(distinct o.id) as orders_quantity,
      SUM(li.current_quantity) as item_quantity,
      SUM(
        li.current_quantity * (
          li.discounted_unit_price_after_all_discounts_set -> 'shopMoney' ->> 'amount'
        )::numeric
      ) as total_amount,
      MIN(o.created_at) as first_order_time
    from
      line_items li
      join orders o on o.id = li.order_id
    where
      -- o.email = 'yadira.ibarra002@gmail.com'
      -- o.publication->>'id' = 'gid://shopify/Publication/177606590616'
      -- and
      li.product_id in (
        '8744574288024',
        '8729796608152',
        '8744567013528',
        '8753963892888',
        '8797341057176',
        '8797337878680',
        '8797333323928',
        '8796219080856',
        '8796215771288',
        '8795356692632',
        '8763151057048',
        '8763326824600',
        '8763301429400',
        '8763143061656',
        '8797916954776',
        '8797926588568',
        '8797960667288',
        '8797959422104',
        '8797956243608',
        '8797955293336',
        '8797952606360',
        '8797945888920',
        '8797938712728',
        '8797928685720')
      and li.updated_at >= '2025-08-08T12:00:00+08:00'
      and li.updated_at <= '2025-08-14T12:00:00+08:00'
      -- and li.updated_at <= now()
      and li.current_quantity > 0
    group by
      o.email
    order by
      total_amount desc,
      item_quantity desc,
      first_order_time asc,
      o.email asc
  ) d