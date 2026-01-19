"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import {
  User,
  SlidersHorizontal,
  Milestone,
  Landmark,
  FileText,
  MessageSquare,
  MapPin,
  Camera,
  Check,
  X,
  Plus,
  Mail,
  Search,
  Eye,
  Gavel,
  PiggyBank,
  Calculator,
  Users,
  Baby,
  Briefcase,
} from "lucide-react"
import { cn } from "@/lib/utils"

// TypeScript Interfaces
interface Location {
  id: string
  name: string
  state: string
}

interface CoApplicant {
  id: string
  name: string
  email: string
  isHausUser: boolean
  employmentStatus: string
  addressSame: boolean
  avatar?: string
}

interface PropertyCriteria {
  locations: Location[]
  budgetRange: [number, number]
  propertyTypes: string[]
  mustHaves: string[]
  dealBreakers: string[]
}

interface JourneyStage {
  id: string
  label: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  color: string
}

export default function BuyerProfilePage() {
  // State Management
  const [buyingArrangement, setBuyingArrangement] = useState<string>("single")
  const [showCoApplicant, setShowCoApplicant] = useState<boolean>(false)
  const [journeyStage, setJourneyStage] = useState<string>("inspecting")
  const [budgetRange, setBudgetRange] = useState<[number, number]>([650000, 1200000])
  const [locations, setLocations] = useState<Location[]>([
    { id: "1", name: "Surry Hills", state: "NSW" },
    { id: "2", name: "Redfern", state: "NSW" },
    { id: "3", name: "Alexandria", state: "NSW" },
  ])
  const [propertyTypes, setPropertyTypes] = useState<string[]>(["apartment", "townhouse"])
  const [mustHaves, setMustHaves] = useState<string[]>(["parking"])
  const [dealBreakers, setDealBreakers] = useState<string[]>(["main-road"])
  const [selectedSchemes, setSelectedSchemes] = useState<string[]>(["fhb-assistance"])

  // Mock co-applicant data
  const coApplicants: CoApplicant[] = [
    {
      id: "1",
      name: "Tom Jenkins",
      email: "tom.jenkins@gmail.com",
      isHausUser: true,
      employmentStatus: "Full Time",
      addressSame: true,
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop",
    },
  ]

  // Journey stage options
  const journeyStages: JourneyStage[] = [
    {
      id: "researching",
      label: "Just Researching",
      description: "Watching market trends. Low alert frequency.",
      icon: Search,
      color: "blue",
    },
    {
      id: "inspecting",
      label: "Inspecting",
      description: "Attending opens. Instant alerts on new listings.",
      icon: Eye,
      color: "emerald",
    },
    {
      id: "ready",
      label: "Ready to Buy",
      description: "Pre-approved. Requesting contracts. High urgency.",
      icon: Gavel,
      color: "orange",
    },
  ]

  // Helper functions
  const formatPrice = (value: number): string => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`
    }
    return `$${(value / 1000).toFixed(0)}k`
  }

  const removeLocation = (id: string) => {
    setLocations((prev) => prev.filter((loc) => loc.id !== id))
  }

  const togglePropertyType = (type: string) => {
    setPropertyTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    )
  }

  const toggleMustHave = (item: string) => {
    setMustHaves((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    )
  }

  const toggleDealBreaker = (item: string) => {
    setDealBreakers((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    )
  }

  const toggleScheme = (scheme: string) => {
    setSelectedSchemes((prev) =>
      prev.includes(scheme) ? prev.filter((s) => s !== scheme) : [...prev, scheme]
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full px-4 sm:px-6 md:px-8 h-16 flex justify-between items-center z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="flex items-center gap-4 sm:gap-8">
          <a href="/" className="font-display text-lg font-medium tracking-tight flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center font-bold tracking-tighter rounded-sm group-hover:scale-95 transition-transform duration-300">
              AU
            </div>
            <span className="text-foreground">
              PROP
              <span className="text-muted-foreground">.BUYER</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-1">
            <a
              href="#"
              className="px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors rounded hover:bg-accent"
            >
              My Feed
            </a>
            <a
              href="#"
              className="px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors rounded hover:bg-accent flex items-center gap-1"
            >
              Watchlist
              <span className="ml-1 text-[10px] bg-muted px-1.5 py-0.5 rounded-full text-foreground">
                4
              </span>
            </a>
            <a
              href="#"
              className="px-3 py-1.5 text-xs font-medium text-foreground bg-accent shadow-sm rounded border border-border"
            >
              Profile
            </a>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-accent">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
            <span className="text-[10px] font-mono font-medium text-muted-foreground">
              MARKET: SYDNEY (AUCTION)
            </span>
          </div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 border border-border ring-4 ring-black/50"></div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-28 pb-12 px-4 sm:px-6 md:px-8 max-w-[1280px] mx-auto">
        {/* Header Section */}
        <header className="mb-12 animate-in opacity-0 translate-y-2 duration-500 fill-mode-forwards">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-6 sm:pb-8 border-b border-border">
            <div className="flex items-end gap-4 sm:gap-6">
              <div className="relative group">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-muted relative overflow-hidden ring-1 ring-border group-hover:ring-primary/50 transition-all">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop"
                    className="w-full h-full object-cover"
                    alt="Profile"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer backdrop-blur-[2px]">
                    <Camera className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-display font-medium text-foreground tracking-tight mb-1">
                  Sarah Jenkins
                </h1>
                <div className="flex items-center gap-2 sm:gap-3 text-xs text-muted-foreground font-mono">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3" />
                    Sydney, NSW
                  </span>
                  <span className="w-1 h-1 bg-muted rounded-full"></span>
                  <span className="text-primary">Active Buyer</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 sm:gap-3">
              <div className="text-right hidden sm:block">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono mb-1">
                  Account Type
                </div>
                <div className="text-indigo-400 font-medium text-xs border border-indigo-500/20 bg-indigo-500/10 px-2 py-1 rounded">
                  FHB STARTER
                </div>
              </div>
              <Button className="bg-foreground text-background hover:bg-muted-foreground px-3 sm:px-4 py-2 rounded-lg text-xs font-semibold transition-colors">
                Verify Identity
              </Button>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
          {/* Sidebar Navigation */}
          <aside className="col-span-12 lg:col-span-3">
            <nav className="sticky top-32 space-y-1 animate-in opacity-0 translate-y-2 delay-100 duration-500 fill-mode-forwards">
              {[
                { id: "profile", label: "Personal Profile", icon: User },
                { id: "criteria", label: "Buying Criteria", icon: SlidersHorizontal },
                { id: "journey", label: "Journey Stage", icon: Milestone },
                { id: "finance", label: "Finance & Grants", icon: Landmark },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={cn(
                    "nav-item flex items-center gap-3 px-3 py-2 text-xs font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent border border-transparent transition-all group"
                  )}
                >
                  <item.icon className="w-4 h-4 group-hover:text-primary transition-colors" />
                  {item.label}
                </a>
              ))}
              <div className="my-4 h-px bg-border mx-3"></div>
              <div className="px-3 pb-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground/60">
                Support
              </div>
              {[
                { id: "contract", label: "Contract Review", icon: FileText },
                { id: "broker", label: "Ask a Broker", icon: MessageSquare },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="nav-item flex items-center gap-3 px-3 py-2 text-xs font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent border border-transparent transition-all group"
                >
                  <item.icon className="w-4 h-4 group-hover:text-primary transition-colors" />
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main Settings Form */}
          <main className="col-span-12 lg:col-span-9 space-y-8 sm:space-y-10 animate-in opacity-0 translate-y-2 delay-200 duration-500 fill-mode-forwards">
            {/* Identity Section */}
            <section id="profile">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h2 className="text-sm font-medium text-foreground font-display">
                  Buyer Details
                </h2>
                <span className="text-[10px] text-muted-foreground font-mono">
                  Used for contract autofill
                </span>
              </div>

              <Card className="p-4 sm:p-6 bg-card border-border">
                <div className="space-y-6">
                  {/* Buying Arrangement */}
                  <div className="space-y-3">
                    <Label className="text-xs text-muted-foreground font-medium">
                      Buying Arrangement
                    </Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
                      {[
                        { value: "single", label: "Single", icon: User },
                        { value: "couple", label: "Couple", icon: Users },
                        { value: "family", label: "Family", icon: Baby },
                        { value: "syndicate", label: "Syndicate", icon: Briefcase },
                      ].map((arr) => (
                        <label
                          key={arr.value}
                          className={cn(
                            "cursor-pointer relative group",
                            buyingArrangement === arr.value && "selected"
                          )}
                        >
                          <input
                            type="radio"
                            name="buying_entity"
                            value={arr.value}
                            className="peer sr-only"
                            checked={buyingArrangement === arr.value}
                            onChange={(e) => {
                              setBuyingArrangement(e.target.value)
                              setShowCoApplicant(e.target.value !== "single")
                            }}
                          />
                          <div className="p-2.5 sm:p-3 rounded-lg border border-border bg-accent peer-checked:bg-primary/10 peer-checked:border-primary peer-checked:text-primary text-muted-foreground transition-all hover:bg-accent/50 flex flex-col items-center gap-1.5 sm:gap-2">
                            <arr.icon className="w-4 h-4" />
                            <span className="text-[10px] font-medium">{arr.label}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                    <div className="h-px bg-border w-full mt-4"></div>
                  </div>

                  {/* Primary Applicant */}
                  <div>
                    <h3 className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono mb-4">
                      Primary Applicant
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-2">
                        <Label className="text-xs text-muted-foreground font-medium">
                          Full Legal Name
                        </Label>
                        <Input
                          type="text"
                          defaultValue="Sarah Marie Jenkins"
                          className="w-full bg-background border-border text-xs font-mono"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs text-muted-foreground font-medium">
                          Email Address
                        </Label>
                        <Input
                          type="email"
                          defaultValue="sarah.jenkins@gmail.com"
                          className="w-full bg-background border-border text-xs font-mono"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs text-muted-foreground font-medium">
                          Mobile Number
                        </Label>
                        <Input
                          type="tel"
                          defaultValue="+61 412 000 000"
                          className="w-full bg-background border-border text-xs font-mono"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs text-muted-foreground font-medium">
                          Residency Status
                        </Label>
                        <Select defaultValue="citizen">
                          <SelectTrigger className="w-full bg-background border-border text-xs font-mono">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="citizen">Australian Citizen</SelectItem>
                            <SelectItem value="permanent">Permanent Resident</SelectItem>
                            <SelectItem value="foreign">Foreign Buyer</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Co-Applicant Section */}
                  {showCoApplicant && (
                    <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                      <div className="h-px bg-border w-full mb-6"></div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">
                          Co-Applicants & Partners
                        </h3>
                        <Button variant="ghost" size="sm" className="text-[10px] text-primary hover:text-primary/80 gap-1.5 h-auto p-0">
                          <PlusCircle className="w-3 h-3" />
                          Add Another
                        </Button>
                      </div>
                      {/* Linked Profile Card */}
                      {coApplicants.map((applicant) => (
                        <Card
                          key={applicant.id}
                          className="p-3 sm:p-4 bg-muted/50 border-border hover:border-border/80 transition-all group relative overflow-hidden"
                        >
                          <div className="absolute top-0 right-0 p-2 sm:p-3 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-muted-foreground hover:text-foreground h-6 w-6 p-0"
                            >
                              <X className="w-3 h-3 sm:w-4 sm:h-4" />
                            </Button>
                          </div>
                          <div className="flex items-start gap-3 sm:gap-4">
                            <div className="relative shrink-0">
                              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-muted ring-2 ring-background overflow-hidden">
                                <img
                                  src={applicant.avatar}
                                  className="w-full h-full object-cover"
                                  alt={applicant.name}
                                />
                              </div>
                              <div className="absolute -bottom-1 -right-1 bg-background rounded-full p-0.5">
                                <div className="bg-primary rounded-full p-0.5 sm:p-1">
                                  <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-background stroke-[4]" />
                                </div>
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
                                <span className="text-xs font-semibold text-foreground truncate">
                                  {applicant.name}
                                </span>
                                {applicant.isHausUser && (
                                  <Badge className="text-[8px] sm:text-[9px] font-bold bg-primary/10 text-primary border-primary/20 whitespace-nowrap px-1.5 py-0 h-auto">
                                    HAUS USER
                                  </Badge>
                                )}
                              </div>
                              <div className="text-[10px] sm:text-[11px] text-muted-foreground font-mono mb-1.5 sm:mb-2 truncate">
                                {applicant.email}
                              </div>
                              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                                <div className="flex items-center gap-1 text-[9px] sm:text-[10px] text-muted-foreground">
                                  <Briefcase className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                                  <span className="whitespace-nowrap">{applicant.employmentStatus}</span>
                                </div>
                                {applicant.addressSame && (
                                  <div className="flex items-center gap-1 text-[9px] sm:text-[10px] text-muted-foreground">
                                    <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                                    <span className="whitespace-nowrap">Same Address</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-border flex items-start gap-2.5 sm:gap-3">
                            <Briefcase className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-indigo-400 mt-0.5 shrink-0" />
                            <p className="text-[9px] sm:text-[10px] text-indigo-200/60 leading-relaxed">
                              {applicant.name}&apos;s income and liability data is synced.
                              <a href="#" className="text-indigo-400 hover:underline ml-1">
                                View details
                              </a>
                            </p>
                          </div>
                        </Card>
                      ))}
                      {/* Invite Slot */}
                      <Card className="mt-3 p-3 sm:p-4 border-dashed border-border hover:bg-accent/50 hover:border-border/80 transition-all cursor-pointer flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground">
                        <Mail className="w-4 h-4" />
                        <span className="text-xs font-medium">Invite via Email</span>
                      </Card>
                    </div>
                  )}
                </div>
              </Card>
            </section>

            {/* Buying Criteria */}
            <section id="criteria">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h2 className="text-sm font-medium text-foreground font-display">
                  Property Brief
                </h2>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-muted-foreground font-mono">
                    Alerts Enabled
                  </span>
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                </div>
              </div>

              <Card className="p-4 sm:p-6 bg-card border-border space-y-6 sm:space-y-8">
                {/* Locations */}
                <div className="space-y-3">
                  <Label className="text-xs text-muted-foreground font-medium">
                    Priority Locations
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    {locations.map((loc) => (
                      <Badge
                        key={loc.id}
                        variant="secondary"
                        className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-accent border-border text-xs text-foreground gap-1.5"
                      >
                        <span>{loc.name}, {loc.state}</span>
                        <button
                          onClick={() => removeLocation(loc.id)}
                          className="hover:text-destructive transition-colors"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    ))}
                    <Button
                      variant="outline"
                      size="sm"
                      className="px-2.5 sm:px-3 py-1 sm:py-1.5 border-dashed text-xs text-muted-foreground hover:text-foreground h-auto"
                    >
                      <Plus className="w-3 h-3 mr-1" />
                      Add Suburb
                    </Button>
                  </div>
                </div>

                {/* Budget */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Label className="text-xs text-muted-foreground font-medium">
                      Budget Range
                    </Label>
                    <span className="text-xs font-mono text-primary">
                      {formatPrice(budgetRange[0])} - {formatPrice(budgetRange[1])}
                    </span>
                  </div>
                  <Slider
                    min={300000}
                    max={3000000}
                    step={50000}
                    value={budgetRange}
                    onValueChange={(value) => setBudgetRange(value as [number, number])}
                    className="py-4"
                  />
                </div>

                {/* Property Type */}
                <div className="space-y-3">
                  <Label className="text-xs text-muted-foreground font-medium">
                    Property Type
                  </Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
                    {[
                      { value: "apartment", label: "Apartment" },
                      { value: "townhouse", label: "Townhouse" },
                      { value: "house", label: "House" },
                      { value: "land", label: "Land" },
                    ].map((type) => (
                      <label
                        key={type.value}
                        className={cn(
                          "cursor-pointer",
                          propertyTypes.includes(type.value) && "selected"
                        )}
                      >
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={propertyTypes.includes(type.value)}
                          onChange={() => togglePropertyType(type.value)}
                        />
                        <div className="text-xs font-medium text-muted-foreground border border-border rounded-lg py-2.5 text-center transition-all hover:bg-accent/50 peer-checked:bg-primary/10 peer-checked:border-primary peer-checked:text-primary">
                          {type.label}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="pt-4 border-t border-border">
                  <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
                    <div className="flex-1 space-y-4">
                      <h4 className="text-[10px] uppercase font-mono text-muted-foreground tracking-widest">
                        Must Haves
                      </h4>
                      <div className="space-y-3">
                        {[
                          { value: "parking", label: "Parking Space" },
                          { value: "balcony", label: "Balcony / Outdoor" },
                        ].map((item) => (
                          <label key={item.value} className="flex items-center gap-3 cursor-pointer group">
                            <Checkbox
                              checked={mustHaves.includes(item.value)}
                              onCheckedChange={() => toggleMustHave(item.value)}
                            />
                            <span className="text-xs text-foreground">{item.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="flex-1 space-y-4">
                      <h4 className="text-[10px] uppercase font-mono text-muted-foreground tracking-widest">
                        Deal Breakers
                      </h4>
                      <div className="space-y-3">
                        {[
                          { value: "main-road", label: "Main Road Frontage" },
                        ].map((item) => (
                          <label key={item.value} className="flex items-center gap-3 cursor-pointer group">
                            <Checkbox
                              checked={dealBreakers.includes(item.value)}
                              onCheckedChange={() => toggleDealBreaker(item.value)}
                            />
                            <span className="text-xs text-foreground">{item.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Buying Journey Stage */}
            <section id="journey">
              <h2 className="text-sm font-medium text-foreground font-display mb-4 sm:mb-6">
                Current Status
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                {journeyStages.map((stage) => {
                  const Icon = stage.icon
                  const isSelected = journeyStage === stage.id
                  return (
                    <Card
                      key={stage.id}
                      className={cn(
                        "relative p-4 sm:p-5 rounded-xl border border-border bg-card hover:bg-accent/50 cursor-pointer transition-all group hover:border-border/80",
                        isSelected && "border-primary bg-primary/5"
                      )}
                      onClick={() => setJourneyStage(stage.id)}
                    >
                      <div className="flex justify-between items-start mb-3 sm:mb-4">
                        <div
                          className={cn(
                            "w-8 h-8 rounded-lg flex items-center justify-center border transition-all",
                            isSelected
                              ? `bg-${stage.color}-500/10 text-${stage.color}-500 border-${stage.color}-500/20`
                              : "bg-muted text-muted-foreground border-border"
                          )}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div
                          className={cn(
                            "w-4 h-4 rounded-full border flex items-center justify-center transition-all",
                            isSelected ? "border-primary bg-primary" : "border-border"
                          )}
                        >
                          {isSelected && (
                            <div className="w-2 h-2 rounded-full bg-background"></div>
                          )}
                        </div>
                      </div>
                      <h3 className="text-xs font-semibold text-foreground mb-1">
                        {stage.label}
                      </h3>
                      <p className="text-[10px] text-muted-foreground leading-relaxed">
                        {stage.description}
                      </p>
                    </Card>
                  )
                })}
              </div>
            </section>

            {/* Finance Section */}
            <section id="finance">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h2 className="text-sm font-medium text-foreground font-display flex items-center gap-2">
                  <PiggyBank className="w-4 h-4 text-primary" />
                  Finance & Grants
                </h2>
              </div>

              <Card className="bg-card border-border overflow-hidden">
                {/* Pre-approval Box */}
                <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">
                      Pre-Approval Status
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-foreground font-medium">
                        Commonwealth Bank
                      </span>
                      <Badge className="text-[9px] font-bold bg-primary/10 text-primary border-primary/20">
                        VERIFIED
                      </Badge>
                    </div>
                  </div>
                  <div className="sm:text-right">
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">
                      Valid Until
                    </div>
                    <div className="text-xs text-foreground font-mono mt-1">
                      14 NOV 2024
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-6 space-y-4">
                  <div className="space-y-3">
                    <Label className="text-xs text-muted-foreground font-medium">
                      Eligible Schemes (State: NSW)
                    </Label>

                    <div className="space-y-3">
                      {[
                        {
                          value: "fhb-assistance",
                          title: "First Home Buyer Assistance Scheme",
                          description:
                            "Full or partial exemption on transfer duty for homes valued up to $1,000,000.",
                        },
                        {
                          value: "fhb-grant",
                          title: "First Home Owner Grant ($10,000)",
                          description:
                            "For buying or building a new home. Not eligible for existing properties.",
                        },
                      ].map((scheme) => (
                        <label
                          key={scheme.value}
                          className="flex items-start gap-3 p-3 rounded-lg border border-border bg-accent/5 cursor-pointer hover:bg-accent/10 transition-colors"
                        >
                          <Checkbox
                            checked={selectedSchemes.includes(scheme.value)}
                            onCheckedChange={() => toggleScheme(scheme.value)}
                          />
                          <div className="flex-1">
                            <div className="text-xs text-foreground font-medium">{scheme.title}</div>
                            <p className="text-[10px] text-muted-foreground mt-1 leading-relaxed">
                              {scheme.description}
                            </p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button variant="ghost" size="sm" className="text-xs text-indigo-400 hover:text-indigo-300 font-medium gap-2 h-auto p-0">
                      <Calculator className="w-3 h-3" />
                      Recalculate Stamp Duty
                    </Button>
                  </div>
                </div>
              </Card>
            </section>

            {/* Danger Zone */}
            <div className="pt-8 sm:pt-10 mt-8 sm:mt-10 border-t border-border">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <div>
                  <h3 className="text-xs font-semibold text-muted-foreground">Pause Account</h3>
                  <p className="text-[10px] text-muted-foreground mt-1">
                    Found a home? Pause alerts and stop billing.
                  </p>
                </div>
                <Button variant="outline" className="px-4 py-2 rounded-lg text-xs font-medium border-border hover:bg-accent">
                  Pause Account
                </Button>
              </div>
            </div>

            {/* Save Actions */}
            <div className="sticky bottom-6 flex justify-end gap-3 pt-4 sm:pt-6">
              <Button variant="ghost" className="px-4 sm:px-6 py-2.5 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground h-auto sm:h-auto">
                Reset
              </Button>
              <Button className="px-4 sm:px-6 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-medium shadow-lg shadow-primary/20 transition-all hover:scale-[1.02]">
                Update Profile
              </Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
