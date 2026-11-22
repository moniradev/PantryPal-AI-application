"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Clock, Coins, Heart, Loader2, Check, ArrowRight } from "lucide-react";

const initialRecipes = [
  {
    id: "1",
    title: "Dim Khichuri (Egg Lentil Rice)",
    titleBn: "ডিম ভুনা খিচুড়ি",
    time: "30 mins",
    servings: 2,
    cost: "৳110",
    matchRate: "100%",
    pantryMatch: "All 5 ingredients available in pantry",
    instructions: [
      "Wash Miniket rice and masoor dal together; drain thoroughly.",
      "Heat mustard oil, sauté sliced onions and green chilies until fragrant.",
      "Add turmeric, cumin powder, ginger paste, and the rice-dal mix. Fry for 3 minutes.",
      "Add warm water, salt, and simmer until cooked.",
      "Hard-boil 2 eggs, sauté with a pinch of turmeric, and mix into the khichuri.",
    ],
  },
  {
    id: "2",
    title: "Aloo Diye Dimer Dalna",
    titleBn: "আলু দিয়ে ডিমের ডালনা",
    time: "25 mins",
    servings: 3,
    cost: "৳90",
    matchRate: "100%",
    pantryMatch: "All 4 ingredients available in pantry",
    instructions: [
      "Boil and peel potatoes and eggs.",
      "Lightly fry the eggs in mustard oil with salt and turmeric.",
      "Sauté onions, tomatoes, and Bengali spices until oil separates.",
      "Add halved potatoes and water, then gently add the eggs and simmer.",
    ],
  },
];

