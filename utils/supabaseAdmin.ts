import "server-only";

import { createClient } from "@supabase/supabase-js";
import { Database } from "./database.types";

export const supabaseAdmin = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
        auth: {
            autoRefreshToken: true,
            persistSession: true,
        },
    },
);

export const supabaseVaultAdmin = supabaseAdmin;
