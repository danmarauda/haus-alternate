"use client"

/**
 * Prestige Wolseley Property Listing Page
 *
 * @description
 * Premium property listing page for luxury Wolseley residences.
 * Features enhanced gallery, virtual tours, private inspection requests,
 * VIP agent access, and exclusive market analytics.
 *
 * @route /listings/prestige-wolseley
 *
 * @features
 * - Premium image gallery with 360° views
 * - Exclusive VIP concierge service
 * - Private viewing scheduler
 * - Detailed market analytics
 * - Neighborhood insights
 * - Premium property features
 * - Comparative market analysis
 * - Investment potential analysis
 *
 * @example
 * ```tsx
 * import PrestigeWolseleyListing from './page'
 * export default PrestigeWolseleyListing
 * ```
 *
 * @component
 */

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  Bed,
  Bath,
  Car,
  Maximize,
  Calendar,
  MapPin,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  X,
  Phone,
  Mail,
  Camera,
  Crown,
  Sparkles,
  TrendingUp,
  Award,
  Bot,
  Check,
  Star,
  Building2,
  Shield,
  Key,
  Video,
  Home,
  Users
} from "lucide-react"
import { cn } from "@/lib/utils"
import type { Property } from "@/types/listings"

/**
 * Prestige property data for luxury Wolseley residence
 */
const PRESTIGE_PROPERTY_DATA: Property = {
  id: "prestige-wolseley",
  title: "The Wolseley Estate",
  address: "42 Wolseley Road",
  suburb: "Wolseley",
  state: "NSW",
  postcode: "2010",
  fullAddress: "42 Wolseley Road, Wolseley NSW 2010",
  pricing: {
    current: 8500000,
    display: "$8,500,000",
    method: "expression-of-interest",
    pricePerSqm: 12500
  },
  images: [
    {
      id: "1",
      url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop",
      alt: "Grand estate exterior with fountain",
      category: "exterior",
      caption: "The grand façade with private gated entrance"
    },
    {
      id: "2",
      url: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=1600&auto=format&fit=crop",
      alt: "Formal living room with crystal chandelier",
      category: "interior",
      caption: "Formal living with 5m ceilings"
    },
    {
      id: "3",
      url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1600&auto=format&fit=crop",
      alt: "Master suite with private balcony",
      category: "bedroom",
      caption: "Master retreat with city skyline views"
    },
    {
      id: "4",
      url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
      alt: "Gourmet kitchen with butler's pantry",
      category: "kitchen",
      caption: "Chef's kitchen with premium Miele appliances"
    },
    {
      id: "5",
      url: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=1600&auto=format&fit=crop",
      alt: "Infinity edge pool and entertainment area",
      category: "exterior",
      caption: "Resort-style infinity pool"
    },
    {
      id: "6",
      url: "https://images.unsplash.com/photo-1600566753360-24e4de5f7974?q=80&w=1600&auto=format&fit=crop",
      alt: "Private cinema room",
      category: "interior",
      caption: "Dedicated home cinema with Dolby Atmos"
    },
    {
      id: "7",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
      alt: "Wine cellar with tasting area",
      category: "interior",
      caption: "Climate-controlled cellar for 500+ bottles"
    },
    {
      id: "8",
      url: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1600&auto=format&fit=crop",
      alt: "Rooftop terrace with panoramic views",
      category: "exterior",
      caption: "360° city and harbor views"
    }
  ],
  features: {
    bedrooms: 6,
    bathrooms: 7,
    parking: 4,
    internalArea: 680,
    landArea: 1250,
    type: "house",
    yearBuilt: 2022,
    architecture: "Contemporary",
    outdoor: [
      "Infinity pool",
      "Tennis court",
      "Rooftop terrace",
      "Entertaining pavilion",
      "Zen garden",
      "Private gated entrance"
    ],
    indoor: [
      "Home cinema",
      "Wine cellar",
      "Gymnasium",
      "Sauna & steam room",
      "Smart home automation",
      "Security system",
      "Climate control",
      "Servant's quarters"
    ]
  },
  insights: {
    matchScore: 99,
    estimatedGrowth: 12.5,
    marketComparison: "above-market",
    demandLevel: "very-high",
    supplyLevel: "very-tight",
    rentalYield: 4.2,
    capitalGrowthForecast: 15.0
  },
  badges: [
    {
      type: "prestige",
      text: "Prestige",
      icon: "crown",
      color: "amber"
    },
    {
      type: "ai-match",
      text: "99% Match",
      icon: "sparkles",
      color: "indigo",
      value: "99%"
    }
  ],
  description: "An architectural masterpiece representing the pinnacle of contemporary luxury living. This prestigious estate offers unparalleled privacy, sophistication, and breathtaking views. Every detail has been meticulously crafted by world-renowned architects and interior designers, creating a sanctuary of refined elegance.",
  agent: {
    name: "Victoria Sterling",
    agency: "HAUS Prestige International",
    phone: "+61 2 9000 1234",
    email: "victoria.sterling@hausprestige.com.au",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop"
  },
  status: "available",
  isPrestige: true,
  latitude: -33.8900,
  longitude: 151.2150,
  virtualTourUrl: "#virtual-tour",
  floorplanUrl: "#floorplan"
}

