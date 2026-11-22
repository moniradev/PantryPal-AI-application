import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Plus, Check, Trash2, Sparkles } from "lucide-react";

const groceryItems = [
  { id: "1", name: "Farm Eggs (ডিম)", qty: "4 pcs (1 hali)", estPrice: 55, isChecked: false, category: "Dairy & Poultry" },
  { id: "2", name: "Mustard Oil (সরিষার তেল)", qty: "1 Litre", estPrice: 220, isChecked: false, category: "Oils" },
  { id: "3", name: "Garlic (রসুন)", qty: "250 g", estPrice: 60, isChecked: true, category: "Spices" },
  { id: "4", name: "Green Chili (কাঁচামরিচ)", qty: "100 g", estPrice: 25, isChecked: false, category: "Vegetables" },
  { id: "5", name: "Rui Fish (রুই মাছ)", qty: "1 kg", estPrice: 380, isChecked: false, category: "Fish" },
];

export default function GroceryPage() {
  const totalCost = groceryItems.reduce((acc, item) => acc + item.estPrice, 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-[#1b4332]">
            Smart Grocery List (বাজারের ফর্দ)
          </h2>
          <p className="text-xs md:text-sm text-[#6b7280]">
            Automatically synced with your pantry deficit and weekly meal plan.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Button variant="secondary" size="sm" className="gap-2 border border-[#b7e4c7]">
            <Sparkles className="w-4 h-4 text-[#1b4332]" />
            <span>Sync with Meal Plan</span>
          </Button>
          <Button variant="primary" size="sm" className="gap-2">
            <Plus className="w-4 h-4" />
            <span>Add Item</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <div className="divide-y divide-[#f2eee9]">
              {groceryItems.map((item) => (
                <div
                  key={item.id}
                  className={`p-3.5 flex items-center justify-between text-xs transition-colors ${
                    item.isChecked ? "bg-[#faf8f5] opacity-60 line-through" : "hover:bg-[#faf8f5]/60"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      defaultChecked={item.isChecked}
                      className="rounded border-[#e7e2d9] text-[#1b4332] focus:ring-[#2d6a4f]"
                    />
                    <div>
                      <p className="font-semibold text-[#1f2924]">{item.name}</p>
                      <span className="text-[10px] text-[#6b7280]">{item.category}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-[#6b7280]">{item.qty}</span>
                    <span className="font-bold text-[#1b4332]">৳{item.estPrice}</span>
                    <button className="text-[#9ca3af] hover:text-[#e63946]">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="space-y-4">
          <Card className="p-5 space-y-4">
            <h3 className="font-semibold text-sm text-[#1f2924]">Order Summary</h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-[#6b7280]">
                <span>Total Items:</span>
                <span className="font-semibold text-[#1f2924]">{groceryItems.length}</span>
              </div>
              <div className="flex justify-between text-[#6b7280]">
                <span>Purchased:</span>
                <span className="font-semibold text-[#065f46]">1 item</span>
              </div>
              <div className="flex justify-between text-[#6b7280]">
                <span>Remaining:</span>
                <span className="font-semibold text-[#b45309]">4 items</span>
              </div>
              <div className="pt-3 border-t border-[#f2eee9] flex justify-between text-sm">
                <span className="font-bold text-[#1f2924]">Estimated Total:</span>
                <span className="font-bold text-[#1b4332]">৳{totalCost}</span>
              </div>
            </div>

            <Button variant="primary" className="w-full text-xs">
              Mark Complete & Update Pantry
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
