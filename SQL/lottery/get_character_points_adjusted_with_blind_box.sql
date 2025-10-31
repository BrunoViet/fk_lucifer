-- =====================================================
-- FUNCTIONS CHO DỰ ÁN ALIEN STAGE
-- =====================================================

-- 1. GET CHARACTER POINTS FUNCTION (WITH BLIND BOX CALCULATION)
-- Returns: character_name, adjusted_net_points, earn_points, refund_points
DROP FUNCTION IF EXISTS get_character_points_adjusted();

CREATE OR REPLACE FUNCTION get_character_points_adjusted()
RETURNS TABLE (
    character_name TEXT,
    adjusted_net_points NUMERIC,
    earn_points NUMERIC,
    refund_points NUMERIC
)
AS $$
DECLARE
    total_characters INTEGER := 6; -- mizi, sua, till, ivan, hyuna, luka
BEGIN
    RETURN QUERY
    WITH line_item_calculations AS (
        -- Calculate base points for each line item
        -- Positive quantity = earn points, negative quantity = refund points
        SELECT 
            o.email,
            li.product_id,
            li.current_quantity,
            (li.discounted_unit_price_after_all_discounts_set -> 'shopMoney' ->> 'amount')::NUMERIC as unit_price,
            li.current_quantity * (li.discounted_unit_price_after_all_discounts_set -> 'shopMoney' ->> 'amount')::NUMERIC as line_total,
            -- Points = 10% of spending
            (li.current_quantity * (li.discounted_unit_price_after_all_discounts_set -> 'shopMoney' ->> 'amount')::NUMERIC * 0.1) as points,
            -- Separate earn and refund
            CASE 
                WHEN li.current_quantity > 0 THEN 
                    (li.current_quantity * (li.discounted_unit_price_after_all_discounts_set -> 'shopMoney' ->> 'amount')::NUMERIC * 0.1)
                ELSE 0
            END as earn_points,
            CASE 
                WHEN li.current_quantity < 0 THEN 
                    ABS(li.current_quantity * (li.discounted_unit_price_after_all_discounts_set -> 'shopMoney' ->> 'amount')::NUMERIC * 0.1)
                ELSE 0
            END as refund_points,
            pcm.character_name
        FROM line_items li
        JOIN orders o ON o.id = li.order_id
        LEFT JOIN product_character_mapping pcm ON pcm.product_id = li.product_id
    ),
    character_points_calculated AS (
        -- Handle character-specific products
        SELECT 
            lic.character_name,
            SUM(lic.earn_points) as earn_points,
            SUM(lic.refund_points) as refund_points
        FROM line_item_calculations lic
        WHERE lic.character_name IS NOT NULL 
          AND lic.character_name != 'all'
        GROUP BY lic.character_name

        UNION ALL

        -- Handle blind box products (character_name = 'all')
        -- Divide points equally among all 6 characters
        SELECT 
            char.name as character_name,
            SUM(lic.earn_points / total_characters) as earn_points,
            SUM(lic.refund_points / total_characters) as refund_points
        FROM line_item_calculations lic
        CROSS JOIN (
            VALUES ('mizi'), ('sua'), ('till'), ('ivan'), ('hyuna'), ('luka')
        ) AS char(name)
        WHERE lic.character_name = 'all'
        GROUP BY char.name

        UNION ALL

        -- Handle unmapped products (NULL character_name)
        -- Also divide equally among all 6 characters
        SELECT 
            char.name as character_name,
            SUM(lic.earn_points / total_characters) as earn_points,
            SUM(lic.refund_points / total_characters) as refund_points
        FROM line_item_calculations lic
        CROSS JOIN (
            VALUES ('mizi'), ('sua'), ('till'), ('ivan'), ('hyuna'), ('luka')
        ) AS char(name)
        WHERE lic.character_name IS NULL
        GROUP BY char.name
    ),
    -- Ensure all 6 characters are present
    all_characters AS (
        VALUES ('mizi'), ('sua'), ('till'), ('ivan'), ('hyuna'), ('luka')
    )
    -- Final aggregation
    SELECT 
        ac.column1 as character_name,
        COALESCE(SUM(cpc.earn_points), 0) - COALESCE(SUM(cpc.refund_points), 0) AS adjusted_net_points,
        COALESCE(SUM(cpc.earn_points), 0) AS earn_points,
        COALESCE(SUM(cpc.refund_points), 0) AS refund_points
    FROM all_characters ac
    LEFT JOIN character_points_calculated cpc ON cpc.character_name = ac.column1
    GROUP BY ac.column1
    ORDER BY adjusted_net_points DESC;
END;
$$ LANGUAGE plpgsql;

-- 2. GET POINTS BY EMAIL FUNCTION
DROP FUNCTION IF EXISTS get_points_by_email(TEXT);

CREATE OR REPLACE FUNCTION get_points_by_email(user_email TEXT)
RETURNS TABLE (
    character_name TEXT,
    current_points NUMERIC,
    total_spent NUMERIC,
    order_count INTEGER
)
AS $$
BEGIN
    RETURN QUERY
    SELECT 
        cp.character_name,
        cp.points AS current_points,
        cp.total_spent,
        cp.order_count
    FROM character_points cp
    WHERE cp.email = user_email
    ORDER BY cp.points DESC;
END;
$$ LANGUAGE plpgsql;

