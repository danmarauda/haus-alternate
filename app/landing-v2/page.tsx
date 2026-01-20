"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Search, Mic, ArrowUp, Triangle, Circle, Hexagon, Square, Diamond,
  Sparkles, Bot, ShieldCheck, CheckCircle2, Glasses, TrendingUp, Users,
  BarChart2, Coffee, Train, Shield, Briefcase, Calculator, Code2,
  CreditCard, Ruler, Plane, ArrowRight, ArrowUpRight, Quote, User,
  Home, Heart, MessageCircle, Smartphone, Tablet, Crown, Check, Plus,
  Github,
} from "lucide-react"
import { Shell } from "@/components/shell"
import { ErrorBoundary } from "@/components/error-boundary"
import { PageLoader } from "@/components/page-loader"
import { Suspense } from "react"


interface Listing {
  image: string
  tag: string
  match?: number
  title: string
  location: string
  price: string
  beds: number
  baths: number
  sqft: string
}

interface Market {
  code: string
  name: string
  listings: string
  growth: number
  progress: number
}

interface Service {
  icon: typeof Briefcase
  title: string
  desc: string
}

interface Article {
  tag: string
  date: string
  title: string
  desc: string
}

interface ChangelogItem {
  version: string
  title: string
  date: string
  desc: string
  active: boolean
}

interface FAQ {
  q: string
  a: string
}

const listings: Listing[] = [
  {
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop",
    tag: "New",
    match: 98,
    title: "Oceanview Modern Villa",
    location: "Malibu, CA",
    price: "$2.8M",
    beds: 4,
    baths: 3,
    sqft: "2,800",
  },
  {
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
    tag: "Verified",
    match: 94,
    title: "Skyline Penthouse",
    location: "Manhattan, NY",
    price: "$5.2M",
    beds: 3,
    baths: 2,
    sqft: "1,950",
  },
  {
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1600&auto=format&fit=crop",
    tag: "Open House",
    title: "Contemporary Townhouse",
    location: "Austin, TX",
    price: "$1.15M",
    beds: 3,
    baths: 3,
    sqft: "1,900",
  },
]

const markets: Market[] = [
  { code: "NYC", name: "New York", listings: "1,240", growth: 2.4, progress: 80 },
  { code: "LDN", name: "London", listings: "980", growth: 1.1, progress: 65 },
  { code: "SYD", name: "Sydney", listings: "650", growth: 4.8, progress: 90 },
  { code: "DXB", name: "Dubai", listings: "2,100", growth: 12.5, progress: 95 },
]

const services: Service[] = [
  { icon: Briefcase, title: "Legal & Tax", desc: "Structuring, compliance, and cross-border advisory optimization for global investors." },
  { icon: CreditCard, title: "Smart Financing", desc: "Asset-backed lending with approval in minutes, not weeks. Competitive rates for HNW individuals." },
  { icon: Ruler, title: "Design & Build", desc: "From architectural concepts to turn-key renovations. We manage the contractors, you enjoy the result." },
  { icon: Plane, title: "Relocation", desc: "Visa assistance, school enrollment, and logistics for international buyers moving to new markets." },
]

const articles: Article[] = [
  { tag: "Trend", date: "Oct 24", title: "The Shift to Suburban Luxury", desc: "Why high-net-worth individuals are leaving city centers for curated perimeter estates." },
  { tag: "Fintech", date: "Oct 20", title: "Tokenized Real Estate Assets", desc: "Understanding the fractional ownership model and liquidity premium in 2025." },
  { tag: "Design", date: "Oct 12", title: "Biophilic Design Trends", desc: "How integration with nature is becoming the #1 requested feature for new builds." },
]

