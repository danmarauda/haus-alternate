"use client"

import React from 'react'
import Link from "next/link"
import {
  Search,
  Mic,
  ArrowUp,
  Sparkles,
  ShieldCheck,
  Glasses,
  TrendingUp,
  Users,
  BarChart2,
  Coffee,
  Train,
  Shield,
  Check,
  CheckCircle2,
  Crown,
  Triangle,
  Circle,
  Hexagon,
  Square,
  Diamond,
  ArrowUpRight,
  ArrowRight,
  Briefcase,
  CreditCard,
  Ruler,
  Plane,
  Quote,
} from 'lucide-react'
import { Shell } from "@/components/shell"
import { ErrorBoundary } from "@/components/error-boundary"
import { PageLoader } from "@/components/page-loader"
import { Suspense } from "react"


interface LandingPageProps {
  className?: string
}

function LandingV2Content({ className }: LandingPageProps) {
  return (
    <div className={`landing-page ${className || ''}`}>
      {/* Noise Overlay */}
      <div
        className="fixed inset-0 z-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      {/* Main Wrapper */}
      <div className="relative z-10 bg-[#050505] mb-[100vh] shadow-[0_50px_100px_rgba(0,0,0,0.5)] rounded-b-3xl overflow-hidden">
        {/* Hero Section */}
        <section className="h-screen relative flex flex-col items-center justify-center overflow-hidden" aria-labelledby="hero-heading">
          {/* Parallax Background */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1600&auto=format&fit=crop"
              className="w-full h-[120%] object-cover brightness-[0.7]"
              alt="Modern Architecture background"
            />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center text-white px-4 w-full max-w-5xl">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-[10px] uppercase tracking-widest font-medium">
                Early Access v1.0
              </span>
            </div>

            <h1 id="hero-heading" className="font-['Space_Grotesk'] text-[6.5vw] leading-[0.8] tracking-tighter overflow-hidden">
              <span className="block">THE NEW</span>
            </h1>
            <div className="flex items-center justify-center gap-4 md:gap-8 overflow-hidden">
              <h1 className="font-['Space_Grotesk'] text-[6.5vw] leading-[0.8] tracking-tighter text-white">
                <span className="block">HOME OF</span>
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="font-['Space_Grotesk'] text-[6.5vw] leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                <span className="block">HOMES</span>
              </h1>
            </div>

            <p className="mt-8 text-sm md:text-base font-light text-white/80 max-w-lg">
              Curated properties. Powerful search. Expert support.
              <br />
              AI-native real estate for the modern era.
            </p>

            {/* Voice Search Demo UI */}
            <div className="mt-12 mx-auto max-w-md w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-2 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-black shrink-0">
                <Mic className="w-5 h-5" />
              </div>
              <div className="flex-1 text-left">
                <div className="text-xs text-white/60 font-medium">Try asking...</div>
                <div className="text-sm text-white font-medium">
                  &quot;3 bed house in Melbourne with a pool&quot;
                </div>
              </div>
              <div className="px-3 py-1.5 bg-white/10 rounded-lg text-[10px] font-medium uppercase tracking-wider text-white/70">
                Enter
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <span className="text-[10px] text-neutral-600 uppercase tracking-widest pt-1.5 font-medium">
                Trending
              </span>
              <button className="px-3 py-1.5 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 text-[10px] text-neutral-400 hover:text-white transition-colors">
                Waterfront
              </button>
              <button className="px-3 py-1.5 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 text-[10px] text-neutral-400 hover:text-white transition-colors">
                Off-market
              </button>
              <button className="px-3 py-1.5 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 text-[10px] text-neutral-400 hover:text-white transition-colors">
                Penthouse
              </button>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-[9px] uppercase tracking-widest text-white/30 font-medium">
              Explore
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
          </div>
        </section>

        {/* Stats & Intro */}
        <section className="py-32 px-6 md:px-20 max-w-[1600px] mx-auto bg-[#050505]" aria-labelledby="stats-heading">
          <h2 id="stats-heading" className="sr-only">Platform Statistics</h2>
          <div className="grid lg:grid-cols-12 gap-12 items-start border-b border-white/10 pb-24">
            <div className="lg:col-span-7">
              <h2 className="font-['Space_Grotesk'] text-4xl md:text-6xl font-medium leading-[1.05] tracking-tight text-white">
                A revolution in
                <br />
                <span className="text-neutral-500">real estate.</span> Search, invest, and buy in one platform.
              </h2>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-between h-full pt-2">
              <div className="text-lg md:text-xl font-light text-neutral-400 leading-relaxed">
                No more checkbox hell. HAUS combines market expertise with a
                seamless, voice-first AI experience. We prioritize transparency,
                verified listings, and data-driven insights.
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div>
              <div className="flex items-end gap-2 mb-1">
                <div className="text-3xl font-medium tracking-tight text-white">
                  12k+
                </div>
                <div className="text-[10px] font-medium text-emerald-500 mb-1.5 flex items-center">
                  <ArrowUp className="w-2.5 h-2.5 mr-0.5" />
                  14%
                </div>
              </div>
              <div className="text-xs text-neutral-500 uppercase tracking-widest font-medium">
                Active Listings
              </div>
            </div>
            <div>
              <div className="flex items-end gap-2 mb-1">
                <div className="text-3xl font-medium tracking-tight text-white">
                  98%
                </div>
                <div className="text-[10px] font-medium text-emerald-500 mb-1.5 flex items-center">
                  <ArrowUp className="w-2.5 h-2.5 mr-0.5" />
                  2.4%
                </div>
              </div>
              <div className="text-xs text-neutral-500 uppercase tracking-widest font-medium">
                Satisfaction
              </div>
            </div>
            <div>
              <div className="text-3xl font-medium tracking-tight mb-1 text-white">
                $1B+
              </div>
              <div className="text-xs text-neutral-500 uppercase tracking-widest font-medium">
                Volume
              </div>
            </div>
            <div>
              <div className="text-3xl font-medium tracking-tight mb-1 text-white">
                Zero
              </div>
              <div className="text-xs text-neutral-500 uppercase tracking-widest font-medium">
                Hidden Fees
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By */}
        <section className="py-20 border-t border-white/10 bg-[#050505] relative z-10" aria-labelledby="trust-heading">
          <h2 id="trust-heading" className="sr-only">Trusted By</h2>
          <div className="px-6 md:px-20 max-w-[1400px] mx-auto">
            <p className="text-[10px] font-mono text-neutral-600 text-center mb-10 uppercase tracking-[0.2em]">
              Trusted by Industry Leaders
            </p>
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
                  <span className="text-lg font-bold tracking-tighter text-white group-hover:text-indigo-400 transition-colors">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 md:px-20 bg-[#050505] border-t border-white/10 text-center" aria-labelledby="cta-heading">
          <h2 id="cta-heading" className="font-['Space_Grotesk'] text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
            Ready to find your
            <br />
            <span className="text-indigo-400">dream home?</span>
          </h2>
          <p className="text-neutral-400 text-sm mb-10 max-w-lg mx-auto">
            Join thousands of buyers who have already discovered the future of
            real estate. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/search"
              className="px-8 py-4 bg-white text-black rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors"
            >
              Start Searching
            </Link>
            <button className="px-8 py-4 border border-white/20 text-white rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">
              Watch Demo
            </button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="relative">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2700&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-10 pointer-events-none grayscale"
            alt="Footer background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent" aria-hidden="true" />
        </div>

        <div className="relative z-10 text-center w-full max-w-4xl px-6 py-32">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
            <span className="text-[10px] uppercase tracking-widest text-gray-300">
              Waitlist Active
            </span>
          </div>

          <a href="#" className="block group">
            <h2 className="font-['Space_Grotesk'] text-[10vw] leading-[0.8] font-medium tracking-tighter text-white group-hover:text-gray-300 transition-colors duration-500">
              GET STARTED
            </h2>
            <div className="h-[1px] w-0 group-hover:w-full bg-white/50 mx-auto transition-all duration-700 mt-4" style={{ transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }} />
          </a>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 text-left border-t border-white/10 pt-12">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">
                Platform
              </span>
              <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                Search
              </a>
              <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                Analytics
              </a>
              <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                Agents
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">
                Company
              </span>
              <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                About
              </a>
              <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                Careers
              </a>
              <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                Press
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">
                Legal
              </span>
              <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                AUSTRAC
              </a>
            </div>
            <div className="flex flex-col justify-between">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">
                © 2025
              </span>
              <div className="text-[10px] text-gray-600 uppercase tracking-widest">
                HAUS Group Pty Ltd
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function LandingV2({ className }: LandingPageProps) {
  return (
    <ErrorBoundary>
      <Shell variant="landing">
        <Suspense fallback={<PageLoader text="Loading page..." />}>
          <LandingV2Content className={className} />
        </Suspense>
      </Shell>
    </ErrorBoundary>
  )
}
