import Link from "next/link";
import Image from "next/image";
import {
  Leaf,
  ArrowRight,
  Refrigerator,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Scan,
  ShieldCheck,
  PackageCheck,
  ChevronRight,
  Layers,
  Database,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function PantryTrackingPage() {
  const pantryStaples = [
    {
      name: "Miniket Rice (মিনিকেট চাল)",
      category: "Grains & Rice",
      qty: "5 kg",
      status: "Safe",
      shelfLife: "60 days left",
      badgeColor: "bg-[#d8e8dc] text-[#183b2b] border-[#c2ddc8]",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Masoor Dal (মসুর ডাল)",
      category: "Lentils & Pulses",
      qty: "1.5 kg",
      status: "Safe",
      shelfLife: "45 days left",
      badgeColor: "bg-[#d8e8dc] text-[#183b2b] border-[#c2ddc8]",
      image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Farm Eggs (ডিম)",
      category: "Poultry & Dairy",
      qty: "8 pcs (2 hali)",
      status: "Expiring Soon",
      shelfLife: "2 days left",
      badgeColor: "bg-[#fee2e2] text-[#991b1b] border-[#fecaca]",
      image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Radhuni Pure Mustard Oil (সরিষার তেল)",
      category: "Oils & Ghee",
      qty: "1 L",
      status: "Safe",
      shelfLife: "90 days left",
      badgeColor: "bg-[#d8e8dc] text-[#183b2b] border-[#c2ddc8]",
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Fresh Tomatoes (টমেটো)",
      category: "Fresh Produce",
      qty: "750 g",
      status: "Expiring Soon",
      shelfLife: "1 day left",
      badgeColor: "bg-[#fee2e2] text-[#991b1b] border-[#fecaca]",
      image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Green Chili (কাঁচা মরিচ)",
      category: "Produce & Spices",
      qty: "200 g",
      status: "Use Soon",
      shelfLife: "4 days left",
      badgeColor: "bg-[#fef3c7] text-[#92400e] border-[#fde68a]",
      image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#18211e] flex flex-col justify-between selection:bg-[#d8e8dc] selection:text-[#183b2b]">
      {/* Editorial Top Bar */}
      <header className="h-20 border-b border-[#e5dfd5] px-6 md:px-12 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#183b2b] flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
            <Leaf className="w-5 h-5 text-[#d8e8dc]" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-tight text-[#183b2b] leading-tight">
              PantryPal<span className="text-[#52796f] font-normal ml-0.5">AI</span>
            </span>
            <span className="text-[10px] font-semibold tracking-wider uppercase text-[#5e6b65]">
              Dhaka Kitchen Lab
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#5e6b65]">
          <Link href="/pantry-tracking" className="text-[#183b2b] border-b-2 border-[#183b2b] pb-0.5">
            Pantry Tracking
          </Link>
          <Link href="/zero-waste-ai" className="hover:text-[#183b2b] transition-colors">
            Zero-Waste AI
          </Link>
          <Link href="/bdt-grocery-budget" className="hover:text-[#183b2b] transition-colors">
            BDT Grocery Budget
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login">
            <Button size="sm" variant="ghost" className="text-xs font-semibold">
              Sign In
            </Button>
          </Link>
          <Link href="/pantry">
            <Button size="sm" variant="primary" className="text-xs font-semibold gap-2 shadow-xs">
              <span>Open Pantry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-16 pb-16 px-6 md:px-12 max-w-6xl mx-auto">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d8e8dc] text-[#143525] text-xs font-semibold tracking-wide border border-[#bed7c5]">
              <Refrigerator className="w-3.5 h-3.5 text-[#183b2b]" />
              Real-Time Kitchen Inventory Management
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#183b2b] leading-[1.1]">
              Pantry Tracking for Bangladeshi Kitchens
            </h1>

            <p className="text-base sm:text-lg text-[#5e6b65] leading-relaxed">
              Track spices, grains, produce, and dairy before they spoil. Built with authentic local measurements—<strong className="text-[#183b2b]">hali (হালি)</strong>, <strong className="text-[#183b2b]">kg</strong>, <strong className="text-[#183b2b]">g</strong>, and <strong className="text-[#183b2b]">bunch</strong>—with automated shelf life warnings.
            </p>

            <div className="pt-3 flex flex-wrap gap-3">
              <Link href="/pantry">
                <Button size="lg" variant="primary" className="gap-2 shadow-sm text-sm">
                  <span>Manage Pantry Inventory</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button size="lg" variant="outline" className="border-[#e5dfd5] text-sm">
                  View Kitchen Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Live Inventory Preview Grid */}
        <section className="pb-20 px-6 md:px-12 max-w-6xl mx-auto">
          <div className="border border-[#e5dfd5] bg-white rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#f3efe8]">
              <div>
                <h2 className="text-xl font-bold text-[#183b2b]">Active Pantry Items</h2>
                <p className="text-xs text-[#5e6b65]">Real-time shelf life monitoring with expiration countdowns</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2.5 py-1 rounded-full bg-[#fee2e2] text-[#991b1b] font-semibold border border-[#fecaca] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#ef4444] animate-pulse"></span>
                  2 Items Expiring Soon
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-[#d8e8dc] text-[#183b2b] font-semibold border border-[#c2ddc8]">
                  4 Safe
                </span>
              </div>
            </div>

            {/* Pantry Items Bento */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {pantryStaples.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl border border-[#e5dfd5] bg-[#faf8f5] hover:border-[#183b2b]/30 transition-all space-y-3 group"
                >
                  <div className="relative h-32 w-full rounded-xl overflow-hidden bg-[#e5dfd5]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border shadow-xs ${item.badgeColor}`}>
                        {item.shelfLife}
                      </span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-semibold text-[#8c9993] uppercase tracking-wider block">
                      {item.category}
                    </span>
                    <h3 className="font-bold text-sm text-[#183b2b] leading-tight">
                      {item.name}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#ede8e0] text-xs">
                    <span className="text-[#5e6b65]">Quantity:</span>
                    <span className="font-bold text-[#183b2b]">{item.qty}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Action Banner */}
            <div className="p-5 rounded-2xl bg-[#edf7f0] border border-[#d8f3dc] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#183b2b] text-white flex items-center justify-center shrink-0">
                  <Scan className="w-5 h-5 text-[#d8e8dc]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#183b2b]">AI Fridge & Countertop Scanner</h4>
                  <p className="text-xs text-[#406852]">Snap a photo of your fridge or bazaar bags to log ingredients automatically.</p>
                </div>
              </div>
              <Link href="/pantry">
                <Button size="sm" variant="primary" className="whitespace-nowrap gap-1.5 shadow-xs">
                  <span>Open Scanner</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#e5dfd5] bg-white py-8 px-6 md:px-12 text-center text-xs text-[#8c9993]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-[#183b2b] flex items-center justify-center text-white">
              <Leaf className="w-3.5 h-3.5 text-[#d8e8dc]" />
            </div>
            <span className="font-bold text-[#183b2b]">PantryPal AI</span>
            <span>— Smart Kitchen & Food Operations for Monira Akter</span>
          </div>
          <div className="flex items-center gap-4 text-[#5e6b65]">
            <Link href="/" className="hover:text-[#183b2b]">Home</Link>
            <Link href="/pantry" className="hover:text-[#183b2b]">Pantry</Link>
            <Link href="/zero-waste-ai" className="hover:text-[#183b2b]">Zero-Waste AI</Link>
            <Link href="/bdt-grocery-budget" className="hover:text-[#183b2b]">BDT Budget</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
