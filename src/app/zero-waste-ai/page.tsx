import Link from "next/link";
import Image from "next/image";
import {
  Leaf,
  ArrowRight,
  Sparkles,
  ChefHat,
  Clock,
  Flame,
  CheckCircle2,
  AlertCircle,
  TrendingDown,
  ArrowUpRight,
  ShieldAlert,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ZeroWasteAIPage() {
  const zeroWasteRecipes = [
    {
      title: "Dim Bhuna with Fresh Tomatoes (ডিম ভুনা)",
      time: "20 mins",
      difficulty: "Easy",
      budget: "৳110",
      inStock: "100% In Stock",
      saves: "Saves 4 eggs & 2 tomatoes expiring tomorrow",
      description: "Hard-boiled eggs browned in mustard oil and simmered in an aromatic onion, tomato, and green chili gravy.",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Dhaka Vegetable Masoor Khichuri (পাতলা খিচুড়ি)",
      time: "35 mins",
      difficulty: "Medium",
      budget: "৳145",
      inStock: "100% In Stock",
      saves: "Uses remaining masoor dal & green chilies",
      description: "Comforting slow-simmered rice and red lentils infused with cumin, ginger paste, and fragrant green chilies.",
      image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Spicy Tomato & Coriander Chutney (টমেটো চাটনি)",
      time: "15 mins",
      difficulty: "Easy",
      budget: "৳45",
      inStock: "100% In Stock",
      saves: "Rescues 3 ripe tomatoes from waste",
      description: "Quick stovetop chutney seasoned with mustard seeds, dried red chili, and a splash of mustard oil.",
      image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80",
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
          <Link href="/zero-waste-ai" className="text-[#183b2b] border-b-2 border-[#183b2b] pb-0.5">
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
          <Link href="/recipes">
            <Button size="sm" variant="primary" className="text-xs font-semibold gap-2 shadow-xs">
              <span>Generate Recipe</span>
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
              <Sparkles className="w-3.5 h-3.5 text-[#183b2b]" />
              Gemini AI-Powered Zero-Waste Engine
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#183b2b] leading-[1.1]">
              Zero-Waste AI: Cook Before It Spoils
            </h1>

            <p className="text-base sm:text-lg text-[#5e6b65] leading-relaxed">
              Every month, urban Dhaka kitchens discard ৳1,500–৳3,200 of forgotten produce, sour milk, and expired pantry staples. PantryPal AI prioritizes ingredients with ≤48 hours of freshness and drafts authentic Bengali recipes with zero extra grocery spending.
            </p>

            <div className="pt-3 flex flex-wrap gap-3">
              <Link href="/recipes">
                <Button size="lg" variant="primary" className="gap-2 shadow-sm text-sm">
                  <span>Cook from My Pantry</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/assistant">
                <Button size="lg" variant="outline" className="border-[#e5dfd5] text-sm">
                  Ask AI Kitchen Assistant
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Recipe Cards Bento */}
        <section className="pb-20 px-6 md:px-12 max-w-6xl mx-auto">
          <div className="border border-[#e5dfd5] bg-white rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#f3efe8]">
              <div>
                <h2 className="text-xl font-bold text-[#183b2b]">AI Zero-Waste Recipe Matches</h2>
                <p className="text-xs text-[#5e6b65]">Dishes computed from current pantry inventory to eliminate spoilage</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-3 py-1 rounded-full bg-[#edf7f0] text-[#183b2b] font-semibold border border-[#d8f3dc] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2d6a4f]" />
                  Zero Grocery Run Needed
                </span>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {zeroWasteRecipes.map((recipe, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#e5dfd5] bg-[#faf8f5] overflow-hidden flex flex-col justify-between hover:border-[#183b2b]/30 transition-all group"
                >
                  <div className="relative h-44 w-full bg-[#e5dfd5]">
                    <Image
                      src={recipe.image}
                      alt={recipe.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#183b2b] text-white shadow-xs">
                        {recipe.inStock}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[11px] text-[#5e6b65] font-semibold">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#8c9993]" />
                          {recipe.time}
                        </span>
                        <span>•</span>
                        <span className="text-[#183b2b]">{recipe.budget}</span>
                        <span>•</span>
                        <span className="text-[#52796f]">{recipe.difficulty}</span>
                      </div>

                      <h3 className="font-bold text-base text-[#183b2b] leading-tight">
                        {recipe.title}
                      </h3>

                      <p className="text-xs text-[#5e6b65] leading-relaxed">
                        {recipe.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#ede8e0] space-y-3">
                      <div className="text-[11px] text-[#991b1b] bg-[#fee2e2] px-2.5 py-1 rounded-lg font-medium flex items-center gap-1.5 border border-[#fecaca]">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{recipe.saves}</span>
                      </div>

                      <Link href="/recipes" className="block">
                        <Button size="sm" variant="outline" className="w-full text-xs font-semibold border-[#e5dfd5] justify-between">
                          <span>View Step-by-Step Cooking</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* AI Assistant Banner */}
            <div className="p-5 rounded-2xl bg-[#edf7f0] border border-[#d8f3dc] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#183b2b] text-white flex items-center justify-center shrink-0">
                  <ChefHat className="w-5 h-5 text-[#d8e8dc]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#183b2b]">Need a Custom Bengali Recipe Right Now?</h4>
                  <p className="text-xs text-[#406852]">Tell our AI Assistant what ingredients you have in your kitchen, and it writes dinner for you.</p>
                </div>
              </div>
              <Link href="/assistant">
                <Button size="sm" variant="primary" className="whitespace-nowrap gap-1.5 shadow-xs">
                  <span>Chat with Assistant</span>
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
            <Link href="/recipes" className="hover:text-[#183b2b]">Recipes</Link>
            <Link href="/bdt-grocery-budget" className="hover:text-[#183b2b]">BDT Budget</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
