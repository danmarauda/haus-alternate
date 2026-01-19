import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles, ArrowLeft, Plus, X, Check, Minus, MapPin, Bed, Bath,
  Square, Calendar, DollarSign, TrendingUp, Car, Home, Ruler,
  TreePine, Waves, Building, Award,
} from "lucide-react";
import "@/styles/landing.css";

type Property = {
  id: number;
  image: string;
  title: string;
  location: string;
  price: number;
  beds: number;
  baths: number;
  cars: number;
  sqft: number;
  landSize: number;
  yearBuilt: number;
  type: string;
  features: string[];
  match: number;
  daysOnMarket: number;
  pricePerSqft: number;
  growth1Y: number;
  walkScore: number;
  transitScore: number;
};

const sampleProperties: Property[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800",
    title: "Oceanview Modern Villa",
    location: "Malibu, CA",
    price: 2800000,
    beds: 4,
    baths: 3,
    cars: 2,
    sqft: 2800,
    landSize: 5200,
    yearBuilt: 2021,
    type: "House",
    features: ["Pool", "Ocean View", "Smart Home", "Solar Panels", "Wine Cellar"],
    match: 98,
    daysOnMarket: 14,
    pricePerSqft: 1000,
    growth1Y: 8.2,
    walkScore: 72,
    transitScore: 45,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800",
    title: "Skyline Penthouse",
    location: "Manhattan, NY",
    price: 5200000,
    beds: 3,
    baths: 2,
    cars: 1,
    sqft: 1950,
    landSize: 0,
    yearBuilt: 2019,
    type: "Penthouse",
    features: ["City View", "Concierge", "Gym", "Rooftop Access", "Smart Home"],
    match: 94,
    daysOnMarket: 28,
    pricePerSqft: 2667,
    growth1Y: 5.4,
    walkScore: 98,
    transitScore: 100,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
    title: "Minimalist Estate",
    location: "Beverly Hills, CA",
    price: 8500000,
    beds: 6,
    baths: 7,
    cars: 4,
    sqft: 9200,
    landSize: 12000,
    yearBuilt: 2023,
    type: "Estate",
    features: ["Pool", "Tennis Court", "Guest House", "Wine Cellar", "Theater", "Gym"],
    match: 92,
    daysOnMarket: 45,
    pricePerSqft: 924,
    growth1Y: 12.1,
    walkScore: 35,
    transitScore: 20,
  },
];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
};

