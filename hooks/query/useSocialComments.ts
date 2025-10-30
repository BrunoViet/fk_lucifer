import { EventStr, getSocialComments } from "@/app/actions/get_social_comments";
import { useQuery } from "@tanstack/react-query";

/**
 * 社交评论查询 Hook
 * @param eventStr 活动标识字符串
 * @returns 评论
 */
export const useSocialComments = (eventStr: EventStr) => {
    return useQuery({
        queryKey: ["socialComments", eventStr],
        queryFn: async () => {
            const result = await getSocialComments(eventStr);
            if (!result.success) {
                throw new Error(result.error || "fetch social comments failed");
            }
            return result.data;
        }
    })
}