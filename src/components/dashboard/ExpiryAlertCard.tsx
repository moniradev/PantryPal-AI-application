import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AlertTriangle, Clock, ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ExpiringItem {
  id: string;
  name: string;
  nameBn: string;
  quantity: string;
  daysRemaining: number;
}

const expiringItems: ExpiringItem[] = [
  {
    id: "1",
    name: "Fresh Tomatoes",
    nameBn: "দেশি টমেটো",
    quantity: "800 g",
    daysRemaining: 1,
  },
  {
    id: "2",
    name: "Fresh Milk",
    nameBn: "দুধ",
    quantity: "1.5 L",
    daysRemaining: 2,
  },
  {
    id: "3",
    name: "Coriander Leaves",
    nameBn: "ধনেপাতা",
    quantity: "1 bunch",
    daysRemaining: 2,
  },
];

export function ExpiryAlertCard() {
  return (
    <Card className="border-[#fde68a] bg-linear-to-br from-white to-[#fffbeb]">
      <CardHeader className="py-4 flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-[#fef3c7] text-[#92400e]">
            <AlertTriangle className="w-4 h-4" />
          </div>
          <div>
            <CardTitle className="text-sm">Attention: Expiring Soon</CardTitle>
            <p className="text-[11px] text-[#92400e]">
              3 ingredients will expire in the next 48 hours
            </p>
          </div>
        </div>
        <Badge variant="warning">Zero-Waste Alert</Badge>
      </CardHeader>
      <CardContent className="space-y-2.5 pt-1">
        {expiringItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-2.5 rounded-xl bg-white/90 border border-[#fde68a]/60 text-xs"
          >
            <div>
              <p className="font-semibold text-[#1f2924]">
                {item.name} <span className="text-[#6b7280] font-normal">({item.nameBn})</span>
              </p>
              <p className="text-[#6b7280] text-[11px]">{item.quantity} in stock</p>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center gap-1 font-semibold text-[#b45309] bg-[#fef3c7] px-2 py-0.5 rounded-md text-[11px]">
                <Clock className="w-3 h-3" />
                {item.daysRemaining === 1 ? "1 day left" : `${item.daysRemaining} days left`}
              </span>
            </div>
          </div>
        ))}

        <div className="pt-2">
          <Button
            size="sm"
            variant="secondary"
            className="w-full text-xs gap-1.5 border border-[#b7e4c7]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#1b4332]" />
            <span>Generate Recipes Using Expiring Items</span>
            <ArrowRight className="w-3.5 h-3.5 ml-auto" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
