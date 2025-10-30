import { getCharacterPoints } from "@/app/actions/get_character_points";
import { useQuery } from "@tanstack/react-query";

/**
 * 角色积分查询 Hook
 * @returns 
 */
export const useCharacterPoints = () => {
    return useQuery({
        queryKey: ["characterPoints"],
        queryFn: async () => {
            const result = await getCharacterPoints();
            if (!result.success) {
                throw new Error(result.error || "fetch character points failed");
            }
            return result.data;
        }
    })
}