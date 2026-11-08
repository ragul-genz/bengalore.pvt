import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isDark = theme === "dark";
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col mb-12 md:mb-16",
        isCenter ? "items-center text-center mx-auto max-w-3xl" : "items-start text-left max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "text-xs md:text-sm font-semibold tracking-wider uppercase mb-3 px-3 py-1 rounded-full",
            isDark
              ? "bg-brand-blue/20 text-blue-300 border border-brand-blue/30"
              : "bg-brand-blue/10 text-brand-blue border border-brand-blue/15"
          )}
        >
          {eyebrow}
        </span>
      )}

      <h2
        className={cn(
          "text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-heading leading-tight",
          isDark ? "text-white" : "text-brand-navy"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed font-normal",
            isDark ? "text-slate-300" : "text-brand-secondary"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

