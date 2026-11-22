"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Filter, Camera, ArrowUpDown, Trash2, Edit } from "lucide-react";
import { AddIngredientModal } from "@/components/pantry/AddIngredientModal";
import { ScanFridgeModal } from "@/components/ai/ScanFridgeModal";

const initialPantryItems = [
  { id: "1", name: "Miniket Rice", nameBn: "মিনিকেট চাল", quantity: "5", unit: "kg", category: "Grains", expiry: "2026-12-30", status: "safe", location: "Pantry" },
  { id: "2", name: "Masoor Dal", nameBn: "মসুর ডাল", quantity: "1.2", unit: "kg", category: "Grains", expiry: "2026-12-15", status: "safe", location: "Pantry" },
  { id: "3", name: "Red Onion", nameBn: "দেশি পেঁয়াজ", quantity: "1.5", unit: "kg", category: "Vegetables", expiry: "2026-11-28", status: "soon", location: "Countertop" },
  { id: "4", name: "Fresh Tomatoes", nameBn: "দেশি টমেটো", quantity: "800", unit: "g", category: "Vegetables", expiry: "2026-11-23", status: "urgent", location: "Refrigerator" },
  { id: "5", name: "Fresh Milk", nameBn: "দুধ", quantity: "1.5", unit: "L", category: "Dairy & Eggs", expiry: "2026-11-24", status: "soon", location: "Refrigerator" },
  { id: "6", name: "Farm Eggs", nameBn: "ফার্মের ডিম", quantity: "8", unit: "pcs", category: "Dairy & Eggs", expiry: "2026-12-05", status: "safe", location: "Refrigerator" },
  { id: "7", name: "Mustard Oil", nameBn: "সরিষার তেল", quantity: "500", unit: "ml", category: "Oils", expiry: "2027-01-10", status: "safe", location: "Pantry" },
  { id: "8", name: "Coriander Leaves", nameBn: "ধনেপাতা", quantity: "1", unit: "bunch", category: "Vegetables", expiry: "2026-11-24", status: "soon", location: "Refrigerator" },
  { id: "9", name: "Potato", nameBn: "আলু", quantity: "3", unit: "kg", category: "Vegetables", expiry: "2026-12-20", status: "safe", location: "Pantry" },
  { id: "10", name: "Green Chili", nameBn: "কাঁচামরিচ", quantity: "200", unit: "g", category: "Vegetables", expiry: "2026-11-29", status: "safe", location: "Refrigerator" },
];

export default function PantryPage() {
  const [items, setItems] = useState(initialPantryItems);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isScanModalOpen, setIsScanModalOpen] = useState(false);

  const handleAddItem = (newItem: any) => {
    setItems((prev) => [newItem, ...prev]);
  };

  const handleAddBatch = (scannedItems: any[]) => {
    setItems((prev) => [...scannedItems, ...prev]);
  };

  const handleDeleteItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.nameBn.toLowerCase().includes(search.toLowerCase());
    const matchesCat =
      selectedCategory === "all" ||
      item.category.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCat;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-[#183b2b]">
            My Pantry ({items.length} Items)
          </h2>
          <p className="text-xs md:text-sm text-[#5e6b65]">
            Real-time food inventory with expiry countdowns, storage locations, and local measurement units.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setIsScanModalOpen(true)}
            className="gap-2 border border-[#bed7c5]"
          >
            <Camera className="w-4 h-4 text-[#183b2b]" />
            <span>Scan Fridge / Photo</span>
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={() => setIsAddModalOpen(true)}
            className="gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>Add Ingredient</span>
          </Button>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <Card className="p-4">
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#8c9993] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search (e.g. Rice, চাল, ডিম)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#faf7f2] border border-[#e5dfd5] rounded-xl pl-9 pr-4 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-[#183b2b]/20 focus:border-[#183b2b]"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto">
            {["all", "grains", "vegetables", "dairy"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-3 py-1.5 rounded-xl capitalize font-medium transition-colors ${
                  selectedCategory === cat
                    ? "bg-[#183b2b] text-white"
                    : "bg-[#faf7f2] text-[#5e6b65] hover:bg-[#f3efe8]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </Card>

      {/* Pantry Inventory Table */}
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#faf7f2] border-b border-[#e5dfd5] text-[#5e6b65] font-semibold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="p-4">Ingredient Name</th>
                <th className="p-4">Category</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Storage</th>
                <th className="p-4">Expiry Date</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f3efe8]">
              {filteredItems.map((item) => (
                <tr key={item.id} className="hover:bg-[#faf7f2]/70 transition-colors">
                  <td className="p-4 font-semibold text-[#18211e]">
                    {item.name}{" "}
                    <span className="text-[#5e6b65] font-normal">({item.nameBn})</span>
                  </td>
                  <td className="p-4 text-[#5e6b65]">{item.category}</td>
                  <td className="p-4 font-medium text-[#18211e] font-mono">
                    {item.quantity} {item.unit}
                  </td>
                  <td className="p-4 text-[#5e6b65]">{item.location}</td>
                  <td className="p-4 text-[#5e6b65] font-mono">{item.expiry}</td>
                  <td className="p-4">
                    {item.status === "urgent" ? (
                      <Badge variant="destructive">Expiring in 24h</Badge>
                    ) : item.status === "soon" ? (
                      <Badge variant="warning">Use Soon</Badge>
                    ) : (
                      <Badge variant="success">Fresh</Badge>
                    )}
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        onClick={() => handleDeleteItem(item.id)}
                        className="p-1.5 text-[#5e6b65] hover:text-[#b93828] rounded-lg hover:bg-white transition-colors"
                        title="Delete ingredient"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Modals */}
      <AddIngredientModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddItem}
      />
      <ScanFridgeModal
        isOpen={isScanModalOpen}
        onClose={() => setIsScanModalOpen(false)}
        onConfirmAdd={handleAddBatch}
      />
    </div>
  );
}
