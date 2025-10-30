import { getPointsByEmail } from "@/app/actions/get_points_by_email";
import { useQuery } from "@tanstack/react-query";

/**
 * 获取用户积分查询 Hook
 * @param email 用户 shopify 登录邮箱
 * @returns 
 */
export const usePointsByEmail = (email: string | null | undefined) => {
    return useQuery({
        queryKey: ["points", email],
        queryFn: async () => {
            if (!email) {
                return null;
            }
            const result = await getPointsByEmail(email);
            if (!result.success) {
                throw new Error(result.error || "fetch points failed");
            }
            return result.data;
        }
    })
}