-- 3. GET LOTTERY ORDER SUMMARY (Simplified for demo)
DROP FUNCTION IF EXISTS get_lottery_order_summary();

CREATE OR REPLACE FUNCTION get_lottery_order_summary()
RETURNS TABLE (
    email TEXT,
    total_quantity NUMERIC,
    total_amount NUMERIC
)
AS $$
BEGIN
    RETURN QUERY
    SELECT 
        o.email,
        SUM(li.current_quantity) AS total_quantity,
        SUM(li.current_quantity * (li.discounted_unit_price_after_all_discounts_set -> 'shopMoney' ->> 'amount')::numeric) AS total_amount
    FROM line_items li
    JOIN orders o ON o.id = li.order_id
    WHERE li.current_quantity > 0
    GROUP BY o.email
    ORDER BY 
        total_amount DESC,
        total_quantity DESC,
        MIN(o.created_at) ASC,
        o.email ASC
    LIMIT 20;
END;
$$ LANGUAGE plpgsql;

-- 4. CALCULATE USER RANK FUNCTION
DROP FUNCTION IF EXISTS get_user_rank(TEXT);

CREATE OR REPLACE FUNCTION get_user_rank(user_email TEXT)
RETURNS INTEGER
AS $$
DECLARE
    user_rank INTEGER;
BEGIN
    WITH ranked_users AS (
        SELECT 
            o.email,
            ROW_NUMBER() OVER (
                ORDER BY 
                    SUM(li.current_quantity * (li.discounted_unit_price_after_all_discounts_set -> 'shopMoney' ->> 'amount')::numeric) DESC,
                    SUM(li.current_quantity) DESC,
                    MIN(o.created_at) ASC,
                    o.email ASC
            ) as rank
        FROM line_items li
        JOIN orders o ON o.id = li.order_id
        WHERE li.current_quantity > 0
        GROUP BY o.email
    )
    SELECT rank INTO user_rank
    FROM ranked_users
    WHERE email = user_email;
    
    RETURN COALESCE(user_rank, 0);
END;
$$ LANGUAGE plpgsql;

-- 5. ADD POINTS TO CHARACTER (Helper function for testing)
DROP FUNCTION IF EXISTS add_character_points(TEXT, TEXT, NUMERIC, NUMERIC);

CREATE OR REPLACE FUNCTION add_character_points(
    user_email TEXT,
    char_name TEXT,
    points_to_add NUMERIC,
    amount_spent NUMERIC
)
RETURNS VOID
AS $$
BEGIN
    INSERT INTO character_points (email, character_name, points, total_spent, order_count)
    VALUES (user_email, char_name, points_to_add, amount_spent, 1)
    ON CONFLICT (email, character_name) 
    DO UPDATE SET
        points = character_points.points + points_to_add,
        total_spent = character_points.total_spent + amount_spent,
        order_count = character_points.order_count + 1,
        updated_at = NOW();
END;
$$ LANGUAGE plpgsql;

-- 6. GET TOP SPENDERS BY CHARACTER
DROP FUNCTION IF EXISTS get_top_spenders_by_character(TEXT, INTEGER);

CREATE OR REPLACE FUNCTION get_top_spenders_by_character(
    char_name TEXT,
    limit_count INTEGER DEFAULT 10
)
RETURNS TABLE (
    email TEXT,
    points NUMERIC,
    total_spent NUMERIC,
    order_count INTEGER,
    rank INTEGER
)
AS $$
BEGIN
    RETURN QUERY
    SELECT 
        cp.email,
        cp.points,
        cp.total_spent,
        cp.order_count,
        ROW_NUMBER() OVER (ORDER BY cp.points DESC)::INTEGER as rank
    FROM character_points cp
    WHERE cp.character_name = char_name
    ORDER BY cp.points DESC
    LIMIT limit_count;
END;
$$ LANGUAGE plpgsql;

-- 7. GET OVERALL LEADERBOARD (All characters combined)
DROP FUNCTION IF EXISTS get_overall_leaderboard(INTEGER);

CREATE OR REPLACE FUNCTION get_overall_leaderboard(limit_count INTEGER DEFAULT 20)
RETURNS TABLE (
    email TEXT,
    total_points NUMERIC,
    total_spent NUMERIC,
    character_count BIGINT,
    rank INTEGER
)
AS $$
BEGIN
    RETURN QUERY
    SELECT 
        cp.email,
        SUM(cp.points) as total_points,
        SUM(cp.total_spent) as total_spent,
        COUNT(DISTINCT cp.character_name) as character_count,
        ROW_NUMBER() OVER (ORDER BY SUM(cp.points) DESC)::INTEGER as rank
    FROM character_points cp
    GROUP BY cp.email
    ORDER BY total_points DESC
    LIMIT limit_count;
END;
$$ LANGUAGE plpgsql;

-- =====================================================
-- TEST QUERIES
-- =====================================================

-- Test get_character_points_adjusted
-- SELECT * FROM get_character_points_adjusted();

-- Test get_points_by_email
-- SELECT * FROM get_points_by_email('user1@example.com');

-- Test get_lottery_order_summary
-- SELECT * FROM get_lottery_order_summary();

-- Test get_user_rank
-- SELECT get_user_rank('user1@example.com') as user_rank;

-- Test get_top_spenders_by_character
-- SELECT * FROM get_top_spenders_by_character('mizi', 5);

-- Test get_overall_leaderboard
-- SELECT * FROM get_overall_leaderboard(10);

