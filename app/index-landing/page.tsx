"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import {
  Search, Home, Users, ArrowRight, Briefcase,
  MapPin, Heart, Sparkles
} from "lucide-react"

const featuredProperties = [
  {
    id: 1,
    title: "128 Crown Street",
    location: "Surry Hills, NSW",
    price: "$2,450,000",
    beds: 4,
    baths: 3,
    cars: 2,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    tags: ["Heritage", "Terrace"],
  },
  {
    id: 2,
    title: "15 Pacific Highway",
    location: "Woollahra, NSW",
    price: "$3,200,000",
    beds: 5,
    baths: 4,
    cars: 3,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    tags: ["Modern", "Waterfront"],
  },
]

const IndexLandingPage = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#050505]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full border-2 border-white/10 border-t-white animate-spin"></div>
          <span className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase">
            Loading HAUS...
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-300 font-['Inter']">
      {/* Noise Overlay */}
      <div
        className="fixed inset-0 z-0 w-full h-full pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.05%22/%3E%3C/svg%3E')",
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full px-6 h-16 flex justify-between items-center z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <Link href="/" className="font-['Space_Grotesk'] text-lg font-bold tracking-tight text-white flex items-center gap-2">
          <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold tracking-tighter rounded-sm">
            HA
          </div>
          HAUS
          <span className="text-neutral-600 font-normal">.HOME</span>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/deal-team"
            className="bg-white text-black px-4 py-1.5 rounded text-xs font-semibold hover:bg-neutral-200 transition-colors flex items-center gap-2"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>My Team</span>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-28 pb-12 px-6 md:px-8 max-w-[1400px] mx-auto">
        {/* Hero Section */}
        <section className="mb-20 animate-in">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-500 text-[10px] font-mono mb-6">
              <Sparkles className="w-3 h-3" />
              <span>LUXURY REAL ESTATE</span>
            </div>
            <h1 className="font-['Space_Grotesk'] text-5xl md:text-6xl font-medium text-white tracking-tight mb-6">
              Discover Your
              <br />
              <span className="text-gradient">Dream Home</span>
            </h1>
            <p className="text-lg text-neutral-400 mb-8 max-w-xl">
              Australia&apos;s most sophisticated property platform. AI-powered search,
              virtual tours, and expert guidance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/search"
                className="px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2"
              >
                <Search className="w-4 h-4" />
                Start Searching
              </Link>
              <Link
                href="/deal-team"
                className="px-8 py-3 border border-white/20 text-white rounded-lg font-medium hover:bg-white/5 transition-colors flex items-center gap-2"
              >
                <Briefcase className="w-4 h-4" />
                My Deal Team
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Properties */}
        <section className="mb-20 animate-in">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-['Space_Grotesk'] text-2xl font-medium text-white mb-2">
                Featured Properties
              </h2>
              <p className="text-sm text-neutral-500">
                Handpicked from Australia&apos;s premier listings
              </p>
            </div>
            <Link
              href="/search"
              className="text-xs text-neutral-400 hover:text-white flex items-center gap-1 transition-colors"
            >
              View all
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProperties.map((property) => (
              <div
                key={property.id}
                className="group rounded-2xl overflow-hidden border border-white/10 bg-[#0A0A0A] hover:border-white/20 transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                  <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-2 mb-2">
                      {property.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-['Space_Grotesk'] text-lg font-medium text-white">
                      {property.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-neutral-400 mt-1">
                      <MapPin className="w-3 h-3" />
                      {property.location}
                    </div>
                  </div>
                </div>
                <div className="p-4 border-t border-white/5">
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-['Space_Grotesk'] font-semibold text-white">
                      {property.price}
                    </div>
                    <div className="flex gap-4 text-xs text-neutral-500">
                      <div className="flex items-center gap-1">
                        <span className="text-white">{property.beds}</span> beds
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-white">{property.baths}</span> baths
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-white">{property.cars}</span> cars
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Stats */}
        <section className="mb-20 animate-in">
          <div className="grid grid-cols-3 gap-6">
            {[
              { label: "Properties Listed", value: "2,847", icon: Home },
              { label: "Active Users", value: "12.4K", icon: Users },
              { label: "Sold This Month", value: "$482M", icon: Briefcase },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:border-white/20 transition-colors text-center"
              >
                <stat.icon className="w-6 h-6 text-neutral-400 mx-auto mb-3" />
                <div className="text-3xl font-['Space_Grotesk'] font-semibold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-neutral-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="animate-in">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 p-12 md:p-16 text-center">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600"
                alt="Background"
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
            </div>
            <div className="relative z-10">
              <h2 className="font-['Space_Grotesk'] text-3xl md:text-4xl font-medium text-white mb-4">
                Ready to Find Your Dream Home?
              </h2>
              <p className="text-lg text-neutral-400 mb-8 max-w-2xl mx-auto">
                Join thousands of smart buyers who found their perfect property with HAUS.
              </p>
              <Link
                href="/search"
                className="inline-flex px-8 py-4 bg-white text-black rounded-lg font-medium hover:bg-neutral-200 transition-colors"
              >
                Start Your Search
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-8 px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
          <p>© 2025 HAUS. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/deal-team" className="hover:text-white transition-colors">
              My Team
            </Link>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style>{`
        .text-gradient {
          background: linear-gradient(to right, #fff, #a3a3a3);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        ::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #0a0a0a;
        }
        ::-webkit-scrollbar-thumb {
          background: #262626;
          border-radius: 3px;
        }
        ::selection {
          background: rgba(16, 185, 129, 0.3);
          color: #d1fae5;
        }
      `}</style>
    </div>
  )
}

export default IndexLandingPage
