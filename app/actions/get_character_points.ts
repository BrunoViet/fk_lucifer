'use server'

import { supabaseAdmin as supabase } from "@/utils/supabaseAdmin";


export async function getCharacterPoints() {
    try {
        const { data, error } = await supabase.rpc('get_character_points_adjusted');

        if (error) {
            console.error("fetch getCharacterPoints failed:", error);
            throw new Error(`fetch getCharacterPoints failed: ${error.message}`);
        }

        return {
            success: true,
            data,
        }
    } catch (error) {
        console.error('getCharacterPoints failed:', error)
        return {
            success: false,
            data: [],
            error: error instanceof Error ? error.message : 'getCharacterPoints failed',
        }
    }
}