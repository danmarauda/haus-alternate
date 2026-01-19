import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/hooks/useTheme";
import { AppLayout } from "@/components/AppLayout";
import Index from "./pages/Index";
import PropertyListing from "./pages/PropertyListing";
import AccountSettings from "./pages/AccountSettings";
import Landing from "./pages/Landing";
import LandingPage from "./pages/LandingPage";
import SearchResults from "./pages/SearchResults";
import NotFound from "./pages/NotFound";
// Platform pages
import Search from "./pages/Search";
import Analytics from "./pages/Analytics";
import Agents from "./pages/Agents";
import DealTeam from "./pages/DealTeam";
import AgentDashboard from "./pages/AgentDashboard";
import BuyerProfile from "./pages/BuyerProfile";
import AgentPipeline from "./pages/AgentPipeline";
import MarketIntelligence from "./pages/MarketIntelligence";
import ResidentialIntelligence from "./pages/ResidentialIntelligence";
// Company pages
import About from "./pages/About";
import Careers from "./pages/Careers";
import Press from "./pages/Press";
// Legal pages
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Austrac from "./pages/Austrac";
// Additional pages
import AppraisalReport from "./pages/AppraisalReport";
import EnterpriseAIPlatform from "./pages/EnterpriseAIPlatform";
import FirstHomeDashboard from "./pages/FirstHomeDashboard";
import MobileStoryboard from "./pages/MobileStoryboard";
import MobileVoiceAssistant from "./pages/MobileVoiceAssistant";
import LandingGeist from "./pages/LandingGeist";
import LandingGSAP from "./pages/LandingGSAP";
import LandingLight from "./pages/LandingLight";
import LandingSpline from "./pages/LandingSpline";
import LandingVoice from "./pages/LandingVoice";
import ListingWolseley from "./pages/ListingWolseley";
import ListingWolseleyPrestige from "./pages/ListingWolseleyPrestige";
// Auth pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
// User pages
import Dashboard from "./pages/Dashboard";
import Favorites from "./pages/Favorites";
import Notifications from "./pages/Notifications";
import Messages from "./pages/Messages";
import Contact from "./pages/Contact";
// Missing platform pages
import AdvisoryNetwork from "./pages/AdvisoryNetwork";
import MyFeed from "./pages/MyFeed";
// Seller & tools pages
import Sell from "./pages/Sell";
import Help from "./pages/Help";
import MortgageCalculator from "./pages/MortgageCalculator";
import Compare from "./pages/Compare";

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppLayout>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/index" element={<Index />} />
                <Route path="/landing" element={<Landing />} />
                <Route path="/landingpage" element={<LandingPage />} />
                <Route path="/listing/:id" element={<PropertyListing />} />
                <Route path="/settings" element={<AccountSettings />} />
                {/* Platform routes */}
                <Route path="/search" element={<Search />} />
                <Route path="/search-results" element={<SearchResults />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/agents" element={<Agents />} />
                <Route path="/deal-team" element={<DealTeam />} />
                <Route path="/agent-dashboard" element={<AgentDashboard />} />
                <Route path="/buyer-profile" element={<BuyerProfile />} />
                <Route path="/agent-pipeline" element={<AgentPipeline />} />
                <Route path="/market-intelligence" element={<MarketIntelligence />} />
                <Route path="/residential-intelligence" element={<ResidentialIntelligence />} />
                <Route path="/appraisal-report" element={<AppraisalReport />} />
                <Route path="/enterprise-ai-platform" element={<EnterpriseAIPlatform />} />
                <Route path="/first-home-dashboard" element={<FirstHomeDashboard />} />
                <Route path="/mobile-storyboard" element={<MobileStoryboard />} />
                <Route path="/mobile-voice-assistant" element={<MobileVoiceAssistant />} />
                <Route path="/landing-geist" element={<LandingGeist />} />
                <Route path="/landing-gsap" element={<LandingGSAP />} />
                <Route path="/landing-light" element={<LandingLight />} />
                <Route path="/landing-spline" element={<LandingSpline />} />
                <Route path="/landing-voice" element={<LandingVoice />} />
                <Route path="/listing-wolseley" element={<ListingWolseley />} />
                <Route path="/listing-wolseley-prestige" element={<ListingWolseleyPrestige />} />
                {/* Company routes */}
                <Route path="/about" element={<About />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/press" element={<Press />} />
                {/* Legal routes */}
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/austrac" element={<Austrac />} />
                {/* Auth routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                {/* User routes */}
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/contact" element={<Contact />} />
                {/* Seller & tools routes */}
                <Route path="/sell" element={<Sell />} />
                <Route path="/help" element={<Help />} />
                <Route path="/mortgage-calculator" element={<MortgageCalculator />} />
                <Route path="/compare" element={<Compare />} />
                {/* Additional platform routes */}
                <Route path="/advisory-network" element={<AdvisoryNetwork />} />
                <Route path="/my-feed" element={<MyFeed />} />
                {/* Additional routes from sidebar navigation */}
                <Route path="/featured" element={<SearchResults />} />
                <Route path="/map" element={<SearchResults />} />
                <Route path="/saved" element={<Favorites />} />
                <Route path="/alerts" element={<Notifications />} />
                <Route path="/explore" element={<Search />} />
                {/* Dashboard sub-routes */}
                <Route path="/dashboard/leads" element={<Dashboard />} />
                <Route path="/dashboard/clients" element={<Dashboard />} />
                <Route path="/dashboard/schedule" element={<Dashboard />} />
                <Route path="/dashboard/tasks" element={<Dashboard />} />
                {/* Analytics sub-routes */}
                <Route path="/analytics/trends" element={<Analytics />} />
                <Route path="/analytics/investment" element={<Analytics />} />
                <Route path="/analytics/reports" element={<Analytics />} />
                <Route path="/analytics/forecasts" element={<Analytics />} />
                {/* AI routes */}
                <Route path="/ai" element={<Analytics />} />
                <Route path="/ai/analyze" element={<Analytics />} />
                <Route path="/ai/documents" element={<Analytics />} />
                <Route path="/ai/research" element={<Analytics />} />
                <Route path="/ai/voice" element={<MobileVoiceAssistant />} />
                <Route path="/ai-match" element={<SearchResults />} />
                {/* Admin routes */}
                <Route path="/admin" element={<AccountSettings />} />
                <Route path="/admin/settings" element={<AccountSettings />} />
                <Route path="/admin/team" element={<Agents />} />
                <Route path="/admin/billing" element={<AccountSettings />} />
                <Route path="/admin/integrations" element={<AccountSettings />} />
                <Route path="/admin/security" element={<AccountSettings />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AppLayout>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);
export default App;
