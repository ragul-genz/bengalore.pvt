import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "flat" | "navy";
  hoverable?: boolean;
}

export function Card({
  className,
  variant = "default",
  hoverable = true,
  children,
  ...props
}: CardProps) {
  const variantStyles = {
    default:
      "bg-white border border-brand-border text-brand-text shadow-[0_1px_3px_0_rgba(11,31,58,0.03)]",
    elevated:
      "bg-white border border-brand-border text-brand-text shadow-[0_4px_16px_0_rgba(11,31,58,0.06)]",
    flat: "bg-brand-lightBg border border-brand-border text-brand-text",
    navy: "bg-brand-navy border border-brand-darkNavy text-white",
  };

  const hoverStyle = hoverable
    ? variant === "navy"
      ? "hover:border-brand-blue/50 hover:shadow-[0_12px_30px_-5px_rgba(0,0,0,0.3)] hover:-translate-y-0.5"
      : "hover:border-brand-blue/30 hover:shadow-[0_10px_24px_-4px_rgba(11,31,58,0.08)] hover:-translate-y-0.5"
    : "";

  return (
    <div
      className={cn(
        "rounded-xl p-6 sm:p-7 transition-all duration-200",
        variantStyles[variant],
        hoverStyle,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col space-y-2 mb-4", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-lg sm:text-xl font-bold tracking-tight text-inherit",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-sm text-brand-secondary leading-relaxed font-normal",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export function CardContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("text-sm text-brand-text/90", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mt-6 pt-4 border-t border-brand-border/80 flex items-center justify-between", className)}
      {...props}
    >
      {children}
    </div>
  );
}

