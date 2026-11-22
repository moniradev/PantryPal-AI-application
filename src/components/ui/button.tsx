import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive" | "accent";
  size?: "sm" | "md" | "lg" | "icon";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

    const variantStyles = {
      primary:
        "bg-[#1b4332] text-white hover:bg-[#2d6a4f] shadow-sm hover:shadow focus:ring-[#2d6a4f]",
      secondary:
        "bg-[#d8f3dc] text-[#1b4332] hover:bg-[#b7e4c7] focus:ring-[#52796f]",
      outline:
        "border border-[#e7e2d9] bg-white text-[#1f2924] hover:bg-[#faf8f5] hover:border-[#cfc7ba] focus:ring-[#2d6a4f]",
      ghost:
        "text-[#1f2924] hover:bg-[#f2eee9] focus:ring-[#2d6a4f]",
      destructive:
        "bg-[#e63946] text-white hover:bg-[#d62828] focus:ring-[#e63946]",
      accent:
        "bg-[#52796f] text-white hover:bg-[#354f52] focus:ring-[#354f52]",
    };

    const sizeStyles = {
      sm: "h-8 px-3 text-xs gap-1.5",
      md: "h-10 px-4 text-sm gap-2",
      lg: "h-12 px-6 text-base gap-2.5",
      icon: "h-10 w-10 p-0",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
