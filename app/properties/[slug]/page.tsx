/**
 * Property Details Page
 *
 * Comprehensive property information display with:
 * - Image gallery
 * - Property specifications
 * - Floor plans
 * - Agent details
 * - Enquiry form
 * - Similar properties
 * - Market data
 */

"use client"

import { use, useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { usePropertyPageData } from "@/hooks/useConvex"
import { PropertyCard } from "@/components/properties/PropertyCard"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Bed,
  Bath,
  Car,
  MapPin,
  Calendar,
  Ruler,
  Home,
  Phone,
  Mail,
  Share2,
  Heart,
  ArrowLeft,
  Loader2,
  Sparkles,
} from "lucide-react"
import { formatPrice, formatAddress, getStatusColor, getNextInspection, formatInspection } from "@/lib/convex"
import Image from "next/image"
import Link from "next/link"
import { useSessionId } from "@/hooks/useConvex"
import { useTrackEvent } from "@/hooks/useConvex"
import { EnquiryForm } from "@/components/properties/EnquiryForm"

export default function PropertyDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string

  const sessionId = useSessionId()
  const { trackEvent } = useTrackEvent()

  const { property, isLoading, error, marketData, similarProperties } = usePropertyPageData(slug)

  // Track page view
  useEffect(() => {
    if (property) {
      trackEvent({
        sessionId,
        event: "property_view",
        category: "engagement",
        properties: { propertyId: property._id, slug: property.slug },
        page: `/properties/${slug}`,
      })
    }
  }, [property, slug, sessionId, trackEvent])

  // Handle share
  const handleShare = async () => {
    if (typeof window === "undefined" || !property) return

    const url = window.location.href
    const title = property.title

    if (navigator.share) {
      try {
        await navigator.share({ title, url })
      } catch (err) {
        console.error("Error sharing:", err)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(url)
      alert("Link copied to clipboard!")
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-zinc-400" />
      </div>
    )
  }

  if (error || !property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-900">
        <Card className="max-w-md">
          <CardContent className="p-12 text-center">
            <Home className="w-12 h-12 text-zinc-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Property Not Found</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              The property you're looking for doesn't exist or has been removed.
            </p>
            <Button onClick={() => router.push("/properties")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Listings
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const statusColor = getStatusColor(property.status)
  const displayPrice = formatPrice(property.price, property.priceGuide)
  const nextInspection = getNextInspection(property.inspections)

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      {/* Header */}
      <div className="bg-white dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button variant="ghost" onClick={() => router.back()} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl font-bold">{displayPrice}</h1>
                    {property.status && property.status !== "active" && (
                      <Badge className={statusColor}>{property.status}</Badge>
                    )}
                    {property.isPrestige && (
                      <Badge className="bg-purple-600 text-white">Prestige</Badge>
                    )}
                  </div>
                  {property.priceGuide && (
                    <p className="text-zinc-600 dark:text-zinc-400 mb-2">{property.priceGuide}</p>
                  )}
                  <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">{property.title}</h2>
                  <p className="text-zinc-600 dark:text-zinc-400 flex items-center gap-1 mt-1">
                    <MapPin className="w-4 h-4" />
                    {formatAddress(property)}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Heart className="w-4 h-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <Card>
              <CardContent className="p-0">
                <div className="relative aspect-[16/10] bg-zinc-100 dark:bg-zinc-800">
                  {property.mainImage ? (
                    <Image
                      src={property.mainImage}
                      alt={property.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Home className="w-16 h-16 text-zinc-400" />
                    </div>
                  )}
                  {property.images.length > 1 && (
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                      {property.images.length} photos
                    </div>
                  )}
                </div>
                {property.images.length > 1 && (
                  <div className="p-4 grid grid-cols-4 gap-2">
                    {property.images.slice(0, 4).map((image, i) => (
                      <div key={i} className="relative aspect-square bg-zinc-100 dark:bg-zinc-800 rounded overflow-hidden">
                        <Image src={image} alt={`${property.title} ${i + 1}`} fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Property Details */}
            <Card>
              <CardHeader>
                <CardTitle>Property Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Key Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {property.bedrooms !== undefined && (
                    <div className="flex items-center gap-2">
                      <Bed className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                      <div>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">Bedrooms</p>
                        <p className="font-semibold">{property.bedrooms}</p>
                      </div>
                    </div>
                  )}
                  {property.bathrooms !== undefined && (
                    <div className="flex items-center gap-2">
                      <Bath className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                      <div>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">Bathrooms</p>
                        <p className="font-semibold">{property.bathrooms}</p>
                      </div>
                    </div>
                  )}
                  {property.parkingSpaces !== undefined && (
                    <div className="flex items-center gap-2">
                      <Car className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                      <div>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">Parking</p>
                        <p className="font-semibold">{property.parkingSpaces}</p>
                      </div>
                    </div>
                  )}
                  {property.landSize && (
                    <div className="flex items-center gap-2">
                      <Ruler className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                      <div>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">Land Size</p>
                        <p className="font-semibold">{property.landSize}</p>
                      </div>
                    </div>
                  )}
                </div>

                <Separator />

                {/* Description */}
                {property.description && (
                  <div>
                    <h3 className="font-semibold mb-2">Description</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 whitespace-pre-line">{property.description}</p>
                  </div>
                )}

                {/* Additional Details */}
                <div className="grid grid-cols-2 gap-4">
                  {property.yearBuilt && (
                    <div>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">Year Built</p>
                      <p className="font-medium">{property.yearBuilt}</p>
                    </div>
                  )}
                  {property.buildingSize && (
                    <div>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">Building Size</p>
                      <p className="font-medium">{property.buildingSize}</p>
                    </div>
                  )}
                  {property.aspect && (
                    <div>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">Aspect</p>
                      <p className="font-medium">{property.aspect}</p>
                    </div>
                  )}
                  {property.zoning && (
                    <div>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">Zoning</p>
                      <p className="font-medium">{property.zoning}</p>
                    </div>
                  )}
                </div>

                {/* Features */}
                {property.features && property.features.length > 0 && (
                  <>
                    <Separator />
                    <div>
                      <h3 className="font-semibold mb-3">Features</h3>
                      <div className="flex flex-wrap gap-2">
                        {property.features.map((feature, i) => (
                          <Badge key={i} variant="secondary">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* AI Insights */}
                {property.aiInsights && (
                  <>
                    <Separator />
                    <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 rounded-lg border border-indigo-200 dark:border-indigo-800">
                      <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        <h3 className="font-semibold">AI Insights</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        {property.aiInsights.valueRange && (
                          <div>
                            <p className="text-zinc-600 dark:text-zinc-400">Value Range</p>
                            <p className="font-medium">{property.aiInsights.valueRange}</p>
                          </div>
                        )}
                        {property.aiInsights.targetPrice && (
                          <div>
                            <p className="text-zinc-600 dark:text-zinc-400">Target Price</p>
                            <p className="font-medium">{property.aiInsights.targetPrice}</p>
                          </div>
                        )}
                        {property.aiInsights.yield && (
                          <div>
                            <p className="text-zinc-600 dark:text-zinc-400">Rental Yield</p>
                            <p className="font-medium">{property.aiInsights.yield}</p>
                          </div>
                        )}
                        {property.aiInsights.growth && (
                          <div>
                            <p className="text-zinc-600 dark:text-zinc-400">Expected Growth</p>
                            <p className="font-medium">{property.aiInsights.growth}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Inspection Times */}
            {property.inspections && property.inspections.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Inspection Times</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {property.inspections.map((inspection, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
                        <Calendar className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                        <div>
                          <p className="font-medium">{formatInspection(inspection)}</p>
                          {nextInspection && inspection.date === nextInspection.date && (
                            <Badge variant="outline" className="mt-1 text-xs">Next Inspection</Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Similar Properties */}
            {similarProperties.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Similar Properties</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {similarProperties.slice(0, 4).map(similarProperty => (
                      <PropertyCard
                        key={similarProperty._id}
                        property={similarProperty}
                        variant="compact"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Enquiry Form */}
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Enquire About This Property</CardTitle>
              </CardHeader>
              <CardContent>
                <EnquiryForm propertyId={property._id} propertyTitle={property.title} />
              </CardContent>
            </Card>

            {/* Agent Info */}
            {property.agent && (
              <Card>
                <CardHeader>
                  <CardTitle>Listing Agent</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {property.agent.image && (
                      <div className="w-20 h-20 rounded-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 mx-auto">
                        <Image
                          src={property.agent.image}
                          alt={property.agent.name}
                          width={80}
                          height={80}
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="text-center">
                      <p className="font-semibold">{property.agent.name}</p>
                      {property.agent.agency && (
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">{property.agent.agency}</p>
                      )}
                      {property.agent.rating && (
                        <div className="flex items-center justify-center gap-1 mt-2">
                          <span className="text-yellow-500">★</span>
                          <span className="text-sm">{property.agent.rating}</span>
                          {property.agent.reviewCount && (
                            <span className="text-xs text-zinc-600 dark:text-zinc-400">
                              ({property.agent.reviewCount} reviews)
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {property.contactPhone && (
                      <Button variant="outline" className="w-full" asChild>
                        <a href={`tel:${property.contactPhone}`}>
                          <Phone className="w-4 h-4 mr-2" />
                          {property.contactPhone}
                        </a>
                      </Button>
                    )}
                    {property.contactEmail && (
                      <Button variant="outline" className="w-full" asChild>
                        <a href={`mailto:${property.contactEmail}`}>
                          <Mail className="w-4 h-4 mr-2" />
                          Email Agent
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Market Data */}
            {marketData && (
              <Card>
                <CardHeader>
                  <CardTitle>Market Data</CardTitle>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{property.suburb}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">Median Price</p>
                      <p className="text-xl font-bold">
                        ${marketData.medianPrice.toLocaleString()}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-zinc-600 dark:text-zinc-400">Annual Growth</p>
                        <p className="font-medium">{marketData.yearlyGrowth}%</p>
                      </div>
                      <div>
                        <p className="text-zinc-600 dark:text-zinc-400">Clearance Rate</p>
                        <p className="font-medium">{marketData.clearanceRate}%</p>
                      </div>
                      <div>
                        <p className="text-zinc-600 dark:text-zinc-400">Days on Market</p>
                        <p className="font-medium">{marketData.daysOnMarket}</p>
                      </div>
                      <div>
                        <p className="text-zinc-600 dark:text-zinc-400">Total Listings</p>
                        <p className="font-medium">{marketData.totalListings}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
