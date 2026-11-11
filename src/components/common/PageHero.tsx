import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "./Container";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
  children?: React.ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  breadcrumbs,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#EAF2FC] via-[#F4F8FE] to-[#FFFFFF] pt-10 pb-14 sm:pt-14 sm:pb-18 border-b border-slate-200/70">
      {/* Subtle Geometric Angular Light Ribbons matching Home Hero */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute -left-24 top-0 w-96 h-full bg-linear-to-br from-blue-200/35 via-blue-100/20 to-transparent -skew-x-12 transform" />
        <div className="absolute right-0 -top-20 w-[450px] h-[450px] bg-blue-100/40 rounded-full blur-3xl" />
        <div
          className="hidden lg:block absolute top-0 right-0 bottom-0 w-1/3 bg-linear-to-l from-blue-100/40 to-transparent"
          style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />
      </div>

      <Container size="default" className="relative z-10">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-xs border border-slate-200/80 text-xs text-slate-600 shadow-2xs">
              {breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={crumb.label}>
                  {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-400" />}
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-blue-600 font-medium transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-blue-600 font-semibold">{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </ol>
          </nav>
        )}

        <div className="max-w-3xl space-y-4">
          {/* Eyebrow with Horizontal Line */}
          <div className="flex items-center gap-3">
            <span className="w-7 h-[2px] bg-blue-600 rounded-full shrink-0" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-blue-700">
              {eyebrow}
            </span>
          </div>

          {/* Dual-tone Headline */}
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#0A192F] leading-[1.15]">
            {title}{" "}
            {highlight && <span className="text-blue-600">{highlight}</span>}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
            {description}
          </p>

          {children && <div className="pt-2">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
