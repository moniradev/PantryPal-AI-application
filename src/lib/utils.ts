import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number, currency: string = "BDT"): string {
  if (currency === "BDT") {
    return `৳${amount.toLocaleString("en-BD")}`;
  }
  return `${currency} ${amount.toLocaleString()}`;
}
