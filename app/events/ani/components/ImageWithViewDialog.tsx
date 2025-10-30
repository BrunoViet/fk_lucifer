import { useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ImageWithViewDialog = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={100}
        height={100}
        quality={100}
        priority={true}
        onClick={() => setIsOpen(true)}
        className={cn("w-full h-full object-cover cursor-pointer", className)}
      />

      {/* 使用 Portal 将模态框渲染到 body */}
      {isOpen &&
        createPortal(
          <div
            className="fixed inset-0 bg-black/65 flex items-center justify-center z-150"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
          >
            <div className="relative w-[90vw] h-[90vh] flex items-center justify-center">
              {/* 放大的图片 */}
              <div className="relative w-full h-full">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-contain w-full cursor-pointer"
                  quality={100}
                  priority={true}
                />
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default ImageWithViewDialog;
