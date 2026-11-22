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
    isCompleted: true,
  },
  {
    slot: "Dinner",
    name: "Chicken Khichuri with Salad",
    nameBn: "চিকেন ভুনা খিচুড়ি ও সালাদ",
    time: "8:30 PM",
    prepTime: "35 mins",
    calories: "640 kcal",
    isCompleted: false,
  },
];

export function TodayMealCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <ChefHat className="w-4 h-4 text-[#1b4332]" />
          <CardTitle>Today's Meal Plan</CardTitle>
        </div>
        <Badge variant="sage">5 / 7 Planned</Badge>
      </CardHeader>
      <CardContent className="space-y-3 pt-2">
        {todayMeals.map((meal, idx) => (
          <div
            key={idx}
            className={`p-3.5 rounded-xl border transition-all ${
              meal.isCompleted
                ? "bg-[#faf8f5] border-[#e7e2d9]/60 opacity-80"
                : "bg-white border-[#e7e2d9] shadow-2xs hover:border-[#2d6a4f]/40"
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#52796f]">
                  {meal.slot} • {meal.time}
                </span>
                <h4 className="font-semibold text-sm text-[#1f2924] mt-0.5">
                  {meal.name}
                </h4>
                {meal.nameBn && (
                  <p className="text-xs text-[#6b7280]">{meal.nameBn}</p>
                )}
              </div>
              {meal.isCompleted ? (
                <span className="flex items-center gap-1 text-[11px] font-medium text-[#065f46] bg-[#d1fae5] px-2 py-0.5 rounded-md">
                  <CheckCircle2 className="w-3 h-3" /> Cooked
                </span>
              ) : (
                <Button size="sm" variant="outline" className="h-7 text-xs">
                  Cook Now
                </Button>
              )}
            </div>

            <div className="mt-3 flex items-center gap-4 text-xs text-[#6b7280]">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#9ca3af]" />
                {meal.prepTime}
              </span>
              <span className="flex items-center gap-1">
                <Utensils className="w-3.5 h-3.5 text-[#9ca3af]" />
                {meal.calories}
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
