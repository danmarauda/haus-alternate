import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  Menu,
  Bot,
  SlidersHorizontal,
  Sparkles,
  Zap,
  Map,
  Heart,
  Bed,
  Bath,
  Maximize2,
  Gem,
  Leaf,
} from 'lucide-react';

interface SearchResultsProps {
  className?: string;
}

interface Property {
  id: number;
  title: string;
  address: string;
  price: string;
  subtitle?: string;
  beds: number;
  baths: number | string;
  size: string;
  image: string;
  badges?: Array<{
    text: string;
    icon: React.ReactNode;
    variant: 'indigo' | 'neutral' | 'purple' | 'emerald';
  }>;
}

const SearchResults: React.FC<SearchResultsProps> = ({ className }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('Surry Hills, NSW');

  const properties: Property[] = [
    {
      id: 1,
      title: 'The Concrete Loft',
      address: '24 Reservoir St',
      price: '$2,850,000',
      subtitle: '+4.2% Est. Growth',
      beds: 3,
      baths: 2,
      size: '185m²',
      image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop',
      badges: [
        { text: '98% Match', icon: <Sparkles className="w-2.5 h-2.5" />, variant: 'indigo' },
      ],
    },
    {
      id: 2,
      title: 'Victorian Terrace',
      address: '88 Riley St',
      price: '$3,100,000',
      subtitle: 'Auction 12 Oct',
      beds: 4,
      baths: 2.5,
      size: '210m²',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
      badges: [
        { text: 'New', icon: null, variant: 'neutral' },
      ],
    },
    {
      id: 3,
      title: 'Warehouse Conversion',
      address: '12 Foster St',
      price: '$1,950,000',
      subtitle: 'Under Market Value',
      beds: 2,
      baths: 2,
      size: '140m²',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop',
      badges: [
        { text: 'Rare', icon: <Gem className="w-2.5 h-2.5" />, variant: 'purple' },
      ],
    },
    {
      id: 4,
      title: 'The Garden House',
      address: '45 Albion St',
      price: '$2,200,000',
      subtitle: 'Fixed Price',
      beds: 3,
      baths: 2,
      size: '165m²',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop',
      badges: [
        { text: 'Eco-Rated', icon: <Leaf className="w-2.5 h-2.5" />, variant: 'emerald' },
      ],
    },
    {
      id: 5,
      title: 'Industrial Chic',
      address: '78 Crown St',
      price: '$2,450,000',
      subtitle: '+2.1% Est. Growth',
      beds: 2,
      baths: 1,
      size: '120m²',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 6,
      title: 'Heritage Apartment',
      address: '91 Devonshire St',
      price: '$1,780,000',
      subtitle: 'Price Reduced',
      beds: 2,
      baths: 1,
      size: '95m²',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop',
    },
  ];

  const BadgeVariant: Record<string, string> = {
    indigo: 'bg-indigo-600/90 backdrop-blur border border-indigo-400/20 text-white',
    neutral: 'bg-neutral-900/80 backdrop-blur border border-white/10 text-neutral-300',
    purple: 'bg-purple-500/90 backdrop-blur border border-purple-400/20 text-white',
    emerald: 'bg-emerald-600/90 backdrop-blur border border-emerald-400/20 text-white',
  };

  return (
    <div className={`search-results-page ${className || ''}`}>
      {/* Noise Overlay */}
      <div className="fixed inset-0 z-0 w-full h-full pointer-events-none opacity-[0.03]"
           style={{
             backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
             backgroundSize: '50px 50px',
             maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
           }}>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full px-6 py-4 md:px-12 md:py-6 flex justify-between items-center z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div
          className="font-['Space_Grotesk'] text-lg font-medium tracking-tight flex items-center gap-2 cursor-pointer"
          onClick={() => navigate('/')}
        >
          <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold tracking-tighter">
            H.
          </div>
        </div>

        <div className="hidden md:flex items-center bg-neutral-900 border border-white/10 rounded-full px-4 py-2 w-80 gap-3">
          <Search className="w-4 h-4 text-neutral-500" />
          <input
            type="text"
            placeholder="Point Piper, NSW 2027"
            className="bg-transparent border-none text-xs text-white placeholder-neutral-500 focus:outline-none w-full font-mono"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="text-[10px] bg-white/5 border border-white/5 px-1.5 py-0.5 rounded text-neutral-400 font-mono">
            ⌘K
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={() => navigate('/search')}
            className="text-xs font-mono text-neutral-400 hover:text-white uppercase transition hidden md:block"
          >
            Search
          </button>
          <a href="#" className="text-xs font-mono text-neutral-400 hover:text-white uppercase transition hidden md:block">
            App
          </a>
          <button
            onClick={() => navigate('/settings')}
            className="text-xs font-mono text-white border border-white/20 rounded-md px-4 py-2 hover:bg-white hover:text-black transition-all uppercase hidden md:block"
          >
            Login
          </button>
          <button className="md:hidden group">
            <Menu className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-28 px-6 md:px-12 pb-32 min-h-screen bg-[#050505]">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-8 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                Live Market Data
              </span>
            </div>
            <h1 className="font-['Space_Grotesk'] text-4xl md:text-5xl text-white font-medium tracking-tight">
              {searchQuery}
            </h1>
          </div>

          <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur-md">
            <div className="flex items-center gap-2 mb-2">
              <Bot className="w-4 h-4 text-indigo-400" />
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                HAUS AI Insight
              </span>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Demand in this sector has increased by{' '}
              <span className="text-white font-medium">14%</span>{' '}
              in the last 30 days. Inventory is tight. Properties with outdoor
              spaces are seeing a{' '}
              <span className="text-emerald-400 font-medium">+8% premium</span>.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="sticky top-[72px] z-40 bg-[#050505]/80 backdrop-blur-xl border-y border-white/10 py-4 -mx-6 md:-mx-12 px-6 md:px-12 mb-12 flex gap-3 overflow-x-auto items-center">
          <button className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors shrink-0">
            <SlidersHorizontal className="w-3 h-3" />
            All Filters
          </button>
          <div className="h-6 w-px bg-white/10 mx-2 shrink-0"></div>
          <button className="flex items-center gap-2 px-4 py-2 border border-white/20 text-white bg-white/5 rounded-full text-xs font-medium hover:bg-white/10 transition shrink-0">
            Price: $1.5M - $3M
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-white/20 text-white bg-white/5 rounded-full text-xs font-medium hover:bg-white/10 transition shrink-0">
            3+ Beds
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-white/20 text-white bg-white/5 rounded-full text-xs font-medium hover:bg-white/10 transition shrink-0">
            House & Terrace
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-indigo-500/30 text-indigo-300 bg-indigo-500/10 rounded-full text-xs font-medium hover:bg-indigo-500/20 transition shrink-0">
            <Sparkles className="w-3 h-3" />
            AI Matches Only
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-emerald-500/30 text-emerald-300 bg-emerald-500/10 rounded-full text-xs font-medium hover:bg-emerald-500/20 transition shrink-0">
            <Zap className="w-3 h-3" />
            Off-Market
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar Map */}
          <div className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-40">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative border border-white/10 group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop"
                  alt="Map"
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-70 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <button className="w-full bg-white text-black px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-widest shadow-lg flex justify-center items-center gap-2 hover:bg-neutral-200 transition-colors">
                    <Map className="w-3.5 h-3.5" />
                    Open Interactive Map
                  </button>
                </div>
                {/* Map Pins */}
                <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div>
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div>
                <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_10px_indigo]"></div>
              </div>
            </div>
          </div>

          {/* Listing Grid */}
          <div className="lg:col-span-9">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {properties.map((property) => (
                <div
                  key={property.id}
                  className="group cursor-pointer"
                  onClick={() => navigate(`/listing/${property.id}`)}
                >
                  <div className="aspect-[4/3] bg-neutral-900 rounded-xl overflow-hidden mb-4 relative border border-white/5">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {property.badges && (
                      <div className="absolute top-3 left-3 flex gap-2">
                        {property.badges.map((badge, idx) => (
                          <span
                            key={idx}
                            className={`${BadgeVariant[badge.variant]} px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1`}
                          >
                            {badge.icon}
                            {badge.text}
                          </span>
                        ))}
                      </div>
                    )}

                    <button
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Handle favorite toggle
                      }}
                    >
                      <Heart className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="font-medium text-base text-white group-hover:text-indigo-400 transition-colors">
                        {property.title}
                      </h3>
                      <p className="text-xs text-neutral-500 mt-0.5">
                        {property.address}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-white">{property.price}</div>
                      {property.subtitle && (
                        <div className={`text-[10px] ${property.subtitle.includes('+') ? 'text-emerald-400 font-medium' : 'text-neutral-500'}`}>
                          {property.subtitle}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-3 mt-3 text-xs text-neutral-400 border-t border-white/10 pt-3">
                    <span className="flex items-center gap-1.5">
                      <Bed className="w-3.5 h-3.5 text-neutral-600" />
                      {property.beds}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Bath className="w-3.5 h-3.5 text-neutral-600" />
                      {property.baths}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-neutral-600" />
                      {property.size}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
