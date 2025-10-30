'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import { useCustomer } from "@/hooks/useCustomer";

export default function CustomerAvatar() {
  const { customer } = useCustomer();

  return (
    <div className="fixed top-4 right-4 z-50">
      {customer && (
        <Avatar>
          <AvatarFallback className="bg-slate-400 text-white font-extrabold">
            {customer &&
              (customer.lastName?.slice(0, 3) ||
                customer.emailAddress?.split("@")[0]?.slice(0, 2) ||
                " ")}
          </AvatarFallback>
        </Avatar>
      )}
      {!customer && (
        <Avatar className="bg-slate-400 items-center flex justify-center">
          <User />
        </Avatar>
      )}
    </div>
  );
}
