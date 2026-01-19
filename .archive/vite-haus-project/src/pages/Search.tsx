import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search as SearchIcon, SlidersHorizontal, MapPin, Bed, Bath, Square,
  Heart, Sparkles, Grid, Map, ChevronDown, X, Home, ArrowUpRight,
} from "lucide-react";
import "@/styles/landing.css";

const properties = [
  { id: 1, image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800", title: "Oceanview Modern Villa", location: "Malibu, CA", price: "$2,800,000", beds: 4, baths: 3, sqft: "2,800", tag: "New", match: 98 },
  { id: 2, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800", title: "Skyline Penthouse", location: "Manhattan, NY", price: "$5,200,000", beds: 3, baths: 2, sqft: "1,950", tag: "Verified", match: 94 },
  { id: 3, image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800", title: "Contemporary Townhouse", location: "Austin, TX", price: "$1,150,000", beds: 3, baths: 3, sqft: "1,900", tag: "Open House" },
  { id: 4, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800", title: "Minimalist Estate", location: "Beverly Hills, CA", price: "$8,500,000", beds: 6, baths: 7, sqft: "9,200", tag: "Exclusive", match: 92 },
  { id: 5, image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800", title: "The Glass House", location: "Montecito, CA", price: "$14,500,000", beds: 5, baths: 6, sqft: "8,400", tag: "Auction" },
  { id: 6, image: "https://images.unsplash.com/photo-1600566752355-35792bedcfe1?q=80&w=800", title: "Urban Loft", location: "Brooklyn, NY", price: "$1,850,000", beds: 2, baths: 2, sqft: "1,400", tag: "Price Drop", match: 88 },
  { id: 7, image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800", title: "Waterfront Mansion", location: "Miami Beach, FL", price: "$12,000,000", beds: 7, baths: 8, sqft: "11,500", tag: "New" },
  { id: 8, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800", title: "Mid-Century Modern", location: "Palm Springs, CA", price: "$2,100,000", beds: 4, baths: 3, sqft: "2,600", tag: "Verified" },
];

export default function Search() {
  const [view, setView] = useState<"grid" | "map">("grid");
  const [searchQuery, setSearchQuery] = useState("Sydney, NSW");

  return (
    <div className="landing-page min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full px-6 py-4 md:px-12 flex justify-between items-center z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <Link to="/landing" className="font-display text-lg font-medium tracking-tight flex items-center gap-2 group">
          <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold tracking-tighter rounded-sm group-hover:scale-95 transition-transform">H.</div>
        </Link>
        <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/5">
          <Link to="/landing" className="px-4 py-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors rounded hover:bg-white/5">Home</Link>
          <span className="px-4 py-1.5 text-xs font-medium text-white bg-white/10 rounded border border-white/5">Search</span>
          <Link to="/analytics" className="px-4 py-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors rounded hover:bg-white/5">Analytics</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/settings" className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 border border-white/20" />
        </div>
      </nav>

      <main className="pt-24 pb-20 px-6 md:px-12 max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-white mb-2">Property Search</h1>
          <p className="text-neutral-500 text-sm">Discover your next investment with AI-powered matching</p>
        </div>

        {/* Search Bar */}
        <div className="sticky top-20 z-40 bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-2 flex flex-col md:flex-row gap-2 mb-8 shadow-2xl">
          <div className="flex-1 bg-[#0A0A0A] border border-white/5 rounded-lg flex items-center px-4 h-12 focus-within:border-white/20 transition-colors">
            <SearchIcon className="w-4 h-4 text-neutral-500 mr-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by location, suburb, or postcode..."
              className="bg-transparent border-none text-white text-sm placeholder-neutral-600 focus:outline-none w-full h-full"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="text-neutral-500 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <div className="grid grid-cols-2 md:flex gap-2">
            <button className="px-4 h-12 bg-[#0A0A0A] border border-white/5 rounded-lg flex items-center justify-between gap-3 text-xs text-white hover:bg-white/5 transition-colors min-w-[120px]">
              <span className="text-neutral-400">Price</span>
              <ChevronDown className="w-3 h-3 text-neutral-600" />
            </button>
            <button className="px-4 h-12 bg-[#0A0A0A] border border-white/5 rounded-lg flex items-center justify-between gap-3 text-xs text-white hover:bg-white/5 transition-colors min-w-[120px]">
              <span className="text-neutral-400">Beds</span>
              <ChevronDown className="w-3 h-3 text-neutral-600" />
            </button>
            <button className="px-4 h-12 bg-[#0A0A0A] border border-white/5 rounded-lg flex items-center justify-between gap-3 text-xs text-white hover:bg-white/5 transition-colors min-w-[120px]">
              <span className="text-neutral-400">Type</span>
              <ChevronDown className="w-3 h-3 text-neutral-600" />
            </button>
            <button className="px-4 h-12 bg-[#0A0A0A] border border-white/5 rounded-lg flex items-center gap-2 text-xs text-white hover:bg-white/5 transition-colors">
              <SlidersHorizontal className="w-4 h-4" />
              <span className="hidden md:inline">More Filters</span>
            </button>
          </div>
          <div className="flex bg-[#0A0A0A] p-1 rounded-lg border border-white/5">
            <button onClick={() => setView("grid")} className={`w-10 h-10 rounded flex items-center justify-center ${view === "grid" ? "bg-white/10 text-white" : "text-neutral-500 hover:text-white"} transition-colors`}>
              <Grid className="w-4 h-4" />
            </button>
            <button onClick={() => setView("map")} className={`w-10 h-10 rounded flex items-center justify-center ${view === "map" ? "bg-white/10 text-white" : "text-neutral-500 hover:text-white"} transition-colors`}>
              <Map className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="text-sm text-white font-medium">{properties.length} properties found</span>
            <span className="text-xs text-neutral-500">in {searchQuery || "All locations"}</span>
          </div>
          <button className="flex items-center gap-2 text-xs text-indigo-400 hover:text-indigo-300 transition-colors">
            <Sparkles className="w-3 h-3" />
            AI Match Score
          </button>
        </div>

        {/* Property Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {properties.map((property) => (
            <Link key={property.id} to={`/listing/${property.id}`} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-neutral-800 rounded-xl overflow-hidden mb-4 relative">
                <img src={property.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={property.title} />
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur px-2 py-1 rounded text-[10px] font-medium uppercase tracking-wider text-white">{property.tag}</div>
                {property.match && (
                  <div className="absolute top-3 right-3 bg-indigo-500/90 backdrop-blur-md border border-indigo-400/20 px-2 py-1 rounded text-[10px] font-semibold uppercase tracking-wider text-white flex items-center gap-1 shadow-lg">
                    <Sparkles className="w-2.5 h-2.5" />{property.match}%
                  </div>
                )}
                <button className="absolute bottom-3 right-3 w-8 h-8 bg-black/60 backdrop-blur rounded-full flex items-center justify-center text-white/60 hover:text-red-400 hover:bg-black/80 transition-all opacity-0 group-hover:opacity-100">
                  <Heart className="w-4 h-4" />
                </button>
              </div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium text-sm text-white group-hover:text-indigo-400 transition-colors">{property.title}</h3>
                  <p className="text-xs text-neutral-400 mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />{property.location}
                  </p>
                </div>
                <div className="text-sm font-medium text-white">{property.price}</div>
              </div>
              <div className="flex gap-4 text-xs text-neutral-500">
                <span className="flex items-center gap-1"><Bed className="w-3 h-3" />{property.beds}</span>
                <span className="flex items-center gap-1"><Bath className="w-3 h-3" />{property.baths}</span>
                <span className="flex items-center gap-1"><Square className="w-3 h-3" />{property.sqft}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors">
            Load More Properties
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 md:px-12">
        <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Home className="w-4 h-4 text-neutral-500" />
            <span className="text-xs text-neutral-500">HAUS Platform</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/terms" className="text-xs text-neutral-500 hover:text-white transition-colors">Terms</Link>
            <Link to="/privacy" className="text-xs text-neutral-500 hover:text-white transition-colors">Privacy</Link>
            <Link to="/about" className="text-xs text-neutral-500 hover:text-white transition-colors">About</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
