import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "destructive" | "outline" | "sage";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "bg-[#1b4332] text-white",
    sage: "bg-[#d8f3dc] text-[#1b4332]",
    success: "bg-[#d1fae5] text-[#065f46] border border-[#a7f3d0]",
    warning: "bg-[#fef3c7] text-[#92400e] border border-[#fde68a]",
    destructive: "bg-[#fee2e2] text-[#991b1b] border border-[#fecaca]",
    outline: "border border-[#e7e2d9] text-[#4b5563] bg-white",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
