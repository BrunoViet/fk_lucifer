-- select count(o.id) from orders o
-- where o.created_at >= '2025-07-08T00:00:00+09:00' and o.created_at <= '2025-07-14T23:59:59+09:00'

-- select 
-- li.current_quantity,
-- li.updated_at,
-- (li.discounted_unit_price_after_all_discounts_set -> 'shopMoney' ->> 'amount')::numeric  as unit_price,
-- o.email
--  from line_items li
--  join orders o on o.id = li.order_id
-- where li.inventory_variant_id in
-- (
--   -- Alien Stage Baby Series - Figure Blind Box
--   265785,
--   265787,
--   265788,
--   265789
-- )
-- and
-- li.updated_at >= '2024-07-08T00:00:00+09:00' and li.updated_at <= '2025-07-14T23:59:59+09:00'
-- and
-- li.current_quantity > 0
DROP FUNCTION get_lottery_order_summary();
CREATE OR REPLACE FUNCTION get_lottery_order_summary()
RETURNS TABLE (
    email text,
    total_quantity numeric,
    total_amount numeric
    -- ,
    -- first_order_time timestamptz
)
AS $$
BEGIN
    RETURN QUERY
    SELECT 
        o.email,
        SUM(li.current_quantity) AS total_quantity,
        SUM(li.current_quantity * (li.discounted_unit_price_after_all_discounts_set -> 'shopMoney' ->> 'amount')::numeric) AS total_amount
        -- ,
        -- MIN(o.created_at) AS first_order_time
    FROM line_items li
    JOIN orders o ON o.id = li.order_id
    WHERE li.product_id IN(
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
    AND li.updated_at >= '2025-08-08T12:00:00+08:00'
    AND li.updated_at <= '2025-08-14T12:00:00+08:00'
    AND li.current_quantity > 0
    GROUP BY o.email
    ORDER BY 
        total_amount DESC,
        total_quantity DESC,
        -- first_order_time ASC,
        MIN(o.created_at) ASC,
        o.email ASC
    LIMIT 20;
END;
$$ LANGUAGE plpgsql;

select * from get_lottery_order_summary()