import { getCharacterPoints } from "@/app/actions/get_character_points";
import { useQuery } from "@tanstack/react-query";

/**
 * Character Points Query Hook
 * Auto-refreshes every 30 seconds to keep progress bar updated
 * 
 * @param options.enabled - Enable/disable query (default: true)
 * @param options.refetchInterval - Interval in ms (default: 30000 = 30s)
 * @returns Character points data with auto-refresh
 */
export const useCharacterPoints = (options?: {
    enabled?: boolean;
    refetchInterval?: number;
}) => {
    return useQuery({
        queryKey: ["characterPoints"],
        queryFn: async () => {
            const result = await getCharacterPoints();
            if (!result.success) {
                throw new Error(result.error || "fetch character points failed");
            }
            return result.data;
        },
        
        // ✨ AUTO-REFRESH: Poll every 30 seconds
        refetchInterval: options?.refetchInterval ?? 30000, // 30 seconds
        
        // Keep refreshing even when window is not focused
        refetchIntervalInBackground: true,
        
        // Cache time: 5 minutes (data considered fresh)
        staleTime: 5 * 60 * 1000,
        
        // Garbage collection time: 10 minutes
        gcTime: 10 * 60 * 1000,
        
        // Refetch on window focus for immediate updates
        refetchOnWindowFocus: true,
        
        // Refetch on reconnect
        refetchOnReconnect: true,
        
        // Refetch on mount if data is stale
        refetchOnMount: true,
        
        // Retry on failure (max 2 times)
        retry: 2,
        retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
        
        // Enable/disable query
        enabled: options?.enabled ?? true,
    });
};