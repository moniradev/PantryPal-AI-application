"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BotMessageSquare, Send, User, Loader2 } from "lucide-react";

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
        "আসসালামু আলাইকুম Monira Akter! আমি আপনার PantryPal AI কিচেন অ্যাসিস্ট্যান্ট। আপনার রান্নাঘরের স্টক, মেয়াদোত্তীর্ণের সতর্কতা, কিংবা আজ কী রান্না করবেন—যেকোনো প্রশ্ন আমাকে করতে পারেন!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg = query.trim();
    setInput("");
    const newMessages: Message[] = [...messages, { role: "user", content: userMsg }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const json = await res.json();
      if (json.success && json.data?.content) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: json.data.content },
        ]);
      }
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "দুঃখিত, সংযোগে কিছু সমস্যা দেখা দিয়েছে। তবে আপনার প্যান্ট্রির টমেটো ও ডিম দিয়ে ঝটপট ডিম ভুনা রান্না করতে পারেন!",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-[#183b2b]">
          AI Kitchen Assistant (কিচেন সহকারী)
        </h2>
        <p className="text-xs md:text-sm text-[#5e6b65]">
          Personalized culinary AI assistant for Monira Akter • Responds in Bengali and English.
        </p>
      </div>

      <Card className="flex flex-col h-[600px] border border-[#e5dfd5] shadow-xs">
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
                    ? "bg-[#183b2b] text-[#d8e8dc]"
                    : "bg-[#d8e8dc] text-[#143525]"
                }`}
              >
                {msg.role === "user" ? (
                  <span className="text-[11px] font-bold">MA</span>
                ) : (
                  <BotMessageSquare className="w-4 h-4 text-[#183b2b]" />
                )}
              </div>
              <div
                className={`max-w-[80%] rounded-2xl p-3.5 text-xs md:text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-[#183b2b] text-white shadow-xs"
                    : "bg-[#faf7f2] border border-[#e5dfd5] text-[#18211e]"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-2 text-xs text-[#5e6b65] p-2">
              <Loader2 className="w-4 h-4 animate-spin text-[#183b2b]" />
              <span>Monira's kitchen assistant is thinking...</span>
            </div>
          )}
        </div>

        {/* Suggestion Chips */}
        <div className="p-3 border-t border-[#f3efe8] bg-[#faf7f2] flex items-center gap-2 overflow-x-auto">
          {starterPrompts.map((prompt, i) => (
            <button
              key={i}
              onClick={() => handleSend(prompt)}
              className="text-[11px] whitespace-nowrap bg-white border border-[#e5dfd5] hover:border-[#183b2b] text-[#5e6b65] hover:text-[#183b2b] px-3 py-1.5 rounded-full transition-colors cursor-pointer"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Form */}
        <div className="p-3 border-t border-[#e5dfd5] bg-white flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask anything about Monira's kitchen (e.g. কী রান্না করব?)..."
            className="flex-1 bg-[#faf7f2] border border-[#e5dfd5] rounded-xl px-4 py-2.5 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-[#183b2b]/20 focus:border-[#183b2b]"
          />
          <Button
            onClick={() => handleSend()}
            disabled={isLoading || !input.trim()}
            variant="primary"
            size="md"
            className="rounded-xl px-4 shadow-xs"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
}
