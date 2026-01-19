import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Sofa,
  Bed,
  Utensils,
  Lamp,
  ShowerHead,
  Trees,
  Palette,
  Sparkles,
  Eye,
  ArrowRight,
  Check,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface VirtualStagingProps {
  propertyId: string;
  rooms?: Array<{
    id: string;
    name: string;
    type: 'living' | 'bedroom' | 'kitchen' | 'bathroom' | 'outdoor' | 'dining';
    image: string;
    dimensions?: string;
  }>;
}

interface FurnitureStyle {
  id: string;
  name: string;
  description: string;
  icon: any;
  price: string;
}

interface ColorScheme {
  id: string;
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  preview: string[];
}

const FURNITURE_STYLES: Record<string, FurnitureStyle[]> = {
  living: [
    { id: 'modern', name: 'Modern Minimalist', description: 'Clean lines and neutral tones', icon: Sofa, price: '$15K' },
    { id: 'contemporary', name: 'Contemporary Luxe', description: 'Bold statement pieces', icon: Lamp, price: '$25K' },
    { id: 'scandinavian', name: 'Scandinavian Warmth', description: 'Natural woods and cozy textures', icon: Sparkles, price: '$18K' },
  ],
  bedroom: [
    { id: 'serene', name: 'Serene Retreat', description: 'Calming colors and soft lighting', icon: Bed, price: '$12K' },
    { id: 'modern', name: 'Modern Master', description: 'Sleek furniture with smart features', icon: Lamp, price: '$20K' },
    { id: 'classic', name: 'Classic Elegance', description: 'Traditional pieces with modern comfort', icon: Sparkles, price: '$22K' },
  ],
  kitchen: [
    { id: 'chef', name: 'Chef\'s Paradise', description: 'Professional appliances and prep space', icon: Utensils, price: '$35K' },
    { id: 'family', name: 'Family Hub', description: 'Breakfast bar and open layout', icon: Home, price: '$28K' },
    { id: 'gourmet', name: 'Gourmet Kitchen', description: 'High-end finishes and butler pantry', icon: Sparkles, price: '$45K' },
  ],
  bathroom: [
    { id: 'spa', name: 'Home Spa', description: 'Freestanding tub and rain shower', icon: ShowerHead, price: '$18K' },
    { id: 'modern', name: 'Modern Luxury', description: 'Floating vanity and smart mirrors', icon: Lamp, price: '$22K' },
  ],
  outdoor: [
    { id: 'entertainer', name: 'The Entertainer', description: 'Outdoor kitchen and dining area', icon: Utensils, price: '$30K' },
    { id: 'oasis', name: 'Private Oasis', description: 'Zen garden and meditation space', icon: Trees, price: '$25K' },
  ],
  dining: [
    { id: 'formal', name: 'Formal Dining', description: 'Elegant table for 12', icon: Utensils, price: '$15K' },
    { id: 'casual', name: 'Casual Dining', description: 'Flexible family dining space', icon: Home, price: '$10K' },
  ],
};

const COLOR_SCHEMES: ColorScheme[] = [
  {
    id: 'coastal',
    name: 'Coastal Calm',
    primary: '#E8F4F8',
    secondary: '#D4E6ED',
    accent: '#4A90A4',
    preview: ['#E8F4F8', '#D4E6ED', '#4A90A4', '#B8D4DE'],
  },
  {
    id: 'warm',
    name: 'Warm Neutral',
    primary: '#F5E6D3',
    secondary: '#EAD0B8',
    accent: '#C9A962',
    preview: ['#F5E6D3', '#EAD0B8', '#C9A962', '#D4C4B0'],
  },
  {
    id: 'modern',
    name: 'Modern Monochrome',
    primary: '#F5F5F5',
    secondary: '#E0E0E0',
    accent: '#2C2C2C',
    preview: ['#F5F5F5', '#E0E0E0', '#2C2C2C', '#A0A0A0'],
  },
  {
    id: 'earth',
    name: 'Earth Tones',
    primary: '#E8DFD5',
    secondary: '#D4C4B0',
    accent: '#8B7355',
    preview: ['#E8DFD5', '#D4C4B0', '#8B7355', '#B8A99A'],
  },
];

