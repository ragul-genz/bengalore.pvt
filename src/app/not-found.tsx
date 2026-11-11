import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import { Container } from "@/components/common";
import { COMPANY_DETAILS } from "@/data/company";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-20 bg-linear-to-br from-[#EAF2FC] via-[#F4F8FE] to-[#FFFFFF] relative overflow-hidden">
      <Container size="default" className="relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-6 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/50">
          <div className="inline-flex items-center gap-2.5 justify-center">
            <span className="w-6 h-[2px] bg-blue-600 rounded-full" />
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-blue-700">
              404 — Page Not Found
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#0A192F] tracking-tight">
            Looking for a{" "}
            <span className="text-blue-600">Connection?</span>
          </h1>

          <p className="text-base text-slate-600 leading-relaxed max-w-lg mx-auto">
            The page you requested could not be located on the New Link Technologies corporate portal.
            Please navigate back to our home page or explore our enterprise technology solutions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-600/20 hover:shadow-lg transition-all duration-200"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-sm shadow-xs transition-all duration-200"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="pt-6 border-t border-slate-100 text-xs text-slate-500">
            Need immediate assistance? Contact our team at{" "}
            <a
              href={`tel:${COMPANY_DETAILS.contact.phone}`}
              className="text-blue-600 font-bold hover:underline"
            >
              {COMPANY_DETAILS.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
