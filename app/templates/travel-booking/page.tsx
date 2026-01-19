"use client"

import { useState, useEffect } from "react"
import {
  ArrowLeft,
  ArrowRight,
  Bath,
  Bell,
  BedDouble,
  Bookmark,
  Calendar,
  CalendarCheck,
  CalendarDays,
  CalendarRange,
  ChevronRight,
  Compass,
  Flame,
  Headphones,
  Heart,
  Home,
  Info,
  Lock,
  MapPin,
  MapPinned,
  Menu,
  MessageCircle,
  MountainSnow,
  Plane,
  PlayCircle,
  Palmtree,
  Receipt,
  Search,
  ShieldCheck,
  Ship,
  SlidersHorizontal,
  Star,
  Tag,
  TrendingUp,
  Utensils,
  Users,
  UsersRound,
  UserRound,
  Wifi,
  Zap,
} from "lucide-react"
import { Card } from "@/components/ui/card"

interface Property {
  id: string
  name: string
  location: string
  image: string
  rating: number
  reviews: number
  pricePerNight: number
  bedrooms?: number
  bathrooms?: number
  guests?: number
  amenities?: Amenity[]
  isFeatured?: boolean
  isSuperHost?: boolean
}

interface Amenity {
  icon: typeof Wifi
  label: string
}

interface DateOption {
  day: number
  label: string
  selected: boolean
}

interface Category {
  id: string
  label: string
  icon: typeof Home
  selected: boolean
}

