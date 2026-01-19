"use client"

/**
 * Appraisal Report Page
 *
 * @description
 * Comprehensive property appraisal report page with interactive charts,
 * comparable sales analysis, valuation breakdown, and market metrics.
 * Features React Hook Form with Zod validation, real-time data visualization,
 * and exportable PDF reports.
 *
 * @features
 * - Interactive valuation charts with historical trends
 * - Comparable sales analysis with adjustment breakdowns
 * - Multi-method valuation comparison (sales comparison, cost approach, income)
 * - Property condition assessment and quality ratings
 * - Market analysis and location metrics
 * - Export to PDF functionality
 * - Real-time form validation with error handling
 *
 * @example
 * ```tsx
 * // Access at /appraisal-report route
 * <AppraisalReportPage />
 * ```
 */

import { useState, useMemo } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  FileText,
  Home,
  TrendingUp,
  TrendingDown,
  DollarSign,
  MapPin,
  Calendar,
  Download,
  Filter,
  ChevronDown,
  CheckCircle2,
  AlertCircle,
  Info,
  Building2,
  Ruler,
  Bed,
  Bath,
  Car,
  Maximize,
  BarChart3,
  PieChart,
  Activity,
  Settings,
  Printer
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import type {
  Property,
  Valuation,
  ComparableSale,
  MarketTrend,
  AppraisalFilters,
  PropertyType,
  ValuationMethod
} from "@/types/appraisal"

// Zod schema for property search form
const propertySearchSchema = z.object({
  address: z.string().min(1, "Address is required"),
  propertyType: z.enum(["residential", "commercial", "land", "industrial", "mixed-use"]),
  squareFootage: z.number().min(100, "Must be at least 100 sqft"),
  yearBuilt: z.number().min(1800, "Invalid year").max(new Date().getFullYear()),
  condition: z.enum(["new", "excellent", "good", "fair", "needs-repair"]),
  lotSize: z.number().min(0, "Must be positive").optional(),
})

type PropertySearchForm = z.infer<typeof propertySearchSchema>

// Mock data - in production, fetch from API
const MOCK_VALUATION: Valuation = {
  propertyId: "PROP-2024-001",
  reportId: "RPT-2024-08921",
  reportDate: new Date("2024-11-14"),
  effectiveDate: new Date("2024-11-01"),
  appraiser: {
    name: "Sarah Mitchell",
    certification: "MAI, SRA",
    license: "CERT-2024-CA-0842",
    firm: "Pacific Valuation Group"
  },
  estimatedValue: 2850000,
  valueRange: {
    low: 2700000,
    high: 3000000
  },
  pricePerSquareFoot: 685,
  methods: [
    {
      method: "sales-comparison",
      value: 2850000,
      weight: 0.45,
      adjustedValue: 1282500,
      notes: "Based on 3 recent comparable sales within 1 mile"
    },
    {
      method: "cost-approach",
      value: 3100000,
      weight: 0.30,
      adjustedValue: 930000,
      notes: "Replacement cost new less depreciation"
    },
    {
      method: "income-capitalization",
      value: 2600000,
      weight: 0.25,
      adjustedValue: 650000,
      notes: "Capitalized NOI at 5.2% rate"
    }
  ],
  adjustments: [
    { category: "Location", amount: 85000, description: "Premium corner lot location" },
    { category: "Condition", amount: 45000, description: "Above-average maintenance" },
    { category: "Size", amount: -25000, description: "Slightly below average square footage" },
    { category: "Age", amount: -15000, description: "Older construction" }
  ],
  marketConditions: {
    trend: "increasing",
    supply: "low",
    demand: "high",
    averageDaysOnMarket: 28,
    monthsOfInventory: 2.1
  }
}

