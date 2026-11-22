import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Please provide a valid email address."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

export const RegisterSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  email: z.string().email("Please provide a valid email address."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

export const UserPreferencesSchema = z.object({
  preferredLanguage: z.enum(["bn", "en"]).default("bn"),
  currency: z.string().default("BDT"),
  householdSize: z.number().int().positive().default(1),
  dailyFoodBudget: z.number().nonnegative().default(0),
  monthlyFoodBudget: z.number().nonnegative().default(8000),
  dietaryPreferences: z.array(z.string()).default([]),
  allergies: z.array(z.string()).default([]),
});

export type LoginInput = z.infer<typeof LoginSchema>;
export type RegisterInput = z.infer<typeof RegisterSchema>;
export type UserPreferencesInput = z.infer<typeof UserPreferencesSchema>;