export default function TravelBookingPage() {
  // Time state
  const [currentTime, setCurrentTime] = useState("")

  // Screen 1 state
  const [notificationActive, setNotificationActive] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("villas")
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  // Screen 2 state
  const [guestsCount, setGuestsCount] = useState(2.4)

  // Screen 3 state
  const [isFavorited, setIsFavorited] = useState(false)
  const [selectedDates, setSelectedDates] = useState<number[]>([9, 10, 11, 12])

  // Tab states for all screens
  const [activeTab1, setActiveTab1] = useState("home")
  const [activeTab2, setActiveTab2] = useState("home")
  const [activeTab3, setActiveTab3] = useState("booking")

  // Update time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours()
      const minutes = now.getMinutes()
      setCurrentTime(`${hours}:${minutes.toString().padStart(2, "0")}`)
    }
    updateTime()
    const timer = setInterval(updateTime, 60000)
    return () => clearInterval(timer)
  }, [])

  // Animate guest count
  useEffect(() => {
    const timer = setInterval(() => {
      setGuestsCount((prev) => prev + Math.random() * 0.01)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  // Categories
  const categories: Category[] = [
    { id: "villas", label: "Villas", icon: Home, selected: true },
    { id: "flights", label: "Flights", icon: Plane, selected: false },
    { id: "resorts", label: "Resorts", icon: Palmtree, selected: false },
    { id: "cruises", label: "Cruises", icon: Ship, selected: false },
  ]

  // Featured property
  const featuredProperty: Property = {
    id: "1",
    name: "Azure Bay Residence",
    location: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=1974&auto=format&fit=crop",
    rating: 4.9,
    reviews: 238,
    pricePerNight: 850,
    isFeatured: true,
    isSuperHost: true,
  }

  // Booking property
  const bookingProperty: Property = {
    id: "2",
    name: "Mountain Peak Lodge",
    location: "Aspen, Colorado",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1974&auto=format&fit=crop",
    rating: 4.95,
    reviews: 238,
    pricePerNight: 1250,
    bedrooms: 6,
    bathrooms: 5,
    guests: 12,
    amenities: [
      { icon: Wifi, label: "Wi-Fi" },
      { icon: Utensils, label: "Kitchen" },
      { icon: Flame, label: "Fireplace" },
      { icon: MountainSnow, label: "Ski-in" },
    ],
  }

  // Date options
  const dateOptions: DateOption[] = [
    { day: 8, label: "SUN", selected: false },
    { day: 9, label: "MON", selected: true },
    { day: 10, label: "TUE", selected: true },
    { day: 11, label: "WED", selected: true },
    { day: 12, label: "THU", selected: true },
    { day: 13, label: "FRI", selected: false },
    { day: 14, label: "SAT", selected: false },
  ]

  // Pricing calculations
  const nights = selectedDates.length
  const pricePerNight = bookingProperty.pricePerNight
  const basePrice = nights * pricePerNight
  const serviceFee = 150
  const cleaningFee = 200
  const discount = 250
  const totalPrice = basePrice + serviceFee + cleaningFee - discount

  const toggleDate = (day: number) => {
    if (selectedDates.includes(day)) {
      setSelectedDates(selectedDates.filter((d) => d !== day))
    } else {
      setSelectedDates([...selectedDates, day].sort((a, b) => a - b))
    }
  }

  // Tab bar component
  const TabBar = ({
    activeTab,
    setActiveTab,
    tabs
  }: {
    activeTab: string
    setActiveTab: (tab: string) => void
    tabs: { id: string; icon: typeof Home; label: string }[]
  }) => (
    <div className="absolute bottom-0 left-0 right-0 bg-zinc-900/95 backdrop-blur-xl border-t border-zinc-800 px-6 py-3">
      <div className="flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex flex-col items-center gap-1 py-2 px-4 transition-colors"
            >
              <Icon className={`h-6 w-6 ${isActive ? "text-white" : "text-zinc-500"}`} />
              <span className={`text-[10px] font-medium ${isActive ? "text-white" : "text-zinc-500"}`}>
                {tab.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 flex items-center justify-center p-4 sm:p-8">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-cover bg-center blur-3xl opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80')"
        }} />
      </div>

      {/* 3 iPhone Frames */}
      <div className="flex items-center justify-center gap-4 sm:gap-8 lg:gap-10 flex-wrap lg:flex-nowrap">

        {/* Left iPhone: Discover Screen */}
        <Card className="relative w-[320px] sm:w-[360px] lg:w-[393px] h-[700px] sm:h-[800px] lg:h-[852px] bg-zinc-950 rounded-[46px] border border-zinc-800 overflow-hidden shadow-2xl">
          <div className="h-full flex flex-col overflow-y-auto pb-20">
            {/* Status Bar */}
            <div className="px-6 pt-6 pb-3 flex items-center justify-between text-zinc-400">
              <span className="text-sm font-medium">{currentTime}</span>
              <div className="flex items-center gap-2">
                <Signal className="h-4 w-4" />
                <Wifi className="h-4 w-4" />
                <BatteryCharging className="h-5 w-5" />
              </div>
            </div>

            {/* Header */}
            <div className="px-6 pb-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 text-white flex items-center justify-center">
                  <span className="text-[15px] font-semibold tracking-tighter">WL</span>
                </div>
                <div>
                  <h1 className="text-[24px] leading-6 font-semibold tracking-tight text-white">Wanderlux</h1>
                  <p className="text-[12px] text-zinc-500">Explore destinations</p>
                </div>
              </div>
              <button
                onClick={() => setNotificationActive(false)}
                className="relative h-11 w-11 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-zinc-300 transition-colors"
              >
                <Bell className="h-5 w-5" />
                {notificationActive && <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full" />}
              </button>
            </div>

            {/* Search */}
            <div className="px-6 mb-5">
              <div className="relative">
                <Search className="h-5 w-5 absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search destinations, experiences..."
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-white placeholder-zinc-500 ring-1 ring-zinc-800 focus:ring-2 focus:ring-zinc-700 focus:outline-none text-[14px] transition-all"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-white text-zinc-900 hover:bg-zinc-100 transition-colors">
                  <SlidersHorizontal className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="px-6 mb-6">
              <button className="w-full flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 ring-1 ring-zinc-800 hover:ring-zinc-700 transition-all">
                <div className="flex -space-x-3">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop" className="w-9 h-9 rounded-full ring-2 ring-zinc-900 object-cover" alt="" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop" className="w-9 h-9 rounded-full ring-2 ring-zinc-900 object-cover" alt="" />
                  <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop" className="w-9 h-9 rounded-full ring-2 ring-zinc-900 object-cover" alt="" />
                  <div className="w-9 h-9 rounded-full ring-2 ring-zinc-900 bg-zinc-700 flex items-center justify-center text-white text-[11px] font-semibold">+50</div>
                </div>
                <div className="flex-1 text-left">
                  <p className="text-[13px] font-semibold text-white">Join {guestsCount.toFixed(1)}M travelers</p>
                  <p className="text-[11px] text-zinc-500">Booking their dream stays</p>
                </div>
                <ArrowRight className="h-4 w-4 text-zinc-500" />
              </button>
            </div>

            {/* Categories */}
            <div className="px-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[18px] font-semibold tracking-tight text-white">Browse by type</h3>
                <button className="text-[13px] text-zinc-500 hover:text-white font-medium flex items-center gap-1 transition-colors">
                  View all
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {categories.map((category) => {
                  const Icon = category.icon
                  const isSelected = selectedCategory === category.id
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex flex-col items-center justify-center gap-2.5 p-4 rounded-2xl transition-all ${
                        isSelected
                          ? "bg-white text-zinc-900 shadow-lg"
                          : "bg-zinc-900 hover:bg-zinc-800 ring-1 ring-zinc-800 text-zinc-400"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                      <span className="text-[12px] font-medium">{category.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Featured Property */}
            <div className="px-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[18px] font-semibold tracking-tight text-white">Featured this week</h3>
                <button
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 ring-1 ring-zinc-800 transition-colors"
                >
                  <Bookmark className={`h-4 w-4 ${isBookmarked ? "fill-white text-white" : "text-zinc-600"}`} />
                </button>
              </div>
              <Card className="relative overflow-hidden rounded-3xl border-zinc-800 bg-zinc-900">
                <img src={featuredProperty.image} alt={featuredProperty.name} className="w-full h-56 object-cover" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-[11px] font-semibold text-zinc-900 flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    {featuredProperty.rating}
                  </span>
                  {featuredProperty.isSuperHost && (
                    <span className="px-3 py-1.5 rounded-full bg-emerald-500/95 backdrop-blur-sm text-[11px] font-semibold text-white">
                      Super Host
                    </span>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-[20px] font-semibold tracking-tight">{featuredProperty.name}</h4>
                      <p className="text-[13px] text-white/90 flex items-center gap-1 mt-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {featuredProperty.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[12px] text-white/80">from</p>
                      <p className="text-[19px] font-semibold tracking-tight">${featuredProperty.pricePerNight}<span className="text-[12px] font-medium">/night</span></p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    <button className="flex-1 px-4 py-2.5 rounded-xl bg-white hover:bg-white/90 text-zinc-900 text-[13px] font-medium transition-all flex items-center justify-center gap-2">
                      <CalendarCheck className="h-4 w-4" />
                      Book now
                    </button>
                    <button className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 ring-1 ring-white/30 text-white text-[13px] font-medium backdrop-blur transition-all flex items-center gap-2">
                      <Info className="h-4 w-4" />
                      Details
                    </button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Trust Indicators */}
            <div className="px-6 mb-6">
              <h4 className="text-[16px] font-semibold tracking-tight text-white mb-4">Why book with Wanderlux</h4>
              <div className="grid grid-cols-3 gap-3">
                <button className="p-4 rounded-2xl bg-zinc-900 ring-1 ring-zinc-800 hover:ring-zinc-700 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-emerald-900/50 flex items-center justify-center mb-3">
                    <ShieldCheck className="h-5 w-5 text-emerald-400" />
                  </div>
                  <p className="text-[12px] font-semibold text-white">Verified</p>
                  <p className="text-[11px] text-zinc-500 mt-1">All properties checked</p>
                </button>
                <button className="p-4 rounded-2xl bg-zinc-900 ring-1 ring-zinc-800 hover:ring-zinc-700 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-blue-900/50 flex items-center justify-center mb-3">
                    <Headphones className="h-5 w-5 text-blue-400" />
                  </div>
                  <p className="text-[12px] font-semibold text-white">24/7 Support</p>
                  <p className="text-[11px] text-zinc-500 mt-1">Always here to help</p>
                </button>
                <button className="p-4 rounded-2xl bg-zinc-900 ring-1 ring-zinc-800 hover:ring-zinc-700 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-purple-900/50 flex items-center justify-center mb-3">
                    <Zap className="h-5 w-5 text-purple-400" />
                  </div>
                  <p className="text-[12px] font-semibold text-white">Instant Book</p>
                  <p className="text-[11px] text-zinc-500 mt-1">Confirm in seconds</p>
                </button>
              </div>
            </div>

            <div className="h-8" />
          </div>

          {/* Tab Bar */}
          <TabBar
            activeTab={activeTab1}
            setActiveTab={setActiveTab1}
            tabs={[
              { id: "home", icon: Home, label: "Home" },
              { id: "discover", icon: Search, label: "Discover" },
              { id: "bookings", icon: CalendarDays, label: "Bookings" },
              { id: "account", icon: UserRound, label: "Account" },
            ]}
          />
        </Card>

        {/* Middle iPhone: Hero Landing */}
        <Card className="relative w-[320px] sm:w-[360px] lg:w-[393px] h-[700px] sm:h-[800px] lg:h-[852px] bg-zinc-950 rounded-[46px] border border-zinc-800 overflow-hidden shadow-2xl">
          <div className="h-full flex flex-col pb-20">
            {/* Status Bar */}
            <div className="px-6 pt-6 pb-3 flex items-center justify-between text-zinc-400">
              <span className="text-sm font-medium">{currentTime}</span>
              <div className="flex items-center gap-2">
                <Signal className="h-4 w-4" />
                <Wifi className="h-4 w-4" />
                <BatteryCharging className="h-5 w-5" />
              </div>
            </div>

            {/* Hero Section */}
            <div className="relative w-full h-[480px]">
              <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1974&auto=format&fit=crop" alt="Mountain Vista" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

              {/* Hero Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-medium text-white bg-white/10 ring-white/20 ring-1 rounded-full px-2.5 py-1.5 backdrop-blur-sm">
                    Premium Collection
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm ring-1 ring-white/20 text-[11px] font-medium text-white flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    Trending
                  </span>
                </div>
                <h1 className="mt-3 text-[38px] leading-[1.05] font-semibold tracking-tight">Discover Your Perfect Escape</h1>
                <p className="mt-3 text-[15px] leading-relaxed text-white/90">
                  Experience handpicked luxury stays in the world's most breathtaking destinations. From mountain lodges to coastal villas.
                </p>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <button className="flex-1 px-5 py-3.5 rounded-xl bg-white hover:bg-white/95 text-zinc-900 text-[14px] font-medium transition-all flex items-center justify-center gap-2 shadow-lg">
                      <Compass className="h-4 w-4" />
                      Start exploring
                    </button>
                    <button className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 ring-1 ring-white/30 text-white text-[14px] font-medium backdrop-blur transition-all flex items-center gap-2">
                      <PlayCircle className="h-4 w-4" />
                      Watch
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="px-6 py-6">
              <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-zinc-900 ring-1 ring-zinc-800 hover:ring-zinc-700 transition-all">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop" className="w-8 h-8 rounded-full ring-2 ring-zinc-900 object-cover" alt="" />
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop" className="w-8 h-8 rounded-full ring-2 ring-zinc-900 object-cover" alt="" />
                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop" className="w-8 h-8 rounded-full ring-2 ring-zinc-900 object-cover" alt="" />
                  </div>
                  <div className="text-left">
                    <p className="text-[13px] font-semibold text-white">Trusted by millions</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-[11px] text-zinc-500 ml-1">4.9 (12.5k reviews)</span>
                    </div>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-zinc-500" />
              </button>
            </div>

            {/* Quick Filters */}
            <div className="px-6">
              <h3 className="text-[15px] font-semibold tracking-tight text-white mb-4">Plan your trip</h3>
              <div className="grid grid-cols-3 gap-3">
                <button className="p-4 rounded-2xl bg-zinc-900 hover:bg-zinc-800 ring-1 ring-zinc-800 hover:ring-zinc-700 text-zinc-400 transition-all">
                  <CalendarRange className="h-5 w-5 mb-2" />
                  <p className="text-[12px] font-medium">Select dates</p>
                </button>
                <button className="p-4 rounded-2xl bg-zinc-900 hover:bg-zinc-800 ring-1 ring-zinc-800 hover:ring-zinc-700 text-zinc-400 transition-all">
                  <MapPinned className="h-5 w-5 mb-2" />
                  <p className="text-[12px] font-medium">Location</p>
                </button>
                <button className="p-4 rounded-2xl bg-zinc-900 hover:bg-zinc-800 ring-1 ring-zinc-800 hover:ring-zinc-700 text-zinc-400 transition-all">
                  <UsersRound className="h-5 w-5 mb-2" />
                  <p className="text-[12px] font-medium">Guests</p>
                </button>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="px-6 mt-6">
              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-zinc-900 ring-1 ring-zinc-800">
                <div className="text-center">
                  <p className="text-[20px] font-semibold tracking-tight text-white">{guestsCount.toFixed(1)}M+</p>
                  <p className="text-[11px] text-zinc-500 mt-0.5">Happy guests</p>
                </div>
                <div className="text-center border-x border-zinc-800">
                  <p className="text-[20px] font-semibold tracking-tight text-white">150+</p>
                  <p className="text-[11px] text-zinc-500 mt-0.5">Countries</p>
                </div>
                <div className="text-center">
                  <p className="text-[20px] font-semibold tracking-tight text-white">50k+</p>
                  <p className="text-[11px] text-zinc-500 mt-0.5">Properties</p>
                </div>
              </div>
            </div>

            <div className="mt-auto py-6" />
          </div>

          {/* Tab Bar */}
          <TabBar
            activeTab={activeTab2}
            setActiveTab={setActiveTab2}
            tabs={[
              { id: "home", icon: Home, label: "Home" },
              { id: "discover", icon: Search, label: "Discover" },
              { id: "bookings", icon: CalendarDays, label: "Bookings" },
              { id: "account", icon: UserRound, label: "Account" },
            ]}
          />
        </Card>

        {/* Right iPhone: Booking Details */}
        <Card className="relative w-[320px] sm:w-[360px] lg:w-[393px] h-[700px] sm:h-[800px] lg:h-[852px] bg-zinc-950 rounded-[46px] border border-zinc-800 overflow-hidden shadow-2xl">
          <div className="h-full flex flex-col overflow-y-auto pb-20">
            {/* Status Bar */}
            <div className="px-6 pt-6 pb-3 flex items-center justify-between text-zinc-400">
              <span className="text-sm font-medium">{currentTime}</span>
              <div className="flex items-center gap-2">
                <Signal className="h-4 w-4" />
                <Wifi className="h-4 w-4" />
                <BatteryCharging className="h-5 w-5" />
              </div>
            </div>

            {/* Header */}
            <div className="px-6 pb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 transition-colors">
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <h2 className="text-[22px] font-semibold tracking-tight text-white">Booking details</h2>
              </div>
              <button className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 transition-colors">
                <Share2 className="h-5 w-5" />
              </button>
            </div>

            {/* Property Card */}
            <div className="px-6 mb-5">
              <Card className="rounded-3xl ring-1 ring-zinc-800 overflow-hidden bg-zinc-900 shadow-sm hover:shadow-md transition-all">
                <div className="relative">
                  <img src={bookingProperty.image} alt={bookingProperty.name} className="w-full h-40 object-cover" />
                  <button
                    onClick={() => setIsFavorited(!isFavorited)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-all"
                  >
                    <Heart className={`h-5 w-5 ${isFavorited ? "fill-red-500 text-red-500" : "text-zinc-700"}`} />
                  </button>
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1.5 rounded-full bg-zinc-900/90 backdrop-blur-sm text-white text-[11px] font-semibold">Featured</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-[17px] font-semibold tracking-tight text-white">{bookingProperty.name}</h3>
                      <p className="text-[13px] text-zinc-500 flex items-center gap-1 mt-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {bookingProperty.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-[14px] font-semibold text-white">{bookingProperty.rating}</span>
                      </div>
                      <p className="text-[11px] text-zinc-600">{bookingProperty.reviews} reviews</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1.5 rounded-xl bg-zinc-800 ring-1 ring-zinc-700 text-[11px] font-medium text-zinc-400 flex items-center gap-1">
                      <BedDouble className="h-3.5 w-3.5" />
                      {bookingProperty.bedrooms} bedrooms
                    </span>
                    <span className="px-3 py-1.5 rounded-xl bg-zinc-800 ring-1 ring-zinc-700 text-[11px] font-medium text-zinc-400 flex items-center gap-1">
                      <Bath className="h-3.5 w-3.5" />
                      {bookingProperty.bathrooms} baths
                    </span>
                    <span className="px-3 py-1.5 rounded-xl bg-zinc-800 ring-1 ring-zinc-700 text-[11px] font-medium text-zinc-400 flex items-center gap-1">
                      <Users className="h-3.5 w-3.5" />
                      {bookingProperty.guests} guests
                    </span>
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    {bookingProperty.amenities?.map((amenity, idx) => {
                      const Icon = amenity.icon
                      return (
                        <button key={idx} className="flex flex-col items-center gap-1 p-2 rounded-xl bg-zinc-800 ring-1 ring-zinc-700 hover:ring-zinc-600 transition-all">
                          <Icon className="h-4 w-4 text-zinc-400" />
                          <span className="text-[10px] text-zinc-500">{amenity.label}</span>
                        </button>
                      )
                    })}
                  </div>

                  <div className="mt-4 pt-4 border-t border-zinc-800 flex items-center justify-between">
                    <div>
                      <p className="text-[12px] text-zinc-500">Price per night</p>
                      <p className="text-[22px] font-semibold tracking-tight text-white">${bookingProperty.pricePerNight.toLocaleString()}<span className="text-[14px] font-medium text-zinc-500">/night</span></p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Info className="h-4 w-4 text-zinc-500" />
                      <span className="text-[11px] text-zinc-500">+$150 fees</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Date Selection */}
            <div className="px-6 mb-5">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-[15px] font-semibold tracking-tight text-white">Select your dates</h4>
                <button className="text-[12px] text-zinc-500 hover:text-white font-medium flex items-center gap-1 transition-colors">
                  <Calendar className="h-3.5 w-3.5" />
                  View calendar
                </button>
              </div>
              <div className="grid grid-cols-7 gap-2 mb-3">
                {dateOptions.map((option) => (
                  <div key={option.day} className="text-center">
                    <p className="text-[10px] text-zinc-500 font-medium mb-1">{option.label}</p>
                    <button
                      onClick={() => toggleDate(option.day)}
                      className={`w-full aspect-square rounded-xl text-[13px] font-medium transition-all ${
                        selectedDates.includes(option.day)
                          ? "bg-white text-zinc-900 shadow-sm"
                          : "bg-zinc-900 hover:bg-zinc-800 ring-1 ring-zinc-800 text-zinc-500"
                      }`}
                    >
                      {option.day}
                    </button>
                  </div>
                ))}
              </div>
              {selectedDates.length > 0 && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-blue-900/20 ring-1 ring-blue-800">
                  <Info className="h-4 w-4 text-blue-400" />
                  <p className="text-[12px] text-blue-300">
                    {nights} night{nights !== 1 ? "s" : ""} selected (Dec {Math.min(...selectedDates)} - Dec {Math.max(...selectedDates)})
                  </p>
                </div>
              )}
            </div>

            {/* Pricing Breakdown */}
            <div className="px-6 mb-5">
              <h4 className="text-[15px] font-semibold tracking-tight text-white mb-3">Price breakdown</h4>
              <Card className="rounded-2xl bg-zinc-900 ring-1 ring-zinc-800 p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-[13px] text-zinc-500">${pricePerNight.toLocaleString()} × {nights} nights</p>
                  <p className="text-[14px] font-semibold text-white">${basePrice.toLocaleString()}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-[13px] text-zinc-500 flex items-center gap-1">
                    Service fee
                    <Info className="h-3 w-3 text-zinc-600" />
                  </p>
                  <p className="text-[14px] font-semibold text-white">${serviceFee}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-[13px] text-zinc-500">Cleaning fee</p>
                  <p className="text-[14px] font-semibold text-white">${cleaningFee}</p>
                </div>
                <div className="flex items-center justify-between text-emerald-400">
                  <p className="text-[13px] font-medium flex items-center gap-1">
                    <Tag className="h-3.5 w-3.5" />
                    Early bird discount
                  </p>
                  <p className="text-[14px] font-semibold">-${discount}</p>
                </div>
                <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
                  <p className="text-[14px] font-semibold text-white">Total</p>
                  <p className="text-[20px] font-semibold tracking-tight text-white">${totalPrice.toLocaleString()}</p>
                </div>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="px-6 mb-6">
              <Card className="rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 p-5 text-white shadow-lg ring-1 ring-zinc-800">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-[13px] text-zinc-400">Final amount</p>
                    <p className="text-[26px] font-semibold tracking-tight mt-1">${totalPrice.toLocaleString()}</p>
                    <p className="text-[12px] text-zinc-500 mt-1">Includes all taxes and fees</p>
                  </div>
                  <div className="p-2 rounded-xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                </div>
                <button className="w-full px-5 py-3.5 rounded-xl bg-white hover:bg-white/95 text-zinc-900 text-[14px] font-medium transition-all flex items-center justify-center gap-2 shadow-lg">
                  <Lock className="h-4 w-4" />
                  Proceed to payment
                </button>
                <p className="text-[11px] text-zinc-500 text-center mt-3">Free cancellation within 48 hours</p>
              </Card>
            </div>

            <div className="h-8" />
          </div>

          {/* Tab Bar */}
          <TabBar
            activeTab={activeTab3}
            setActiveTab={setActiveTab3}
            tabs={[
              { id: "search", icon: Search, label: "Search" },
              { id: "booking", icon: Receipt, label: "Booking" },
              { id: "inbox", icon: MessageCircle, label: "Inbox" },
              { id: "menu", icon: Menu, label: "Menu" },
            ]}
          />
        </Card>

      </div>
    </div>
  )
}

// Additional icon components
function Signal({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2 20h.01"></path>
      <path d="M7 20v-4"></path>
      <path d="M12 20v-8"></path>
      <path d="M17 20V8"></path>
      <path d="M22 4v16"></path>
    </svg>
  )
}

function BatteryCharging({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m11 7-3 5h4l-3 5"></path>
      <path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935"></path>
      <path d="M22 14v-4"></path>
      <path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936"></path>
    </svg>
  )
}

function Share2({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="18" cy="5" r="3"></circle>
      <circle cx="6" cy="12" r="3"></circle>
      <circle cx="18" cy="19" r="3"></circle>
      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
    </svg>
  )
}
