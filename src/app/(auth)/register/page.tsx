import React from "react";
import Link from "next/link";
import { Leaf, ArrowRight, Lock, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5] flex items-center justify-center p-6">
      <Card className="w-full max-w-md p-8 shadow-sm border-[#e7e2d9] space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-[#1b4332] text-white flex items-center justify-center mx-auto shadow-xs">
            <Leaf className="w-6 h-6 text-[#d8f3dc]" />
          </div>
          <h2 className="text-2xl font-bold text-[#1b4332] tracking-tight">
            Create your PantryPal AI Account
          </h2>
          <p className="text-xs text-[#6b7280]">
            Start optimizing your grocery budget and eliminate food waste today.
          </p>
        </div>

        <form className="space-y-4 text-xs">
          <div>
            <label className="text-[#6b7280] font-medium block mb-1">Full Name</label>
            <div className="relative">
              <User className="w-4 h-4 text-[#9ca3af] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="e.g. Shakil Ahmed"
                className="w-full bg-[#faf8f5] border border-[#e7e2d9] rounded-xl pl-9 pr-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#2d6a4f]/20 focus:border-[#2d6a4f]"
              />
            </div>
          </div>

          <div>
            <label className="text-[#6b7280] font-medium block mb-1">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#9ca3af] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                placeholder="you@domain.com"
                className="w-full bg-[#faf8f5] border border-[#e7e2d9] rounded-xl pl-9 pr-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#2d6a4f]/20 focus:border-[#2d6a4f]"
              />
            </div>
          </div>

          <div>
            <label className="text-[#6b7280] font-medium block mb-1">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-[#9ca3af] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                placeholder="••••••••••••"
                className="w-full bg-[#faf8f5] border border-[#e7e2d9] rounded-xl pl-9 pr-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#2d6a4f]/20 focus:border-[#2d6a4f]"
              />
            </div>
          </div>

          <Link href="/dashboard" className="block pt-2">
            <Button variant="primary" className="w-full text-xs">
              Create Account & Get Started
            </Button>
          </Link>
        </form>

        <div className="text-center text-xs text-[#6b7280] pt-2 border-t border-[#f2eee9]">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-[#1b4332] hover:underline">
            Sign in
          </Link>
        </div>
      </Card>
    </div>
  );
}
