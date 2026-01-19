import { useState, useEffect } from "react";
import { FileText, Download, Share2, ToggleLeft, ToggleRight } from "lucide-react";

interface LineItem {
  label: string;
  value: string;
  amount?: number;
}

const sampleReceipt: LineItem[] = [
  { label: "Agent Commission", value: "2.5% + GST", amount: 22000 },
  { label: "Marketing Fees", value: "Included", amount: 0 },
  { label: "Legal Costs", value: "$1,200 est.", amount: 1200 },
  { label: "Finance Fees", value: "$650 est.", amount: 650 },
  { label: "Building & Pest", value: "$550", amount: 550 },
];

const lastTransactionReceipt: LineItem[] = [
  { label: "Agent Commission", value: "2.2% + GST", amount: 19360 },
  { label: "Premium Listing", value: "$990", amount: 990 },
  { label: "Photography", value: "$450", amount: 450 },
  { label: "Legal Costs", value: "$1,450", amount: 1450 },
  { label: "Stamp Duty", value: "$31,200", amount: 31200 },
];

export const TransparencyReceiptCard = () => {
  const [viewMode, setViewMode] = useState<"sample" | "transaction">("sample");
  const [visibleItems, setVisibleItems] = useState<number>(0);
  const [isDownloading, setIsDownloading] = useState(false);

  const currentReceipt = viewMode === "sample" ? sampleReceipt : lastTransactionReceipt;
  const total = currentReceipt.reduce((sum, item) => sum + (item.amount || 0), 0);
  const propertyValue = viewMode === "sample" ? 880000 : 880000;

  // Animate items in sequentially
  useEffect(() => {
    setVisibleItems(0);
    const timer = setInterval(() => {
      setVisibleItems(prev => {
        if (prev >= currentReceipt.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 200);
    return () => clearInterval(timer);
  }, [viewMode, currentReceipt.length]);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => setIsDownloading(false), 1500);
  };

  return (
    <div className="rounded-2xl bg-card/80 ring-1 ring-border/60 backdrop-blur shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between p-5 border-b border-border/60">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sky-500/10 ring-1 ring-sky-500/30 flex items-center justify-center">
            <FileText className="w-5 h-5 text-sky-400" />
          </div>
          <h2 className="text-foreground font-medium tracking-tight">Transparency Receipt</h2>
        </div>
        
        {/* Toggle */}
        <button
          onClick={() => setViewMode(viewMode === "sample" ? "transaction" : "sample")}
          className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          {viewMode === "sample" ? (
            <ToggleLeft className="w-5 h-5 text-muted-foreground" />
          ) : (
            <ToggleRight className="w-5 h-5 text-sky-400" />
          )}
          <span>{viewMode === "sample" ? "Sample" : "Last Transaction"}</span>
        </button>
      </div>

      <div className="p-5">
        {/* Property Value Header */}
        <div className="p-3 rounded-xl bg-gradient-to-r from-sky-500/10 to-cyan-500/10 ring-1 ring-sky-500/20 mb-4">
          <p className="text-xs text-muted-foreground">Property Value</p>
          <p className="text-xl font-semibold text-foreground">${propertyValue.toLocaleString()}</p>
        </div>

        {/* Line Items */}
        <div className="space-y-2 mb-4">
          {currentReceipt.map((item, idx) => (
            <div
              key={`${viewMode}-${idx}`}
              className={`flex items-center justify-between p-3 rounded-lg bg-card ring-1 ring-border transition-all duration-300 ${
                idx < visibleItems ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <span className="text-sm text-foreground">{item.label}</span>
              <div className="text-right">
                <span className="text-sm text-foreground">{item.value}</span>
                {item.amount !== undefined && item.amount > 0 && (
                  <p className="text-[10px] text-muted-foreground">${item.amount.toLocaleString()}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Total Calculation */}
        <div 
          className={`p-4 rounded-xl bg-muted/30 ring-1 ring-border transition-all duration-500 ${
            visibleItems >= currentReceipt.length ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">Total Estimated Costs</span>
            <span className="text-lg font-semibold text-sky-400">${total.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-border/60">
            <span className="text-xs text-muted-foreground">Percentage of Property Value</span>
            <span className="text-sm text-foreground">{((total / propertyValue) * 100).toFixed(2)}%</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-4">
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-card ring-1 ring-border hover:bg-muted/50 transition-all disabled:opacity-50"
          >
            <Download className={`w-4 h-4 text-muted-foreground ${isDownloading ? "animate-bounce" : ""}`} />
            <span className="text-sm text-foreground">{isDownloading ? "Downloading..." : "Download"}</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-card ring-1 ring-border hover:bg-muted/50 transition-all">
            <Share2 className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-foreground">Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};