export const VirtualStaging: React.FC<VirtualStagingProps> = ({
  propertyId,
  rooms = [
    { id: '1', name: 'Living Room', type: 'living', image: '/placeholder.jpg', dimensions: '6.5m x 4.2m' },
    { id: '2', name: 'Master Bedroom', type: 'bedroom', image: '/placeholder.jpg', dimensions: '5.2m x 4.5m' },
    { id: '3', name: 'Kitchen', type: 'kitchen', image: '/placeholder.jpg', dimensions: '5.8m x 4.0m' },
    { id: '4', name: 'Main Bathroom', type: 'bathroom', image: '/placeholder.jpg', dimensions: '3.2m x 2.8m' },
    { id: '5', name: 'Outdoor Terrace', type: 'outdoor', image: '/placeholder.jpg', dimensions: '8.0m x 4.5m' },
    { id: '6', name: 'Dining Room', type: 'dining', image: '/placeholder.jpg', dimensions: '4.5m x 3.8m' },
  ],
}) => {
  const [selectedRoom, setSelectedRoom] = useState(rooms[0]);
  const [selectedStyle, setSelectedStyle] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<ColorScheme | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [isComparing, setIsComparing] = useState(false);

  const styles = FURNITURE_STYLES[selectedRoom.type] || [];

  const handlePreview = () => {
    setShowPreview(true);
  };

  const handleRequestQuote = () => {
    // In a real app, this would open a quote request form
    console.log('Request quote for:', {
      room: selectedRoom,
      style: selectedStyle,
      color: selectedColor,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-display-md font-display">Virtual Staging</h2>
          <p className="text-muted-foreground mt-1">Visualize your potential home with different styles and colors</p>
        </div>
        {selectedStyle && selectedColor && (
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setShowPreview(!showPreview)}>
              <Eye className="w-4 h-4 mr-2" />
              {showPreview ? 'Hide Preview' : 'Show Preview'}
            </Button>
          </div>
        )}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Room Selection */}
        <Card className="border- haus-stone">
          <CardContent className="p-4">
            <h3 className="font-display text-lg mb-4">Select Room</h3>
            <div className="space-y-2">
              {rooms.map((room) => (
                <button
                  key={room.id}
                  onClick={() => {
                    setSelectedRoom(room);
                    setSelectedStyle('');
                    setSelectedColor(null);
                    setShowPreview(false);
                  }}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all text-left ${
                    selectedRoom.id === room.id
                      ? 'bg-haus-gold/10 border-2 border-haus-gold'
                      : 'bg-secondary/30 hover:bg-secondary/50 border-2 border-transparent'
                  }`}
                >
                  <div className="w-12 h-12 rounded-lg bg-haus-stone flex items-center justify-center">
                    <Home className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <p className="font-space font-medium">{room.name}</p>
                    <p className="text-xs text-muted-foreground">{room.dimensions}</p>
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Furniture Styles */}
        <Card className="border- haus-stone">
          <CardContent className="p-4">
            <h3 className="font-display text-lg mb-4">Furniture Style</h3>
            <div className="space-y-3">
              {styles.map((style) => {
                const Icon = style.icon;
                return (
                  <motion.button
                    key={style.id}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => setSelectedStyle(style.id)}
                    className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                      selectedStyle === style.id
                        ? 'border-haus-gold bg-haus-gold/5'
                        : 'border-haus-stone hover:border-haus-gold/50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        selectedStyle === style.id ? 'bg-haus-gold text-haus-black' : 'bg-secondary'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-space font-medium">{style.name}</p>
                          <p className="text-xs text-haus-gold">{style.price}</p>
                        </div>
                        <p className="text-xs text-muted-foreground">{style.description}</p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Color Schemes */}
        <Card className="border- haus-stone">
          <CardContent className="p-4">
            <h3 className="font-display text-lg mb-4">Color Scheme</h3>
            <div className="space-y-3">
              {COLOR_SCHEMES.map((scheme) => (
                <motion.button
                  key={scheme.id}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setSelectedColor(scheme)}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                    selectedColor?.id === scheme.id
                      ? 'border-haus-gold bg-haus-gold/5'
                      : 'border-haus-stone hover:border-haus-gold/50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex gap-1">
                      {scheme.preview.map((color, i) => (
                        <div
                          key={i}
                          className="w-6 h-6 rounded"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <div className="flex-1">
                      <p className="font-space font-medium">{scheme.name}</p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Preview Section */}
      <AnimatePresence>
        {showPreview && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <Card className="border- haus-stone">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-display text-lg">Staged Preview</h3>
                    <p className="text-sm text-muted-foreground">
                      {selectedRoom.name} • {styles.find(s => s.id === selectedStyle)?.name} • {selectedColor?.name}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => setIsComparing(!isComparing)}>
                      {isComparing ? (
                        <>
                          <X className="w-4 h-4 mr-2" />
                          Exit Compare
                        </>
                      ) : (
                        <>
                          <Eye className="w-4 h-4 mr-2" />
                          Before / After
                        </>
                      )}
                    </Button>
                    <Button size="sm" onClick={handleRequestQuote} className="bg-haus-gold text-haus-black">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Get Quote
                    </Button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {/* Before Image */}
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-haus-stone">
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                      <div className="text-center">
                        <Home className="w-12 h-12 mx-auto mb-2 opacity-50" />
                        <p className="text-sm">Original Room</p>
                      </div>
                    </div>
                  </div>

                  {/* After Image (Staged) */}
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-haus-gold/20 to-haus-gold/5">
                    <div className="absolute inset-0 flex items-center justify-center text-haus-gold">
                      <div className="text-center">
                        <Check className="w-12 h-12 mx-auto mb-2" />
                        <p className="font-medium">Virtually Staged</p>
                        <p className="text-xs text-haus-black/60 mt-1">AI Generated Preview</p>
                      </div>
                    </div>
                    <Badge className="absolute top-4 right-4 bg-success/10 text-success border-success/20">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Staged
                    </Badge>
                  </div>
                </div>

                {/* Style Summary */}
                <div className="mt-6 grid sm:grid-cols-3 gap-4">
                  <Card className="bg-secondary/30 border-0">
                    <CardContent className="p-4 text-center">
                      <Palette className="w-8 h-8 mx-auto mb-2 text-haus-gold" />
                      <p className="text-sm text-muted-foreground">Color Scheme</p>
                      <p className="font-space font-medium">{selectedColor?.name}</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-secondary/30 border-0">
                    <CardContent className="p-4 text-center">
                      <Sofa className="w-8 h-8 mx-auto mb-2 text-haus-gold" />
                      <p className="text-sm text-muted-foreground">Furniture Style</p>
                      <p className="font-space font-medium">{styles.find(s => s.id === selectedStyle)?.name}</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-secondary/30 border-0">
                    <CardContent className="p-4 text-center">
                      <Sparkles className="w-8 h-8 mx-auto mb-2 text-haus-gold" />
                      <p className="text-sm text-muted-foreground">Estimated Cost</p>
                      <p className="font-space font-medium">{styles.find(s => s.id === selectedStyle)?.price}</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Info Cards */}
      {!showPreview && (
        <div className="grid sm:grid-cols-3 gap-4">
          <Card className="bg-secondary/30 border-0">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-haus-gold/10 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-haus-gold" />
                </div>
                <div>
                  <p className="font-medium text-sm">AI-Powered</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Photorealistic staging in seconds
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-secondary/30 border-0">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-haus-gold/10 flex items-center justify-center flex-shrink-0">
                  <Palette className="w-5 h-5 text-haus-gold" />
                </div>
                <div>
                  <p className="font-medium text-sm">Unlimited Styles</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Mix and match furniture and colors
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-secondary/30 border-0">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-haus-gold/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-haus-gold" />
                </div>
                <div>
                  <p className="font-medium text-sm">Instant Quotes</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Get pricing for full implementation
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};
