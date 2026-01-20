import Link from "next/link";
import {
  Sparkles, Download, ArrowUpRight, FileText, Image, Mail,
  Calendar, ExternalLink, Quote, TrendingUp,
} from "lucide-react";
import { Suspense } from "react";
import { Shell } from "@/components/shell";
import { ErrorBoundary } from "@/components/error-boundary";
import { PageLoader } from "@/components/page-loader";


interface PressRelease {
  date: string;
  title: string;
  outlet: string;
  link: string;
}

interface Coverage {
  outlet: string;
  logo: string;
  quote: string;
}

interface Resource {
  title: string;
  desc: string;
  icon: typeof Image | typeof FileText;
  size: string;
}

const pressReleases: PressRelease[] = [
  { date: "Oct 24, 2025", title: "HAUS Raises $42M Series B to Expand AI-Powered Real Estate Platform", outlet: "TechCrunch", link: "#" },
  { date: "Sep 15, 2025", title: "HAUS Launches Neural Search 2.0 with Natural Language Queries", outlet: "The Verge", link: "#" },
  { date: "Aug 02, 2025", title: "HAUS Partners with Major Banks for Integrated Financing", outlet: "Financial Times", link: "#" },
  { date: "Jul 10, 2025", title: "HAUS Expands to 12 New Markets Across APAC", outlet: "Bloomberg", link: "#" },
  { date: "Jun 22, 2025", title: "How HAUS is Using AI to Democratize Real Estate Intelligence", outlet: "Forbes", link: "#" },
] as const;

const coverage: Coverage[] = [
  { outlet: "TechCrunch", logo: "TC", quote: "HAUS is doing for real estate what Bloomberg did for finance." },
  { outlet: "Forbes", logo: "F", quote: "The most sophisticated AI-native property platform we've seen." },
  { outlet: "The Verge", logo: "TV", quote: "Finally, a real estate app that actually uses AI meaningfully." },
  { outlet: "Bloomberg", logo: "B", quote: "Transforming how institutional investors approach property." },
] as const;

const resources: Resource[] = [
  { title: "Brand Guidelines", desc: "Logos, colors, and usage rules", icon: Image, size: "2.4 MB" },
  { title: "Press Kit", desc: "Company overview and fact sheet", icon: FileText, size: "1.8 MB" },
  { title: "Executive Bios", desc: "Leadership team information", icon: FileText, size: "340 KB" },
  { title: "Product Screenshots", desc: "High-res app screenshots", icon: Image, size: "12 MB" },
] as const;

function PressPageContent() {
  return (
    <div className="landing-page min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 backdrop-blur-xl" aria-label="Main navigation">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-4 mb-3 rounded-2xl border border-white/10 bg-neutral-900/60 px-4 py-3 sm:px-6 flex items-center justify-between">
            <Link href="/landing-1" className="inline-flex items-center gap-2" aria-label="HAUS home">
              <div className="h-6 w-6 rounded-md bg-white/10 border border-white/10 flex items-center justify-center">
                <Sparkles className="h-3.5 w-3.5 text-white/80" />
              </div>
              <span className="text-base font-semibold tracking-tight">HAUS</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6" aria-label="Page navigation">
              <Link href="/about" className="text-sm font-medium text-neutral-300 hover:text-white transition">About</Link>
              <Link href="/careers" className="text-sm font-medium text-neutral-300 hover:text-white transition">Careers</Link>
              <span className="text-sm font-medium text-white" aria-current="page">Press</span>
            </nav>
            <a href="mailto:press@haus.com" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-gradient-to-r from-white/10 to-white/5 px-4 py-2 text-sm text-white hover:scale-[1.02] transition">
              <Mail className="h-4 w-4" />
              <span>Press Inquiries</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-20 pb-24 px-4 sm:px-6 lg:px-8" aria-labelledby="press-heading">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8">
            <FileText className="w-3 h-3 text-neutral-400" aria-hidden="true" />
            <span className="text-xs font-medium text-neutral-300">Press Room</span>
          </div>
          <h1 id="press-heading" className="text-5xl md:text-6xl font-display font-medium tracking-tight text-white leading-[0.95] mb-6">
            HAUS in the News
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Read the latest news, announcements, and media coverage about HAUS.
          </p>
        </div>
      </section>

      {/* Featured Coverage */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10" aria-labelledby="coverage-heading">
        <div className="mx-auto max-w-7xl">
          <h2 id="coverage-heading" className="sr-only">Featured Coverage</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" role="list" aria-label="Media coverage">
            {coverage.map((item) => (
              <div key={item.outlet} className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group cursor-pointer" role="listitem">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-lg font-bold text-white mb-4">
                  {item.logo}
                </div>
                <Quote className="w-4 h-4 text-neutral-600 mb-2" aria-hidden="true" />
                <p className="text-sm text-neutral-300 italic mb-4">{item.quote}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-500">{item.outlet}</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" aria-hidden="true" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10" aria-labelledby="releases-heading">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Press Releases</span>
            </div>
            <h2 id="releases-heading" className="font-display text-4xl font-medium tracking-tight text-white">Latest Announcements</h2>
          </div>
          <div className="space-y-4" role="list" aria-label="Press releases">
            {pressReleases.map((release) => (
              <a key={release.title} href={release.link} className="group flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all" role="listitem">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs text-neutral-500 font-mono flex items-center gap-1">
                      <Calendar className="w-3 h-3" aria-hidden="true" />{release.date}
                    </span>
                    <span className="text-xs text-indigo-400 bg-indigo-500/20 px-2 py-0.5 rounded">{release.outlet}</span>
                  </div>
                  <h3 className="text-lg font-medium text-white group-hover:text-indigo-400 transition-colors">{release.title}</h3>
                </div>
                <ExternalLink className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors shrink-0" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10" aria-labelledby="resources-heading">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Resources</span>
            </div>
            <h2 id="resources-heading" className="font-display text-4xl font-medium tracking-tight text-white">Press Kit</h2>
            <p className="text-neutral-400 mt-4">Download official HAUS assets for media use</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4" role="list" aria-label="Press resources">
            {resources.map((resource) => (
              <div key={resource.title} className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer" role="listitem">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                      <resource.icon className="w-5 h-5 text-neutral-400" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-white group-hover:text-indigo-400 transition-colors">{resource.title}</h3>
                      <p className="text-xs text-neutral-500 mt-1">{resource.desc}</p>
                      <p className="text-xs text-neutral-600 mt-2">{resource.size}</p>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" aria-hidden="true" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10" aria-labelledby="contact-heading">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="contact-heading" className="font-display text-3xl font-medium tracking-tight text-white mb-4">Media Inquiries</h2>
          <p className="text-neutral-400 mb-8">For press inquiries, interviews, or additional information, please contact our communications team.</p>
          <a href="mailto:press@haus.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors">
            <Mail className="w-4 h-4" />
            press@haus.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-neutral-500" aria-hidden="true" />
            <span className="text-xs text-neutral-500">HAUS Group Pty Ltd</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-xs text-neutral-500 hover:text-white transition-colors">Terms</Link>
            <Link href="/privacy" className="text-xs text-neutral-500 hover:text-white transition-colors">Privacy</Link>
            <Link href="/about" className="text-xs text-neutral-500 hover:text-white transition-colors">About</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function PressPage() {
  return (
    <ErrorBoundary>
      <Shell>
        <Suspense fallback={<PageLoader text="Loading press page..." />}>
          <PressPageContent />
        </Suspense>
      </Shell>
    </ErrorBoundary>
  );
}
