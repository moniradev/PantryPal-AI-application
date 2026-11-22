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
  MapPin,
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Editorial Header Command Banner - For Monira Akter */}
      <div className="bg-[#183b2b] text-white p-6 md:p-8 rounded-3xl shadow-xs relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div className="space-y-2.5 z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-[#d8e8dc]">
            <Sparkles className="w-3.5 h-3.5 text-[#d8e8dc]" />
            <span>Pantry Intelligence System Active</span>
            <span className="text-white/40">•</span>
            <span className="inline-flex items-center gap-1 text-[11px] font-normal text-white/80">
              <MapPin className="w-3 h-3 text-[#d8e8dc]" /> Dhaka, Bangladesh
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Kitchen Overview: Monira Akter
          </h2>
          <p className="text-xs md:text-sm text-[#d8e8dc]/85 leading-relaxed font-normal">
            Welcome back, Monira! Your kitchen inventory has 24 tracked items. 3 ingredients need to be used within 48 hours to avoid waste. Dinner is scheduled for 8:30 PM.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 z-10 shrink-0">
          <Link href="/pantry">
            <Button
              variant="secondary"
              className="text-xs bg-[#d8e8dc] text-[#143525] hover:bg-white gap-2 font-semibold shadow-2xs"
            >
              <Camera className="w-4 h-4 text-[#183b2b]" />
              <span>Scan Fridge / Items</span>
            </Button>
          </Link>
          <Link href="/pantry">
            <Button
              variant="outline"
              className="text-xs bg-white/10 text-white border-white/20 hover:bg-white/20 gap-2 font-semibold"
            >
              <Plus className="w-4 h-4" />
              <span>Add Ingredient</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* 4 Metric Tiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Stocked Ingredients"
          value="24"
          subtitle="18 in Stock, 6 Low Stock"
          icon={Refrigerator}
          trend={{ value: "+4 added this week", isPositive: true }}
          variant="default"
        />
        <StatCard
          title="Urgent Expiration Alert"
          value="3"
          subtitle="Tomatoes, Milk, Coriander"
          icon={AlertCircle}
          trend={{ value: "Action required", isPositive: false }}
          variant="alert"
        />
        <StatCard
          title="November Food Spend"
          value="৳2,450"
          subtitle="Monthly Ceiling: ৳8,000"
          icon={Wallet}
          trend={{ value: "30.6% used", isNeutral: true }}
          variant="accent"
        />
        <StatCard
          title="Weekly Meals Scheduled"
          value="5 / 7"
          subtitle="Next: Dinner at 8:30 PM"
          icon={CalendarCheck2}
          trend={{ value: "On schedule", isPositive: true }}
          variant="success"
        />
      </div>

      {/* Asymmetric Kitchen Operations Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (7 cols): Expiry Alerts + AI Recipe Match + Pantry Status */}
        <div className="lg:col-span-7 space-y-6">
          <ExpiryAlertCard />
          <AIRecipeSuggestionCard />
          <RecentPantryList />
        </div>

        {/* Right Column (5 cols): Today's Meals + Bazar Checklist */}
        <div className="lg:col-span-5 space-y-6">
          <TodayMealCard />

          {/* Quick Grocery Summary Card */}
          <div className="bg-white rounded-3xl border border-[#e5dfd5] p-6 space-y-4 shadow-xs">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-sm text-[#18211e]">
                  Automatic Bazar Checklist
                </h4>
                <p className="text-xs text-[#5e6b65]">
                  Calculated from low pantry stock & planned recipes
                </p>
              </div>
              <span className="text-xs font-semibold text-[#183b2b] bg-[#edf5ef] px-2.5 py-1 rounded-full font-mono">
                4 Deficits
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
                  className="flex items-center justify-between p-2.5 rounded-xl bg-[#faf7f2] border border-[#e5dfd5]/70"
                >
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      className="rounded border-[#e5dfd5] text-[#183b2b] focus:ring-[#183b2b]"
                    />
                    <span className="text-[#18211e] font-medium">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-3 font-mono">
                    <span className="text-[#5e6b65]">{item.qty}</span>
                    <span className="font-semibold text-[#183b2b]">{item.est}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-3 flex items-center justify-between border-t border-[#f3efe8] text-xs">
              <span className="text-[#5e6b65] font-medium">Estimated Basket Total:</span>
              <span className="font-bold text-base text-[#183b2b] font-mono">৳360</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
