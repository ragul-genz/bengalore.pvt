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
      "inline-flex items-center justify-center font-medium transition-all duration-300 ease-out select-none rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-[0.98]";

    const variantStyles = {
      primary:
        "bg-[#0A192F] text-white hover:bg-[#08162B] shadow-xs hover:shadow-lg hover:shadow-slate-900/20 border border-transparent font-semibold",
      secondary:
        "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/35 border border-transparent font-semibold",
      outline:
        "border border-slate-300 text-[#0A192F] bg-white hover:bg-slate-50 hover:border-blue-600 hover:text-blue-600 hover:shadow-md shadow-2xs font-semibold",
      ghost:
        "text-[#0A192F] bg-transparent hover:bg-slate-100/80 border border-transparent font-medium hover:-translate-y-0.5",
      white:
        "bg-white text-[#0A192F] hover:bg-slate-50 border border-slate-200 shadow-sm hover:shadow-lg font-semibold",
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

