import { useState } from "react";
import { LineChart, TrendingUp, ArrowRight } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const chartData = [
  { month: "Jan", value: 780000, prediction: 780000 },
  { month: "Feb", value: 785000, prediction: 788000 },
  { month: "Mar", value: 790000, prediction: 795000 },
  { month: "Apr", value: 795000, prediction: 802000 },
  { month: "May", value: 800000, prediction: 810000 },
  { month: "Jun", value: 805000, prediction: 818000 },
  { month: "Jul", value: null, prediction: 825000 },
  { month: "Aug", value: null, prediction: 832000 },
  { month: "Sep", value: null, prediction: 838000 },
  { month: "Oct", value: null, prediction: 845000 },
  { month: "Nov", value: null, prediction: 850000 },
  { month: "Dec", value: null, prediction: 858000 },
];

const valuationMethods = [
  { id: "comparable", name: "Comparable Sales", value: 785000, change: "+2.1%" },
  { id: "hedonic", name: "Hedonic Regression", value: 812000, change: "+5.6%" },
  { id: "dcf", name: "DCF Analysis", value: 798000, change: "+3.8%" },
  { id: "ml", name: "ML Forecast", value: 805000, change: "+4.7%" },
];

export const InvestmentIntelligenceCard = () => {
  const [activeMethod, setActiveMethod] = useState("comparable");
  const [hoveredData, setHoveredData] = useState<{ month: string; value: number } | null>(null);

  const activeMethodData = valuationMethods.find(m => m.id === activeMethod);

  return (
    <div className="rounded-2xl bg-card/80 ring-1 ring-border/60 backdrop-blur shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between p-5 border-b border-border/60">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 ring-1 ring-cyan-500/30 flex items-center justify-center">
            <LineChart className="w-5 h-5 text-cyan-400" />
          </div>
          <h2 className="text-foreground font-medium tracking-tight">Investment Intelligence</h2>
        </div>
        <span className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full">15+ methods</span>
      </div>

      <div className="p-5">
        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="p-3 rounded-xl bg-card ring-1 ring-border text-center">
            <p className="text-[10px] text-muted-foreground">Accuracy</p>
            <p className="text-lg font-semibold text-cyan-400">85%</p>
          </div>
          <div className="p-3 rounded-xl bg-card ring-1 ring-border text-center">
            <p className="text-[10px] text-muted-foreground">ROI Potential</p>
            <p className="text-lg font-semibold text-emerald-400">+12.4%</p>
          </div>
          <div className="p-3 rounded-xl bg-card ring-1 ring-border text-center">
            <p className="text-[10px] text-muted-foreground">Score</p>
            <p className="text-lg font-semibold text-amber-400">8.7/10</p>
          </div>
        </div>

        {/* Interactive Chart */}
        <div className="p-4 rounded-xl bg-muted/30 ring-1 ring-border mb-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-foreground">12-Month Forecast</h3>
            {hoveredData && (
              <span className="text-xs text-cyan-400">
                {hoveredData.month}: ${hoveredData.value.toLocaleString()}
              </span>
            )}
          </div>
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={chartData}
                onMouseMove={(e) => {
                  if (e.activePayload) {
                    const data = e.activePayload[0]?.payload;
                    if (data) {
                      setHoveredData({ month: data.month, value: data.prediction });
                    }
                  }
                }}
                onMouseLeave={() => setHoveredData(null)}
              >
                <defs>
                  <linearGradient id="colorPrediction" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(187, 85%, 53%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(187, 85%, 53%)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }}
                />
                <YAxis hide domain={["dataMin - 10000", "dataMax + 10000"]} />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-card/90 backdrop-blur p-2 rounded-lg ring-1 ring-border text-xs">
                          <p className="text-foreground font-medium">{payload[0]?.payload.month}</p>
                          {payload[0]?.payload.value && (
                            <p className="text-emerald-400">Actual: ${payload[0]?.payload.value.toLocaleString()}</p>
                          )}
                          <p className="text-cyan-400">Forecast: ${payload[0]?.payload.prediction.toLocaleString()}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="hsl(142, 71%, 45%)"
                  strokeWidth={2}
                  fill="url(#colorActual)"
                  connectNulls={false}
                />
                <Area
                  type="monotone"
                  dataKey="prediction"
                  stroke="hsl(187, 85%, 53%)"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  fill="url(#colorPrediction)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Valuation Method Toggle */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {valuationMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => setActiveMethod(method.id)}
              className={`p-2.5 rounded-xl ring-1 transition-all text-left ${
                activeMethod === method.id
                  ? "bg-cyan-500/10 ring-cyan-500/30"
                  : "bg-card ring-border hover:bg-muted/50"
              }`}
            >
              <p className="text-[11px] text-muted-foreground">{method.name}</p>
              <div className="flex items-center justify-between mt-1">
                <span className={`text-sm font-medium ${activeMethod === method.id ? "text-cyan-400" : "text-foreground"}`}>
                  ${method.value.toLocaleString()}
                </span>
                <span className="text-[10px] text-emerald-400 flex items-center gap-0.5">
                  <TrendingUp className="w-3 h-3" />
                  {method.change}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Active Method Detail */}
        <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 ring-1 ring-cyan-500/20 mb-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground">{activeMethodData?.name} Valuation</p>
              <p className="text-xl font-semibold text-foreground">${activeMethodData?.value.toLocaleString()}</p>
            </div>
            <span className="text-sm text-emerald-400 flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              {activeMethodData?.change}
            </span>
          </div>
        </div>

        {/* CTA */}
        <button className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-cyan-500/10 ring-1 ring-cyan-500/30 hover:bg-cyan-500/20 transition-all group">
          <span className="text-sm font-medium text-cyan-400">Run Full Analysis</span>
          <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
