"use client";
import { useCustomer } from "@/hooks/useCustomer";
import { useSearchParams } from "next/navigation";

export default function LoginContent() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code") || undefined;
  const state = searchParams.get("state") || undefined;
  const { customer } = useCustomer(code, state);

  return (
    <div className="bg-black h-screen text-white font-bold">
      <div className="flex flex-col items-center justify-center h-full">
        {customer && <>customer: {customer.emailAddress}</>}
      </div>
    </div>
  );
}
