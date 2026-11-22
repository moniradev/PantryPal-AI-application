"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Filter, Camera, ArrowUpDown, Trash2, Edit } from "lucide-react";
import { AddIngredientModal } from "@/components/pantry/AddIngredientModal";
import { ScanFridgeModal } from "@/components/ai/ScanFridgeModal";

const initialPantryItems = [
  {
    id: "1",
    name: "Miniket Rice",
    nameBn: "মিনিকেট চাল",
    quantity: "5",
    unit: "kg",
    category: "Grains",
    expiry: "2026-12-30",
    status: "safe",
    location: "Pantry",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=120&q=80",
  },
  {
    id: "2",
    name: "Masoor Dal",
    nameBn: "মসুর ডাল",
    quantity: "1.2",
    unit: "kg",
    category: "Grains",
    expiry: "2026-12-15",
    status: "safe",
    location: "Pantry",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=120&q=80",
  },
  {
    id: "3",
    name: "Red Onion",
    nameBn: "দেশি পেঁয়াজ",
    quantity: "1.5",
    unit: "kg",
    category: "Vegetables",
    expiry: "2026-11-28",
    status: "soon",
    location: "Countertop",
    image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=120&q=80",
  },
  {
    id: "4",
    name: "Fresh Tomatoes",
    nameBn: "দেশি টমেটো",
    quantity: "800",
    unit: "g",
    category: "Vegetables",
    expiry: "2026-11-23",
    status: "urgent",
    location: "Refrigerator",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=120&q=80",
  },
  {
    id: "5",
    name: "Fresh Milk",
    nameBn: "তরল দুধ",
    quantity: "1.5",
    unit: "L",
    category: "Dairy & Eggs",
    expiry: "2026-11-24",
    status: "soon",
    location: "Refrigerator",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=120&q=80",
  },
  {
    id: "6",
    name: "Farm Eggs",
    nameBn: "ফার্মের ডিম",
    quantity: "8",
    unit: "pcs",
    category: "Dairy & Eggs",
    expiry: "2026-12-05",
    status: "safe",
    location: "Refrigerator",
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=120&q=80",
  },
  {
    id: "7",
    name: "Mustard Oil",
    nameBn: "সরিষার তেল",
    quantity: "500",
    unit: "ml",
    category: "Oils",
    expiry: "2027-01-10",
    status: "safe",
    location: "Pantry",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=120&q=80",
  },
  {
    id: "8",
    name: "Coriander Leaves",
    nameBn: "ধনেপাতা",
    quantity: "1",
    unit: "bunch",
    category: "Vegetables",
    expiry: "2026-11-24",
    status: "soon",
    location: "Refrigerator",
    image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=120&q=80",
  },
  {
    id: "9",
    name: "Potato",
    nameBn: "গোল আলু",
    quantity: "3",
    unit: "kg",
    category: "Vegetables",
    expiry: "2026-12-20",
    status: "safe",
    location: "Pantry",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=120&q=80",
  },
  {
    id: "10",
    name: "Green Chili",
    nameBn: "কাঁচামরিচ",
    quantity: "200",
    unit: "g",
    category: "Vegetables",
    expiry: "2026-11-29",
    status: "safe",
    location: "Refrigerator",
    image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=120&q=80",
  },
];

export default function PantryPage() {
  const [items, setItems] = useState(initialPantryItems);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isScanModalOpen, setIsScanModalOpen] = useState(false);

  const handleAddItem = (newItem: any) => {
    const itemWithImage = {
      ...newItem,
      image:
        newItem.image ||
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=120&q=80",
    };
    setItems((prev) => [itemWithImage, ...prev]);
  };

  const handleAddBatch = (scannedItems: any[]) => {
    const batchWithImages = scannedItems.map((item) => ({
      ...item,
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=120&q=80",
    }));
    setItems((prev) => [...batchWithImages, ...prev]);
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
            Monira Akter's Pantry ({items.length} Stocked Items)
          </h2>
          <p className="text-xs md:text-sm text-[#5e6b65]">
            Real-time food inventory with high-resolution imagery, shelf life alarms, and local Bangladeshi units.
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
            className="gap-2 shadow-xs"
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
              placeholder="Search (e.g. Rice, চাল, ডিম, তেল)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#faf7f2] border border-[#e5dfd5] rounded-xl pl-9 pr-4 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-[#183b2b]/20 focus:border-[#183b2b]"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto">
            {["all", "grains", "vegetables", "dairy", "oils"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-3 py-1.5 rounded-xl capitalize font-semibold transition-colors ${
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

      {/* Pantry Inventory Table with Real Imagery */}
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#faf7f2] border-b border-[#e5dfd5] text-[#5e6b65] font-semibold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="p-4">Item & Photo</th>
                <th className="p-4">Category</th>
                <th className="p-4">Stock Quantity</th>
                <th className="p-4">Storage Zone</th>
                <th className="p-4">Estimated Expiry</th>
                <th className="p-4">Freshness Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f3efe8]">
              {filteredItems.map((item) => (
                <tr key={item.id} className="hover:bg-[#faf7f2]/70 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-[#e5dfd5] bg-[#faf7f2]">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-[#18211e] text-xs sm:text-sm">
                          {item.name}
                        </p>
                        <p className="text-[11px] text-[#5e6b65]">{item.nameBn}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-[#5e6b65] font-medium">{item.category}</td>
                  <td className="p-4 font-bold text-[#18211e] font-mono">
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
                        className="p-1.5 text-[#8c9993] hover:text-[#b93828] rounded-lg hover:bg-white transition-colors"
                        title="Delete ingredient"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Interactive Modals */}
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
