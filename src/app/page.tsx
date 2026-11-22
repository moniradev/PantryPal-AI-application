import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Refrigerator,
  Leaf,
  Layers,
  ChefHat,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1f2924] flex flex-col justify-between">
      {/* Top Navbar */}
      <header className="h-20 border-b border-[#e7e2d9] px-6 md:px-12 flex items-center justify-between bg-white/70 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#1b4332] flex items-center justify-center text-white shadow-sm">
            <Leaf className="w-5 h-5 text-[#d8f3dc]" />
          </div>
          <span className="font-bold text-xl text-[#1b4332] tracking-tight">
            PantryPal<span className="text-[#52796f]">AI</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4b5563]">
          <a href="#features" className="hover:text-[#1b4332] transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-[#1b4332] transition-colors">How It Works</a>
          <a href="#bangladesh" className="hover:text-[#1b4332] transition-colors">BD Intelligence</a>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/dashboard">
            <Button size="sm" variant="primary" className="gap-2 shadow-sm font-semibold">
              <span>Go to Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="py-20 md:py-28 px-6 md:px-12 max-w-6xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d8f3dc] text-[#1b4332] text-xs font-semibold tracking-wide border border-[#b7e4c7]">
            <Sparkles className="w-4 h-4 text-[#1b4332]" />
            Your Intelligent Kitchen, Powered by AI
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#1b4332] leading-tight">
            Stop Guessing What to Cook. <br />
            <span className="text-[#52796f]">Manage Your Food Like a Pro.</span>
          </h1>

          <p className="text-base md:text-lg text-[#4b5563] max-w-2xl mx-auto leading-relaxed">
            PantryPal AI is a full-stack smart kitchen management platform designed for Bangladeshi households, students, and busy professionals. Track pantry inventory, reduce food waste, and get instant localized recipe suggestions in BDT.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/dashboard">
              <Button size="lg" variant="primary" className="w-full sm:w-auto gap-2 px-8">
                <span>Open Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/pantry">
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-6">
                Explore Smart Pantry
              </Button>
            </Link>
          </div>

          {/* Quick Pillars */}
          <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-2xl border border-[#e7e2d9] shadow-2xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#edf7f0] text-[#1b4332] flex items-center justify-center font-bold">
                <Refrigerator className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#1f2924]">Smart Pantry Tracking</h3>
              <p className="text-xs text-[#6b7280]">
                Never let ingredients expire. Automatic color-coded freshness alerts and low-stock reminders.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#e7e2d9] shadow-2xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#edf7f0] text-[#1b4332] flex items-center justify-center font-bold">
                <ChefHat className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#1f2924]">Inventory-Aware Recipes</h3>
              <p className="text-xs text-[#6b7280]">
                Gemini AI crafts dishes using what you already own. Prioritizes items near expiration to achieve zero food waste.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#e7e2d9] shadow-2xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#edf7f0] text-[#1b4332] flex items-center justify-center font-bold">
                <Wallet className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#1f2924]">BDT Budget Optimization</h3>
              <p className="text-xs text-[#6b7280]">
                Track grocery spending in Bangladeshi Taka (৳). Generates smart shopping checklists that fit your weekly budget.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#e7e2d9] bg-white py-6 px-6 md:px-12 text-center text-xs text-[#6b7280]">
        <p>© 2026 PantryPal AI • Production-grade Food Management Platform • Powered by Next.js & Gemini</p>
      </footer>
    </div>
  );
}
