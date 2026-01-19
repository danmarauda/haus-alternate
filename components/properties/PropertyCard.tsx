/**
 * Property Card Component
 *
 * Displays a property listing in a card format with:
 * - Image gallery
 * - Key details (price, beds, baths, parking)
 * - Location info
 * - Agent details
 * - Action buttons (save, share, enquire)
 * - AI insights indicator
 * - Status badges
 */

"use client"

import { Property, formatPrice, formatAddress, getStatusColor } from "@/lib/convex"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Image as ImageIcon, Bed, Bath, Car, MapPin, Heart, Share2, Sparkles } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

interface PropertyCardProps {
  property: Property
  onSave?: (id: string) => void
  onShare?: (property: Property) => void
  onEnquire?: (id: string) => void
  isSaved?: boolean
  variant?: "grid" | "list" | "compact"
  showAgent?: boolean
  priority?: boolean
}

export function PropertyCard({
  property,
  onSave,
  onShare,
  onEnquire,
  isSaved = false,
  variant = "grid",
  showAgent = true,
  priority = false,
}: PropertyCardProps) {
  const [imageError, setImageError] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const statusColor = getStatusColor(property.status)
  const displayPrice = formatPrice(property.price, property.priceGuide)

  // Handle image navigation
  const nextImage = () => {
    if (currentImageIndex < property.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1)
    } else {
      setCurrentImageIndex(0)
    }
  }

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1)
    } else {
      setCurrentImageIndex(property.images.length - 1)
    }
  }

  // Compact variant for sidebar/small spaces
  if (variant === "compact") {
    return (
      <Link href={`/properties/${property.slug}`}>
        <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-4">
            <div className="flex gap-4">
              {/* Thumbnail */}
              <div className="relative w-32 h-24 flex-shrink-0 bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden">
                {property.mainImage && !imageError ? (
                  <Image
                    src={property.mainImage}
                    alt={property.title}
                    fill
                    className="object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <ImageIcon className="w-8 h-8 text-zinc-400" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-lg truncate">{displayPrice}</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 truncate">
                      {property.bedrooms || 0} bed • {property.bathrooms || 0} bath • {property.parkingSpaces || 0} car
                    </p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 truncate flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {property.suburb}, {property.state}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    )
  }

  // List variant for horizontal layouts
  if (variant === "list") {
    return (
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <Link href={`/properties/${property.slug}`}>
          <CardContent className="p-0">
            <div className="flex flex-col sm:flex-row">
              {/* Image Gallery */}
              <div className="relative w-full sm:w-80 h-48 sm:h-auto flex-shrink-0 bg-zinc-100 dark:bg-zinc-800">
                {property.mainImage && !imageError ? (
                  <Image
                    src={property.mainImage}
                    alt={property.title}
                    fill
                    className="object-cover"
                    priority={priority}
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <ImageIcon className="w-12 h-12 text-zinc-400" />
                  </div>
                )}

                {/* Status Badge */}
                {property.status && property.status !== "active" && (
                  <Badge className={`absolute top-3 left-3 ${statusColor}`}>
                    {property.status}
                  </Badge>
                )}

                {/* Image Counter */}
                {property.images.length > 1 && (
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                    {currentImageIndex + 1} / {property.images.length}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 p-6 flex flex-col">
                <div className="flex-1">
                  {/* Price & Status */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-2xl font-bold mb-1">{displayPrice}</p>
                      {property.priceGuide && (
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">{property.priceGuide}</p>
                      )}
                    </div>
                    {property.isPrestige && (
                      <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                        Prestige
                      </Badge>
                    )}
                  </div>

                  {/* Title & Address */}
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">{property.title}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {formatAddress(property)}
                  </p>

                  {/* Property Details */}
                  <div className="flex flex-wrap gap-4 text-sm">
                    {property.bedrooms !== undefined && (
                      <span className="flex items-center gap-1">
                        <Bed className="w-4 h-4" />
                        {property.bedrooms} bed
                      </span>
                    )}
                    {property.bathrooms !== undefined && (
                      <span className="flex items-center gap-1">
                        <Bath className="w-4 h-4" />
                        {property.bathrooms} bath
                      </span>
                    )}
                    {property.parkingSpaces !== undefined && (
                      <span className="flex items-center gap-1">
                        <Car className="w-4 h-4" />
                        {property.parkingSpaces} car
                      </span>
                    )}
                    {property.landSize && (
                      <span className="text-zinc-600 dark:text-zinc-400">
                        {property.landSize}
                      </span>
                    )}
                  </div>

                  {/* AI Insights */}
                  {property.aiInsights && (
                    <div className="mt-4 p-3 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 rounded-lg border border-indigo-200 dark:border-indigo-800">
                      <div className="flex items-center gap-2 text-sm">
                        <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                        <span className="font-medium">AI Insights</span>
                      </div>
                      {property.aiInsights.targetPrice && (
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                          Target: {property.aiInsights.targetPrice}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Agent & Actions */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  {showAgent && property.agency && (
                    <div className="text-sm">
                      <p className="text-zinc-600 dark:text-zinc-400">Listed by</p>
                      <p className="font-medium">{property.agency}</p>
                    </div>
                  )}

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={(e) => {
                        e.preventDefault()
                        onSave?.(property._id)
                      }}
                      className={isSaved ? "text-red-600" : ""}
                    >
                      <Heart className={`w-4 h-4 ${isSaved ? "fill-current" : ""}`} />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={(e) => {
                        e.preventDefault()
                        onShare?.(property)
                      }}
                    >
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      onClick={(e) => {
                        e.preventDefault()
                        onEnquire?.(property._id)
                      }}
                    >
                      Enquire
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Link>
      </Card>
    )
  }

  // Grid variant (default)
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
      <Link href={`/properties/${property.slug}`}>
        <CardContent className="p-0">
          {/* Image Gallery */}
          <div className="relative aspect-[4/3] bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
            {property.mainImage && !imageError ? (
              <Image
                src={property.mainImage}
                alt={property.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                priority={priority}
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <ImageIcon className="w-12 h-12 text-zinc-400" />
              </div>
            )}

            {/* Status Badge */}
            {property.status && property.status !== "active" && (
              <Badge className={`absolute top-3 left-3 ${statusColor}`}>
                {property.status}
              </Badge>
            )}

            {/* Prestige Badge */}
            {property.isPrestige && (
              <Badge className="absolute top-3 right-3 bg-purple-600 text-white">
                Prestige
              </Badge>
            )}

            {/* AI Insights Badge */}
            {property.aiInsights && (
              <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                AI Insights
              </div>
            )}

            {/* Image Counter */}
            {property.images.length > 1 && (
              <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                {property.images.length} photos
              </div>
            )}

            {/* Action Buttons Overlay */}
            <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                size="sm"
                variant="secondary"
                className="bg-white/90 hover:bg-white"
                onClick={(e) => {
                  e.preventDefault()
                  onSave?.(property._id)
                }}
              >
                <Heart className={`w-4 h-4 ${isSaved ? "fill-current text-red-600" : ""}`} />
              </Button>
              <Button
                size="sm"
                variant="secondary"
                className="bg-white/90 hover:bg-white"
                onClick={(e) => {
                  e.preventDefault()
                  onShare?.(property)
                }}
              >
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            {/* Price */}
            <p className="text-xl font-bold mb-2">{displayPrice}</p>
            {property.priceGuide && (
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">{property.priceGuide}</p>
            )}

            {/* Address */}
            <h3 className="font-semibold mb-2 line-clamp-2">{property.title}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {property.suburb}, {property.state} {property.postcode}
            </p>

            {/* Property Details */}
            <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400 mb-3">
              {property.bedrooms !== undefined && (
                <span className="flex items-center gap-1">
                  <Bed className="w-4 h-4" />
                  {property.bedrooms}
                </span>
              )}
              {property.bathrooms !== undefined && (
                <span className="flex items-center gap-1">
                  <Bath className="w-4 h-4" />
                  {property.bathrooms}
                </span>
              )}
              {property.parkingSpaces !== undefined && (
                <span className="flex items-center gap-1">
                  <Car className="w-4 h-4" />
                  {property.parkingSpaces}
                </span>
              )}
              {property.landSize && <span>{property.landSize}</span>}
            </div>

            {/* Agent */}
            {showAgent && property.agency && (
              <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800">
                <p className="text-xs text-zinc-600 dark:text-zinc-400">Listed by {property.agency}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}