const MOCK_COMPARABLES: ComparableSale[] = [
  {
    id: "COMP-001",
    address: "1234 Ocean Ave",
    distance: 0.3,
    salePrice: 2950000,
    saleDate: new Date("2024-10-15"),
    saleStatus: "sold",
    propertyType: "residential",
    squareFootage: 4200,
    pricePerSquareFoot: 702,
    bedrooms: 5,
    bathrooms: 4,
    lotSize: 8500,
    yearBuilt: 2018,
    condition: "excellent",
    similarity: 0.92,
    adjustments: [
      { type: "Location", amount: 25000, reason: "Slightly superior location" },
      { type: "Size", amount: -18000, reason: "200 sqft larger" },
      { type: "Age", amount: 12000, reason: "3 years newer" }
    ],
    adjustedPrice: 2969000
  },
  {
    id: "COMP-002",
    address: "890 Palm Dr",
    distance: 0.5,
    salePrice: 2750000,
    saleDate: new Date("2024-09-28"),
    saleStatus: "sold",
    propertyType: "residential",
    squareFootage: 3950,
    pricePerSquareFoot: 696,
    bedrooms: 4,
    bathrooms: 3,
    lotSize: 7200,
    yearBuilt: 2019,
    condition: "good",
    similarity: 0.88,
    adjustments: [
      { type: "Condition", amount: 35000, reason: "Better condition" },
      { type: "Bedrooms", amount: 15000, reason: "One less bedroom" }
    ],
    adjustedPrice: 2800000
  },
  {
    id: "COMP-003",
    address: "456 Harbor View",
    distance: 0.7,
    salePrice: 3100000,
    saleDate: new Date("2024-10-22"),
    saleStatus: "sold",
    propertyType: "residential",
    squareFootage: 4500,
    pricePerSquareFoot: 689,
    bedrooms: 5,
    bathrooms: 5,
    lotSize: 9200,
    yearBuilt: 2020,
    condition: "excellent",
    similarity: 0.85,
    adjustments: [
      { type: "Location", amount: -45000, reason: "Less desirable street" },
      { type: "Size", amount: -32000, reason: "500 sqft larger" }
    ],
    adjustedPrice: 3023000
  }
]

const MOCK_MARKET_TRENDS: MarketTrend[] = [
  { period: "2019", medianPrice: 2100000, averagePrice: 2150000, pricePerSquareFoot: 525, numberOfSales: 142, averageDaysOnMarket: 35 },
  { period: "2020", medianPrice: 2250000, averagePrice: 2300000, pricePerSquareFoot: 550, numberOfSales: 138, averageDaysOnMarket: 32 },
  { period: "2021", medianPrice: 2450000, averagePrice: 2500000, pricePerSquareFoot: 585, numberOfSales: 156, averageDaysOnMarket: 28 },
  { period: "2022", medianPrice: 2600000, averagePrice: 2650000, pricePerSquareFoot: 620, numberOfSales: 148, averageDaysOnMarket: 30 },
  { period: "2023", medianPrice: 2700000, averagePrice: 2780000, pricePerSquareFoot: 650, numberOfSales: 135, averageDaysOnMarket: 31 },
  { period: "2024", medianPrice: 2850000, averagePrice: 2900000, pricePerSquareFoot: 685, numberOfSales: 124, averageDaysOnMarket: 28 }
]

