'use server'

import { supabaseAdmin as supabase } from "@/utils/supabaseAdmin";


export async function getPointsByEmail(email: string) {
    try {
        const { data, error } = await supabase.rpc('get_customer_points', {
            p_search: email,
        });

        if (error) {
            console.error("fetch getPointsByEmail failed:", error);
            throw new Error(`fetch getPointsByEmail failed: ${error.message}`);
        }

        return {
            success: true,
            data,
        }
    } catch (error) {
        console.error('getPointsByEmail failed:', error)
        return {
            success: false,
            data: [],
            error: error instanceof Error ? error.message : 'getPointsByEmail failed',
        }
    }
}