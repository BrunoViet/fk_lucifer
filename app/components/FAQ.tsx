"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * FAQ项目的数据类型定义
 */
interface FAQItem {
  /** 问题标题 */
  question: string;
  /** 问题答案 */
  answer: string;
}

/**
 * FAQ组件的属性类型定义
 */
interface FAQProps {
  /** 自定义类名 */
  faqData: FAQItem[];
  className?: string;
}

/**
 * FAQ单项组件 - 负责渲染单个问答项
 */
interface FAQItemComponentProps {
  /** FAQ项目数据 */
  item: FAQItem;
  /** 是否展开 */
  isOpen: boolean;
  /** 点击切换展开状态的回调 */
  onToggle: () => void;
}

function FAQItemComponent({ item, isOpen, onToggle }: FAQItemComponentProps) {
  return (
    <div className="border-b border-gray-600 last:border-b-0">
      {/* 问题标题区域 */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 px-6 text-left hover:bg-gray-700 transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <h3 className="text-white font-medium text-base pr-4">
          {item.question}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-gray-300 transition-transform duration-300 flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* 答案内容区域 */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-4">
          <div
            className="text-gray-200 text-sm leading-relaxed whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: item.answer }}
          />
        </div>
      </div>
    </div>
  );
}

/**
 * FAQ组件 - 可折叠的常见问题解答
 *
 * 特性：
 * - 暗色系主题设计
 * - 平滑的展开/收起动画
 * - 响应式布局适配移动端
 * - 支持键盘导航
 * - 无障碍访问支持
 */
export default function FAQ({ faqData, className = "" }: FAQProps) {
  // 管理每个FAQ项的展开状态
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  /**
   * 切换指定FAQ项的展开状态
   * @param index - FAQ项的索引
   */
  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section className={`w-full bg-black ${className}`}>
      {/* FAQ标题 */}
      <div className="px-6 py-8 text-center">
        <h2 className="text-white text-2xl font-bold mb-2">FAQ</h2>
        <p className="text-gray-400 text-sm">
          Common questions about our lottery events
        </p>
      </div>

      {/* FAQ列表 */}
      <div className="bg-gray-800 mx-4 rounded-lg overflow-hidden shadow-xl border border-gray-700">
        {faqData.map((item, index) => (
          <FAQItemComponent
            key={index}
            item={item}
            isOpen={openItems.has(index)}
            onToggle={() => toggleItem(index)}
          />
        ))}
      </div>

      {/* 底部间距 */}
      <div className="h-8"></div>
    </section>
  );
}
