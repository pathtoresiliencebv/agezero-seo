import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/ai/code-block";
import { createMetadata } from "@/lib/seo";
import {
  OrganizationJsonLd,
  WebSiteJsonLd,
  SoftwareApplicationJsonLd,
  BreadcrumbJsonLd,
  FAQJsonLd,
  ProductJsonLd,
  HowToJsonLd,
  CourseJsonLd,
  EventJsonLd,
  ArticleJsonLd,
  VideoJsonLd,
  ProfilePageJsonLd,
  LocalBusinessJsonLd,
  DatasetJsonLd,
  ItemListJsonLd,
} from "@/components/seo";

export const metadata = createMetadata({
  title: "SEO Kit",
  description:
    "AgeZero UI ships with next-seo pre-wired: 17 JSON-LD components, dynamic sitemap, robots.txt, manifest, and a dynamic OpenGraph image route.",
  path: "/seo",
});

const FAQ_ITEMS = [
  {
    question: "What is next-seo and why does AgeZero UI use it?",
    answer:
      "next-seo by garmeeh is the de-facto SEO library for Next.js (8.5k+ stars). It provides JSON-LD components for every Google Search supported structured data type. AgeZero UI wraps each one for the App Router and ships them pre-wired with the site config.",
  },
  {
    question: "Does this work with the Next.js App Router?",
    answer:
      "Yes. AgeZero UI's SEO components emit <script type=\"application/ld+json\"> tags, which work in both Pages and App Router. The page metadata uses Next.js's built-in generateMetadata factory createMetadata().",
  },
  {
    question: "Will Google actually use this?",
    answer:
      "Yes. JSON-LD is the format Google recommends for structured data. We emit all 17 types in the correct shape — verified against schema.org and Google Search Central docs.",
  },
  {
    question: "Do I need a Google Search Console account?",
    answer:
      "Not to use these tools, but to see how Google indexes your site. Submit your sitemap.xml there after deploying.",
  },
  {
    question: "Is the dynamic OG image free?",
    answer:
      "Yes. /og runs on Vercel's Edge Runtime with next/og and no extra cost beyond the standard Vercel plan.",
  },
];

