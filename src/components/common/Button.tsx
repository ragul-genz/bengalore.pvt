import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      href,
      external,
      isLoading = false,
      leftIcon,
      rightIcon,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 select-none rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none hover:scale-[1.01] active:scale-[0.98]";

    const variantStyles = {
      primary:
        "bg-brand-navy text-white hover:bg-brand-darkNavy shadow-xs hover:shadow-md border border-transparent font-semibold",
      secondary:
        "bg-linear-to-r from-blue-600 via-blue-600 to-rose-600 hover:from-blue-500 hover:to-rose-500 text-white shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/35 border border-transparent font-semibold",
      outline:
        "border border-slate-300 text-brand-navy bg-white hover:bg-slate-50 hover:border-brand-blue/50 shadow-2xs font-medium",
      ghost:
        "text-brand-navy bg-transparent hover:bg-slate-100/80 border border-transparent font-medium",
      white:
        "bg-white text-brand-navy hover:bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md font-semibold",
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5 font-medium",
      md: "text-sm px-5 py-2.5 gap-2 font-medium tracking-tight",
      lg: "text-base px-6 py-3.5 gap-2.5 font-semibold",
    };

    const classes = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    const content = (
      <>
        {isLoading && <Loader2 className="w-4 h-4 animate-spin text-current" />}
        {!isLoading && leftIcon && (
          <span className="shrink-0">{leftIcon}</span>
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && (
          <span className="shrink-0">{rightIcon}</span>
        )}
      </>
    );

    if (href) {
      if (external) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes}
          >
            {content}
          </a>
        );
      }
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        disabled={disabled || isLoading}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