const changelog: ChangelogItem[] = [
  { version: "v2.4.0", title: "Neural Search v2.0", date: "Oct 24", desc: "Introduced semantic search capabilities allowing natural language queries (e.g., \"homes with good light for painting\").", active: true },
  { version: "v2.3.1", title: "Predictive Valuation", date: "Oct 18", desc: "Improved accuracy of the valuation algorithm by 14% in high-density urban areas. Added confidence intervals to all price estimates.", active: false },
  { version: "v2.3.0", title: "Mobile Dark Mode", date: "Oct 12", desc: "Complete overhaul of contrast ratios for better accessibility. Optimized specifically for OLED displays on mobile devices.", active: false },
]

const faqs: FAQ[] = [
  { q: "How accurate is the valuation AI?", a: "Our model, trained on 50M+ historical transaction points, currently holds a Median Absolute Percentage Error (MdAPE) of 2.1% in Tier 1 cities, significantly outperforming traditional appraisals." },
  { q: "Is HAUS available for agents?", a: "Yes. We offer HAUS Pro for verified agents, providing access to our CRM, predictive lead generation, and automated marketing suite." },
  { q: "How do you handle privacy?", a: "We use zero-knowledge proofs for verifying funds and identity without storing sensitive documents. Your search history is encrypted locally." },
]

