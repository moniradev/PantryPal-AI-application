import React from "react";
import Link from "next/link";
import { Leaf, Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#faf7f2] flex items-center justify-center p-6">
      <Card className="w-full max-w-md p-8 shadow-sm border-[#e5dfd5] space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-[#183b2b] text-white flex items-center justify-center mx-auto shadow-xs">
            <Leaf className="w-6 h-6 text-[#d8e8dc]" />
          </div>
          <h2 className="text-2xl font-bold text-[#183b2b] tracking-tight">
            Welcome, Monira Akter
          </h2>
          <p className="text-xs text-[#5e6b65]">
            Sign in to manage your kitchen inventory and personalized meal plans.
          </p>
        </div>

        <form className="space-y-4 text-xs">
          <div>
            <label className="text-[#5e6b65] font-semibold block mb-1">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#8c9993] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                defaultValue="monira.akter@pantrypal.ai"
                className="w-full bg-[#faf7f2] border border-[#e5dfd5] rounded-xl pl-9 pr-3 py-2 text-xs focus:ring-2 focus:ring-[#183b2b]/20 focus:border-[#183b2b]"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-[#5e6b65] font-semibold">Password</label>
              <a href="#" className="text-[#183b2b] hover:underline text-[11px] font-medium">
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-[#8c9993] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                defaultValue="••••••••••••"
                className="w-full bg-[#faf7f2] border border-[#e5dfd5] rounded-xl pl-9 pr-3 py-2 text-xs focus:ring-2 focus:ring-[#183b2b]/20 focus:border-[#183b2b]"
              />
            </div>
          </div>

          <Link href="/dashboard" className="block pt-2">
            <Button variant="primary" className="w-full text-xs shadow-xs">
              Sign In to Dashboard
            </Button>
          </Link>
        </form>

        <div className="text-center text-xs text-[#5e6b65] pt-2 border-t border-[#f3efe8]">
          Need an account?{" "}
          <Link href="/register" className="font-semibold text-[#183b2b] hover:underline">
            Register now
          </Link>
        </div>
      </Card>
    </div>
  );
}
