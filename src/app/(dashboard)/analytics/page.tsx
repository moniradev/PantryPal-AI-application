import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart3, TrendingUp, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-[#1b4332]">
          Food Waste & Consumption Analytics (অ্যানালিটিক্স)
        </h2>
        <p className="text-xs md:text-sm text-[#6b7280]">
          Understand your consumption patterns, shelf life efficiency, and waste reduction.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-sm text-[#1f2924]">Waste Prevention Efficiency</h3>
            <Badge variant="success">92% Saved</Badge>
          </div>
          <p className="text-xs text-[#6b7280]">
            By cooking items before their expiry, you saved an estimated ৳1,420 worth of groceries this month.
          </p>
          <div className="h-4 bg-[#d8f3dc] rounded-full overflow-hidden">
            <div className="h-full bg-[#1b4332] rounded-full" style={{ width: "92%" }} />
          </div>
        </Card>

        <Card className="p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-sm text-[#1f2924]">Top Consumed Staples</h3>
            <Badge variant="sage">Bangladeshi Diet</Badge>
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span>Miniket Rice (চাল)</span>
              <span className="font-semibold text-[#1f2924]">12 kg / mo</span>
            </div>
            <div className="flex justify-between">
              <span>Masoor Dal (মসুর ডাল)</span>
              <span className="font-semibold text-[#1f2924]">3.5 kg / mo</span>
            </div>
            <div className="flex justify-between">
              <span>Eggs (ডিম)</span>
              <span className="font-semibold text-[#1f2924]">28 pcs / mo</span>
            </div>
            <div className="flex justify-between">
              <span>Onions & Potato</span>
              <span className="font-semibold text-[#1f2924]">6 kg / mo</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
