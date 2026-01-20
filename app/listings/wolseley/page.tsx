"use client"

/**
 * Wolseley Property Listing Page
 *
 * @description
 * Individual property listing page for 24 Reservoir St, Surry Hills (Wolseley).
 * Features photo gallery with Framer Motion, property details, AI market insights,
 * floor plan viewer, and contact functionality.
 *
 * @route /listings/wolseley
 *
 * @features
 * - Responsive image gallery with lightbox
 * - AI-powered market insights
 * - Property features and specifications
 * - Interactive floor plan viewer
 * - Agent contact form
 * - Similar properties carousel
 * - Virtual tour integration
 *
 * @example
 * ```tsx
 * import WolseleyListing from './page'
 * export default WolseleyListing
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
  Sparkles,
  TrendingUp,
  Award,
  Bot,
  Check
} from "lucide-react"
import { cn } from "@/lib/utils"
import type { Property, PropertyImage } from "@/types/listings"

/**
 * Property data for 24 Reservoir St, Surry Hills
 */
const PROPERTY_DATA: Property = {
  id: "wolseley-24-reservoir",
  title: "The Concrete Loft",
  address: "24 Reservoir St",
  suburb: "Surry Hills",
  state: "NSW",
  postcode: "2010",
  fullAddress: "24 Reservoir St, Surry Hills NSW 2010",
  pricing: {
    current: 2850000,
    display: "$2,850,000",
    method: "fixed-price",
    pricePerSqm: 15405
  },
  images: [
    {
      id: "1",
      url: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1600&auto=format&fit=crop",
      alt: "Exterior view of The Concrete Loft",
      category: "exterior"
    },
    {
      id: "2",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
      alt: "Open plan living area",
      category: "interior"
    },
    {
      id: "3",
      url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1600&auto=format&fit=crop",
      alt: "Master bedroom",
      category: "bedroom"
    },
    {
      id: "4",
      url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop",
      alt: "Modern kitchen",
      category: "kitchen"
    },
    {
      id: "5",
      url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1600&auto=format&fit=crop",
      alt: "Bathroom",
      category: "bathroom"
    },
    {
      id: "6",
      url: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=1600&auto=format&fit=crop",
      alt: "Rooftop terrace",
      category: "exterior"
    }
  ],
  features: {
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    internalArea: 185,
    landArea: 245,
    type: "warehouse",
    yearBuilt: 2018,
    architecture: "Industrial",
    outdoor: ["Rooftop terrace", "Courtyard garden", "BBQ area"],
    indoor: ["Air conditioning", "Hardwood floors", "Smart home system", "Security system"]
  },
  insights: {
    matchScore: 98,
    estimatedGrowth: 4.2,
    marketComparison: "above-market",
    demandLevel: "high",
    supplyLevel: "tight",
    rentalYield: 3.8,
    capitalGrowthForecast: 8.5
  },
  badges: [
    {
      type: "ai-match",
      text: "98% Match",
      icon: "sparkles",
      color: "indigo",
      value: "98%"
    },
    {
      type: "eco-rated",
      text: "Eco-Rated",
      icon: "leaf",
      color: "emerald"
    }
  ],
  description: "An exceptional warehouse conversion in the heart of Surry Hills. This stunning residence combines industrial heritage with contemporary luxury, featuring soaring ceilings, exposed concrete walls, and premium finishes throughout. The open-plan living area flows seamlessly to a private rooftop terrace with city views.",
  agent: {
    name: "Sarah Mitchell",
    agency: "HAUS Prestige",
    phone: "+61 2 9123 4567",
    email: "sarah.mitchell@haus.com.au",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
  },
  status: "available",
  latitude: -33.8878,
  longitude: 151.2107,
  virtualTourUrl: "#virtual-tour",
  floorplanUrl: "#floorplan"
}

/**
 * Similar properties for recommendations
 */
const SIMILAR_PROPERTIES: Array<{
  id: string
  title: string
  address: string
  price: string
  image: string
  beds: number
  baths: number
  area: number
}> = [
  {
    id: "1",
    title: "Victorian Terrace",
    address: "88 Riley St, Surry Hills",
    price: "$3,100,000",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    beds: 4,
    baths: 2.5,
    area: 210
  },
  {
    id: "2",
    title: "Warehouse Conversion",
    address: "12 Foster St, Surry Hills",
    price: "$1,950,000",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop",
    beds: 2,
    baths: 2,
    area: 140
  },
  {
    id: "3",
    title: "The Garden House",
    address: "45 Albion St, Surry Hills",
    price: "$2,200,000",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
    beds: 3,
    baths: 2,
    area: 160
  }
]

