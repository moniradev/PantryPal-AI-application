"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, X, Wallet, TrendingUp, Calendar } from "lucide-react";

interface Expense {
  id: string;
  desc: string;
  date: string;
  cat: string;
  amount: number;
}

const initialExpenses: Expense[] = [
  { id: "1", desc: "Local Bazar - Rui Fish & Vegetables", date: "21 Nov 2026", cat: "Fresh Market", amount: 820 },
  { id: "2", desc: "Shwapno - Cooking Oil, Lentils & Spices", date: "18 Nov 2026", cat: "Supermarket", amount: 1150 },
  { id: "3", desc: "Farm Eggs (2 halis) & Liquid Milk", date: "15 Nov 2026", cat: "Dairy & Eggs", amount: 480 },
];

export default function BudgetPage() {
  const [expenses, setExpenses] = useState<Expense[]>(initialExpenses);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Fresh Market");

  const monthlyBudget = 8000;
  const totalSpent = expenses.reduce((acc, item) => acc + item.amount, 0);
  const remaining = monthlyBudget - totalSpent;
  const percentage = Math.round((totalSpent / monthlyBudget) * 100);

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (!desc.trim() || !amount) return;

    setExpenses((prev) => [
      {
        id: crypto.randomUUID(),
        desc,
        date: "22 Nov 2026",
        cat: category,
        amount: Number(amount),
      },
      ...prev,
    ]);

    setIsModalOpen(false);
    setDesc("");
    setAmount("");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-[#183b2b]">
            Food Budget & Expenses (বাজেট ট্র্যাকার)
          </h2>
          <p className="text-xs md:text-sm text-[#5e6b65]">
            Keep your household grocery spending on target in Bangladeshi Taka (৳).
          </p>
        </div>

        <Button
          variant="primary"
          size="sm"
          onClick={() => setIsModalOpen(true)}
          className="gap-2 shadow-xs"
        >
          <Plus className="w-4 h-4" />
          <span>Log Grocery Expense</span>
        </Button>
      </div>

      {/* 3 Metric Tiles */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-5">
          <p className="text-xs font-semibold text-[#5e6b65]">Monthly Budget Limit</p>
          <p className="text-2xl font-bold text-[#18211e] mt-1 font-mono">৳{monthlyBudget.toLocaleString()}</p>
          <p className="text-xs text-[#52796f] mt-2">November 2026 Ceiling</p>
        </Card>
        <Card className="p-5">
          <p className="text-xs font-semibold text-[#5e6b65]">Total Spent to Date</p>
          <p className="text-2xl font-bold text-[#c28839] mt-1 font-mono">৳{totalSpent.toLocaleString()}</p>
          <p className="text-xs text-[#5e6b65] mt-2">{percentage}% utilized</p>
        </Card>
        <Card className="p-5">
          <p className="text-xs font-semibold text-[#5e6b65]">Remaining Balance</p>
          <p className="text-2xl font-bold text-[#183b2b] mt-1 font-mono">৳{remaining.toLocaleString()}</p>
          <p className="text-xs text-[#183b2b] mt-2 font-medium">Safe spending pace</p>
        </Card>
      </div>

      {/* Expense History Table */}
      <Card>
        <CardHeader className="py-4 border-b border-[#f3efe8]">
          <CardTitle>Recent Food & Grocery Purchases</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="divide-y divide-[#f3efe8] text-xs">
            {expenses.map((exp) => (
              <div key={exp.id} className="py-3 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[#18211e]">{exp.desc}</p>
                  <p className="text-[11px] text-[#5e6b65]">
                    {exp.date} • {exp.cat}
                  </p>
                </div>
                <span className="font-bold text-sm text-[#183b2b] font-mono">
                  ৳{exp.amount.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-[#e5dfd5] w-full max-w-md p-6 shadow-xl relative">
            <div className="flex items-center justify-between pb-3 border-b border-[#f3efe8]">
              <h3 className="font-bold text-base text-[#183b2b]">Log Food Expense</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-lg text-[#5e6b65] hover:bg-[#faf7f2]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddExpense} className="space-y-4 pt-4 text-xs">
              <div>
                <label className="font-semibold block mb-1 text-[#18211e]">Description</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Karwan Bazar fish & veggies"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  className="w-full bg-[#faf7f2] border border-[#e5dfd5] rounded-xl px-3 py-2 text-xs"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1 text-[#18211e]">Amount (৳ BDT)</label>
                <input
                  type="number"
                  required
                  placeholder="e.g. 650"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-[#faf7f2] border border-[#e5dfd5] rounded-xl px-3 py-2 text-xs font-mono"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1 text-[#18211e]">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-[#faf7f2] border border-[#e5dfd5] rounded-xl px-3 py-2 text-xs"
                >
                  <option value="Fresh Market">Fresh Market (কাঁচাবাজার)</option>
                  <option value="Supermarket">Supermarket (স্বপ্ন / ইউনিমার্ট)</option>
                  <option value="Dairy & Eggs">Dairy & Eggs (দুধ-ডিম)</option>
                  <option value="Meat & Fish">Meat & Fish (মাছ-মাংস)</option>
                </select>
              </div>

              <div className="pt-3 border-t border-[#f3efe8] flex justify-end gap-2">
                <Button type="button" variant="ghost" size="sm" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary" size="sm">
                  Save Expense
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
