import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-[#183b2b]">
          Kitchen Settings & Preferences
        </h2>
        <p className="text-xs md:text-sm text-[#5e6b65]">
          Profile configuration for Monira Akter • Household size, dietary rules, and BDT pacing.
        </p>
      </div>

      <Card className="p-6 space-y-4">
        <h3 className="font-bold text-sm text-[#18211e]">User Profile</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="text-[#5e6b65] font-semibold block mb-1">Full Name</label>
            <input
              type="text"
              defaultValue="Monira Akter"
              className="w-full bg-[#faf7f2] border border-[#e5dfd5] rounded-xl px-3 py-2 text-xs font-medium"
            />
          </div>
          <div>
            <label className="text-[#5e6b65] font-semibold block mb-1">Email</label>
            <input
              type="email"
              defaultValue="monira.akter@pantrypal.ai"
              className="w-full bg-[#faf7f2] border border-[#e5dfd5] rounded-xl px-3 py-2 text-xs font-medium"
            />
          </div>
          <div>
            <label className="text-[#5e6b65] font-semibold block mb-1">Household Size</label>
            <select className="w-full bg-[#faf7f2] border border-[#e5dfd5] rounded-xl px-3 py-2">
              <option>1 Person</option>
              <option>2 Persons</option>
              <option selected>3-4 Persons (Family)</option>
              <option>5+ Persons</option>
            </select>
          </div>
          <div>
            <label className="text-[#5e6b65] font-semibold block mb-1">Default Currency</label>
            <input
              type="text"
              readOnly
              value="BDT (৳) - Bangladeshi Taka"
              className="w-full bg-[#f3efe8] border border-[#e5dfd5] rounded-xl px-3 py-2 text-[#5e6b65] cursor-not-allowed font-mono"
            />
          </div>
          <div>
            <label className="text-[#5e6b65] font-semibold block mb-1">Monthly Food Budget (BDT)</label>
            <input
              type="number"
              defaultValue={8000}
              className="w-full bg-[#faf7f2] border border-[#e5dfd5] rounded-xl px-3 py-2 font-mono"
            />
          </div>
          <div>
            <label className="text-[#5e6b65] font-semibold block mb-1">Primary Language</label>
            <select className="w-full bg-[#faf7f2] border border-[#e5dfd5] rounded-xl px-3 py-2">
              <option>Bilingual (বাংলা + English)</option>
              <option>বাংলা</option>
              <option>English</option>
            </select>
          </div>
        </div>

        <div className="pt-4 border-t border-[#f3efe8] flex justify-end">
          <Button variant="primary" size="sm" className="shadow-xs">
            Save Preferences
          </Button>
        </div>
      </Card>
    </div>
  );
}
