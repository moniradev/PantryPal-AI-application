"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Refrigerator,
  Sparkles,
  CalendarDays,
  ShoppingCart,
  Wallet,
  BarChart3,
  BotMessageSquare,
  Settings,
  Leaf,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  { name: "Dashboard", nameBn: "ড্যাশবোর্ড", href: "/dashboard", icon: LayoutDashboard },
  { name: "My Pantry", nameBn: "আমার প্যান্ট্রি", href: "/pantry", icon: Refrigerator },
  { name: "AI Recipes", nameBn: "রেসিপি জেনারেটর", href: "/recipes", icon: Sparkles, badge: "AI" },
  { name: "Meal Planner", nameBn: "মিল প্ল্যানার", href: "/meal-planner", icon: CalendarDays },
  { name: "Grocery List", nameBn: "বাজারের ফর্দ", href: "/grocery", icon: ShoppingCart },
  { name: "Budget Tracker", nameBn: "বাজেট ট্র্যাকার", href: "/budget", icon: Wallet },
  { name: "Food Analytics", nameBn: "অ্যানালিটিক্স", href: "/analytics", icon: BarChart3 },
  { name: "AI Assistant", nameBn: "স্মার্ট অ্যাসিস্ট্যান্ট", href: "/assistant", icon: BotMessageSquare, badge: "Live" },
  { name: "Settings", nameBn: "সেটিংস", href: "/settings", icon: Settings },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r border-[#e7e2d9] flex flex-col justify-between h-screen sticky top-0 shrink-0 z-30">
      {/* Brand Logo Header */}
      <div>
        <div className="p-6 border-b border-[#f2eee9] flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#1b4332] flex items-center justify-center text-white shadow-sm">
            <Leaf className="w-5 h-5 text-[#d8f3dc]" />
          </div>
          <div>
            <h1 className="font-bold text-lg text-[#1b4332] tracking-tight leading-none">
              PantryPal<span className="text-[#52796f] ml-0.5">AI</span>
            </h1>
            <p className="text-[11px] text-[#6b7280] font-medium mt-1">
              Smart Kitchen & Food Ops
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="p-3 space-y-1 overflow-y-auto max-h-[calc(100vh-180px)]">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.href ||
              (item.href !== "/dashboard" && pathname?.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all group",
                  isActive
                    ? "bg-[#1b4332] text-white shadow-xs"
                    : "text-[#4b5563] hover:text-[#1b4332] hover:bg-[#edf7f0]"
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={cn(
                      "w-4 h-4 transition-transform group-hover:scale-110",
                      isActive ? "text-[#d8f3dc]" : "text-[#6b7280] group-hover:text-[#1b4332]"
                    )}
                  />
                  <span>{item.name}</span>
                </div>
                {item.badge && (
                  <span
                    className={cn(
                      "text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-md",
                      isActive
                        ? "bg-[#2d6a4f] text-[#d8f3dc]"
                        : "bg-[#d8f3dc] text-[#1b4332]"
                    )}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* User Status / Bottom Footer */}
      <div className="p-4 border-t border-[#f2eee9] bg-[#faf8f5]/60 m-2 rounded-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#52796f] text-white font-semibold text-xs flex items-center justify-center">
              BD
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-semibold text-[#1f2924] truncate">
                Chef Shakil
              </p>
              <p className="text-[11px] text-[#6b7280] truncate">
                shakil@pantrypal.ai
              </p>
            </div>
          </div>
          <button
            title="Sign out"
            className="text-[#6b7280] hover:text-[#e63946] p-1.5 rounded-lg hover:bg-white transition-colors"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
