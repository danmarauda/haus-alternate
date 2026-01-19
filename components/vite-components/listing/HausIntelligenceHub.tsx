import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Send,
  Mic,
  TrendingUp,
  TrendingDown,
  Shield,
  Home,
  Star,
  BarChart3,
  ChevronDown,
  ChevronUp,
  Check,
  X,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";

interface AIInsights {
  investmentScore: number;
  growthPotential: string;
  rentalYield: string;
  marketTrend?: "up" | "down" | "stable";
  demandLevel?: "high" | "medium" | "low";
}

interface HausIntelligenceHubProps {
  insights: AIInsights;
  propertyName: string;
}

export const HausIntelligenceHub: React.FC<HausIntelligenceHubProps> = ({
  insights,
  propertyName,
}) => {
  const [activeTab, setActiveTab] = useState('market');
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'ai'; content: string }>>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const suggestedQuestions = [
    "What's the school catchment area?",
    "What are the nearby transport options?",
    "How does this property compare to others in the area?",
    "What's the investment potential?",
  ];

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses: Record<string, string> = {
        "What's the school catchment area?":
          `${propertyName} is within the catchment zone for several top-rated schools:\n\n**Primary Schools:**\n- Point Piper Public School (0.3km) - Rating: 9.2\n- Rose Bay Public School (1.2km) - Rating: 8.8\n\n**Secondary Schools:**\n- Rose Bay Secondary College (1.5km) - Rating: 8.5\n\n**Private Schools:**\n- Kincoppal Rose Bay (1.8km) - Rating: 9.0\n- SCEGGS Redlands (2.5km) - Rating: 9.3\n\nAll schools are within a 10-minute drive, making this an excellent location for families.`,

        "What are the nearby transport options?":
          `**Public Transport:**\n\n- **Train:** Edgecliff Station is just a 12-minute walk (1.0km), offering direct services to the CBD in just 8 minutes.\n\n- **Bus:** Multiple bus routes on New South Head Road, including:\n  - Route 324: CBD via Kings Cross\n  - Route 327: Bondi Junction\n  - Route 380: Watsons Bay via Bondi\n\n- **Ferry:** Rose Bay Ferry Terminal is a 5-minute drive, providing scenic commuter routes to Circular Quay.\n\n**Road Access:**\nEasy access to the CBD via New South Head Road, approximately 25 minutes in off-peak traffic.`,

        "How does this property compare to others in the area?":
          `**Property Comparison Analysis:**\n\n${propertyName} is positioned in the **top 15%** of properties in Point Piper based on value and features.\n\n**Price Comparison:**\n- This property: $35M guide\n- Suburb median: $28.5M\n- Top 10%: $42M+\n\n**Key Advantages:**\n✓ 25% larger than average (892m² vs 714m²)\n✓ Premium waterfront position\n✓ Recently renovated (2023)\n✓ North-facing rear aspect\n✓ 4-car accommodation\n\n**Market Position:**\nThis property offers excellent value when compared to recent sales, particularly given its recent high-end renovation and premier waterfront positioning.`,

        "What's the investment potential?":
          `**Investment Analysis for ${propertyName}:**\n\n**Overall Score: 85/100 — Excellent Investment**\n\n**Yield Analysis:**\n- Current rental yield: 2.4%\n- Expected annual appreciation: +8.2%\n- 5-year projected growth: +42%\n\n**Key Investment Drivers:**\n1. **Scarcity Value:** Waterfront properties in Point Piper are extremely limited\n2. **Prestige Factor:** Point Piper is Sydney's most exclusive suburb\n3. **Infrastructure:** Planned transport improvements will boost accessibility\n4. **Lifestyle:** Unbeatable harbor views and proximity to beaches\n\n**Risk Assessment:**\n- Overall Risk: **Low** (7/10)\n- Market volatility impact: Low\n- Liquidity: High (strong demand)\n\n**Recommendation:** Strong buy with excellent capital growth prospects.`,
      };

      const response = responses[userMessage] ||
        `Thank you for your question about "${userMessage}". Based on my analysis of ${propertyName}, I'd be happy to provide more detailed information. Would you like me to elaborate on any specific aspect?`;

      setMessages(prev => [...prev, { role: 'ai', content: response }]);
      setIsTyping(false);
    }, 1500);
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const scoreBreakdown = [
    { label: 'Yield Potential', score: 82, color: 'text-info' },
    { label: 'Capital Growth', score: 88, color: 'text-success' },
    { label: 'Affordability', score: 76, color: 'text-warning' },
    { label: 'Liquidity', score: 91, color: 'text-success' },
  ];

  const riskFactors = [
    { label: 'Market Volatility', level: 6 as const, color: 'bg-warning' },
    { label: 'Rental Vacancy', level: 4 as const, color: 'bg-success' },
    { label: 'Interest Rate', level: 8 as const, color: 'bg-error' },
    { label: 'Liquidity', level: 9 as const, color: 'bg-success' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-haus-gold to-haus-gold/70 flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-display-md font-display">HAUS Intelligence Hub</h2>
          <p className="text-sm text-muted-foreground">AI-Powered Property Analysis</p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full justify-start bg-secondary/50 p-1 rounded-xl h-auto">
          <TabsTrigger value="market" className="data-[state=active]:bg-haus-gold data-[state=active]:text-haus-black">
            <BarChart3 className="w-4 h-4 mr-2" />
            Market
          </TabsTrigger>
          <TabsTrigger value="ask" className="data-[state=active]:bg-haus-gold data-[state=active]:text-haus-black">
            <User className="w-4 h-4 mr-2" />
            Ask HAUS
          </TabsTrigger>
          <TabsTrigger value="score" className="data-[state=active]:bg-haus-gold data-[state=active]:text-haus-black">
            <Star className="w-4 h-4 mr-2" />
            Investment
          </TabsTrigger>
          <TabsTrigger value="comparable" className="data-[state=active]:bg-haus-gold data-[state=active]:text-haus-black">
            <Home className="w-4 h-4 mr-2" />
            Compare
          </TabsTrigger>
        </TabsList>

        {/* Market Analysis Tab */}
        <TabsContent value="market" className="mt-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Demand Meter */}
            <Card className="border- haus-stone">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Demand Level</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="relative w-24 h-24">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#E8E4DD"
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#C9A962"
                        strokeWidth="3"
                        strokeDasharray={`${insights.demandLevel === 'high' ? '90' : insights.demandLevel === 'medium' ? '60' : insights.demandLevel === 'low' ? '30' : '60'}, 100`}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-space font-medium text-haus-gold">
                        {insights.demandLevel === 'high' ? 'High' : insights.demandLevel === 'medium' ? 'Med' : insights.demandLevel === 'low' ? 'Low' : 'Med'}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Market Demand</p>
                    <p className="font-space font-medium">{insights.demandLevel === 'high' ? 'Very High Demand' : insights.demandLevel === 'medium' ? 'Moderate Demand' : insights.demandLevel === 'low' ? 'Low Demand' : 'Moderate Demand'}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Supply Meter */}
            <Card className="border- haus-stone">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Supply Level</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="relative w-24 h-24">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#E8E4DD"
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="3"
                        strokeDasharray="25, 100"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-space font-medium text-success">Low</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Available Supply</p>
                    <p className="font-space font-medium">Low Supply</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Price Trend */}
            <Card className="border- haus-stone">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Price Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  {insights.marketTrend === 'up' ? (
                    <TrendingUp className="w-10 h-10 text-success" />
                  ) : insights.marketTrend === 'down' ? (
                    <TrendingDown className="w-10 h-10 text-error" />
                  ) : (
                    <TrendingUp className="w-10 h-10 text-muted-foreground" />
                  )}
                  <div>
                    <p className="text-sm text-muted-foreground">Market Direction</p>
                    <p className="font-space font-medium">
                      {insights.marketTrend === 'up' ? 'Rising' : insights.marketTrend === 'down' ? 'Falling' : insights.marketTrend === 'stable' ? 'Stable' : 'Stable'}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-sm text-muted-foreground">12 Month Change</span>
                  <p className="text-2xl font-space font-medium text-success flex items-center gap-1">
                    <TrendingUp className="w-5 h-5" />
                    {insights.growthPotential}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Market Phase */}
            <Card className="border- haus-stone">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Market Phase</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge className="bg-haus-gold text-haus-black mb-3">Seller's Market</Badge>
                <p className="text-sm text-muted-foreground">
                  High demand with limited inventory favors sellers. Properties are selling quickly and often above reserve price.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Market Outlook */}
          <Card className="border- haus-stone">
            <CardHeader>
              <CardTitle className="text-lg">Market Outlook</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                The Point Piper property market remains exceptionally strong, with waterfront properties
                continuing to command premium prices. The combination of limited supply, strong buyer demand,
                and the suburb's prestigious positioning supports continued price growth. Recent sales indicate
                a clear trend toward modern, renovated properties attracting significant premiums.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Ask HAUS Tab */}
        <TabsContent value="ask" className="mt-6">
          <Card className="border- haus-stone">
            <CardContent className="p-6">
              {/* Chat Messages */}
              <div className="h-96 overflow-y-auto mb-4 space-y-4 scrollbar-premium">
                <AnimatePresence>
                  {messages.length === 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center py-8"
                    >
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-haus-gold to-haus-gold/70 flex items-center justify-center">
                        <Sparkles className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-display text-lg mb-2">Ask HAUS AI</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        I'm here to help you understand everything about this property
                      </p>
                      <div className="flex flex-wrap justify-center gap-2">
                        {suggestedQuestions.map((question, index) => (
                          <button
                            key={index}
                            onClick={() => setInputValue(question)}
                            className="px-3 py-1.5 text-sm bg-secondary hover:bg-haus-gold hover:text-haus-black rounded-full transition-colors"
                          >
                            {question}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[80%] rounded-2xl p-4 ${
                        message.role === 'user'
                          ? 'bg-foreground text-background'
                          : 'bg-secondary text-foreground'
                      }`}>
                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                      </div>
                    </motion.div>
                  ))}

                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="bg-secondary rounded-2xl p-4">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-haus-gold rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                          <div className="w-2 h-2 bg-haus-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <div className="w-2 h-2 bg-haus-gold rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask me anything about this property..."
                  className="flex-1 px-4 py-3 bg-secondary border border- haus-stone rounded-xl focus:outline-none focus:border-haus-gold"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-haus-gold text-haus-black hover:bg-haus-gold/90"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Investment Score Tab */}
        <TabsContent value="score" className="mt-6 space-y-6">
          <Card className="border- haus-stone">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#E8E4DD"
                      strokeWidth="12"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#C9A962"
                      strokeWidth="12"
                      strokeDasharray={`${insights.investmentScore * 2.51}, 251`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl font-space font-medium text-haus-gold">
                      {insights.investmentScore}
                    </span>
                    <span className="text-sm text-muted-foreground">/ 100</span>
                  </div>
                </div>
                <h3 className="text-display-md font-display mb-2">
                  {insights.investmentScore >= 80 ? 'Excellent' : insights.investmentScore >= 60 ? 'Good' : 'Fair'} Investment
                </h3>
                <Badge className={`${
                  insights.investmentScore >= 80
                    ? 'bg-success text-white'
                    : insights.investmentScore >= 60
                    ? 'bg-warning text-haus-black'
                    : 'bg-error text-white'
                }`}>
                  <Shield className="w-3 h-3 mr-1" />
                  {insights.investmentScore >= 80 ? 'Low Risk' : insights.investmentScore >= 60 ? 'Moderate Risk' : 'Higher Risk'}
                </Badge>
              </div>

              {/* Score Breakdown */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {scoreBreakdown.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-full h-2 bg-secondary rounded-full mb-2">
                      <div
                        className={`h-full rounded-full ${item.color.replace('text-', 'bg-')}`}
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                    <p className="text-lg font-space font-medium">{item.score}/100</p>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Risk Assessment */}
          <Card className="border- haus-stone">
            <CardHeader>
              <CardTitle className="text-lg">Risk Assessment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Overall Risk Level</span>
                <Badge variant="outline" className="border-success text-success">
                  Low (7/10)
                </Badge>
              </div>

              <div className="space-y-3">
                {riskFactors.map((factor, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">{factor.label}</span>
                      <span className="text-sm font-space">{factor.level}/10</span>
                    </div>
                    <div className="w-full h-2 bg-secondary rounded-full">
                      <div
                        className={`h-full rounded-full ${factor.color}`}
                        style={{ width: `${factor.level * 10}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Comparable Properties Tab */}
        <TabsContent value="comparable" className="mt-6">
          <Card className="border- haus-stone">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Comparable Properties</CardTitle>
                <Button variant="outline" size="sm">
                  Filter
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="group cursor-pointer">
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-secondary mb-3">
                      <div className="absolute top-2 right-2 bg-haus-gold text-haus-black px-2 py-1 rounded-lg text-xs font-space">
                        {95 - item * 3}% Match
                      </div>
                    </div>
                    <h4 className="font-space font-medium mb-1 group-hover:text-haus-gold transition-colors">
                      {12 + item} Wolseley Road, Point Piper
                    </h4>
                    <p className="text-lg font-space text-haus-gold mb-2">
                      ${35 - item}.5M
                    </p>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>5 beds • 4 baths • 2 cars</p>
                      <p>892m² • {2024 - item} built</p>
                    </div>
                    <Button variant="outline" className="w-full mt-3">
                      View Property
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
