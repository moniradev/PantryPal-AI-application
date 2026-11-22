"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Sparkles, Check } from "lucide-react";

interface GroceryItem {
  id: string;
  name: string;
  qty: string;
  estPrice: number;
  isChecked: boolean;
  category: string;
}

const initialList: GroceryItem[] = [
  { id: "1", name: "Farm Eggs (ফার্মের ডিম)", qty: "4 pcs (1 hali)", estPrice: 55, isChecked: false, category: "Dairy & Poultry" },
  { id: "2", name: "Mustard Oil (সরিষার তেল)", qty: "1 Litre", estPrice: 220, isChecked: false, category: "Oils" },
  { id: "3", name: "Garlic (দেশি রসুন)", qty: "250 g", estPrice: 60, isChecked: true, category: "Spices" },
  { id: "4", name: "Green Chili (কাঁচামরিচ)", qty: "100 g", estPrice: 25, isChecked: false, category: "Vegetables" },
  { id: "5", name: "Rui Fish (রুই মাছ)", qty: "1 kg", estPrice: 380, isChecked: false, category: "Fish" },
];

export default function GroceryPage() {
  const [items, setItems] = useState<GroceryItem[]>(initialList);
  const [newItemName, setNewItemName] = useState("");
  const [newItemQty, setNewItemQty] = useState("");
  const [newItemPrice, setNewItemPrice] = useState("");

  const toggleCheck = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const deleteItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName.trim()) return;

    setItems((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name: newItemName,
        qty: newItemQty || "1 unit",
        estPrice: Number(newItemPrice) || 0,
        isChecked: false,
        category: "Groceries",
      },
    ]);

    setNewItemName("");
    setNewItemQty("");
    setNewItemPrice("");
  };

  const totalCost = items.reduce((acc, item) => acc + item.estPrice, 0);
  const remainingCost = items
    .filter((i) => !i.isChecked)
    .reduce((acc, item) => acc + item.estPrice, 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-[#183b2b]">
            Smart Grocery Checklist (বাজারের ফর্দ)
          </h2>
          <p className="text-xs md:text-sm text-[#5e6b65]">
            Automatically compiled from low pantry stock & upcoming dinner recipes.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {/* Quick Add Form */}
          <Card className="p-4 bg-white border border-[#e5dfd5]">
            <form onSubmit={handleAddItem} className="flex flex-col sm:flex-row gap-2 text-xs">
              <input
                type="text"
                placeholder="Item name (e.g. চিনিగుঁড়া চাল)..."
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                className="flex-2 bg-[#faf7f2] border border-[#e5dfd5] rounded-xl px-3 py-2 focus:ring-2 focus:ring-[#183b2b]/20"
              />
              <input
                type="text"
                placeholder="Qty (e.g. 500 g)"
                value={newItemQty}
                onChange={(e) => setNewItemQty(e.target.value)}
                className="w-28 bg-[#faf7f2] border border-[#e5dfd5] rounded-xl px-3 py-2"
              />
              <input
                type="number"
                placeholder="৳ Est. Price"
                value={newItemPrice}
                onChange={(e) => setNewItemPrice(e.target.value)}
                className="w-28 bg-[#faf7f2] border border-[#e5dfd5] rounded-xl px-3 py-2 font-mono"
              />
              <Button type="submit" size="sm" variant="primary" className="gap-1">
                <Plus className="w-3.5 h-3.5" /> Add
              </Button>
            </form>
          </Card>

          {/* Checklist Items */}
          <Card>
            <div className="divide-y divide-[#f3efe8]">
              {items.map((item) => (
                <div
                  key={item.id}
                  className={`p-3.5 flex items-center justify-between text-xs transition-colors ${
                    item.isChecked ? "bg-[#faf7f2] opacity-60 line-through" : "hover:bg-[#faf7f2]/70"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={item.isChecked}
                      onChange={() => toggleCheck(item.id)}
                      className="rounded border-[#e5dfd5] text-[#183b2b] focus:ring-[#183b2b] cursor-pointer"
                    />
                    <div>
                      <p className="font-semibold text-[#18211e]">{item.name}</p>
                      <span className="text-[10px] text-[#5e6b65]">{item.category}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 font-mono">
                    <span className="text-[#5e6b65]">{item.qty}</span>
                    <span className="font-bold text-[#183b2b]">৳{item.estPrice}</span>
                    <button
                      onClick={() => deleteItem(item.id)}
                      className="text-[#8c9993] hover:text-[#b93828] p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Cost Summary Widget */}
        <div className="space-y-4">
          <Card className="p-6 space-y-4">
            <h3 className="font-bold text-sm text-[#18211e]">Checklist Pacing</h3>
            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between text-[#5e6b65]">
                <span>Total Items:</span>
                <span className="font-semibold text-[#18211e] font-mono">{items.length} items</span>
              </div>
              <div className="flex justify-between text-[#5e6b65]">
                <span>Purchased:</span>
                <span className="font-semibold text-[#183b2b] font-mono">
                  {items.filter((i) => i.isChecked).length} items
                </span>
              </div>
              <div className="flex justify-between text-[#5e6b65]">
                <span>Remaining to Buy:</span>
                <span className="font-semibold text-[#c28839] font-mono">
                  {items.filter((i) => !i.isChecked).length} items
                </span>
              </div>
              <div className="pt-3 border-t border-[#f3efe8] flex justify-between text-sm">
                <span className="font-bold text-[#18211e]">Remaining Cost:</span>
                <span className="font-bold text-base text-[#183b2b] font-mono">৳{remainingCost}</span>
              </div>
            </div>

            <Button
              variant="primary"
              className="w-full text-xs shadow-xs"
              onClick={() => {
                alert("Purchased items moved to Pantry Inventory!");
                setItems((prev) => prev.filter((i) => !i.isChecked));
              }}
            >
              Complete Shopping & Move to Pantry
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