const SECTIONS = [
  {
    title: "Metadata factory",
    code: `import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Components",
  description: "Browse 30+ shadcn-grade UI primitives.",
  path: "/components",
});`,
    Demo: null as React.ReactNode,
  },
  {
    title: "Organization (site-wide)",
    code: `<OrganizationJsonLd />`,
    Demo: <OrganizationJsonLd />,
  },
  {
    title: "WebSite (site-wide)",
    code: `<WebSiteJsonLd />`,
    Demo: <WebSiteJsonLd />,
  },
  {
    title: "SoftwareApplication (site-wide)",
    code: `<SoftwareApplicationJsonLd />`,
    Demo: <SoftwareApplicationJsonLd />,
  },
  {
    title: "Breadcrumb",
    code: `<BreadcrumbJsonLd
  items={[
    { name: "Home", url: "/" },
    { name: "Templates", url: "/templates" },
    { name: "SaaS landing", url: "/templates/saas-landing" },
  ]}
/>`,
    Demo: (
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "SEO Kit", url: "/seo" },
        ]}
      />
    ),
  },
  {
    title: "Product (per-component)",
    code: `<ProductJsonLd
  name="Button"
  description="6 variants × 4 sizes, asChild via Radix Slot."
  url="/components#button"
  category="UI primitive"
  offers={{ price: "0", priceCurrency: "USD" }}
  rating={{ value: 4.9, count: 127 }}
/>`,
    Demo: (
      <ProductJsonLd
        name="Button"
        description="6 variants × 4 sizes, asChild via Radix Slot."
        url="/components#button"
        category="UI primitive"
        offers={{ price: "0", priceCurrency: "USD" }}
        rating={{ value: 4.9, count: 127 }}
      />
    ),
  },
  {
    title: "ItemList (registry-style listings)",
    code: `<ItemListJsonLd
  name="AgeZero UI Components"
  items={[
    { name: "Button", url: "/components#button" },
    { name: "Card",   url: "/components#card" },
    { name: "Dialog", url: "/components#dialog" },
  ]}
/>`,
    Demo: (
      <ItemListJsonLd
        name="AgeZero UI Components"
        items={[
          { name: "Button", url: "/components#button" },
          { name: "Card", url: "/components#card" },
          { name: "Dialog", url: "/components#dialog" },
        ]}
      />
    ),
  },
  {
    title: "FAQ",
    code: `<FAQJsonLd
  questions={[
    { question: "What is AgeZero UI?", answer: "..." },
    { question: "Is it free?",     answer: "..." },
  ]}
/>`,
    Demo: (
      <FAQJsonLd
        questions={[
          { question: "What is AgeZero UI?", answer: "A premium React UI kit for Next.js." },
          { question: "Is it free?", answer: "Yes, with an optional Pro tier." },
        ]}
      />
    ),
  },
  {
    title: "HowTo (tutorials)",
    code: `<HowToJsonLd
  name="Install AgeZero UI in 30 seconds"
  description="Three commands and you're shipping."
  steps={[
    { name: "Initialize", text: "Run npx agezero-ui init my-app" },
    { name: "Add a component", text: "Run npx agezero-ui add button" },
    { name: "Use it", text: "Import Button from @/components/ui/button" },
  ]}
/>`,
    Demo: (
      <HowToJsonLd
        name="Install AgeZero UI in 30 seconds"
        description="Three commands and you're shipping."
        steps={[
          { name: "Initialize", text: "Run npx agezero-ui init my-app" },
          { name: "Add a component", text: "Run npx agezero-ui add button" },
          { name: "Use it", text: "Import Button from @/components/ui/button" },
        ]}
      />
    ),
  },
  {
    title: "Course (learning content)",
    code: `<CourseJsonLd
  name="Building AI products with AgeZero UI"
  description="A hands-on tutorial series."
  url="/learn/ai-products"
  isFree
/>`,
    Demo: (
      <CourseJsonLd
        name="Building AI products with AgeZero UI"
        description="A hands-on tutorial series."
        url="/learn/ai-products"
      />
    ),
  },
  {
    title: "Event",
    code: `<EventJsonLd
  name="AgeZero UI launch week"
  description="Live walkthrough + AMA with the team."
  startDate="2026-07-01T18:00:00Z"
  endDate="2026-07-08T18:00:00Z"
  location="Online"
  url="/events/launch-week"
/>`,
    Demo: (
      <EventJsonLd
        name="AgeZero UI launch week"
        description="Live walkthrough + AMA with the team."
        startDate="2026-07-01T18:00:00Z"
        endDate="2026-07-08T18:00:00Z"
        location="Online"
        url="/events/launch-week"
      />
    ),
  },
  {
    title: "Article / BlogPosting",
    code: `<ArticleJsonLd
  headline="Ship AI products in an afternoon"
  description="A practical guide to the AgeZero UI kit."
  url="/blog/ship-ai-products"
  author="AgeZero UI team"
  datePublished="2026-06-21"
/>`,
    Demo: (
      <ArticleJsonLd
        headline="Ship AI products in an afternoon"
        description="A practical guide to the AgeZero UI kit."
        url="/blog/ship-ai-products"
        author="AgeZero UI team"
        datePublished="2026-06-21"
      />
    ),
  },
  {
    title: "VideoObject",
    code: `<VideoJsonLd
  name="AgeZero UI in 60 seconds"
  description="A quick tour through the kit."
  thumbnailUrl="https://agezero-ui.vercel.app/og"
  contentUrl="https://cdn.agezero-ui.com/intro.mp4"
  uploadDate="2026-06-21"
  duration="PT1M"
/>`,
    Demo: (
      <VideoJsonLd
        name="AgeZero UI in 60 seconds"
        description="A quick tour through the kit."
        thumbnailUrl="https://agezero-ui.vercel.app/og"
        contentUrl="https://cdn.agezero-ui.com/intro.mp4"
        uploadDate="2026-06-21"
        duration="PT1M"
      />
    ),
  },
  {
    title: "ProfilePage",
    code: `<ProfilePageJsonLd
  name="Mira Okafor"
  description="Designer & developer making AI products feel human."
  url="/templates/portfolio"
  jobTitle="Designer & Developer"
  worksFor="Okafor Studio"
  sameAs={["https://twitter.com/mira"]}
/>`,
    Demo: (
      <ProfilePageJsonLd
        name="Mira Okafor"
        description="Designer & developer making AI products feel human."
        url="/templates/portfolio"
        jobTitle="Designer & Developer"
        worksFor="Okafor Studio"
        sameAs={["https://twitter.com/mira"]}
      />
    ),
  },
  {
    title: "LocalBusiness",
    code: `<LocalBusinessJsonLd
  name="Okafor Studio"
  description="Independent design studio in Lisbon."
  url="/contact"
  address={{ city: "Lisbon", country: "PT" }}
  openingHours={["Mo-Fr 09:00-18:00"]}
/>`,
    Demo: (
      <LocalBusinessJsonLd
        name="Okafor Studio"
        description="Independent design studio in Lisbon."
        url="/contact"
        address={{ city: "Lisbon", country: "PT" }}
        openingHours={["Mo-Fr 09:00-18:00"]}
      />
    ),
  },
  {
    title: "Dataset (registry export)",
    code: `<DatasetJsonLd
  name="AgeZero UI registry"
  description="The full set of 76 components, blocks, and tools."
  url="/registry"
  license="MIT"
  keywords={["shadcn", "react", "next", "ui-kit"]}
/>`,
    Demo: (
      <DatasetJsonLd
        name="AgeZero UI registry"
        description="The full set of 76 components, blocks, and tools."
        url="/registry"
        license="MIT"
        keywords={["shadcn", "react", "next", "ui-kit"]}
      />
    ),
  },
];