export default function RecipesPage() {
  const [recipes, setRecipes] = useState(initialRecipes);
  const [isGenerating, setIsGenerating] = useState(false);
  const [mealSlot, setMealSlot] = useState<"breakfast" | "lunch" | "dinner">("dinner");
  const [budget, setBudget] = useState(150);
  const [activeRecipeModal, setActiveRecipeModal] = useState<any | null>(null);

  const handleGenerateRecipe = async () => {
    setIsGenerating(true);
    try {
      const res = await fetch("/api/ai/generate-recipe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pantryItems: [
            { name: "Miniket Rice", quantity: 5, unit: "kg" },
            { name: "Farm Eggs", quantity: 8, unit: "pcs" },
            { name: "Fresh Tomatoes", quantity: 800, unit: "g", isExpiringSoon: true },
            { name: "Masoor Dal", quantity: 1.2, unit: "kg" },
            { name: "Red Onion", quantity: 1.5, unit: "kg" },
          ],
          mealSlot,
          budgetLimitBDT: Number(budget),
          servings: 2,
          dietaryRestrictions: [],
          allergies: [],
        }),
      });

      const json = await res.json();
      if (json.success && json.data?.recipe) {
        const r = json.data.recipe;
        const newRecipe = {
          id: crypto.randomUUID(),
          title: r.title,
          titleBn: r.title_bn,
          time: `${r.cooking_time_minutes} mins`,
          servings: r.servings,
          cost: `৳${r.estimated_cost_bdt}`,
          matchRate: `${r.match_percentage || 100}%`,
          pantryMatch: "Uses expiring tomatoes & pantry eggs",
          instructions: r.instructions || [],
        };
        setRecipes((prev) => [newRecipe, ...prev]);
        setActiveRecipeModal(newRecipe);
      }
    } catch (err) {
      console.error("Recipe generation error:", err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-[#183b2b]">
            AI Recipe Generator (রেসিপি জেনারেটর)
          </h2>
          <p className="text-xs md:text-sm text-[#5e6b65]">
            Crafts dishes prioritized by expiring items to eliminate kitchen waste.
          </p>
        </div>

        <Button
          variant="primary"
          size="sm"
          onClick={handleGenerateRecipe}
          disabled={isGenerating}
          className="gap-2 shadow-xs"
        >
          {isGenerating ? (
            <Loader2 className="w-4 h-4 animate-spin text-[#d8e8dc]" />
          ) : (
            <Sparkles className="w-4 h-4 text-[#d8e8dc]" />
          )}
          <span>{isGenerating ? "Crafting Recipe..." : "Generate New Recipe"}</span>
        </Button>
      </div>

      {/* Generator Prompt Customizer */}
      <Card className="p-5 bg-white border border-[#e5dfd5]">
        <div className="space-y-3 text-xs">
          <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-[#183b2b]">
            <Sparkles className="w-4 h-4 text-[#183b2b]" />
            <span>Customize Cooking Parameters</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            <div>
              <label className="text-[#5e6b65] font-semibold block mb-1">Target Meal</label>
              <select
                value={mealSlot}
                onChange={(e: any) => setMealSlot(e.target.value)}
                className="w-full bg-[#faf7f2] border border-[#e5dfd5] rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-[#183b2b]/20"
              >
                <option value="dinner">Dinner (রাতের খাবার)</option>
                <option value="lunch">Lunch (দুপুরের খাবার)</option>
                <option value="breakfast">Breakfast (সকাল)</option>
              </select>
            </div>
            <div>
              <label className="text-[#5e6b65] font-semibold block mb-1">Max Budget (BDT)</label>
              <input
                type="number"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full bg-[#faf7f2] border border-[#e5dfd5] rounded-xl px-3 py-2 text-xs font-mono"
              />
            </div>
            <div>
              <label className="text-[#5e6b65] font-semibold block mb-1">Pantry Constraint</label>
              <input
                type="text"
                readOnly
                value="Prioritize Expiring Items (Zero Waste)"
                className="w-full bg-[#f3efe8] border border-[#e5dfd5] rounded-xl px-3 py-2 text-xs text-[#5e6b65] cursor-not-allowed"
              />
            </div>
            <div className="flex items-end">
              <Button
                variant="primary"
                onClick={handleGenerateRecipe}
                disabled={isGenerating}
                className="w-full text-xs"
              >
                {isGenerating ? "Analyzing Inventory..." : "Run AI Pantry Match"}
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Recipes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Card key={recipe.id} className="flex flex-col justify-between p-5 space-y-4">
            <div className="space-y-2">
              <div className="flex items-start justify-between">
                <Badge variant="sage">{recipe.matchRate} In-Stock</Badge>
                <button className="text-[#8c9993] hover:text-[#b93828]">
                  <Heart className="w-4 h-4" />
                </button>
              </div>

              <h3 className="font-bold text-base text-[#183b2b]">
                {recipe.title}
              </h3>
              <p className="text-xs text-[#5e6b65]">{recipe.titleBn}</p>
            </div>

            <div className="p-2.5 rounded-xl bg-[#faf7f2] border border-[#e5dfd5] text-xs text-[#183b2b] font-medium">
              {recipe.pantryMatch}
            </div>

            <div className="grid grid-cols-3 gap-2 py-2 text-center text-xs border-y border-[#f3efe8] font-mono">
              <div>
                <span className="text-[#5e6b65] block text-[10px] font-sans">Time</span>
                <span className="font-semibold text-[#18211e]">{recipe.time}</span>
              </div>
              <div>
                <span className="text-[#5e6b65] block text-[10px] font-sans">Servings</span>
                <span className="font-semibold text-[#18211e]">{recipe.servings}</span>
              </div>
              <div>
                <span className="text-[#5e6b65] block text-[10px] font-sans">Est. Cost</span>
                <span className="font-bold text-[#183b2b]">{recipe.cost}</span>
              </div>
            </div>

            <Button
              size="sm"
              variant="outline"
              onClick={() => setActiveRecipeModal(recipe)}
              className="w-full text-xs"
            >
              View Cooking Steps
            </Button>
          </Card>
        ))}
      </div>

      {/* Recipe Instructions Modal */}
      {activeRecipeModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-[#e5dfd5] w-full max-w-xl p-6 shadow-xl relative max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#f3efe8]">
              <div>
                <h3 className="font-bold text-lg text-[#183b2b]">
                  {activeRecipeModal.title}
                </h3>
                <p className="text-xs text-[#5e6b65]">
                  {activeRecipeModal.titleBn} • {activeRecipeModal.time} • Est. {activeRecipeModal.cost}
                </p>
              </div>
              <button
                onClick={() => setActiveRecipeModal(null)}
                className="p-1.5 rounded-xl hover:bg-[#faf7f2] text-[#5e6b65]"
              >
                ✕
              </button>
            </div>

            <div className="py-4 space-y-4 text-xs">
              <h4 className="font-semibold text-sm text-[#18211e]">
                Step-by-Step Cooking Instructions:
              </h4>
              <div className="space-y-3">
                {activeRecipeModal.instructions.map((step: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#faf7f2] border border-[#e5dfd5]">
                    <span className="w-5 h-5 rounded-full bg-[#183b2b] text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                      {idx + 1}
                    </span>
                    <p className="text-[#18211e] leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-[#f3efe8] flex justify-end">
              <Button
                size="sm"
                variant="primary"
                onClick={() => setActiveRecipeModal(null)}
              >
                Close Recipe
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
