import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MapPin, Building2, DollarSign, Bed, Search, Car, Sparkles, Trees, Waves } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";
import { VoiceSearchButton } from "@/components/vite-components/VoiceSearchButton";
import { useRealtimeVoice } from "@/hooks/useRealtimeVoice";
import { useState } from "react";
import { AnimatedGradientMesh } from "@/components/vite-components/AnimatedGradientMesh";
import { AnimatedStat } from "@/components/vite-components/AnimatedStats";
import { SearchAutocomplete } from "@/components/vite-components/SearchAutocomplete";
import { SearchResultsPreview } from "@/components/vite-components/SearchResultsPreview";
import { cn } from "@/lib/utils";

export const SearchSection = () => {
  const [searchForm, setSearchForm] = useState({
    location: "",
    propertyType: "",
    priceRange: "",
    bedrooms: "",
    amenities: [] as string[]
  });

  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const { voiceState, startVoiceSearch, stopVoiceSearch } = useRealtimeVoice({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY || "",
    onSearchData: (data) => {
      setSearchForm(prev => ({
        ...prev,
        location: data.location || prev.location,
        propertyType: data.propertyType || prev.propertyType,
        priceRange: data.priceRange || prev.priceRange,
        bedrooms: data.bedrooms || prev.bedrooms,
        amenities: data.amenities || prev.amenities
      }));
    }
  });

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const hasSearchQuery = searchForm.location.length > 2;

  return (
    <section className="relative max-w-7xl sm:px-6 mt-8 mx-auto mb-8 px-4">
      {/* Animated gradient mesh background */}
      <AnimatedGradientMesh className="absolute inset-0 -z-10 opacity-50" />

      <div className="relative sm:mt-12 overflow-hidden shadow-premium bg-glass-bg border border-glass-border rounded-[40px] backdrop-blur-xl">
        {/* Glass overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-glass"></div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-foreground/5 blur-3xl animate-float pointer-events-none" />
        <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-foreground/5 blur-2xl animate-float-delayed pointer-events-none" />

        <div className="relative sm:p-8 pt-6 pr-6 pb-6 pl-6">
          <div className="flex gap-8 items-start">
            <div className="flex-1">
              <Badge className="inline-flex items-center gap-2 text-xs font-medium text-foreground bg-muted border border-glass-border rounded-full px-3 py-1.5 animate-fade-in">
                <MapPin className="w-3.5 h-3.5" />
                <span className="font-sans">Nationwide • Verified Listings</span>
              </Badge>
              
              <h1 className="text-[9.5vw] sm:text-[8vw] md:text-[6.5vw] lg:text-[6vw] leading-[0.95] font-medium text-foreground tracking-tighter font-display mt-4 animate-fade-up">
                The new home of homes
              </h1>
              
              <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground animate-fade-up" style={{ animationDelay: '100ms' }}>
                Curated properties across top neighborhoods. Powerful search, virtual tours, and expert support from offer to close.
              </p>
            </div>

            <div className="hidden lg:block w-[22rem] pt-6">
              <div className="space-y-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Building2 className="w-4 h-4" />
                  <span className="font-geist">Single-family • Apartments • Penthouses</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="font-geist">Same‑day showings</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="font-geist">Verified sellers & documents</span>
                </div>
                
                <div className="border-glass-border border-t pt-4">
                  <p className="leading-relaxed text-sm text-muted-foreground font-geist">
                    HAUS combines market expertise with a seamless experience. Save favorites, compare homes, and close with confidence.
                  </p>
                  
                  {/* Animated Stats */}
                  <div className="grid grid-cols-3 gap-4 max-w-2xl mt-6">
                    <AnimatedStat value={12000} suffix="+" label="Active Listings" />
                    <AnimatedStat value={4.9} label="Client Rating" />
                    <AnimatedStat value={350} suffix="+" label="Virtual Tours" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Media panel with Ken Burns effect */}
          <div className="mt-8 relative rounded-2xl overflow-hidden border border-glass-border group">
            <div className="relative w-full h-[52vh] sm:h-[60vh] overflow-hidden">
              <img
                src={heroImage.src}
                alt="Modern home exterior at sunset"
                className="w-full h-full object-cover transition-transform ease-linear group-hover:scale-110"
                style={{ transitionDuration: '20000ms' }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-overlay pointer-events-none"></div>

            <div className="absolute inset-x-0 bottom-0 sm:p-8 pt-6 pr-6 pb-6 pl-6">
              {/* Search controls */}
              <div className="mt-5">
                <div className="w-full sm:p-4 bg-black/20 border-white/10 border rounded-2xl pt-3 pr-3 pb-3 pl-3 backdrop-blur-xl">
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-2">
                    {/* Location with Autocomplete */}
                    <SearchAutocomplete
                      value={searchForm.location}
                      onChange={(value) => setSearchForm(prev => ({ ...prev, location: value }))}
                      placeholder="City, neighborhood"
                    />
                    
                    {/* Type */}
                    <Select>
                      <SelectTrigger className="w-full pl-9 pr-10 py-3 rounded-xl text-sm bg-black/10 text-white border border-white/10 focus:ring-2 focus:ring-brand-cyan/30 focus:border-brand-cyan/50 backdrop-blur-md transition-all duration-200">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <SelectValue placeholder="Any type" className="font-geist" />
                      </SelectTrigger>
                      <SelectContent className="bg-secondary/95 border-glass-border backdrop-blur-xl">
                        <SelectItem value="house">House</SelectItem>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="condo">Condo</SelectItem>
                        <SelectItem value="penthouse">Penthouse</SelectItem>
                        <SelectItem value="villa">Villa</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    {/* Price */}
                    <Select>
                      <SelectTrigger className="w-full pl-9 pr-10 py-3 rounded-xl text-sm bg-black/10 text-white border border-white/10 focus:ring-2 focus:ring-brand-cyan/30 focus:border-brand-cyan/50 backdrop-blur-md transition-all duration-200">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50">
                          <DollarSign className="w-4 h-4" />
                        </div>
                        <SelectValue placeholder="$500K–$1M" className="font-geist" />
                      </SelectTrigger>
                      <SelectContent className="bg-secondary/95 border-glass-border backdrop-blur-xl">
                        <SelectItem value="500k-1m">$500K–$1M</SelectItem>
                        <SelectItem value="1m-2m">$1M–$2M</SelectItem>
                        <SelectItem value="2m-5m">$2M–$5M</SelectItem>
                        <SelectItem value="5m+">$5M+</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    {/* Beds */}
                    <Select>
                      <SelectTrigger className="w-full pl-9 pr-10 py-3 rounded-xl text-sm bg-black/10 text-white border border-white/10 focus:ring-2 focus:ring-brand-cyan/30 focus:border-brand-cyan/50 backdrop-blur-md transition-all duration-200">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50">
                          <Bed className="w-4 h-4" />
                        </div>
                        <SelectValue placeholder="Any beds" className="font-geist" />
                      </SelectTrigger>
                      <SelectContent className="bg-secondary/95 border-glass-border backdrop-blur-xl">
                        <SelectItem value="1+">1+ beds</SelectItem>
                        <SelectItem value="2+">2+ beds</SelectItem>
                        <SelectItem value="3+">3+ beds</SelectItem>
                        <SelectItem value="4+">4+ beds</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    {/* Voice Search Button */}
                    <VoiceSearchButton
                      voiceState={voiceState}
                      onStart={startVoiceSearch}
                      onStop={stopVoiceSearch}
                      showAIPoweredBadge={true}
                    />
                    
                    {/* Search Button */}
                    <Button className="w-full rounded-xl px-4 py-3 text-sm font-medium tracking-tight text-black bg-white hover:bg-white/90 border-0 font-geist transition-all duration-200 hover:shadow-glow-brand">
                      <Search className="w-4 h-4" />
                      <span>Search</span>
                    </Button>
                  </div>

                  {/* Quick filters with spring animation */}
                  <div className="flex flex-wrap gap-2 mt-3 items-center">
                    <span className="text-xs text-white/50 font-geist">Quick filters:</span>
                    {[
                      { id: 'parking', icon: Car, label: 'Parking' },
                      { id: 'new', icon: Sparkles, label: 'New builds' },
                      { id: 'garden', icon: Trees, label: 'Garden' },
                      { id: 'pool', icon: Waves, label: 'Pool' },
                    ].map((filter) => (
                      <Button 
                        key={filter.id}
                        variant="ghost" 
                        size="sm" 
                        onClick={() => toggleFilter(filter.id)}
                        className={cn(
                          "inline-flex items-center gap-1.5 text-xs font-medium tracking-tight rounded-full px-3 py-1.5 border backdrop-blur-sm transition-all duration-200 font-geist",
                          "hover:scale-105 active:scale-95",
                          activeFilters.includes(filter.id)
                            ? "bg-white/20 border-white/30 text-white"
                            : "bg-white/5 hover:bg-white/10 border-white/10 text-white/80"
                        )}
                      >
                        <filter.icon className={cn(
                          "w-3.5 h-3.5",
                          activeFilters.includes(filter.id) ? "text-brand-cyan" : "text-white/60"
                        )} />
                        {filter.label}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Search Results Preview */}
                <SearchResultsPreview 
                  isVisible={hasSearchQuery} 
                  searchQuery={searchForm.location}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
