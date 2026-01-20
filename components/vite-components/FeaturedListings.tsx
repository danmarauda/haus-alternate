import { useState } from "react";
import Link from "next/link";
import { PropertyCard } from "./PropertyCard";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, SlidersHorizontal, TrendingUp, DollarSign, Clock, Sparkles, Grid3X3, LayoutGrid } from "lucide-react";
import { mockProperties } from "@/data/mockProperties";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type SortOption = "featured" | "price-high" | "price-low" | "newest" | "ai-score";
type FilterOption = "all" | "new" | "open-house" | "price-drop" | "ai-verified";

export const FeaturedListings = () => {
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [filterBy, setFilterBy] = useState<FilterOption>("all");
  const [viewMode, setViewMode] = useState<"grid" | "compact">("grid");
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  // Transform mockProperties to the format PropertyCard expects
  const properties = mockProperties.map(property => ({
    id: property.id,
    images: property.images,
    title: property.title,
    location: property.location,
    price: property.priceDisplay,
    pricePerSqft: Math.round(property.price / property.squareFootage),
    beds: property.bedrooms,
    baths: property.bathrooms,
    sqft: property.squareFootage,
    badges: property.badges || [],
    alt: property.shortDescription || property.title,
    agent: property.agent ? { name: property.agent.name, avatar: property.agent.avatar } : undefined,
    aiInsights: property.aiInsights ? {
      investmentScore: property.aiInsights.investmentScore,
      growthPotential: property.aiInsights.growthPotential,
      rentalYield: property.aiInsights.rentalYield
    } : undefined,
    openHouse: property.openHouseDate
  }));

  const filterOptions: { value: FilterOption; label: string }[] = [
    { value: "all", label: "All" },
    { value: "new", label: "New" },
    { value: "open-house", label: "Open House" },
    { value: "price-drop", label: "Price Drop" },
    { value: "ai-verified", label: "AI Verified" }
  ];

  const sortOptions: { value: SortOption; label: string; icon: React.ReactNode }[] = [
    { value: "featured", label: "Featured", icon: <Sparkles className="w-3.5 h-3.5" /> },
    { value: "price-high", label: "Price: High", icon: <DollarSign className="w-3.5 h-3.5" /> },
    { value: "price-low", label: "Price: Low", icon: <DollarSign className="w-3.5 h-3.5" /> },
    { value: "newest", label: "Newest", icon: <Clock className="w-3.5 h-3.5" /> },
    { value: "ai-score", label: "AI Score", icon: <TrendingUp className="w-3.5 h-3.5" /> }
  ];

  // Filter and sort properties
  const filteredProperties = properties.filter(property => {
    if (filterBy === "all") return true;
    return property.badges.some((badge: { variant: string }) => {
      if (filterBy === "new") return badge.variant === "new";
      if (filterBy === "open-house") return badge.variant === "open-house";
      if (filterBy === "price-drop") return badge.variant === "price-drop";
      if (filterBy === "ai-verified") return badge.variant === "ai-verified";
      return false;
    });
  });

  const sortedProperties = [...filteredProperties].sort((a, b) => {
    const priceA = parseFloat(a.price.replace(/[$M,]/g, '')) * 1000000;
    const priceB = parseFloat(b.price.replace(/[$M,]/g, '')) * 1000000;
    
    switch (sortBy) {
      case "price-high":
        return priceB - priceA;
      case "price-low":
        return priceA - priceB;
      case "ai-score":
        return (b.aiInsights?.investmentScore || 0) - (a.aiInsights?.investmentScore || 0);
      default:
        return 0;
    }
  });

  return (
    <section 
      ref={ref}
      className="max-w-7xl sm:px-6 mt-10 mx-auto mb-8 px-4"
    >
      <div 
        className={`relative sm:mt-12 overflow-hidden shadow-premium bg-glass-bg border border-glass-border rounded-[40px] backdrop-blur transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-glass"></div>
        </div>
        
        <div className="relative sm:p-8 pt-6 pr-6 pb-6 pl-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl text-foreground font-geist tracking-tighter font-medium">
                Featured Listings
              </h2>
              <p className="text-sm text-muted-foreground mt-1 font-geist">
                {sortedProperties.length} properties • Updated live
              </p>
            </div>
            <Button variant="ghost" className="inline-flex items-center gap-2 text-sm text-foreground bg-glass-light hover:bg-glass-border rounded-full px-3 py-1.5 border border-glass-border w-fit">
              <span className="font-geist">View all</span>
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Filters and Sort */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            {/* Filter Pills */}
            <div className="flex items-center gap-2 flex-wrap flex-1">
              <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
              {filterOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setFilterBy(option.value)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium font-geist transition-all ${
                    filterBy === option.value
                      ? 'bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30'
                      : 'bg-glass-light text-muted-foreground border border-glass-border hover:bg-glass-border'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
            
            {/* Sort and View Toggle */}
            <div className="flex items-center gap-2">
              {/* Sort Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium font-geist bg-glass-light text-muted-foreground border border-glass-border hover:bg-glass-border transition-all">
                  {sortOptions.find(o => o.value === sortBy)?.icon}
                  <span className="hidden sm:inline">{sortOptions.find(o => o.value === sortBy)?.label}</span>
                </button>
                <div className="absolute right-0 top-full mt-2 py-2 w-40 bg-secondary/95 backdrop-blur-xl border border-glass-border rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setSortBy(option.value)}
                      className={`w-full px-4 py-2 text-left text-xs font-geist flex items-center gap-2 transition-colors ${
                        sortBy === option.value
                          ? 'text-brand-cyan bg-brand-cyan/10'
                          : 'text-foreground hover:bg-glass-light'
                      }`}
                    >
                      {option.icon}
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* View Toggle */}
              <div className="flex rounded-full border border-glass-border overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 transition-colors ${
                    viewMode === "grid" 
                      ? 'bg-brand-cyan/20 text-brand-cyan' 
                      : 'bg-glass-light text-muted-foreground hover:bg-glass-border'
                  }`}
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("compact")}
                  className={`p-2 transition-colors ${
                    viewMode === "compact" 
                      ? 'bg-brand-cyan/20 text-brand-cyan' 
                      : 'bg-glass-light text-muted-foreground hover:bg-glass-border'
                  }`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Property Grid */}
          <div className={`grid gap-5 ${
            viewMode === "grid" 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
          }`}>
            {sortedProperties.map((property, index) => (
              <Link
                href={`/listing/${property.id}`}
                key={property.id}
                className={`block transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <PropertyCard {...property} />
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {sortedProperties.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-muted-foreground font-geist">No properties match your filters.</p>
              <button 
                onClick={() => setFilterBy("all")}
                className="mt-2 text-brand-cyan text-sm font-geist hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Load More */}
          <div className="mt-8 text-center">
            <Button 
              variant="ghost" 
              className="inline-flex items-center gap-2 text-sm text-foreground bg-glass-light hover:bg-glass-border rounded-full px-6 py-2 border border-glass-border font-geist"
            >
              Load more properties
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
