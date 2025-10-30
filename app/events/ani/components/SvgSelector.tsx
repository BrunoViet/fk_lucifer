import React from "react";

export type SvgVariant = "square1" | "square2" | "square3" | "rect";

interface CustomSvgProps {
  variant: SvgVariant; // 选择哪个 SVG
  color?: string; // 控制描边颜色
  width?: string | number; // 宽高，可以是 px/%/em 等
  height?: string | number;
  className?: string; // 方便传入额外样式
}

const SvgSelector: React.FC<CustomSvgProps> = ({
  variant,
  color = "#e5a74c",
  className,
}) => {
  const commonProps = {
    className,
    width: "100%",
    height: "100%",
  };

  switch (variant) {
    case "square1":
      return (
        <svg
          {...commonProps}
          viewBox="0 0 561.11 541.88"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#glow1)">
            <path
              d="M443.81,540.88H117.3c-64.23,0-116.3-28.3-116.3-199.87v-148.22C1,32.89,47.26,1,117.3,1h326.51c83.06,0,116.3,43.57,116.3,223.23v128.46c0,157.2-52.07,188.19-116.3,188.19Z"
              fill="none"
              stroke={color}
              strokeWidth={2}
            />
          </g>
          <defs>
            <filter id="glow1" x="-12.8" y="-12.21" width="586" height="567">
              <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
              <feFlood floodColor={color} floodOpacity="1" />
              <feComposite in2="SourceAlpha" operator="in" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
        </svg>
      );

    case "square2":
      return (
        <svg
          {...commonProps}
          viewBox="0 0 519.34 532"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#glow2)">
            <path
              d="M408.45,531H110.89c-60.69,0-109.89-39.97-109.89-154.96V110.89C1,50.2,50.2,1,110.89,1h297.56c60.69,0,109.89,41.77,109.89,152.26v230.86c0,103.31-49.2,146.87-109.89,146.87Z"
              fill="none"
              stroke={color}
              strokeWidth={2}
            />
          </g>
          <defs>
            <filter id="glow2" x="-12.46" y="-12.7" width="544" height="557">
              <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
              <feFlood floodColor={color} floodOpacity="1" />
              <feComposite in2="SourceAlpha" operator="in" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
        </svg>
      );

    case "square3":
      return (
        <svg
          {...commonProps}
          viewBox="0 0 486.1 532"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#glow3)">
            <path
              d="M375.58,531H110.52c-60.49,0-109.52-49.04-109.52-109.52V110.52C1,50.04,50.04,1,110.52,1h265.05c60.49,0,109.52,39.08,109.52,154.96v221.88c0,112.29-49.04,153.16-109.52,153.16Z"
              fill="none"
              stroke={color}
              strokeWidth={2}
            />
          </g>
          <defs>
            <filter id="glow3" x="-12.42" y="-12.7" width="511" height="557">
              <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
              <feFlood floodColor={color} floodOpacity="1" />
              <feComposite in2="SourceAlpha" operator="in" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
        </svg>
      );

    case "rect":
      return (
        <svg
          {...commonProps}
          viewBox="0 0 312.63 95.16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#glow4)">
            <path
              d="M69.14,1h174.34c37.61,0,68.14,30.53,68.14,68.14v25.02H1v-25.02C1,31.53,31.53,1,69.14,1Z"
              fill="none"
              stroke={color}
              strokeWidth={2}
            />
          </g>
          <defs>
            <filter id="glow4" x="-12.03" y="-12.05" width="337" height="120">
              <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
              <feFlood floodColor={color} floodOpacity="1" />
              <feComposite in2="SourceAlpha" operator="in" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
        </svg>
      );

    default:
      return null;
  }
};

export default SvgSelector;
