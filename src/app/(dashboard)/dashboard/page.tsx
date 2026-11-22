import React from "react";
import { StatCard } from "@/components/dashboard/StatCard";
import { TodayMealCard } from "@/components/dashboard/TodayMealCard";
import { ExpiryAlertCard } from "@/components/dashboard/ExpiryAlertCard";
import { RecentPantryList } from "@/components/dashboard/RecentPantryList";
import { AIRecipeSuggestionCard } from "@/components/dashboard/AIRecipeSuggestionCard";
import { Button } from "@/components/ui/button";
import {
  Refrigerator,
  AlertCircle,
  Wallet,
  CalendarCheck2,
  Sparkles,
  Camera,
  Plus,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-linear-to-r from-[#1b4332] to-[#2d6a4f] text-white p-6 md:p-8 rounded-3xl shadow-sm relative overflow-hidden">
        <div className="space-y-2 z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-medium text-[#d8f3dc]">
            <Sparkles className="w-3.5 h-3.5 text-[#d8f3dc]" />
            <span>AI Kitchen Intelligence Active</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Good evening, Chef Shakil! 👋
          </h2>
          <p className="text-sm text-[#d8f3dc]/90 max-w-xl">
            Here is your daily food inventory and cooking overview. You have 3 items expiring soon, and today’s meals are on track.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 z-10">
          <Button
            variant="secondary"
            className="text-xs bg-[#d8f3dc] text-[#1b4332] hover:bg-white gap-2 font-semibold"
          >
            <Camera className="w-4 h-4" />
            <span>Scan Fridge / Items</span>
          </Button>
          <Button
            variant="outline"
            className="text-xs bg-white/10 text-white border-white/20 hover:bg-white/20 gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>Manual Add</span>
          </Button>
        </div>

        {/* Decorative background glow */}
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* 4 Key Metric Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Pantry Items"
          value="24"
          subtitle="18 in Stock, 6 Low"
          icon={Refrigerator}
          trend={{ value: "+4 this week", isPositive: true }}
          variant="default"
        />
        <StatCard
          title="Expiring Soon (≤3 Days)"
          value="3"
          subtitle="Use today to avoid waste"
          icon={AlertCircle}
          trend={{ value: "Urgent", isPositive: false }}
          variant="alert"
        />
        <StatCard
          title="Monthly Food Spent"
          value="৳2,450"
          subtitle="Budget: ৳8,000"
          icon={Wallet}
          trend={{ value: "30.6% used", isNeutral: true }}
          variant="accent"
        />
        <StatCard
          title="Meals Planned"
          value="5 / 7"
          subtitle="Next: Dinner at 8:30 PM"
          icon={CalendarCheck2}
          trend={{ value: "On schedule", isPositive: true }}
          variant="success"
        />
      </div>

      {/* Main Grid: 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (7 cols): Expiry Alerts + AI Suggestion + Recent Inventory */}
        <div className="lg:col-span-7 space-y-6">
          <ExpiryAlertCard />
          <AIRecipeSuggestionCard />
          <RecentPantryList />
        </div>

        {/* Right Column (5 cols): Today's Meals + Grocery / Quick Tools */}
        <div className="lg:col-span-5 space-y-6">
          <TodayMealCard />

          {/* Quick Grocery Summary Card */}
          <div className="bg-white rounded-2xl border border-[#e7e2d9] p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-sm text-[#1f2924]">
                  Shopping Checklist
                </h4>
                <p className="text-xs text-[#6b7280]">
                  Generated from low stock and upcoming meals
                </p>
              </div>
              <span className="text-xs font-semibold text-[#1b4332] bg-[#edf7f0] px-2.5 py-1 rounded-full">
                4 Items to buy
              </span>
            </div>

            <div className="space-y-2 text-xs">
              {[
                { name: "Farm Eggs (ডিম)", qty: "1 hali (4 pcs)", est: "৳55" },
                { name: "Mustard Oil (সরিষার তেল)", qty: "1 Litre", est: "৳220" },
                { name: "Garlic (রসুন)", qty: "250 g", est: "৳60" },
                { name: "Green Chili (কাঁচামরিচ)", qty: "100 g", est: "৳25" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2 rounded-lg bg-[#faf8f5] border border-[#e7e2d9]/60"
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="rounded border-[#e7e2d9] text-[#1b4332] focus:ring-[#2d6a4f]"
                    />
                    <span className="text-[#1f2924] font-medium">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#6b7280]">{item.qty}</span>
                    <span className="font-semibold text-[#1b4332]">{item.est}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-[#f2eee9] text-xs">
              <span className="text-[#6b7280]">Estimated Total:</span>
              <span className="font-bold text-sm text-[#1b4332]">৳360</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
