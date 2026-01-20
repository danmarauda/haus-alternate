import { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  Activity,
  BarChart3,
  PieChart,
  LineChart,
  Calendar,
  Home,
  MapPin,
  ArrowRight,
  Check,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

interface PropertyAnalyticsProps {
  price: number;
  priceHistory?: { date: string; price: number }[];
  suburbPerformance?: { period: string; change: number; auctionClearance?: number; daysOnMarket?: number; pricePerSqm?: number };
  comparables?: {
    address: string;
    price: number;
    saleDate: string;
    distance: string;
    beds: number;
    baths: number;
    cars: number;
  }[];
}

export const PropertyAnalytics: React.FC<PropertyAnalyticsProps> = ({
  price,
  priceHistory = [],
  suburbPerformance,
  comparables = [],
}) => {
  const [selectedTimeframe, setSelectedTimeframe] = useState<'1y' | '5y' | 'all'>('5y');

  // Simulated data
  const chartData = priceHistory.length > 0 ? priceHistory : [
    { date: '2019', price: 28000000 },
    { date: '2020', price: 29500000 },
    { date: '2021', price: 31000000 },
    { date: '2022', price: 32000000 },
    { date: '2023', price: 33500000 },
    { date: '2024', price: 35000000 },
  ];

  const suburbMetrics = suburbPerformance || {
    period: '12 months',
    change: 12.5,
    auctionClearance: 78,
    daysOnMarket: 45,
    pricePerSqm: 40234,
  };

  const formatPrice = (price: number) => {
    if (price >= 1000000) return `$${(price / 1000000).toFixed(1)}M`;
    return `$${price.toLocaleString()}`;
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-display-md font-display">Property Analytics</h2>
        <Badge variant="outline" className="border-haus-gold text-haus-gold">
          <Activity className="w-3 h-3 mr-1" />
          Live Data
        </Badge>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Price History Chart */}
        <Card className="border- haus-stone">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Price History</CardTitle>
              <div className="flex gap-1">
                {(['1y', '5y', 'all'] as const).map((tf) => (
                  <button
                    key={tf}
                    onClick={() => setSelectedTimeframe(tf)}
                    className={`px-3 py-1 text-xs font-space rounded-lg transition-all ${
                      selectedTimeframe === tf
                        ? 'bg-haus-gold text-haus-black'
                        : 'bg-secondary text-muted-foreground'
                    }`}
                  >
                    {tf === '1y' ? '1 Year' : tf === '5y' ? '5 Years' : 'All'}
                  </button>
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-48 relative">
              {/* Simulated Line Chart */}
              <svg className="w-full h-full" viewBox="0 0 400 200">
                {/* Grid lines */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <line
                    key={i}
                    x1="0"
                    y1={i * 40 + 20}
                    x2="400"
                    y2={i * 40 + 20}
                    stroke="#E8E4DD"
                    strokeWidth="1"
                  />
                ))}
                {/* Price line */}
                <path
                  d={chartData.map((d, i) => {
                    const x = (i / (chartData.length - 1)) * 380 + 10;
                    const y = 180 - ((d.price - 25000000) / 15000000) * 140;
                    return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                  }).join(' ')}
                  stroke="#C9A962"
                  strokeWidth="3"
                  fill="none"
                />
                {/* Data points */}
                {chartData.map((d, i) => {
                  const x = (i / (chartData.length - 1)) * 380 + 10;
                  const y = 180 - ((d.price - 25000000) / 15000000) * 140;
                  return (
                    <g key={i}>
                      <circle cx={x} cy={y} r="6" fill="#C9A962" />
                      <circle cx={x} cy={y} r="10" fill="#C9A962" opacity="0.3">
                        <animate
                          attributeName="r"
                          values="10;14;10"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    </g>
                  );
                })}
              </svg>

              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-muted-foreground font-mono py-2">
                <span>$34M</span>
                <span>$32M</span>
                <span>$30M</span>
                <span>$28M</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Suburb Performance */}
        <Card className="border- haus-stone">
          <CardHeader>
            <CardTitle className="text-lg">Suburb Performance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Growth Metric */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">12-Month Growth</span>
                <span className="text-success font-space font-medium flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  +{suburbMetrics.change}%
                </span>
              </div>
              <Progress value={suburbMetrics.change} className="h-2" />
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-secondary/50 rounded-xl">
                <span className="text-xs text-muted-foreground">Auction Clearance</span>
                <p className="text-lg font-space font-medium">{suburbMetrics.auctionClearance ?? 78}%</p>
                <div className="flex items-center gap-1 mt-1">
                  <div className="w-2 h-2 rounded-full bg-success" />
                  <span className="text-xs text-muted-foreground">Above Average</span>
                </div>
              </div>
              <div className="p-3 bg-secondary/50 rounded-xl">
                <span className="text-xs text-muted-foreground">Days on Market</span>
                <p className="text-lg font-space font-medium">{suburbMetrics.daysOnMarket ?? 45}</p>
                <div className="flex items-center gap-1 mt-1">
                  <div className="w-2 h-2 rounded-full bg-success" />
                  <span className="text-xs text-muted-foreground">Fast Selling</span>
                </div>
              </div>
              <div className="p-3 bg-secondary/50 rounded-xl col-span-2">
                <span className="text-xs text-muted-foreground">Price per m²</span>
                <p className="text-lg font-space font-medium">{formatCurrency(suburbMetrics.pricePerSqm ?? 40234)}/m²</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comparable Sales */}
        <Card className="border- haus-stone md:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">Comparable Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border- haus-stone">
                    <th className="text-left py-3 px-4 font-space text-sm text-muted-foreground">Address</th>
                    <th className="text-right py-3 px-4 font-space text-sm text-muted-foreground">Sold Price</th>
                    <th className="text-center py-3 px-4 font-space text-sm text-muted-foreground">Date</th>
                    <th className="text-center py-3 px-4 font-space text-sm text-muted-foreground">Distance</th>
                    <th className="text-center py-3 px-4 font-space text-sm text-muted-foreground">Beds/Baths/Cars</th>
                    <th className="text-center py-3 px-4 font-space text-sm text-muted-foreground"></th>
                  </tr>
                </thead>
                <tbody>
                  {comparables.length > 0 ? comparables.map((comp, index) => (
                    <tr key={index} className="border-b border- haus-stone/50 hover:bg-secondary/30">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-haus-gold" />
                          <span className="font-space text-sm">{comp.address}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-right font-space font-medium">{formatPrice(comp.price)}</td>
                      <td className="py-3 px-4 text-center text-sm text-muted-foreground">{comp.saleDate}</td>
                      <td className="py-3 px-4 text-center text-sm">{comp.distance}</td>
                      <td className="py-3 px-4 text-center text-sm font-space">
                        {comp.beds}/{comp.baths}/{comp.cars}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <Button variant="ghost" size="sm" className="text-haus-gold">
                          View
                        </Button>
                      </td>
                    </tr>
                  )) : (
                    <tr>
                      <td colSpan={6} className="py-8 text-center text-muted-foreground">
                        No comparable sales data available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Price Prediction */}
        <Card className="border- haus-stone">
          <CardHeader>
            <CardTitle className="text-lg">Price Prediction</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center py-6">
              <div className="relative w-40 h-40 mx-auto mb-4">
                {/* Gauge Chart */}
                <svg viewBox="0 0 100 50" className="w-full h-full">
                  <path
                    d="M 10 50 A 40 40 0 0 1 90 50"
                    fill="none"
                    stroke="#E8E4DD"
                    strokeWidth="12"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 10 50 A 40 40 0 0 1 90 50"
                    fill="none"
                    stroke="#C9A962"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray="125 126"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-space font-medium text-haus-gold">87%</span>
                  <span className="text-xs text-muted-foreground">Confidence</span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Estimated Value Range</p>
                <p className="text-2xl font-space font-medium">
                  {formatPrice(price * 0.95)} - {formatPrice(price * 1.05)}
                </p>
              </div>
            </div>

            {/* Range Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Low Estimate</span>
                <span>High Estimate</span>
              </div>
              <div className="relative h-2 bg-secondary rounded-full">
                <div
                  className="absolute inset-y-0 left-[20%] right-[20%] bg-haus-gold/30 rounded-full"
                />
                <div className="absolute top-1/2 -translate-y-1/2 left-1/2 w-3 h-3 bg-haus-gold rounded-full shadow-lg" />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Last updated: Today</span>
              <Badge variant="outline" className="border-success text-success">
                <Check className="w-3 h-3 mr-1" />
                High Confidence
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Market Insights */}
        <Card className="border- haus-stone">
          <CardHeader>
            <CardTitle className="text-lg">Market Insights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-success/5 rounded-xl border border-success/20">
              <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-space font-medium text-success">Seller's Market</p>
                <p className="text-sm text-muted-foreground">High demand, low supply in this area</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-warning/5 rounded-xl border border-warning/20">
              <AlertCircle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-space font-medium text-warning">Price Growth Trending Up</p>
                <p className="text-sm text-muted-foreground">Values increasing +12.5% YoY</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-info/5 rounded-xl border border-info/20">
              <Activity className="w-5 h-5 text-info mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-space font-medium text-info">High Auction Clearance</p>
                <p className="text-sm text-muted-foreground">78% of properties selling at auction</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