function LandingMainContent() {
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const splitTextElements = document.querySelectorAll(".split-animate")
    splitTextElements.forEach((el) => {
      const text = el.textContent || ""
      const words = text.split(" ")
      el.innerHTML = ""
      words.forEach((word) => {
        const wordWrap = document.createElement("span")
        wordWrap.classList.add("word-wrap")
        wordWrap.innerHTML = `<span class="word-inner">${word}&nbsp;</span>`
        el.appendChild(wordWrap)
      })
    })

    const loadTl = gsap.timeline({
      onComplete: () => {
        document.body.style.opacity = "1"
        initAnimations()
      },
    })

    loadTl
      .to(".loader-line", { width: "100%", duration: 1.2, ease: "power2.inOut" })
      .to(".loader-text", { y: -20, opacity: 0, duration: 0.6, ease: "power2.in" }, "-=0.2")
      .to(".loader", { clipPath: "inset(0 0 100% 0)", duration: 0.8, ease: "power4.inOut" })

    function initAnimations() {
      const heroTl = gsap.timeline()
      heroTl
        .to(".hero-title-wrap span", { y: 0, stagger: 0.1, duration: 1.4, ease: "power3.out" })
        .to(".hero-fade", { opacity: 1, duration: 1, stagger: 0.2 }, "-=0.5")

      gsap.to(".hero-img", {
        yPercent: 20,
        scale: 1.1,
        ease: "none",
        scrollTrigger: { trigger: ".hero-img-wrap", start: "top top", end: "bottom top", scrub: true },
      })

      document.querySelectorAll(".split-animate").forEach((el) => {
        const words = el.querySelectorAll(".word-inner")
        gsap.to(words, {
          y: "0%",
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.015,
          scrollTrigger: { trigger: el, start: "top 85%" },
        })
      })

      const cards = gsap.utils.toArray<HTMLElement>(".card-item")
      cards.forEach((card, i) => {
        const inner = card.querySelector(".card-inner")
        const nextCard = cards[i + 1]
        if (nextCard && inner) {
          gsap.to(inner, {
            scale: 0.95,
            y: -40,
            opacity: 0.5,
            ease: "none",
            scrollTrigger: { trigger: nextCard, start: "top bottom", end: "top 10vh", scrub: true },
          })
        }
      })

      gsap.from(".footer-sticky > div", {
        y: 100,
        opacity: 0,
        scrollTrigger: { trigger: ".wrapper", start: "bottom bottom", end: "bottom 50%", scrub: 1 },
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className="landing-page" ref={mainRef}>
      <div className="fixed inset-0 z-0 w-full h-full pointer-events-none noise-bg" aria-hidden="true" />

      <div className="loader">
        <div className="loader-text tracking-tight">HAUS</div>
        <div className="loader-line" />
      </div>

      <div className="wrapper">
        {/* Hero */}
        <section className="h-screen relative flex flex-col items-center justify-center overflow-hidden" aria-labelledby="hero-heading">
          <div className="absolute inset-0 w-full h-full hero-img-wrap">
            <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1600&auto=format&fit=crop" className="w-full h-[120%] object-cover brightness-[0.7] hero-img" alt="Modern Architecture" />
          </div>
          <div className="relative z-10 text-center text-white px-4 w-full max-w-5xl">
            <div className="flex items-center justify-center gap-2 mb-6 hero-fade opacity-0">
              <span className="px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-[10px] uppercase tracking-widest font-medium">Early Access v1.0</span>
            </div>
            <h1 id="hero-heading" className="font-display text-[13vw] leading-[0.8] tracking-tighter overflow-hidden hero-title-wrap">
              <span className="block translate-y-full">THE NEW</span>
            </h1>
            <div className="flex items-center justify-center gap-4 md:gap-8 overflow-hidden hero-title-wrap">
              <h1 className="font-display text-[13vw] leading-[0.8] tracking-tighter text-white">
                <span className="block translate-y-full">HOME OF</span>
              </h1>
            </div>
            <div className="overflow-hidden hero-title-wrap">
              <h1 className="font-display text-[13vw] leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                <span className="block translate-y-full">HOMES</span>
              </h1>
            </div>
            <p className="mt-8 text-sm md:text-base font-light text-white/80 max-w-lg mx-auto opacity-0 hero-fade">
              Curated properties. Powerful search. Expert support.<br />AI-native real estate for the modern era.
            </p>
            <div className="mt-12 mx-auto max-w-md w-full glass-panel rounded-2xl p-2 flex items-center gap-3 opacity-0 hero-fade transform translate-y-4">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-black shrink-0">
                <Mic className="w-5 h-5" />
              </div>
              <div className="flex-1 text-left">
                <div className="text-xs text-white/60 font-medium">Try asking...</div>
                <div className="text-sm text-white font-medium">"3 bed house in Melbourne with a pool"</div>
              </div>
              <div className="px-3 py-1.5 bg-white/10 rounded-lg text-[10px] font-medium uppercase tracking-wider text-white/70">Enter</div>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3 opacity-0 hero-fade">
              <span className="text-[10px] text-neutral-600 uppercase tracking-widest pt-1.5 font-medium">Trending</span>
              {["Waterfront", "Off-market", "Penthouse"].map((tag) => (
                <button key={tag} className="px-3 py-1.5 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 text-[10px] text-neutral-400 hover:text-white transition-colors">{tag}</button>
              ))}
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 hero-fade">
              <span className="text-[9px] uppercase tracking-widest text-white/30 font-medium">Explore</span>
              <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-32 px-6 md:px-20 max-w-[1600px] mx-auto bg-[#050505]" aria-labelledby="stats-heading">
          <h2 id="stats-heading" className="sr-only">Platform Statistics</h2>
          <div className="grid lg:grid-cols-12 gap-12 items-start border-b border-white/10 pb-24">
            <div className="lg:col-span-7">
              <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] tracking-tight split-animate text-white">
                A revolution in<br /><span className="text-neutral-500">real estate.</span> Search, invest, and buy in one platform.
              </h2>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-between h-full pt-2">
              <div className="text-lg md:text-xl font-light text-neutral-400 leading-relaxed split-animate">
                No more checkbox hell. HAUS combines market expertise with a seamless, voice-first AI experience. We prioritize transparency, verified listings, and data-driven insights.
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {[
              { value: "12k+", label: "Active Listings", change: "+14%" },
              { value: "98%", label: "Satisfaction", change: "+2.4%" },
              { value: "$1B+", label: "Volume" },
              { value: "Zero", label: "Hidden Fees" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="flex items-end gap-2 mb-1">
                  <div className="text-3xl font-medium tracking-tight text-white">{stat.value}</div>
                  {stat.change && (
                    <div className="text-[10px] font-medium text-emerald-500 mb-1.5 flex items-center">
                      <ArrowUp className="w-2.5 h-2.5 mr-0.5" />{stat.change}
                    </div>
                  )}
                </div>
                <div className="text-xs text-neutral-500 uppercase tracking-widest font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Trusted By */}
        <section className="py-20 border-t border-white/10 bg-[#050505] relative z-10" aria-labelledby="trust-heading">
          <h2 id="trust-heading" className="sr-only">Trusted By</h2>
          <div className="px-6 md:px-20 max-w-[1400px] mx-auto">
            <p className="text-[10px] font-mono text-neutral-600 text-center mb-10 uppercase tracking-[0.2em]">Trusted by Industry Leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60">
              {[
                { Icon: Triangle, name: "VORTEX" },
                { Icon: Circle, name: "OBLIQUE" },
                { Icon: Hexagon, name: "NEXUS" },
                { Icon: Square, name: "QUARTZ" },
                { Icon: Diamond, name: "ÆON" },
              ].map(({ Icon, name }) => (
                <div key={name} className="flex items-center gap-2 group cursor-default">
                  <Icon className="w-5 h-5 text-white group-hover:text-indigo-400 transition-colors" />
                  <span className="text-lg font-bold tracking-tighter text-white group-hover:text-indigo-400 transition-colors">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 md:px-20 bg-[#050505] border-t border-white/10 text-center" aria-labelledby="cta-heading">
          <h2 id="cta-heading" className="font-display text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
            Ready to find your
            <br />
            <span className="text-indigo-400">dream home?</span>
          </h2>
          <p className="text-neutral-400 text-sm mb-10 max-w-lg mx-auto">
            Join thousands of buyers who have already discovered the future of real estate. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/search" className="px-8 py-4 bg-white text-black rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors">
              Start Searching
            </Link>
            <button className="px-8 py-4 border border-white/20 text-white rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">
              Watch Demo
            </button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer-sticky">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2700&auto=format&fit=crop" className="w-full h-full object-cover opacity-10 pointer-events-none grayscale" alt="Footer background" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent" aria-hidden="true" />
        </div>
        <div className="relative z-10 text-center w-full max-w-4xl px-6 py-32">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
            <span className="text-[10px] uppercase tracking-widest text-gray-300">Waitlist Active</span>
          </div>
          <a href="#" className="block group">
            <h2 className="font-display text-[10vw] leading-[0.8] font-medium tracking-tighter text-white group-hover:text-gray-300 transition-colors duration-500">GET STARTED</h2>
            <div className="h-[1px] w-0 group-hover:w-full bg-white/50 mx-auto transition-all duration-700 mt-4" style={{ transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }} />
          </a>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 text-left border-t border-white/10 pt-12">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Platform</span>
              {["Search", "Analytics", "Agents"].map((item) => (<a key={item} href="#" className="text-xs text-gray-400 hover:text-white transition-colors">{item}</a>))}
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Company</span>
              {["About", "Careers", "Press"].map((item) => (<a key={item} href="#" className="text-xs text-gray-400 hover:text-white transition-colors">{item}</a>))}
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Legal</span>
              {["Terms", "Privacy", "AUSTRAC"].map((item) => (<a key={item} href="#" className="text-xs text-gray-400 hover:text-white transition-colors">{item}</a>))}
            </div>
            <div className="flex flex-col justify-between">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">© 2025</span>
              <div className="text-[10px] text-gray-600 uppercase tracking-widest">HAUS Group Pty Ltd</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function LandingMain() {
  return (
    <ErrorBoundary>
      <Shell variant="landing">
        <Suspense fallback={<PageLoader text="Loading page..." />}>
          <LandingMainContent />
        </Suspense>
      </Shell>
    </ErrorBoundary>
  )
}
