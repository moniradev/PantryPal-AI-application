"use client";

import React, { useState } from "react";
import { X, Plus, Calendar, MapPin, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AddIngredientModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (item: any) => void;
}

export function AddIngredientModal({
  isOpen,
  onClose,
  onAdd,
}: AddIngredientModalProps) {
  const [name, setName] = useState("");
  const [nameBn, setNameBn] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [unit, setUnit] = useState("kg");
  const [category, setCategory] = useState("vegetables");
  const [storage, setStorage] = useState("pantry");
  const [expiry, setExpiry] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    onAdd({
      id: crypto.randomUUID(),
      name,
      nameBn: nameBn || name,
      quantity,
      unit,
      category,
      location: storage,
      expiry: expiry || "2026-12-31",
      status: "safe",
    });

    onClose();
    setName("");
    setNameBn("");
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl border border-[#e5dfd5] w-full max-w-lg p-6 shadow-xl relative animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between pb-4 border-b border-[#f3efe8]">
          <div>
            <h3 className="font-bold text-lg text-[#183b2b]">
              Add New Ingredient (উপাদান যোগ করুন)
            </h3>
            <p className="text-xs text-[#5e6b65]">
              Add manually to your kitchen inventory with local measurement units.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-[#faf7f2] text-[#5e6b65] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 pt-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="font-semibold text-[#18211e] block mb-1">
                Name (English)
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Red Onion"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#faf7f2] border border-[#e5dfd5] rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#183b2b]/20 focus:border-[#183b2b]"
              />
            </div>
            <div>
              <label className="font-semibold text-[#18211e] block mb-1">
                Name (বাংলা নাম)
              </label>
              <input
                type="text"
                placeholder="যেমন: পেঁয়াজ"
                value={nameBn}
                onChange={(e) => setNameBn(e.target.value)}
                className="w-full bg-[#faf7f2] border border-[#e5dfd5] rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#183b2b]/20 focus:border-[#183b2b]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-semibold text-[#18211e] block mb-1">Quantity</label>
              <input
                type="number"
                step="0.1"
                required
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full bg-[#faf7f2] border border-[#e5dfd5] rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#183b2b]/20"
              />
            </div>
            <div>
              <label className="font-semibold text-[#18211e] block mb-1">Unit (একক)</label>
              <select
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                className="w-full bg-[#faf7f2] border border-[#e5dfd5] rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#183b2b]/20"
              >
                <option value="kg">kg (কেজি)</option>
                <option value="g">gram (গ্রাম)</option>
                <option value="L">Litre (লিটার)</option>
                <option value="ml">ml (মিলি)</option>
                <option value="pcs">Pieces (টি)</option>
                <option value="hali">Hali / 4 pcs (হালি)</option>
                <option value="bunch">Bunch (আঁটি)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-semibold text-[#18211e] block mb-1">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-[#faf7f2] border border-[#e5dfd5] rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#183b2b]/20"
              >
                <option value="vegetables">Vegetables (শাকসবজি)</option>
                <option value="grains">Grains & Staples (চাল-ডাল)</option>
                <option value="dairy">Dairy & Eggs (দুধ ও ডিম)</option>
                <option value="meat">Meat & Poultry (মাংস)</option>
                <option value="fish">Fish & Seafood (মাছ)</option>
                <option value="spices">Spices (মসলা)</option>
                <option value="oils">Oils & Ghee (তেল-ঘি)</option>
              </select>
            </div>
            <div>
              <label className="font-semibold text-[#18211e] block mb-1">Storage Location</label>
              <select
                value={storage}
                onChange={(e) => setStorage(e.target.value)}
                className="w-full bg-[#faf7f2] border border-[#e5dfd5] rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#183b2b]/20"
              >
                <option value="pantry">Dry Pantry Cabinet</option>
                <option value="refrigerator">Refrigerator (ফ্রিজ)</option>
                <option value="freezer">Deep Freezer (ডিপ ফ্রিজ)</option>
                <option value="countertop">Kitchen Countertop</option>
              </select>
            </div>
          </div>

          <div>
            <label className="font-semibold text-[#18211e] block mb-1">
              Estimated Expiry Date (মেয়াদ শেষ হওয়ার তারিখ)
            </label>
            <input
              type="date"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              className="w-full bg-[#faf7f2] border border-[#e5dfd5] rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#183b2b]/20"
            />
          </div>

          <div className="pt-4 border-t border-[#f3efe8] flex items-center justify-end gap-2.5">
            <Button type="button" variant="ghost" onClick={onClose} size="sm">
              Cancel
            </Button>
            <Button type="submit" variant="primary" size="sm" className="gap-1.5 shadow-xs">
              <Plus className="w-3.5 h-3.5" />
              <span>Save to Pantry</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