/**
 * Neighborhood insights
 */
const NEIGHBORHOOD_INSIGHTS = [
  { label: "Median Price", value: "$6.2M", trend: "+8.2% YoY" },
  { label: "Days on Market", value: "18", trend: "-32% vs average" },
  { label: "Auction Clearance", value: "94%", trend: "Top quintile" },
  { label: "Rental Demand", value: "Very High", trend: "2.1% vacancy" }
]

/**
 * Premium features list
 */
const PREMIUM_FEATURES = [
  { icon: Shield, title: "Security", description: "24/7 monitored security with biometric access" },
  { icon: Building2, title: "Construction", description: "Premium materials with 10-year structural warranty" },
  { icon: Key, title: "Smart Access", description: "Keyless entry with guest management system" },
  { icon: Video, title: "Automation", description: "Full home automation with voice control" },
  { icon: Home, title: "Climate", description: "Zoned climate control with air purification" },
  { icon: Users, title: "Staff", description: "Self-contained staff quarters with private entrance" }
]

export default function PrestigeWolseleyListingPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [activeTab, setActiveTab] = useState<"gallery" | "details" | "analytics">("gallery")

  const currentImage = PRESTIGE_PROPERTY_DATA.images[currentImageIndex]
  const totalImages = PRESTIGE_PROPERTY_DATA.images.length

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % totalImages)
  }

  const goToPrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages)
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full px-6 py-4 md:px-12 md:py-6 flex justify-between items-center z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <Link href="/" className="font-display text-lg font-medium tracking-tight flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 text-black flex items-center justify-center font-bold tracking-tighter group-hover:scale-90 transition-transform duration-300">
            <Crown className="w-4 h-4" />
          </div>
          <span className="hidden sm:inline">HAUS Prestige</span>
        </Link>
        <div className="flex items-center gap-3">
          <span className="hidden md:block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-bold uppercase tracking-widest">
            Exclusive Listing
          </span>
          <button
            onClick={() => setIsSaved(!isSaved)}
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
              isSaved
                ? "bg-rose-500 text-white"
                : "border border-white/20 text-white hover:bg-white hover:text-black"
            )}
          >
            <Heart className={cn("w-4 h-4", isSaved && "fill-current")} />
          </button>
          <button className="w-10 h-10 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors flex items-center justify-center">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </nav>

      {/* Hero Gallery - Enhanced */}
      <section className="relative h-[70vh] md:h-[80vh] lg:h-screen bg-neutral-900">
        {/* Main Image */}
        <div className="relative w-full h-full cursor-pointer group" onClick={() => setIsLightboxOpen(true)}>
          <Image
            src={currentImage.url}
            alt={currentImage.alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          {/* Prestige Badge */}
          <div className="absolute top-6 left-6">
            <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500/90 to-amber-600/90 backdrop-blur border border-amber-400/30 text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg">
              <Crown className="w-4 h-4" />
              Prestige Estate
            </div>
          </div>

          {/* AI Match Badge */}
          {PRESTIGE_PROPERTY_DATA.badges?.map((badge, idx) =>
            badge.type === "ai-match" ? (
              <div key={idx} className="absolute top-6 right-6">
                <div className="px-4 py-2 rounded-lg bg-indigo-600/90 backdrop-blur border border-indigo-400/30 text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg">
                  <Sparkles className="w-4 h-4" />
                  {badge.text}
                </div>
              </div>
            ) : null
          )}

          {/* Image Navigation */}
          {totalImages > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToPrevImage()
                }}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToNextImage()
                }}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Image Counter & Caption */}
          <div className="absolute bottom-8 left-6 right-6 flex justify-between items-end">
            <div className="max-w-lg">
              <div className="flex items-center gap-2 text-white/80 text-xs font-mono mb-2">
                <Camera className="w-3.5 h-3.5" />
                {currentImageIndex + 1} / {totalImages}
              </div>
              {currentImage.caption && (
                <p className="text-white text-sm font-light">{currentImage.caption}</p>
              )}
            </div>
            <button className="px-4 py-2 rounded-full bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors flex items-center gap-2">
              <Video className="w-3.5 h-3.5" />
              Virtual Tour
            </button>
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="absolute bottom-0 left-0 right-0 px-4 md:px-12 pb-6">
          <div className="flex gap-3 overflow-x-auto">
            {PRESTIGE_PROPERTY_DATA.images.map((img, idx) => (
              <button
                key={img.id}
                onClick={() => goToImage(idx)}
                className={cn(
                  "relative flex-shrink-0 w-24 h-16 md:w-40 md:h-24 rounded-lg overflow-hidden border-2 transition-all duration-300",
                  idx === currentImageIndex
                    ? "border-amber-400 opacity-100 scale-105"
                    : "border-transparent opacity-60 hover:opacity-100 hover:scale-105"
                )}
              >
                <Image
                  src={img.url}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="100px"
                />
                {idx === currentImageIndex && (
                  <div className="absolute inset-0 border-2 border-amber-400 rounded-lg pointer-events-none" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-md"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button
              className="absolute top-6 right-6 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all z-10"
              onClick={() => setIsLightboxOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToPrevImage()
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToNextImage()
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            <div className="relative w-full h-full flex items-center justify-center p-16">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                className="relative max-w-full max-h-full"
              >
                <Image
                  src={currentImage.url}
                  alt={currentImage.alt}
                  width={1600}
                  height={1200}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
                {currentImage.caption && (
                  <p className="text-center text-white/80 text-sm mt-4 font-light">
                    {currentImage.caption}
                  </p>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 py-16 max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 text-neutral-500 text-xs font-mono mb-4">
            <MapPin className="w-3.5 h-3.5" />
            {PRESTIGE_PROPERTY_DATA.fullAddress}
            <span className="text-amber-500">•</span>
            <span className="text-amber-500">Prestige Listing</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-6">
            {PRESTIGE_PROPERTY_DATA.title}
          </h1>
          <p className="text-neutral-300 text-lg leading-relaxed max-w-3xl font-light">
            {PRESTIGE_PROPERTY_DATA.description}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-12 border-b border-white/10 pb-4">
          <button
            onClick={() => setActiveTab("gallery")}
            className={cn(
              "px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-colors",
              activeTab === "gallery"
                ? "bg-white text-black"
                : "text-neutral-400 hover:text-white"
            )}
          >
            Gallery
          </button>
          <button
            onClick={() => setActiveTab("details")}
            className={cn(
              "px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-colors",
              activeTab === "details"
                ? "bg-white text-black"
                : "text-neutral-400 hover:text-white"
            )}
          >
            Details
          </button>
          <button
            onClick={() => setActiveTab("analytics")}
            className={cn(
              "px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-colors",
              activeTab === "analytics"
                ? "bg-white text-black"
                : "text-neutral-400 hover:text-white"
            )}
          >
            Analytics
          </button>
        </div>

        {/* Gallery Tab Content */}
        {activeTab === "gallery" && (
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {PRESTIGE_PROPERTY_DATA.images.map((img, idx) => (
              <motion.button
                key={img.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => {
                  setCurrentImageIndex(idx)
                  setIsLightboxOpen(true)
                }}
                className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-all group"
              >
                <Image
                  src={img.url}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {img.caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                    <p className="text-white text-xs font-light">{img.caption}</p>
                  </div>
                )}
              </motion.button>
            ))}
          </div>
        )}

        {/* Details Tab Content */}
        {activeTab === "details" && (
          <div className="space-y-12">
            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-gradient-to-br from-[#0A0A0A] to-neutral-900 border border-white/10 rounded-2xl">
              <FeatureItem icon={Bed} label="Bedrooms" value={PRESTIGE_PROPERTY_DATA.features.bedrooms} />
              <FeatureItem icon={Bath} label="Bathrooms" value={PRESTIGE_PROPERTY_DATA.features.bathrooms} />
              <FeatureItem icon={Car} label="Parking" value={PRESTIGE_PROPERTY_DATA.features.parking ?? "N/A"} />
              <FeatureItem icon={Maximize} label="Internal Area" value={`${PRESTIGE_PROPERTY_DATA.features.internalArea}m²`} />
            </div>

            {/* Premium Features */}
            <div>
              <h2 className="font-display text-2xl font-medium tracking-tight text-white mb-8">
                Premium Features
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PREMIUM_FEATURES.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-[#0A0A0A] border border-white/10 rounded-xl hover:border-amber-500/30 transition-colors group"
                  >
                    <feature.icon className="w-6 h-6 text-amber-500 mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-white font-medium mb-2">{feature.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Property Features Lists */}
            <div className="grid md:grid-cols-2 gap-8">
              <FeatureSection title="Outdoor Features" items={PRESTIGE_PROPERTY_DATA.features.outdoor} />
              <FeatureSection title="Indoor Features" items={PRESTIGE_PROPERTY_DATA.features.indoor} />
            </div>
          </div>
        )}

        {/* Analytics Tab Content */}
        {activeTab === "analytics" && (
          <div className="space-y-12">
            {/* AI Market Insights */}
            <div className="p-8 bg-gradient-to-br from-indigo-950/50 via-purple-950/30 to-amber-950/20 border border-indigo-500/20 rounded-2xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-indigo-400 uppercase tracking-wider">
                    HAUS AI Market Analysis
                  </h3>
                  <p className="text-xs text-neutral-500">Real-time market intelligence</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {PRESTIGE_PROPERTY_DATA.insights && (
                  <>
                    <InsightCard
                      label="AI Match Score"
                      value={`${PRESTIGE_PROPERTY_DATA.insights.matchScore}%`}
                      icon={Sparkles}
                      trend="Exceptional match for premium criteria"
                      color="indigo"
                      size="lg"
                    />
                    <InsightCard
                      label="Est. Growth (1yr)"
                      value={`+${PRESTIGE_PROPERTY_DATA.insights.estimatedGrowth}%`}
                      icon={TrendingUp}
                      trend="Well above market average"
                      color="emerald"
                      size="lg"
                    />
                    <InsightCard
                      label="Capital Growth Forecast"
                      value={`+${PRESTIGE_PROPERTY_DATA.insights.capitalGrowthForecast}%`}
                      icon={Award}
                      trend="Strong long-term appreciation"
                      color="amber"
                      size="lg"
                    />
                    <InsightCard
                      label="Rental Yield"
                      value={`${PRESTIGE_PROPERTY_DATA.insights.rentalYield}%`}
                      icon={TrendingUp}
                      trend="Premium rental returns"
                      color="purple"
                      size="lg"
                    />
                  </>
                )}
              </div>
            </div>

            {/* Neighborhood Insights */}
            <div>
              <h2 className="font-display text-2xl font-medium tracking-tight text-white mb-8">
                Neighborhood Performance
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {NEIGHBORHOOD_INSIGHTS.map((insight, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-[#0A0A0A] border border-white/10 rounded-xl hover:border-amber-500/30 transition-colors"
                  >
                    <div className="text-xs text-neutral-500 uppercase tracking-wider mb-2">
                      {insight.label}
                    </div>
                    <div className="text-2xl font-display font-medium text-white mb-1">
                      {insight.value}
                    </div>
                    <div className="text-xs text-emerald-400">{insight.trend}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Pricing & Contact Sidebar */}
        <div className="mt-16 lg:mt-0 lg:absolute lg:top-24 lg:right-12 lg:w-96">
          <div className="sticky top-24 p-8 bg-gradient-to-br from-[#0A0A0A] to-neutral-900 border border-white/10 rounded-2xl shadow-2xl">
            {/* Pricing */}
            <div className="mb-8 pb-8 border-b border-white/10">
              <div className="flex items-baseline gap-2 mb-2">
                <div className="text-4xl font-display font-medium text-white">
                  {PRESTIGE_PROPERTY_DATA.pricing.display}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="px-2 py-1 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-bold uppercase tracking-wider">
                  <Crown className="w-3 h-3 inline mr-1" />
                  Prestige Pricing
                </div>
                <div className="text-xs text-neutral-500 font-mono">
                  Expression of Interest
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 mb-8">
              <button className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-black text-xs font-bold uppercase tracking-widest hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2">
                <Star className="w-4 h-4" />
                Private Viewing
              </button>
              <button className="w-full py-3 rounded-xl border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                Request Information
              </button>
              <button className="w-full py-3 rounded-xl border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                <Video className="w-3.5 h-3.5" />
                Virtual Tour
              </button>
            </div>

            {/* Agent Info */}
            {PRESTIGE_PROPERTY_DATA.agent && (
              <div className="pt-6 border-t border-white/10">
                <div className="text-xs text-neutral-500 uppercase tracking-widest mb-4">
                  Prestige Agent
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-neutral-800 ring-2 ring-amber-500/20">
                    <Image
                      src={PRESTIGE_PROPERTY_DATA.agent.image ?? "/placeholder-agent.jpg"}
                      alt={PRESTIGE_PROPERTY_DATA.agent.name}
                      width={56}
                      height={56}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white flex items-center gap-2">
                      {PRESTIGE_PROPERTY_DATA.agent.name}
                      <Award className="w-3.5 h-3.5 text-amber-500" />
                    </div>
                    <div className="text-xs text-neutral-500">
                      {PRESTIGE_PROPERTY_DATA.agent.agency}
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <button className="w-full py-2.5 rounded-lg border border-white/10 text-white text-xs font-medium hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                    <Phone className="w-3.5 h-3.5" />
                    {PRESTIGE_PROPERTY_DATA.agent.phone}
                  </button>
                  <button className="w-full py-2.5 rounded-lg border border-white/10 text-white text-xs font-medium hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                    <Mail className="w-3.5 h-3.5" />
                    Email Agent
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Feature Item Component
function FeatureItem({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: number | string }) {
  return (
    <div className="text-center">
      <Icon className="w-5 h-5 text-amber-500 mx-auto mb-2" />
      <div className="text-2xl font-display font-medium text-white mb-1">{value}</div>
      <div className="text-[10px] text-neutral-500 uppercase tracking-wider">{label}</div>
    </div>
  )
}

// Insight Card Component
function InsightCard({
  label,
  value,
  icon: Icon,
  trend,
  color,
  size = "md"
}: {
  label: string
  value: string | number
  icon: React.ElementType
  trend: string
  color: "indigo" | "emerald" | "amber" | "purple"
  size?: "md" | "lg"
}) {
  return (
    <div className={cn(
      "p-6 bg-black/40 rounded-xl",
      size === "lg" ? "p-8" : "p-6"
    )}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-neutral-500 uppercase tracking-wider">{label}</span>
        <Icon className={cn("w-5 h-5", size === "lg" && "w-6 h-6", `text-${color}-400`)} />
      </div>
      <div className={cn(
        "font-display font-medium text-white mb-2",
        size === "lg" ? "text-3xl" : "text-2xl"
      )}>
        {value}
      </div>
      <div className="text-xs text-neutral-400">{trend}</div>
    </div>
  )
}

// Feature Section Component
function FeatureSection({ title, items }: { title: string; items?: string[] }) {
  if (!items?.length) return null
  return (
    <div>
      <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
        <Star className="w-4 h-4 text-amber-500" />
        {title}
      </h3>
      <div className="space-y-3">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
            <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
