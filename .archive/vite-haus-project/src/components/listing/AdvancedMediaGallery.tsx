import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Heart,
  Share2,
  Play,
  Map,
  ZoomIn,
  Info,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PropertyHotspot {
  x: number;
  y: number;
  title: string;
  description: string;
}

interface AdvancedMediaGalleryProps {
  images: string[];
  title: string;
  floorPlan?: string;
  virtualTourUrl?: string;
  videoUrl?: string;
  hotspots?: PropertyHotspot[];
}

export const AdvancedMediaGallery: React.FC<AdvancedMediaGalleryProps> = ({
  images,
  title,
  floorPlan,
  virtualTourUrl,
  videoUrl,
  hotspots = [],
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [showHotspots, setShowHotspots] = useState(false);
  const [selectedHotspot, setSelectedHotspot] = useState<PropertyHotspot | null>(null);
  const [isSaved, setIsSaved] = useState(false);
  const [showFloorPlan, setShowFloorPlan] = useState(false);
  const [viewMode, setViewMode] = useState<'gallery' | 'floorplan' | 'virtual'>('gallery');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') navigateImage(-1);
      if (e.key === 'ArrowRight') navigateImage(1);
      if (e.key === 'Escape') {
        setIsFullscreen(false);
        setIsZoomed(false);
      }
      if (e.key === 'f') setIsFullscreen(prev => !prev);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navigateImage = useCallback((direction: number) => {
    setCurrentIndex((prev) => {
      const newIndex = prev + direction;
      if (newIndex < 0) return images.length - 1;
      if (newIndex >= images.length) return 0;
      return newIndex;
    });
    setIsLoading(true);
  }, [images.length]);

  const handleImageLoad = () => setIsLoading(false);

  const handleZoom = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isZoomed) {
      setIsZoomed(false);
    } else {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setZoomPosition({ x, y });
      setIsZoomed(true);
    }
  };

  const handlePan = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    // Show toast notification
  };

  const getCurrentImages = () => {
    if (showFloorPlan && floorPlan) return [floorPlan, ...images];
    return images;
  };

  const currentImages = getCurrentImages();

  return (
    <div className="relative">
      {/* Hero Gallery */}
      <div
        className={`relative overflow-hidden rounded-3xl ${
          isFullscreen ? 'fixed inset-0 z-50 rounded-none' : 'aspect-[16/10] md:aspect-[21/9]'
        }`}
      >
        {/* Main Image */}
        <div
          className={`absolute inset-0 cursor-zoom-in ${isZoomed ? 'cursor-zoom-out' : ''}`}
          onClick={handleZoom}
          onMouseMove={handlePan}
          onTouchMove={handlePan}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={`${viewMode}-${currentIndex}`}
              src={currentImages[currentIndex] || images[0]}
              alt={`${title} - Photo ${currentIndex + 1}`}
              onLoad={handleImageLoad}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: isZoomed ? 2 : 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
              }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Loading Skeleton */}
          {isLoading && (
            <div className="absolute inset-0 bg-secondary animate-shimmer" />
          )}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        {/* Image Counter */}
        <div className="absolute top-6 left-6 glass px-4 py-2 rounded-full">
          <span className="text-white font-space text-sm font-medium">
            {currentIndex + 1} / {currentImages.length}
          </span>
        </div>

        {/* Badges */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-2">
          {viewMode === 'floorplan' && (
            <Badge className="bg-haus-gold text-haus-black">Floor Plan</Badge>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-6 right-6 flex gap-2">
          {floorPlan && (
            <Button
              variant="glass"
              size="icon"
              onClick={() => setShowFloorPlan(!showFloorPlan)}
              className={showFloorPlan ? 'bg-haus-gold text-haus-black' : ''}
            >
              <Map className="w-5 h-5" />
            </Button>
          )}
          {virtualTourUrl && (
            <Button variant="glass" size="icon" onClick={() => setViewMode('virtual')}>
              <Play className="w-5 h-5" />
            </Button>
          )}
          <Button
            variant="glass"
            size="icon"
            onClick={handleSave}
            className={isSaved ? 'bg-error text-white' : ''}
          >
            <Heart className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
          </Button>
          <Button variant="glass" size="icon">
            <Share2 className="w-5 h-5" />
          </Button>
          <Button
            variant="glass"
            size="icon"
            onClick={() => setIsFullscreen(!isFullscreen)}
          >
            {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
          </Button>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => navigateImage(-1)}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={() => navigateImage(1)}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Hotspots */}
        {showHotspots && viewMode === 'gallery' && (
          <div className="absolute inset-0">
            {hotspots.map((hotspot, index) => (
              <button
                key={index}
                onClick={() => setSelectedHotspot(hotspot)}
                className="absolute w-8 h-8 bg-haus-gold rounded-full flex items-center justify-center animate-pulse hover:scale-110 transition-transform"
                style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
              >
                <Info className="w-4 h-4 text-haus-black" />
              </button>
            ))}
          </div>
        )}

        {/* Watch Film Button */}
        {videoUrl && (
          <button className="absolute bottom-6 right-6 glass px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white/30 transition-colors">
            <Play className="w-5 h-5 text-haus-gold" />
            <span className="text-white font-space">Watch Film</span>
          </button>
        )}

        {/* Toggle Hotspots */}
        {hotspots.length > 0 && (
          <button
            onClick={() => setShowHotspots(!showHotspots)}
            className="absolute bottom-6 left-6 glass px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white/30 transition-colors"
          >
            <ZoomIn className="w-4 h-4 text-white" />
            <span className="text-white font-space text-sm">
              {showHotspots ? 'Hide' : 'Show'} Features
            </span>
          </button>
        )}
      </div>

      {/* Filmstrip */}
      <div className="mt-4 overflow-x-auto no-scrollbar">
        <div className="flex gap-3 pb-2">
          {currentImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative flex-shrink-0 rounded-xl overflow-hidden transition-all ${
                index === currentIndex
                  ? 'ring-2 ring-haus-gold ring-offset-2 scale-105'
                  : 'opacity-60 hover:opacity-100'
              }`}
              style={{ width: '120px', height: '80px' }}
            >
              <img
                src={image}
                alt={`${title} - ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Hotspot Modal */}
      <AnimatePresence>
        {selectedHotspot && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedHotspot(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-display mb-2">{selectedHotspot.title}</h3>
              <p className="text-muted-foreground">{selectedHotspot.description}</p>
              <Button
                variant="outline"
                className="mt-4 w-full"
                onClick={() => setSelectedHotspot(null)}
              >
                Close
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
