import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
}

export function Logo({
  variant = "light",
  size = "md",
  className,
  href = "/",
}: LogoProps) {
  const isDark = variant === "dark";

  const dimensions = {
    sm: { width: 108, height: 38, maxHeight: "max-h-[36px]" },
    md: { width: 136, height: 48, maxHeight: "max-h-[44px]" },
    lg: { width: 165, height: 58, maxHeight: "max-h-[54px]" },
  };

  const currentDim = dimensions[size];

  const content = isDark ? (
    <div
      className={cn(
        "inline-flex items-center bg-white px-3.5 py-2 rounded-xl border border-slate-700/60 shadow-sm transition-transform duration-200 hover:scale-[1.02]",
        className
      )}
    >
      <Image
        src="/logo/company-logo.png"
        alt="New Link Technologies Bangalore Pvt. Ltd. - Connecting Values"
        width={currentDim.width}
        height={currentDim.height}
        priority
        className={cn("w-auto object-contain", currentDim.maxHeight)}
      />
    </div>
  ) : (
    <div
      className={cn(
        "inline-flex items-center transition-transform duration-200 hover:scale-[1.02]",
        className
      )}
    >
      <Image
        src="/logo/company-logo-transparent.png"
        alt="New Link Technologies Bangalore Pvt. Ltd. - Connecting Values"
        width={currentDim.width}
        height={currentDim.height}
        priority
        className={cn("w-auto object-contain", currentDim.maxHeight)}
      />
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-xl inline-block"
      >
        {content}
      </Link>
    );
  }

  return content;
}
