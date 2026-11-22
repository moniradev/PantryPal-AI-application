import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wallet, Plus, TrendingDown, ArrowUpRight, DollarSign } from "lucide-react";

export default function BudgetPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-[#1b4332]">
            Food Budget & Expenses (বাজেট ও খরচ)
          </h2>
          <p className="text-xs md:text-sm text-[#6b7280]">
            Track your grocery bills, stay within monthly limits in Bangladeshi Taka (৳).
          </p>
        </div>

        <Button variant="primary" size="sm" className="gap-2">
          <Plus className="w-4 h-4" />
          <span>Log Expense</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-5">
          <p className="text-xs font-medium text-[#6b7280]">Monthly Limit</p>
          <p className="text-2xl font-bold text-[#1f2924] mt-1">৳8,000</p>
          <p className="text-xs text-[#52796f] mt-2">November 2026</p>
        </Card>
        <Card className="p-5">
          <p className="text-xs font-medium text-[#6b7280]">Spent So Far</p>
          <p className="text-2xl font-bold text-[#b45309] mt-1">৳2,450</p>
          <p className="text-xs text-[#6b7280] mt-2">30.6% utilized</p>
        </Card>
        <Card className="p-5">
          <p className="text-xs font-medium text-[#6b7280]">Remaining Balance</p>
          <p className="text-2xl font-bold text-[#065f46] mt-1">৳5,550</p>
          <p className="text-xs text-[#065f46] mt-2">Healthy financial pacing</p>
        </Card>
      </div>

      <Card>
        <CardHeader className="py-4">
          <CardTitle>Recent Food Expenses</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="divide-y divide-[#f2eee9] text-xs">
            {[
              { desc: "Local Bazar - Fish & Vegetables", date: "21 Nov 2026", cat: "Fresh Market", amount: "৳820" },
              { desc: "Shwapno Super Shop - Cooking Oil & Spices", date: "18 Nov 2026", cat: "Supermarket", amount: "৳1,150" },
              { desc: "Egg & Milk Daily", date: "15 Nov 2026", cat: "Dairy", amount: "৳480" },
            ].map((exp, i) => (
              <div key={i} className="py-3 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[#1f2924]">{exp.desc}</p>
                  <p className="text-[11px] text-[#6b7280]">{exp.date} • {exp.cat}</p>
                </div>
                <span className="font-bold text-sm text-[#1b4332]">{exp.amount}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
