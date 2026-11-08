import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "navy" | "subtle" | "outline" | "white";
  size?: "sm" | "md";
  children: React.ReactNode;
}

export function Badge({
  children,
  variant = "subtle",
  size = "md",
  className,
  ...props
}: BadgeProps) {
  const variantStyles = {
    primary: "bg-brand-blue/10 text-brand-blue border border-brand-blue/20",
    navy: "bg-brand-navy text-white border border-brand-darkNavy",
    subtle: "bg-slate-100 text-brand-text border border-brand-border",
    outline: "bg-transparent text-brand-secondary border border-brand-border",
    white: "bg-white text-brand-navy border border-brand-border shadow-2xs",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 font-medium tracking-wide",
    md: "text-xs px-3 py-1 font-semibold tracking-wide",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full uppercase transition-colors select-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

