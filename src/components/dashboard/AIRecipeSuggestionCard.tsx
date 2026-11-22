import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Sparkles, Clock, Flame, Coins, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function AIRecipeSuggestionCard() {
  return (
    <Card className="border-[#bed7c5] bg-white relative overflow-hidden shadow-xs">
      <CardHeader className="py-4 flex flex-row items-center justify-between border-b border-[#f3efe8]">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-[#183b2b] text-[#d8e8dc]">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <CardTitle className="text-sm">AI Chef Pick for Monira Akter</CardTitle>
            <p className="text-[11px] text-[#5e6b65]">
              Crafted from ingredients already available in your kitchen
            </p>
          </div>
        </div>
        <Badge variant="sage" className="font-mono text-xs">100% In Stock</Badge>
      </CardHeader>

      <CardContent className="space-y-4 pt-4">
        <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-2xl bg-[#faf7f2] border border-[#e5dfd5]">
          {/* Real Dish Photography */}
          <div className="w-full sm:w-28 h-28 rounded-xl overflow-hidden shrink-0 border border-[#e5dfd5]">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80"
              alt="Egg Fried Rice"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-sm sm:text-base text-[#183b2b]">
                  Quick Egg Fried Rice & Tomato Curry
                </h4>
                <p className="text-xs text-[#5e6b65] mt-0.5">
                  ডিম ভাজা ফ্রাইড রাইস ও টমেটো চাটনি
                </p>
              </div>
              <span className="text-xs font-bold text-[#183b2b] bg-[#d8e8dc] px-2.5 py-1 rounded-lg font-mono">
                Est. ৳85
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs text-[#5e6b65] font-mono">
              <span className="flex items-center gap-1 font-sans">
                <Clock className="w-3.5 h-3.5 text-[#183b2b]" /> 20 mins
              </span>
              <span className="flex items-center gap-1 font-sans">
                <Flame className="w-3.5 h-3.5 text-[#183b2b]" /> Easy Prep
              </span>
              <span className="flex items-center gap-1">
                <Coins className="w-3.5 h-3.5 text-[#183b2b]" /> Saves ৳140
              </span>
            </div>

            <div className="pt-2 flex flex-wrap gap-1.5">
              {["Miniket Rice", "Eggs (2)", "Tomatoes (2)", "Onions", "Green Chili"].map(
                (ing, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 text-[10px] bg-white border border-[#e5dfd5] text-[#18211e] px-2 py-0.5 rounded-md font-medium"
                  >
                    <Check className="w-3 h-3 text-[#183b2b]" /> {ing}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-1">
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
