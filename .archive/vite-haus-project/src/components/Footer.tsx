import { useState } from "react";
import { 
  Home, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube,
  Search,
  LayoutDashboard,
  BarChart3,
  Bot,
  Map,
  FileText,
  Users,
  Briefcase,
  Newspaper,
  BookOpen,
  Mail,
  HelpCircle,
  Code,
  Shield,
  Scale,
  Lock,
  ChevronRight,
  Sparkles,
  Check,
  Loader2,
  Globe,
  Circle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const platformLinks = [
  { label: "Property Search", href: "#", icon: Search },
  { label: "Dashboard", href: "#", icon: LayoutDashboard },
  { label: "Analytics", href: "#", icon: BarChart3 },
  { label: "AI Assistant", href: "#", icon: Bot },
  { label: "Maps", href: "#", icon: Map },
  { label: "Documents", href: "#", icon: FileText },
];

const companyLinks = [
  { label: "About Us", href: "#", icon: Users },
  { label: "Careers", href: "#", icon: Briefcase, badge: "We're hiring" },
  { label: "Press", href: "#", icon: Newspaper },
  { label: "Blog", href: "#", icon: BookOpen },
  { label: "Contact", href: "#", icon: Mail },
];

const legalLinks = [
  { label: "Help Center", href: "#", icon: HelpCircle },
  { label: "API Documentation", href: "#", icon: Code },
  { label: "Privacy Policy", href: "#", icon: Shield },
  { label: "Terms of Service", href: "#", icon: Scale },
  { label: "AUSTRAC Compliance", href: "#", icon: FileText },
  { label: "Security", href: "#", icon: Lock },
];

const socialLinks = [
  { label: "Twitter", href: "#", icon: Twitter },
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "YouTube", href: "#", icon: Youtube },
];

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubscribing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubscribing(false);
    setIsSubscribed(true);
    setEmail("");
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <footer className="border-t border-border/50 bg-gradient-to-b from-background to-muted/30">
      {/* Newsletter Section */}
      <div className="border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">Stay Updated</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Get weekly market insights</h3>
              <p className="text-muted-foreground">
                Join 50,000+ professionals receiving our weekly real estate intelligence report.
              </p>
            </div>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full sm:w-80 h-12 bg-background border-border/60 focus:border-primary"
                  disabled={isSubscribing || isSubscribed}
                />
              </div>
              <Button 
                type="submit" 
                size="lg"
                disabled={isSubscribing || isSubscribed || !email}
                className="h-12 px-8 bg-primary hover:bg-primary/90"
              >
                {isSubscribing ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Subscribing...
                  </>
                ) : isSubscribed ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    Subscribe
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1 - Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-primary/60 text-primary-foreground flex items-center justify-center ring-1 ring-border/60 shadow-lg">
                <Home className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold">HAUS</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The AI-native real estate platform. Transforming how Australia buys, sells, and invests in property.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="h-10 w-10 rounded-lg bg-muted/50 hover:bg-primary/10 border border-border/50 hover:border-primary/50 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* App Store Badges */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="#" 
                className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] opacity-80">Download on the</div>
                  <div className="text-sm font-semibold -mt-0.5">App Store</div>
                </div>
              </a>
              <a 
                href="#" 
                className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] opacity-80">Get it on</div>
                  <div className="text-sm font-semibold -mt-0.5">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* Column 2 - Platform */}
          <div>
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider text-muted-foreground">Platform</h4>
            <ul className="space-y-3">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <link.icon className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider text-muted-foreground">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <link.icon className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                    {link.badge && (
                      <span className="px-2 py-0.5 text-[10px] font-medium bg-primary/10 text-primary rounded-full">
                        {link.badge}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Legal & Support */}
          <div>
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider text-muted-foreground">Legal & Support</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <link.icon className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © 2025 HAUS Group Pty Ltd. All rights reserved. ABN 12 345 678 901.
            </p>
            
            <div className="flex items-center gap-6">
              {/* Region Selector */}
              <button className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
                <Globe className="w-4 h-4" />
                <span>🇦🇺 Australia</span>
              </button>
              
              {/* Status Indicator */}
              <a 
                href="#" 
                className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <Circle className="w-2 h-2 fill-green-500 text-green-500" />
                <span>All systems operational</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};