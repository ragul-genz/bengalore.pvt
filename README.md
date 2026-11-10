# New Link Technologies Bangalore Pvt. Ltd. — Enterprise Web Portal

Official corporate web portal for **New Link Technologies Bangalore Pvt. Ltd.**, engineered with Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind CSS v4, Lucide React, and Motion.

Under our guiding philosophy of **"Connecting Values"**, New Link Technologies delivers end-to-end Enterprise IT systems, Modular Data Centres, Campus Optical Fiber Networks, Structured Cabling, Audio Visual automation, and Clean Solar Energy for academic institutions, public sector organizations, and enterprise leaders across Karnataka and nationwide.

---

## 🏢 Corporate Overview

- **Company Name:** New Link Technologies Bangalore Pvt. Ltd.
- **Brand Tagline:** *Connecting Values.*
- **Executive Leadership:** M.G. Girish (Director)
- **Corporate Office:** No. 12/1, 1st Floor, 11th 'B' Main Road, 36th Cross, 2nd Block, Rajajinagar, Bangalore - 560010, Karnataka, India
- **Telephone Support:** +91 95353 14141 (Direct Click-to-Call & WhatsApp)
- **Official Email:** girish.mg@newlinktec.com
- **Website Domain:** [https://www.newlinktec.com](https://www.newlinktec.com)

---

## 🏆 Key Demonstrated Installations (100% Authentic)

1. **220 kWp Solar Rooftop Power Plant**: Executed through ITI Limited for NAAC (National Assessment and Accreditation Council), Nagarbhavi, Bangalore.
2. **Modular Data Centre Deployment**: Turnkey server infrastructure executed for the University of Agricultural Sciences (UAS), Raichur.
3. **Campus Optical Fiber Backbone**: Supply of multi-building optical fiber networking, switching, and Wi-Fi solutions spanning 14 buildings (SJBIT / State Universities).
4. **Appreciation Commendations**: Commended by KEONICS (Govt. of Karnataka Enterprise) and NAAC / ITI Limited for exemplary uptime, adhering to safety protocols, and zero project delays.

---

## 💻 Tech Stack & Architecture

- **Framework:** [Next.js 16.4.5](https://nextjs.org/) (App Router, Turbopack, Partial Prerendering)
- **UI Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/) (Strict type checking)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with CSS variables
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Motion](https://motion.dev/) (Hardware-accelerated CSS transitions & reduced-motion fallback)
- **Forms & Validation:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **SEO & Structured Data:** Schema.org JSON-LD (Organization, LocalBusiness, ProfessionalService)

---

## 📁 Project Directory Structure

```text
├── public/
│   ├── certificates/     # Authentic scanned appreciation certificates (NAAC, KEONICS)
│   ├── clients/          # Official client & partner roster emblem sheets
│   ├── contact/          # Corporate contact presentation slides
│   ├── hero/             # High-resolution network nodes & presentation globe
│   ├── leadership/       # Studio executive portrait of Director M.G. Girish
│   ├── logo/             # High-res New Link corporate logos & transparent SVGs
│   ├── projects/         # Actual project installation photographs
│   └── services/         # Verified OEM systems and network cabling photographs
├── src/
│   ├── app/
│   │   ├── about/        # Corporate profile, philosophy & leadership section
│   │   ├── api/contact/  # Enterprise inquiry submission API (Zod-validated)
│   │   ├── contact/      # Contact details, WhatsApp trigger & Google Maps iframe
│   │   ├── projects/     # Installation gallery with interactive lightbox
│   │   ├── services/     # 8 dedicated service vertical pages
│   │   ├── globals.css   # Brand theme, base layers & typography
│   │   ├── layout.tsx    # Root layout, JSON-LD schema & global meta tags
│   │   ├── not-found.tsx # Branded 404 error page
│   │   ├── page.tsx      # Comprehensive enterprise homepage
│   │   ├── robots.ts     # Dynamic robots.txt configuration
│   │   └── sitemap.ts    # Automated XML sitemap generator
│   ├── components/
│   │   ├── common/       # UI primitives (Button, Card, Badge, Lightbox, ContactForm)
│   │   ├── home/         # Homepage sections (Hero, AboutPreview, Services, WhyChooseUs)
│   │   └── layout/       # Global Navbar, Mobile Drawer & Footer
│   ├── data/             # Company details, services, projects & partners data
│   └── lib/              # Utility functions (cn class combiner)
├── .env.example          # Sample environment variables
├── .gitignore            # Security ignore rules (.env.local excluded)
├── package.json
└── README.md
```

---

## 🚀 Local Development Setup

### 1. Prerequisites
- **Node.js**: v20+ or v22+ (v26 LTS fully supported)
- **npm** (v10+)

### 2. Installation
```bash
git clone https://github.com/ragul-genz/bengalore.pvt.git
cd bengalore.pvt
npm install
```

### 3. Running Dev Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Code Quality & Linting
```bash
npm run lint
```
Guarantees 0 ESLint errors and 0 warnings.

### 5. Production Build
```bash
npm run build
```
Generates 19 static and dynamic routes with full partial prerendering.

---

## 🔐 Environment Variables (`.env.local`)

Create a `.env.local` file in the project root:

```env
# Application Base URL (Canonical for SEO & OpenGraph)
NEXT_PUBLIC_SITE_URL=https://www.newlinktec.com

# Resend Email Integration (Optional)
RESEND_API_KEY=re_your_api_key_here
CONTACT_NOTIFICATION_EMAIL=girish.mg@newlinktec.com
CONTACT_SENDER_EMAIL=notifications@newlinktec.com

# Supabase Cloud Database (Optional)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here
```

> **Note:** `.env.local` is strictly ignored in `.gitignore` and must never be committed to Git.

---

## 🗄️ Supabase Cloud Database Setup (Optional)

To stream contact inquiries to Supabase:

1. Create a free account at [Supabase](https://supabase.com/).
2. Create a new project: `new-link-technologies`.
3. Open the **SQL Editor** and run the following schema:

```sql
create table public.inquiries (
  id text primary key,
  full_name text not null,
  company_name text not null,
  email text not null,
  phone text not null,
  interested_service text not null,
  project_details text not null,
  privacy_consent boolean not null default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.inquiries enable row level security;

-- Policy: Only authenticated service role can read inquiries
create policy "Service role can read inquiries"
  on public.inquiries for select
  using (auth.role() = 'service_role');

-- Policy: Anyone can insert inquiries through the contact form
create policy "Public can submit inquiries"
  on public.inquiries for insert
  with check (true);
```

4. Copy the Project URL and Anon/Service Role Keys into `.env.local`.

---

## 📧 Resend Email Delivery Setup (Optional)

To send immediate email notifications when a client submits an enquiry:

1. Create an account at [Resend](https://resend.com/).
2. Add and verify your corporate domain (`newlinktec.com` with DKIM and SPF DNS records).
3. Generate an API Key under **API Keys**.
4. Set `RESEND_API_KEY` and `CONTACT_NOTIFICATION_EMAIL` in Vercel or `.env.local`.

---

## 🌐 Vercel Production Deployment

### 1. Import Project to Vercel
1. Log in to [Vercel](https://vercel.com/).
2. Click **Add New** &rarr; **Project**.
3. Import `ragul-genz/bengalore.pvt` from GitHub.
4. Framework Preset: **Next.js** (automatically detected).
5. Add Environment Variables (from `.env.example`).
6. Click **Deploy**.

### 2. Custom Domain Configuration
1. Go to **Project Settings** &rarr; **Domains**.
2. Add `www.newlinktec.com` and `newlinktec.com`.
3. In your DNS registrar (GoDaddy, Namecheap, Cloudflare, Hostinger):
   - **Type A**: `newlinktec.com` &rarr; `76.76.21.21`
   - **Type CNAME**: `www` &rarr; `cname.vercel-dns.com`
4. SSL certificates are provisioned automatically by Vercel.

---

## 🛡️ Security, SEO & Accessibility Standards

- **Zero Stock / Demo Images**: Exclusively uses authentic corporate profile scans, certificates, and director photographs.
- **WCAG 2.1 AA Contrast**: High-contrast typography across both dark navy and clean white sections.
- **Semantic HTML**: Proper `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` hierarchies.
- **Search Engine Optimization**: Complete OpenGraph, Twitter cards, canonical tags, automated XML sitemap (`/sitemap.xml`), and robots exclusion (`/robots.txt`).
- **Reduced Motion Support**: Honored via `@media (prefers-reduced-motion: reduce)`.
