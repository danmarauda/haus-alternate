/**
 * Property Listings Page
 *
 * Displays all properties with filtering, sorting, and pagination.
 * Supports both grid and list views.
 */

"use client"

import { useState, useMemo } from "react"
import { useProperties } from "@/hooks/useConvex"
import { PropertyCard } from "@/components/properties/PropertyCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, Grid3X3, List, SlidersHorizontal, Loader2, Home, Building2, LandPlot } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { PropertyFilters } from "@/lib/convex"
import { Suspense } from "react"

function PropertyListingsContent() {
  const searchParams = useSearchParams()

  // Parse URL params to filters
  const initialFilters: PropertyFilters = useMemo(() => {
    return {
      suburb: searchParams.get("suburb") || undefined,
      status: searchParams.get("status") || "active",
      priceMin: searchParams.get("priceMin") ? Number(searchParams.get("priceMin")) : undefined,
      priceMax: searchParams.get("priceMax") ? Number(searchParams.get("priceMax")) : undefined,
      bedrooms: searchParams.get("bedrooms") ? Number(searchParams.get("bedrooms")) : undefined,
      bathrooms: searchParams.get("bathrooms") ? Number(searchParams.get("bathrooms")) : undefined,
      isPrestige: searchParams.get("isPrestige") === "true",
      propertyType: searchParams.get("type")?.split(",").filter(Boolean),
      keywords: searchParams.get("keywords")?.split(",").filter(Boolean),
    }
  }, [searchParams])

  const [filters, setFilters] = useState<PropertyFilters>(initialFilters)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  // Fetch properties with filters
  const { properties, isLoading, error } = useProperties(filters, 24)

  // Update filters
  const updateFilter = (key: keyof PropertyFilters, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  // Clear all filters
  const clearFilters = () => {
    setFilters({ status: "active" })
    setSearchQuery("")
  }

  // Filter by search query (client-side for now)
  const filteredProperties = useMemo(() => {
    if (!searchQuery) return properties

    const query = searchQuery.toLowerCase()
    return properties.filter(p =>
      p.title.toLowerCase().includes(query) ||
      p.suburb.toLowerCase().includes(query) ||
      p.description?.toLowerCase().includes(query) ||
      p.address.toLowerCase().includes(query)
    )
  }, [properties, searchQuery])

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      {/* Header */}
      <div className="bg-white dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Property Listings</h1>
              <p className="text-zinc-600 dark:text-zinc-400 mt-1">
                {filteredProperties.length} properties found
              </p>
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="ml-2"
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
              <Input
                type="text"
                placeholder="Search by suburb, address, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <aside className="w-64 flex-shrink-0">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold">Filters</h2>
                    <Button variant="ghost" size="sm" onClick={clearFilters}>
                      Clear all
                    </Button>
                  </div>

                  {/* Property Type */}
                  <div className="mb-6">
                    <Label className="mb-3">Property Type</Label>
                    <div className="space-y-2">
                      {[
                        { label: "House", value: "house", icon: Home },
                        { label: "Apartment", value: "apartment", icon: Building2 },
                        { label: "Townhouse", value: "townhouse", icon: Home },
                        { label: "Land", value: "land", icon: LandPlot },
                        { label: "Commercial", value: "commercial", icon: Building2 },
                      ].map(({ label, value, icon: Icon }) => (
                        <div key={value} className="flex items-center space-x-2">
                          <Checkbox
                            id={value}
                            checked={filters.propertyType?.includes(value)}
                            onCheckedChange={(checked) => {
                              const current = filters.propertyType || []
                              updateFilter(
                                "propertyType",
                                checked
                                  ? [...current, value]
                                  : current.filter(t => t !== value)
                              )
                            }}
                          />
                          <label htmlFor={value} className="flex items-center gap-2 text-sm cursor-pointer flex-1">
                            <Icon className="w-4 h-4" />
                            {label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="mb-6">
                    <Label className="mb-3">Price Range</Label>
                    <div className="space-y-4">
                      <div>
                        <Label className="text-xs text-zinc-600 dark:text-zinc-400">Min Price</Label>
                        <Select
                          value={filters.priceMin?.toString()}
                          onValueChange={(value) => updateFilter("priceMin", value ? Number(value) : undefined)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Any" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="500000">$500,000</SelectItem>
                            <SelectItem value="1000000">$1,000,000</SelectItem>
                            <SelectItem value="2000000">$2,000,000</SelectItem>
                            <SelectItem value="5000000">$5,000,000</SelectItem>
                            <SelectItem value="10000000">$10,000,000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-xs text-zinc-600 dark:text-zinc-400">Max Price</Label>
                        <Select
                          value={filters.priceMax?.toString()}
                          onValueChange={(value) => updateFilter("priceMax", value ? Number(value) : undefined)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Any" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1000000">$1,000,000</SelectItem>
                            <SelectItem value="2000000">$2,000,000</SelectItem>
                            <SelectItem value="5000000">$5,000,000</SelectItem>
                            <SelectItem value="10000000">$10,000,000</SelectItem>
                            <SelectItem value="20000000">$20,000,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Bedrooms */}
                  <div className="mb-6">
                    <Label className="mb-3">Bedrooms</Label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map(beds => (
                        <Button
                          key={beds}
                          variant={filters.bedrooms === beds ? "default" : "outline"}
                          size="sm"
                          onClick={() => updateFilter("bedrooms", filters.bedrooms === beds ? undefined : beds)}
                          className="flex-1"
                        >
                          {beds}+
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Bathrooms */}
                  <div className="mb-6">
                    <Label className="mb-3">Bathrooms</Label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4].map(baths => (
                        <Button
                          key={baths}
                          variant={filters.bathrooms === baths ? "default" : "outline"}
                          size="sm"
                          onClick={() => updateFilter("bathrooms", filters.bathrooms === baths ? undefined : baths)}
                          className="flex-1"
                        >
                          {baths}+
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Prestige Filter */}
                  <div className="mb-6">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="prestige"
                        checked={filters.isPrestige || false}
                        onCheckedChange={(checked) => updateFilter("isPrestige", checked)}
                      />
                      <label htmlFor="prestige" className="text-sm cursor-pointer">
                        Prestige Properties Only
                      </label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </aside>
          )}

          {/* Property Grid */}
          <div className="flex-1">
            {isLoading ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="w-8 h-8 animate-spin text-zinc-400" />
              </div>
            ) : error ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <p className="text-zinc-600 dark:text-zinc-400">Error loading properties. Please try again.</p>
                <Button variant="outline" className="mt-4" onClick={() => window.location.reload()}>
                  Retry
                </Button>
                </CardContent>
              </Card>
            ) : filteredProperties.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <Home className="w-12 h-12 text-zinc-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No properties found</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                    Try adjusting your filters or search query
                  </p>
                  <Button onClick={clearFilters}>Clear Filters</Button>
                </CardContent>
              </Card>
            ) : (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    : "space-y-6"
                }
              >
                {filteredProperties.map(property => (
                  <PropertyCard
                    key={property._id}
                    property={property}
                    variant={viewMode}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PropertyListingsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin" /></div>}>
      <PropertyListingsContent />
    </Suspense>
  )
}
