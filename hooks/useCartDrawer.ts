"use client";
import { useState, useCallback, useRef } from "react";

/**
 * 购物车抽屉状态管理hook
 * 用于控制购物车抽屉的显示和隐藏，并保持页面滚动位置
 */
export const useCartDrawer = () => {
  // 抽屉是否打开的状态
  const [isOpen, setIsOpen] = useState(false);
  // 保存滚动位置的引用
  const scrollPositionRef = useRef<number>(0);

  // 保存当前滚动位置
  const saveScrollPosition = useCallback(() => {
    // 优先获取MobileFrame内的滚动位置
    const mobileFrame = document.querySelector('.overflow-y-auto');
    if (mobileFrame) {
      scrollPositionRef.current = mobileFrame.scrollTop;
    } else {
      // 备用：获取window滚动位置
      scrollPositionRef.current = window.pageYOffset || document.documentElement.scrollTop;
    }
  }, []);

  // 恢复滚动位置
  const restoreScrollPosition = useCallback(() => {
    // 使用requestAnimationFrame确保DOM更新完成后再恢复滚动位置
    requestAnimationFrame(() => {
      const mobileFrame = document.querySelector('.overflow-y-auto');
      if (mobileFrame) {
        mobileFrame.scrollTop = scrollPositionRef.current;
      } else {
        // 备用：恢复window滚动位置
        window.scrollTo(0, scrollPositionRef.current);
      }
    });
  }, []);

  // 打开抽屉
  const openDrawer = useCallback(() => {
    saveScrollPosition();
    setIsOpen(true);
  }, [saveScrollPosition]);

  // 关闭抽屉
  const closeDrawer = useCallback(() => {
    setIsOpen(false);
    // 延迟恢复滚动位置，等待抽屉关闭动画完成
    setTimeout(() => {
      restoreScrollPosition();
    }, 300);
  }, [restoreScrollPosition]);

  // 切换抽屉状态
  const toggleDrawer = useCallback(() => {
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  }, [isOpen, openDrawer, closeDrawer]);

  return {
    isOpen,
    openDrawer,
    closeDrawer,
    toggleDrawer,
  };
};