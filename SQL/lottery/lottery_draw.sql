-- 彩票抽奖函数
-- 抽奖规则：一等奖6名、二等奖10名、三等奖20名，总共36名获奖者
-- 每个奖项一半按排名发放（前18名），一半用于抽奖（18名）
-- 实现顺延逻辑：排名用户抽到更高奖品时，原排名奖品向后顺延

DROP FUNCTION IF EXISTS lottery_draw();

CREATE OR REPLACE FUNCTION lottery_draw()
RETURNS TABLE (
    email text,
    prize_level integer,
    prize_type text,
    original_rank integer,
    final_rank integer,
    is_deferred boolean
) AS $$
DECLARE
    current_winner_count INTEGER;
    needed_supplements INTEGER;
BEGIN
    -- 第一步：创建用户排名表
    DROP TABLE IF EXISTS temp_user_ranking;
    CREATE TEMP TABLE temp_user_ranking AS
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
    GROUP BY o.email;

    -- 第二步：生成抽奖结果（一等奖3名，二等奖5名，三等奖10名，共18名）
    DROP TABLE IF EXISTS temp_lottery_awards;
    CREATE TEMP TABLE temp_lottery_awards AS
    WITH 
    -- 一等奖抽奖：3名
    first_prize_lottery AS (
        SELECT tur.user_email, 1 as prize_level, 'lottery' as prize_type, tur.user_rank::integer as original_rank
        FROM temp_user_ranking tur
        ORDER BY random()
        LIMIT 3
    ),
    -- 二等奖抽奖：5名（排除已中一等奖的用户）
    second_prize_lottery AS (
        SELECT tur.user_email, 2 as prize_level, 'lottery' as prize_type, tur.user_rank::integer as original_rank
        FROM temp_user_ranking tur
        WHERE tur.user_email NOT IN (SELECT fpl.user_email FROM first_prize_lottery fpl)
        ORDER BY random()
        LIMIT 5
    ),
    -- 三等奖抽奖：10名（排除已中一、二等奖的用户）
    third_prize_lottery AS (
        SELECT tur.user_email, 3 as prize_level, 'lottery' as prize_type, tur.user_rank::integer as original_rank
        FROM temp_user_ranking tur
        WHERE tur.user_email NOT IN (
            SELECT fpl.user_email FROM first_prize_lottery fpl
            UNION ALL
            SELECT spl.user_email FROM second_prize_lottery spl
        )
        ORDER BY random()
        LIMIT 10
    )
    SELECT * FROM first_prize_lottery
    UNION ALL
    SELECT * FROM second_prize_lottery
    UNION ALL
    SELECT * FROM third_prize_lottery;

    -- 第三步：实现顺延逻辑
    -- 3.1 找出前18名中通过抽奖获得更高等级奖励的用户
    DROP TABLE IF EXISTS temp_deferred_positions;
    CREATE TEMP TABLE temp_deferred_positions AS
    WITH lottery_winners_in_top18 AS (
        SELECT 
            tla.user_email,
            tla.prize_level as lottery_prize_level,
            tur.user_rank,
            CASE 
                WHEN tur.user_rank <= 3 THEN 1   -- 原本的排名奖励等级
                WHEN tur.user_rank <= 8 THEN 2
                WHEN tur.user_rank <= 18 THEN 3
            END as original_ranking_prize_level
        FROM temp_lottery_awards tla
        JOIN temp_user_ranking tur ON tla.user_email = tur.user_email
        WHERE tur.user_rank <= 18
        AND tla.prize_level < CASE 
            WHEN tur.user_rank <= 3 THEN 1
            WHEN tur.user_rank <= 8 THEN 2
            WHEN tur.user_rank <= 18 THEN 3
        END  -- 只有抽奖奖励更好时才需要顺延
    )
    SELECT 
        user_rank,
        original_ranking_prize_level as deferred_prize_level
    FROM lottery_winners_in_top18;
    
    -- 3.2 创建顺延后的排名奖励分配表
    DROP TABLE IF EXISTS temp_ranking_awards_with_deferral;
    CREATE TEMP TABLE temp_ranking_awards_with_deferral AS
    WITH 
    -- 计算每个奖励等级需要顺延的位置数量
    deferral_counts AS (
        SELECT 
            deferred_prize_level,
            COUNT(*) as deferred_count
        FROM temp_deferred_positions
        GROUP BY deferred_prize_level
    ),
    -- 重新分配排名奖励，考虑顺延
    ranking_allocation AS (
        SELECT 
            tur.user_email,
            tur.user_rank,
            CASE 
                -- 一等奖分配（前3名，加上顺延）
                WHEN tur.user_rank <= 3 + COALESCE((SELECT deferred_count FROM deferral_counts WHERE deferred_prize_level = 1), 0)
                AND tur.user_rank NOT IN (SELECT user_rank FROM temp_deferred_positions WHERE deferred_prize_level = 1)
                THEN 1
                
                -- 二等奖分配（4-8名，加上一等奖顺延，减去二等奖顺延）
                WHEN tur.user_rank > 3 + COALESCE((SELECT deferred_count FROM deferral_counts WHERE deferred_prize_level = 1), 0)
                AND tur.user_rank <= 8 + COALESCE((SELECT deferred_count FROM deferral_counts WHERE deferred_prize_level = 1), 0) + COALESCE((SELECT deferred_count FROM deferral_counts WHERE deferred_prize_level = 2), 0)
                AND tur.user_rank NOT IN (SELECT user_rank FROM temp_deferred_positions WHERE deferred_prize_level = 2)
                THEN 2
                
                -- 三等奖分配（剩余位置）
                WHEN tur.user_rank > 8 + COALESCE((SELECT deferred_count FROM deferral_counts WHERE deferred_prize_level = 1), 0) + COALESCE((SELECT deferred_count FROM deferral_counts WHERE deferred_prize_level = 2), 0)
                AND tur.user_rank <= 18 + COALESCE((SELECT deferred_count FROM deferral_counts WHERE deferred_prize_level = 1), 0) + COALESCE((SELECT deferred_count FROM deferral_counts WHERE deferred_prize_level = 2), 0) + COALESCE((SELECT deferred_count FROM deferral_counts WHERE deferred_prize_level = 3), 0)
                AND tur.user_rank NOT IN (SELECT user_rank FROM temp_deferred_positions WHERE deferred_prize_level = 3)
                THEN 3
                
                ELSE NULL
            END as prize_level,
            -- 判断是否为顺延获奖
            CASE 
                WHEN tur.user_rank > 18 THEN true
                ELSE false
            END as is_deferred
        FROM temp_user_ranking tur
        WHERE tur.user_rank <= 18 + COALESCE((SELECT SUM(deferred_count) FROM deferral_counts), 0)
    )
    SELECT 
        ra.user_email,
        ra.prize_level,
        'ranking' as prize_type,
        ra.user_rank as original_rank,
        ra.user_rank as final_rank,
        ra.is_deferred
    FROM ranking_allocation ra
    WHERE ra.prize_level IS NOT NULL;

    -- 第四步：合并所有获奖者，确保无重复且总共36名
    DROP TABLE IF EXISTS temp_final_awards;
    CREATE TEMP TABLE temp_final_awards AS
    WITH all_winners AS (
        -- 1. 顺延后的排名奖励
        SELECT 
            trawd.user_email,
            trawd.prize_level,
            trawd.prize_type,
            trawd.original_rank,
            trawd.final_rank,
            trawd.is_deferred,
            1 as priority  -- 排名奖励优先级最高
        FROM temp_ranking_awards_with_deferral trawd
        
        UNION ALL
        
        -- 2. 抽奖获奖者（18名）
        SELECT 
            tla.user_email,
            tla.prize_level,
            tla.prize_type,
            tla.original_rank,
            NULL as final_rank,
            false as is_deferred,
            2 as priority  -- 抽奖奖励优先级较低
        FROM temp_lottery_awards tla
    ),
    deduplicated_winners AS (
        -- 去重：同一用户如果既有排名奖励又有抽奖奖励，选择更好的奖励
        SELECT 
            aw.user_email,
            MIN(aw.prize_level) as prize_level,  -- 选择更好的奖励（数字越小越好）
            CASE 
                -- 如果最好的奖励来自抽奖，显示抽奖类型
                WHEN EXISTS (
                    SELECT 1 FROM all_winners aw2 
                    WHERE aw2.user_email = aw.user_email 
                    AND aw2.prize_level = MIN(aw.prize_level)
                    AND aw2.priority = 2  -- 抽奖奖励
                ) THEN 'lottery'
                ELSE 'ranking'
            END as prize_type,
            MIN(aw.original_rank) as original_rank,
            CASE 
                -- 如果显示的是排名奖励，才显示final_rank
                WHEN NOT EXISTS (
                    SELECT 1 FROM all_winners aw2 
                    WHERE aw2.user_email = aw.user_email 
                    AND aw2.prize_level = MIN(aw.prize_level)
                    AND aw2.priority = 2  -- 抽奖奖励
                ) THEN (
                    SELECT aw3.final_rank FROM all_winners aw3
                    WHERE aw3.user_email = aw.user_email 
                    AND aw3.prize_level = MIN(aw.prize_level)
                    AND aw3.priority = 1  -- 排名奖励
                    LIMIT 1
                )
                ELSE NULL
            END as final_rank,
            CASE 
                -- 如果显示的是排名奖励，使用排名奖励的is_deferred值
                WHEN NOT EXISTS (
                    SELECT 1 FROM all_winners aw2 
                    WHERE aw2.user_email = aw.user_email 
                    AND aw2.prize_level = MIN(aw.prize_level)
                    AND aw2.priority = 2  -- 抽奖奖励
                ) THEN (
                    SELECT aw3.is_deferred FROM all_winners aw3
                    WHERE aw3.user_email = aw.user_email 
                    AND aw3.prize_level = MIN(aw.prize_level)
                    AND aw3.priority = 1  -- 排名奖励
                    LIMIT 1
                )
                ELSE false  -- 抽奖奖励不存在顺延
            END as is_deferred
        FROM all_winners aw
        GROUP BY aw.user_email
    )
    SELECT * FROM deduplicated_winners;

    -- 第五步：自动补充机制 - 当获奖人数不足36时，按比例补充各等级奖项
    -- 计算当前获奖者数量
    SELECT COUNT(*) INTO current_winner_count FROM temp_final_awards;
    
    -- 如果获奖者数量不足36，进行补充
    IF current_winner_count < 36 THEN
        needed_supplements := 36 - current_winner_count;
        
        -- 计算各等级当前获奖者数量
         CREATE TEMP TABLE temp_current_counts AS
         SELECT 
             tfa.prize_level,
             COUNT(*) as current_count
         FROM temp_final_awards tfa
         GROUP BY tfa.prize_level;
        
        -- 定义各等级的目标数量（总共36个奖项）
        CREATE TEMP TABLE temp_target_counts AS
        SELECT 1 as prize_level, 6 as target_count  -- 一等奖：3个排名 + 3个抽奖
        UNION ALL
        SELECT 2 as prize_level, 10 as target_count -- 二等奖：5个排名 + 5个抽奖
        UNION ALL
        SELECT 3 as prize_level, 20 as target_count; -- 三等奖：10个排名 + 10个抽奖
        
        -- 计算各等级需要补充的数量
         CREATE TEMP TABLE temp_supplement_needed AS
         SELECT 
             tc.prize_level,
             GREATEST(0, tc.target_count - COALESCE(cc.current_count, 0)) as needed_count
         FROM temp_target_counts tc
         LEFT JOIN temp_current_counts cc ON tc.prize_level = cc.prize_level;
        
        -- 按等级优先级补充（优先补充高等级奖项）
        -- 补充一等奖
        INSERT INTO temp_final_awards (
            user_email, prize_level, prize_type, original_rank, final_rank, is_deferred
        )
        SELECT 
            tur.user_email,
            1 as prize_level,
            'lottery' as prize_type,
            tur.user_rank as original_rank,
            NULL as final_rank,
            false as is_deferred
        FROM temp_user_ranking tur
        WHERE tur.user_email NOT IN (
            SELECT tfa.user_email FROM temp_final_awards tfa
        )
        ORDER BY tur.user_rank ASC
        LIMIT (SELECT LEAST(needed_supplements, tsn.needed_count) FROM temp_supplement_needed tsn WHERE tsn.prize_level = 1);
        
        -- 重新计算剩余需要补充的数量
         SELECT COUNT(*) INTO current_winner_count FROM temp_final_awards;
         needed_supplements := 36 - current_winner_count;
        
        -- 补充二等奖（如果还需要补充）
        IF needed_supplements > 0 THEN
            INSERT INTO temp_final_awards (
                user_email, prize_level, prize_type, original_rank, final_rank, is_deferred
            )
            SELECT 
                tur.user_email,
                2 as prize_level,
                'lottery' as prize_type,
                tur.user_rank as original_rank,
                NULL as final_rank,
                false as is_deferred
            FROM temp_user_ranking tur
            WHERE tur.user_email NOT IN (
                SELECT tfa.user_email FROM temp_final_awards tfa
            )
            ORDER BY tur.user_rank ASC
            LIMIT LEAST(needed_supplements, (SELECT tsn.needed_count FROM temp_supplement_needed tsn WHERE tsn.prize_level = 2));
        END IF;
        
        -- 重新计算剩余需要补充的数量
        SELECT COUNT(*) INTO current_winner_count FROM temp_final_awards;
        needed_supplements := 36 - current_winner_count;
        
        -- 补充三等奖（如果还需要补充）
        IF needed_supplements > 0 THEN
            INSERT INTO temp_final_awards (
                user_email, prize_level, prize_type, original_rank, final_rank, is_deferred
            )
            SELECT 
                tur.user_email,
                3 as prize_level,
                'lottery' as prize_type,
                tur.user_rank as original_rank,
                NULL as final_rank,
                false as is_deferred
            FROM temp_user_ranking tur
            WHERE tur.user_email NOT IN (
                SELECT tfa.user_email FROM temp_final_awards tfa
            )
            ORDER BY tur.user_rank ASC
            LIMIT needed_supplements;
        END IF;
        
        -- 清理临时表
        DROP TABLE IF EXISTS temp_current_counts;
        DROP TABLE IF EXISTS temp_target_counts;
        DROP TABLE IF EXISTS temp_supplement_needed;
    END IF;

    -- 返回最终结果
    RETURN QUERY
    SELECT 
        tfa.user_email as email,
        tfa.prize_level,
        tfa.prize_type,
        tfa.original_rank,
        tfa.final_rank,
        tfa.is_deferred
    FROM temp_final_awards tfa
    ORDER BY 
        tfa.prize_level ASC,
        CASE WHEN tfa.prize_type = 'ranking' THEN COALESCE(tfa.final_rank, tfa.original_rank, 999) ELSE 999 END ASC,
        tfa.original_rank ASC;

    -- 清理临时表
    DROP TABLE IF EXISTS temp_user_ranking;
    DROP TABLE IF EXISTS temp_lottery_awards;
    DROP TABLE IF EXISTS temp_deferred_positions;
    DROP TABLE IF EXISTS temp_ranking_awards_with_deferral;
    DROP TABLE IF EXISTS temp_final_awards;
