import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  LayoutGrid,
  Home,
  BarChart2,
  Percent,
  Map,
  Users,
  Megaphone,
  Printer,
  Share,
  ArrowRight,
  AlignLeft,
  Maximize,
  FileText,
  FileCheck,
  Download,
  ListChecks,
  GraduationCap,
  FileWarning,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  PieChart,
  Building2,
  Globe,
  Mail,
  Star,
  Brush,
  Flower2,
  Hammer,
  Sparkles,
  Gavel,
  Check,
  XCircle,
  User,
  DoorOpen,
  Search,
} from "lucide-react";

// Types
interface ComparableSale {
  id: string;
  address: string;
  price: string;
  beds: number;
  baths: number;
  cars: number;
  size: string;
  soldDate: string;
  image: string;
  notes: string;
}

interface BuyerInterest {
  id: string;
  name: string;
  type: "individual" | "company" | "investor";
  icon: any;
  budget: string;
  status: string;
  matchLevel: "high" | "med" | "low";
  color: string;
}

interface Recommendation {
  id: string;
  title: string;
  description: string;
  cost: string;
  roi: string;
  icon: any;
  enabled: boolean;
}

interface MarketingOption {
  id: string;
  name: string;
  description: string;
  price: string;
  recommended: boolean;
}

const AppraisalReport = () => {
  const [mounted, setMounted] = useState(false);
  const [commission, setCommission] = useState(1.8);
  const [selectedMarketing, setSelectedMarketing] = useState("premium");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Comparable sales data
  const comparableSales: ComparableSale[] = [
    {
      id: "1",
      address: "42 Cooper Street",
      price: "$2,550,000",
      beds: 3,
      baths: 2,
      cars: 1,
      size: "142 sqm",
      soldDate: "OCT 24",
      image:
        "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg",
      notes: "Superior renovation but smaller land size compared to subject property. Inferior street appeal.",
    },
    {
      id: "2",
      address: "19 Richards Avenue",
      price: "$2,380,000",
      beds: 3,
      baths: 1,
      cars: 0,
      size: "128 sqm",
      soldDate: "SEP 24",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=500&auto=format&fit=crop",
      notes: "Similar land size. Unrenovated condition. Good proxy for land value base.",
    },
  ];

  // Buyer interest data
  const buyerInterests: BuyerInterest[] = [
    {
      id: "1",
      name: "Sarah & James",
      type: "individual",
      icon: User,
      budget: "$2.4m - $2.7m",
      status: "Pre-approved",
      matchLevel: "high",
      color: "blue",
    },
    {
      id: "2",
      name: "Equity Partners Ltd",
      type: "company",
      icon: Building2,
      budget: "$2.8m",
      status: "Cash Buyer",
      matchLevel: "med",
      color: "purple",
    },
    {
      id: "3",
      name: "International Investor",
      type: "investor",
      icon: Globe,
      budget: "$2.5m+",
      status: "Yield Focused",
      matchLevel: "low",
      color: "orange",
    },
  ];

  // Recommendations
  const recommendations: Recommendation[] = [
    {
      id: "1",
      title: "Internal Painting",
      description: "Refresh living areas and hallway to brighten space.",
      cost: "$3,500",
      roi: "3x",
      icon: Brush,
      enabled: true,
    },
    {
      id: "2",
      title: "Courtyard Landscaping",
      description: "New paving and vertical garden installation.",
      cost: "$2,000",
      roi: "2x",
      icon: Flower2,
      enabled: true,
    },
    {
      id: "3",
      title: "Bathroom Update",
      description: "Major works not recommended given current timeline.",
      cost: "",
      roi: "",
      icon: Hammer,
      enabled: false,
    },
  ];

  // Marketing options
  const marketingOptions: MarketingOption[] = [
    {
      id: "essentials",
      name: "Essentials",
      description: "Digital only, Photography, Floorplan, Copywriting.",
      price: "$2,500",
      recommended: false,
    },
    {
      id: "premium",
      name: "Premium",
      description: "Styling, Video, Premier Listings (REA/Domain), Social Boost.",
      price: "$5,800",
      recommended: true,
    },
    {
      id: "platinum",
      name: "Platinum",
      description: "Full Print Campaign, PR Media, Twilight Shoot, 3D Tour.",
      price: "$9,200",
      recommended: false,
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  const getMatchBadge = (level: string) => {
    switch (level) {
      case "high":
        return (
          <span className="text-[10px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
            High Match
          </span>
        );
      case "med":
        return (
          <span className="text-[10px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
            Med Match
          </span>
        );
      case "low":
        return (
          <span className="text-[10px] font-medium text-yellow-400 bg-yellow-500/10 px-2 py-1 rounded border border-yellow-500/20">
            Low Match
          </span>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full px-6 h-16 flex justify-between items-center z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-lg font-bold tracking-tight text-white flex items-center gap-2"
            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
          >
            <Home className="w-5 h-5" />
            HAUS
            <span className="text-neutral-600 font-normal">.APPRAISAL</span>
          </Link>
          <div className="h-4 w-px bg-white/10 hidden md:block" />
          <div className="flex items-center gap-2 text-xs text-neutral-400 hidden md:flex">
            <span className="hover:text-white cursor-pointer transition-colors">
              Properties
            </span>
            <span className="text-neutral-700">/</span>
            <span className="text-white">128 Crown St, Surry Hills</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 uppercase tracking-wide">
              Draft
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[10px] text-neutral-500 font-mono hidden md:block">
            Last saved just now
          </span>
          <button className="p-2 text-neutral-400 hover:text-white transition-colors border border-transparent hover:border-white/10 rounded-md">
            <Printer className="w-4 h-4" />
          </button>
          <button className="p-2 text-neutral-400 hover:text-white transition-colors border border-transparent hover:border-white/10 rounded-md">
            <Share className="w-4 h-4" />
          </button>
          <button className="bg-white text-black px-4 py-1.5 rounded text-xs font-semibold hover:bg-neutral-200 transition-colors flex items-center gap-2">
            <span>Generate Proposal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-20 left-4 z-50 p-2 rounded-lg bg-[#0A0A0A] border border-white/10"
      >
        <LayoutGrid className="w-5 h-5" />
      </button>

      <div className="flex pt-20">
        {/* Sidebar Navigation */}
        <aside
          className={`hidden lg:flex flex-col sticky top-24 h-[calc(100vh-8rem)] shrink-0 w-[60px] transition-[width] duration-500 bg-[#050505] z-40 group border-r border-white/5 rounded-r-xl overflow-hidden hover:w-[190px]`}
        >
          <nav className="flex flex-col gap-2 h-full p-3">
            <a
              href="#overview"
              className="flex items-center px-2 py-2.5 text-white bg-white/5 rounded-lg border border-white/5 relative overflow-hidden whitespace-nowrap group/link"
            >
              <LayoutGrid className="w-5 h-5 shrink-0 transition-transform group-hover/link:scale-110" />
              <span className="ml-3 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                Overview
              </span>
            </a>
            <a
              href="#details"
              className="flex items-center px-2 py-2.5 text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors whitespace-nowrap group/link"
            >
              <Home className="w-5 h-5 shrink-0 transition-transform group-hover/link:scale-110" />
              <span className="ml-3 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                Property Details
              </span>
            </a>
            <a
              href="#comps"
              className="flex items-center px-2 py-2.5 text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors whitespace-nowrap group/link"
            >
              <BarChart2 className="w-5 h-5 shrink-0 transition-transform group-hover/link:scale-110" />
              <span className="ml-3 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                Comparable Sales
              </span>
            </a>
            <a
              href="#rental"
              className="flex items-center px-2 py-2.5 text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors whitespace-nowrap group/link"
            >
              <Percent className="w-5 h-5 shrink-0 transition-transform group-hover/link:scale-110" />
              <span className="ml-3 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                Rental Appraisal
              </span>
            </a>
            <a
              href="#insights"
              className="flex items-center px-2 py-2.5 text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors whitespace-nowrap group/link"
            >
              <Map className="w-5 h-5 shrink-0 transition-transform group-hover/link:scale-110" />
              <span className="ml-3 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                Market Insights
              </span>
            </a>
            <a
              href="#buyers"
              className="flex items-center px-2 py-2.5 text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors whitespace-nowrap group/link"
            >
              <Users className="w-5 h-5 shrink-0 transition-transform group-hover/link:scale-110" />
              <span className="ml-3 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                Buyer Activity
              </span>
            </a>
            <a
              href="#marketing"
              className="flex items-center px-2 py-2.5 text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors whitespace-nowrap group/link"
            >
              <Megaphone className="w-5 h-5 shrink-0 transition-transform group-hover/link:scale-110" />
              <span className="ml-3 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                Marketing Plan
              </span>
            </a>

            <div className="mt-auto pt-4 border-t border-white/5">
              <div className="flex items-center gap-3 px-1 py-2 overflow-hidden whitespace-nowrap">
                <div className="w-8 h-8 shrink-0 rounded-full bg-neutral-800 flex items-center justify-center text-[10px] font-medium text-white border border-white/10">
                  JD
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <div className="text-xs text-white">John Doe</div>
                  <div className="text-[10px] text-neutral-500">Owner</div>
                </div>
              </div>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 p-6 max-w-[1600px] mx-auto space-y-6">
          {/* Hero Section */}
          <section
            className="relative rounded-2xl overflow-hidden border border-white/10 h-[420px] group scroll-mt-24"
            id="overview"
          >
            <div className="absolute inset-0 z-0">
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"
                className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                alt="Property"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
            </div>

            <div className="absolute bottom-0 w-full p-8 z-10 flex flex-col md:flex-row items-end justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-wider">
                    Terrace
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full border border-white/50" />
                    4
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full border border-white/50" />
                    3
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full border border-white/50" />
                    1
                  </span>
                </div>
                <h1
                  className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-2"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  128 Crown Street
                </h1>
                <p className="text-lg text-neutral-300 font-light">Surry Hills, NSW 2010</p>
              </div>

              <div className="p-5 rounded-xl min-w-[300px] backdrop-blur-md bg-[#0A0A0A]/60 border border-white/10">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                    Estimated Value
                  </span>
                  <div className="flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                    <TrendingUp className="w-3 h-3" />
                    High Conf.
                  </div>
                </div>
                <div className="text-3xl font-medium text-white tracking-tight mb-2">
                  $2.4m - $2.6m
                </div>
                <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                  <div className="bg-white h-full w-2/3 ml-auto rounded-full opacity-80" />
                </div>
                <div className="flex justify-between mt-1 text-[10px] text-neutral-500 font-mono">
                  <span>Low</span>
                  <span>High</span>
                </div>
              </div>
            </div>
          </section>

          {/* Property Narrative & Floorplan */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 p-6 rounded-xl border border-white/5 bg-[#0A0A0A]">
              <h3 className="text-sm font-medium text-white mb-4 flex items-center gap-2">
                <AlignLeft className="w-4 h-4 text-neutral-500" />
                Property Narrative
              </h3>
              <div className="prose prose-invert prose-sm max-w-none text-neutral-400 leading-relaxed">
                <p className="mb-4">
                  A masterclass in contemporary design, this transformed Victorian
                  terrace balances heritage character with cutting-edge architectural
                  innovation. Beyond the classic façade lies a reimagined interior
                  where light, space, and functionality converge to create a truly
                  sophisticated urban sanctuary.
                </p>
                <p className="mb-4">
                  The entry level features formal living and dining zones with original
                  fireplaces, flowing seamlessly into a bespoke chef's kitchen equipped
                  with Wolf appliances and honed Calacatta marble surfaces. Floor-to-ceiling
                  bi-fold steel doors dissolve the boundary between indoors and the
                  private, north-facing landscaped courtyard.
                </p>
                <p>
                  Upstairs, the accommodation comprises three generous bedrooms,
                  including a master retreat with a boutique-style ensuite and private
                  balcony. A versatile attic conversion serves as a fourth bedroom
                  or executive home office, capturing sweeping district views across
                  Surry Hills.
                </p>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/5 bg-[#0A0A0A] flex flex-col">
              <h3 className="text-sm font-medium text-white mb-4">Floorplan & Legal</h3>
              <div className="flex-1 bg-white/5 rounded-lg border border-white/5 relative overflow-hidden group cursor-pointer mb-4 min-h-[140px]">
                <img
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"
                  className="w-full h-full object-cover opacity-50 transition-opacity group-hover:opacity-80"
                  alt="Floorplan"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-black/50 backdrop-blur px-3 py-1.5 rounded text-[10px] text-white border border-white/10 flex items-center gap-2 font-medium hover:bg-black/70 transition-colors">
                    <Maximize className="w-3 h-3" />
                    View Layout
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <button className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 transition-colors text-xs text-neutral-400 border border-transparent hover:border-white/5 group">
                  <span className="flex items-center gap-2 group-hover:text-white transition-colors">
                    <FileText className="w-3.5 h-3.5" />
                    Contract of Sale
                  </span>
                  <Download className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                </button>
                <button className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 transition-colors text-xs text-neutral-400 border border-transparent hover:border-white/5 group">
                  <span className="flex items-center gap-2 group-hover:text-white transition-colors">
                    <FileCheck className="w-3.5 h-3.5" />
                    Strata Report
                  </span>
                  <Download className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                </button>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1: Property Specs */}
            <div className="space-y-6 scroll-mt-24" id="details">
              {/* Map Card */}
              <div className="p-5 rounded-xl border border-white/5 bg-[#0A0A0A] relative overflow-hidden h-64">
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <div className="absolute top-[30%] left-0 w-full h-[1px] bg-white/10" />
                    <div className="absolute top-[60%] left-0 w-full h-[1px] bg-white/10" />
                    <div className="absolute top-0 left-[40%] h-full w-[1px] bg-white/10" />
                    <div className="absolute top-[60%] left-[40%]">
                      <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.5)] relative">
                        <div className="absolute inset-0 rounded-full border border-white/50 animate-ping" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-[#050505]/90 backdrop-blur border border-white/10 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-white">Location Score</span>
                    <span className="text-xs font-mono text-white">9.2/10</span>
                  </div>
                  <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
                    <span className="text-[10px] whitespace-nowrap px-2 py-1 bg-white/5 border border-white/5 rounded text-neutral-400">
                      Transit +9
                    </span>
                    <span className="text-[10px] whitespace-nowrap px-2 py-1 bg-white/5 border border-white/5 rounded text-neutral-400">
                      Schools +8
                    </span>
                    <span className="text-[10px] whitespace-nowrap px-2 py-1 bg-white/5 border border-white/5 rounded text-neutral-400">
                      Lifestyle +9.5
                    </span>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="p-5 rounded-xl border border-white/5 bg-[#0A0A0A]">
                <h3 className="text-xs font-medium text-white mb-4 flex items-center gap-2">
                  <ListChecks className="w-3.5 h-3.5 text-neutral-500" />
                  Key Attributes
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-xs text-neutral-400">Land Size</span>
                    <span className="text-xs text-white font-mono">148 sqm</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-xs text-neutral-400">Internal Area</span>
                    <span className="text-xs text-white font-mono">210 sqm</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-xs text-neutral-400">Zoning</span>
                    <span className="text-xs text-white font-mono">R1 General</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-xs text-neutral-400">Aspect</span>
                    <span className="text-xs text-white font-mono">North-East</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-xs text-neutral-400">Last Sold</span>
                    <span className="text-xs text-white font-mono">2018 ($1.85m)</span>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="p-5 rounded-xl border border-white/5 bg-[#0A0A0A]">
                <h3 className="text-xs font-medium text-white mb-4 flex items-center gap-2">
                  <GraduationCap className="w-3.5 h-3.5 text-neutral-500" />
                  Education Catchment
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-white font-medium">Crown St Public</div>
                      <div className="text-[10px] text-neutral-500">Primary • Co-ed</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-white font-mono">0.2km</div>
                      <div className="text-[10px] text-emerald-400">Catchment</div>
                    </div>
                  </div>
                  <div className="w-full h-px bg-white/5" />
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-white font-medium">Sydney Boys High</div>
                      <div className="text-[10px] text-neutral-500">Secondary • Boys</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-white font-mono">1.1km</div>
                      <div className="text-[10px] text-neutral-500">Selective</div>
                    </div>
                  </div>
                  <div className="w-full h-px bg-white/5" />
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-white font-medium">SCEGGS Darlinghurst</div>
                      <div className="text-[10px] text-neutral-500">K-12 • Girls</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-white font-mono">0.8km</div>
                      <div className="text-[10px] text-neutral-500">Private</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Planning */}
              <div className="p-5 rounded-xl border border-white/5 bg-[#0A0A0A]">
                <h3 className="text-xs font-medium text-white mb-4 flex items-center gap-2">
                  <FileWarning className="w-3.5 h-3.5 text-neutral-500" />
                  Planning & Zoning
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-neutral-400">Zone</span>
                    <span className="text-xs text-white font-mono bg-white/5 px-2 py-0.5 rounded">
                      R1 General
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-neutral-400">Height Limit</span>
                    <span className="text-xs text-white font-mono">9.0m</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-neutral-400">FSR</span>
                    <span className="text-xs text-white font-mono">1.5 : 1</span>
                  </div>
                  <div className="flex justify-between items-center border-t border-white/5 pt-2">
                    <span className="text-xs text-neutral-400">Heritage</span>
                    <span className="text-xs text-amber-500 font-mono flex items-center gap-1">
                      <XCircle className="w-3 h-3" />
                      Conservation
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2 & 3: Comps & Analysis */}
            <div className="col-span-1 md:col-span-2 space-y-6">
              {/* Comparable Sales */}
              <div className="p-6 rounded-xl border border-white/5 bg-[#0A0A0A] scroll-mt-24" id="comps">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-sm font-medium text-white">Comparable Sales</h3>
                    <p className="text-xs text-neutral-500 mt-1">
                      Recent sales in Surry Hills utilized for valuation methodology.
                    </p>
                  </div>
                  <button className="text-[10px] font-medium text-white border border-white/10 px-3 py-1.5 rounded bg-white/5 hover:bg-white/10 transition-colors">
                    View All Analysis
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {comparableSales.map((comp) => (
                    <div
                      key={comp.id}
                      className="group relative rounded-lg bg-white/5 border border-white/5 overflow-hidden hover:border-white/20 transition-all cursor-pointer"
                    >
                      <div className="h-32 w-full relative overflow-hidden">
                        <img
                          src={comp.image}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          alt={comp.address}
                        />
                        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur px-2 py-1 rounded text-[10px] font-bold text-white border border-white/10">
                          SOLD {comp.soldDate}
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-sm font-medium text-white">{comp.address}</h4>
                          <span className="text-sm font-bold text-white tracking-tight">
                            {comp.price}
                          </span>
                        </div>
                        <div className="flex gap-3 text-[10px] text-neutral-400 mb-3">
                          <span className="flex items-center gap-1">{comp.beds} bd</span>
                          <span className="flex items-center gap-1">{comp.baths} ba</span>
                          <span className="flex items-center gap-1">{comp.cars} pk</span>
                          <span className="ml-auto font-mono text-neutral-500">{comp.size}</span>
                        </div>
                        <div className="pt-3 border-t border-white/5 text-[10px] text-neutral-500 leading-relaxed">
                          "{comp.notes}"
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Suburb Statistics */}
              <div className="p-6 rounded-xl border border-white/5 bg-[#0A0A0A]">
                <h3 className="text-sm font-medium text-white mb-4">Suburb Statistics</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5 text-center">
                    <div className="text-xs text-neutral-400 mb-1">Days on Market</div>
                    <div className="text-lg font-bold text-white">24</div>
                    <div className="text-[9px] text-emerald-400">-2 days vs avg</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5 text-center">
                    <div className="text-xs text-neutral-400 mb-1">Online Views</div>
                    <div className="text-lg font-bold text-white">1,240</div>
                    <div className="text-[9px] text-emerald-400">High Demand</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5 text-center">
                    <div className="text-xs text-neutral-400 mb-1">Clearance Rate</div>
                    <div className="text-lg font-bold text-white">82%</div>
                    <div className="text-[9px] text-neutral-500">Consistent</div>
                  </div>
                </div>
              </div>

              {/* Rental Appraisal */}
              <div className="p-6 rounded-xl border border-white/5 bg-[#0A0A0A] scroll-mt-24" id="rental">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-sm font-medium text-white">Rental Appraisal</h3>
                    <p className="text-xs text-neutral-500 mt-1">
                      Estimated yield based on current leasing data.
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-white tracking-tight">
                      $1,850 - $2,100
                    </div>
                    <div className="text-[10px] text-neutral-400 uppercase tracking-wider font-mono">
                      Per Week
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="p-4 rounded-lg bg-white/5 border border-white/5">
                    <div className="flex items-center gap-2 mb-1">
                      <Percent className="w-3 h-3 text-neutral-500" />
                      <span className="text-[10px] text-neutral-400 uppercase tracking-wider">
                        Gross Yield
                      </span>
                    </div>
                    <div className="text-xl font-medium text-emerald-400 tracking-tight">
                      3.8% - 4.2%
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5 border border-white/5">
                    <div className="flex items-center gap-2 mb-1">
                      <DoorOpen className="w-3 h-3 text-neutral-500" />
                      <span className="text-[10px] text-neutral-400 uppercase tracking-wider">
                        Vacancy Rate
                      </span>
                    </div>
                    <div className="text-xl font-medium text-white tracking-tight">1.2%</div>
                    <div className="text-[9px] text-neutral-500 mt-1">Suburb Avg: 1.9%</div>
                  </div>
                </div>
                <p className="text-[11px] text-neutral-400 leading-relaxed border-t border-white/5 pt-4">
                  <strong className="text-white">Agent Note:</strong> Strong demand for
                  executive rentals in this pocket. We recommend marketing the property as
                  fully furnished to target corporate tenants, potentially achieving a{" "}
                  <span className="text-white">$2,500/week</span> premium.
                </p>
              </div>

              {/* Outgoings */}
              <div className="p-6 rounded-xl border border-white/5 bg-[#0A0A0A]">
                <h3 className="text-sm font-medium text-white mb-4">Estimated Outgoings</h3>
                <div className="grid grid-cols-3 divide-x divide-white/10">
                  <div className="px-2">
                    <div className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1">
                      Council Rates
                    </div>
                    <div className="text-sm font-mono text-white">
                      $485
                      <span className="text-[10px] text-neutral-600">/qtr</span>
                    </div>
                  </div>
                  <div className="px-4">
                    <div className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1">
                      Water Rates
                    </div>
                    <div className="text-sm font-mono text-white">
                      $190
                      <span className="text-[10px] text-neutral-600">/qtr</span>
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1">
                      Insurance
                    </div>
                    <div className="text-sm font-mono text-white">
                      $2,200
                      <span className="text-[10px] text-neutral-600">/yr</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Market Insights */}
              <div className="grid grid-cols-2 gap-4 scroll-mt-24" id="insights">
                <div className="p-5 rounded-xl border border-white/5 bg-[#0A0A0A]">
                  <h3 className="text-xs font-medium text-neutral-400 uppercase tracking-widest font-mono mb-4">
                    Suburb Growth (12m)
                  </h3>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-3xl font-medium text-white">+8.4%</span>
                    <span className="text-xs text-emerald-400 mb-1 flex items-center">
                      <ArrowUpRight className="w-3 h-3" />
                      Trending
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-500">
                    Outperforming inner-city average (5.2%). High demand for renovated
                    terraces.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-white/5 bg-[#0A0A0A]">
                  <h3 className="text-xs font-medium text-neutral-400 uppercase tracking-widest font-mono mb-4">
                    Target Audience
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span className="text-xs text-white">Young Professionals (45%)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      <span className="text-xs text-white">Downsizers (30%)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                      <span className="text-xs text-neutral-400">Investors (25%)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Demographics */}
              <div className="p-6 rounded-xl border border-white/5 bg-[#0A0A0A]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xs font-medium text-neutral-400 uppercase tracking-widest font-mono">
                    Demographics
                  </h3>
                  <PieChart className="w-4 h-4 text-neutral-600" />
                </div>
                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between text-[10px] text-neutral-400 mb-2">
                      <span className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                        Owner Occupier
                      </span>
                      <span className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
                        Renter
                      </span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden flex">
                      <div className="h-full bg-indigo-500 w-[45%]" />
                      <div className="h-full bg-neutral-700 w-[55%]" />
                    </div>
                    <div className="flex justify-between text-[10px] text-white font-mono mt-1">
                      <span>45%</span>
                      <span>55%</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5">
                    <div className="text-center">
                      <div className="text-lg font-bold text-white tracking-tight">34</div>
                      <div className="text-[9px] text-neutral-500 uppercase tracking-wider">
                        Med. Age
                      </div>
                    </div>
                    <div className="text-center border-l border-white/5">
                      <div className="text-lg font-bold text-white tracking-tight">
                        $2.8k
                      </div>
                      <div className="text-[9px] text-neutral-500 uppercase tracking-wider">
                        Wkly Income
                      </div>
                    </div>
                    <div className="text-center border-l border-white/5">
                      <div className="text-lg font-bold text-white tracking-tight">2.1</div>
                      <div className="text-[9px] text-neutral-500 uppercase tracking-wider">
                        Household
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Buyer Activity */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 scroll-mt-24" id="buyers">
            <div className="col-span-1 md:col-span-2 p-6 rounded-xl border border-white/5 bg-[#0A0A0A]">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-sm font-medium text-white">Active Buyer Interest</h3>
                  <p className="text-xs text-neutral-500 mt-1">
                    Real-time matching from our database.
                  </p>
                </div>
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-neutral-800 border border-[#0A0A0A] flex items-center justify-center text-[9px] text-white">
                    AH
                  </div>
                  <div className="w-7 h-7 rounded-full bg-neutral-700 border border-[#0A0A0A] flex items-center justify-center text-[9px] text-white">
                    MK
                  </div>
                  <div className="w-7 h-7 rounded-full bg-neutral-600 border border-[#0A0A0A] flex items-center justify-center text-[9px] text-white">
                    +14
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                {buyerInterests.map((buyer) => {
                  const Icon = buyer.icon;
                  return (
                    <div
                      key={buyer.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-full bg-${buyer.color}-500/10 text-${buyer.color}-400 flex items-center justify-center border border-${buyer.color}-500/20`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs text-white font-medium">{buyer.name}</div>
                          <div className="text-[10px] text-neutral-400">
                            Budget: {buyer.budget} • {buyer.status}
                          </div>
                        </div>
                      </div>
                      {getMatchBadge(buyer.matchLevel)}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Timeline */}
            <div className="p-6 rounded-xl border border-white/5 bg-[#0A0A0A]">
              <h3 className="text-sm font-medium text-white mb-4">Projected Timeline</h3>
              <div className="relative pl-4 border-l border-white/10 space-y-6">
                <div className="relative">
                  <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ring-[#0A0A0A]" />
                  <div className="text-xs text-white font-medium">Week 1: Launch</div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">
                    Photos, Listing, Email Blast
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-700 ring-4 ring-[#0A0A0A]" />
                  <div className="text-xs text-neutral-300">Week 2: Open Homes</div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">
                    First inspections, Feedback
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-700 ring-4 ring-[#0A0A0A]" />
                  <div className="text-xs text-neutral-300">Week 3: Negotiations</div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">
                    Contract requests, Offers
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-white ring-4 ring-[#0A0A0A]" />
                  <div className="text-xs text-white font-medium">Week 4: Auction Day</div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">On-site event</div>
                </div>
              </div>
            </div>
          </section>

          {/* Market Performance & Agent */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1 md:col-span-2 p-6 rounded-xl border border-white/5 bg-[#0A0A0A]">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-sm font-medium text-white">Market Performance</h3>
                  <p className="text-xs text-neutral-500 mt-1">
                    Surry Hills 4-Bedroom Terrace Median Price (5Y Trend)
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    +12.4% vs 2020
                  </span>
                </div>
              </div>
              <div className="h-48 flex items-end justify-between gap-4 px-2 mt-4">
                {[
                  { year: "2020", height: "40%", current: false },
                  { year: "2021", height: "65%", current: false },
                  { year: "2022", height: "55%", current: false },
                  { year: "2023", height: "75%", current: false },
                  { year: "2024", height: "90%", current: true, value: "$2.5M" },
                ].map((data) => (
                  <div
                    key={data.year}
                    className="w-full flex flex-col gap-2 group cursor-default"
                  >
                    <div className="h-full flex items-end">
                      <div
                        className={`w-full rounded-t-sm relative transition-all ${
                          data.current
                            ? "bg-white shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                            : "bg-neutral-800 group-hover:bg-neutral-700"
                        }`}
                        style={{ height: data.height }}
                      >
                        {data.current && (
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[9px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {data.value}
                          </div>
                        )}
                      </div>
                    </div>
                    <span
                      className={`text-[10px] text-center font-mono ${
                        data.current ? "text-white font-bold" : "text-neutral-500"
                      }`}
                    >
                      {data.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Agent Profile */}
            <div className="p-6 rounded-xl border border-white/5 bg-[#0A0A0A] relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <h3 className="text-sm font-medium text-white mb-6">Your Agent</h3>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-neutral-800 border-2 border-white/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-white">JD</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-white">John Doe</div>
                  <div className="text-xs text-neutral-400">Senior Partner</div>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 text-yellow-500 fill-yellow-500"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-3 pt-4 border-t border-white/5">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-500">Recent Sales</span>
                  <span className="text-white font-mono">42</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-500">Avg Sale Price</span>
                  <span className="text-white font-mono">$2.8m</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-500">Clearance Rate</span>
                  <span className="text-emerald-400 font-mono">98%</span>
                </div>
              </div>
              <button className="w-full mt-6 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-medium py-2 rounded-lg transition-colors flex items-center justify-center gap-2">
                <Mail className="w-3.5 h-3.5" />
                Contact Agent
              </button>
            </div>
          </section>

          {/* Improvements */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6" id="improvements">
            <div className="p-6 rounded-xl border border-white/5 bg-[#0A0A0A]">
              <h3 className="text-sm font-medium text-white mb-4">
                Value-Add Recommendations
              </h3>
              <div className="space-y-3">
                {recommendations.map((rec) => {
                  const Icon = rec.icon;
                  return (
                    <div
                      key={rec.id}
                      className={`flex items-start gap-3 p-3 rounded-lg border transition-colors ${
                        rec.enabled
                          ? "bg-white/5 border-white/5 hover:border-white/10"
                          : "bg-transparent border-transparent opacity-50"
                      }`}
                    >
                      <div className={rec.enabled ? "text-emerald-400 mt-0.5" : "text-neutral-500 mt-0.5"}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div
                          className={`text-xs font-medium ${
                            rec.enabled ? "text-white" : "text-neutral-300"
                          }`}
                        >
                          {rec.title}
                        </div>
                        {rec.enabled ? (
                          <p className="text-[10px] text-neutral-400 mt-1 leading-relaxed">
                            {rec.description}
                            <br />
                            Est. Cost: <span className="text-white">{rec.cost}</span> •{" "}
                            <span className="text-emerald-400">Est. ROI: {rec.roi}</span>
                          </p>
                        ) : (
                          <p className="text-[10px] text-neutral-500 mt-1">{rec.description}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/5 bg-[#0A0A0A] flex flex-col justify-center items-center text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white mb-4 relative z-10 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-white relative z-10">Property Styling</h3>
              <p className="text-xs text-neutral-400 max-w-xs my-3 relative z-10 leading-relaxed">
                Professional styling increases sale price by an average of 7-10%. We
                have reserved a tentative slot with{" "}
                <span className="text-white font-semibold">Coco Republic</span> for
                Week 1.
              </p>
              <button className="px-4 py-2 bg-white text-black text-xs font-bold rounded hover:bg-neutral-200 transition-colors relative z-10 flex items-center gap-2">
                <span>View Moodboard</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </section>

          {/* Marketing Plan */}
          <section className="mt-8 pt-8 border-t border-white/5 scroll-mt-24" id="marketing">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-medium text-white">Proposal & Strategy</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="col-span-1 lg:col-span-2 p-6 rounded-xl border border-white/5 bg-[#0A0A0A]">
                <h3 className="text-sm font-medium text-white mb-4">Marketing Campaign</h3>
                <div className="space-y-3">
                  {marketingOptions.map((option) => (
                    <label
                      key={option.id}
                      className="block relative cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="marketing"
                        className="sr-only"
                        checked={selectedMarketing === option.id}
                        onChange={() => setSelectedMarketing(option.id)}
                      />
                      <div
                        className={`p-4 rounded-lg border transition-all flex items-center justify-between ${
                          selectedMarketing === option.id
                            ? "border-white bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.1)]"
                            : "border-white/10 bg-white/5 hover:bg-white/10"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                              selectedMarketing === option.id
                                ? "border-white bg-white"
                                : "border-neutral-500"
                            }`}
                          >
                            {selectedMarketing === option.id && (
                              <Check className="w-3 h-3 text-black" />
                            )}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white flex items-center gap-2">
                              {option.name}
                              {option.recommended && (
                                <span className="text-[9px] bg-indigo-500 text-white px-1.5 py-0.5 rounded font-bold uppercase">
                                  Recommended
                                </span>
                              )}
                            </div>
                            <div className="text-[11px] text-neutral-400">
                              {option.description}
                            </div>
                          </div>
                        </div>
                        <span className="text-sm font-mono text-white">{option.price}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Method of Sale */}
              <div className="p-6 rounded-xl border border-white/5 bg-[#0A0A0A] flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-medium text-white mb-4">Method of Sale</h3>
                  <div className="p-4 bg-white/5 rounded-lg border border-white/5 mb-4 text-center group cursor-pointer hover:border-indigo-500/50 transition-colors">
                    <div className="w-10 h-10 mx-auto bg-indigo-500/10 rounded-full flex items-center justify-center text-indigo-400 mb-2">
                      <Gavel className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-medium text-white">Auction Campaign</h4>
                    <p className="text-[11px] text-neutral-500 mt-1">4 weeks</p>
                  </div>
                  <p className="text-[11px] text-neutral-400 leading-relaxed">
                    Given the high demand for terraces in Surry Hills, an Auction creates
                    urgency and competition, likely maximizing the sale price above $2.5M.
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-white/5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-neutral-400">Commission Rate</span>
                    <span className="text-xs font-mono text-white">{commission.toFixed(1)}%</span>
                  </div>
                  <input
                    type="range"
                    min="1.0"
                    max="3.0"
                    step="0.1"
                    value={commission}
                    onChange={(e) => setCommission(parseFloat(e.target.value))}
                    className="w-full"
                  />
                  <button className="w-full mt-4 bg-white text-black py-2.5 rounded-lg text-xs font-bold hover:bg-neutral-200 transition-colors">
                    Finalize Proposal
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-8 border-t border-white/5 pt-8 pb-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <Home className="w-4 h-4 text-neutral-600" />
                <span className="text-xs font-bold text-neutral-500 tracking-tight">
                  HAUS.APPRAISAL
                </span>
              </div>
              <div className="flex gap-6 text-[10px] text-neutral-500">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy
                </a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-white transition-colors">Support</a>
              </div>
              <div className="text-[10px] text-neutral-600">© 2024 HAUS Inc.</div>
            </div>
            <p className="mt-6 text-[10px] text-neutral-700 text-center max-w-3xl mx-auto leading-relaxed">
              DISCLAIMER: This appraisal is an estimate of value based on current market
              conditions and comparable sales data. It does not constitute a sworn
              valuation. The agent and agency accept no liability for any reliance placed
              on this estimate by any party. Values can change rapidly due to market
              volatility.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default AppraisalReport;
