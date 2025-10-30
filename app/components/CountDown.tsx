import { useMemo, useState, useEffect } from "react";
import { useEventStatus } from "../../hooks/useEventStatus";
import { cn } from "@/lib/utils";

export default function CountDown({
  className = "absolute inset-0 w-full text-center flex justify-center items-center pb-10",
}: {
  className?: string;
}) {
  // 使用自定义 hook 获取活动状态
  const { timeUntilStart } = useEventStatus();

  // 用于避免水合错误的状态
  const [isClient, setIsClient] = useState(false);

  // 确保只在客户端渲染动态内容
  useEffect(() => {
    setIsClient(true);
  }, []);

  // 计算倒计时显示格式
  const timeDisplay = useMemo(() => {
    if (!isClient) {
      // 服务端渲染时返回默认值
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(timeUntilStart / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeUntilStart % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeUntilStart % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeUntilStart % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }, [timeUntilStart, isClient]);

  return (
    <div className={cn(className)}>
      <div className="flex gap-4">
        {/* 天数 */}
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold text-white bg-black/50 px-3 py-2 rounded-lg">
            {String(timeDisplay.days).padStart(2, "0")}
          </span>
          <span className="text-sm font-medium text-gray-700 mt-1">D</span>
        </div>

        {/* 小时 */}
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold text-white bg-black/50 px-3 py-2 rounded-lg">
            {String(timeDisplay.hours).padStart(2, "0")}
          </span>
          <span className="text-sm font-medium text-gray-700 mt-1">H</span>
        </div>

        {/* 分钟 */}
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold text-white bg-black/50 px-3 py-2 rounded-lg">
            {String(timeDisplay.minutes).padStart(2, "0")}
          </span>
          <span className="text-sm font-medium text-gray-700 mt-1">M</span>
        </div>

        {/* 秒数 */}
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold text-white bg-black/50 px-3 py-2 rounded-lg">
            {String(timeDisplay.seconds).padStart(2, "0")}
          </span>
          <span className="text-sm font-medium text-gray-700 mt-1">S</span>
        </div>
      </div>
    </div>
  );
}