END;
$$ LANGUAGE plpgsql;

-- 使用示例和查询
-- SELECT * FROM lottery_draw();

-- 验证获奖者数量（应该正好36名且无重复）
-- SELECT COUNT(*) as total_winners, COUNT(DISTINCT email) as unique_winners FROM lottery_draw();

-- 按奖项等级统计获奖人数
-- SELECT prize_level, prize_type, COUNT(*) as count FROM lottery_draw() GROUP BY prize_level, prize_type ORDER BY prize_level, prize_type;

-- 查看详细获奖结果
SELECT 
    email,
    CASE prize_level 
        WHEN 1 THEN '🥇 一等奖'
        WHEN 2 THEN '🥈 二等奖'
        WHEN 3 THEN '🥉 三等奖'
    END as prize_name,
    CASE prize_type 
        WHEN 'ranking' THEN '🏆 排名奖励'
        WHEN 'lottery' THEN '🎲 抽奖奖励'
    END as award_type,
    original_rank as 原始排名,
    final_rank as 最终排名,
    CASE WHEN is_deferred THEN '✅ 是' ELSE '❌ 否' END as 是否顺延
FROM lottery_draw()
ORDER BY 
    prize_level ASC,
    CASE WHEN prize_type = 'ranking' THEN COALESCE(final_rank, 999) ELSE 999 END ASC,
    original_rank ASC;

