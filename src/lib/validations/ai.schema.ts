import { z } from "zod";

export const VisionDetectSchema = z.object({
  imageBase64: z.string().min(20, "Image base64 data is required."),
  mimeType: z.enum(["image/jpeg", "image/png", "image/webp", "image/jpg"]),
});

export const DetectedIngredientSchema = z.object({
  name: z.string(),
  name_bn: z.string(),
  confidence: z.number().min(0).max(1),
  category: z.string(),
  estimated_unit: z.string().default("piece"),
  storage_recommendation: z.enum(["pantry", "refrigerator", "freezer", "countertop"]).default("pantry"),
});

export const VisionDetectResponseSchema = z.object({
  ingredients: z.array(DetectedIngredientSchema),
});

export const GenerateRecipePromptSchema = z.object({
  pantryItems: z.array(
    z.object({
      name: z.string(),
      quantity: z.number().or(z.string()),
      unit: z.string(),
      isExpiringSoon: z.boolean().optional(),
    })
  ),
  mealSlot: z.enum(["breakfast", "lunch", "dinner", "snack"]).default("dinner"),
  budgetLimitBDT: z.number().positive().optional(),
  maxCookingTimeMinutes: z.number().positive().optional(),
  servings: z.number().int().positive().default(2),
  dietaryRestrictions: z.array(z.string()).default([]),
  allergies: z.array(z.string()).default([]),
});

export type VisionDetectInput = z.infer<typeof VisionDetectSchema>;
export type GenerateRecipePromptInput = z.infer<typeof GenerateRecipePromptSchema>;
