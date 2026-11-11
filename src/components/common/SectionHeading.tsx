import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
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
        "flex flex-col mb-12 md:mb-14",
        isCenter ? "items-center text-center mx-auto max-w-3xl" : "items-start text-left max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <div className="flex items-center gap-2.5 mb-3">
          <span
            className={cn(
              "w-6 h-[2px] rounded-full shrink-0",
              isDark ? "bg-blue-400" : "bg-blue-600"
            )}
          />
          <span
            className={cn(
              "text-[11px] sm:text-xs font-bold tracking-[0.14em] uppercase",
              isDark ? "text-blue-300" : "text-blue-600"
            )}
          >
            {eyebrow}
          </span>
        </div>
      )}

      <h2
        className={cn(
          "text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-heading leading-tight",
          isDark ? "text-white" : "text-[#0A192F]"
        )}
      >
        {title}{" "}
        {highlight && (
          <span className={cn(isDark ? "text-blue-400" : "text-blue-600")}>
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-3.5 text-sm sm:text-base lg:text-lg leading-relaxed font-normal",
            isDark ? "text-slate-300" : "text-slate-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
