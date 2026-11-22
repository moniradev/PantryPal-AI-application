import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Utensils, ChefHat, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Meal {
  slot: "Lunch" | "Dinner" | "Breakfast";
  name: string;
  nameBn?: string;
  time: string;
  prepTime: string;
  calories?: string;
  image: string;
  isCompleted?: boolean;
}

const todayMeals: Meal[] = [
  {
    slot: "Lunch",
    name: "Egg Curry & Steamed Rice",
    nameBn: "ডিম ভুনা ও গরম ভাত",
    time: "1:00 PM",
    prepTime: "25 mins",
    calories: "520 kcal",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=300&q=80",
    isCompleted: true,
  },
  {
    slot: "Dinner",
    name: "Chicken Khichuri with Fresh Salad",
    nameBn: "চিকেন ভুনা খিচুড়ি ও সালাদ",
    time: "8:30 PM",
    prepTime: "35 mins",
    calories: "640 kcal",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=300&q=80",
    isCompleted: false,
  },
];

export function TodayMealCard() {
  return (
    <Card className="border border-[#e5dfd5] shadow-xs">
      <CardHeader className="flex flex-row items-center justify-between py-4 border-b border-[#f3efe8]">
        <div className="flex items-center gap-2">
          <ChefHat className="w-4 h-4 text-[#183b2b]" />
          <CardTitle>Today's Meal Plan (আজকের খাবার)</CardTitle>
        </div>
        <Badge variant="sage" className="font-mono text-xs">5 / 7 Planned</Badge>
      </CardHeader>
      <CardContent className="space-y-3 pt-4">
        {todayMeals.map((meal, idx) => (
          <div
            key={idx}
            className={`p-3.5 rounded-2xl border transition-all flex gap-3.5 items-center ${
              meal.isCompleted
                ? "bg-[#faf7f2] border-[#e5dfd5]/60 opacity-80"
                : "bg-white border-[#e5dfd5] shadow-2xs hover:border-[#183b2b]/40"
            }`}
          >
            {/* Real food image */}
            <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-[#e5dfd5] bg-[#faf7f2]">
              <img
                src={meal.image}
                alt={meal.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#52796f]">
                    {meal.slot} • {meal.time}
                  </span>
                  <h4 className="font-bold text-xs sm:text-sm text-[#18211e] truncate mt-0.5">
                    {meal.name}
                  </h4>
                  {meal.nameBn && (
                    <p className="text-[11px] text-[#5e6b65] truncate">{meal.nameBn}</p>
                  )}
                </div>
                {meal.isCompleted ? (
                  <span className="flex items-center gap-1 text-[10px] font-semibold text-[#183b2b] bg-[#d8e8dc] px-2 py-0.5 rounded-md shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-[#183b2b]" /> Cooked
                  </span>
                ) : (
                  <Button size="sm" variant="outline" className="h-7 text-[11px] shrink-0">
                    Cook
                  </Button>
                )}
              </div>

              <div className="mt-2 flex items-center gap-4 text-[11px] text-[#5e6b65] font-mono">
                <span className="flex items-center gap-1 font-sans">
                  <Clock className="w-3 h-3 text-[#8c9993]" />
                  {meal.prepTime}
                </span>
                <span className="flex items-center gap-1">
                  <Utensils className="w-3 h-3 text-[#8c9993]" />
                  {meal.calories}
                </span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
