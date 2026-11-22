"use client";

import React, { useState, useRef } from "react";
import { X, Camera, Sparkles, Upload, Check, Trash2, Image as ImageIcon } from "lucide-react";
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
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  // Handle actual file upload from device or camera
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async () => {
      const base64 = reader.result as string;
      setPreviewImage(base64);
      processImageDetection(base64, file.type || "image/jpeg");
    };
    reader.readAsDataURL(file);
  };

  const handleSimulateScan = async () => {
    const sampleImg =
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80";
    setPreviewImage(sampleImg);
    processImageDetection(
      "data:image/jpeg;base64,samplebase64imagestringfortestingpurposesonly...",
      "image/jpeg"
    );
  };

  const processImageDetection = async (base64: string, mimeType: string) => {
    setIsScanning(true);
    try {
      const res = await fetch("/api/ai/vision-detect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          imageBase64: base64,
          mimeType: mimeType,
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
                Gemini Vision Fridge Scanner
              </h3>
              <p className="text-xs text-[#5e6b65]">
                Upload any kitchen or fridge photo to extract raw ingredients.
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

        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          capture="environment"
          onChange={handleFileChange}
          className="hidden"
        />

        <div className="space-y-4 pt-4 text-xs">
          {!previewImage ? (
            <div className="space-y-3">
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-[#e5dfd5] hover:border-[#183b2b] rounded-2xl p-8 text-center cursor-pointer bg-[#faf7f2] transition-colors space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-white shadow-xs mx-auto flex items-center justify-center text-[#183b2b]">
                  <Camera className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-sm text-[#18211e]">
                    Click to upload photo from your device or camera
                  </p>
                  <p className="text-[11px] text-[#5e6b65] mt-1">
                    Supports JPEG, PNG, WebP up to 5MB
                  </p>
                </div>
                <Button size="sm" variant="primary" className="text-xs">
                  <Upload className="w-3.5 h-3.5 mr-1" /> Browse / Take Photo
                </Button>
              </div>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={handleSimulateScan}
                  className="text-xs font-semibold text-[#183b2b] hover:underline"
                >
                  Or click here to test with a high-res sample kitchen photo
                </button>
              </div>
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
                  <p className="font-bold text-[#18211e]">
                    {isScanning ? "Gemini is analyzing photo..." : "Analysis Complete"}
                  </p>
                  <p className="text-[11px] text-[#5e6b65]">
                    {isScanning
                      ? "Extracting ingredients with localized Bengali intelligence..."
                      : `${detectedItems.length} ingredients recognized with confidence scores`}
                  </p>
                </div>
              </div>

              {/* Detected Items List */}
              <div className="space-y-2">
                <p className="font-bold text-[#18211e]">
                  Confirm & Edit Detected Ingredients:
                </p>
                <div className="max-h-48 overflow-y-auto space-y-2 pr-1">
                  {detectedItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#e5dfd5] shadow-2xs"
                    >
                      <div className="space-y-0.5">
                        <span className="font-bold text-[#18211e]">
                          {item.name}{" "}
                          <span className="text-[#5e6b65] font-normal">
                            ({item.name_bn})
                          </span>
                        </span>
                        <div className="flex items-center gap-2 text-[10px] text-[#5e6b65]">
                          <span className="font-mono">
                            Confidence: {Math.round(item.confidence * 100)}%
                          </span>
                          <span>•</span>
                          <span>Store: {item.storage_recommendation}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Badge variant="sage" className="font-mono text-[10px]">
                          {item.estimated_unit}
                        </Badge>
                        <button
                          onClick={() => handleRemove(idx)}
                          className="p-1 rounded text-[#8c9993] hover:text-[#b93828]"
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
                  <span>Confirm & Save to Monira's Pantry</span>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
