import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Sparkles, Clock, Flame, Coins, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function AIRecipeSuggestionCard() {
  return (
    <Card className="border-[#b7e4c7] bg-linear-to-br from-[#f3faf5] to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#d8f3dc]/40 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />

      <CardHeader className="py-4 flex flex-row items-center justify-between relative">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-[#1b4332] text-[#d8f3dc]">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <CardTitle className="text-sm">AI Chef Pick for Tonight</CardTitle>
            <p className="text-[11px] text-[#52796f]">
              Based on what is already available in your kitchen
            </p>
          </div>
        </div>
        <Badge variant="sage">100% In Stock</Badge>
      </CardHeader>

      <CardContent className="space-y-3 relative pt-1">
        <div className="p-4 rounded-xl bg-white border border-[#d8f3dc] shadow-2xs">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-bold text-base text-[#1b4332]">
                Quick Egg Fried Rice & Tomato Curry
              </h4>
              <p className="text-xs text-[#6b7280] mt-0.5">
                ডিম ভাজা ফ্রাইড রাইস ও টমেটো চাটনি
              </p>
            </div>
            <span className="text-xs font-bold text-[#1b4332] bg-[#d8f3dc] px-2 py-1 rounded-lg">
              Est. ৳85
            </span>
          </div>

          <div className="mt-3 flex items-center gap-4 text-xs text-[#6b7280]">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#52796f]" /> 20 mins
            </span>
            <span className="flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-[#52796f]" /> Easy Prep
            </span>
            <span className="flex items-center gap-1">
              <Coins className="w-3.5 h-3.5 text-[#52796f]" /> Saves ৳140
            </span>
          </div>

          <div className="mt-3 pt-3 border-t border-[#f2eee9] flex flex-wrap gap-1.5">
            {["Miniket Rice", "Eggs (2)", "Tomatoes (2)", "Onions", "Green Chili"].map(
              (ing, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 text-[11px] bg-[#edf7f0] text-[#1b4332] px-2 py-0.5 rounded-md font-medium"
                >
                  <Check className="w-3 h-3 text-[#10b981]" /> {ing}
                </span>
              )
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button size="sm" variant="primary" className="flex-1 text-xs">
            Start Cooking Recipe
          </Button>
          <Button size="sm" variant="outline" className="text-xs">
            Regenerate
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