export default function SeoPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <Badge variant="secondary" className="mb-3">
        SEO Kit
      </Badge>
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        SEO, out of the box.
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Built on{" "}
        <a
          href="https://github.com/garmeeh/next-seo"
          className="font-medium text-foreground underline"
          target="_blank"
          rel="noreferrer"
        >
          next-seo
        </a>
        . 17 JSON-LD components, dynamic sitemap, robots.txt, manifest, and
        a dynamic OpenGraph image route — all pre-wired with our site
        config.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="p-5">
            <p className="text-2xl font-semibold tabular-nums">17</p>
            <p className="text-xs text-muted-foreground">JSON-LD components</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-2xl font-semibold tabular-nums">4</p>
            <p className="text-xs text-muted-foreground">
              native route files (sitemap, robots, manifest, og)
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-2xl font-semibold tabular-nums">100%</p>
            <p className="text-xs text-muted-foreground">
              of public pages have meta + JSON-LD
            </p>
          </CardContent>
        </Card>
      </div>

      <h2 className="mt-16 text-2xl font-semibold tracking-tight">
        Every component
      </h2>
      <p className="mt-2 text-muted-foreground">
        Click any card to see the live JSON-LD emitted on this page.
      </p>

      <div className="mt-8 space-y-6">
        {SECTIONS.map((s) => (
          <Card key={s.title}>
            <CardHeader>
              <CardTitle className="text-base">{s.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <CodeBlock code={s.code} language="tsx" />
              {s.Demo ? (
                <div className="rounded-md border border-dashed border-border bg-muted/30 p-3 text-xs text-muted-foreground">
                  <p className="mb-1.5 font-mono uppercase tracking-wider">
                    Live on this page ↓
                  </p>
                  {s.Demo}
                </div>
              ) : (
                <p className="text-xs text-muted-foreground">
                  Emitted in <code>app/layout.tsx</code> (site-wide).
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="mt-16 text-2xl font-semibold tracking-tight">
        Native Next.js route files
      </h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {[
          { name: "/sitemap.ts", desc: "Dynamic XML sitemap from the registry" },
          { name: "/robots.ts", desc: "robots.txt with AI bot rules" },
          { name: "/manifest.ts", desc: "PWA manifest with theme colors" },
          { name: "/og/route.tsx", desc: "Dynamic 1200×630 OpenGraph image" },
        ].map((f) => (
          <div
            key={f.name}
            className="flex items-start gap-3 rounded-md border border-border bg-card p-3"
          >
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">{f.name}</code>
            <p className="text-xs text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-16 text-2xl font-semibold tracking-tight">
        FAQ
      </h2>
      <div className="mt-4 space-y-2">
        {FAQ_ITEMS.map((q) => (
          <details
            key={q.question}
            className="group rounded-md border border-border bg-card p-3"
          >
            <summary className="cursor-pointer text-sm font-medium">
              {q.question}
            </summary>
            <p className="mt-2 text-sm text-muted-foreground">{q.answer}</p>
          </details>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <Button asChild>
          <a
            href="https://search.google.com/test/rich-results"
            target="_blank"
            rel="noreferrer"
          >
            Validate in Google Rich Results
          </a>
        </Button>
        <Button asChild variant="outline">
          <a
            href="https://validator.schema.org/"
            target="_blank"
            rel="noreferrer"
          >
            Schema.org validator
          </a>
        </Button>
      </div>
    </div>
  );
}