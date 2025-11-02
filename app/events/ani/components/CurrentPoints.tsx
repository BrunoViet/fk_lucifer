"use client";
import Image from "next/image";
import { Loader } from "lucide-react";
import { useCustomer } from "@/hooks/useCustomer";
import { usePointsByEmail } from "@/hooks/query/usePointsByEmail";
import { formatThousand } from "@/lib/utils";

export default function CurrentPoints() {
  const { customer } = useCustomer();
  const { data, isLoading } = usePointsByEmail(customer?.emailAddress);

  return (
    <div className="w-full flex justify-center items-center mb-12 md:mb-16">
      <div className="relative scale-125 md:scale-150">
        <Image
          src="/images/ani/points_current.png"
          alt="Current Points"
          width={800}
          height={200}
          className="block h-auto"
          sizes="(max-width: 768px) 500px, 800px"
        />
        <div className="absolute top-[62%] left-[35%] -translate-y-1/2 text-xl md:text-2xl lg:text-3xl max-sm:text-lg font-bold text-white">
          {isLoading && <Loader className="inline-block animate-spin w-12 h-12 md:w-16 md:h-16" />}
          {/* {data && formatThousand(data[0]?.current_points || 0)} */}
          12
        </div>
      </div>
    </div>
  );
}
