'use server'

import { supabaseAdmin as supabase } from "@/utils/supabaseAdmin";

const EVENTS_POST_IDS = {
    'ani': ['1953098868264243338'],
    'other': []
}

export type EventStr = keyof typeof EVENTS_POST_IDS;

export async function getSocialComments(eventStr: EventStr) {
    try {
        const eventPostIds = EVENTS_POST_IDS[eventStr];
        const { data, error } = await supabase.from('social_comments').select('*')
            .in('original_post_id', eventPostIds)
            .is('approved', true)
            .not('text', 'is', null)
            .neq('text', "")

        if (error) {
            console.error("fetch getSocialComments failed:", error);
            throw new Error(`fetch getSocialComments failed: ${error.message}`);
        }

        return {
            success: true,
            data,
        }
    } catch (error) {
        console.error('get lottery order summary failed:', error)
        return {
            success: false,
            data: [],
            error: error instanceof Error ? error.message : 'getSocialComments failed',
        }
    }
}