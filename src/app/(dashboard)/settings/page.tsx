import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-[#1b4332]">
          Settings & Preferences (সেটিংস)
        </h2>
        <p className="text-xs md:text-sm text-[#6b7280]">
          Configure household size, dietary restrictions, and regional currency settings.
        </p>
      </div>

      <Card className="p-6 space-y-4">
        <h3 className="font-semibold text-sm text-[#1f2924]">Household & Dietary Preferences</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="text-[#6b7280] font-medium block mb-1">Household Size</label>
            <select className="w-full bg-[#faf8f5] border border-[#e7e2d9] rounded-xl px-3 py-2">
              <option>1 Person (Bachelor / Student)</option>
              <option>2 Persons</option>
              <option selected>3-4 Persons (Small Family)</option>
              <option>5+ Persons (Large Household)</option>
            </select>
          </div>
          <div>
            <label className="text-[#6b7280] font-medium block mb-1">Default Currency</label>
            <input
              type="text"
              readOnly
              value="BDT (৳) - Bangladeshi Taka"
              className="w-full bg-[#f2eee9] border border-[#e7e2d9] rounded-xl px-3 py-2 text-[#6b7280] cursor-not-allowed"
            />
          </div>
          <div>
            <label className="text-[#6b7280] font-medium block mb-1">Monthly Food Budget (BDT)</label>
            <input
              type="number"
              defaultValue={8000}
              className="w-full bg-[#faf8f5] border border-[#e7e2d9] rounded-xl px-3 py-2"
            />
          </div>
          <div>
            <label className="text-[#6b7280] font-medium block mb-1">Language</label>
            <select className="w-full bg-[#faf8f5] border border-[#e7e2d9] rounded-xl px-3 py-2">
              <option>English + বাংলা (Bilingual)</option>
              <option>English only</option>
              <option>বাংলা শুধুমাত্র</option>
            </select>
          </div>
        </div>

        <div className="pt-4 border-t border-[#f2eee9]">
          <Button variant="primary" size="sm">
            Save Preferences
          </Button>
        </div>
      </Card>
    </div>
  );
}
