import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Clock, Flame, Coins, Utensils, Heart } from "lucide-react";

const recipes = [
  {
    id: "1",
    title: "Dim Khichuri (Egg Lentil Rice)",
    titleBn: "ডিম ভুনা খিচুড়ি",
    time: "30 mins",
    servings: 2,
    difficulty: "Easy",
    cost: "৳110",
    matchRate: "100%",
    pantryMatch: "All 5 ingredients available in pantry",
    tags: ["High Protein", "Traditional", "Quick"],
  },
  {
    id: "2",
    title: "Aloo Diye Dimer Dalna",
    titleBn: "আলু দিয়ে ডিমের ডালনা",
    time: "25 mins",
    servings: 3,
    difficulty: "Easy",
    cost: "৳90",
    matchRate: "100%",
    pantryMatch: "All 4 ingredients available in pantry",
    tags: ["Comfort Food", "Low Budget"],
  },
  {
    id: "3",
    title: "Spicy Masoor Dal Chorchori",
    titleBn: "ঘন মসুর ডাল চচ্চড়ি",
    time: "20 mins",
    servings: 4,
    difficulty: "Easy",
    cost: "৳65",
    matchRate: "90%",
    pantryMatch: "Missing 1 item (Cilantro)",
    tags: ["Vegetarian", "Zero Waste"],
  },
];

export default function RecipesPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-[#1b4332]">
            AI Recipe Generator (এআই রেসিপি জেনারেটর)
          </h2>
          <p className="text-xs md:text-sm text-[#6b7280]">
            Generates delicious localized Bengali recipes crafted from what's currently in your kitchen.
          </p>
        </div>

        <Button variant="primary" size="sm" className="gap-2">
          <Sparkles className="w-4 h-4 text-[#d8f3dc]" />
          <span>Generate New Recipe</span>
        </Button>
      </div>

      {/* Generator Prompt Bar */}
      <Card className="p-5 bg-linear-to-r from-[#edf7f0] to-[#faf8f5] border-[#d8f3dc]">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1b4332]">
            <Sparkles className="w-4 h-4 text-[#2d6a4f]" />
            <span>Customize Recipe Parameters</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
            <div>
              <label className="text-[#6b7280] font-medium block mb-1">Meal Slot</label>
              <select className="w-full bg-white border border-[#e7e2d9] rounded-xl px-3 py-2">
                <option>Dinner (রাতের খাবার)</option>
                <option>Lunch (দুপুরের খাবার)</option>
                <option>Breakfast (সকালের নাস্তা)</option>
              </select>
            </div>
            <div>
              <label className="text-[#6b7280] font-medium block mb-1">Max Budget (BDT)</label>
              <input
                type="number"
                defaultValue={150}
                className="w-full bg-white border border-[#e7e2d9] rounded-xl px-3 py-2"
              />
            </div>
            <div>
              <label className="text-[#6b7280] font-medium block mb-1">Cooking Time</label>
              <select className="w-full bg-white border border-[#e7e2d9] rounded-xl px-3 py-2">
                <option>Under 30 mins</option>
                <option>Under 15 mins</option>
                <option>Under 45 mins</option>
              </select>
            </div>
            <div className="flex items-end">
              <Button variant="primary" className="w-full text-xs">
                Run AI Match
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Recipe Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Card key={recipe.id} className="flex flex-col justify-between">
            <CardHeader className="py-4">
              <div className="flex items-start justify-between">
                <Badge variant="sage">{recipe.matchRate} In-Stock</Badge>
                <button className="text-[#9ca3af] hover:text-[#e63946] transition-colors">
                  <Heart className="w-4 h-4" />
                </button>
              </div>
              <h3 className="font-bold text-base text-[#1b4332] mt-2">
                {recipe.title}
              </h3>
              <p className="text-xs text-[#6b7280]">{recipe.titleBn}</p>
            </CardHeader>

            <CardContent className="space-y-3 pt-0">
              <div className="p-2.5 rounded-xl bg-[#faf8f5] border border-[#e7e2d9]/60 text-xs text-[#52796f] font-medium">
                {recipe.pantryMatch}
              </div>

              <div className="grid grid-cols-3 gap-2 py-2 text-center text-xs border-y border-[#f2eee9]">
                <div>
                  <span className="text-[#6b7280] block text-[10px]">Time</span>
                  <span className="font-semibold text-[#1f2924]">{recipe.time}</span>
                </div>
                <div>
                  <span className="text-[#6b7280] block text-[10px]">Servings</span>
                  <span className="font-semibold text-[#1f2924]">{recipe.servings} People</span>
                </div>
                <div>
                  <span className="text-[#6b7280] block text-[10px]">Est. Cost</span>
                  <span className="font-bold text-[#1b4332]">{recipe.cost}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <Button size="sm" variant="primary" className="flex-1 text-xs">
                  View Recipe & Steps
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
