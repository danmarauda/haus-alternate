import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Navigation,
  GraduationCap,
  Utensils,
  Train,
  ShoppingBag,
  Coffee,
  TreePine,
  ChevronDown,
  ChevronUp,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface NearbyPlace {
  name: string;
  distance: string;
  rating?: number;
  category: string;
}

interface PropertyMapProps {
  address: string;
  coordinates?: { lat: number; lng: number };
  nearbyPlaces?: NearbyPlace[];
}

const MAP_LAYERS = [
  { id: 'schools', label: 'Schools', icon: GraduationCap, color: 'text-success' },
  { id: 'transport', label: 'Transport', icon: Train, color: 'text-info' },
  { id: 'dining', label: 'Dining', icon: Utensils, color: 'text-warning' },
  { id: 'shopping', label: 'Shopping', icon: ShoppingBag, color: 'text-error' },
  { id: 'parks', label: 'Parks', icon: TreePine, color: 'text-success' },
];

const COMMUTE_TIMES = [15, 30, 60];

export const PropertyMap: React.FC<PropertyMapProps> = ({
  address,
  coordinates,
  nearbyPlaces = [],
}) => {
  const [selectedLayer, setSelectedLayer] = useState<string>('schools');
  const [commuteTime, setCommuteTime] = useState(30);
  const [showExpanded, setShowExpanded] = useState(false);
  const [transportMode, setTransportMode] = useState<'walk' | 'transit' | 'drive'>('drive');

  const categories = Array.from(new Set(nearbyPlaces.map(p => p.category)));

  const getPlacesByCategory = (category: string) => {
    return nearbyPlaces.filter(p => p.category === category).slice(0, 5);
  };

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, any> = {
      'Education': GraduationCap,
      'Dining': Utensils,
      'Shopping': ShoppingBag,
      'Transport': Train,
      'Cafes': Coffee,
      'Parks': TreePine,
    };
    return icons[category] || MapPin;
  };

  return (
    <div className="space-y-6">
      {/* Map Card */}
      <div className="relative overflow-hidden rounded-3xl border border- haus-stone bg-card">
        {/* Map Placeholder */}
        <div className="aspect-[16/9] bg-gradient-to-br from-blue-50 to-green-50 relative">
          {/* Simulated Map Background */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 800 450">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C9A962" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              {/* Roads */}
              <path d="M 0 200 Q 200 180 400 200 T 800 180" stroke="#fff" strokeWidth="8" fill="none"/>
              <path d="M 400 0 L 400 450" stroke="#fff" strokeWidth="6" fill="none"/>
              <path d="M 0 350 Q 300 330 600 350 T 800 340" stroke="#fff" strokeWidth="4" fill="none"/>
            </svg>
          </div>

          {/* Property Pin */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative">
              <div className="w-12 h-12 bg-haus-gold rounded-full flex items-center justify-center shadow-premium animate-bounce">
                <MapPin className="w-6 h-6 text-haus-black" />
              </div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-haus-gold rotate-45" />
            </div>
          </div>

          {/* POI Markers */}
          {MAP_LAYERS.filter(l => l.id === selectedLayer).map((layer) => (
            <div key={layer.id} className="absolute inset-0">
              {[...Array(5)].map((_, i) => {
                const angle = (i * 72) * (Math.PI / 180);
                const radius = 100 + (i % 3) * 60;
                const x = 50 + Math.cos(angle) * radius / 8;
                const y = 50 + Math.sin(angle) * radius / 4.5;
                return (
                  <button
                    key={i}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <div className={`w-8 h-8 ${layer.color} bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform`}>
                      <layer.icon className="w-4 h-4" />
                    </div>
                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      <div className="glass-dark px-3 py-1 rounded-lg">
                        <p className="text-white text-xs font-space">
                          {layer.label} {i + 1}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          ))}

          {/* Control Panel */}
          <div className="absolute top-4 right-4 glass rounded-2xl p-4 space-y-4 w-64">
            {/* Commute Time Selector */}
            <div>
              <label className="text-xs font-space text-muted-foreground mb-2 block">Commute Time</label>
              <div className="flex gap-1">
                {COMMUTE_TIMES.map((time) => (
                  <button
                    key={time}
                    onClick={() => setCommuteTime(time)}
                    className={`flex-1 py-2 px-3 rounded-lg text-sm font-space transition-all ${
                      commuteTime === time
                        ? 'bg-haus-gold text-haus-black'
                        : 'bg-secondary/50 text-muted-foreground hover:bg-secondary'
                    }`}
                  >
                    {time}m
                  </button>
                ))}
              </div>
            </div>

            {/* Transport Mode */}
            <div>
              <label className="text-xs font-space text-muted-foreground mb-2 block">Transport Mode</label>
              <div className="flex gap-1">
                {(['walk', 'transit', 'drive'] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setTransportMode(mode)}
                    className={`flex-1 py-2 px-2 rounded-lg text-xs font-space capitalize transition-all ${
                      transportMode === mode
                        ? 'bg-foreground text-background'
                        : 'bg-secondary/50 text-muted-foreground hover:bg-secondary'
                    }`}
                  >
                    {mode === 'walk' && '🚶'}
                    {mode === 'transit' && '🚇'}
                    {mode === 'drive' && '🚗'}
                  </button>
                ))}
              </div>
            </div>

            {/* Layer Toggles */}
            <div>
              <label className="text-xs font-space text-muted-foreground mb-2 block">Map Layers</label>
              <div className="space-y-1">
                {MAP_LAYERS.map((layer) => (
                  <button
                    key={layer.id}
                    onClick={() => setSelectedLayer(layer.id)}
                    className={`w-full flex items-center gap-2 p-2 rounded-lg transition-all ${
                      selectedLayer === layer.id
                        ? 'bg-haus-gold/10 text-haus-gold'
                        : 'hover:bg-secondary/50 text-muted-foreground'
                    }`}
                  >
                    <layer.icon className={`w-4 h-4 ${layer.color}`} />
                    <span className="text-sm font-space">{layer.label}</span>
                    {selectedLayer === layer.id && (
                      <div className="ml-auto w-2 h-2 bg-haus-gold rounded-full" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What's Nearby - Expandable */}
      <div>
        <button
          onClick={() => setShowExpanded(!showExpanded)}
          className="w-full flex items-center justify-between p-4 bg-card border border- haus-stone rounded-2xl hover:border-haus-gold transition-colors"
        >
          <h3 className="font-display text-lg">What's Nearby</h3>
          {showExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>

        {showExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mt-4"
          >
            <Tabs defaultValue={categories[0]} className="w-full">
              <TabsList className="w-full justify-start bg-secondary/50 p-1 rounded-xl overflow-x-auto no-scrollbar">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="data-[state=active]:bg-haus-gold data-[state=active]:text-haus-black"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>

              {categories.map((category) => (
                <TabsContent key={category} value={category} className="mt-4">
                  <div className="grid gap-3">
                    {getPlacesByCategory(category).map((place, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 bg-card border border- haus-stone rounded-xl hover:border-haus-gold transition-colors"
                      >
                        <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                          {(() => {
                            const Icon = getCategoryIcon(category);
                            return <Icon className="w-6 h-6 text-haus-gold" />;
                          })()}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-space font-medium text-foreground truncate">{place.name}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-muted-foreground font-mono">{place.distance}</span>
                            {place.rating && (
                              <div className="flex items-center gap-1">
                                <Star className="w-3 h-3 fill-haus-gold text-haus-gold" />
                                <span className="text-xs font-space">{place.rating}</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="flex-shrink-0">
                          <Navigation className="w-4 h-4 mr-1" />
                          Directions
                        </Button>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        )}
      </div>
    </div>
  );
};
