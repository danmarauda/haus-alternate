import { useState, useMemo } from "react";
import { Slider } from "@/components/ui/slider";
import { Calculator, Info, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface MortgageCalculatorProps {
  propertyPrice: number;
  className?: string;
}

export const MortgageCalculator = ({ propertyPrice, className }: MortgageCalculatorProps) => {
  const [depositPercent, setDepositPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.14);
  const [loanTerm, setLoanTerm] = useState(30);
  const [showDetails, setShowDetails] = useState(false);

  const calculations = useMemo(() => {
    const depositAmount = (propertyPrice * depositPercent) / 100;
    const loanAmount = propertyPrice - depositAmount;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    // Monthly repayment calculation (P&I)
    const monthlyRepayment =
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const totalRepayment = monthlyRepayment * numberOfPayments;
    const totalInterest = totalRepayment - loanAmount;

    // Australian stamp duty calculation (NSW rates as example)
    const stampDuty = calculateStampDutyNSW(propertyPrice);

    // Lenders Mortgage Insurance (if deposit < 20%)
    const lmiRequired = depositPercent < 20;
    const lmiEstimate = lmiRequired ? estimateLMI(loanAmount, depositPercent) : 0;

    return {
      depositAmount,
      loanAmount,
      monthlyRepayment: isNaN(monthlyRepayment) ? 0 : monthlyRepayment,
      totalRepayment: isNaN(totalRepayment) ? 0 : totalRepayment,
      totalInterest: isNaN(totalInterest) ? 0 : totalInterest,
      stampDuty,
      lmiRequired,
      lmiEstimate,
    };
  }, [propertyPrice, depositPercent, interestRate, loanTerm]);

  // NSW Stamp Duty calculation (simplified)
  function calculateStampDutyNSW(price: number): number {
    if (price <= 16000) return price * 0.0125;
    if (price <= 35000) return 200 + (price - 16000) * 0.015;
    if (price <= 93000) return 485 + (price - 35000) * 0.0175;
    if (price <= 351000) return 1500 + (price - 93000) * 0.035;
    if (price <= 1168000) return 10530 + (price - 351000) * 0.045;
    if (price <= 3505000) return 47295 + (price - 1168000) * 0.055;
    return 175832 + (price - 3505000) * 0.07;
  }

  // LMI estimate (simplified)
  function estimateLMI(loanAmount: number, depositPercent: number): number {
    const lvr = 100 - depositPercent;
    let lmiRate = 0;
    if (lvr > 95) lmiRate = 0.04;
    else if (lvr > 90) lmiRate = 0.03;
    else if (lvr > 85) lmiRate = 0.02;
    else if (lvr > 80) lmiRate = 0.01;
    return loanAmount * lmiRate;
  }

  const formatCurrency = (amount: number) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(2)}M`;
    }
    return `$${amount.toLocaleString("en-AU", { maximumFractionDigits: 0 })}`;
  };

  return (
    <div className={cn("p-6 bg-card rounded-2xl border border-border space-y-6", className)}>
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
          <Calculator className="w-5 h-5 text-foreground" />
        </div>
        <div>
          <h3 className="font-space font-medium text-foreground">Mortgage Estimator</h3>
          <span className="text-xs text-muted-foreground font-geist">Australian market rates</span>
        </div>
      </div>

      {/* Deposit Slider */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground font-geist">Deposit ({depositPercent}%)</span>
          <span className="text-sm font-medium text-foreground font-geist">
            {formatCurrency(calculations.depositAmount)}
          </span>
        </div>
        <Slider
          value={[depositPercent]}
          onValueChange={(value) => setDepositPercent(value[0])}
          min={5}
          max={50}
          step={1}
          className="cursor-pointer"
        />
        <div className="flex justify-between text-xs text-muted-foreground font-mono">
          <span>5%</span>
          <span>50%</span>
        </div>
      </div>

      {/* Interest Rate Slider */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground font-geist">Interest Rate</span>
          <span className="text-sm font-medium text-foreground font-geist">{interestRate.toFixed(2)}% p.a.</span>
        </div>
        <Slider
          value={[interestRate]}
          onValueChange={(value) => setInterestRate(value[0])}
          min={4}
          max={10}
          step={0.01}
          className="cursor-pointer"
        />
        <div className="flex justify-between text-xs text-muted-foreground font-mono">
          <span>4%</span>
          <span>10%</span>
        </div>
      </div>

      {/* Loan Term */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground font-geist">Loan Term</span>
          <span className="text-sm font-medium text-foreground font-geist">{loanTerm} years</span>
        </div>
        <div className="flex gap-2">
          {[25, 30].map((term) => (
            <button
              key={term}
              onClick={() => setLoanTerm(term)}
              className={cn(
                "flex-1 py-2 px-4 rounded-lg text-sm font-geist transition-colors",
                loanTerm === term
                  ? "bg-foreground text-background"
                  : "bg-secondary text-muted-foreground hover:bg-accent"
              )}
            >
              {term} years
            </button>
          ))}
        </div>
      </div>

      {/* Monthly Repayment */}
      <div className="pt-4 border-t border-border">
        <div className="flex items-baseline justify-between">
          <span className="text-2xl font-space font-medium text-foreground">
            {formatCurrency(calculations.monthlyRepayment)}
          </span>
          <span className="text-sm text-muted-foreground font-geist">/ month</span>
        </div>
        <p className="text-xs text-muted-foreground font-geist mt-1">
          Based on {interestRate.toFixed(2)}% p.a. over {loanTerm} years.
        </p>
      </div>

      {/* LMI Warning */}
      {calculations.lmiRequired && (
        <div className="flex items-start gap-2 p-3 bg-warning/10 border border-warning/20 rounded-lg">
          <Info className="w-4 h-4 text-warning shrink-0 mt-0.5" />
          <div>
            <p className="text-xs text-foreground font-geist font-medium">LMI Required</p>
            <p className="text-xs text-muted-foreground font-geist">
              Est. {formatCurrency(calculations.lmiEstimate)} for deposits under 20%
            </p>
          </div>
        </div>
      )}

      {/* Stamp Duty */}
      <div className="flex items-center justify-between py-3 border-y border-border">
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground font-geist">Stamp Duty Est.</span>
          <span className="text-[10px] text-muted-foreground font-mono bg-secondary px-1.5 py-0.5 rounded">NSW</span>
        </div>
        <span className="text-sm font-medium text-foreground font-geist">
          {formatCurrency(calculations.stampDuty)}
        </span>
      </div>

      {/* Expandable Details */}
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="flex items-center justify-between w-full text-sm text-muted-foreground font-geist hover:text-foreground transition-colors"
      >
        <span>View breakdown</span>
        {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>

      {showDetails && (
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground font-geist">Loan Amount</span>
            <span className="text-foreground font-geist">{formatCurrency(calculations.loanAmount)}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground font-geist">Total Interest</span>
            <span className="text-foreground font-geist">{formatCurrency(calculations.totalInterest)}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground font-geist">Total Repayment</span>
            <span className="text-foreground font-geist font-medium">{formatCurrency(calculations.totalRepayment)}</span>
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <p className="text-[10px] text-muted-foreground font-geist leading-relaxed">
        This is an estimate only. Actual rates and fees may vary. Consult a licensed mortgage broker for accurate advice.
      </p>
    </div>
  );
};
