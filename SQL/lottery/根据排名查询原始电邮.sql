select 
  d.user_email,
  d.user_rank
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
)d
WHERE d.user_rank IN(
    1, 2, 3, 70, 255, 708, 4, 5, 6, 7, 8, 107, 148, 186, 242, 464,
    9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 54, 55, 101, 105, 323,
    478, 541, 584, 628, 662
)
ORDER BY CASE d.user_rank
    WHEN 1 THEN 1
    WHEN 2 THEN 2
    WHEN 3 THEN 3
    WHEN 70 THEN 4
    WHEN 255 THEN 5
    WHEN 708 THEN 6
    WHEN 4 THEN 7
    WHEN 5 THEN 8
    WHEN 6 THEN 9
    WHEN 7 THEN 10
    WHEN 8 THEN 11
    WHEN 107 THEN 12
    WHEN 148 THEN 13
    WHEN 186 THEN 14
    WHEN 242 THEN 15
    WHEN 464 THEN 16
    WHEN 9 THEN 17
    WHEN 10 THEN 18
    WHEN 11 THEN 19
    WHEN 12 THEN 20
    WHEN 13 THEN 21
    WHEN 14 THEN 22
    WHEN 15 THEN 23
    WHEN 16 THEN 24
    WHEN 17 THEN 25
    WHEN 18 THEN 26
    WHEN 54 THEN 27
    WHEN 55 THEN 28
    WHEN 101 THEN 29
    WHEN 105 THEN 30
    WHEN 323 THEN 31
    WHEN 478 THEN 32
    WHEN 541 THEN 33
    WHEN 584 THEN 34
    WHEN 628 THEN 35
    WHEN 662 THEN 36
END
