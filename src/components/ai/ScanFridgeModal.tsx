"use client";

import React, { useState } from "react";
import { X, Camera, Sparkles, Upload, Check, Trash2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ScanFridgeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmAdd: (items: any[]) => void;
}

export function ScanFridgeModal({
  isOpen,
  onClose,
  onConfirmAdd,
}: ScanFridgeModalProps) {
  const [isScanning, setIsScanning] = useState(false);
  const [detectedItems, setDetectedItems] = useState<any[]>([]);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSimulateScan = async () => {
    setIsScanning(true);
    // Simulate image upload with sample kitchen ingredients
    setPreviewImage(
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80"
    );

    try {
      const res = await fetch("/api/ai/vision-detect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          imageBase64: "data:image/jpeg;base64,samplebase64imagestringfortestingpurposesonly...",
          mimeType: "image/jpeg",
        }),
      });
      const data = await res.json();
      if (data.success && data.data?.ingredients) {
        setDetectedItems(data.data.ingredients);
      }
    } catch (err) {
      console.error("Scan error:", err);
    } finally {
      setIsScanning(false);
    }
  };

  const handleRemove = (index: number) => {
    setDetectedItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleConfirm = () => {
    onConfirmAdd(
      detectedItems.map((item) => ({
        id: crypto.randomUUID(),
        name: item.name,
        nameBn: item.name_bn,
        quantity: "1",
        unit: item.estimated_unit || "kg",
        category: item.category || "vegetables",
        location: item.storage_recommendation || "refrigerator",
        expiry: "2026-11-28",
        status: "safe",
      }))
    );
    onClose();
    setDetectedItems([]);
    setPreviewImage(null);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl border border-[#e5dfd5] w-full max-w-xl p-6 shadow-xl relative animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between pb-4 border-b border-[#f3efe8]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#183b2b] text-[#d8e8dc]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-[#183b2b]">
                Gemini Vision Fridge & Countertop Scanner
              </h3>
              <p className="text-xs text-[#5e6b65]">
                Upload photo to detect raw ingredients with confidence scores.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-[#faf7f2] text-[#5e6b65]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 pt-4 text-xs">
          {/* Upload Dropzone */}
          {!previewImage ? (
            <div
              onClick={handleSimulateScan}
              className="border-2 border-dashed border-[#e5dfd5] hover:border-[#183b2b] rounded-2xl p-8 text-center cursor-pointer bg-[#faf7f2] transition-colors space-y-3"
            >
              <div className="w-12 h-12 rounded-full bg-white shadow-xs mx-auto flex items-center justify-center text-[#183b2b]">
                <Camera className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-sm text-[#18211e]">
                  Click to select food image or take a photo
                </p>
                <p className="text-[11px] text-[#5e6b65]">
                  Supports JPEG, PNG, WebP up to 5MB
                </p>
              </div>
              <Button size="sm" variant="outline" className="text-xs">
                Run AI Demo Scan
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 rounded-2xl bg-[#faf7f2] border border-[#e5dfd5]">
                <img
                  src={previewImage}
                  alt="Scanned kitchen"
                  className="w-16 h-16 rounded-xl object-cover shrink-0 border border-[#e5dfd5]"
                />
                <div className="space-y-0.5">
                  <p className="font-semibold text-[#18211e]">
                    Photo Analyzed by Gemini Multimodal
                  </p>
                  <p className="text-[11px] text-[#5e6b65]">
                    {detectedItems.length} ingredients recognized with high confidence
                  </p>
                </div>
              </div>

              {/* Detected Items Confirmation List */}
              <div className="space-y-2">
                <p className="font-semibold text-[#18211e]">
                  Review & Confirm Detected Items:
                </p>
                <div className="max-h-48 overflow-y-auto space-y-2 pr-1">
                  {detectedItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#e5dfd5] shadow-2xs"
                    >
                      <div className="space-y-0.5">
                        <span className="font-semibold text-[#18211e]">
                          {item.name}{" "}
                          <span className="text-[#5e6b65] font-normal">
                            ({item.name_bn})
                          </span>
                        </span>
                        <div className="flex items-center gap-2 text-[10px] text-[#5e6b65]">
                          <span>Confidence: {Math.round(item.confidence * 100)}%</span>
                          <span>•</span>
                          <span>Store in: {item.storage_recommendation}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Badge variant="sage" className="font-mono text-[10px]">
                          {item.estimated_unit}
                        </Badge>
                        <button
                          onClick={() => handleRemove(idx)}
                          className="p-1 rounded text-[#5e6b65] hover:text-[#b93828]"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#f3efe8] flex items-center justify-between">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    setPreviewImage(null);
                    setDetectedItems([]);
                  }}
                >
                  Retake Photo
                </Button>
                <Button
                  size="sm"
                  variant="primary"
                  onClick={handleConfirm}
                  disabled={detectedItems.length === 0}
                  className="gap-1.5 shadow-xs"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Confirm & Save to Pantry</span>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
