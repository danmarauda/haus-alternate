import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles, ArrowLeft, Search, ChevronDown, ChevronRight, HelpCircle,
  Home, DollarSign, Users, FileText, Shield, CreditCard, Settings,
  MessageSquare, Phone, Mail, ExternalLink,
} from "lucide-react";
import "@/styles/landing.css";

const categories = [
  { id: "getting-started", icon: Home, title: "Getting Started", count: 8 },
  { id: "buying", icon: Home, title: "Buying a Property", count: 12 },
  { id: "selling", icon: DollarSign, title: "Selling a Property", count: 10 },
  { id: "agents", icon: Users, title: "Working with Agents", count: 6 },
  { id: "financing", icon: CreditCard, title: "Financing & Mortgages", count: 9 },
  { id: "legal", icon: FileText, title: "Legal & Contracts", count: 7 },
  { id: "account", icon: Settings, title: "Account & Settings", count: 5 },
  { id: "security", icon: Shield, title: "Security & Privacy", count: 4 },
];

const popularArticles = [
  { title: "How to create your first property search", category: "Getting Started", views: "12.4K" },
  { title: "Understanding property valuations", category: "Buying", views: "8.2K" },
  { title: "Guide to making an offer", category: "Buying", views: "7.8K" },
  { title: "Selling your property with HAUS", category: "Selling", views: "6.5K" },
  { title: "How agent matching works", category: "Agents", views: "5.9K" },
];

const faqs = [
  {
    q: "How accurate is the AI property valuation?",
    a: "Our AI valuation model is trained on millions of historical transactions and achieves a median accuracy of 97.9% compared to actual sale prices. For most properties, the valuation is within 2-3% of the final sale price. The model considers factors like location, property features, recent sales, and market trends."
  },
  {
    q: "How do I save properties to my favorites?",
    a: "Simply click the heart icon on any property listing to save it to your favorites. You can access all saved properties from your Dashboard under the 'Favorites' section. You can also set up price drop alerts for any saved property."
  },
  {
    q: "What does the 'Match Score' mean?",
    a: "The Match Score is a percentage that indicates how well a property matches your search criteria and preferences. A 95%+ match means the property closely aligns with what you're looking for. The score is calculated using AI based on your search history, saved properties, and stated preferences."
  },
  {
    q: "How do I contact an agent about a property?",
    a: "You can contact the listing agent directly from any property page by clicking 'Contact Agent' or 'Schedule Viewing'. You'll be connected via our secure messaging system. All agents on HAUS are verified professionals."
  },
  {
    q: "Is my personal information secure?",
    a: "Yes, we take security seriously. All data is encrypted at rest and in transit using AES-256 encryption. We never sell your personal information. For identity verification, we use zero-knowledge proofs to verify without storing sensitive documents."
  },
  {
    q: "How do I list my property for sale?",
    a: "Start by getting a free AI valuation on the 'Sell' page. Then you'll be matched with verified local agents who specialize in your area. Once you choose an agent, they'll handle photography, listing creation, and the entire sales process."
  },
];

export default function Help() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="landing-page min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 backdrop-blur-xl border-b border-white/10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/dashboard" className="p-2 rounded-lg hover:bg-white/5 text-neutral-400 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <Link to="/landing" className="inline-flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-white/10 border border-white/10 flex items-center justify-center">
                <Sparkles className="h-3.5 w-3.5 text-white/80" />
              </div>
              <span className="text-base font-semibold tracking-tight">HAUS</span>
            </Link>
          </div>
          <Link to="/contact" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
            Contact Support
          </Link>
        </div>
      </nav>

      <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-medium tracking-tight text-white mb-4">How can we help?</h1>
          <p className="text-neutral-400 mb-8">Search our knowledge base or browse categories below</p>

          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for answers..."
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-white/20 transition-colors"
            />
          </div>
        </div>

        {/* Categories */}
        <section className="mb-16">
          <h2 className="text-lg font-medium text-white mb-6">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/help/${category.id}`}
                className="p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group"
              >
                <category.icon className="w-6 h-6 text-indigo-400 mb-3" />
                <h3 className="font-medium text-white group-hover:text-indigo-400 transition-colors">{category.title}</h3>
                <p className="text-xs text-neutral-500 mt-1">{category.count} articles</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Popular Articles */}
        <section className="mb-16">
          <h2 className="text-lg font-medium text-white mb-6">Popular Articles</h2>
          <div className="space-y-2">
            {popularArticles.map((article, i) => (
              <Link
                key={i}
                to="#"
                className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                    <FileText className="w-4 h-4 text-neutral-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white group-hover:text-indigo-400 transition-colors">{article.title}</h3>
                    <p className="text-xs text-neutral-500">{article.category} • {article.views} views</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors" />
              </Link>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <h2 className="text-lg font-medium text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-4 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-white pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-neutral-500 shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4">
                    <p className="text-sm text-neutral-400 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Options */}
        <section className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-lg font-medium text-white mb-2">Still need help?</h2>
          <p className="text-neutral-400 text-sm mb-6">Our support team is available 7 days a week.</p>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/contact" className="p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-center">
              <MessageSquare className="w-6 h-6 text-indigo-400 mx-auto mb-2" />
              <div className="font-medium text-white text-sm">Live Chat</div>
              <div className="text-xs text-neutral-500">Avg. wait: 2 min</div>
            </Link>
            <a href="tel:+61280000000" className="p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-center">
              <Phone className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
              <div className="font-medium text-white text-sm">Call Us</div>
              <div className="text-xs text-neutral-500">Mon-Fri 9am-6pm</div>
            </a>
            <a href="mailto:support@haus.com" className="p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-center">
              <Mail className="w-6 h-6 text-amber-400 mx-auto mb-2" />
              <div className="font-medium text-white text-sm">Email</div>
              <div className="text-xs text-neutral-500">24hr response</div>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xs text-neutral-500">© 2025 HAUS Group Pty Ltd</span>
          <div className="flex items-center gap-6">
            <Link to="/terms" className="text-xs text-neutral-500 hover:text-white transition-colors">Terms</Link>
            <Link to="/privacy" className="text-xs text-neutral-500 hover:text-white transition-colors">Privacy</Link>
            <Link to="/contact" className="text-xs text-neutral-500 hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
