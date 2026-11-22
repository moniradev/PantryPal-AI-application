import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, ChevronLeft, ChevronRight, Plus, ChefHat } from "lucide-react";

const days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

export default function MealPlannerPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-[#1b4332]">
            Weekly Meal Planner (সাপ্তাহিক মিল পরিকল্পনা)
          </h2>
          <p className="text-xs md:text-sm text-[#6b7280]">
            Organize breakfasts, lunches, and dinners to streamline your shopping and cooking.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <span className="text-xs font-semibold text-[#1f2924] px-2">
            This Week (22 Nov - 28 Nov)
          </span>
          <Button variant="outline" size="sm">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Week Grid */}
      <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
        {days.map((day, idx) => (
          <Card key={idx} className="flex flex-col">
            <div className="p-3 border-b border-[#f2eee9] bg-[#faf8f5] text-center">
              <span className="text-[11px] font-bold text-[#1b4332] uppercase tracking-wide">
                {day}
              </span>
            </div>
            <div className="p-2.5 space-y-2 flex-1 text-xs">
              <div className="p-2 rounded-lg bg-[#edf7f0] border border-[#d8f3dc]">
                <span className="text-[10px] uppercase font-bold text-[#52796f]">Lunch</span>
                <p className="font-semibold text-[#1f2924] truncate">
                  {idx % 2 === 0 ? "Egg Curry & Rice" : "Masoor Dal & Fish"}
                </p>
              </div>

              <div className="p-2 rounded-lg bg-[#fffbeb] border border-[#fde68a]">
                <span className="text-[10px] uppercase font-bold text-[#b45309]">Dinner</span>
                <p className="font-semibold text-[#1f2924] truncate">
                  {idx % 2 === 0 ? "Chicken Khichuri" : "Ruti & Vegetable"}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
