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
    <aside className="w-64 bg-white border-r border-[#e5dfd5] flex flex-col justify-between h-screen sticky top-0 shrink-0 z-30">
      {/* Brand Logo Header */}
      <div>
        <Link
          href="/"
          className="p-6 border-b border-[#f3efe8] flex items-center gap-3 hover:bg-[#faf7f2] transition-colors group block"
          title="Go to Homepage"
        >
          <div className="w-10 h-10 rounded-xl bg-[#183b2b] flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform shrink-0">
            <Leaf className="w-5 h-5 text-[#d8e8dc]" />
          </div>
          <div>
            <h1 className="font-bold text-lg text-[#183b2b] tracking-tight leading-none">
              PantryPal<span className="text-[#52796f] ml-0.5">AI</span>
            </h1>
            <p className="text-[11px] text-[#5e6b65] font-medium mt-1">
              Smart Kitchen & Food Ops
            </p>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="p-3 space-y-1 overflow-y-auto max-h-[calc(100vh-190px)]">
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
                    ? "bg-[#183b2b] text-white shadow-xs"
                    : "text-[#5e6b65] hover:text-[#183b2b] hover:bg-[#edf5ef]"
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={cn(
                      "w-4 h-4 transition-transform group-hover:scale-110",
                      isActive ? "text-[#d8e8dc]" : "text-[#8c9993] group-hover:text-[#183b2b]"
                    )}
                  />
                  <span>{item.name}</span>
                </div>
                {item.badge && (
                  <span
                    className={cn(
                      "text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-md",
                      isActive
                        ? "bg-[#244d3a] text-[#d8e8dc]"
                        : "bg-[#d8e8dc] text-[#143525]"
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

      {/* User Profile for Monira Akter */}
      <div className="p-3.5 border-t border-[#f3efe8] bg-[#faf7f2] m-2 rounded-2xl border border-[#e5dfd5]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#183b2b] text-[#d8e8dc] font-bold text-xs flex items-center justify-center ring-2 ring-white shadow-2xs">
              MA
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-bold text-[#18211e] truncate">
                Monira Akter
              </p>
              <p className="text-[11px] text-[#5e6b65] truncate">
                monira.akter@pantrypal.ai
              </p>
            </div>
          </div>
          <Link
            href="/login"
            title="Sign out"
            className="text-[#8c9993] hover:text-[#b93828] p-1.5 rounded-lg hover:bg-white transition-colors"
          >
            <LogOut className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
