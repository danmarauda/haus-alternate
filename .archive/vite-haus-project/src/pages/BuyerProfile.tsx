import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  User,
  SlidersHorizontal,
  Milestone,
  Landmark,
  FileText,
  MessageSquare,
  Camera,
  MapPin,
  Users,
  Baby,
  Briefcase,
  X,
  Check,
  Plus,
  Search,
  Eye,
  Gavel,
  PiggyBank,
  Calculator,
  ArrowDownUp,
  Phone,
  Mail,
} from "lucide-react";

// TypeScript Interfaces
interface Location {
  name: string;
  state: string;
}

interface CoApplicant {
  id: string;
  name: string;
  email: string;
  jobType: string;
  location: string;
  image: string;
  isHausUser: boolean;
  isLinked: boolean;
}

interface JourneyStage {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  selected: boolean;
}

interface Grant {
  id: string;
  name: string;
  description: string;
  checked: boolean;
}

// Data
const locations: Location[] = [
  { name: "Surry Hills", state: "NSW" },
  { name: "Redfern", state: "NSW" },
  { name: "Alexandria", state: "NSW" },
];

const coApplicants: CoApplicant[] = [
  {
    id: "1",
    name: "Tom Jenkins",
    email: "tom.jenkins@gmail.com",
    jobType: "Full Time",
    location: "Same Address",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop",
    isHausUser: true,
    isLinked: true,
  },
];

const journeyStages: JourneyStage[] = [
  {
    id: "researching",
    title: "Just Researching",
    description: "Watching market trends. Low alert frequency.",
    icon: Search,
    color: "blue",
    selected: false,
  },
  {
    id: "inspecting",
    title: "Inspecting",
    description: "Attending opens. Instant alerts on new listings.",
    icon: Eye,
    color: "emerald",
    selected: true,
  },
  {
    id: "ready",
    title: "Ready to Buy",
    description: "Pre-approved. Requesting contracts. High urgency.",
    icon: Gavel,
    color: "orange",
    selected: false,
  },
];

const grants: Grant[] = [
  {
    id: "fhba",
    name: "First Home Buyer Assistance Scheme",
    description: "Full or partial exemption on transfer duty for homes valued up to $1,000,000.",
    checked: true,
  },
  {
    id: "fhog",
    name: "First Home Owner Grant ($10,000)",
    description: "For buying or building a new home. Not eligible for existing properties.",
    checked: false,
  },
];