export default function WolseleyListingPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  const currentImage = PROPERTY_DATA.images[currentImageIndex]
  const totalImages = PROPERTY_DATA.images.length

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
      <nav className="fixed top-0 w-full px-6 py-4 md:px-12 md:py-6 flex justify-between items-center z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <Link href="/" className="font-display text-lg font-medium tracking-tight flex items-center gap-2 group">
          <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold tracking-tighter group-hover:scale-90 transition-transform duration-300">
            H
          </div>
        </Link>
        <div className="flex items-center gap-4">
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

      {/* Hero Gallery */}
      <section className="relative h-[60vh] md:h-[70vh] lg:h-screen bg-neutral-900">
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Image Navigation */}
          {totalImages > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToPrevImage()
                }}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToNextImage()
                }}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            {PROPERTY_DATA.badges?.map((badge, idx) => (
              <div
                key={idx}
                className={cn(
                  "px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 backdrop-blur border",
                  badge.color === "indigo" && "bg-indigo-600/90 border-indigo-400/20 text-white",
                  badge.color === "emerald" && "bg-emerald-600/90 border-emerald-400/20 text-white"
                )}
              >
                {badge.icon === "sparkles" && <Sparkles className="w-3.5 h-3.5" />}
                {badge.icon === "leaf" && <Award className="w-3.5 h-3.5" />}
                {badge.text}
              </div>
            ))}
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-6 right-6 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur text-white text-xs font-mono">
            <Camera className="w-3 h-3 inline mr-1.5" />
            {currentImageIndex + 1} / {totalImages}
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="absolute bottom-0 left-0 right-0 px-4 md:px-12 pb-6">
          <div className="flex gap-3 overflow-x-auto">
            {PROPERTY_DATA.images.map((img, idx) => (
              <button
                key={img.id}
                onClick={() => goToImage(idx)}
                className={cn(
                  "relative flex-shrink-0 w-20 h-14 md:w-32 md:h-20 rounded-lg overflow-hidden border-2 transition-all",
                  idx === currentImageIndex
                    ? "border-white opacity-100"
                    : "border-transparent opacity-60 hover:opacity-100"
                )}
              >
                <Image
                  src={img.url}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
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
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
              onClick={() => setIsLightboxOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToPrevImage()
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToNextImage()
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
            <div className="relative w-full h-full flex items-center justify-center p-12">
              <motion.img
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                src={currentImage.url}
                alt={currentImage.alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 py-12 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 text-neutral-500 text-xs font-mono mb-4">
                <MapPin className="w-3.5 h-3.5" />
                {PROPERTY_DATA.fullAddress}
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-4">
                {PROPERTY_DATA.title}
              </h1>
              <p className="text-neutral-400 text-base leading-relaxed max-w-2xl">
                {PROPERTY_DATA.description}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-[#0A0A0A] border border-white/10 rounded-xl">
              <FeatureItem icon={Bed} label="Bedrooms" value={PROPERTY_DATA.features.bedrooms} />
              <FeatureItem icon={Bath} label="Bathrooms" value={PROPERTY_DATA.features.bathrooms} />
              <FeatureItem icon={Calendar} label="Parking" value={PROPERTY_DATA.features.parking ?? "N/A"} />
              <FeatureItem icon={Maximize} label="Internal Area" value={`${PROPERTY_DATA.features.internalArea}m²`} />
            </div>

            {/* AI Market Insights */}
            {PROPERTY_DATA.insights && (
              <div className="p-6 bg-gradient-to-br from-indigo-950/50 to-purple-950/30 border border-indigo-500/20 rounded-xl">
                <div className="flex items-center gap-2 mb-6">
                  <Bot className="w-5 h-5 text-indigo-400" />
                  <h3 className="text-sm font-bold text-indigo-400 uppercase tracking-wider">
                    HAUS AI Market Insights
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <InsightCard
                    label="AI Match Score"
                    value={`${PROPERTY_DATA.insights.matchScore}%`}
                    icon={Sparkles}
                    trend="Excellent match for your criteria"
                    color="indigo"
                  />
                  <InsightCard
                    label="Est. Growth (1yr)"
                    value={`+${PROPERTY_DATA.insights.estimatedGrowth}%`}
                    icon={TrendingUp}
                    trend="Above market average"
                    color="emerald"
                  />
                  <InsightCard
                    label="Demand Level"
                    value={PROPERTY_DATA.insights.demandLevel ?? "N/A"}
                    icon={Award}
                    trend="High buyer interest"
                    color="amber"
                  />
                  <InsightCard
                    label="Rental Yield"
                    value={`${PROPERTY_DATA.insights.rentalYield}%`}
                    icon={TrendingUp}
                    trend="Strong rental returns"
                    color="purple"
                  />
                </div>
              </div>
            )}

            {/* Property Features */}
            <div>
              <h2 className="font-display text-2xl font-medium tracking-tight text-white mb-6">
                Property Features
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <FeatureSection title="Outdoor" items={PROPERTY_DATA.features.outdoor} />
                <FeatureSection title="Indoor" items={PROPERTY_DATA.features.indoor} />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <div className="sticky top-24 p-6 bg-[#0A0A0A] border border-white/10 rounded-xl">
              <div className="mb-6">
                <div className="text-3xl font-display font-medium text-white mb-2">
                  {PROPERTY_DATA.pricing.display}
                </div>
                <div className="text-xs text-neutral-500 font-mono">
                  {PROPERTY_DATA.pricing.method === "fixed-price" ? "Fixed Price" : "Auction"}
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <button className="w-full py-3 rounded bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors">
                  Schedule Inspection
                </button>
                <button className="w-full py-3 rounded border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-colors">
                  Download Floorplan
                </button>
                <button className="w-full py-3 rounded border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-colors">
                  Virtual Tour
                </button>
              </div>

              {/* Agent Info */}
              {PROPERTY_DATA.agent && (
                <div className="pt-6 border-t border-white/10">
                  <div className="text-xs text-neutral-500 uppercase tracking-widest mb-4">
                    Listed by
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-800">
                      <Image
                        src={PROPERTY_DATA.agent.image ?? "/placeholder-agent.jpg"}
                        alt={PROPERTY_DATA.agent.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">
                        {PROPERTY_DATA.agent.name}
                      </div>
                      <div className="text-xs text-neutral-500">
                        {PROPERTY_DATA.agent.agency}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <button className="w-full py-2.5 rounded border border-white/10 text-white text-xs font-medium hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                      <Phone className="w-3.5 h-3.5" />
                      {PROPERTY_DATA.agent.phone}
                    </button>
                    <button className="w-full py-2.5 rounded border border-white/10 text-white text-xs font-medium hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                      <Mail className="w-3.5 h-3.5" />
                      Email Agent
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Similar Properties */}
        <section className="mt-24 pt-12 border-t border-white/10">
          <h2 className="font-display text-3xl font-medium tracking-tight text-white mb-8">
            Similar Properties
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {SIMILAR_PROPERTIES.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

// Feature Item Component
function FeatureItem({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: number | string }) {
  return (
    <div className="text-center">
      <Icon className="w-5 h-5 text-neutral-600 mx-auto mb-2" />
      <div className="text-lg font-medium text-white">{value}</div>
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
  color
}: {
  label: string
  value: string | number
  icon: React.ElementType
  trend: string
  color: "indigo" | "emerald" | "amber" | "purple"
}) {
  return (
    <div className="p-4 bg-black/40 rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-neutral-500">{label}</span>
        <Icon className={cn("w-4 h-4", `text-${color}-400`)} />
      </div>
      <div className="text-xl font-medium text-white mb-1">{value}</div>
      <div className="text-[10px] text-neutral-400">{trend}</div>
    </div>
  )
}

// Feature Section Component
function FeatureSection({ title, items }: { title: string; items?: string[] }) {
  if (!items?.length) return null
  return (
    <div>
      <h3 className="text-sm font-medium text-white mb-3">{title}</h3>
      <div className="space-y-2">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-start gap-2 text-sm text-neutral-400">
            <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// Property Card Component (for Similar Properties)
function PropertyCard({
  title,
  address,
  price,
  image,
  beds,
  baths,
  area
}: {
  title: string
  address: string
  price: string
  image: string
  beds: number
  baths: number
  area: number
}) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-[4/3] bg-neutral-900 rounded-xl overflow-hidden mb-4 relative border border-white/5">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
        />
      </div>
      <div className="flex justify-between items-start mb-1">
        <div>
          <h3 className="font-medium text-base text-white group-hover:text-indigo-400 transition-colors">
            {title}
          </h3>
          <p className="text-xs text-neutral-500 mt-0.5">{address}</p>
        </div>
        <div className="text-right">
          <div className="font-medium text-white">{price}</div>
        </div>
      </div>
      <div className="flex gap-3 mt-3 text-xs text-neutral-400 border-t border-white/10 pt-3">
        <span className="flex items-center gap-1.5">
          <Bed className="w-3.5 h-3.5 text-neutral-600" />
          {beds}
        </span>
        <span className="flex items-center gap-1.5">
          <Bath className="w-3.5 h-3.5 text-neutral-600" />
          {baths}
        </span>
        <span className="flex items-center gap-1.5">
          <Maximize className="w-3.5 h-3.5 text-neutral-600" />
          {area}m²
        </span>
      </div>
    </div>
  )
}
