"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  title?: string;
  caption?: string;
}

export function Lightbox({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  title,
  caption,
}: LightboxProps) {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [prevImage, setPrevImage] = useState<string>(imageSrc);

  // Reset zoom level during render when image changes
  if (prevImage !== imageSrc) {
    setPrevImage(imageSrc);
    setZoomLevel(1);
  }

  // Handle body overflow lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-black/95 backdrop-blur-md p-4 sm:p-6 select-none animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Header Bar */}
      <div
        className="w-full max-w-5xl flex items-center justify-between text-white z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="space-y-0.5">
          <p className="text-sm sm:text-base font-bold font-heading">{title || imageAlt}</p>
          {caption && <p className="text-xs text-slate-400">{caption}</p>}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setZoomLevel((prev) => Math.min(prev + 0.3, 2.5))}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Zoom in"
          >
            <ZoomIn className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => setZoomLevel((prev) => Math.max(prev - 0.3, 0.8))}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Zoom out"
          >
            <ZoomOut className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => setZoomLevel(1)}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Reset zoom"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg bg-red-600/80 hover:bg-red-600 text-white transition-colors ml-2"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Image Preview Area */}
      <div
        className="flex-1 w-full max-w-5xl flex items-center justify-center p-2 sm:p-4 overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="relative transition-transform duration-200 ease-out max-h-[80vh] max-w-full flex items-center justify-center"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1200}
            height={800}
            className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-2xl border border-white/10"
            priority
          />
        </div>
      </div>

      {/* Bottom Hint */}
      <div className="text-center text-xs text-slate-400 py-2">
        <span>Click Esc or close button to exit • Use zoom controls or click outside</span>
      </div>
    </div>
  );
}
