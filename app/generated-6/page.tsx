"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Image,
  MapPin,
  Bed,
  Bath,
  Car,
  Ruler,
  AlignLeft,
  BarChart2,
  ListChecks,
  FileDigit,
  Map,
  Share2,
  Facebook,
  Linkedin,
  Link as LinkIcon,
  Download,
  Search,
  Sparkles,
  Paperclip,
  Loader2,
  Check,
  Instagram,
  FileText,
} from "lucide-react"
import { cn } from "@/lib/utils"

type ListingState = "empty" | "loading" | "filled"

interface ListingData {
  title: string
  address: string
  price: string
  agentName: string
  agentRole: string
  description: string
  specs: {
    bedrooms: string
    bathrooms: string
    garage: string
    landSize: string
  }
  images: string[]
  socialImages: {
    story: string
    post: string
    landscape: string
  }
}

const mockListingData: ListingData = {
  title: "The Wolseley Residence",
  address: "12 Wolseley Road, Point Piper NSW 2027",
  price: "$35,000,000",
  agentName: "Alexander Phillips",
  agentRole: "Lead Agent • HAUS Prestige",
  description:
    "Commanding an iconic position on Australia's most prestigious street, The Wolseley Residence represents a masterpiece of contemporary architecture and waterfront luxury. Designed by award-winning architects, this north-facing sanctuary captures uninterrupted panoramic views.",
  specs: {
    bedrooms: "5",
    bathrooms: "6",
    garage: "4",
    landSize: "892m²",
  },
  images: [
    "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg",
  ],
  socialImages: {
    story: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg",
    post: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg",
    landscape: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg",
  },
}