export default function Compare() {
  const [selectedProperties, setSelectedProperties] = useState<Property[]>(sampleProperties.slice(0, 2));
  const [showAddModal, setShowAddModal] = useState(false);

  const removeProperty = (id: number) => {
    setSelectedProperties(selectedProperties.filter((p) => p.id !== id));
  };

  const addProperty = (property: Property) => {
    if (selectedProperties.length < 4 && !selectedProperties.find((p) => p.id === property.id)) {
      setSelectedProperties([...selectedProperties, property]);
    }
    setShowAddModal(false);
  };

  const CompareCell = ({ value, best, worst, format = "default" }: { value: any; best?: boolean; worst?: boolean; format?: string }) => {
    let displayValue = value;
    if (format === "currency") displayValue = formatCurrency(value);
    if (format === "sqft") displayValue = `${value.toLocaleString()} sqft`;
    if (format === "percent") displayValue = `${value}%`;
    if (format === "days") displayValue = `${value} days`;
    if (format === "score") displayValue = `${value}/100`;

    return (
      <div className={`p-4 ${best ? "bg-emerald-500/10" : worst ? "bg-red-500/10" : ""}`}>
        <span className={`font-medium ${best ? "text-emerald-400" : worst ? "text-red-400" : "text-white"}`}>
          {displayValue}
        </span>
      </div>
    );
  };

  const getBest = (key: keyof Property, higher = true) => {
    const values = selectedProperties.map((p) => p[key] as number);
    return higher ? Math.max(...values) : Math.min(...values);
  };

  return (
    <div className="landing-page min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 backdrop-blur-xl border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/favorites" className="p-2 rounded-lg hover:bg-white/5 text-neutral-400 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <Link to="/landing" className="inline-flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-white/10 border border-white/10 flex items-center justify-center">
                <Sparkles className="h-3.5 w-3.5 text-white/80" />
              </div>
              <span className="text-base font-semibold tracking-tight">HAUS</span>
            </Link>
          </div>
          <span className="text-sm text-neutral-400">Comparing {selectedProperties.length} properties</span>
        </div>
      </nav>

      <main className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-display font-medium tracking-tight text-white mb-1">Compare Properties</h1>
            <p className="text-neutral-500 text-sm">Side-by-side comparison of your selected properties</p>
          </div>
          {selectedProperties.length < 4 && (
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-sm text-white hover:bg-white/5 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add Property
            </button>
          )}
        </div>

        {selectedProperties.length === 0 ? (
          <div className="text-center py-20">
            <Home className="w-12 h-12 text-neutral-700 mx-auto mb-4" />
            <h2 className="text-xl font-medium text-white mb-2">No properties to compare</h2>
            <p className="text-neutral-500 text-sm mb-6">Add properties from your favorites to compare them.</p>
            <Link to="/favorites" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black text-sm font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors">
              Go to Favorites
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              {/* Property Cards */}
              <thead>
                <tr>
                  <th className="w-40 p-4 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider"></th>
                  {selectedProperties.map((property) => (
                    <th key={property.id} className="min-w-[280px] p-4">
                      <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden relative group">
                        <button
                          onClick={() => removeProperty(property.id)}
                          className="absolute top-2 right-2 z-10 w-6 h-6 rounded-full bg-black/50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-3 h-3" />
                        </button>
                        <div className="aspect-[16/10] relative">
                          <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
                          <div className="absolute top-2 left-2 px-2 py-1 rounded bg-indigo-500/90 text-[10px] font-medium text-white flex items-center gap-1">
                            <Sparkles className="w-2.5 h-2.5" />{property.match}% Match
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium text-white mb-1">{property.title}</h3>
                          <p className="text-xs text-neutral-500 flex items-center gap-1">
                            <MapPin className="w-3 h-3" />{property.location}
                          </p>
                          <p className="text-lg font-medium text-white mt-2">{formatCurrency(property.price)}</p>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-white/5">
                {/* Basic Info */}
                <tr className="bg-white/5">
                  <td colSpan={selectedProperties.length + 1} className="p-3 text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                    Basic Information
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-sm text-neutral-400 flex items-center gap-2"><Bed className="w-4 h-4" /> Bedrooms</td>
                  {selectedProperties.map((p) => (
                    <CompareCell key={p.id} value={p.beds} best={p.beds === getBest("beds")} />
                  ))}
                </tr>
                <tr>
                  <td className="p-4 text-sm text-neutral-400 flex items-center gap-2"><Bath className="w-4 h-4" /> Bathrooms</td>
                  {selectedProperties.map((p) => (
                    <CompareCell key={p.id} value={p.baths} best={p.baths === getBest("baths")} />
                  ))}
                </tr>
                <tr>
                  <td className="p-4 text-sm text-neutral-400 flex items-center gap-2"><Car className="w-4 h-4" /> Parking</td>
                  {selectedProperties.map((p) => (
                    <CompareCell key={p.id} value={p.cars} best={p.cars === getBest("cars")} />
                  ))}
                </tr>
                <tr>
                  <td className="p-4 text-sm text-neutral-400 flex items-center gap-2"><Square className="w-4 h-4" /> Floor Area</td>
                  {selectedProperties.map((p) => (
                    <CompareCell key={p.id} value={p.sqft} format="sqft" best={p.sqft === getBest("sqft")} />
                  ))}
                </tr>
                <tr>
                  <td className="p-4 text-sm text-neutral-400 flex items-center gap-2"><Ruler className="w-4 h-4" /> Land Size</td>
                  {selectedProperties.map((p) => (
                    <CompareCell key={p.id} value={p.landSize || "N/A"} format={p.landSize ? "sqft" : "default"} best={p.landSize === getBest("landSize")} />
                  ))}
                </tr>
                <tr>
                  <td className="p-4 text-sm text-neutral-400 flex items-center gap-2"><Building className="w-4 h-4" /> Property Type</td>
                  {selectedProperties.map((p) => (
                    <td key={p.id} className="p-4"><span className="text-white">{p.type}</span></td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 text-sm text-neutral-400 flex items-center gap-2"><Calendar className="w-4 h-4" /> Year Built</td>
                  {selectedProperties.map((p) => (
                    <CompareCell key={p.id} value={p.yearBuilt} best={p.yearBuilt === getBest("yearBuilt")} />
                  ))}
                </tr>

                {/* Financial */}
                <tr className="bg-white/5">
                  <td colSpan={selectedProperties.length + 1} className="p-3 text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                    Financial
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-sm text-neutral-400 flex items-center gap-2"><DollarSign className="w-4 h-4" /> Price per sqft</td>
                  {selectedProperties.map((p) => (
                    <CompareCell key={p.id} value={p.pricePerSqft} format="currency" best={p.pricePerSqft === getBest("pricePerSqft", false)} worst={p.pricePerSqft === getBest("pricePerSqft", true)} />
                  ))}
                </tr>
                <tr>
                  <td className="p-4 text-sm text-neutral-400 flex items-center gap-2"><TrendingUp className="w-4 h-4" /> 1Y Growth</td>
                  {selectedProperties.map((p) => (
                    <CompareCell key={p.id} value={p.growth1Y} format="percent" best={p.growth1Y === getBest("growth1Y")} />
                  ))}
                </tr>
                <tr>
                  <td className="p-4 text-sm text-neutral-400 flex items-center gap-2"><Calendar className="w-4 h-4" /> Days on Market</td>
                  {selectedProperties.map((p) => (
                    <CompareCell key={p.id} value={p.daysOnMarket} format="days" best={p.daysOnMarket === getBest("daysOnMarket", false)} />
                  ))}
                </tr>

                {/* Location Scores */}
                <tr className="bg-white/5">
                  <td colSpan={selectedProperties.length + 1} className="p-3 text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                    Location Scores
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-sm text-neutral-400">Walk Score</td>
                  {selectedProperties.map((p) => (
                    <CompareCell key={p.id} value={p.walkScore} format="score" best={p.walkScore === getBest("walkScore")} />
                  ))}
                </tr>
                <tr>
                  <td className="p-4 text-sm text-neutral-400">Transit Score</td>
                  {selectedProperties.map((p) => (
                    <CompareCell key={p.id} value={p.transitScore} format="score" best={p.transitScore === getBest("transitScore")} />
                  ))}
                </tr>

                {/* Features */}
                <tr className="bg-white/5">
                  <td colSpan={selectedProperties.length + 1} className="p-3 text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                    Features
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-sm text-neutral-400 align-top">Included Features</td>
                  {selectedProperties.map((p) => (
                    <td key={p.id} className="p-4">
                      <div className="flex flex-wrap gap-1">
                        {p.features.map((feature) => (
                          <span key={feature} className="px-2 py-1 rounded bg-white/10 text-[10px] text-white">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Legend */}
        <div className="mt-8 p-4 rounded-xl border border-white/10 bg-white/5 flex items-center gap-6 text-xs">
          <span className="text-neutral-500">Legend:</span>
          <span className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-emerald-500/30" />
            <span className="text-neutral-400">Best value</span>
          </span>
          <span className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-red-500/30" />
            <span className="text-neutral-400">Worst value</span>
          </span>
        </div>
      </main>

      {/* Add Property Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#0A0A0A] p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-medium text-white">Add Property to Compare</h2>
              <button onClick={() => setShowAddModal(false)} className="p-2 rounded-lg hover:bg-white/5 text-neutral-400">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {sampleProperties
                .filter((p) => !selectedProperties.find((sp) => sp.id === p.id))
                .map((property) => (
                  <button
                    key={property.id}
                    onClick={() => addProperty(property)}
                    className="w-full flex items-center gap-4 p-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-left"
                  >
                    <img src={property.image} alt={property.title} className="w-16 h-12 rounded-lg object-cover" />
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-white">{property.title}</h3>
                      <p className="text-xs text-neutral-500">{property.location}</p>
                    </div>
                    <span className="text-sm font-medium text-white">{formatCurrency(property.price)}</span>
                  </button>
                ))}
              {sampleProperties.filter((p) => !selectedProperties.find((sp) => sp.id === p.id)).length === 0 && (
                <p className="text-center text-neutral-500 py-8">No more properties available to add</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
