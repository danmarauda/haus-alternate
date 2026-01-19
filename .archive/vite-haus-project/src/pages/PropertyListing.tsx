import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPropertyById } from "@/data/mockProperties";
import {
  ArrowRight, MapPin, ArrowUpRight, Share2, Heart, Gavel, Phone, Mail,
  BadgeCheck, Star, FileText, Anchor, Wine, Film, Waves, ShieldCheck,
  Server, BedDouble, Bath, CarFront, Scaling, Sparkles, Play, Grid3x3,
  Map, Download, Stamp, Search, User, ChevronRight, ChevronLeft, Mic, Bell,
  Eye, CalendarCheck, Scale, CheckCircle, Users, TrendingUp, School,
  Coffee, Shield, SearchCheck, ConciergeBell, Truck, Hammer, Video, Building,
  Maximize2, X, Camera, Navigation, MoreHorizontal, Clock, ChevronDown,
  Home, Utensils, ShoppingBag, Train, Bus, Car, Plane, BookOpen,
  Dumbbell, Trees, Palette, Music, Briefcase, Landmark, ScanLine,
  PieChart, LineChart, BarChart3, DollarSign, Percent, Calculator,
  Calendar, ChevronUp, ZoomIn, ZoomOut, RotateCw, Info, Volume2,
  VolumeX, SkipBack, SkipForward, Gauge, Award, Target, TrendingDown,
  FileQuestion, FolderOpen, Lock, Unlock, AlertTriangle, Check,
  Flame, IceCream, Wifi, Battery, Leaf, Sun, Wind, Zap,
  Copy, Twitter, Facebook, Linkedin, Link as LinkIcon, QrCode,
  MessageCircle, VideoIcon, RotateCwIcon, Filter, SlidersHorizontal,
  ArrowUpDown, Navigation2, HeartCrack, Cross, Paperclip,
  CalendarClock, FileCode, Layout, Layers, Box, Package,
  Wrench, Paintbrush, Sofa, Armchair, Lamp, Armchair as Furniture,
  History, Timeline, Waypoints, MapPinIcon, ExternalLink,
  Send, PaperPlane, Quote, ChatBubble, Quote as QuoteIcon,
  ThumbsUp, ThumbsDown, Sparkles as SparklesIcon
} from "lucide-react";

