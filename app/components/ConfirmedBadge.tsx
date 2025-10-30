import { useEffect, useState } from "react";

export const ConfirmedBadge = ({ 
  className = "", 
  defaultExpanded = false 
}: { 
  className?: string;
  defaultExpanded?: boolean;
}) => {
  // 徽标展开状态管理
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  // 切换徽标展开状态（仅在非默认展开时允许）
  const toggleExpanded = () => {
    if (!defaultExpanded) {
      setIsExpanded(!isExpanded);
    }
  };

  // 自动缩小功能：展开后 2 秒自动收起（仅在非默认展开时生效）
  useEffect(() => {
    if (isExpanded && !defaultExpanded) {
      const timer = setTimeout(() => {
        setIsExpanded(false);
      }, 2000);

      // 清理定时器
      return () => clearTimeout(timer);
    }
  }, [isExpanded, defaultExpanded]);
  return (
    <div className={className}>
      {/* 发光波纹特效 */}
      <div className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping"></div>
      <div className="absolute inset-0 rounded-full bg-green-400 opacity-50 animate-pulse"></div>

      {/* 主徽标 */}
      <div
        className={`relative bg-green-500 text-white font-bold whitespace-nowrap shadow-lg border border-white transition-all duration-300 ${
          defaultExpanded 
            ? "" 
            : "cursor-pointer hover:bg-green-400 hover:scale-110"
        } ${
          isExpanded
            ? "text-[0.4rem] px-2 py-1 rounded-lg"
            : "text-[0.5rem] px-1 py-0.5 rounded-full"
        }`}
        onClick={toggleExpanded}
        title={
          defaultExpanded 
            ? "Permanently expanded" 
            : (isExpanded ? "Click to collapse" : "Click to expand")
        }
        style={{
          boxShadow:
            "0 0 20px rgba(34, 197, 94, 0.6), 0 0 40px rgba(34, 197, 94, 0.4), 0 0 60px rgba(34, 197, 94, 0.2)",
        }}
      >
        {isExpanded ? "CONFIRMED SIGNED PRIZE" : "✓"}
      </div>
    </div>
  );
};