const BuyerProfile = () => {
  const [mounted, setMounted] = useState(false);
  const [buyingArrangement, setBuyingArrangement] = useState("single");
  const [selectedJourneyStage, setSelectedJourneyStage] = useState("inspecting");
  const [showCoApplicant, setShowCoApplicant] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (buyingArrangement !== "single") {
      setShowCoApplicant(true);
    } else {
      setShowCoApplicant(false);
    }
  }, [buyingArrangement]);

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-300">
      {/* Background Effects */}
      <div
        className="fixed inset-0 z-0 w-full h-full pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.05%22/%3E%3C/svg%3E')",
        }}
      />
      <div
        className="fixed inset-0 z-0 w-full h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 100% 0%, rgba(16, 185, 129, 0.04) 0%, transparent 40%)",
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full px-6 md:px-8 h-16 flex justify-between items-center z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="font-display text-lg font-medium tracking-tight flex items-center gap-2 group"
          >
            <div className="w-8 h-8 bg-emerald-600 text-white flex items-center justify-center font-bold tracking-tighter rounded-sm group-hover:scale-95 transition-transform duration-300">
              AU
            </div>
            <span className="text-white">
              PROP
              <span className="text-neutral-500">.BUYER</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-1">
            <Link
              to="/my-feed"
              className="px-3 py-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors rounded hover:bg-white/5"
            >
              My Feed
            </Link>
            <Link
              to="#"
              className="px-3 py-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors rounded hover:bg-white/5"
            >
              Watchlist
              <span className="ml-1 text-[10px] bg-neutral-800 px-1.5 py-0.5 rounded-full text-white">
                4
              </span>
            </Link>
            <span className="px-3 py-1.5 text-xs font-medium text-white bg-white/5 shadow-sm rounded border border-white/5">
              Profile
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[10px] font-mono font-medium text-neutral-300">
              MARKET: SYDNEY (AUCTION)
            </span>
          </div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 border border-white/20 ring-4 ring-black/50"></div>
        </div>
      </nav>

      {/* Content Wrapper */}
      <div className="relative z-10 pt-28 pb-12 px-6 md:px-8 max-w-[1280px] mx-auto">
        {/* Header Section */}
        <header
          className="mb-12"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(8px)",
            transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/5">
            <div className="flex items-end gap-6">
              <div className="relative group">
                <div className="w-24 h-24 rounded-full bg-neutral-800 relative overflow-hidden ring-1 ring-white/10 group-hover:ring-emerald-500/50 transition-all">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop"
                    className="w-full h-full object-cover"
                    alt="Profile"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer backdrop-blur-[2px]">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-display font-medium text-white tracking-tight mb-1">
                  Sarah Jenkins
                </h1>
                <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3" />
                    Sydney, NSW
                  </span>
                  <span className="w-1 h-1 bg-neutral-700 rounded-full"></span>
                  <span className="text-emerald-500">Active Buyer</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-right hidden sm:block">
                <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono mb-1">
                  Account Type
                </div>
                <div className="text-indigo-400 font-medium text-xs border border-indigo-500/20 bg-indigo-500/10 px-2 py-1 rounded">
                  FHB STARTER
                </div>
              </div>
              <button className="bg-white text-black hover:bg-neutral-200 px-4 py-2 rounded-lg text-xs font-semibold transition-colors flex items-center gap-2">
                Verify Identity
              </button>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-8 lg:gap-12">
          {/* Sidebar Nav */}
          <aside className="col-span-12 lg:col-span-3">
            <nav
              className="sticky top-32 space-y-1"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(8px)",
                transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
              }}
            >
              <a
                href="#profile"
                className="nav-item active flex items-center gap-3 px-3 py-2 text-xs font-medium rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent transition-all group"
              >
                <User className="w-4 h-4 group-hover:text-emerald-400 transition-colors" />
                Personal Profile
              </a>
              <a
                href="#criteria"
                className="nav-item flex items-center gap-3 px-3 py-2 text-xs font-medium rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent transition-all group"
              >
                <SlidersHorizontal className="w-4 h-4 group-hover:text-emerald-400 transition-colors" />
                Buying Criteria
              </a>
              <a
                href="#journey"
                className="nav-item flex items-center gap-3 px-3 py-2 text-xs font-medium rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent transition-all group"
              >
                <Milestone className="w-4 h-4 group-hover:text-emerald-400 transition-colors" />
                Journey Stage
              </a>
              <a
                href="#finance"
                className="nav-item flex items-center gap-3 px-3 py-2 text-xs font-medium rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent transition-all group"
              >
                <Landmark className="w-4 h-4 group-hover:text-emerald-400 transition-colors" />
                Finance & Grants
              </a>
              <div className="my-4 h-px bg-white/5 mx-3"></div>
              <div className="px-3 pb-2 text-[10px] font-mono uppercase tracking-widest text-neutral-600">
                Support
              </div>
              <a
                href="#"
                className="nav-item flex items-center gap-3 px-3 py-2 text-xs font-medium rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent transition-all group"
              >
                <FileText className="w-4 h-4 group-hover:text-emerald-400 transition-colors" />
                Contract Review
              </a>
              <a
                href="#"
                className="nav-item flex items-center gap-3 px-3 py-2 text-xs font-medium rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent transition-all group"
              >
                <MessageSquare className="w-4 h-4 group-hover:text-emerald-400 transition-colors" />
                Ask a Broker
              </a>
            </nav>
          </aside>

          {/* Main Settings Form */}
          <main
            className="col-span-12 lg:col-span-9 space-y-10"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(8px)",
              transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
            }}
          >
            {/* Identity Section */}
            <section id="profile">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-sm font-medium text-white font-display">
                  Buyer Details
                </h2>
                <span className="text-[10px] text-neutral-500 font-mono">
                  Used for contract autofill
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-[#0A0A0A] border border-white/5 rounded-xl">
                <div className="col-span-1 md:col-span-2 space-y-3">
                  <label className="text-xs text-neutral-400 font-medium">
                    Buying Arrangement
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { value: "single", icon: User, label: "Single" },
                      { value: "couple", icon: Users, label: "Couple" },
                      { value: "family", icon: Baby, label: "Family" },
                      { value: "syndicate", icon: Briefcase, label: "Syndicate" },
                    ].map((arr) => (
                      <label key={arr.value} className="cursor-pointer relative group">
                        <input
                          type="radio"
                          name="buying_entity"
                          value={arr.value}
                          className="peer sr-only"
                          checked={buyingArrangement === arr.value}
                          onChange={() => setBuyingArrangement(arr.value)}
                        />
                        <div className="p-3 rounded-lg border border-white/10 bg-white/5 peer-checked:bg-emerald-500/10 peer-checked:border-emerald-500 peer-checked:text-emerald-500 text-neutral-400 transition-all hover:bg-white/10 flex flex-col items-center gap-2">
                          <arr.icon className="w-4 h-4" />
                          <span className="text-[10px] font-medium">{arr.label}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                  <div className="h-px bg-white/5 w-full mt-5 mb-1"></div>
                </div>
                <div className="col-span-1 md:col-span-2 space-y-6">
                  {/* Primary Applicant */}
                  <div>
                    <h3 className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono mb-4">
                      Primary Applicant
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs text-neutral-400 font-medium">
                          Full Legal Name
                        </label>
                        <input
                          type="text"
                          defaultValue="Sarah Marie Jenkins"
                          className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none transition-all placeholder:text-neutral-700 font-mono focus:border-emerald-500/50 focus:bg-emerald-500/02"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs text-neutral-400 font-medium">
                          Email Address
                        </label>
                        <input
                          type="email"
                          defaultValue="sarah.jenkins@gmail.com"
                          className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none transition-all placeholder:text-neutral-700 font-mono focus:border-emerald-500/50 focus:bg-emerald-500/02"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs text-neutral-400 font-medium">
                          Mobile Number
                        </label>
                        <input
                          type="tel"
                          defaultValue="+61 412 000 000"
                          className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none transition-all placeholder:text-neutral-700 font-mono focus:border-emerald-500/50 focus:bg-emerald-500/02"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs text-neutral-400 font-medium">
                          Residency Status
                        </label>
                        <select className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none transition-all font-mono appearance-none focus:border-emerald-500/50">
                          <option>Australian Citizen</option>
                          <option>Permanent Resident</option>
                          <option>Foreign Buyer</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Dynamic Co-Applicant Section */}
                  {showCoApplicant && (
                    <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                      <div className="h-px bg-white/5 w-full mb-6"></div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono">
                          Co-Applicants & Partners
                        </h3>
                        <button className="text-[10px] flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors">
                          <Plus className="w-3 h-3" />
                          Add Another
                        </button>
                      </div>
                      {coApplicants.map((applicant) => (
                        <div
                          key={applicant.id}
                          className="p-4 rounded-xl bg-neutral-900/50 border border-white/10 hover:border-white/20 transition-all group relative overflow-hidden mb-3"
                        >
                          <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                            <button className="text-neutral-500 hover:text-white transition-colors">
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="relative shrink-0">
                              <div className="w-12 h-12 rounded-full bg-neutral-800 ring-2 ring-black overflow-hidden">
                                <img
                                  src={applicant.image}
                                  className="w-full h-full object-cover"
                                  alt={applicant.name}
                                />
                              </div>
                              <div className="absolute -bottom-1 -right-1 bg-[#0A0A0A] rounded-full p-0.5">
                                <div className="bg-emerald-500 rounded-full p-1">
                                  <Check className="w-2 h-2 text-black stroke-[4]" />
                                </div>
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs font-semibold text-white truncate">
                                  {applicant.name}
                                </span>
                                {applicant.isHausUser && (
                                  <span className="text-[9px] font-bold bg-emerald-500/10 text-emerald-500 px-1.5 py-0.5 rounded border border-emerald-500/20 whitespace-nowrap">
                                    HAUS USER
                                  </span>
                                )}
                              </div>
                              <div className="text-[11px] text-neutral-400 font-mono mb-2 truncate">
                                {applicant.email}
                              </div>
                              <div className="flex flex-wrap items-center gap-3">
                                <div className="flex items-center gap-1.5 text-[10px] text-neutral-500">
                                  <Briefcase className="w-3 h-3" />
                                  <span className="whitespace-nowrap">
                                    {applicant.jobType}
                                  </span>
                                </div>
                                <div className="flex items-center gap-1.5 text-[10px] text-neutral-500">
                                  <MapPin className="w-3 h-3" />
                                  <span className="whitespace-nowrap">
                                    {applicant.location}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 pt-3 border-t border-white/5 flex items-start gap-3">
                            <ArrowDownUp className="w-3.5 h-3.5 text-indigo-400 mt-0.5 shrink-0" />
                            <p className="text-[10px] text-indigo-200/60 leading-relaxed">
                              {applicant.name}
                              {"'s income and liability data is synced. "}
                              <a href="#" className="text-indigo-400 hover:underline">
                                View details
                              </a>
                            </p>
                          </div>
                        </div>
                      ))}
                      {/* Invite Slot */}
                      <div className="mt-3 p-4 rounded-xl border border-dashed border-white/10 hover:bg-white/5 hover:border-white/20 transition-all cursor-pointer flex items-center justify-center gap-2 text-neutral-500 hover:text-neutral-300">
                        <Mail className="w-4 h-4" />
                        <span className="text-xs font-medium">Invite via Email</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Buying Criteria */}
            <section id="criteria">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-sm font-medium text-white font-display">
                  Property Brief
                </h2>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-neutral-500 font-mono">
                    Alerts Enabled
                  </span>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                </div>
              </div>

              <div className="p-6 bg-[#0A0A0A] border border-white/5 rounded-xl space-y-8">
                {/* Locations */}
                <div className="space-y-3">
                  <label className="text-xs text-neutral-400 font-medium">
                    Priority Locations
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {locations.map((location, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs text-white"
                      >
                        <span>
                          {location.name}, {location.state}
                        </span>
                        <button className="hover:text-red-400 transition-colors">
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-dashed border-white/20 text-xs text-neutral-500 hover:text-white hover:border-white/40 transition-all">
                      <Plus className="w-3 h-3" />
                      Add Suburb
                    </button>
                  </div>
                </div>

                {/* Budget */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-xs text-neutral-400 font-medium">
                      Budget Range
                    </label>
                    <span className="text-xs font-mono text-emerald-400">
                      $650k - $1.2M
                    </span>
                  </div>
                  <div className="relative h-4 flex items-center">
                    <div className="absolute w-full h-1 bg-neutral-800 rounded-full"></div>
                    <div className="absolute h-1 bg-emerald-600 rounded-full left-[20%] right-[30%]"></div>
                    <div className="absolute left-[20%] w-4 h-4 bg-[#0A0A0A] border-2 border-emerald-500 rounded-full cursor-pointer z-10 transform -translate-x-2"></div>
                    <div className="absolute right-[30%] w-4 h-4 bg-[#0A0A0A] border-2 border-emerald-500 rounded-full cursor-pointer z-10 transform translate-x-2"></div>
                  </div>
                </div>

                {/* Property Type */}
                <div className="space-y-3">
                  <label className="text-xs text-neutral-400 font-medium">
                    Property Type
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {["Apartment", "Townhouse", "House", "Land"].map(
                      (type, index) => (
                        <label key={type} className="cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            defaultChecked={index < 2}
                          />
                          <div className="text-xs font-medium text-neutral-400 border border-white/10 rounded-lg py-2.5 text-center transition-all hover:bg-white/5 peer-checked:bg-emerald-500/10 peer-checked:border-emerald-500 peer-checked:text-emerald-500">
                            {type}
                          </div>
                        </label>
                      )
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="pt-4 border-t border-white/5">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1 space-y-4">
                      <h4 className="text-[10px] uppercase font-mono text-neutral-500 tracking-widest">
                        Must Haves
                      </h4>
                      <div className="space-y-3">
                        {["Parking Space", "Balcony / Outdoor"].map(
                          (feature, index) => (
                            <label
                              key={feature}
                              className="flex items-center gap-3 cursor-pointer group"
                            >
                              <div className="relative w-4 h-4 rounded border border-white/20 transition-all group-hover:border-white/40">
                                <input
                                  type="checkbox"
                                  className="absolute opacity-0 w-full h-full cursor-pointer"
                                  defaultChecked={index === 0}
                                />
                                <div className="absolute inset-0 rounded flex items-center justify-center transition-colors peer-checked:bg-emerald-500 peer-checked:border-emerald-500">
                                  <Check className="w-2.5 h-2.5 text-black hidden peer-checked:block" />
                                </div>
                              </div>
                              <span className="text-xs text-neutral-300">
                                {feature}
                              </span>
                            </label>
                          )
                        )}
                      </div>
                    </div>
                    <div className="flex-1 space-y-4">
                      <h4 className="text-[10px] uppercase font-mono text-neutral-500 tracking-widest">
                        Deal Breakers
                      </h4>
                      <div className="space-y-3">
                        <label className="flex items-center gap-3 cursor-pointer group">
                          <div className="relative w-4 h-4 rounded border border-white/20 transition-all group-hover:border-white/40">
                            <input
                              type="checkbox"
                              className="absolute opacity-0 w-full h-full cursor-pointer"
                              defaultChecked
                            />
                            <div className="absolute inset-0 rounded flex items-center justify-center transition-colors peer-checked:bg-emerald-500 peer-checked:border-emerald-500">
                              <Check className="w-2.5 h-2.5 text-black hidden peer-checked:block" />
                            </div>
                          </div>
                          <span className="text-xs text-neutral-300">
                            Main Road Frontage
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Buying Journey Stage */}
            <section id="journey">
              <h2 className="text-sm font-medium text-white font-display mb-6">
                Current Status
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {journeyStages.map((stage) => (
                  <div
                    key={stage.id}
                    onClick={() => setSelectedJourneyStage(stage.id)}
                    className={`relative p-5 rounded-xl border transition-all group cursor-pointer ${
                      selectedJourneyStage === stage.id
                        ? "border-emerald-500 bg-emerald-500/03"
                        : "border-white/10 bg-[#0A0A0A] hover:bg-white/5 hover:border-white/20"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center border ${
                          stage.color === "blue"
                            ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                            : stage.color === "emerald"
                            ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                            : "bg-orange-500/10 text-orange-400 border-orange-500/20"
                        }`}
                      >
                        <stage.icon className="w-4 h-4" />
                      </div>
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
                          selectedJourneyStage === stage.id
                            ? "border-emerald-500 bg-emerald-500"
                            : "border-white/20"
                        }`}
                      >
                        {selectedJourneyStage === stage.id && (
                          <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                        )}
                      </div>
                    </div>
                    <h3 className="text-xs font-semibold text-white mb-1">
                      {stage.title}
                    </h3>
                    <p className="text-[10px] text-neutral-400 leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Finance Section */}
            <section id="finance">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-sm font-medium text-white font-display flex items-center gap-2">
                  <PiggyBank className="w-4 h-4 text-emerald-500" />
                  Finance & Grants
                </h2>
              </div>

              <div className="bg-[#0A0A0A] border border-white/5 rounded-xl overflow-hidden">
                {/* Pre-approval Box */}
                <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono">
                      Pre-Approval Status
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-white font-medium">
                        Commonwealth Bank
                      </span>
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                        VERIFIED
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono">
                      Valid Until
                    </div>
                    <div className="text-xs text-white font-mono mt-1">
                      14 NOV 2024
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <label className="text-xs text-neutral-400 font-medium mb-3 block">
                      Eligible Schemes (State: NSW)
                    </label>

                    <div className="space-y-3">
                      {grants.map((grant) => (
                        <label
                          key={grant.id}
                          className="flex items-start gap-3 p-3 rounded-lg border border-white/5 bg-white/[0.02] cursor-pointer hover:bg-white/5 transition-colors"
                        >
                          <div className="relative w-4 h-4 mt-0.5 rounded border border-white/20 shrink-0">
                            <input
                              type="checkbox"
                              className="absolute opacity-0 w-full h-full cursor-pointer"
                              defaultChecked={grant.checked}
                            />
                            <div className="absolute inset-0 rounded flex items-center justify-center transition-colors peer-checked:bg-emerald-500 peer-checked:border-emerald-500">
                              <Check className="w-2.5 h-2.5 text-black hidden peer-checked:block" />
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-white font-medium">
                              {grant.name}
                            </div>
                            <p className="text-[10px] text-neutral-500 mt-1 leading-relaxed">
                              {grant.description}
                            </p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button className="text-xs text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-2 transition-colors">
                      <Calculator className="w-3 h-3" />
                      Recalculate Stamp Duty
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Danger Zone */}
            <div className="pt-10 mt-10 border-t border-white/5">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xs font-semibold text-neutral-400">
                    Pause Account
                  </h3>
                  <p className="text-[10px] text-neutral-500 mt-1">
                    Found a home? Pause alerts and stop billing.
                  </p>
                </div>
                <button className="px-4 py-2 rounded-lg border border-white/10 text-neutral-300 text-xs font-medium hover:bg-white/5 transition-colors">
                  Pause Account
                </button>
              </div>
            </div>

            {/* Save Actions */}
            <div className="sticky bottom-6 flex justify-end gap-3 pt-6">
              <button className="px-6 py-2.5 rounded-lg text-xs font-medium text-neutral-400 hover:text-white transition-colors">
                Reset
              </button>
              <button className="px-6 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium shadow-lg shadow-emerald-900/20 transition-all transform hover:scale-[1.02]">
                Update Profile
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default BuyerProfile;
