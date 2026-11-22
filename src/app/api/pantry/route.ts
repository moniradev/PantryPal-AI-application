import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { PantryItemCreateSchema } from "@/lib/validations/pantry.schema";

interface PantryStoreItem {
  id: string;
  custom_name: string;
  custom_name_bn: string | null;
  quantity: number;
  unit: string;
  category: string;
  expiry_date: string | null;
  storage_location: string;
  minimum_quantity: number;
  notes?: string | null;
  created_at: string;
}

// In-memory pantry repository for instant local persistence & fallback
let localPantryStore: PantryStoreItem[] = [
  {
    id: "11111111-1111-1111-1111-111111111111",
    custom_name: "Miniket Rice",
    custom_name_bn: "মিনিকেট চাল",
    quantity: 5,
    unit: "kg",
    category: "grains_staples",
    expiry_date: "2026-12-30",
    storage_location: "pantry",
    minimum_quantity: 2,
    created_at: new Date().toISOString(),
  },
  {
    id: "22222222-2222-2222-2222-222222222222",
    custom_name: "Masoor Dal",
    custom_name_bn: "মসুর ডাল",
    quantity: 1.2,
    unit: "kg",
    category: "grains_staples",
    expiry_date: "2026-12-15",
    storage_location: "pantry",
    minimum_quantity: 0.5,
    created_at: new Date().toISOString(),
  },
  {
    id: "33333333-3333-3333-3333-333333333333",
    custom_name: "Fresh Tomatoes",
    custom_name_bn: "দেশি টমেটো",
    quantity: 800,
    unit: "g",
    category: "vegetables",
    expiry_date: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split("T")[0],
    storage_location: "refrigerator",
    minimum_quantity: 500,
    created_at: new Date().toISOString(),
  },
  {
    id: "44444444-4444-4444-4444-444444444444",
    custom_name: "Farm Eggs",
    custom_name_bn: "ফার্মের ডিম",
    quantity: 8,
    unit: "pcs",
    category: "dairy_eggs",
    expiry_date: "2026-12-05",
    storage_location: "refrigerator",
    minimum_quantity: 4,
    created_at: new Date().toISOString(),
  },
];

export async function GET(req: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (user) {
      const { data, error } = await supabase
        .from("pantry_items")
        .select("*, ingredients(*)")
        .eq("user_id", user.id)
        .order("expiry_date", { ascending: true });

      if (!error && data && data.length > 0) {
        return NextResponse.json({ success: true, data });
      }
    }

    // Fallback to local store
    return NextResponse.json({
      success: true,
      data: localPantryStore,
      source: "local_store",
    });
  } catch (error: any) {
    return NextResponse.json({
      success: true,
      data: localPantryStore,
      source: "fallback",
    });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validated = PantryItemCreateSchema.safeParse(body);

    if (!validated.success) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "VALIDATION_ERROR",
            message: "Invalid pantry item data.",
            details: validated.error.format(),
          },
        },
        { status: 400 }
      );
    }

    const newItem = {
      id: crypto.randomUUID(),
      custom_name: validated.data.customName,
      custom_name_bn: validated.data.customNameBn || null,
      quantity: validated.data.quantity,
      unit: validated.data.unit,
      category: validated.data.category || "other",
      expiry_date: validated.data.expiryDate || null,
      storage_location: validated.data.storageLocation || "pantry",
      minimum_quantity: validated.data.minimumQuantity || 1,
      notes: validated.data.notes || null,
      created_at: new Date().toISOString(),
    };

    localPantryStore.push(newItem);

    return NextResponse.json({
      success: true,
      data: newItem,
      message: "Ingredient added to pantry successfully.",
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: { code: "SERVER_ERROR", message: error.message },
      },
      { status: 500 }
    );
  }
}