export default function AppraisalReportPage() {
  const [selectedPeriod, setSelectedPeriod] = useState<"1m" | "3m" | "6m" | "1y" | "all">("6m")
  const [selectedMethod, setSelectedMethod] = useState<ValuationMethod | "all">("all")
  const [showExportMenu, setShowExportMenu] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Form setup with validation
  const form = useForm<PropertySearchForm>({
    resolver: zodResolver(propertySearchSchema),
    defaultValues: {
      address: "",
      propertyType: "residential",
      squareFootage: 2500,
      yearBuilt: 2015,
      condition: "good"
    }
  })

  const watchedFields = form.watch()

  // Calculate statistics
  const avgComparablePrice = useMemo(() => {
    const total = MOCK_COMPARABLES.reduce((sum, comp) => sum + comp.adjustedPrice, 0)
    return total / MOCK_COMPARABLES.length
  }, [])

  const priceRange = useMemo(() => {
    const prices = MOCK_COMPARABLES.map(c => c.adjustedPrice)
    return {
      min: Math.min(...prices),
      max: Math.max(...prices)
    }
  }, [])

  const handleExport = async (format: "pdf" | "excel") => {
    setIsLoading(true)
    // Simulate export - in production, call actual API
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsLoading(false)
    setShowExportMenu(false)
  }

  const onSubmit = async (data: PropertySearchForm) => {
    console.log("Search submitted:", data)
    // In production, call API to get property data
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Noise Overlay */}
      <div className="fixed inset-0 z-0 w-full h-full pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          maskImage: "radial-gradient(circle at center, black 40%, transparent 100%)"
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full px-6 py-4 md:px-12 md:py-6 flex justify-between items-center z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <a href="/" className="font-display text-lg font-medium tracking-tight flex items-center gap-2 group">
          <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold tracking-tighter group-hover:scale-90 transition-transform duration-300">
            H
          </div>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-xs font-mono text-white/60 hover:text-white transition-colors">DASHBOARD</a>
          <a href="#" className="text-xs font-mono text-white/60 hover:text-white transition-colors">VALUATIONS</a>
          <a href="#" className="text-xs font-mono text-white border-b border-white transition-colors">REPORTS</a>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="border-white/20 hover:bg-white hover:text-black">
            <FileText className="w-4 h-4 mr-2" />
            New Report
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 pt-32 pb-24">
        <div className="px-6 md:px-12 max-w-[1920px] mx-auto">

          {/* Header */}
          <header className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2 py-0.5 rounded border border-white/20 bg-white/5 text-[10px] uppercase tracking-widest text-indigo-300 font-medium">
                    Property Valuation
                  </span>
                  <span className="text-[10px] text-neutral-500 font-mono">RPT-2024-08921</span>
                </div>
                <h1 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-white mb-3">
                  2847 Pacific Coast Hwy
                </h1>
                <div className="flex items-center gap-4 text-sm text-neutral-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Malibu, CA 90265
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Nov 14, 2024
                  </span>
                </div>
              </div>

              {/* Main Valuation Display */}
              <div className="flex items-start gap-6">
                <div className="text-right">
                  <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Estimated Value</div>
                  <div className="font-display text-4xl font-medium text-white mb-1">
                    $2,850,000
                  </div>
                  <div className="text-sm text-neutral-400">
                    $685/sqft
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Value Range</div>
                  <div className="font-display text-2xl font-medium text-white mb-1">
                    $2.7M - $3.0M
                  </div>
                  <div className="text-sm text-emerald-500 flex items-center justify-end gap-1">
                    <Activity className="w-3 h-3" />
                    High confidence
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowExportMenu(!showExportMenu)}
                className="border-white/20 hover:bg-white hover:text-black"
              >
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
              <Button variant="outline" size="sm" className="border-white/20 hover:bg-white/5">
                <Printer className="w-4 h-4 mr-2" />
                Print
              </Button>
              <Button variant="outline" size="sm" className="border-white/20 hover:bg-white/5">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>

            {/* Export Menu */}
            {showExportMenu && (
              <div className="absolute top-48 right-12 bg-[#0A0A0A] border border-white/10 rounded-lg p-2 shadow-xl z-50">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleExport("pdf")}
                  disabled={isLoading}
                  className="w-full justify-start hover:bg-white/5"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Export as PDF
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleExport("excel")}
                  disabled={isLoading}
                  className="w-full justify-start hover:bg-white/5"
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Export to Excel
                </Button>
              </div>
            )}
          </header>

          {/* Property Details */}
          <section className="mb-8">
            <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6">
              <h2 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
                <Home className="w-5 h-5 text-indigo-400" />
                Property Details
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                <div>
                  <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Type</div>
                  <div className="text-sm text-white">Single Family</div>
                </div>
                <div>
                  <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1 flex items-center gap-1">
                    <Bed className="w-3 h-3" />
                    Bedrooms
                  </div>
                  <div className="text-sm text-white">5</div>
                </div>
                <div>
                  <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1 flex items-center gap-1">
                    <Bath className="w-3 h-3" />
                    Bathrooms
                  </div>
                  <div className="text-sm text-white">4</div>
                </div>
                <div>
                  <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1 flex items-center gap-1">
                    <Car className="w-3 h-3" />
                    Parking
                  </div>
                  <div className="text-sm text-white">3 Cars</div>
                </div>
                <div>
                  <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1 flex items-center gap-1">
                    <Maximize className="w-3 h-3" />
                    Living Area
                  </div>
                  <div className="text-sm text-white">4,160 sqft</div>
                </div>
                <div>
                  <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1 flex items-center gap-1">
                    <Ruler className="w-3 h-3" />
                    Lot Size
                  </div>
                  <div className="text-sm text-white">8,400 sqft</div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Year Built</div>
                    <div className="text-sm text-white">2015</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Condition</div>
                    <div className="text-sm text-white">Excellent</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Quality</div>
                    <div className="text-sm text-white">Above Average</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Zoning</div>
                    <div className="text-sm text-white">R-1</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Valuation Methods */}
          <section className="mb-8">
            <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6">
              <h2 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
                <PieChart className="w-5 h-5 text-indigo-400" />
                Valuation Methods Breakdown
              </h2>

              <div className="space-y-4">
                {MOCK_VALUATION.methods.map((method, idx) => (
                  <div key={idx} className="border border-white/5 rounded-lg p-4 hover:border-white/10 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-sm font-medium text-white capitalize">
                            {method.method.replace("-", " ")}
                          </h3>
                          <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-neutral-400 border border-white/5">
                            {Math.round(method.weight * 100)}% weight
                          </span>
                        </div>
                        <p className="text-xs text-neutral-500">{method.notes}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-medium text-white">
                          ${(method.adjustedValue / 1000).toFixed(0)}K
                        </div>
                        <div className="text-xs text-neutral-500">
                          of ${method.value.toLocaleString()}
                        </div>
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-indigo-500 rounded-full transition-all duration-500"
                        style={{ width: `${method.weight * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Adjustments Summary */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <h3 className="text-sm font-medium text-white mb-4">Valuation Adjustments</h3>
                <div className="space-y-2">
                  {MOCK_VALUATION.adjustments.map((adj, idx) => (
                    <div key={idx} className="flex items-center justify-between text-sm">
                      <span className="text-neutral-400">{adj.category}</span>
                      <span className={cn(
                        "font-mono",
                        adj.amount > 0 ? "text-emerald-500" : "text-red-500"
                      )}>
                        {adj.amount > 0 ? "+" : ""}${adj.amount.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Comparable Sales */}
          <section className="mb-8">
            <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-medium text-white flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-indigo-400" />
                  Comparable Sales
                </h2>
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <span>Avg: ${(avgComparablePrice / 1000).toFixed(0)}K</span>
                  <span>•</span>
                  <span>Range: ${(priceRange.min / 1000).toFixed(0)}K - ${(priceRange.max / 1000).toFixed(0)}K</span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-[10px] text-neutral-400 font-mono uppercase tracking-wider border-b border-white/10">
                      <th className="text-left pb-3 pl-4">Property</th>
                      <th className="text-left pb-3">Sale Price</th>
                      <th className="text-left pb-3">$/Sqft</th>
                      <th className="text-left pb-3">Details</th>
                      <th className="text-left pb-3">Similarity</th>
                      <th className="text-right pb-3 pr-4">Adjusted</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {MOCK_COMPARABLES.map((comp) => (
                      <tr key={comp.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="py-4 pl-4">
                          <div className="text-white font-medium">{comp.address}</div>
                          <div className="text-[10px] text-neutral-500">
                            {comp.distance}mi • Sold {comp.saleDate.toLocaleDateString()}
                          </div>
                        </td>
                        <td className="py-4 text-white font-mono">
                          ${comp.salePrice.toLocaleString()}
                        </td>
                        <td className="py-4 text-neutral-300 font-mono">
                          ${comp.pricePerSquareFoot}
                        </td>
                        <td className="py-4">
                          <div className="text-[10px] text-neutral-400 space-y-0.5">
                            <div>{comp.bedrooms}bd • {comp.bathrooms}ba • {comp.squareFootage.toLocaleString()}sqft</div>
                            <div>Built {comp.yearBuilt} • {comp.condition}</div>
                          </div>
                        </td>
                        <td className="py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-emerald-500 rounded-full"
                                style={{ width: `${comp.similarity * 100}%` }}
                              />
                            </div>
                            <span className="text-xs text-neutral-400">{Math.round(comp.similarity * 100)}%</span>
                          </div>
                        </td>
                        <td className="py-4 text-right font-mono text-white pr-4">
                          ${comp.adjustedPrice.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Market Trends */}
          <section>
            <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6">
              <h2 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-indigo-400" />
                Market Trends (5 Years)
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                {MOCK_MARKET_TRENDS.map((trend, idx) => (
                  <div key={idx} className="border border-white/5 rounded-lg p-4 hover:border-white/10 transition-colors">
                    <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-2">{trend.period}</div>
                    <div className="text-lg font-medium text-white mb-1">
                      ${(trend.medianPrice / 1000000).toFixed(2)}M
                    </div>
                    <div className="text-xs text-neutral-500 mb-2">
                      ${trend.pricePerSquareFoot}/sqft
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-neutral-400">
                      <Activity className="w-3 h-3" />
                      {trend.numberOfSales} sales
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
