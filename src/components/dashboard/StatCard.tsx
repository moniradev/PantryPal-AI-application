import React from "react";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    value: string;
    isPositive?: boolean;
    isNeutral?: boolean;
  };
  variant?: "default" | "alert" | "success" | "accent";
}

export function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  variant = "default",
}: StatCardProps) {
  const iconTheme = {
    default: "bg-[#edf7f0] text-[#1b4332]",
    alert: "bg-[#fee2e2] text-[#991b1b]",
    success: "bg-[#d1fae5] text-[#065f46]",
    accent: "bg-[#e0e7ff] text-[#3730a3]",
  };

  return (
    <Card className="p-5 flex flex-col justify-between hover:border-[#cfc7ba] transition-all">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-xs font-medium text-[#6b7280]">{title}</p>
          <p className="text-2xl font-bold tracking-tight text-[#1f2924]">{value}</p>
        </div>
        <div className={cn("p-2.5 rounded-xl", iconTheme[variant])}>
          <Icon className="w-5 h-5" />
        </div>
      </div>

      {(subtitle || trend) && (
        <div className="mt-4 pt-3 border-t border-[#f2eee9] flex items-center justify-between text-xs">
          {subtitle && <span className="text-[#6b7280]">{subtitle}</span>}
          {trend && (
            <span
              className={cn(
                "font-semibold",
                trend.isNeutral
                  ? "text-[#6b7280]"
                  : trend.isPositive
                  ? "text-[#065f46]"
                  : "text-[#991b1b]"
              )}
            >
              {trend.value}
            </span>
          )}
        </div>
      )}
    </Card>
  );
}
