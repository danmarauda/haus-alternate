import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, Bed, Bath, Square, Heart, Share2, Calendar, Award } from "lucide-react";

// Mock property data - in production this would come from an API/database
const mockProperties: Record<string, any> = {
  "oceanview-modern-villa": {
    id: "oceanview-modern-villa",
    title: "Oceanview Modern Villa",
    price: "$2,800,000",
    location: "Malibu, CA",
    address: "42 Pacific Coast Highway",
    beds: 4,
    baths: 3,
    sqft: "2,800",
    type: "House",
    yearBuilt: 2021,
    imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800",
    ],
    description: `A monumental residence of rare distinction, this architectural masterpiece commands an iconic position overlooking the Pacific Ocean. Designed to dissolve the boundaries between the built form and the coastal spectacle, the home offers an unparalleled waterfront lifestyle.

Spanning three expansive levels connected by a commercial-grade lift, the residence features floor-to-ceiling vitrine glass, a state-of-the-art Wolf & Sub-Zero kitchen, and a temperature-controlled wine cellar. The outdoor entertaining haven flows seamlessly to a heated infinity pool and private beach access.`,
    features: [
      "Infinity Pool & Spa",
      "Temperature-Controlled Wine Cellar",
      "Commercial-Grade Lift",
      "Chef's Kitchen with Wolf & Sub-Zero Appliances",
      "Floor-to-Ceiling Glass Throughout",
      "Private Beach Access",
      "Smart Home Integration",
      "Biometric Security System",
    ],
    badges: [
      { text: "New", variant: "neutral" },
      { text: "AI Verified", variant: "indigo" },
    ],
    agent: {
      name: "Sarah Chen",
      phone: "+1 (310) 555-0123",
      email: "sarah.chen@haus.com",
      avatar: "https://i.pravatar.cc/150?img=5",
      rating: 4.9,
    },
    openHouse: "Sat, 2-5 PM",
    aiInsights: {
      investmentScore: 8.7,
      growthPotential: "+12% YoY",
      rentalYield: "4.2%",
    },
  },
  "skyline-penthouse-suite": {
    id: "skyline-penthouse-suite",
    title: "Skyline Penthouse Suite",
    price: "$5,200,000",
    location: "Manhattan, NY",
    address: "432 Park Avenue, PH",
    beds: 5,
    baths: 4,
    sqft: "4,500",
    type: "Penthouse",
    yearBuilt: 2018,
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200",
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
    ],
    description: `Perched atop one of Manhattan's most prestigious addresses, this extraordinary penthouse offers 360-degree views of the New York skyline. Every detail has been meticulously crafted to create a residence of unparalleled sophistication.

The great room features 12-foot ceilings and floor-to-ceiling windows that frame iconic views of Central Park and the Hudson River. A private terrace wraps the entire floor, providing an outdoor oasis in the heart of the city.`,
    features: [
      "360° Manhattan Skyline Views",
      "Private Rooftop Terrace",
      "12-Foot Ceilings",
      "Full-Service Doorman",
      "World-Class Amenities",
      "Chef's Kitchen",
      "Home Theater",
      "Spa & Wellness Center",
    ],
    badges: [
      { text: "Premium", variant: "purple" },
      { text: "Hot", variant: "emerald" },
    ],
    agent: {
      name: "Michael Ross",
      phone: "+1 (212) 555-0456",
      email: "michael.ross@haus.com",
      avatar: "https://i.pravatar.cc/150?img=3",
      rating: 4.8,
    },
    aiInsights: {
      investmentScore: 9.2,
      growthPotential: "+18% YoY",
      rentalYield: "3.8%",
    },
  },
  "contemporary-townhouse": {
    id: "contemporary-townhouse",
    title: "Contemporary Townhouse",
    price: "$1,150,000",
    location: "Austin, TX",
    address: "1847 South Congress Ave",
    beds: 3,
    baths: 3,
    sqft: "1,900",
    type: "Townhouse",
    yearBuilt: 2022,
    imageUrl: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800",
    ],
    description: `This stunning contemporary townhouse in the heart of Austin's vibrant South Congress neighborhood represents the perfect blend of modern design and urban convenience. Recently renovated with premium finishes throughout.

The open-concept living area features polished concrete floors, custom built-ins, and walls of glass that flood the space with natural light. A private rooftop deck offers skyline views and the perfect setting for entertaining.`,
    features: [
      "Private Rooftop Deck",
      "Smart Home Integration",
      "EV Charging Station",
      "Polished Concrete Floors",
      "Custom Built-Ins",
      "High Ceilings",
      "Garage Parking",
      "South Congress Location",
    ],
    badges: [
      { text: "Price Drop", variant: "neutral" },
      { text: "Open House", variant: "indigo" },
    ],
    agent: {
      name: "Emma Wilson",
      phone: "+1 (512) 555-0789",
      email: "emma.wilson@haus.com",
      avatar: "https://i.pravatar.cc/150?img=9",
      rating: 4.7,
    },
    openHouse: "Sun, 1-4 PM",
    aiInsights: {
      investmentScore: 7.9,
      growthPotential: "+15% YoY",
      rentalYield: "5.1%",
    },
  },
};

