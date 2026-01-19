import { useState, useEffect } from "react";
import { Server, Network, Atom, Activity, CheckCircle2 } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

const generateResponseData = () => {
  return Array.from({ length: 24 }, (_, i) => ({
    hour: i,
    value: Math.floor(Math.random() * 30) + 70,
  }));
};

export const PlatformPerformanceCard = () => {
  const [uptime, setUptime] = useState({ days: 365, hours: 23, minutes: 47 });
  const [activeUsers, setActiveUsers] = useState(98547);
  const [responseData, setResponseData] = useState(generateResponseData);
  const [avgResponse, setAvgResponse] = useState(87);

  // Live-updating metrics simulation
  useEffect(() => {
    const uptimeInterval = setInterval(() => {
      setUptime(prev => {
        let { days, hours, minutes } = prev;
        minutes++;
        if (minutes >= 60) {
          minutes = 0;
          hours++;
          if (hours >= 24) {
            hours = 0;
            days++;
          }
        }
        return { days, hours, minutes };
      });
    }, 60000); // Update every minute

    const usersInterval = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 10) - 3);
    }, 3000);

    const responseInterval = setInterval(() => {
      setResponseData(generateResponseData());
      setAvgResponse(Math.floor(Math.random() * 20) + 80);
    }, 5000);

    return () => {
      clearInterval(uptimeInterval);
      clearInterval(usersInterval);
      clearInterval(responseInterval);
    };
  }, []);

  return (
    <div className="rounded-2xl bg-card/80 ring-1 ring-border/60 backdrop-blur shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between p-5 border-b border-border/60">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 ring-1 ring-blue-500/30 flex items-center justify-center">
            <Server className="w-5 h-5 text-blue-400" />
          </div>
          <h2 className="text-foreground font-medium tracking-tight">Platform Performance</h2>
        </div>
        
        {/* Status Indicator */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-xs text-emerald-400">All systems operational</span>
        </div>
      </div>

      <div className="p-5">
        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="p-3 rounded-xl bg-card ring-1 ring-border">
            <p className="text-[10px] text-muted-foreground">Active Users</p>
            <p className="text-xl font-semibold text-foreground tabular-nums">
              {activeUsers.toLocaleString()}
            </p>
            <p className="text-[10px] text-emerald-400 mt-0.5">+12% from yesterday</p>
          </div>
          <div className="p-3 rounded-xl bg-card ring-1 ring-border">
            <p className="text-[10px] text-muted-foreground">Avg. Response</p>
            <p className="text-xl font-semibold text-emerald-400 tabular-nums">
              {avgResponse}ms
            </p>
            <p className="text-[10px] text-muted-foreground mt-0.5">Last 24 hours</p>
          </div>
          <div className="p-3 rounded-xl bg-card ring-1 ring-border">
            <p className="text-[10px] text-muted-foreground">Uptime</p>
            <p className="text-xl font-semibold text-cyan-400">99.99%</p>
            <p className="text-[10px] text-muted-foreground mt-0.5 tabular-nums">
              {uptime.days}d {uptime.hours}h {uptime.minutes}m
            </p>
          </div>
          <div className="p-3 rounded-xl bg-card ring-1 ring-border">
            <p className="text-[10px] text-muted-foreground">Security Breaches</p>
            <p className="text-xl font-semibold text-foreground">Zero</p>
            <p className="text-[10px] text-emerald-400 mt-0.5">Forever</p>
          </div>
        </div>

        {/* Response Time Graph */}
        <div className="p-4 rounded-xl bg-muted/30 ring-1 ring-border mb-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-medium text-foreground">Response Time (24h)</h3>
            <span className="text-[10px] text-muted-foreground">Updated live</span>
          </div>
          <div className="h-20">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={responseData}>
                <defs>
                  <linearGradient id="colorResponse" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="hsl(142, 71%, 45%)"
                  strokeWidth={2}
                  fill="url(#colorResponse)"
                  isAnimationActive={true}
                  animationDuration={500}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Infrastructure Features */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { icon: Network, label: "Neural Mesh", status: "Active" },
            { icon: Atom, label: "Quantum Security", status: "Enabled" },
            { icon: Activity, label: "Real-Time AI", status: "Online" },
          ].map((feature, idx) => (
            <div
              key={feature.label}
              className="p-3 rounded-xl bg-card ring-1 ring-border text-center animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="w-8 h-8 mx-auto rounded-lg bg-blue-500/10 ring-1 ring-blue-500/30 flex items-center justify-center mb-2">
                <feature.icon className="w-4 h-4 text-blue-400" />
              </div>
              <p className="text-[10px] text-foreground">{feature.label}</p>
              <div className="flex items-center justify-center gap-1 mt-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span className="text-[9px] text-emerald-400">{feature.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
