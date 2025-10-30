select 
d.user_rank as ranking,
regexp_replace(d.user_email, '^(.{3}).*(@.*)$', '\1***\2') AS email,
d.total_amount
from (
    SELECT 
      row_number() OVER (
          ORDER BY 
              SUM(li.current_quantity * (li.discounted_unit_price_after_all_discounts_set -> 'shopMoney' ->> 'amount')::numeric) DESC,
              SUM(li.current_quantity) DESC,
              MIN(o.created_at) ASC,
              o.email ASC
      )::integer as user_rank,
      o.email as user_email,
      SUM(li.current_quantity) AS total_quantity,
      SUM(li.current_quantity * (li.discounted_unit_price_after_all_discounts_set -> 'shopMoney' ->> 'amount')::numeric) AS total_amount
  FROM line_items li 
  JOIN orders o ON o.id = li.order_id 
  WHERE li.product_id IN(
      '8744574288024', '8729796608152', '8744567013528', '8753963892888', 
      '8797341057176', '8797337878680', '8797333323928', '8796219080856', 
      '8796215771288', '8795356692632', '8763151057048', '8763326824600', 
      '8763301429400', '8763143061656', '8797916954776', '8797926588568', 
      '8797960667288', '8797959422104', '8797956243608', '8797955293336', 
      '8797952606360', '8797945888920', '8797938712728', '8797928685720'
  )
  AND li.updated_at >= '2025-08-08T12:00:00+08:00'
  AND li.updated_at <= '2025-08-14T12:00:00+08:00'
  AND li.current_quantity > 0
  GROUP BY o.email
) d
WHERE d.total_amount >= 200
order by random()
limit 1