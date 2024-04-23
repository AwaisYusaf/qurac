import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  variant: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
};

function Button({ variant, children, className }: Props) {
  return (
    <button
      className={cn(
        "uppercase text-black font-semibold rounded-full bg-white hover:bg-black hover:text-white transition-all duration-300 ",
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