-- 查看详细抽奖结果-脱敏版
-- View detailed prize results (email masked, English text)
SELECT 
    -- Mask email: show first letter, then ***
    regexp_replace(email, '^(.{3}).*(@.*)$', '\1***\2') AS email,
    -- Prize name in English
    CASE prize_level 
        WHEN 1 THEN '🥇 First Prize'
        WHEN 2 THEN '🥈 Second Prize'
        WHEN 3 THEN '🥉 Third Prize'
    END AS prize_name,
    -- Award type in English
    CASE prize_type 
        WHEN 'ranking' THEN '🏆 Ranking Award'
        WHEN 'lottery' THEN '🎲 Lottery Award'
    END AS award_type,
    -- Keep original field names in English
    original_rank AS ranking,
    -- final_rank AS final_rank,
    -- Deferred flag in English
    CASE WHEN is_deferred THEN '✅ Yes' ELSE '❌ No' END AS is_deferred
FROM lottery_draw()
ORDER BY 
    prize_level ASC,
    CASE WHEN prize_type = 'ranking' THEN COALESCE(final_rank, 999) ELSE 999 END ASC,
    original_rank ASC;

-- 获奖统计
/*
SELECT 
    CASE prize_level 
        WHEN 1 THEN '🥇 一等奖'
        WHEN 2 THEN '🥈 二等奖'
        WHEN 3 THEN '🥉 三等奖'
    END as prize_name,
    CASE prize_type 
        WHEN 'ranking' THEN '🏆 排名奖励'
        WHEN 'lottery' THEN '🎲 抽奖奖励'
    END as award_type,
    COUNT(*) as 获奖人数
FROM lottery_draw()
GROUP BY prize_level, prize_type
ORDER BY prize_level, prize_type;
*/

-- 顺延情况统计
/*
SELECT 
    COUNT(CASE WHEN is_deferred = true THEN 1 END) as 顺延人数,
    COUNT(CASE WHEN is_deferred = false THEN 1 END) as 正常获奖人数,
    COUNT(*) as 总获奖人数
FROM lottery_draw();
*/
