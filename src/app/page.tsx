import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  Refrigerator,
  Leaf,
  ChefHat,
  Wallet,
  Clock,
  Scan,
  CheckCircle2,
  ListTodo,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function LandingPage() {
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
          <Link href="/pantry-tracking" className="hover:text-[#183b2b] transition-colors">
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
          <Link href="/dashboard">
            <Button size="sm" variant="primary" className="text-xs font-semibold gap-2 shadow-xs">
              <span>Open Dashboard</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="pt-16 pb-20 px-6 md:px-12 max-w-6xl mx-auto">
          {/* Eyebrow & Specific Headline */}
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d8e8dc] text-[#143525] text-xs font-semibold tracking-wide border border-[#bed7c5]">
              <Sparkles className="w-3.5 h-3.5 text-[#183b2b]" />
              Built for Bangladeshi Kitchens & Budget Management
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#183b2b] leading-[1.08]">
              Know what’s in your pantry, what expires first, and what dinner costs tonight in Dhaka.
            </h1>

            <p className="text-base sm:text-lg text-[#5e6b65] leading-relaxed max-w-2xl font-normal">
              Most meal apps assume foreign supermarkets and western recipes. PantryPal AI tracks real local staples—Miniket rice, masoor dal, farm eggs, mustard oil—alerts you before produce spoils, and cooks within your monthly BDT budget.
            </p>

            {/* Direct CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link href="/dashboard">
                <Button size="lg" variant="primary" className="w-full sm:w-auto px-7 py-3 text-sm font-semibold gap-2.5 shadow-sm">
                  <span>Launch Live Kitchen Workspace</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/pantry">
                <Button size="lg" variant="outline" className="w-full sm:w-auto px-6 py-3 text-sm font-semibold border-[#e5dfd5]">
                  View Active Pantry Inventory
                </Button>
              </Link>
            </div>
          </div>

          {/* Asymmetric Bento Grid (Replaces the generic three-card row) */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Bento 1: Large Featured Card with Real Kitchen Photography (7 cols) */}
            <div className="md:col-span-7 bg-white rounded-3xl border border-[#e5dfd5] p-6 sm:p-8 flex flex-col justify-between shadow-xs overflow-hidden relative group">
              <div className="space-y-3 z-10 max-w-lg">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#f3efe8] text-[#183b2b] text-xs font-semibold">
                  <ChefHat className="w-4 h-4 text-[#183b2b]" />
                  Zero-Waste AI Engine
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-[#183b2b]">
                  Cook 100% with what you have. No emergency grocery runs.
                </h3>
                <p className="text-xs sm:text-sm text-[#5e6b65] leading-relaxed">
                  Our Gemini model evaluates items approaching expiry (fresh tomatoes, coriander, milk) and pairs them with pantry staples like rice and lentils to generate complete Bengali recipes with step-by-step instructions.
                </p>
              </div>

              {/* Real Food Visual Showcase */}
              <div className="mt-6 pt-5 border-t border-[#f3efe8] flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#183b2b]/5 overflow-hidden shrink-0 border border-[#e5dfd5]">
                    <img
                      src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=120&q=80"
                      alt="Fresh ingredients"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-[#18211e]">Tonight's Matched Dish</p>
                    <p className="text-[#5e6b65] text-[11px]">Egg Curry & Steamed Miniket Rice • ৳85 est.</p>
                  </div>
                </div>
                <Badge variant="sage" className="font-mono text-xs">
                  100% In-Stock
                </Badge>
              </div>
            </div>

            {/* Bento 2: Expiry Radar Card (5 cols) */}
            <div className="md:col-span-5 bg-[#183b2b] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xs relative overflow-hidden">
              <div className="space-y-4 z-10">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-md text-[#d8e8dc] text-xs font-semibold">
                  <AlertCircle className="w-4 h-4 text-[#d8e8dc]" />
                  Realtime Expiration Radar
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-white">
                  3 items require immediate cooking.
                </h3>
                <p className="text-xs text-[#d8e8dc]/80 leading-relaxed">
                  Stop throwing away wilted greens and curdled milk. Get high-priority reminders 48 hours before estimated shelf-life ends.
                </p>
              </div>

              <div className="mt-6 space-y-2 z-10">
                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs">
                  <span className="font-medium text-white">Fresh Tomatoes (টমেটো)</span>
                  <span className="font-mono text-xs text-[#fde68a] bg-black/20 px-2 py-0.5 rounded">Expires in 24h</span>
                </div>
                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs">
                  <span className="font-medium text-white">Liquid Milk (দুধ)</span>
                  <span className="font-mono text-xs text-[#fde68a] bg-black/20 px-2 py-0.5 rounded">Expires in 48h</span>
                </div>
              </div>
            </div>

            {/* Bento 3: BDT Local Currency & Price Optimizer (4 cols) */}
            <div className="md:col-span-4 bg-white rounded-3xl border border-[#e5dfd5] p-6 flex flex-col justify-between shadow-xs">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#edf5ef] text-[#183b2b] flex items-center justify-center">
                  <Wallet className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-base text-[#18211e]">BDT Grocery Budget</h4>
                <p className="text-xs text-[#5e6b65] leading-relaxed">
                  Track weekly shopping costs in Bangladeshi Taka. Avoid duplicate purchases with automatic pantry sync.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#f3efe8]">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#5e6b65]">November Pacing:</span>
                  <span className="font-bold text-sm text-[#183b2b] font-mono">৳2,450 / ৳8,000</span>
                </div>
              </div>
            </div>

            {/* Bento 4: Automated Shopping Checklist (4 cols) */}
            <div className="md:col-span-4 bg-white rounded-3xl border border-[#e5dfd5] p-6 flex flex-col justify-between shadow-xs">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#edf5ef] text-[#183b2b] flex items-center justify-center">
                  <ListTodo className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-base text-[#18211e]">Intelligent Bazar List</h4>
                <p className="text-xs text-[#5e6b65] leading-relaxed">
                  Only buy what your upcoming meals actually require. Aggregates deficits directly from planned lunch & dinner menus.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#f3efe8]">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#183b2b]">
                  <CheckCircle2 className="w-4 h-4 text-[#2d7a54]" />
                  <span>4 deficits auto-queued</span>
                </div>
              </div>
            </div>

            {/* Bento 5: Gemini Multimodal Vision (4 cols) */}
            <div className="md:col-span-4 bg-white rounded-3xl border border-[#e5dfd5] p-6 flex flex-col justify-between shadow-xs">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#edf5ef] text-[#183b2b] flex items-center justify-center">
                  <Scan className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-base text-[#18211e]">Gemini Fridge Scanner</h4>
                <p className="text-xs text-[#5e6b65] leading-relaxed">
                  Snap a photo of your countertop, fridge shelves, or grocery receipt. Gemini detects ingredients with confidence scores.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#f3efe8]">
                <span className="text-xs font-semibold text-[#52796f]">
                  Multimodal 1.5 & 2.0 Flash Integration
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Clean Utility Footer (No fake testimonials or builder leftovers) */}
      <footer className="border-t border-[#e5dfd5] bg-white py-6 px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between text-xs text-[#5e6b65] gap-3">
        <div className="flex items-center gap-2">
          <Leaf className="w-4 h-4 text-[#183b2b]" />
          <span className="font-semibold text-[#183b2b]">PantryPal AI</span>
          <span>• Production Food Operations for Dhaka & Beyond</span>
        </div>
        <p className="text-[11px] text-[#8c9993]">
          TypeScript • Next.js App Router • Supabase PostgreSQL • Gemini AI
        </p>
      </footer>
    </div>
  );
}