export default function NewListingSkeletonPage() {
  const [listingState, setListingState] = useState<ListingState>("empty")
  const [inputValue, setInputValue] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  const handleGenerate = () => {
    if (!inputValue) {
      return
    }

    setIsProcessing(true)
    setListingState("loading")

    // Simulate AI generation
    setTimeout(() => {
      setListingState("filled")
      setIsProcessing(false)
    }, 1500)
  }

  const amenities = [
    "Heating",
    "Cooling",
    "Parking",
    "Garden",
    "Pool",
    "Security",
    "Views",
    "Storage",
  ]

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-200 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 flex flex-col overflow-x-hidden">
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 w-full h-full pointer-events-none grid-bg" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-white text-black flex items-center justify-center tracking-tighter rounded-sm group-hover:scale-95 transition font-semibold">
              H.
            </div>
          </Link>

          {/* Search */}
          <div className="hidden md:flex items-center bg-neutral-900/50 border border-white/10 rounded-full px-4 py-2 w-96 gap-3">
            <Search className="h-4 w-4 text-neutral-600" />
            <input
              type="text"
              disabled
              placeholder="Waiting for property data..."
              className="bg-transparent border-none text-xs text-neutral-500 w-full font-mono focus:outline-none cursor-not-allowed"
            />
            <div className="text-[10px] bg-white/5 border border-white/5 px-1.5 py-0.5 rounded text-neutral-600 font-mono">
              ⌘K
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="h-8 w-8 rounded-full bg-neutral-900 border border-white/10" />
            <button className="bg-white/10 text-neutral-500 text-xs font-medium px-4 py-2 rounded cursor-not-allowed">
              Save Draft
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-16 flex-1">
        {/* Skeleton Media Gallery */}
        <section className="h-[60vh] md:h-[75vh] w-full grid grid-cols-1 md:grid-cols-4 gap-1 p-1 bg-black">
          {/* Main Image Slot */}
          <div className="md:col-span-2 md:row-span-2 relative bg-neutral-900 overflow-hidden group border border-white/5">
            <div className="absolute inset-0 skeleton-shimmer opacity-50" />
            {listingState === "filled" && mockListingData.images[0] && (
              <img
                src={mockListingData.images[0]}
                alt="Property"
                className="w-full h-full object-cover fade-in duration-700"
              />
            )}
            {listingState === "empty" && (
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-3 opacity-30">
                <Image className="h-8 w-8 text-neutral-500" />
              </div>
            )}
          </div>

          {/* Secondary Slots */}
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="relative bg-neutral-900 overflow-hidden border border-white/5"
            >
              <div
                className={cn(
                  "absolute inset-0 skeleton-shimmer",
                  i === 2 ? "opacity-30" : "opacity-40"
                )}
              />
              {i === 4 && listingState === "empty" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative z-10 bg-black/20 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg flex items-center gap-2">
                    <div className="w-3 h-3 bg-white/20 rounded-sm" />
                    <div className="w-20 h-2 bg-white/20 rounded-sm" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Listing Details Container */}
        <div className="max-w-[1440px] mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-8 space-y-12">
              {/* Skeleton Header */}
              <div className="border-b border-white/10 pb-8 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-3 w-3/4">
                    <div className="text-xs font-mono text-neutral-500 uppercase mb-2 tracking-tight">
                      Property Details
                    </div>
                    {/* Title */}
                    {listingState === "filled" ? (
                      <h1 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight fade-in">
                        {mockListingData.title}
                      </h1>
                    ) : (
                      <div className="h-10 md:h-12 w-3/4 bg-neutral-900 rounded-lg skeleton-shimmer border border-white/5" />
                    )}
                    {/* Address */}
                    {listingState === "filled" ? (
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 text-neutral-800" />
                        <span className="text-neutral-400 font-mono text-sm fade-in">
                          {mockListingData.address}
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 text-neutral-800" />
                        <div className="h-4 w-1/2 bg-neutral-900 rounded skeleton-shimmer" />
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <div className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10" />
                    <div className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10" />
                  </div>
                </div>

                {/* Key Specs */}
                <div className="flex flex-wrap gap-6 md:gap-12 py-4">
                  {[
                    { icon: Bed, label: "Bedrooms", value: mockListingData.specs.bedrooms },
                    { icon: Bath, label: "Bathrooms", value: mockListingData.specs.bathrooms },
                    { icon: Car, label: "Garage", value: mockListingData.specs.garage },
                    { icon: Ruler, label: "Land Size", value: mockListingData.specs.landSize },
                  ].map((spec) => (
                    <div
                      key={spec.label}
                      className={cn(
                        "flex items-center gap-3",
                        listingState === "empty" && "opacity-50"
                      )}
                    >
                      <spec.icon className="h-5 w-5 text-neutral-700" />
                      {listingState === "filled" ? (
                        <div className="space-y-1">
                          <div className="text-lg font-display text-white fade-in">
                            {spec.value}
                          </div>
                          <div className="text-[10px] font-mono text-neutral-500 uppercase fade-in">
                            {spec.label}
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-1">
                          <div className="h-5 w-8 bg-neutral-900 rounded" />
                          <div className="h-2 w-12 bg-neutral-900 rounded" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-6">
                <h3 className="text-sm font-medium text-white mb-6 flex items-center gap-2">
                  <AlignLeft className="h-4 w-4 text-neutral-600" />
                  Property Description
                </h3>
                {listingState === "filled" ? (
                  <p className="text-neutral-300 leading-relaxed font-light text-lg fade-in">
                    {mockListingData.description}
                  </p>
                ) : (
                  <div className="space-y-3">
                    <div className="h-4 w-full bg-neutral-900 rounded skeleton-shimmer" />
                    <div className="h-4 w-[98%] bg-neutral-900 rounded skeleton-shimmer" />
                    <div className="h-4 w-[95%] bg-neutral-900 rounded skeleton-shimmer" />
                    <div className="h-4 w-[60%] bg-neutral-900 rounded skeleton-shimmer" />
                    <div className="h-4 w-full bg-neutral-900 rounded skeleton-shimmer" />
                    <div className="h-4 w-[92%] bg-neutral-900 rounded skeleton-shimmer" />
                    <div className="h-4 w-[40%] bg-neutral-900 rounded skeleton-shimmer" />
                  </div>
                )}
              </div>

              {/* Market Intelligence */}
              <div className="bg-neutral-900/30 border border-white/5 rounded-xl p-8 relative overflow-hidden">
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-2 h-2 rounded-full bg-neutral-700" />
                  <h3 className="text-sm font-medium text-white flex items-center gap-2">
                    <BarChart2 className="h-4 w-4 text-neutral-600" />
                    Market Intelligence
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="space-y-3">
                      <div className="h-3 w-24 bg-neutral-800 rounded" />
                      <div className="h-8 w-32 bg-neutral-800 rounded skeleton-shimmer" />
                      <div className="h-3 w-20 bg-neutral-800/50 rounded" />
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/5">
                  <div className="h-3 w-32 bg-neutral-800 rounded mb-4" />
                  <div className="flex items-end gap-1 h-32 w-full pb-2">
                    {[40, 60, 30, 80, 50, 70, 90, 40].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-neutral-800/20 rounded-t-sm skeleton-shimmer"
                        style={{ height: `${h}%`, animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div>
                <h3 className="text-sm font-medium text-white mb-6 flex items-center gap-2">
                  <ListChecks className="h-4 w-4 text-neutral-600" />
                  Amenities & Features
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {amenities.map((amenity) => (
                    <div
                      key={amenity}
                      className="p-4 rounded bg-neutral-900/50 border border-white/5 h-12 flex items-center gap-2 opacity-40"
                    >
                      <div className="w-1 h-1 bg-white rounded-full" />
                      <span className="text-[10px] uppercase tracking-wider font-mono">
                        {amenity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floor Plan */}
              <div className="pt-12 border-t border-white/10 space-y-6">
                <h3 className="text-sm font-medium text-white mb-6 flex items-center gap-2">
                  <FileDigit className="h-4 w-4 text-neutral-600" />
                  Floor Plan
                </h3>
                <div className="aspect-video w-full bg-neutral-900/30 border border-white/5 rounded-xl p-4 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 skeleton-shimmer opacity-20" />
                  <div className="relative z-10 flex flex-col items-center gap-3 opacity-30">
                    <FileText className="h-8 w-8 text-neutral-500" />
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="pt-12 border-t border-white/10 space-y-6">
                <h3 className="text-sm font-medium text-white mb-6 flex items-center gap-2">
                  <Map className="h-4 w-4 text-neutral-600" />
                  Location & Context
                </h3>
                <div className="h-[400px] w-full bg-neutral-900/30 border border-white/5 rounded-xl relative overflow-hidden">
                  <div className="absolute inset-0 skeleton-shimmer opacity-20" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 rounded-full bg-neutral-800/50 flex items-center justify-center animate-pulse">
                      <div className="w-4 h-4 bg-neutral-600 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN (Sticky Sidebar) */}
            <div className="lg:col-span-4 relative border-l border-white/10 pl-8">
              <div className="sticky top-24 space-y-4 max-h-[calc(100vh-8rem)] overflow-y-auto pr-4 pb-12">
                {/* Price Card */}
                <div className="bg-neutral-900/50 border border-white/5 rounded-xl p-6">
                  <div className="text-xs font-mono text-neutral-500 uppercase mb-4 border-b border-white/5 pb-2">
                    Listing Price
                  </div>
                  <div className="mb-6 space-y-4">
                    <div className="flex justify-between">
                      <div className="h-3 w-20 bg-neutral-800 rounded" />
                      <div className="h-3 w-8 bg-neutral-800 rounded" />
                    </div>
                    {listingState === "filled" ? (
                      <div className="text-3xl font-display text-white tracking-tight fade-in">
                        {mockListingData.price}
                      </div>
                    ) : (
                      <div className="h-10 w-3/4 bg-neutral-800 rounded skeleton-shimmer" />
                    )}
                    <div className="h-3 w-1/2 bg-neutral-800/50 rounded" />
                  </div>
                  <div className="h-12 w-full bg-neutral-800 rounded mb-3" />
                  <div className="h-12 w-full bg-transparent border border-white/10 rounded" />
                </div>

                {/* Agent Card */}
                <div className="bg-neutral-900/50 border border-white/5 rounded-xl p-6">
                  <div className="text-xs font-mono text-neutral-500 uppercase mb-4 border-b border-white/5 pb-2">
                    Listing Agent
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-neutral-800 border border-white/5" />
                    {listingState === "filled" ? (
                      <div className="space-y-2">
                        <div className="text-white font-medium fade-in">
                          {mockListingData.agentName}
                        </div>
                        <div className="text-xs text-neutral-500 fade-in">
                          {mockListingData.agentRole}
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="h-4 w-32 bg-neutral-800 rounded" />
                        <div className="h-3 w-24 bg-neutral-800/50 rounded" />
                      </div>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-9 bg-neutral-800 rounded" />
                    <div className="h-9 bg-neutral-800 rounded" />
                  </div>
                </div>

                {/* Generated Socials */}
                <div className="bg-neutral-900/50 border border-white/5 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium text-white">
                      Generated Socials
                    </h3>
                    <span className="text-[10px] bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-1.5 py-0.5 rounded">
                      AI Ready
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {/* Story */}
                    <div className="relative aspect-[9/16] bg-neutral-900 rounded-lg border border-white/10 overflow-hidden group">
                      <div className="absolute inset-0 skeleton-shimmer opacity-40" />
                      {listingState === "filled" && (
                        <img
                          src={mockListingData.socialImages.story}
                          alt="Story"
                          className="w-full h-full object-cover fade-in"
                        />
                      )}
                      {listingState === "empty" && (
                        <div className="absolute inset-0 flex items-center justify-center text-neutral-600">
                          <Instagram className="h-4 w-4" />
                        </div>
                      )}
                    </div>
                    {/* Post */}
                    <div className="relative aspect-square bg-neutral-900 rounded-lg border border-white/10 overflow-hidden group">
                      <div className="absolute inset-0 skeleton-shimmer opacity-30" />
                      {listingState === "filled" && (
                        <img
                          src={mockListingData.socialImages.post}
                          alt="Post"
                          className="w-full h-full object-cover fade-in"
                        />
                      )}
                      {listingState === "empty" && (
                        <div className="absolute inset-0 flex items-center justify-center text-neutral-600">
                          <Image className="h-4 w-4" />
                        </div>
                      )}
                    </div>
                    {/* Landscape */}
                    <div className="col-span-2 relative aspect-[1.91/1] bg-neutral-900 rounded-lg border border-white/10 overflow-hidden group">
                      <div className="absolute inset-0 skeleton-shimmer opacity-30" />
                      {listingState === "filled" && (
                        <>
                          <img
                            src={mockListingData.socialImages.landscape}
                            alt="Landscape"
                            className="w-full h-full object-cover fade-in"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
                          <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition transform translate-y-2 group-hover:translate-y-0">
                            <div className="bg-white text-black p-1.5 rounded-full shadow-lg">
                              <Download className="h-3 w-3" />
                            </div>
                          </div>
                        </>
                      )}
                      {listingState === "empty" && (
                        <div className="absolute inset-0 flex items-center justify-center text-neutral-600">
                          <Linkedin className="h-4 w-4" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <button className="w-full flex items-center justify-center gap-2 bg-white text-black text-xs font-medium py-2 rounded-lg hover:bg-neutral-200 transition">
                      Download All
                      <Download className="h-3 w-3" />
                    </button>
                    <button className="w-full flex items-center justify-center gap-2 bg-transparent text-neutral-500 text-xs py-2 rounded-lg border border-white/5 hover:bg-white/5 transition">
                      Regenerate Captions
                    </button>
                  </div>
                </div>

                {/* Legal Documents */}
                <div className="bg-neutral-900/50 border border-white/5 rounded-xl p-6">
                  <h3 className="text-sm font-medium text-white mb-4 flex items-center gap-2">
                    <FileText className="h-4 w-4 text-neutral-600" />
                    Legal Documents
                  </h3>
                  <div className="space-y-3">
                    {[1, 2].map((i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3 bg-neutral-900/50 rounded border border-white/5"
                      >
                        <FileText className="h-4 w-4 text-neutral-700" />
                        <div className="h-2 w-24 bg-neutral-800 rounded" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Properties */}
        <section className="max-w-[1440px] mx-auto px-6 py-12 border-t border-white/10 mt-4">
          <div className="flex items-center justify-between mb-8">
            <div className="h-4 w-48 bg-neutral-900 rounded" />
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-neutral-900 border border-white/5" />
              <div className="w-8 h-8 rounded-full bg-neutral-900 border border-white/5" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`group cursor-not-allowed ${i === 1 ? "" : "hidden md:block"}`}
              >
                <div className="aspect-[4/3] bg-neutral-900 rounded-xl border border-white/5 overflow-hidden relative mb-4">
                  <div
                    className={cn(
                      "absolute inset-0 skeleton-shimmer",
                      i === 1 ? "opacity-40" : i === 2 ? "opacity-30" : "opacity-50"
                    )}
                  />
                </div>
                <div className="space-y-2 px-1">
                  <div className="h-4 w-3/4 bg-neutral-900 rounded" />
                  <div className="h-3 w-1/2 bg-neutral-900 rounded" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-black border-t border-white/10 pt-12 pb-8 px-6 mt-12">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 opacity-50">
          <div>
            <div className="w-6 h-6 bg-white text-black flex items-center justify-center text-xs mb-4 font-semibold">
              H.
            </div>
            <div className="h-3 w-32 bg-neutral-900 rounded" />
          </div>
          <div />
          <div />
          <div className="text-right space-y-2">
            <div className="h-3 w-24 bg-neutral-900 rounded ml-auto" />
            <div className="h-3 w-32 bg-neutral-900 rounded ml-auto" />
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto border-t border-white/10 pt-8 flex justify-between items-center text-[10px] text-neutral-600 font-mono">
          <span>© 2025 HAUS.</span>
          <div className="flex gap-4">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </footer>

      {/* Floating AI Input */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-[600px] z-50">
        <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl flex flex-col gap-2 ring-1 ring-white/5">
          <div className="flex items-center gap-2 px-2">
            <button className="w-8 h-8 rounded-lg bg-neutral-800/50 hover:bg-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center transition">
              <Paperclip className="h-4 w-4" />
            </button>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Paste listing URL or upload documents to generate..."
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-white placeholder:text-neutral-500 h-10 px-2 font-display"
            />
            <button
              onClick={handleGenerate}
              disabled={isProcessing}
              className={cn(
                "rounded-lg px-4 py-2 text-xs font-medium transition flex items-center gap-2 shadow-lg",
                isProcessing
                  ? "bg-indigo-600/80 text-white"
                  : listingState === "filled"
                  ? "bg-emerald-600 text-white shadow-emerald-500/20"
                  : "bg-indigo-600 text-white hover:bg-indigo-500 shadow-indigo-500/20"
              )}
            >
              {isProcessing ? (
                <>
                  <Loader2 className="h-3 w-3 animate-spin" />
                  Processing
                </>
              ) : listingState === "filled" ? (
                <>
                  Complete
                  <Check className="h-3 w-3" />
                </>
              ) : (
                <>
                  Generate Listing
                  <Sparkles className="h-3 w-3" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Social Share Sidebar */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-1 p-1.5 bg-neutral-900/90 backdrop-blur-md border-y border-l border-white/10 rounded-l-xl shadow-2xl ring-1 ring-white/5">
        <button className="w-10 h-10 flex items-center justify-center text-white bg-white/5 rounded-lg hover:bg-white/10 transition group relative">
          <Share2 className="h-[18px] w-[18px]" />
        </button>
        <div className="h-px w-full bg-white/5 my-1" />
        <button className="w-10 h-10 flex items-center justify-center text-neutral-500 hover:text-[#1877F2] hover:bg-white/5 rounded-lg transition">
          <Facebook className="h-[18px] w-[18px]" />
        </button>
        <button className="w-10 h-10 flex items-center justify-center text-neutral-500 hover:text-[#1DA1F2] hover:bg-white/5 rounded-lg transition">
          <Share2 className="h-[18px] w-[18px]" />
        </button>
        <button className="w-10 h-10 flex items-center justify-center text-neutral-500 hover:text-[#0A66C2] hover:bg-white/5 rounded-lg transition">
          <Linkedin className="h-[18px] w-[18px]" />
        </button>
        <button className="w-10 h-10 flex items-center justify-center text-neutral-500 hover:text-white hover:bg-white/5 rounded-lg transition">
          <LinkIcon className="h-[18px] w-[18px]" />
        </button>
      </div>

      <style jsx global>{`
        .grid-bg {
          background-image: linear-gradient(
              rgba(255, 255, 255, 0.03) 1px,
              transparent 1px
            ),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
        }
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        .skeleton-shimmer {
          animation: shimmer 2s infinite linear;
          background: linear-gradient(
            to right,
            #171717 4%,
            #262626 25%,
            #171717 36%
          );
          background-size: 1000px 100%;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #0a0a0a;
        }
        ::-webkit-scrollbar-thumb {
          background: #262626;
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #404040;
        }
      `}</style>
    </div>
  )
}
