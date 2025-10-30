import React, { forwardRef, useImperativeHandle } from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import "./index.css";
import { cn } from "@/lib/utils";

type PropType = {
  children: React.ReactNode;
  options?: EmblaOptionsType;
  showArrows?: boolean;
  showDots?: boolean;
  onSlideChange?: (index: number) => void;
  className?: string;
};

type SlideProps = {
  children: React.ReactNode;
  className?: string;
};

// 暴露给父组件的方法接口
export interface CarouselRef {
  goToPrev: () => void;
  goToNext: () => void;
  goToSlide: (index: number) => void;
  getCurrentIndex: () => number;
  canScrollPrev: () => boolean;
  canScrollNext: () => boolean;
}

const Slide: React.FC<SlideProps> = ({ children, className }) => {
  return (
    <div className={`embla__slide w-full ${className || ""}`}>{children}</div>
  );
};

const Carousel = forwardRef<CarouselRef, PropType>((props, ref) => {
  const {
    children,
    options,
    showArrows = false,
    showDots = false,
    onSlideChange,
    className,
  } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  // 监听幻灯片变化
  React.useEffect(() => {
    if (emblaApi && onSlideChange) {
      emblaApi.on("select", () => {
        onSlideChange(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi, onSlideChange]);

  // 使用 useImperativeHandle 暴露方法给父组件
  useImperativeHandle(
    ref,
    () => ({
      goToPrev: onPrevButtonClick,
      goToNext: onNextButtonClick,
      goToSlide: (index: number) => onDotButtonClick(index),
      getCurrentIndex: () => selectedIndex,
      canScrollPrev: () => !prevBtnDisabled,
      canScrollNext: () => !nextBtnDisabled,
    }),
    [
      onPrevButtonClick,
      onNextButtonClick,
      onDotButtonClick,
      selectedIndex,
      prevBtnDisabled,
      nextBtnDisabled,
    ]
  );

  return (
    <section className={cn("embla", className)}>
      <div className={cn("embla__viewport", className)} ref={emblaRef}>
        <div className={cn("embla__container w-full", className)}>
          {children}
        </div>
      </div>

      {/* 可选的箭头按钮 */}
      {showArrows && (
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      )}

      {/* 可选的点状指示器 */}
      {showDots && (
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      )}
    </section>
  );
});

// 设置显示名称
Carousel.displayName = "Carousel";

// 类型断言和附加 Slide 组件
const CarouselWithSlide = Carousel as React.ForwardRefExoticComponent<
  PropType & React.RefAttributes<CarouselRef>
> & {
  Slide: typeof Slide;
};

// 将 Slide 组件附加到 Carousel 上
CarouselWithSlide.Slide = Slide;

export default CarouselWithSlide;
