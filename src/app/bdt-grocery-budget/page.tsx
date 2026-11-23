import Link from "next/link";
import Image from "next/image";
import {
  Leaf,
  ArrowRight,
  Wallet,
  TrendingDown,
  TrendingUp,
  Receipt,
  ShoppingCart,
  CheckCircle2,
  PieChart,
  DollarSign,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function BdtGroceryBudgetPage() {
  const expenseCategories = [
    {
      name: "Fresh Kacha Bazaar (কাঁচাবাজার)",
      allocated: "৳4,500",
      spent: "৳3,150",
      pct: 70,
      description: "Local seasonal vegetables, fresh river fish, farm chicken, green chili, and coriander.",
      color: "bg-[#183b2b]",
    },
    {
      name: "Grains & Pulses (চাল ও ডাল)",
      allocated: "৳2,200",
      spent: "৳1,650",
      pct: 75,
      description: "Miniket rice sack (25kg share), masoor dal, mug dal, and local chola.",
      color: "bg-[#52796f]",
    },
    {
      name: "Oils, Spices & Pantry (তেল ও মসলা)",
      allocated: "৳1,800",
      spent: "৳1,280",
      pct: 71,
      description: "Radhuni mustard oil, soybean oil, turmeric, cumin powder, garlic, and ginger.",
      color: "bg-[#84a98c]",
    },
    {
      name: "Dairy & Farm Eggs (দুধ ও ডিম)",
      allocated: "৳1,500",
      spent: "৳1,120",
      pct: 74,
      description: "Pasteurized liquid milk, Aarong ghee, and farm-fresh brown eggs (ডিম).",
      color: "bg-[#a3b18a]",
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
          <Link href="/pantry-tracking" className="hover:text-[#183b2b] transition-colors">
            Pantry Tracking
          </Link>
          <Link href="/zero-waste-ai" className="hover:text-[#183b2b] transition-colors">
            Zero-Waste AI
          </Link>
          <Link href="/bdt-grocery-budget" className="text-[#183b2b] border-b-2 border-[#183b2b] pb-0.5">
            BDT Grocery Budget
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login">
            <Button size="sm" variant="ghost" className="text-xs font-semibold">
              Sign In
            </Button>
          </Link>
          <Link href="/budget">
            <Button size="sm" variant="primary" className="text-xs font-semibold gap-2 shadow-xs">
              <span>Open Budget</span>
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
              <Wallet className="w-3.5 h-3.5 text-[#183b2b]" />
              Dhaka Grocery & Local Market Financial Control
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#183b2b] leading-[1.1]">
              BDT Grocery Budget & Expense Intelligence
            </h1>

            <p className="text-base sm:text-lg text-[#5e6b65] leading-relaxed">
              Track daily grocery receipts in Bangladeshi Taka (৳). Set monthly spending ceilings, compare local neighborhood bazaar prices with supermarket rates, and prevent impulsive grocery runs with intelligent pantry checks.
            </p>

            <div className="pt-3 flex flex-wrap gap-3">
              <Link href="/budget">
                <Button size="lg" variant="primary" className="gap-2 shadow-sm text-sm">
                  <span>Track Monthly Budget</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/grocery">
                <Button size="lg" variant="outline" className="border-[#e5dfd5] text-sm">
                  Manage Smart Grocery List
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Budget Overview Card */}
        <section className="pb-20 px-6 md:px-12 max-w-6xl mx-auto">
          <div className="border border-[#e5dfd5] bg-white rounded-3xl p-6 sm:p-8 shadow-xs space-y-8">
            {/* Top Stat Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6 border-b border-[#f3efe8]">
              <div className="p-4 rounded-2xl bg-[#faf8f5] border border-[#e5dfd5]">
                <span className="text-xs text-[#5e6b65] font-semibold block">Monthly Budget Ceiling</span>
                <span className="text-2xl font-bold text-[#183b2b] mt-1 block">৳10,000</span>
                <span className="text-[11px] text-[#2d6a4f] font-medium mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Target for 4-Person Dhaka Household
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#faf8f5] border border-[#e5dfd5]">
                <span className="text-xs text-[#5e6b65] font-semibold block">Total Spent This Month</span>
                <span className="text-2xl font-bold text-[#183b2b] mt-1 block">৳7,200</span>
                <div className="w-full bg-[#e5dfd5] h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-[#183b2b] h-full rounded-full" style={{ width: "72%" }}></div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#edf7f0] border border-[#d8f3dc]">
                <span className="text-xs text-[#143525] font-semibold block">Remaining Safe Budget</span>
                <span className="text-2xl font-bold text-[#183b2b] mt-1 block">৳2,800</span>
                <span className="text-[11px] text-[#406852] font-medium mt-1 block">
                  7 days left in billing cycle (৳400/day pace)
                </span>
              </div>
            </div>

            {/* Category Breakdown */}
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-bold text-[#183b2b]">Dhaka Household Category Breakdown</h2>
                <p className="text-xs text-[#5e6b65]">Spending allocation across raw market, staples, and daily dairy</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {expenseCategories.map((cat, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl border border-[#e5dfd5] bg-[#faf8f5] space-y-3 hover:border-[#183b2b]/30 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-sm text-[#183b2b]">{cat.name}</h3>
                      <span className="text-xs font-bold text-[#183b2b]">
                        {cat.spent} / {cat.allocated}
                      </span>
                    </div>

                    <div className="w-full bg-[#e5dfd5] h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${cat.color}`}
                        style={{ width: `${cat.pct}%` }}
                      ></div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-[#5e6b65]">
                      <p className="text-[11px] leading-relaxed max-w-[85%]">{cat.description}</p>
                      <span className="font-semibold text-[#183b2b]">{cat.pct}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Grocery Checklist Transfer Banner */}
            <div className="p-5 rounded-2xl bg-[#edf7f0] border border-[#d8f3dc] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#183b2b] text-white flex items-center justify-center shrink-0">
                  <ShoppingCart className="w-5 h-5 text-[#d8e8dc]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#183b2b]">Smart Deficit Grocery Checklist</h4>
                  <p className="text-xs text-[#406852]">PantryPal automatically compiles missing recipe ingredients into your market checklist.</p>
                </div>
              </div>
              <Link href="/grocery">
                <Button size="sm" variant="primary" className="whitespace-nowrap gap-1.5 shadow-xs">
                  <span>Open Grocery List</span>
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
            <Link href="/pantry-tracking" className="hover:text-[#183b2b]">Pantry Tracking</Link>
            <Link href="/zero-waste-ai" className="hover:text-[#183b2b]">Zero-Waste AI</Link>
            <Link href="/budget" className="hover:text-[#183b2b]">Live Budget</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
