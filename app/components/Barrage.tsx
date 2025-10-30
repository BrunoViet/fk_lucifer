"use client";
import { cn } from "@/lib/utils";
import React, { useRef, useEffect, useState } from "react";

/**
 * 弹幕项接口
 */
interface BarrageItem {
  /** 弹幕文本内容 */
  text: string;
  /** 弹幕唯一标识 */
  id: string;
  /** 弹幕所在行 */
  row: number;
  /** 弹幕左侧位置 */
  left: number;
  /** 弹幕速度 */
  speed: number;
  /** 弹幕颜色 */
  color?: string;
  /** 弹幕字体大小 */
  fontSize?: number;
}

/**
 * 弹幕组件属性接口
 */
interface BarrageProps {
  /** 弹幕文本数组 */
  messages: string[];
  /** 弹幕行数，默认为3 */
  rows?: number;
  /** 弹幕速度范围，默认为[30, 60] */
  speedRange?: [number, number];
  /** 弹幕发送间隔（毫秒），默认为2000 */
  interval?: number;
  /** 弹幕字体大小，默认为14 */
  fontSize?: number;
  /** 弹幕颜色数组，随机选择 */
  colors?: string[];
  /** 是否暂停弹幕，默认为false */
  paused?: boolean;
  /** 弹幕透明度，默认为0.8 */
  opacity?: number;
}

/**
 * 简化的弹幕组件
 */
export default function Barrage({
  messages,
  rows = 3,
  fontSize = 14,
  opacity = 0.8,
}: BarrageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [shuffledMessages, setShuffledMessages] = useState<string[]>([]);
  const [mxClassMap, setMxClassMap] = useState<Map<string, string>>(new Map());

  useEffect(() => {
    // 确保在客户端渲染
    setIsClient(true);
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);

      // 只在客户端进行一次随机化
      const shuffled = [...messages].sort(() => Math.random() - 0.5);
      setShuffledMessages(shuffled);

      // 为每个消息预先生成随机的mx类
      const mxClasses = [
        "mx-1",
        "mx-2",
        "mx-3",
        "mx-4",
        "mx-5",
        "mx-6",
        "mx-7",
        "mx-8",
        "mx-9",
        "mx-10",
      ];
      const classMap = new Map<string, string>();
      messages.forEach((msg, index) => {
        const randomClass =
          mxClasses[Math.floor(Math.random() * mxClasses.length)];
        classMap.set(`${msg}-${index}`, randomClass);
      });
      setMxClassMap(classMap);
    }
  }, []);

  // 估算单个弹幕的宽度
  const estimateTextWidth = (text: string) => {
    // 估算文本宽度：中文字符约16px，英文字符约8px，加上padding
    return text.split("").reduce((width, char) => {
      return width + (/[\u4e00-\u9fa5]/.test(char) ? 16 : 8);
    }, 32); // 32px for padding
  };

  // 计算每个弹幕的动画时间，基于固定的像素速度（100px/s）
  const calculateAnimationDuration = (text: string) => {
    const estimatedWidth = estimateTextWidth(text);
    // 总移动距离 = 容器宽度 + 文本宽度
    const totalDistance = containerWidth + estimatedWidth;
    // 固定速度：100像素/秒
    const speed = 100;
    return Math.max(totalDistance / speed, 3); // 最少3秒
  };

  // 优化的弹幕分组算法：按长度平均分配到各行
  const distributeMessagesToRows = (messages: string[], rowCount: number) => {
    // 初始化每行的数据
    const rowsData: { messages: string[]; totalWidth: number }[] = Array.from(
      { length: rowCount },
      () => ({ messages: [], totalWidth: 0 })
    );

    // 使用预先随机化的消息列表
    const messagesToUse = isClient ? shuffledMessages : messages;
    const processedMessages = messagesToUse.map((msg) => ({
      text: msg,
      width: estimateTextWidth(msg),
    }));

    // 贪心算法：每次将弹幕分配给当前总宽度最小的行，保持各行长度平衡
    processedMessages.forEach(({ text, width }) => {
      // 找到总宽度最小的行
      const minRow = rowsData.reduce((min, current, index) => {
        return current.totalWidth < rowsData[min].totalWidth ? index : min;
      }, 0);

      // 将弹幕分配到该行
      rowsData[minRow].messages.push(text);
      rowsData[minRow].totalWidth += width + 16; // 加上间隔宽度
    });

    return rowsData;
  };

  // 计算每行的高度
  const rowHeight = 40;

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden w-full h-full mt-4`}
    >
      <style jsx>{`
        @keyframes scrollRight {
          0% {
            transform: translateX(500px);
            opacity: 0;
          }
          1% {
            opacity: ${opacity};
          }
          100% {
            transform: translateX(-100%);
            opacity: ${opacity};
          }
        }
      `}</style>

      {/* 按行分组显示弹幕 */}
      {(() => {
        const distributedRows = distributeMessagesToRows(messages, rows);
        return distributedRows.map((rowData, rowIndex) => {
          const { messages: rowMessages } = rowData;
          const animationDuration = calculateAnimationDuration(
            rowMessages.join(" ")
          );
          return (
            <div
              key={`row-${rowIndex}`}
              className={`absolute w-fit h-fit overflow-hidden opacity-0 flex items-center gap-2`}
              style={{
                top: `${(rowIndex + 1) * rowHeight + 10}px`,
                height: `${rowHeight - 10}px`,
                transform: "translateX(100%)",
                animation: `scrollRight ${animationDuration}s linear infinite both`,
              }}
            >
              {/* 当前行的所有弹幕 */}
              {rowMessages.map((msg, msgIndex) => {
                // 使用预先生成的mx类名
                const messageKey = `${msg}-${messages.indexOf(msg)}`;
                const selectedMXClass = mxClassMap.get(messageKey) || "mx-2";
                return (
                  <div
                    key={`${rowIndex}-${msgIndex}-${msg}`}
                    className={cn(
                      "whitespace-nowrap pointer-events-none select-none w-fit",
                      selectedMXClass
                    )}
                    style={{
                      color: "#ffffff",
                      fontSize: `${fontSize}px`,
                      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
                      fontWeight: "500",
                      backgroundColor: "rgba(255, 255, 255, 0.25)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "20px",
                      padding: "1px 16px",
                    }}
                  >
                    {msg}
                  </div>
                );
              })}
            </div>
          );
        });
      })()}
    </div>
  );
}

/**
 * 弹幕容器组件
 */
interface BarrageContainerProps extends BarrageProps {
  className?: string;
}

export function BarrageContainer({
  className = "",
  ...barrageProps
}: BarrageContainerProps) {
  return (
    <div className={cn("pointer-events-none", className)}>
      <Barrage {...barrageProps} />
    </div>
  );
}