export async function generateMetadata({ params }: { params: { id: string } }) {
  const property = mockProperties[params.id];

  if (!property) {
    return {
      title: "Property Not Found",
    };
  }

  return {
    title: `${property.title} | ${property.price} - HAUS`,
    description: property.description.substring(0, 160),
  };
}

export default function PropertyListingPage({ params }: { params: { id: string } }) {
  const property = mockProperties[params.id];

  if (!property) {
    notFound();
  }

  const badgeVariants: Record<string, string> = {
    neutral: "bg-neutral-900/80 backdrop-blur border border-white/10 text-neutral-300",
    indigo: "bg-indigo-600/90 backdrop-blur border border-indigo-400/20 text-white",
    purple: "bg-purple-500/90 backdrop-blur border border-purple-400/20 text-white",
    emerald: "bg-emerald-600/90 backdrop-blur border border-emerald-400/20 text-white",
  };

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full px-6 py-4 md:px-12 flex justify-between items-center z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <Link href="/" className="font-display text-lg font-medium tracking-tight flex items-center gap-2 group">
          <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold tracking-tighter rounded-sm group-hover:scale-95 transition-transform">
            H.
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/search" className="text-xs text-neutral-400 hover:text-white transition-colors">
            Back to Search
          </Link>
        </div>
      </nav>

      <main className="relative z-10 pt-28 pb-12 px-6 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
              <img
                src={property.imageUrl}
                alt={property.title}
                className="w-full h-full object-cover"
              />
            </div>
            {property.images && property.images.length > 1 && (
              <div className="grid grid-cols-3 gap-2">
                {property.images.slice(1, 4).map((image: string, idx: number) => (
                  <div key={idx} className="aspect-square rounded-xl overflow-hidden border border-white/10">
                    <img src={image} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Property Details */}
          <div className="space-y-6">
            {/* Badges */}
            {property.badges && (
              <div className="flex gap-2">
                {property.badges.map((badge: any, idx: number) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${badgeVariants[badge.variant]}`}
                  >
                    {badge.text}
                  </span>
                ))}
              </div>
            )}

            <div>
              <h1 className="font-display text-4xl md:text-5xl font-medium text-white mb-4">
                {property.title}
              </h1>
              <div className="flex items-center gap-2 text-neutral-400 mb-4">
                <MapPin className="w-4 h-4" />
                <span>{property.location}</span>
              </div>
              <div className="text-3xl font-display font-bold text-white mb-6">
                {property.price}
              </div>
              <div className="flex gap-6 text-sm text-neutral-400">
                <div className="flex items-center gap-2">
                  <Bed className="w-4 h-4" />
                  <span>{property.beds} Beds</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="w-4 h-4" />
                  <span>{property.baths} Baths</span>
                </div>
                <div className="flex items-center gap-2">
                  <Square className="w-4 h-4" />
                  <span>{property.sqft}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/20 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/20 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
              <Link
                href="/deal-team"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-neutral-200 transition-colors"
              >
                Book Inspection
              </Link>
            </div>

            {/* AI Insights */}
            {property.aiInsights && (
              <div className="p-6 rounded-xl border border-indigo-500/20 bg-indigo-500/5">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                    AI Insights
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white">{property.aiInsights.investmentScore}</div>
                    <div className="text-[10px] text-neutral-500 uppercase">Investment Score</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-400">{property.aiInsights.growthPotential}</div>
                    <div className="text-[10px] text-neutral-500 uppercase">Growth Potential</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{property.aiInsights.rentalYield}</div>
                    <div className="text-[10px] text-neutral-500 uppercase">Rental Yield</div>
                  </div>
                </div>
              </div>
            )}

            {/* Description */}
            <div className="p-6 rounded-xl border border-white/10 bg-[#0A0A0A]">
              <h3 className="font-medium text-white mb-4">Description</h3>
              <p className="text-sm text-neutral-400 leading-relaxed whitespace-pre-line">
                {property.description}
              </p>
            </div>

            {/* Features */}
            {property.features && (
              <div className="p-6 rounded-xl border border-white/10 bg-[#0A0A0A]">
                <h3 className="font-medium text-white mb-4">Features</h3>
                <ul className="space-y-2 text-sm text-neutral-400">
                  {property.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Agent */}
            {property.agent && (
              <div className="p-6 rounded-xl border border-white/10 bg-[#0A0A0A]">
                <h3 className="font-medium text-white mb-4">Agent</h3>
                <div className="flex items-center gap-4">
                  <img src={property.agent.avatar} alt={property.agent.name} className="w-12 h-12 rounded-full" />
                  <div className="flex-1">
                    <div className="font-medium text-white">{property.agent.name}</div>
                    <div className="text-xs text-neutral-500">{property.agent.email}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-neutral-500">Rating</div>
                    <div className="text-sm font-medium text-white">★ {property.agent.rating}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Open House */}
            {property.openHouse && (
              <div className="flex items-center gap-2 text-sm text-neutral-400">
                <Calendar className="w-4 h-4" />
                <span>Open House: {property.openHouse}</span>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
