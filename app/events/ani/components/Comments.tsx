import { BarrageContainer } from "@/app/components/Barrage";
import { useSocialComments } from "@/hooks/query/useSocialComments";
import { Loader } from "lucide-react";

export default function Comments() {
  const { data, isLoading, error } = useSocialComments("ani");
  if (isLoading) {
    return (
      <div className="w-full h-60 text-center flex justify-center items-center font-bold">
        <Loader className="animate-spin" />
      </div>
    );
  }
  if (error) {
    return (
      <div className="w-full h-60 text-center flex justify-center items-center font-bold text-red-500">
        Error: {error.message}
      </div>
    );
  }
  if (!data || data.length === 0) {
    return (
      <div className="w-full h-60 text-center flex justify-center items-center font-bold text-gray-500">
        No comments available.
      </div>
    );
  }
  return (
    <BarrageContainer
      messages={data.map(
        (item) => `@${(item.author as { name: string }).name}: ${item.text}`
      )}
      rows={4}
      opacity={0.9}
      fontSize={16}
      className="w-full h-60"
    />
  );
}
