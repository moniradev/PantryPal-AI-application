import { z } from "zod";

export const PantryItemCreateSchema = z.object({
  ingredientId: z.string().uuid().optional().nullable(),
  customName: z.string().min(1, "Item name is required."),
  customNameBn: z.string().optional().nullable(),
  quantity: z.number().positive("Quantity must be greater than 0."),
  unit: z.enum(["kg", "g", "L", "ml", "pcs", "piece", "bunch", "hali", "packet", "box"]),
  purchaseDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)").optional(),
  expiryDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)").optional().nullable(),
  minimumQuantity: z.number().nonnegative().default(1),
  storageLocation: z.enum(["pantry", "refrigerator", "freezer", "countertop"]).default("pantry"),
  category: z.string().default("other"),
  notes: z.string().optional().nullable(),
});

export const PantryItemUpdateSchema = PantryItemCreateSchema.partial().extend({
  id: z.string().uuid(),
});

export type PantryItemCreateInput = z.infer<typeof PantryItemCreateSchema>;
export type PantryItemUpdateInput = z.infer<typeof PantryItemUpdateSchema>;
