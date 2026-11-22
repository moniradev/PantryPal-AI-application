import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Refrigerator, Plus, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface PantryItemPreview {
  id: string;
  name: string;
  nameBn: string;
  quantity: string;
  category: string;
  status: "available" | "low_stock";
}

const samplePantry: PantryItemPreview[] = [
  { id: "1", name: "Miniket Rice", nameBn: "মিনিকেট চাল", quantity: "5 kg", category: "Grains", status: "available" },
  { id: "2", name: "Masoor Dal", nameBn: "মসুর ডাল", quantity: "1.2 kg", category: "Grains", status: "available" },
  { id: "3", name: "Red Onion", nameBn: "দেশি পেঁয়াজ", quantity: "1.5 kg", category: "Vegetables", status: "available" },
  { id: "4", name: "Farm Eggs", nameBn: "ফার্মের ডিম", quantity: "8 pcs", category: "Dairy & Eggs", status: "low_stock" },
  { id: "5", name: "Mustard Oil", nameBn: "সরিষার তেল", quantity: "500 ml", category: "Oils", status: "low_stock" },
];

export function RecentPantryList() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Refrigerator className="w-4 h-4 text-[#1b4332]" />
          <CardTitle>Pantry Inventory Preview</CardTitle>
        </div>
        <Link
          href="/pantry"
          className="text-xs font-semibold text-[#1b4332] hover:text-[#2d6a4f] flex items-center gap-1 hover:underline"
        >
          View All (24) <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </CardHeader>
      <CardContent className="pt-1">
        <div className="divide-y divide-[#f2eee9]">
          {samplePantry.map((item) => (
            <div
              key={item.id}
              className="py-2.5 flex items-center justify-between text-xs hover:bg-[#faf8f5] px-2 rounded-lg transition-colors"
            >
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#1f2924]">{item.name}</span>
                  <span className="text-[11px] text-[#6b7280]">({item.nameBn})</span>
                </div>
                <span className="text-[10px] text-[#9ca3af] bg-[#f2eee9] px-1.5 py-0.5 rounded">
                  {item.category}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-medium text-[#1f2924]">{item.quantity}</span>
                {item.status === "low_stock" ? (
                  <Badge variant="warning" className="text-[10px] py-0 px-1.5">
                    Low
                  </Badge>
                ) : (
                  <Badge variant="success" className="text-[10px] py-0 px-1.5">
                    OK
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
