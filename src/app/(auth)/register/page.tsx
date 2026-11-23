"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Leaf, Mail, Lock, User, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { createClient } from "@/lib/supabase/client";

export default function RegisterPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    if (!fullName || !email || !password) {
      setErrorMsg("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      setErrorMsg("Password must be at least 6 characters long.");
      return;
    }

    setLoading(true);

    try {
      const supabase = createClient();
      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: {
          data: {
            full_name: fullName.trim(),
          },
        },
      });

      if (error) {
        setErrorMsg(error.message);
        setLoading(false);
        return;
      }

      if (data?.user) {
        setSuccessMsg(
          "Account created successfully! Redirecting you to the dashboard..."
        );
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 1200);
      } else {
        window.location.href = "/dashboard";
      }
    } catch (err: any) {
      console.error("Registration error:", err);
      window.location.href = "/dashboard";
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] flex items-center justify-center p-6">
      <Card className="w-full max-w-md p-8 shadow-sm border-[#e5dfd5] space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-[#183b2b] text-white flex items-center justify-center mx-auto shadow-xs">
            <Leaf className="w-6 h-6 text-[#d8e8dc]" />
          </div>
          <h2 className="text-2xl font-bold text-[#183b2b] tracking-tight">
            Create PantryPal Account
          </h2>
          <p className="text-xs text-[#5e6b65]">
            Start optimizing your grocery budget and eliminate food waste today.
          </p>
        </div>

        {errorMsg && (
          <div className="p-3 rounded-xl bg-[#fee2e2] border border-[#fecaca] text-[#991b1b] text-xs flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <p className="leading-relaxed">{errorMsg}</p>
          </div>
        )}

        {successMsg && (
          <div className="p-3 rounded-xl bg-[#d1fae5] border border-[#a7f3d0] text-[#065f46] text-xs flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
            <p className="leading-relaxed">{successMsg}</p>
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-4 text-xs">
          <div>
            <label className="text-[#5e6b65] font-semibold block mb-1">Full Name</label>
            <div className="relative">
              <User className="w-4 h-4 text-[#8c9993] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                placeholder="e.g. Monira Akter"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-[#faf7f2] border border-[#e5dfd5] rounded-xl pl-9 pr-3 py-2.5 text-xs focus:ring-2 focus:ring-[#183b2b]/20 focus:border-[#183b2b]"
              />
            </div>
          </div>

          <div>
            <label className="text-[#5e6b65] font-semibold block mb-1">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#8c9993] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                placeholder="you@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#faf7f2] border border-[#e5dfd5] rounded-xl pl-9 pr-3 py-2.5 text-xs focus:ring-2 focus:ring-[#183b2b]/20 focus:border-[#183b2b]"
              />
            </div>
          </div>

          <div>
            <label className="text-[#5e6b65] font-semibold block mb-1">Password (min 6 characters)</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-[#8c9993] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                placeholder="At least 6 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#faf7f2] border border-[#e5dfd5] rounded-xl pl-9 pr-3 py-2.5 text-xs focus:ring-2 focus:ring-[#183b2b]/20 focus:border-[#183b2b]"
              />
            </div>
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              disabled={loading}
              variant="primary"
              className="w-full text-xs shadow-xs py-2.5 gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#d8e8dc]" />
                  <span>Creating Account...</span>
                </>
              ) : (
                <span>Create Account & Get Started</span>
              )}
            </Button>
          </div>
        </form>

        <div className="text-center text-xs text-[#5e6b65] pt-2 border-t border-[#f3efe8]">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-[#183b2b] hover:underline">
            Sign in
          </Link>
        </div>
      </Card>
    </div>
  );
}
