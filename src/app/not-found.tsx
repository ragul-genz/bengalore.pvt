import { ArrowLeft, Home } from "lucide-react";
import { Container, Button } from "@/components/common";
import { COMPANY_DETAILS } from "@/data/company";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 bg-brand-lightBg">
      <Container size="default">
        <div className="max-w-2xl mx-auto text-center space-y-6 bg-white p-8 sm:p-12 rounded-3xl border border-brand-border shadow-sm">
          <span className="eyebrow-badge">404 — Page Not Found</span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-brand-navy tracking-tight">
            Looking for a Connection?
          </h1>

          <p className="text-base text-brand-secondary leading-relaxed max-w-lg mx-auto">
            The page you requested could not be located on the New Link Technologies corporate portal.
            Please navigate back to our home page or explore our enterprise technology solutions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button
              variant="secondary"
              size="lg"
              href="/"
              leftIcon={<Home className="w-4 h-4" />}
            >
              Back to Home
            </Button>

            <Button
              variant="outline"
              size="lg"
              href="/services"
              rightIcon={<ArrowLeft className="w-4 h-4 rotate-180" />}
            >
              Explore Services
            </Button>
          </div>

          <div className="pt-6 border-t border-brand-border/60 text-xs text-brand-secondary">
            Need immediate assistance? Contact our team at{" "}
            <a
              href={`tel:${COMPANY_DETAILS.contact.phone}`}
              className="text-brand-blue font-bold hover:underline"
            >
              {COMPANY_DETAILS.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
