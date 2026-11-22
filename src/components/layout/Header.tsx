"use client";

import React, { useState } from "react";
import { Search, Bell, Globe, Sparkles, Plus } from "lucide-react";
import { Button } from "@/lib/../components/ui/button";

export function Header() {
  const [lang, setLang] = useState<"en" | "bn">("en");

  return (
    <header className="h-16 bg-white/80 backdrop-blur-md border-b border-[#e7e2d9] px-6 flex items-center justify-between sticky top-0 z-20">
      {/* Search Input with Shortcut */}
      <div className="relative w-80 max-w-full">
        <Search className="w-4 h-4 text-[#9ca3af] absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search ingredients, recipes, meals..."
          className="w-full bg-[#faf8f5] border border-[#e7e2d9] rounded-xl pl-9 pr-12 py-1.5 text-xs text-[#1f2924] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#2d6a4f]/20 focus:border-[#2d6a4f] transition-all"
        />
        <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-[#9ca3af] bg-white border border-[#e7e2d9] rounded px-1.5 py-0.5">
          ⌘K
        </span>
      </div>

      {/* Header Actions */}
      <div className="flex items-center gap-3">
        {/* Language Switcher */}
        <button
          onClick={() => setLang(lang === "en" ? "bn" : "en")}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-[#e7e2d9] bg-white text-xs font-medium text-[#4b5563] hover:bg-[#faf8f5] hover:text-[#1b4332] transition-colors"
          title="Toggle Language"
        >
          <Globe className="w-3.5 h-3.5 text-[#52796f]" />
          <span>{lang === "en" ? "English (EN)" : "বাংলা (BN)"}</span>
        </button>

        {/* Currency & Region Badge */}
        <div className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-[#edf7f0] border border-[#d8f3dc] text-xs font-semibold text-[#1b4332]">
          <span>৳ BDT</span>
          <span className="text-[10px] font-normal text-[#52796f]">| Dhaka</span>
        </div>

        {/* Notifications */}
        <button className="relative p-2 rounded-xl border border-[#e7e2d9] bg-white text-[#4b5563] hover:text-[#1b4332] hover:bg-[#faf8f5] transition-colors">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#e63946] rounded-full ring-2 ring-white"></span>
        </button>

        {/* Quick Add Button */}
        <Button size="sm" variant="primary" className="gap-1.5 shadow-xs">
          <Plus className="w-3.5 h-3.5" />
          <span>Add Item</span>
        </Button>
      </div>
    </header>
  );
}
