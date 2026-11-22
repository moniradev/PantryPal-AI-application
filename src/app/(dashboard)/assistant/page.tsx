"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BotMessageSquare, Send, Sparkles, User, RefreshCw } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const starterPrompts = [
  "আজকে আমার প্যান্ট্রির খাবার দিয়ে কী রান্না করা যায়?",
  "কোন কোন খাবারের মেয়াদ খুব শীঘ্রই শেষ হবে?",
  "৳১০০ টাকার মধ্যে ২ জনের জন্য একটা ভালো রেসিপি দাও",
  "আগামীকালের জন্য একটা সাশ্রয়ী লাঞ্চ প্ল্যান বানিয়ে দাও",
];

export default function AssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "আসসালামু আলাইকুম! আমি আপনার PantryPal AI কিচেন অ্যাসিস্ট্যান্ট। আপনার রান্নাঘরে কী আছে, কোনটার মেয়াদ শেষ হচ্ছে, কিংবা আজ কী রান্না করবেন—যেকোনো প্রশ্ন করতে পারেন!",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setInput("");
    setMessages((prev) => [
      ...prev,
      { role: "user", content: userMsg },
      {
        role: "assistant",
        content: `আপনার প্রশ্নের ওপর ভিত্তি করে প্যান্ট্রি ইনভেন্টরি চেক করা হচ্ছে... বর্তমানে আপনার কাছে চাল, ডাল, আলু ও ডিম রয়েছে। আপনি চাইলেই চটজলদি "ডিম-খিচুড়ি" রান্না করতে পারেন যা ২০ মিনিটের মধ্যে তৈরি হয়ে যাবে!`,
      },
    ]);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-[#1b4332]">
          AI Kitchen Assistant (স্মার্ট কিচেন চ্যাট)
        </h2>
        <p className="text-xs md:text-sm text-[#6b7280]">
          Directly talks to your pantry database with tool calls to recommend meals and manage lists.
        </p>
      </div>

      <Card className="flex flex-col h-[580px]">
        {/* Chat Messages */}
        <div className="flex-1 p-5 overflow-y-auto space-y-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex items-start gap-3 ${
                msg.role === "user" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                  msg.role === "user"
                    ? "bg-[#52796f] text-white"
                    : "bg-[#1b4332] text-[#d8f3dc]"
                }`}
              >
                {msg.role === "user" ? (
                  <User className="w-4 h-4" />
                ) : (
                  <BotMessageSquare className="w-4 h-4" />
                )}
              </div>
              <div
                className={`max-w-[80%] rounded-2xl p-3.5 text-xs md:text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-[#1b4332] text-white"
                    : "bg-[#faf8f5] border border-[#e7e2d9] text-[#1f2924]"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        {/* Suggestion Chips */}
        <div className="p-3 border-t border-[#f2eee9] bg-[#faf8f5] flex items-center gap-2 overflow-x-auto">
          {starterPrompts.map((prompt, i) => (
            <button
              key={i}
              onClick={() => setInput(prompt)}
              className="text-[11px] whitespace-nowrap bg-white border border-[#e7e2d9] hover:border-[#2d6a4f] text-[#4b5563] hover:text-[#1b4332] px-3 py-1 rounded-full transition-colors"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Form */}
        <div className="p-3 border-t border-[#e7e2d9] bg-white flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask anything about your kitchen (e.g. কী রান্না করব?)..."
            className="flex-1 bg-[#faf8f5] border border-[#e7e2d9] rounded-xl px-4 py-2.5 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-[#2d6a4f]/20 focus:border-[#2d6a4f]"
          />
          <Button
            onClick={handleSend}
            variant="primary"
            size="md"
            className="rounded-xl px-4"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
}
