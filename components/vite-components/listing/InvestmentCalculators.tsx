import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Calculator,
  TrendingUp,
  DollarSign,
  Home,
  PiggyBank,
  Check,
  ArrowRight,
} from "lucide-react";

interface InvestmentCalculatorsProps {
  propertyPrice: number;
}

export const InvestmentCalculators: React.FC<InvestmentCalculatorsProps> = ({
  propertyPrice,
}) => {
  // Mortgage Calculator State
  const [deposit, setDeposit] = useState(20);
  const [interestRate, setInterestRate] = useState(7.2);
  const [loanTerm, setLoanTerm] = useState(30);
  const [repaymentFreq, setRepaymentFreq] = useState<'monthly' | 'fortnightly' | 'weekly'>('monthly');

  // Rental Yield Calculator State
  const [weeklyRent, setWeeklyRent] = useState(3500);
  const [managementFee, setManagementFee] = useState(7);
  const [vacancyRate, setVacancyRate] = useState(2);
  const [annualExpenses, setAnnualExpenses] = useState(15000);

  // Investment Projection State
  const [scenario, setScenario] = useState<'conservative' | 'moderate' | 'optimistic'>('moderate');
  const [projectionYears, setProjectionYears] = useState(10);

  // Affordability Calculator State
  const [annualIncome, setAnnualIncome] = useState(300000);
  const [otherIncome, setOtherIncome] = useState(0);
  const [livingExpenses, setLivingExpenses] = useState(80000);
  const [otherLoans, setOtherLoans] = useState(0);

  // Calculations
  const mortgageCalc = () => {
    const depositAmount = (propertyPrice * deposit) / 100;
    const loanAmount = propertyPrice - depositAmount;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    const monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    let annualPayment = monthlyPayment * 12;
    if (repaymentFreq === 'fortnightly') annualPayment *= 26 / 12;
    if (repaymentFreq === 'weekly') annualPayment *= 52 / 12;

    const totalInterest = (monthlyPayment * numberOfPayments) - loanAmount;
    const totalRepayment = monthlyPayment * numberOfPayments;

    // Stamp Duty (NSW)
    let stampDuty = 0;
    if (propertyPrice <= 16000) stampDuty = propertyPrice * 0.0125;
    else if (propertyPrice <= 35000) stampDuty = 200 + (propertyPrice - 16000) * 0.015;
    else if (propertyPrice <= 93000) stampDuty = 485 + (propertyPrice - 35000) * 0.0175;
    else if (propertyPrice <= 351000) stampDuty = 1500 + (propertyPrice - 93000) * 0.035;
    else if (propertyPrice <= 1168000) stampDuty = 10530 + (propertyPrice - 351000) * 0.045;
    else stampDuty = 47295 + (propertyPrice - 1168000) * 0.055;

    return {
      depositAmount,
      loanAmount,
      monthlyPayment,
      annualPayment,
      totalInterest,
      totalRepayment,
      stampDuty,
      lmiRequired: deposit < 20,
    };
  };

  const rentalYieldCalc = () => {
    const annualRent = weeklyRent * 52;
    const managementCost = (annualRent * managementFee) / 100;
    const vacancyCost = (annualRent * vacancyRate) / 100;
    const netAnnualIncome = annualRent - managementCost - vacancyCost - annualExpenses;
    const grossYield = (annualRent / propertyPrice) * 100;
    const netYield = (netAnnualIncome / propertyPrice) * 100;
    const breakEvenRent = (annualExpenses + managementCost + vacancyCost) / (52 * (1 - managementFee / 100));

    return { annualRent, managementCost, vacancyCost, netAnnualIncome, grossYield, netYield, breakEvenRent };
  };

  const projectionCalc = () => {
    const growthRates = { conservative: 0.03, moderate: 0.06, optimistic: 0.09 };
    const growthRate = growthRates[scenario];
    const projection = [];

    let currentValue = propertyPrice;
    let currentLoan = propertyPrice * 0.8;
    let equity = 0;

    for (let year = 1; year <= projectionYears; year++) {
      currentValue *= (1 + growthRate);
      const annualPayment = currentLoan * 0.05;
      currentLoan -= annualPayment * 0.3;
      equity = currentValue - currentLoan;

      projection.push({
        year,
        propertyValue: currentValue,
        loanBalance: Math.max(0, currentLoan),
        equity,
        rentalIncome: currentValue * 0.025,
      });
    }

    return projection;
  };

  const affordabilityCalc = () => {
    const totalIncome = annualIncome + otherIncome;
    const totalExpenses = livingExpenses + otherLoans;
    const disposableIncome = totalIncome - totalExpenses;
    const maxBorrow = disposableIncome * 5;
    const maxPurchasePrice = maxBorrow * 1.25;

    return { totalIncome, totalExpenses, disposableIncome, maxBorrow, maxPurchasePrice };
  };

  const mortgage = mortgageCalc();
  const rentalYield = rentalYieldCalc();
  const projection = projectionCalc();
  const affordability = affordabilityCalc();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Calculator className="w-8 h-8 text-haus-gold" />
        <h2 className="text-display-md font-display">Financial Calculators</h2>
      </div>

      <Card className="border- haus-stone">
        <CardContent className="p-6">
          <Tabs defaultValue="mortgage" className="w-full">
            <TabsList className="w-full justify-start bg-secondary/50 p-1 rounded-xl h-auto mb-6">
              <TabsTrigger value="mortgage" className="data-[state=active]:bg-haus-gold data-[state=active]:text-haus-black">
                <Home className="w-4 h-4 mr-2" />
                Mortgage
              </TabsTrigger>
              <TabsTrigger value="yield" className="data-[state=active]:bg-haus-gold data-[state=active]:text-haus-black">
                <TrendingUp className="w-4 h-4 mr-2" />
                Rental Yield
              </TabsTrigger>
              <TabsTrigger value="projection" className="data-[state=active]:bg-haus-gold data-[state=active]:text-haus-black">
                <DollarSign className="w-4 h-4 mr-2" />
                Projection
              </TabsTrigger>
              <TabsTrigger value="affordability" className="data-[state=active]:bg-haus-gold data-[state=active]:text-haus-black">
                <PiggyBank className="w-4 h-4 mr-2" />
                Affordability
              </TabsTrigger>
            </TabsList>

            {/* Mortgage Calculator */}
            <TabsContent value="mortgage" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Label>Deposit ({deposit}%)</Label>
                      <span className="font-space text-sm">{formatPrice(mortgage.depositAmount)}</span>
                    </div>
                    <Slider
                      value={[deposit]}
                      onValueChange={([v]) => setDeposit(v)}
                      max={40}
                      min={5}
                      step={1}
                      className="py-4"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Label>Interest Rate ({interestRate}%)</Label>
                    </div>
                    <Slider
                      value={[interestRate]}
                      onValueChange={([v]) => setInterestRate(v)}
                      max={12}
                      min={4}
                      step={0.1}
                      className="py-4"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Label>Loan Term ({loanTerm} years)</Label>
                    </div>
                    <Slider
                      value={[loanTerm]}
                      onValueChange={([v]) => setLoanTerm(v)}
                      max={30}
                      min={10}
                      step={1}
                      className="py-4"
                    />
                  </div>

                  <div>
                    <Label>Repayment Frequency</Label>
                    <div className="flex gap-2 mt-2">
                      {(['monthly', 'fortnightly', 'weekly'] as const).map((freq) => (
                        <button
                          key={freq}
                          onClick={() => setRepaymentFreq(freq)}
                          className={`flex-1 py-2 px-3 rounded-lg text-sm font-space capitalize transition-all ${
                            repaymentFreq === freq
                              ? 'bg-haus-gold text-haus-black'
                              : 'bg-secondary text-muted-foreground hover:bg-secondary/70'
                          }`}
                        >
                          {freq}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4 p-6 bg-secondary/30 rounded-xl">
                  <h3 className="font-display text-lg mb-4">Repayment Summary</h3>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Loan Amount</span>
                      <span className="font-space font-medium">{formatPrice(mortgage.loanAmount)}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">{repaymentFreq} Repayment</span>
                      <span className="font-space text-xl text-haus-gold">{formatPrice(mortgage.monthlyPayment)}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Interest</span>
                      <span className="font-space font-medium">{formatPrice(mortgage.totalInterest)}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Repayment</span>
                      <span className="font-space font-medium">{formatPrice(mortgage.totalRepayment)}</span>
                    </div>

                    <div className="pt-3 border-t border- haus-stone space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Stamp Duty</span>
                        <span className="font-space font-medium">{formatPrice(mortgage.stampDuty)}</span>
                      </div>

                      {mortgage.lmiRequired && (
                        <div className="flex items-center gap-2">
                          <Badge className="bg-warning/10 text-warning border-warning/20">LMI Required</Badge>
                        </div>
                      )}
                    </div>
                  </div>

                  <Button className="w-full bg-haus-gold text-haus-black hover:bg-haus-gold/90">
                    Get Pre-Approved
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Rental Yield Calculator */}
            <TabsContent value="yield" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div>
                    <Label>Expected Weekly Rent</Label>
                    <div className="relative mt-2">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                      <Input
                        type="number"
                        value={weeklyRent}
                        onChange={(e) => setWeeklyRent(Number(e.target.value))}
                        className="pl-7"
                      />
                    </div>
                  </div>

                  <div>
                    <Label>Property Management Fee ({managementFee}%)</Label>
                    <Slider
                      value={[managementFee]}
                      onValueChange={([v]) => setManagementFee(v)}
                      max={15}
                      min={0}
                      step={0.5}
                      className="py-4"
                    />
                  </div>

                  <div>
                    <Label>Vacancy Rate ({vacancyRate}%)</Label>
                    <Slider
                      value={[vacancyRate]}
                      onValueChange={([v]) => setVacancyRate(v)}
                      max={10}
                      min={0}
                      step={0.5}
                      className="py-4"
                    />
                  </div>

                  <div>
                    <Label>Annual Expenses</Label>
                    <div className="relative mt-2">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                      <Input
                        type="number"
                        value={annualExpenses}
                        onChange={(e) => setAnnualExpenses(Number(e.target.value))}
                        className="pl-7"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4 p-6 bg-secondary/30 rounded-xl">
                  <h3 className="font-display text-lg mb-4">Yield Analysis</h3>

                  <div className="space-y-3">
                    <div className="p-4 bg-white rounded-xl">
                      <span className="text-xs text-muted-foreground">Gross Yield</span>
                      <p className="text-2xl font-space text-haus-gold">{rentalYield.grossYield.toFixed(2)}%</p>
                    </div>

                    <div className="p-4 bg-white rounded-xl">
                      <span className="text-xs text-muted-foreground">Net Yield</span>
                      <p className="text-2xl font-space text-haus-gold">{rentalYield.netYield.toFixed(2)}%</p>
                    </div>

                    <div className="p-4 bg-white rounded-xl">
                      <span className="text-xs text-muted-foreground">Annual Net Income</span>
                      <p className="text-xl font-space">{formatPrice(rentalYield.netAnnualIncome)}</p>
                    </div>

                    <div className="p-4 bg-white rounded-xl">
                      <span className="text-xs text-muted-foreground">Break-Even Rent</span>
                      <p className="text-xl font-space">{formatPrice(rentalYield.breakEvenRent)} / week</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Investment Projection */}
            <TabsContent value="projection" className="space-y-6">
              <div>
                <Label>Projection Scenario</Label>
                <div className="flex gap-2 mt-2">
                  {(['conservative', 'moderate', 'optimistic'] as const).map((s) => (
                    <button
                      key={s}
                      onClick={() => setScenario(s)}
                      className={`px-4 py-2 rounded-lg text-sm font-space capitalize transition-all ${
                        scenario === s
                          ? 'bg-haus-gold text-haus-black'
                          : 'bg-secondary text-muted-foreground hover:bg-secondary/70'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Label>Projection Period ({projectionYears} years)</Label>
                <div className="flex gap-2 mt-2">
                  {[5, 10, 20].map((years) => (
                    <button
                      key={years}
                      onClick={() => setProjectionYears(years)}
                      className={`px-4 py-2 rounded-lg text-sm font-space transition-all ${
                        projectionYears === years
                          ? 'bg-foreground text-background'
                          : 'bg-secondary text-muted-foreground hover:bg-secondary/70'
                      }`}
                    >
                      {years} Years
                    </button>
                  ))}
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border- haus-stone">
                      <th className="text-left py-3 px-4 font-space text-sm text-muted-foreground">Year</th>
                      <th className="text-right py-3 px-4 font-space text-sm text-muted-foreground">Property Value</th>
                      <th className="text-right py-3 px-4 font-space text-sm text-muted-foreground">Loan Balance</th>
                      <th className="text-right py-3 px-4 font-space text-sm text-muted-foreground">Equity</th>
                      <th className="text-right py-3 px-4 font-space text-sm text-muted-foreground">Rental Income</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projection.map((row) => (
                      <tr key={row.year} className="border-b border- haus-stone/50">
                        <td className="py-3 px-4 font-space">{row.year}</td>
                        <td className="py-3 px-4 text-right font-space">{formatPrice(row.propertyValue)}</td>
                        <td className="py-3 px-4 text-right font-space">{formatPrice(row.loanBalance)}</td>
                        <td className="py-3 px-4 text-right font-space text-haus-gold">{formatPrice(row.equity)}</td>
                        <td className="py-3 px-4 text-right font-space">{formatPrice(row.rentalIncome)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <Button variant="outline" className="w-full">
                Export to PDF
              </Button>
            </TabsContent>

            {/* Affordability Calculator */}
            <TabsContent value="affordability" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-display">Income</h3>

                  <div>
                    <Label>Annual Salary</Label>
                    <div className="relative mt-2">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                      <Input
                        type="number"
                        value={annualIncome}
                        onChange={(e) => setAnnualIncome(Number(e.target.value))}
                        className="pl-7"
                      />
                    </div>
                  </div>

                  <div>
                    <Label>Other Income</Label>
                    <div className="relative mt-2">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                      <Input
                        type="number"
                        value={otherIncome}
                        onChange={(e) => setOtherIncome(Number(e.target.value))}
                        className="pl-7"
                      />
                    </div>
                  </div>

                  <h3 className="font-display pt-4">Expenses</h3>

                  <div>
                    <Label>Living Expenses</Label>
                    <div className="relative mt-2">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                      <Input
                        type="number"
                        value={livingExpenses}
                        onChange={(e) => setLivingExpenses(Number(e.target.value))}
                        className="pl-7"
                      />
                    </div>
                  </div>

                  <div>
                    <Label>Other Loan Repayments</Label>
                    <div className="relative mt-2">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                      <Input
                        type="number"
                        value={otherLoans}
                        onChange={(e) => setOtherLoans(Number(e.target.value))}
                        className="pl-7"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4 p-6 bg-secondary/30 rounded-xl">
                  <h3 className="font-display text-lg mb-4">Affordability Summary</h3>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Income</span>
                      <span className="font-space">{formatPrice(affordability.totalIncome)}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Expenses</span>
                      <span className="font-space">{formatPrice(affordability.totalExpenses)}</span>
                    </div>

                    <div className="flex justify-between p-3 bg-white rounded-xl">
                      <span className="text-muted-foreground">Disposable Income</span>
                      <span className="font-space font-medium text-haus-gold">{formatPrice(affordability.disposableIncome)}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Maximum Borrowing</span>
                      <span className="font-space">{formatPrice(affordability.maxBorrow)}</span>
                    </div>

                    <div className="flex justify-between p-4 bg-haus-gold/10 rounded-xl border-2 border-haus-gold">
                      <span className="font-medium">Recommended Price Range</span>
                      <span className="font-space text-xl font-bold">{formatPrice(affordability.maxPurchasePrice)}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-foreground text-background">
                    Speak to a Broker
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};
