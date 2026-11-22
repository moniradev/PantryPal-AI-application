import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Filter, Camera, ArrowUpDown, Trash2, Edit } from "lucide-react";

const allPantryItems = [
  { id: "1", name: "Miniket Rice", nameBn: "মিনিকেট চাল", quantity: "5", unit: "kg", category: "Grains", expiry: "2026-12-30", status: "safe", location: "Pantry" },
  { id: "2", name: "Masoor Dal", nameBn: "মসুর ডাল", quantity: "1.2", unit: "kg", category: "Grains", expiry: "2026-12-15", status: "safe", location: "Pantry" },
  { id: "3", name: "Red Onion", nameBn: "দেশি পেঁয়াজ", quantity: "1.5", unit: "kg", category: "Vegetables", expiry: "2026-11-28", status: "soon", location: "Countertop" },
  { id: "4", name: "Fresh Tomatoes", nameBn: "দেশি টমেটো", quantity: "800", unit: "g", category: "Vegetables", expiry: "2026-11-23", status: "urgent", location: "Refrigerator" },
  { id: "5", name: "Fresh Milk", nameBn: "দুধ", quantity: "1.5", unit: "L", category: "Dairy & Eggs", expiry: "2026-11-24", status: "soon", location: "Refrigerator" },
  { id: "6", name: "Farm Eggs", nameBn: "ফার্মের ডিম", quantity: "8", unit: "pcs", category: "Dairy & Eggs", expiry: "2026-12-05", status: "safe", location: "Refrigerator" },
  { id: "7", name: "Mustard Oil", nameBn: "সরিষার তেল", quantity: "500", unit: "ml", category: "Oils", expiry: "2027-01-10", status: "safe", location: "Pantry" },
  { id: "8", name: "Coriander Leaves", nameBn: "ধনেপাতা", quantity: "1", unit: "bunch", category: "Vegetables", expiry: "2026-11-24", status: "soon", location: "Refrigerator" },
  { id: "9", name: "Potato", nameBn: "আলু", quantity: "3", unit: "kg", category: "Vegetables", expiry: "2026-12-20", status: "safe", location: "Pantry" },
  { id: "10", name: "Green Chili", nameBn: "কাঁচামরিচ", quantity: "200", unit: "g", category: "Vegetables", expiry: "2026-11-29", status: "safe", location: "Refrigerator" },
];

export default function PantryPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-[#1b4332]">
            My Pantry (আমার রান্নাঘর)
          </h2>
          <p className="text-xs md:text-sm text-[#6b7280]">
            Track ingredients, quantities, shelf life and storage locations in real-time.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Button variant="secondary" size="sm" className="gap-2 border border-[#b7e4c7]">
            <Camera className="w-4 h-4 text-[#1b4332]" />
            <span>Scan with AI</span>
          </Button>
          <Button variant="primary" size="sm" className="gap-2">
            <Plus className="w-4 h-4" />
            <span>Add Ingredient</span>
          </Button>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <Card className="p-4">
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#9ca3af] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search in pantry..."
              className="w-full bg-[#faf8f5] border border-[#e7e2d9] rounded-xl pl-9 pr-4 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-[#2d6a4f]/20 focus:border-[#2d6a4f]"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Button variant="outline" size="sm" className="text-xs gap-1.5">
              <Filter className="w-3.5 h-3.5 text-[#6b7280]" />
              <span>Category</span>
            </Button>
            <Button variant="outline" size="sm" className="text-xs gap-1.5">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#6b7280]" />
              <span>Sort by Expiry</span>
            </Button>
          </div>
        </div>
      </Card>

      {/* Pantry Inventory Table */}
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#faf8f5] border-b border-[#e7e2d9] text-[#6b7280] font-semibold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="p-4">Ingredient Name</th>
                <th className="p-4">Category</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Storage</th>
                <th className="p-4">Expiry Date</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f2eee9]">
              {allPantryItems.map((item) => (
                <tr key={item.id} className="hover:bg-[#faf8f5]/60 transition-colors">
                  <td className="p-4 font-semibold text-[#1f2924]">
                    {item.name}{" "}
                    <span className="text-[#6b7280] font-normal">({item.nameBn})</span>
                  </td>
                  <td className="p-4 text-[#6b7280]">{item.category}</td>
                  <td className="p-4 font-medium text-[#1f2924]">
                    {item.quantity} {item.unit}
                  </td>
                  <td className="p-4 text-[#6b7280]">{item.location}</td>
                  <td className="p-4 text-[#6b7280]">{item.expiry}</td>
                  <td className="p-4">
                    {item.status === "urgent" ? (
                      <Badge variant="destructive">Expiring in 24h</Badge>
                    ) : item.status === "soon" ? (
                      <Badge variant="warning">Use Soon</Badge>
                    ) : (
                      <Badge variant="success">Fresh</Badge>
                    )}
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-1.5 text-[#6b7280] hover:text-[#1b4332] rounded-lg hover:bg-white transition-colors">
                        <Edit className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-1.5 text-[#6b7280] hover:text-[#e63946] rounded-lg hover:bg-white transition-colors">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