const PropertyListing = () => {
  const { id } = useParams<{ id: string }>();
  const property = getPropertyById(id || "");

  // Main State
  const [loaderProgress, setLoaderProgress] = useState(0);
  const [showPreloader, setShowPreloader] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Gallery State
  const [galleryFullscreen, setGalleryFullscreen] = useState(false);
  const [showFloorPlan, setShowFloorPlan] = useState(false);
  const [showVirtualTour, setShowVirtualTour] = useState(false);
  const [galleryView, setGalleryView] = useState<'photos' | 'floorplan' | '3d'>('photos');

  // Map State
  const [mapLayer, setMapLayer] = useState<'schools' | 'transport' | 'dining' | 'parks' | 'sold'>('schools');
  const [commuteTime, setCommuteTime] = useState<15 | 30 | 60>(30);
  const [transportMode, setTransportMode] = useState<'walk' | 'transit' | 'drive'>('drive');

  // Intelligence Hub State
  const [intelligenceTab, setIntelligenceTab] = useState<'market' | 'chat' | 'investment' | 'comparable'>('market');
  const [chatMessages, setChatMessages] = useState<Array<{role: 'user' | 'assistant', content: string}>>([]);
  const [chatInput, setChatInput] = useState('');

  // Calculator State
  const [calculatorTab, setCalculatorTab] = useState<'mortgage' | 'yield' | 'investment' | 'affordability'>('mortgage');
  const [deposit, setDeposit] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);

  // Inspection State
  const [bookingStep, setBookingStep] = useState<1 | 2 | 3>(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Documents State
  const [documentCategory, setDocumentCategory] = useState<'legal' | 'building' | 'council' | 'floorplan'>('legal');

  // Comparison State
  const [comparisonProperties, setComparisonProperties] = useState<string[]>([]);

  // Saved State
  const [isSaved, setIsSaved] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);

  // Audio Tour State
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const [audioChapter, setAudioChapter] = useState(0);
  const [audioSpeed, setAudioSpeed] = useState(1);

  // 3D Tour State
  const [tour3DMode, setTour3DMode] = useState<'walk' | 'dollhouse' | 'floorplan'>('walk');
  const [tour3DFloor, setTour3DFloor] = useState<'ground' | 'level1' | 'level2' | 'roof'>('ground');

  // Virtual Staging State
  const [stagingEnabled, setStagingEnabled] = useState(false);
  const [stagingStyle, setStagingStyle] = useState<'modern' | 'classic' | 'minimalist' | 'scandinavian' | 'industrial' | 'coastal'>('modern');

  // DNA Accordion State
  const [dnaSection, setDnaSection] = useState<'building' | 'land' | 'utilities' | 'legal' | 'renovation'>('building');

  // Preloader animation
  useEffect(() => {
    const timer = setInterval(() => {
      setLoaderProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setShowPreloader(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(timer);
  }, []);

  if (!property) {
    return (
      <div className="min-h-screen bg-[#050505] text-white">
        <div className="max-w-[1400px] mx-auto px-6 py-20 text-center">
          <h1 className="font-['Playfair_Display'] text-4xl md:text-6xl font-medium tracking-tight mb-8">
            Property not found
          </h1>
          <Link
            to="/search"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors"
          >
            Back to Search
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  // Audio tour chapters
  const audioChapters = [
    { title: "Introduction", start: 0, end: 90 },
    { title: "Living Areas", start: 90, end: 240 },
    { title: "Kitchen & Dining", start: 240, end: 390 },
    { title: "Master Suite", start: 390, end: 540 },
    { title: "Outdoor Entertaining", start: 540, end: 660 },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-['Inter']">
      {/* PRELOADER */}
      {showPreloader && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
          <div className="text-center">
            <div className="font-['Space_Mono'] text-emerald-400 text-sm mb-6">
              {String(loaderProgress).padStart(3, '0')}
            </div>
            <h1 className="font-['Playfair_Display'] text-4xl md:text-6xl text-white font-medium tracking-tight mb-8">
              {property.address?.toUpperCase() || property.title.toUpperCase()}
            </h1>
            <div className="w-0 h-[1px] bg-white/30 mx-auto transition-all duration-1000" style={{ width: `${loaderProgress * 2}px` }}></div>
          </div>
        </div>
      )}

      {/* Background Grid Texture */}
      <div
        className="fixed inset-0 z-0 pointer-events-none bg-grid w-full h-full"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/70 backdrop-blur-md border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link to="/" className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold tracking-tighter hover:scale-95 transition-transform">
              H.
            </Link>
            <div className="hidden md:flex items-center gap-6 font-['DM_Sans']">
              <Link to="/search" className="text-xs font-semibold text-white hover:text-white/70 transition-colors">
                Buy
              </Link>
              <Link to="#" className="text-xs font-semibold text-neutral-500 hover:text-white transition-colors">
                Rent
              </Link>
              <Link to="#" className="text-xs font-semibold text-neutral-500 hover:text-white transition-colors">
                Sold
              </Link>
              <Link to="#" className="text-xs font-semibold text-neutral-500 hover:text-white transition-colors">
                Commercial
              </Link>
              <Link to="#" className="text-xs font-semibold text-neutral-500 hover:text-white transition-colors">
                New Homes
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-full px-3 py-1.5 w-72 gap-2 focus-within:bg-white/10 focus-within:border-white/20 transition-all cursor-pointer group">
              <Mic className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors" />
              <input
                type="text"
                placeholder="Ask HAUS about school districts..."
                className="bg-transparent border-none text-xs text-white placeholder-neutral-500 focus:outline-none w-full font-['Space_Mono'] h-5"
              />
              <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-[8px] text-neutral-400">/</span>
              </div>
            </div>

            <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors relative">
              <Bell className="w-3.5 h-3.5" />
              <div className="absolute top-1.5 right-2 w-1.5 h-1.5 bg-red-500 rounded-full border border-black"></div>
            </button>

            <button
              onClick={() => setIsSaved(!isSaved)}
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors relative"
            >
              <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
            </button>

            <button className="w-8 h-8 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 border border-white/10 flex items-center justify-center text-white overflow-hidden">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition" alt="User" />
            </button>
          </div>
        </div>
      </nav>

      {/* ADVANCED MEDIA GALLERY */}
      <section className="pt-16">
        <div className="relative w-full h-[85vh] min-h-[600px] group select-none bg-neutral-900">
          {/* Main Image */}
          <div className="relative w-full h-full">
            {galleryView === 'photos' && (
              <>
                <img
                  src={property.images[currentImageIndex] || property.images[0]}
                  className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
                  style={{ transitionDuration: '2s' }}
                  alt="Property"
                />

                {/* Image Count Badge */}
                <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full">
                  <span className="font-['Space_Mono'] text-white text-xs">
                    {currentImageIndex + 1} / {property.images.length}
                  </span>
                </div>

                {/* Navigation Arrows */}
                {property.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => prev === 0 ? property.images.length - 1 : prev - 1)}
                      className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/20 backdrop-blur border border-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black transition duration-300 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 z-20"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev + 1) % property.images.length)}
                      className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/20 backdrop-blur border border-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black transition duration-300 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 z-20"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                {/* Badges */}
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                  <div className="bg-[#C9A962] px-3 py-1.5 rounded-full">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-black">For Sale</span>
                  </div>
                  <div className="bg-emerald-500/90 backdrop-blur px-3 py-1.5 rounded-full">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white">Live Auction</span>
                  </div>
                  <div className="bg-blue-500/90 backdrop-blur px-3 py-1.5 rounded-full">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white">Waterfront</span>
                  </div>
                </div>

                {/* Watching Indicator */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full">
                  <Eye className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-xs text-white">24 watching now</span>
                </div>

                {/* Right Action Buttons */}
                <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3">
                  <button
                    onClick={() => setGalleryFullscreen(true)}
                    className="w-12 h-12 rounded-full bg-black/60 backdrop-blur border border-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
                    title="Full screen"
                  >
                    <Maximize2 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setGalleryView('floorplan')}
                    className="w-12 h-12 rounded-full bg-black/60 backdrop-blur border border-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
                    title="View Floor Plan"
                  >
                    <Layout className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setGalleryView('3d')}
                    className="w-12 h-12 rounded-full bg-black/60 backdrop-blur border border-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
                    title="3D Tour"
                  >
                    <Box className="w-5 h-5" />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-black/60 backdrop-blur border border-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0" title="Watch Video">
                    <Play className="w-5 h-5" />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-[#C9A962] border border-[#C9A962] text-black flex items-center justify-center hover:bg-[#C9A962]/80 transition-all" title="Watch Film">
                    <Film className="w-5 h-5" />
                  </button>
                </div>

                {/* Thumbnails Strip */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="flex gap-4 overflow-x-auto max-w-6xl mx-auto pb-2 scrollbar-premium">
                    {property.images.slice(0, 8).map((img, i) => (
                      <div
                        key={i}
                        onClick={() => setCurrentImageIndex(i)}
                        className={`relative w-32 h-20 rounded-lg overflow-hidden border-2 cursor-pointer shadow-lg shrink-0 transition-all hover:scale-105 ${i === currentImageIndex ? 'border-[#C9A962]' : 'border-white/20 opacity-70 hover:opacity-100'}`}
                      >
                        <img src={img} className="w-full h-full object-cover" alt={`Thumbnail ${i + 1}`} />
                        {i === currentImageIndex && (
                          <div className="absolute inset-0 bg-[#C9A962]/20 pointer-events-none"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {galleryView === 'floorplan' && (
              <div className="absolute inset-0 flex items-center justify-center bg-neutral-900">
                <div className="text-center p-8">
                  <Layout className="w-16 h-16 text-neutral-600 mx-auto mb-4" />
                  <h3 className="font-['Playfair_Display'] text-2xl text-white mb-2">Floor Plan</h3>
                  <p className="text-neutral-400 mb-6">Interactive floor plan view</p>
                  <button onClick={() => setGalleryView('photos')} className="px-6 py-3 bg-[#C9A962] text-black rounded-lg font-semibold">
                    Back to Photos
                  </button>
                </div>
              </div>
            )}

            {galleryView === '3d' && (
              <div className="absolute inset-0 flex items-center justify-center bg-neutral-900">
                <div className="text-center p-8">
                  <Box className="w-16 h-16 text-neutral-600 mx-auto mb-4" />
                  <h3 className="font-['Playfair_Display'] text-2xl text-white mb-2">3D Virtual Tour</h3>
                  <p className="text-neutral-400 mb-6">Immersive 3D property walkthrough</p>
                  <button onClick={() => setGalleryView('photos')} className="px-6 py-3 bg-[#C9A962] text-black rounded-lg font-semibold">
                    Back to Photos
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Property Header */}
        <div className="max-w-[1400px] mx-auto px-6 -mt-8 relative z-10">
          <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-8 shadow-2xl">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-['Space_Mono'] text-neutral-500 uppercase tracking-widest border border-white/10 px-2 py-1 rounded">
                    Property ID: {id?.toUpperCase()}
                  </span>
                  <span className="text-[10px] font-['Space_Mono'] text-emerald-400 uppercase tracking-widest border border-emerald-500/20 px-2 py-1 rounded bg-emerald-500/10">
                    Verified
                  </span>
                </div>

                <h1 className="font-['Playfair_Display'] text-3xl md:text-5xl text-white font-medium mb-4">
                  {property.address || property.title}
                </h1>

                <div className="flex items-center gap-4 text-neutral-400 mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{property.suburb}, {property.state} {property.postcode}</span>
                  </div>
                  <span className="text-neutral-600">•</span>
                  <span className="text-sm">Waterfront</span>
                  <span className="text-neutral-600">•</span>
                  <span className="text-sm">Point Piper</span>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-4 text-xs text-neutral-400 font-['Space_Mono']">
                    <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg">
                      <BedDouble className="w-4 h-4" />
                      <span>{property.bedrooms} Beds</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg">
                      <Bath className="w-4 h-4" />
                      <span>{property.bathrooms} Baths</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg">
                      <CarFront className="w-4 h-4" />
                      <span>{property.parking || 2} Cars</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg">
                      <Scaling className="w-4 h-4" />
                      <span>{property.squareFootage}m²</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-[10px] font-['Space_Mono'] text-neutral-500 uppercase mb-2">Guide Price</div>
                <div className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#C9A962] mb-2">
                  {formatPrice(property.price)}
                </div>
                <div className="flex items-center justify-end gap-2 text-xs text-neutral-400">
                  <CalendarCheck className="w-3.5 h-3.5" />
                  <span>Auction: 14 Oct 2025</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between mt-6 pt-6 border-t border-white/10 gap-4">
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                  Contact Agent
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/10 text-white rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-white/20 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                  Email
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/10 text-white rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-white/20 transition-colors">
                  <MessageCircle className="w-3.5 h-3.5" />
                  Live Chat
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsSaved(!isSaved)}
                  className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-all ${isSaved ? 'bg-red-500 border-red-500 text-white' : 'border-white/10 text-white hover:border-white/30'}`}
                >
                  <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                </button>
                <button className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white hover:border-white/30 transition-all">
                  <Share2 className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white hover:border-white/30 transition-all">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-[1400px] mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-8 space-y-16">
            {/* PROPERTY ANALYTICS DASHBOARD */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xs font-['Space_Mono'] text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                  Property Analytics
                </h3>
                <button className="text-xs text-[#C9A962] hover:text-[#C9A962]/80 transition flex items-center gap-1">
                  View Full Report <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Price History Chart */}
                <div className="bg-neutral-900 border border-white/10 rounded-xl p-6">
                  <h4 className="text-white font-medium text-sm mb-6">Price History</h4>
                  <div className="h-48 flex items-end justify-between gap-2">
                    {[
                      { year: '2020', price: 28, this: false },
                      { year: '2021', price: 30, this: false },
                      { year: '2022', price: 29, this: false },
                      { year: '2023', price: 32, this: false },
                      { year: '2024', price: 34, this: true },
                    ].map((item, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                        <div className="w-full relative">
                          <div
                            className={`w-full ${item.this ? 'bg-[#C9A962]' : 'bg-neutral-700'} rounded-t transition-all group-hover:bg-neutral-600`}
                            style={{ height: `${item.price * 3}px` }}
                          ></div>
                          {item.this && (
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#C9A962] text-black text-[10px] font-bold px-2 py-1 rounded whitespace-nowrap">
                              ${item.price}M
                            </div>
                          )}
                        </div>
                        <span className="text-[10px] text-neutral-500 font-['Space_Mono']">{item.year}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Suburb Performance */}
                <div className="bg-neutral-900 border border-white/10 rounded-xl p-6">
                  <h4 className="text-white font-medium text-sm mb-6">Suburb Performance</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-['Playfair_Display'] text-emerald-400 mb-1">+12.5%</div>
                      <div className="text-[10px] text-neutral-500 uppercase">12-Month Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-['Playfair_Display'] text-white mb-1">78%</div>
                      <div className="text-[10px] text-neutral-500 uppercase">Auction Clearance</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-['Playfair_Display'] text-white mb-1">45</div>
                      <div className="text-[10px] text-neutral-500 uppercase">Days on Market</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-['Playfair_Display'] text-white mb-1">$40,234</div>
                      <div className="text-[10px] text-neutral-500 uppercase">Price per m²</div>
                    </div>
                  </div>
                </div>

                {/* Price Prediction */}
                <div className="bg-neutral-900 border border-white/10 rounded-xl p-6 md:col-span-2">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-white font-medium text-sm">AI Price Prediction</h4>
                    <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded font-['Space_Mono'] uppercase">
                      High Confidence (87%)
                    </span>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="flex-1">
                      <div className="text-[10px] text-neutral-500 uppercase mb-2">Estimated Range</div>
                      <div className="text-2xl font-['Playfair_Display'] text-[#C9A962]">
                        $35.2M - $38.5M
                      </div>
                    </div>
                    <div className="flex-1 h-16 bg-neutral-800 rounded-full overflow-hidden relative">
                      <div className="absolute left-[15%] right-[15%] top-0 bottom-0 bg-gradient-to-r from-[#C9A962]/30 to-[#C9A962]"></div>
                      <div className="absolute left-[10%] top-1/2 -translate-y-1/2 text-[10px] text-neutral-500 font-['Space_Mono']">$34M</div>
                      <div className="absolute right-[10%] top-1/2 -translate-y-1/2 text-[10px] text-neutral-500 font-['Space_Mono']">$39M</div>
                    </div>
                  </div>
                  <div className="mt-4 text-[10px] text-neutral-500 flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-emerald-500" />
                    Last updated: Today • Based on 42 comparable sales
                  </div>
                </div>
              </div>
            </section>

            {/* INTERACTIVE PROPERTY MAP */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xs font-['Space_Mono'] text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                  Location & Neighborhood
                </h3>
              </div>

              <div className="relative w-full h-[600px] rounded-2xl overflow-hidden border border-white/10 group bg-[#0A0A0A]">
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1600" className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition duration-700" alt="Map" />

                {/* Map Controls */}
                <div className="absolute top-6 right-6 flex flex-col gap-3">
                  <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-2xl">
                    <div className="text-[10px] text-neutral-400 uppercase mb-3 font-['Space_Mono']">Commute Time</div>
                    <div className="flex gap-2 mb-4">
                      {[15, 30, 60].map((time) => (
                        <button
                          key={time}
                          onClick={() => setCommuteTime(time as 15 | 30 | 60)}
                          className={`px-3 py-1.5 rounded-lg text-[10px] font-['Space_Mono'] transition ${commuteTime === time ? 'bg-[#C9A962] text-black' : 'bg-white/10 text-white hover:bg-white/20'}`}
                        >
                          {time}m
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-2 mb-4">
                      {[
                        { value: 'drive', icon: Car, label: 'Drive' },
                        { value: 'transit', icon: Train, label: 'Transit' },
                        { value: 'walk', icon: Users, label: 'Walk' },
                      ].map((mode) => (
                        <button
                          key={mode.value}
                          onClick={() => setTransportMode(mode.value as any)}
                          className={`w-10 h-10 rounded-lg flex items-center justify-center transition ${transportMode === mode.value ? 'bg-[#C9A962] text-black' : 'bg-white/10 text-white hover:bg-white/20'}`}
                          title={mode.label}
                        >
                          <mode.icon className="w-4 h-4" />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-2xl">
                    <div className="text-[10px] text-neutral-400 uppercase mb-3 font-['Space_Mono']">Map Layers</div>
                    <div className="flex flex-col gap-2">
                      {[
                        { value: 'schools', icon: School, label: 'Schools' },
                        { value: 'transport', icon: Train, label: 'Transport' },
                        { value: 'dining', icon: Utensils, label: 'Dining' },
                        { value: 'parks', icon: Trees, label: 'Parks' },
                        { value: 'sold', icon: Home, label: 'Sold' },
                      ].map((layer) => (
                        <button
                          key={layer.value}
                          onClick={() => setMapLayer(layer.value as any)}
                          className={`flex items-center gap-3 px-3 py-2 rounded-lg text-xs transition ${mapLayer === layer.value ? 'bg-[#C9A962] text-black' : 'bg-white/10 text-white hover:bg-white/20'}`}
                        >
                          <layer.icon className="w-4 h-4" />
                          {layer.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Property Pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-[#C9A962] flex items-center justify-center animate-pulse-glow">
                      <MapPin className="w-6 h-6 text-black" />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/90 px-3 py-1.5 rounded-lg whitespace-nowrap">
                      <span className="text-[10px] text-white font-['Space_Mono']">12 Wolseley Rd</span>
                    </div>
                  </div>
                </div>

                {/* Commute Info Card */}
                <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl p-5 shadow-2xl max-w-xs">
                  <div className="text-[10px] text-neutral-400 uppercase mb-3 font-['Space_Mono']">Quick Commutes</div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Building className="w-3.5 h-3.5 text-neutral-400" />
                        <span className="text-xs text-white">Sydney CBD</span>
                      </div>
                      <span className="text-xs font-['Space_Mono'] text-[#C9A962]">18 min</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Plane className="w-3.5 h-3.5 text-neutral-400" />
                        <span className="text-xs text-white">Airport</span>
                      </div>
                      <span className="text-xs font-['Space_Mono'] text-[#C9A962]">25 min</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* NEIGHBORHOOD INSIGHTS */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xs font-['Space_Mono'] text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                  Neighborhood Insights
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Demographics */}
                <div className="bg-neutral-900 border border-white/5 rounded-xl p-6">
                  <h4 className="text-white font-medium text-sm mb-6 flex items-center gap-2">
                    <Users className="w-4 h-4 text-neutral-400" />
                    Demographics
                  </h4>
                  <div className="space-y-4">
                    {[
                      { label: 'Families', value: 72 },
                      { label: 'Professionals', value: 85 },
                      { label: 'Owner Occupier', value: 68 },
                    ].map((item, i) => (
                      <div key={i} className="space-y-1.5">
                        <div className="flex justify-between text-[10px] text-neutral-400 uppercase">
                          <span>{item.label}</span>
                          <span>{item.value}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                          <div className="h-full bg-white transition-all duration-1000" style={{ width: `${item.value}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Safety & Lifestyle */}
                <div className="bg-neutral-900 border border-white/5 rounded-xl p-6">
                  <h4 className="text-white font-medium text-sm mb-6 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-neutral-400" />
                    Safety & Lifestyle
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-neutral-800/50 rounded-lg">
                      <div className="text-2xl font-['Playfair_Display'] text-emerald-400 mb-1">9.8</div>
                      <div className="text-[10px] text-neutral-500 uppercase">Safety Score</div>
                    </div>
                    <div className="text-center p-3 bg-neutral-800/50 rounded-lg">
                      <div className="text-2xl font-['Playfair_Display'] text-blue-400 mb-1">92</div>
                      <div className="text-[10px] text-neutral-500 uppercase">Walk Score</div>
                    </div>
                    <div className="text-center p-3 bg-neutral-800/50 rounded-lg">
                      <div className="text-2xl font-['Playfair_Display'] text-purple-400 mb-1">88</div>
                      <div className="text-[10px] text-neutral-500 uppercase">Transit</div>
                    </div>
                    <div className="text-center p-3 bg-neutral-800/50 rounded-lg">
                      <div className="text-2xl font-['Playfair_Display'] text-emerald-400 mb-1">A+</div>
                      <div className="text-[10px] text-neutral-500 uppercase">Education</div>
                    </div>
                  </div>
                </div>

                {/* Lifestyle Categories */}
                <div className="bg-neutral-900 border border-white/5 rounded-xl p-6 md:col-span-2">
                  <h4 className="text-white font-medium text-sm mb-6 flex items-center gap-2">
                    <Coffee className="w-4 h-4 text-neutral-400" />
                    Lifestyle Nearby
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {[
                      { icon: Utensils, label: 'Restaurants', count: 23 },
                      { icon: Coffee, label: 'Cafes', count: 12 },
                      { icon: Wine, label: 'Bars', count: 8 },
                      { icon: Palette, label: 'Galleries', count: 4 },
                      { icon: Trees, label: 'Parks', count: 6 },
                    ].map((item, i) => (
                      <div key={i} className="text-center p-4 bg-neutral-800/30 rounded-lg hover:bg-neutral-800/50 transition cursor-pointer">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white mx-auto mb-3">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div className="text-lg font-['Playfair_Display'] text-white mb-1">{item.count}</div>
                        <div className="text-[10px] text-neutral-500 uppercase">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* PROPERTY DNA (EXTENDED) */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xs font-['Space_Mono'] text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                  Property DNA
                </h3>
              </div>

              <div className="bg-neutral-900 border border-white/10 rounded-xl overflow-hidden">
                {/* DNA Section Tabs */}
                <div className="flex border-b border-white/10">
                  {[
                    { value: 'building', label: 'Building', icon: Building },
                    { value: 'land', label: 'Land', icon: Map },
                    { value: 'utilities', label: 'Utilities', icon: Zap },
                    { value: 'legal', label: 'Legal', icon: Scale },
                    { value: 'renovation', label: 'Renovation', icon: Hammer },
                  ].map((tab) => (
                    <button
                      key={tab.value}
                      onClick={() => setDnaSection(tab.value as any)}
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-4 text-xs font-bold uppercase transition ${dnaSection === tab.value ? 'text-[#C9A962] bg-[#C9A962]/10' : 'text-neutral-500 hover:text-white hover:bg-white/5'}`}
                    >
                      <tab.icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="p-6">
                  {dnaSection === 'building' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-xs text-white font-bold uppercase tracking-wider mb-4">Building Quality</h4>
                        <div className="flex items-center gap-2 mb-6">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-5 h-5 fill-[#C9A962] text-[#C9A962]" />
                          ))}
                          <span className="text-xs text-neutral-500 ml-2">5-Star Premium</span>
                        </div>

                        <div className="space-y-3">
                          <div className="flex justify-between text-xs">
                            <span className="text-neutral-500">Year Built</span>
                            <span className="text-white">2018 (Refurb '23)</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-neutral-500">Construction</span>
                            <span className="text-white">Double Brick</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-neutral-500">Architect Style</span>
                            <span className="text-white">Contemporary Waterfront</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-neutral-500">Energy Rating</span>
                            <span className="text-white">6.5 Stars</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-neutral-500">Heritage Status</span>
                            <span className="text-white">None</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xs text-white font-bold uppercase tracking-wider mb-4">Sustainability Features</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            { icon: Sun, label: 'Solar Panels (5kW)' },
                            { icon: Battery, label: 'Battery Storage' },
                            { icon: Waves, label: 'Rainwater Tank' },
                            { icon: Shield, label: 'Double Glazing' },
                            { icon: Zap, label: 'LED Lighting' },
                            { icon: Leaf, label: 'EV Charging' },
                          ].map((feature, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs">
                              <div className="w-8 h-8 rounded bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                                <feature.icon className="w-4 h-4" />
                              </div>
                              <span className="text-neutral-300">{feature.label}</span>
                            </div>
                          ))}
                        </div>

                        <h4 className="text-xs text-white font-bold uppercase tracking-wider mb-4 mt-6">Smart Home Tech</h4>
                        <div className="flex flex-wrap gap-2">
                          {['Security', 'Climate', 'Lighting', 'Voice', 'Automation'].map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-neutral-400">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {dnaSection === 'land' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex justify-between text-xs">
                          <span className="text-neutral-500">Lot Size</span>
                          <span className="text-white">892m²</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-neutral-500">Frontage</span>
                          <span className="text-white">22m</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-neutral-500">Aspect</span>
                          <span className="text-white">North-facing rear</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-neutral-500">Topography</span>
                          <span className="text-white">Flat to gently sloping</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-neutral-500">Soil Type</span>
                          <span className="text-white">Sandstone</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between text-xs">
                          <span className="text-neutral-500">Flood Zone</span>
                          <span className="text-emerald-400">Not in flood zone</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-neutral-500">Bushfire Risk</span>
                          <span className="text-emerald-400">Low (BAL 12.5)</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-neutral-500">Easements</span>
                          <span className="text-white">None</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-neutral-500">Restrictions</span>
                          <span className="text-white">None</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-neutral-500">Tree Preservation</span>
                          <span className="text-white">2 protected trees</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {dnaSection === 'utilities' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-xs text-white font-bold uppercase tracking-wider mb-4">Connected Services</h4>
                        <div className="space-y-3">
                          {[
                            { service: 'Electricity', connected: true },
                            { service: 'Gas', connected: true },
                            { service: 'Water', connected: true },
                            { service: 'Sewer', connected: true },
                            { service: 'Internet (NBN)', connected: true },
                          ].map((item) => (
                            <div key={item.service} className="flex items-center justify-between text-xs">
                              <span className="text-neutral-500">{item.service}</span>
                              {item.connected ? (
                                <CheckCircle className="w-4 h-4 text-emerald-500" />
                              ) : (
                                <XCircle className="w-4 h-4 text-red-500" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xs text-white font-bold uppercase tracking-wider mb-4">Internet Details</h4>
                        <div className="space-y-3 text-xs">
                          <div className="flex justify-between">
                            <span className="text-neutral-500">Connection Type</span>
                            <span className="text-white">Fiber to Premises</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-neutral-500">Max Speed</span>
                            <span className="text-[#C9A962] font-['Space_Mono']">1000 Mbps</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-neutral-500">Providers</span>
                            <span className="text-white">5 available</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {dnaSection === 'legal' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex justify-between text-xs">
                          <span className="text-neutral-500">Title Type</span>
                          <span className="text-white">Torrens Title</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-neutral-500">Encumbrances</span>
                          <span className="text-emerald-400">None</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-neutral-500">Zoning</span>
                          <span className="text-white">R2 Low Density Residential</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-neutral-500">Council</span>
                          <span className="text-white">Woollahra Municipal Council</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between text-xs">
                          <span className="text-neutral-500">Rates (Quarterly)</span>
                          <span className="text-white">$1,250</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-neutral-500">Land Tax</span>
                          <span className="text-white">$18,500/year</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-neutral-500">Strata</span>
                          <span className="text-emerald-400">No</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {dnaSection === 'renovation' && (
                    <div>
                      <h4 className="text-xs text-white font-bold uppercase tracking-wider mb-6">Renovation History</h4>
                      <div className="space-y-6">
                        <div className="flex gap-4">
                          <div className="w-16 text-right text-[10px] text-neutral-500 font-['Space_Mono'] pt-1">2023</div>
                          <div className="flex-1 pb-6 border-l-2 border-white/10 pl-6 relative">
                            <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-[#C9A962]"></div>
                            <div className="text-sm text-white font-medium mb-1">Major Refurbishment</div>
                            <ul className="text-xs text-neutral-400 space-y-1">
                              <li>• Kitchen upgrade ($250,000)</li>
                              <li>• Master suite renovation ($180,000)</li>
                              <li>• Landscaping ($95,000)</li>
                              <li>• Pool installation ($120,000)</li>
                            </ul>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="w-16 text-right text-[10px] text-neutral-500 font-['Space_Mono'] pt-1">2018</div>
                          <div className="flex-1 border-l-2 border-white/10 pl-6 relative">
                            <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-neutral-600"></div>
                            <div className="text-sm text-white font-medium mb-1">Original Construction</div>
                            <p className="text-xs text-neutral-400">New build by renowned developer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* MORTGAGE & INVESTMENT CALCULATORS */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xs font-['Space_Mono'] text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                  Financial Calculators
                </h3>
              </div>

              <div className="bg-neutral-900 border border-white/10 rounded-xl overflow-hidden">
                {/* Calculator Tabs */}
                <div className="flex border-b border-white/10 overflow-x-auto">
                  {[
                    { value: 'mortgage', label: 'Mortgage', icon: Calculator },
                    { value: 'yield', label: 'Rental Yield', icon: Percent },
                    { value: 'investment', label: 'Investment', icon: TrendingUp },
                    { value: 'affordability', label: 'Affordability', icon: DollarSign },
                  ].map((tab) => (
                    <button
                      key={tab.value}
                      onClick={() => setCalculatorTab(tab.value as any)}
                      className={`flex items-center gap-2 px-4 py-3 text-xs font-bold uppercase whitespace-nowrap transition ${calculatorTab === tab.value ? 'text-[#C9A962] bg-[#C9A962]/10' : 'text-neutral-500 hover:text-white hover:bg-white/5'}`}
                    >
                      <tab.icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="p-6">
                  {calculatorTab === 'mortgage' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div>
                          <label className="text-[10px] text-neutral-500 uppercase mb-2 block">Property Price</label>
                          <div className="text-2xl font-['Playfair_Display'] text-white">{formatPrice(property.price)}</div>
                        </div>

                        <div>
                          <label className="text-[10px] text-neutral-500 uppercase mb-2 block">Deposit: {deposit}%</label>
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={deposit}
                            onChange={(e) => setDeposit(Number(e.target.value))}
                            className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#C9A962]"
                          />
                          <div className="flex justify-between text-xs text-neutral-500 mt-1 font-['Space_Mono']">
                            <span>{formatPrice(property.price * 0.8)}</span>
                            <span>{formatPrice(property.price * (1 - deposit / 100))}</span>
                          </div>
                        </div>

                        <div>
                          <label className="text-[10px] text-neutral-500 uppercase mb-2 block">Interest Rate: {interestRate}%</label>
                          <input
                            type="range"
                            min="2"
                            max="12"
                            step="0.1"
                            value={interestRate}
                            onChange={(e) => setInterestRate(Number(e.target.value))}
                            className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#C9A962]"
                          />
                        </div>

                        <div>
                          <label className="text-[10px] text-neutral-500 uppercase mb-2 block">Loan Term: {loanTerm} years</label>
                          <input
                            type="range"
                            min="10"
                            max="30"
                            value={loanTerm}
                            onChange={(e) => setLoanTerm(Number(e.target.value))}
                            className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#C9A962]"
                          />
                        </div>
                      </div>

                      <div className="bg-neutral-800/50 rounded-xl p-6">
                        <div className="text-[10px] text-neutral-500 uppercase mb-2">Monthly Repayment</div>
                        <div className="text-4xl font-['Playfair_Display'] text-[#C9A962] mb-6">
                          {formatPrice((property.price * (1 - deposit / 100) * (interestRate / 100 / 12) * Math.pow(1 + interestRate / 100 / 12, loanTerm * 12)) / (Math.pow(1 + interestRate / 100 / 12, loanTerm * 12) - 1))}
                        </div>

                        <div className="space-y-3 text-xs">
                          <div className="flex justify-between">
                            <span className="text-neutral-500">Loan Amount</span>
                            <span className="text-white font-['Space_Mono']">{formatPrice(property.price * (1 - deposit / 100))}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-neutral-500">Total Interest</span>
                            <span className="text-white font-['Space_Mono']">
                              {formatPrice(
                                (property.price * (1 - deposit / 100) * (interestRate / 100 / 12) * Math.pow(1 + interestRate / 100 / 12, loanTerm * 12)) / (Math.pow(1 + interestRate / 100 / 12, loanTerm * 12) - 1) * loanTerm * 12 - property.price * (1 - deposit / 100)
                              )}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-neutral-500">Total Repayable</span>
                            <span className="text-white font-['Space_Mono']">
                              {formatPrice(
                                (property.price * (1 - deposit / 100) * (interestRate / 100 / 12) * Math.pow(1 + interestRate / 100 / 12, loanTerm * 12)) / (Math.pow(1 + interestRate / 100 / 12, loanTerm * 12) - 1) * loanTerm * 12
                              )}
                            </span>
                          </div>
                        </div>

                        <button className="w-full mt-6 px-6 py-3 bg-[#C9A962] text-black rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#C9A962]/90 transition">
                          Get Pre-Approved
                        </button>
                      </div>
                    </div>
                  )}

                  {calculatorTab === 'yield' && (
                    <div className="text-center py-12">
                      <Percent className="w-16 h-16 text-neutral-600 mx-auto mb-4" />
                      <h4 className="font-['Playfair_Display'] text-xl text-white mb-2">Rental Yield Calculator</h4>
                      <p className="text-neutral-400 text-sm">Coming soon</p>
                    </div>
                  )}

                  {calculatorTab === 'investment' && (
                    <div className="text-center py-12">
                      <TrendingUp className="w-16 h-16 text-neutral-600 mx-auto mb-4" />
                      <h4 className="font-['Playfair_Display'] text-xl text-white mb-2">Investment Projection</h4>
                      <p className="text-neutral-400 text-sm">Coming soon</p>
                    </div>
                  )}

                  {calculatorTab === 'affordability' && (
                    <div className="text-center py-12">
                      <DollarSign className="w-16 h-16 text-neutral-600 mx-auto mb-4" />
                      <h4 className="font-['Playfair_Display'] text-xl text-white mb-2">Affordability Calculator</h4>
                      <p className="text-neutral-400 text-sm">Coming soon</p>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* DOCUMENT VAULT */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xs font-['Space_Mono'] text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                  Document Vault
                </h3>
                <button className="flex items-center gap-2 text-xs text-[#C9A962] hover:text-[#C9A962]/80 transition">
                  <Download className="w-4 h-4" />
                  Download All
                </button>
              </div>

              <div className="bg-neutral-900 border border-white/10 rounded-xl overflow-hidden">
                {/* Document Category Tabs */}
                <div className="flex border-b border-white/10 overflow-x-auto">
                  {[
                    { value: 'legal', label: 'Legal & Contracts', icon: Scale },
                    { value: 'building', label: 'Building & Inspection', icon: Building },
                    { value: 'council', label: 'Council & Zoning', icon: Landmark },
                    { value: 'floorplan', label: 'Floor Plans', icon: Layout },
                  ].map((tab) => (
                    <button
                      key={tab.value}
                      onClick={() => setDocumentCategory(tab.value as any)}
                      className={`flex items-center gap-2 px-4 py-3 text-xs font-bold uppercase whitespace-nowrap transition ${documentCategory === tab.value ? 'text-[#C9A962] bg-[#C9A962]/10' : 'text-neutral-500 hover:text-white hover:bg-white/5'}`}
                    >
                      <tab.icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="p-6">
                  {documentCategory === 'legal' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { name: 'Contract of Sale', type: 'PDF', size: '2.4 MB', status: 'current' },
                        { name: 'Section 32 Vendor Statement', type: 'PDF', size: '1.8 MB', status: 'current' },
                        { name: 'Title Search', type: 'PDF', size: '890 KB', status: 'current' },
                        { name: 'Encumbrances Certificate', type: 'PDF', size: '450 KB', status: 'current' },
                      ].map((doc, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-neutral-800/50 rounded-lg hover:bg-neutral-800 transition cursor-pointer group">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center">
                              <FileText className="w-5 h-5 text-neutral-400" />
                            </div>
                            <div>
                              <div className="text-sm text-white group-hover:text-[#C9A962] transition">{doc.name}</div>
                              <div className="text-[10px] text-neutral-500 font-['Space_Mono']">{doc.type} • {doc.size}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            {doc.status === 'current' && (
                              <CheckCircle className="w-4 h-4 text-emerald-500" />
                            )}
                            <Download className="w-4 h-4 text-neutral-500 group-hover:text-white transition" />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {documentCategory === 'building' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { name: 'Building Inspection Report', type: 'PDF', size: '5.2 MB', status: 'current' },
                        { name: 'Pest Inspection Report', type: 'PDF', size: '3.1 MB', status: 'current' },
                        { name: 'Depreciation Schedule', type: 'PDF', size: '1.2 MB', status: 'pending' },
                      ].map((doc, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-neutral-800/50 rounded-lg hover:bg-neutral-800 transition cursor-pointer group">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center">
                              <FileText className="w-5 h-5 text-neutral-400" />
                            </div>
                            <div>
                              <div className="text-sm text-white group-hover:text-[#C9A962] transition">{doc.name}</div>
                              <div className="text-[10px] text-neutral-500 font-['Space_Mono']">{doc.type} • {doc.size}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            {doc.status === 'current' ? (
                              <CheckCircle className="w-4 h-4 text-emerald-500" />
                            ) : (
                              <Clock className="w-4 h-4 text-yellow-500" />
                            )}
                            <Download className="w-4 h-4 text-neutral-500 group-hover:text-white transition" />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {documentCategory === 'council' && (
                    <div className="text-center py-12">
                      <Landmark className="w-16 h-16 text-neutral-600 mx-auto mb-4" />
                      <p className="text-neutral-400 text-sm">No council documents available</p>
                    </div>
                  )}

                  {documentCategory === 'floorplan' && (
                    <div className="text-center py-12">
                      <Layout className="w-16 h-16 text-neutral-600 mx-auto mb-4" />
                      <p className="text-neutral-400 text-sm">Floor plans coming soon</p>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* INSPECTION BOOKING SYSTEM */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xs font-['Space_Mono'] text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                  Book an Inspection
                </h3>
              </div>

              <div className="bg-neutral-900 border border-white/10 rounded-xl overflow-hidden">
                {/* Progress Steps */}
                <div className="flex items-center justify-center px-8 py-6 border-b border-white/10">
                  <div className="flex items-center gap-4">
                    {[
                      { step: 1, label: 'Choose Date & Time' },
                      { step: 2, label: 'Your Details' },
                      { step: 3, label: 'Confirmation' },
                    ].map((item) => (
                      <div key={item.step} className="flex items-center">
                        <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 text-sm font-bold transition ${
                          bookingStep === item.step
                            ? 'border-[#C9A962] bg-[#C9A962] text-black'
                            : bookingStep > item.step
                            ? 'border-emerald-500 bg-emerald-500 text-white'
                            : 'border-white/20 text-neutral-500'
                        }`}>
                          {bookingStep > item.step ? <Check className="w-5 h-5" /> : item.step}
                        </div>
                        {item.step < 3 && (
                          <div className={`w-16 h-[2px] mx-2 ${
                            bookingStep > item.step ? 'bg-emerald-500' : 'bg-white/10'
                          }`}></div>
                        )}
                        <span className={`text-xs uppercase ml-2 ${
                          bookingStep === item.step ? 'text-white' : 'text-neutral-500'
                        }`}>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-8">
                  {bookingStep === 1 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Calendar Widget */}
                      <div>
                        <h4 className="text-white text-sm font-medium mb-4">Select a Date</h4>
                        <div className="bg-neutral-800 rounded-xl p-4">
                          <div className="flex items-center justify-between mb-4">
                            <button className="text-neutral-400 hover:text-white transition">
                              <ChevronLeft className="w-5 h-5" />
                            </button>
                            <span className="text-white font-medium">October 2025</span>
                            <button className="text-neutral-400 hover:text-white transition">
                              <ChevronRight className="w-5 h-5" />
                            </button>
                          </div>
                          <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-['Space_Mono'] text-neutral-500 mb-2">
                            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                              <div key={day} className="py-2 uppercase">{day}</div>
                            ))}
                          </div>
                          <div className="grid grid-cols-7 gap-1 text-center text-xs">
                            {Array.from({ length: 31 }, (_, i) => {
                              const day = i + 1;
                              const date = new Date(2025, 9, day);
                              const isPast = date < new Date();
                              const isSelected = selectedDate?.toDateString() === date.toDateString();
                              const isWeekend = date.getDay() === 0 || date.getDay() === 6;

                              return (
                                <button
                                  key={day}
                                  disabled={isPast}
                                  onClick={() => setSelectedDate(date)}
                                  className={`py-2 rounded-lg transition ${
                                    isPast
                                      ? 'text-neutral-700 cursor-not-allowed'
                                      : isSelected
                                      ? 'bg-[#C9A962] text-black font-bold'
                                      : isWeekend
                                      ? 'text-neutral-500 hover:text-white hover:bg-white/5'
                                      : 'text-white hover:bg-white/5'
                                  }`}
                                >
                                  {day}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      {/* Time Slots */}
                      <div>
                        <h4 className="text-white text-sm font-medium mb-4">Select a Time</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            { time: '10:00 AM', available: true },
                            { time: '11:30 AM', available: true },
                            { time: '2:00 PM', available: false },
                            { time: '3:30 PM', available: true },
                            { time: '5:00 PM', available: true },
                            { time: '6:30 PM', available: false },
                          ].map((slot) => (
                            <button
                              key={slot.time}
                              disabled={!slot.available}
                              onClick={() => slot.available && setSelectedTime(slot.time)}
                              className={`px-4 py-3 rounded-lg text-xs font-['Space_Mono'] transition ${
                                !slot.available
                                  ? 'bg-neutral-800/30 text-neutral-700 cursor-not-allowed border border-dashed border-neutral-700'
                                  : selectedTime === slot.time
                                  ? 'bg-[#C9A962] text-black border-2 border-[#C9A962]'
                                  : 'bg-neutral-800 text-white border border-white/10 hover:border-[#C9A962]'
                              }`}
                            >
                              {slot.time}
                              {!slot.available && <div className="text-[9px] mt-1">Fully Booked</div>}
                            </button>
                          ))}
                        </div>

                        <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                            <div>
                              <div className="text-white text-xs font-medium mb-1">Instant Confirmation</div>
                              <div className="text-[10px] text-neutral-400">
                                Book now and receive instant confirmation with calendar invite
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {bookingStep === 2 && (
                    <div className="max-w-md mx-auto space-y-6">
                      <div>
                        <label className="text-[10px] text-neutral-500 uppercase mb-2 block">Full Name</label>
                        <input
                          type="text"
                          placeholder="Enter your full name"
                          className="w-full px-4 py-3 bg-neutral-800 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-[#C9A962] transition"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-neutral-500 uppercase mb-2 block">Email Address</label>
                        <input
                          type="email"
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 bg-neutral-800 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-[#C9A962] transition"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-neutral-500 uppercase mb-2 block">Phone Number</label>
                        <input
                          type="tel"
                          placeholder="+61 400 000 000"
                          className="w-full px-4 py-3 bg-neutral-800 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-[#C9A962] transition"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-neutral-500 uppercase mb-2 block">Questions for Agent (Optional)</label>
                        <textarea
                          placeholder="Any specific questions about the property?"
                          rows={3}
                          className="w-full px-4 py-3 bg-neutral-800 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-[#C9A962] transition resize-none"
                        />
                      </div>
                    </div>
                  )}

                  {bookingStep === 3 && (
                    <div className="max-w-md mx-auto text-center">
                      <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-emerald-500" />
                      </div>
                      <h4 className="font-['Playfair_Display'] text-2xl text-white mb-2">Booking Confirmed!</h4>
                      <p className="text-neutral-400 text-sm mb-8">
                        Your inspection has been scheduled. We've sent a confirmation email with calendar invite.
                      </p>

                      <div className="bg-neutral-800 rounded-xl p-6 text-left mb-8">
                        <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                          <div>
                            <div className="text-[10px] text-neutral-500 uppercase">Date</div>
                            <div className="text-white font-medium">
                              {selectedDate?.toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-[10px] text-neutral-500 uppercase">Time</div>
                            <div className="text-[#C9A962] font-['Space_Mono']">{selectedTime}</div>
                          </div>
                        </div>
                        <div className="text-[10px] text-neutral-500 uppercase mb-2">Property</div>
                        <div className="text-white text-sm">{property.address}</div>
                        <div className="text-neutral-500 text-xs mt-1">{property.suburb}, {property.state} {property.postcode}</div>
                      </div>

                      <div className="flex gap-3">
                        <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#C9A962] text-black rounded-lg text-xs font-bold uppercase">
                          <Calendar className="w-4 h-4" />
                          Add to Calendar
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/10 border border-white/10 text-white rounded-lg text-xs font-bold uppercase">
                          <Share2 className="w-4 h-4" />
                          Share
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
                    <button
                      onClick={() => setBookingStep((prev) => Math.max(1, prev - 1) as 1 | 2 | 3)}
                      disabled={bookingStep === 1}
                      className={`px-6 py-3 rounded-lg text-xs font-bold uppercase transition ${
                        bookingStep === 1
                          ? 'bg-neutral-800 text-neutral-600 cursor-not-allowed'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      Back
                    </button>
                    <button
                      onClick={() => {
                        if (bookingStep === 3) {
                          setBookingStep(1);
                          setSelectedDate(null);
                          setSelectedTime(null);
                        } else {
                          setBookingStep((prev) => Math.min(3, prev + 1) as 1 | 2 | 3);
                        }
                      }}
                      disabled={(bookingStep === 1 && (!selectedDate || !selectedTime))}
                      className={`px-6 py-3 rounded-lg text-xs font-bold uppercase transition ${
                        (bookingStep === 1 && (!selectedDate || !selectedTime))
                          ? 'bg-neutral-800 text-neutral-600 cursor-not-allowed'
                          : 'bg-[#C9A962] text-black hover:bg-[#C9A962]/90'
                      }`}
                    >
                      {bookingStep === 3 ? 'Book Another' : 'Continue'}
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* HAUS INTELLIGENCE HUB */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xs font-['Space_Mono'] text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                  HAUS Intelligence Hub
                </h3>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-['Space_Mono']">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    AI Active
                  </span>
                </div>
              </div>

              <div className="bg-neutral-900 border border-white/10 rounded-xl overflow-hidden">
                {/* Intelligence Tabs */}
                <div className="flex border-b border-white/10 overflow-x-auto">
                  {[
                    { value: 'market', label: 'Market Analysis', icon: LineChart },
                    { value: 'chat', label: 'Ask HAUS AI', icon: Sparkles },
                    { value: 'investment', label: 'Investment Score', icon: Target },
                    { value: 'comparable', label: 'Comparables', icon: Scale },
                  ].map((tab) => (
                    <button
                      key={tab.value}
                      onClick={() => setIntelligenceTab(tab.value as any)}
                      className={`flex items-center gap-2 px-4 py-3 text-xs font-bold uppercase whitespace-nowrap transition ${intelligenceTab === tab.value ? 'text-[#C9A962] bg-[#C9A962]/10' : 'text-neutral-500 hover:text-white hover:bg-white/5'}`}
                    >
                      <tab.icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="p-6">
                  {intelligenceTab === 'market' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Market Trends */}
                      <div className="bg-neutral-800/50 rounded-xl p-5">
                        <h4 className="text-white text-sm font-medium mb-4">Market Trends</h4>
                        <div className="space-y-4">
                          {[
                            { metric: 'Median Price', value: '$12.5M', change: '+8.2%', positive: true },
                            { metric: 'Days on Market', value: '45', change: '-12%', positive: true },
                            { metric: 'Auction Clearance', value: '78%', change: '+5%', positive: true },
                            { metric: 'Rental Yield', value: '2.4%', change: '-0.3%', positive: false },
                          ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between">
                              <div>
                                <div className="text-[10px] text-neutral-500 uppercase">{item.metric}</div>
                                <div className="text-white font-['Space_Mono']">{item.value}</div>
                              </div>
                              <div className={`text-xs font-['Space_Mono'] ${item.positive ? 'text-emerald-400' : 'text-red-400'}`}>
                                {item.change}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Supply & Demand */}
                      <div className="bg-neutral-800/50 rounded-xl p-5">
                        <h4 className="text-white text-sm font-medium mb-4">Supply & Demand</h4>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between text-[10px] text-neutral-400 uppercase mb-2">
                              <span>Buyer Demand</span>
                              <span>High</span>
                            </div>
                            <div className="w-full h-2 bg-neutral-700 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-[#C9A962] to-[#D4B876] w-[85%]"></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-[10px] text-neutral-400 uppercase mb-2">
                              <span>Available Stock</span>
                              <span>Low</span>
                            </div>
                            <div className="w-full h-2 bg-neutral-700 rounded-full overflow-hidden">
                              <div className="h-full bg-neutral-500 w-[25%]"></div>
                            </div>
                          </div>
                          <div className="pt-4 border-t border-white/10">
                            <div className="flex items-center gap-2 text-emerald-400 text-xs">
                              <TrendingUp className="w-4 h-4" />
                              <span>Seller's Market • Prices likely to rise</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Price Predictions */}
                      <div className="bg-neutral-800/50 rounded-xl p-5 md:col-span-2">
                        <h4 className="text-white text-sm font-medium mb-4">AI Price Predictions</h4>
                        <div className="grid grid-cols-4 gap-4">
                          {[
                            { period: '3 Months', price: '$34.8M', confidence: 'High' },
                            { period: '6 Months', price: '$35.5M', confidence: 'Medium' },
                            { period: '12 Months', price: '$36.2M', confidence: 'Medium' },
                            { period: '5 Years', price: '$42.1M', confidence: 'Low' },
                          ].map((item, i) => (
                            <div key={i} className="text-center p-4 bg-neutral-900/50 rounded-lg">
                              <div className="text-[10px] text-neutral-500 uppercase mb-2">{item.period}</div>
                              <div className="text-xl font-['Playfair_Display'] text-white mb-2">{item.price}</div>
                              <div className={`text-[9px] uppercase font-['Space_Mono'] ${
                                item.confidence === 'High' ? 'text-emerald-400' : item.confidence === 'Medium' ? 'text-yellow-500' : 'text-neutral-500'
                              }`}>
                                {item.confidence} Confidence
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {intelligenceTab === 'chat' && (
                    <div>
                      {/* HAUS AI Avatar */}
                      <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A962] to-[#D4B876] flex items-center justify-center">
                          <Sparkles className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <div className="text-white font-medium">HAUS AI Assistant</div>
                          <div className="text-[10px] text-neutral-500 uppercase">Powered by Advanced AI</div>
                        </div>
                      </div>

                      {/* Chat Messages */}
                      <div className="space-y-4 mb-6 max-h-80 overflow-y-auto scrollbar-premium">
                        {chatMessages.length === 0 && (
                          <div className="text-center py-8">
                            <Sparkles className="w-12 h-12 text-neutral-600 mx-auto mb-4" />
                            <p className="text-neutral-500 text-sm">Ask me anything about this property</p>
                          </div>
                        )}

                        {chatMessages.map((msg, i) => (
                          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[80%] p-4 rounded-xl ${
                              msg.role === 'user'
                                ? 'bg-[#C9A962] text-black'
                                : 'bg-neutral-800 text-white'
                            }`}>
                              <div className="text-sm">{msg.content}</div>
                            </div>
                          </div>
                        ))}

                        {/* Suggested Questions */}
                        {chatMessages.length === 0 && (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {[
                              'What are the nearby schools?',
                              'What\'s the rental yield?',
                              'Any recent renovations?',
                              'How far is the CBD?',
                            ].map((q) => (
                              <button
                                key={q}
                                onClick={() => {
                                  setChatMessages([...chatMessages, { role: 'user', content: q }]);
                                  setTimeout(() => {
                                    setChatMessages(prev => [...prev, { role: 'assistant', content: `Great question! Based on the property data, ${q.toLowerCase()}. Let me provide you with detailed information about this.` }]);
                                  }, 1000);
                                }}
                                className="px-3 py-2 bg-neutral-800 border border-white/10 rounded-full text-xs text-neutral-400 hover:text-white hover:border-[#C9A962] transition"
                              >
                                {q}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Chat Input */}
                      <div className="flex gap-3">
                        <div className="flex-1 relative">
                          <input
                            type="text"
                            value={chatInput}
                            onChange={(e) => setChatInput(e.target.value)}
                            onKeyPress={(e) => {
                              if (e.key === 'Enter' && chatInput.trim()) {
                                setChatMessages([...chatMessages, { role: 'user', content: chatInput }]);
                                setChatInput('');
                                setTimeout(() => {
                                  setChatMessages(prev => [...prev, { role: 'assistant', content: `Thank you for your question. I'm analyzing the property data to provide you with accurate information.` }]);
                                }, 1000);
                              }
                            }}
                            placeholder="Ask HAUS AI anything about this property..."
                            className="w-full px-4 py-3 pl-12 bg-neutral-800 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-[#C9A962] transition"
                          />
                          <Mic className="w-4 h-4 text-neutral-500 absolute left-4 top-1/2 -translate-y-1/2" />
                        </div>
                        <button className="px-4 py-3 bg-[#C9A962] text-black rounded-lg hover:bg-[#C9A962]/90 transition">
                          <Send className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {intelligenceTab === 'investment' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Overall Score */}
                      <div className="bg-neutral-800/50 rounded-xl p-6 text-center">
                        <div className="w-24 h-24 rounded-full border-4 border-[#C9A962] flex items-center justify-center mx-auto mb-4 relative">
                          <span className="text-4xl font-['Playfair_Display'] text-white">8.2</span>
                          <span className="text-[10px] text-[#C9A962] absolute -bottom-6">/10</span>
                        </div>
                        <div className="text-white font-medium mb-1">Investment Score</div>
                        <div className="text-[10px] text-emerald-400 uppercase">Excellent Opportunity</div>
                      </div>

                      {/* Score Breakdown */}
                      <div className="bg-neutral-800/50 rounded-xl p-5 md:col-span-2">
                        <h4 className="text-white text-sm font-medium mb-4">Score Breakdown</h4>
                        <div className="space-y-3">
                          {[
                            { label: 'Location', score: 9.2 },
                            { label: 'Growth Potential', score: 8.5 },
                            { label: 'Rental Demand', score: 7.8 },
                            { label: 'Yield', score: 6.5 },
                            { label: 'Condition', score: 9.0 },
                          ].map((item, i) => (
                            <div key={i}>
                              <div className="flex justify-between text-xs mb-1">
                                <span className="text-neutral-400">{item.label}</span>
                                <span className="text-white font-['Space_Mono']">{item.score}/10</span>
                              </div>
                              <div className="w-full h-1.5 bg-neutral-700 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-gradient-to-r from-[#C9A962] to-[#D4B876] transition-all duration-1000"
                                  style={{ width: `${item.score * 10}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {intelligenceTab === 'comparable' && (
                    <div className="text-center py-12">
                      <Scale className="w-16 h-16 text-neutral-600 mx-auto mb-4" />
                      <h4 className="font-['Playfair_Display'] text-xl text-white mb-2">AI-Powered Comparables</h4>
                      <p className="text-neutral-400 text-sm mb-6">Advanced comparable property analysis coming soon</p>
                      <button className="px-6 py-3 bg-[#C9A962] text-black rounded-lg text-xs font-bold uppercase">
                        Notify Me When Available
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* SIMILAR PROPERTIES */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xs font-['Space_Mono'] text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                  Similar Properties
                </h3>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 text-[10px] text-neutral-500 font-['Space_Mono']">
                    <Sparkles className="w-3 h-3" />
                    AI-Matched
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "15 Wentworth St",
                    suburb: "Point Piper",
                    price: "$29.5M",
                    match: 94,
                    matchLabel: "Excellent Match",
                    specs: "5 Bed • 4 Bath • 3 Car",
                    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=600&auto=format&fit=crop",
                  },
                  {
                    title: "55 Rose Bay Ave",
                    suburb: "Rose Bay",
                    price: "$27.8M",
                    match: 89,
                    matchLabel: "Great Match",
                    specs: "4 Bed • 3 Bath • 2 Car",
                    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600&auto=format&fit=crop",
                  },
                  {
                    title: "8 Vaucluse Rd",
                    suburb: "Vaucluse",
                    price: "$31.2M",
                    match: 87,
                    matchLabel: "Great Match",
                    specs: "5 Bed • 4 Bath • 4 Car",
                    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=600&auto=format&fit=crop",
                  },
                ].map((listing, i) => (
                  <div key={i} className="group relative bg-neutral-900 border border-white/5 rounded-xl overflow-hidden hover:border-white/20 transition cursor-pointer">
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={listing.img}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                        alt={listing.title}
                      />
                      <div className="absolute top-3 left-3 bg-[#C9A962] backdrop-blur px-2 py-1 rounded text-[10px] text-black font-['Space_Mono'] uppercase">
                        {listing.match}% Match
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div className="text-white font-medium text-sm">{listing.title}</div>
                        <div className="text-emerald-400 font-['Space_Mono'] text-xs">{listing.price}</div>
                      </div>
                      <div className="text-[10px] text-neutral-500 mb-3">
                        {listing.suburb}
                      </div>
                      <div className="flex gap-3 text-[10px] text-neutral-400">
                        <span className="flex items-center gap-1">
                          <BedDouble className="w-3 h-3" />
                          {listing.specs?.split('•')[0]?.trim()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Bath className="w-3 h-3" />
                          {listing.specs?.split('•')[1]?.trim()}
                        </span>
                        <span className="flex items-center gap-1">
                          <CarFront className="w-3 h-3" />
                          {listing.specs?.split('•')[2]?.trim()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* VIRTUAL STAGING */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xs font-['Space_Mono'] text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                  Virtual Staging
                </h3>
              </div>

              <div className="bg-neutral-900 border border-white/10 rounded-xl overflow-hidden">
                <div className="relative aspect-video">
                  <img
                    src={property.images[0]}
                    className={`w-full h-full object-cover transition duration-700 ${stagingEnabled ? 'opacity-100' : 'grayscale'}`}
                    alt="Virtual Staging"
                  />
                  {stagingEnabled && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  )}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-white">
                        <div className="text-[10px] text-neutral-400 uppercase mb-1">Current Style</div>
                        <div className="text-sm font-medium capitalize">{stagingStyle}</div>
                      </div>
                      <button
                        onClick={() => setStagingEnabled(!stagingEnabled)}
                        className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition ${
                          stagingEnabled
                            ? 'bg-[#C9A962] text-black'
                            : 'bg-white/10 border border-white/10 text-white'
                        }`}
                      >
                        {stagingEnabled ? 'Furnished' : 'Empty'}
                      </button>
                    </div>
                    {stagingEnabled && (
                      <div className="flex gap-2 overflow-x-auto pb-2">
                        {[
                          { value: 'modern', label: 'Modern', icon: Home },
                          { value: 'classic', label: 'Classic', icon: Award },
                          { value: 'minimalist', label: 'Minimalist', icon: Minimize2 },
                          { value: 'scandinavian', label: 'Scandinavian', icon: Sparkles },
                          { value: 'industrial', label: 'Industrial', icon: Settings },
                          { value: 'coastal', label: 'Coastal', icon: Waves },
                        ].map((style) => (
                          <button
                            key={style.value}
                            onClick={() => setStagingStyle(style.value as any)}
                            className={`px-3 py-2 rounded-lg text-[10px] font-bold uppercase whitespace-nowrap transition ${
                              stagingStyle === style.value
                                ? 'bg-white text-black'
                                : 'bg-white/10 text-white hover:bg-white/20'
                            }`}
                          >
                            <style.icon className="w-3 h-3 inline mr-1" />
                            {style.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* PROPERTY TIMELINE */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xs font-['Space_Mono'] text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                  Property Timeline
                </h3>
              </div>

              <div className="bg-neutral-900 border border-white/10 rounded-xl p-8">
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-white/10"></div>

                  <div className="space-y-8">
                    {[
                      {
                        year: '2024',
                        title: 'Property Listed',
                        description: 'Listed for sale by current owners',
                        price: '$34M',
                        icon: Tag,
                      },
                      {
                        year: '2023',
                        title: 'Major Renovation',
                        description: 'Complete refurbishment including kitchen, master suite, and landscaping',
                        price: '$1.2M',
                        icon: Hammer,
                      },
                      {
                        year: '2018',
                        title: 'Original Construction',
                        description: 'New build by renowned developer',
                        price: '$18.5M',
                        icon: Building,
                      },
                      {
                        year: '2015',
                        title: 'Land Acquisition',
                        description: 'Purchased from previous owners',
                        price: '$12M',
                        icon: Map,
                      },
                    ].map((event, i) => (
                      <div key={i} className="relative pl-12">
                        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#C9A962] flex items-center justify-center">
                          <event.icon className="w-4 h-4 text-black" />
                        </div>
                        <div className="bg-neutral-800/50 rounded-lg p-5">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <div className="text-white font-medium text-sm">{event.title}</div>
                              <div className="text-[10px] text-neutral-500 font-['Space_Mono'] uppercase">{event.year}</div>
                            </div>
                            {event.price && (
                              <div className="text-[#C9A962] font-['Space_Mono'] text-sm">{event.price}</div>
                            )}
                          </div>
                          <p className="text-neutral-400 text-xs">{event.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 3D WALKTHROUGH */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xs font-['Space_Mono'] text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                  3D Walkthrough
                </h3>
              </div>

              <div className="bg-neutral-900 border border-white/10 rounded-xl overflow-hidden">
                <div className="relative aspect-video">
                  <img
                    src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1600&auto=format&fit=crop"
                    className="w-full h-full object-cover"
                    alt="3D Walkthrough"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                  {/* 3D Controls */}
                  <div className="absolute top-6 right-6 flex flex-col gap-3">
                    <div className="bg-black/80 backdrop-blur border border-white/10 rounded-lg p-3">
                      <div className="text-[10px] text-neutral-500 uppercase mb-2 text-center">View Mode</div>
                      <div className="flex gap-2">
                        {[
                          { value: 'walk', icon: Eye, label: 'Walk' },
                          { value: 'dollhouse', icon: Home, label: 'Dollhouse' },
                          { value: 'floorplan', icon: Layout, label: 'Floor Plan' },
                        ].map((mode) => (
                          <button
                            key={mode.value}
                            onClick={() => setTour3DMode(mode.value as any)}
                            className={`w-10 h-10 rounded flex items-center justify-center transition ${
                              tour3DMode === mode.value
                                ? 'bg-[#C9A962] text-black'
                                : 'bg-white/10 text-white hover:bg-white/20'
                            }`}
                            title={mode.label}
                          >
                            <mode.icon className="w-4 h-4" />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="bg-black/80 backdrop-blur border border-white/10 rounded-lg p-3">
                      <div className="text-[10px] text-neutral-500 uppercase mb-2 text-center">Floor</div>
                      <div className="flex gap-2">
                        {[
                          { value: 'roof', label: 'Roof' },
                          { value: 'level2', label: 'L2' },
                          { value: 'level1', label: 'L1' },
                          { value: 'ground', label: 'G' },
                        ].map((floor) => (
                          <button
                            key={floor.value}
                            onClick={() => setTour3DFloor(floor.value as any)}
                            className={`w-10 h-10 rounded flex items-center justify-center text-xs font-['Space_Mono'] transition ${
                              tour3DFloor === floor.value
                                ? 'bg-[#C9A962] text-black'
                                : 'bg-white/10 text-white hover:bg-white/20'
                            }`}
                          >
                            {floor.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-20 h-20 rounded-full bg-[#C9A962] flex items-center justify-center text-black hover:bg-[#C9A962]/90 transition shadow-lg">
                      <Play className="w-8 h-8 ml-1" />
                    </button>
                  </div>

                  {/* Floor Label */}
                  <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur px-3 py-2 rounded-lg">
                    <div className="text-[10px] text-neutral-500 uppercase">Currently Viewing</div>
                    <div className="text-white text-sm capitalize">{tour3DFloor === 'ground' ? 'Ground Floor' : tour3DFloor === 'level1' ? 'Level 1' : tour3DFloor === 'level2' ? 'Level 2' : 'Roof Terrace'}</div>
                  </div>
                </div>
              </div>
            </section>

            {/* AUDIO TOUR */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xs font-['Space_Mono'] text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                  Audio Tour
                </h3>
              </div>

              <div className="bg-neutral-900 border border-white/10 rounded-xl p-6">
                {/* Audio Player */}
                <div className="flex items-center gap-6 mb-6">
                  <button
                    onClick={() => setAudioPlaying(!audioPlaying)}
                    className="w-16 h-16 rounded-full bg-[#C9A962] flex items-center justify-center text-black hover:bg-[#C9A962]/90 transition"
                  >
                    {audioPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                  </button>

                  <div className="flex-1">
                    <div className="text-white text-sm font-medium mb-2">
                      {audioChapters[audioChapter]?.title || 'Introduction'}
                    </div>
                    <div className="relative h-1 bg-neutral-800 rounded-full overflow-hidden mb-3">
                      <div
                        className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#C9A962] to-[#D4B876] transition-all duration-300"
                        style={{ width: `${audioProgress}%` }}
                      ></div>
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-neutral-500 font-['Space_Mono']">
                      <span>{Math.floor(audioProgress / 10 * (audioChapters[audioChapter]?.end - audioChapters[audioChapter]?.start || 90) / 60)}:{String(Math.floor(audioProgress / 10 * (audioChapters[audioChapter]?.end - audioChapters[audioChapter]?.start || 90) % 60)).padStart(2, '0')}</span>
                      <span>{Math.floor((audioChapters[audioChapter]?.end - audioChapters[audioChapter]?.start || 90) / 60)}:{String((audioChapters[audioChapter]?.end - audioChapters[audioChapter]?.start || 90) % 60).padStart(2, '0')}</span>
                    </div>
                  </div>

                  {/* Speed Control */}
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-neutral-500 uppercase">Speed</span>
                    {[0.5, 1, 1.5, 2].map((speed) => (
                      <button
                        key={speed}
                        onClick={() => setAudioSpeed(speed)}
                        className={`w-8 h-8 rounded flex items-center justify-center text-xs font-['Space_Mono'] transition ${
                          audioSpeed === speed
                            ? 'bg-[#C9A962] text-black'
                            : 'bg-white/10 text-white hover:bg-white/20'
                        }`}
                      >
                        {speed}x
                      </button>
                    ))}
                  </div>
                </div>

                {/* Chapter List */}
                <div className="space-y-2">
                  <div className="text-[10px] text-neutral-500 uppercase mb-3">Chapters</div>
                  {audioChapters.map((chapter, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setAudioChapter(i);
                        setAudioPlaying(true);
                        setAudioProgress(0);
                      }}
                      className={`w-full flex items-center justify-between p-4 rounded-lg transition ${
                        audioChapter === i
                          ? 'bg-[#C9A962]/10 border border-[#C9A962]'
                          : 'bg-neutral-800/50 border border-transparent hover:bg-neutral-800'
                      }`}
                    >
                      <div className="text-left">
                        <div className={`text-sm font-medium ${audioChapter === i ? 'text-[#C9A962]' : 'text-white'}`}>
                          {chapter.title}
                        </div>
                        <div className="text-[10px] text-neutral-500 font-['Space_Mono']">
                          {Math.floor((chapter.end - chapter.start) / 60)} min {((chapter.end - chapter.start) % 60)} sec
                        </div>
                      </div>
                      {audioChapter === i && audioPlaying && (
                        <div className="flex gap-1">
                          {[1, 2, 3].map((bar) => (
                            <div
                              key={bar}
                              className="w-1 h-4 bg-[#C9A962] rounded animate-pulse"
                              style={{ animationDelay: `${bar * 0.2}s` }}
                            ></div>
                          ))}
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* INVESTMENT ANALYSIS */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xs font-['Space_Mono'] text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                  Investment Analysis
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Rental Yield */}
                <div className="bg-neutral-900 border border-white/10 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-white text-sm font-medium flex items-center gap-2">
                      <Percent className="w-4 h-4 text-neutral-400" />
                      Rental Yield
                    </h4>
                    <div className="text-2xl font-['Playfair_Display'] text-[#C9A962]">2.4%</div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-xs">
                      <span className="text-neutral-500">Weekly Rent (est.)</span>
                      <span className="text-white font-['Space_Mono']">$15,600</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-neutral-500">Annual Rent</span>
                      <span className="text-white font-['Space_Mono']">$811,200</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-neutral-500">Yield vs Suburb Avg</span>
                      <span className="text-red-400 font-['Space_Mono']">-0.8%</span>
                    </div>
                  </div>
                </div>

                {/* Capital Growth */}
                <div className="bg-neutral-900 border border-white/10 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-white text-sm font-medium flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-neutral-400" />
                      5-Year Growth Forecast
                    </h4>
                    <div className="text-2xl font-['Playfair_Display'] text-emerald-400">+42%</div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-xs">
                      <span className="text-neutral-500">Projected Value (2029)</span>
                      <span className="text-white font-['Space_Mono']">$48.3M</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-neutral-500">Capital Appreciation</span>
                      <span className="text-emerald-400 font-['Space_Mono']">$14.3M</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-neutral-500">Growth vs Suburb Avg</span>
                      <span className="text-emerald-400 font-['Space_Mono']">+12%</span>
                    </div>
                  </div>
                </div>

                {/* Tax Analysis */}
                <div className="bg-neutral-900 border border-white/10 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-white text-sm font-medium flex items-center gap-2">
                      <FileText className="w-4 h-4 text-neutral-400" />
                      Tax Implications
                    </h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-xs">
                      <span className="text-neutral-500">Stamp Duty</span>
                      <span className="text-white font-['Space_Mono']">$1.5M</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-neutral-500">Annual Land Tax</span>
                      <span className="text-white font-['Space_Mono']">$18,500</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-neutral-500">CGT (if sold after 12mo)</span>
                      <span className="text-white font-['Space_Mono']">$5.9M (24%)</span>
                    </div>
                  </div>
                </div>

                {/* Risk Assessment */}
                <div className="bg-neutral-900 border border-white/10 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-white text-sm font-medium flex items-center gap-2">
                      <Shield className="w-4 h-4 text-neutral-400" />
                      Risk Assessment
                    </h4>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-neutral-500">Market Risk</span>
                        <span className="text-emerald-400 font-['Space_Mono']">Low</span>
                      </div>
                      <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 w-[20%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-neutral-500">Interest Rate Risk</span>
                        <span className="text-yellow-500 font-['Space_Mono']">Medium</span>
                      </div>
                      <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                        <div className="h-full bg-yellow-500 w-[50%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-neutral-500">Liquidity Risk</span>
                        <span className="text-yellow-500 font-['Space_Mono']">Medium</span>
                      </div>
                      <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                        <div className="h-full bg-yellow-500 w-[45%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* PROPERTY COMPARISON */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xs font-['Space_Mono'] text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                  Compare Properties
                </h3>
                <button
                  onClick={() => {
                    if (comparisonProperties.length < 3) {
                      // Show available properties to add to comparison
                      alert('Select similar properties from the list below to compare');
                    }
                  }}
                  className="text-xs text-[#C9A962] hover:text-[#C9A962]/80 transition flex items-center gap-1"
                >
                  <Scale className="w-4 h-4" />
                  Add to Compare ({comparisonProperties.length}/3)
                </button>
              </div>

              <div className="bg-neutral-900 border border-white/10 rounded-xl overflow-hidden">
                {/* Comparison Header */}
                <div className="grid grid-cols-4 bg-neutral-800/50 border-b border-white/10">
                  <div className="p-4 border-r border-white/10">
                    <div className="text-[10px] text-neutral-500 uppercase">Feature</div>
                  </div>
                  <div className="p-4 border-r border-white/10 text-center">
                    <div className="text-white text-sm font-medium">{property.title || property.address}</div>
                    <div className="text-[10px] text-neutral-500">{property.suburb}</div>
                  </div>
                  {comparisonProperties.length > 0 && (
                    <div className="p-4 border-r border-white/10 text-center">
                      <div className="text-white text-sm font-medium">15 Wentworth St</div>
                      <div className="text-[10px] text-neutral-500">Point Piper</div>
                      <button
                        onClick={() => setComparisonProperties(comparisonProperties.filter((_, i) => i !== 0))}
                        className="text-[10px] text-red-400 hover:text-red-300 mt-1"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                  {comparisonProperties.length > 1 && (
                    <div className="p-4 text-center">
                      <div className="text-white text-sm font-medium">55 Rose Bay Ave</div>
                      <div className="text-[10px] text-neutral-500">Rose Bay</div>
                      <button
                        onClick={() => setComparisonProperties(comparisonProperties.filter((_, i) => i !== 1))}
                        className="text-[10px] text-red-400 hover:text-red-300 mt-1"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                  {comparisonProperties.length === 0 && (
                    <>
                      <div className="p-4 border-r border-white/10 text-center text-neutral-600 text-xs">
                        Add properties to compare
                      </div>
                      <div className="p-4 text-center text-neutral-600 text-xs">
                        Add properties to compare
                      </div>
                    </>
                  )}
                </div>

                {/* Comparison Rows */}
                <div className="divide-y divide-white/10">
                  {/* Price */}
                  <div className="grid grid-cols-4">
                    <div className="p-4 border-r border-white/10">
                      <div className="flex items-center gap-2 text-xs text-neutral-500">
                        <DollarSign className="w-3.5 h-3.5" />
                        Price
                      </div>
                    </div>
                    <div className="p-4 border-r border-white/10 text-center">
                      <div className="text-[#C9A962] font-['Space_Mono']">{formatPrice(property.price)}</div>
                    </div>
                    {comparisonProperties.length > 0 && (
                      <div className="p-4 border-r border-white/10 text-center">
                        <div className="text-emerald-400 font-['Space_Mono']">$29.5M</div>
                      </div>
                    )}
                    {comparisonProperties.length > 1 && (
                      <div className="p-4 text-center">
                        <div className="text-emerald-400 font-['Space_Mono']">$27.8M</div>
                      </div>
                    )}
                    {comparisonProperties.length === 0 && (
                      <>
                        <div className="p-4 border-r border-white/10 text-center text-neutral-600 text-xs">-</div>
                        <div className="p-4 text-center text-neutral-600 text-xs">-</div>
                      </>
                    )}
                  </div>

                  {/* Beds */}
                  <div className="grid grid-cols-4">
                    <div className="p-4 border-r border-white/10">
                      <div className="flex items-center gap-2 text-xs text-neutral-500">
                        <BedDouble className="w-3.5 h-3.5" />
                        Bedrooms
                      </div>
                    </div>
                    <div className="p-4 border-r border-white/10 text-center">
                      <div className="text-white font-['Space_Mono']">{property.bedrooms}</div>
                    </div>
                    {comparisonProperties.length > 0 && (
                      <div className="p-4 border-r border-white/10 text-center">
                        <div className="text-white font-['Space_Mono']">5</div>
                      </div>
                    )}
                    {comparisonProperties.length > 1 && (
                      <div className="p-4 text-center">
                        <div className="text-white font-['Space_Mono']">4</div>
                      </div>
                    )}
                    {comparisonProperties.length === 0 && (
                      <>
                        <div className="p-4 border-r border-white/10 text-center text-neutral-600 text-xs">-</div>
                        <div className="p-4 text-center text-neutral-600 text-xs">-</div>
                      </>
                    )}
                  </div>

                  {/* Baths */}
                  <div className="grid grid-cols-4">
                    <div className="p-4 border-r border-white/10">
                      <div className="flex items-center gap-2 text-xs text-neutral-500">
                        <Bath className="w-3.5 h-3.5" />
                        Bathrooms
                      </div>
                    </div>
                    <div className="p-4 border-r border-white/10 text-center">
                      <div className="text-white font-['Space_Mono']">{property.bathrooms}</div>
                    </div>
                    {comparisonProperties.length > 0 && (
                      <div className="p-4 border-r border-white/10 text-center">
                        <div className="text-white font-['Space_Mono']">4</div>
                      </div>
                    )}
                    {comparisonProperties.length > 1 && (
                      <div className="p-4 text-center">
                        <div className="text-white font-['Space_Mono']">3</div>
                      </div>
                    )}
                    {comparisonProperties.length === 0 && (
                      <>
                        <div className="p-4 border-r border-white/10 text-center text-neutral-600 text-xs">-</div>
                        <div className="p-4 text-center text-neutral-600 text-xs">-</div>
                      </>
                    )}
                  </div>

                  {/* Size */}
                  <div className="grid grid-cols-4">
                    <div className="p-4 border-r border-white/10">
                      <div className="flex items-center gap-2 text-xs text-neutral-500">
                        <Scaling className="w-3.5 h-3.5" />
                        Land Size
                      </div>
                    </div>
                    <div className="p-4 border-r border-white/10 text-center">
                      <div className="text-white font-['Space_Mono']">{property.squareFootage}m²</div>
                    </div>
                    {comparisonProperties.length > 0 && (
                      <div className="p-4 border-r border-white/10 text-center">
                        <div className="text-white font-['Space_Mono']">920m²</div>
                      </div>
                    )}
                    {comparisonProperties.length > 1 && (
                      <div className="p-4 text-center">
                        <div className="text-white font-['Space_Mono']">750m²</div>
                      </div>
                    )}
                    {comparisonProperties.length === 0 && (
                      <>
                        <div className="p-4 border-r border-white/10 text-center text-neutral-600 text-xs">-</div>
                        <div className="p-4 text-center text-neutral-600 text-xs">-</div>
                      </>
                    )}
                  </div>

                  {/* Year Built */}
                  <div className="grid grid-cols-4">
                    <div className="p-4 border-r border-white/10">
                      <div className="flex items-center gap-2 text-xs text-neutral-500">
                        <Calendar className="w-3.5 h-3.5" />
                        Year Built
                      </div>
                    </div>
                    <div className="p-4 border-r border-white/10 text-center">
                      <div className="text-white font-['Space_Mono']">2018</div>
                    </div>
                    {comparisonProperties.length > 0 && (
                      <div className="p-4 border-r border-white/10 text-center">
                        <div className="text-white font-['Space_Mono']">2015</div>
                      </div>
                    )}
                    {comparisonProperties.length > 1 && (
                      <div className="p-4 text-center">
                        <div className="text-white font-['Space_Mono']">2020</div>
                      </div>
                    )}
                    {comparisonProperties.length === 0 && (
                      <>
                        <div className="p-4 border-r border-white/10 text-center text-neutral-600 text-xs">-</div>
                        <div className="p-4 text-center text-neutral-600 text-xs">-</div>
                      </>
                    )}
                  </div>

                  {/* Rental Yield */}
                  <div className="grid grid-cols-4">
                    <div className="p-4 border-r border-white/10">
                      <div className="flex items-center gap-2 text-xs text-neutral-500">
                        <Percent className="w-3.5 h-3.5" />
                        Rental Yield
                      </div>
                    </div>
                    <div className="p-4 border-r border-white/10 text-center">
                      <div className="text-white font-['Space_Mono']">2.4%</div>
                    </div>
                    {comparisonProperties.length > 0 && (
                      <div className="p-4 border-r border-white/10 text-center">
                        <div className="text-emerald-400 font-['Space_Mono']">2.8%</div>
                      </div>
                    )}
                    {comparisonProperties.length > 1 && (
                      <div className="p-4 text-center">
                        <div className="text-red-400 font-['Space_Mono']">2.1%</div>
                      </div>
                    )}
                    {comparisonProperties.length === 0 && (
                      <>
                        <div className="p-4 border-r border-white/10 text-center text-neutral-600 text-xs">-</div>
                        <div className="p-4 text-center text-neutral-600 text-xs">-</div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* COMPARABLE LISTINGS */}
            <section className="border-t border-white/10 pt-16">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xs font-['Space_Mono'] text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                  Comparable Listings
                </h3>
                <div className="flex gap-2">
                  <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "42 Wunulla Rd",
                    suburb: "Point Piper",
                    price: "$34.5M",
                    status: "Sold Oct 24",
                    statusColor: "bg-black/50",
                    specs: "5 Bed • 5 Bath • 4 Car",
                    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
                  },
                  {
                    title: "88 Wolseley Rd",
                    suburb: "Point Piper",
                    price: "$41.0M",
                    status: "Sold Aug 24",
                    statusColor: "bg-black/50",
                    specs: "6 Bed • 7 Bath • 6 Car",
                    img: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=600&auto=format&fit=crop",
                  },
                  {
                    title: "22 Wentworth St",
                    suburb: "Point Piper",
                    price: "Guide $32M",
                    status: "For Sale",
                    statusColor: "bg-emerald-500/90",
                    specs: "5 Bed • 4 Bath • 3 Car",
                    img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=600&auto=format&fit=crop",
                  },
                ].map((listing, i) => (
                  <div key={i} className="group relative bg-neutral-900 border border-white/5 rounded-xl overflow-hidden hover:border-white/20 transition cursor-pointer">
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={listing.img}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                        alt={listing.title}
                      />
                      <div className={`absolute top-3 right-3 ${listing.statusColor} backdrop-blur px-2 py-1 rounded text-[10px] text-white font-['Space_Mono'] uppercase`}>
                        {listing.status}
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div className="text-white font-medium text-sm">{listing.title}</div>
                        <div className="text-emerald-400 font-['Space_Mono'] text-xs">{listing.price}</div>
                      </div>
                      <div className="text-[10px] text-neutral-500 mb-4">
                        {listing.suburb} • Waterfront
                      </div>
                      <div className="flex gap-3 text-[10px] text-neutral-400 border-t border-white/5 pt-3">
                        <span className="flex items-center gap-1">
                          <BedDouble className="w-3 h-3" />
                          {listing.specs?.split('•')[0]?.trim()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Bath className="w-3 h-3" />
                          {listing.specs?.split('•')[1]?.trim()}
                        </span>
                        <span className="flex items-center gap-1">
                          <CarFront className="w-3 h-3" />
                          {listing.specs?.split('•')[2]?.trim()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Sticky Sidebar */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-28 space-y-6">
              {/* Agent Contact Suite */}
              <div className="bg-neutral-900/80 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#C9A962]">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80" className="w-full h-full object-cover" alt="Agent" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Alexander Phillips</div>
                    <div className="text-[10px] text-neutral-500 uppercase">Principal • HAUS Prestige</div>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-3 h-3 fill-[#C9A962] text-[#C9A962]" />
                      <span className="text-xs text-[#C9A962]">4.9</span>
                      <span className="text-[10px] text-neutral-500">(124 reviews)</span>
                    </div>
                  </div>
                </div>

                <div className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded inline-block mb-6 font-['Space_Mono'] uppercase">
                  &lt; 2h Response Time
                </div>

                <div className="space-y-3">
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#C9A962] text-black rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#C9A962]/90 transition">
                    <Phone className="w-3.5 h-3.5" />
                    Call Now
                  </button>
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white/10 border border-white/10 text-white rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-white/20 transition">
                    <Mail className="w-3.5 h-3.5" />
                    Email
                  </button>
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white/10 border border-white/10 text-white rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-white/20 transition">
                    <MessageCircle className="w-3.5 h-3.5" />
                    Live Chat
                  </button>
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white/10 border border-white/10 text-white rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-white/20 transition">
                    <VideoIcon className="w-3.5 h-3.5" />
                    Video Call
                  </button>
                </div>
              </div>

              {/* Investment Highlights */}
              <div className="bg-neutral-900 border border-white/10 rounded-xl p-6">
                <h4 className="text-xs font-['Space_Mono'] text-neutral-500 uppercase mb-4 tracking-widest">
                  Investment Highlights
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-400">Projected Yield</span>
                    <span className="text-[#C9A962] font-['Space_Mono']">2.4%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-400">Growth Forecast</span>
                    <span className="text-emerald-400 font-['Space_Mono']">+8.2%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-400">Market Phase</span>
                    <span className="text-white">Seller's Market</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-400">Demand</span>
                    <span className="text-white">High</span>
                  </div>
                </div>
              </div>

              {/* Concierge Services */}
              <div className="bg-neutral-900 border border-white/10 rounded-xl p-5">
                <h4 className="text-xs font-['Space_Mono'] text-neutral-500 uppercase mb-4 tracking-widest flex items-center gap-2">
                  <ConciergeBell className="w-3 h-3" />
                  Concierge
                </h4>
                <ul className="space-y-3">
                  {[
                    { icon: Truck, label: "Moving Services" },
                    { icon: Hammer, label: "Renovation Quotes" },
                    { icon: Shield, label: "Insurance" },
                    { icon: Scale, label: "Conveyancing" },
                    { icon: SearchCheck, label: "Building Inspection" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center justify-between text-xs group cursor-pointer">
                      <div className="flex items-center gap-2 text-white">
                        <item.icon className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition" />
                        {item.label}
                      </div>
                      <ChevronRight className="w-3 h-3 text-neutral-600 group-hover:text-white transition" />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Warehaus Commercial */}
              <div className="bg-gradient-to-br from-neutral-900 to-[#0d1117] border border-blue-900/30 rounded-xl p-5 group relative overflow-hidden">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-['Space_Mono'] text-blue-400 uppercase tracking-widest border border-blue-500/20 px-1.5 py-0.5 rounded bg-blue-500/10">
                    Warehaus
                  </span>
                </div>
                <h4 className="text-white text-sm font-medium mb-2">Commercial Property?</h4>
                <p className="text-[10px] text-neutral-400 mb-4 leading-relaxed">
                  Explore premium commercial spaces in Sydney's most sought-after business districts.
                </p>
                <button className="text-xs text-blue-400 hover:text-blue-300 transition flex items-center gap-1">
                  View Commercial <ArrowRight className="w-3 h-3" />
                </button>
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#020202] pt-16 pb-8 mt-24 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
            <div className="col-span-2">
              <div className="w-8 h-8 bg-white text-black rounded flex items-center justify-center font-['Playfair_Display'] font-bold tracking-tighter mb-6">
                H.
              </div>
              <p className="text-xs text-neutral-500 max-w-xs leading-relaxed">
                Redefining luxury real estate with data-driven insights and world-class design. Experience the future of property.
              </p>
            </div>
            <div>
              <h5 className="text-white font-medium text-xs mb-4">Company</h5>
              <ul className="space-y-3 text-xs text-neutral-500">
                <li><Link to="#" className="hover:text-white transition">About</Link></li>
                <li><Link to="#" className="hover:text-white transition">Careers</Link></li>
                <li><Link to="#" className="hover:text-white transition">Press</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-medium text-xs mb-4">Resources</h5>
              <ul className="space-y-3 text-xs text-neutral-500">
                <li><Link to="#" className="hover:text-white transition">Market Reports</Link></li>
                <li><Link to="#" className="hover:text-white transition">Haus Intelligence</Link></li>
                <li><Link to="#" className="hover:text-white transition">Concierge</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-medium text-xs mb-4">Social</h5>
              <div className="flex gap-4">
                <Link to="#" className="text-neutral-500 hover:text-white transition">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.69.073 4.938.073 4.938zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
                <Link to="#" className="text-neutral-500 hover:text-white transition">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
            <div className="text-[10px] text-neutral-600 font-['Space_Mono']">© 2025 HAUS Real Estate Group.</div>
            <div className="flex gap-6 text-[10px] text-neutral-600 font-['Space_Mono']">
              <Link to="#" className="hover:text-white transition">Privacy Policy</Link>
              <Link to="#" className="hover:text-white transition">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-[#050505]/90 backdrop-blur-xl border-t border-white/10 p-4 flex gap-3">
        <button className="flex-1 bg-white text-black font-bold uppercase tracking-wider py-3 rounded-lg text-xs">
          Make Offer
        </button>
        <button className="flex-1 bg-white/10 border border-white/10 text-white font-bold uppercase tracking-wider py-3 rounded-lg text-xs">
          Enquire
        </button>
      </div>

      {/* Saved Properties & Alerts Modal */}
      {showSaveModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowSaveModal(false)}></div>
          <div className="relative bg-neutral-900 border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div>
                <h3 className="font-['Playfair_Display'] text-xl text-white">Saved Properties & Alerts</h3>
                <p className="text-neutral-500 text-sm mt-1">Manage your collections and set up price alerts</p>
              </div>
              <button
                onClick={() => setShowSaveModal(false)}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              {/* Collections */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-white font-medium text-sm">Your Collections</h4>
                  <button className="text-xs text-[#C9A962] hover:text-[#C9A962]/80 transition flex items-center gap-1">
                    <Plus className="w-3.5 h-3.5" />
                    New Collection
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'Waterfront Properties', count: 12, icon: Waves },
                    { name: 'Investment Properties', count: 8, icon: TrendingUp },
                    { name: 'Family Homes', count: 5, icon: Home },
                    { name: 'Favorites', count: 23, icon: Heart },
                  ].map((collection, i) => (
                    <div
                      key={i}
                      className={`p-4 rounded-xl border cursor-pointer transition ${
                        isSaved && i === 3
                          ? 'bg-[#C9A962]/10 border-[#C9A962]'
                          : 'bg-neutral-800/50 border-white/10 hover:border-white/30'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2 text-white">
                          <collection.icon className="w-4 h-4" />
                          <span className="text-sm font-medium">{collection.name}</span>
                        </div>
                        <span className="text-[10px] text-neutral-500 font-['Space_Mono']">{collection.count}</span>
                      </div>
                      {isSaved && i === 3 && (
                        <div className="flex items-center gap-2 text-[10px] text-[#C9A962]">
                          <Check className="w-3 h-3" />
                          Added
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Alerts */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-white font-medium text-sm">Price Alerts</h4>
                  <button className="text-xs text-[#C9A962] hover:text-[#C9A962]/80 transition flex items-center gap-1">
                    <Plus className="w-3.5 h-3.5" />
                    Create Alert
                  </button>
                </div>
                <div className="space-y-3">
                  {[
                    {
                      property: '12 Wolseley Rd',
                      type: 'Price Drop',
                      condition: 'Below $32M',
                      active: true,
                    },
                    {
                      property: 'Point Piper Area',
                      type: 'New Listing',
                      condition: '5+ Bed • Waterfront',
                      active: true,
                    },
                    {
                      property: '15 Wentworth St',
                      type: 'Auction Alert',
                      condition: '24h before auction',
                      active: false,
                    },
                  ].map((alert, i) => (
                    <div
                      key={i}
                      className={`p-4 rounded-xl border ${
                        alert.active ? 'bg-neutral-800/50 border-white/10' : 'bg-neutral-800/30 border-white/5 opacity-60'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="text-white text-sm font-medium mb-1">{alert.property}</div>
                          <div className="flex items-center gap-2">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                              alert.type === 'Price Drop'
                                ? 'bg-red-500/20 text-red-400'
                                : alert.type === 'New Listing'
                                ? 'bg-emerald-500/20 text-emerald-400'
                                : 'bg-blue-500/20 text-blue-400'
                            }`}>
                              {alert.type}
                            </span>
                          </div>
                        </div>
                        <button className={`w-8 h-8 rounded-full flex items-center justify-center transition ${
                          alert.active ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-neutral-700 text-neutral-500'
                        }`}>
                          {alert.active ? <Bell className="w-3.5 h-3.5" /> : <BellOff className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                      <div className="text-[10px] text-neutral-500">{alert.condition}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Share & Export */}
              <div>
                <h4 className="text-white font-medium text-sm mb-4">Share & Export</h4>
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white text-black rounded-lg text-xs font-bold uppercase hover:bg-neutral-200 transition">
                    <LinkIcon className="w-4 h-4" />
                    Copy Link
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-3 bg-neutral-800 border border-white/10 text-white rounded-lg text-xs font-bold uppercase hover:bg-neutral-700 transition">
                    <Twitter className="w-4 h-4" />
                    Twitter
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-3 bg-neutral-800 border border-white/10 text-white rounded-lg text-xs font-bold uppercase hover:bg-neutral-700 transition">
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-3 bg-neutral-800 border border-white/10 text-white rounded-lg text-xs font-bold uppercase hover:bg-neutral-700 transition">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-3 bg-neutral-800 border border-white/10 text-white rounded-lg text-xs font-bold uppercase hover:bg-neutral-700 transition col-span-2">
                    <QrCode className="w-4 h-4" />
                    Generate QR Code
                  </button>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white text-sm">Email Report</span>
                    <span className="text-[10px] text-neutral-500">PDF • Excel</span>
                  </div>
                  <div className="flex gap-3">
                    <input
                      type="email"
                      placeholder="recipient@email.com"
                      className="flex-1 px-4 py-3 bg-neutral-800 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-[#C9A962] transition"
                    />
                    <button className="px-6 py-3 bg-[#C9A962] text-black rounded-lg text-xs font-bold uppercase hover:bg-[#C9A962]/90 transition">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Gallery Fullscreen Modal */}
      {galleryFullscreen && (
        <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
          <button
            onClick={() => setGalleryFullscreen(false)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur border border-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black transition z-10"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={property.images[currentImageIndex]}
            className="max-w-full max-h-full object-contain"
            alt="Property"
          />
        </div>
      )}
    </div>
  );
};

export default PropertyListing;
