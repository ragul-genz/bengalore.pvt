import {
  Hero,
  AboutPreview,
  ProjectsPreview,
  Certificates,
  Services,
  Partners,
  TeamSection,
  CtaSection,
} from "@/components/home";

export default function Home() {
  return (
    <>
      {/* 1. Pure Minimalist Cinema Hero (With Audio & Morphing Exit Controller) */}
      <Hero />

      {/* 2. Scroll Transition Banner (Elevate + Theme Lightbulb) & 3-Column Milestone HUD */}
      <AboutPreview />

      {/* 3. Flagship Creations (3D Coverflow Project Carousel) */}
      <ProjectsPreview />

      {/* 4. The Winning Streak (Luxury Gold Accreditations & Commendation Cards) */}
      <Certificates />

      {/* 5. What We Do (Interactive Split Services List with Dynamic Showcase Photo) */}
      <Services />

      {/* 6. Strategic Government & OEM Brand Alliances */}
      <Partners />

      {/* 7. Humans of New Link & Engineering Tribe */}
      <TeamSection />

      {/* 8. Final Turnkey Consultation CTA */}
      <CtaSection />
    </>
  );
}
