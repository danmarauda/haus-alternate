import { Link } from "react-router-dom";
import { Sparkles, ArrowLeft, Shield, Calendar, Lock, Eye, Database, Globe } from "lucide-react";
import "@/styles/landing.css";

const highlights = [
  { icon: Lock, title: "Encrypted Data", desc: "All data encrypted at rest and in transit using AES-256" },
  { icon: Eye, title: "No Selling Data", desc: "We never sell your personal information to third parties" },
  { icon: Database, title: "Minimal Collection", desc: "We only collect data necessary for the service" },
  { icon: Globe, title: "GDPR Compliant", desc: "Full compliance with global privacy regulations" },
];

const sections = [
  {
    title: "1. Information We Collect",
    content: `We collect information you provide directly to us, such as:

• Account Information: Name, email address, phone number, and password when you register
• Profile Data: Property preferences, search history, and saved listings
• Financial Information: When using our premium features, payment details processed by secure third-party providers
• Communication Data: Messages you send through our platform

We also automatically collect:

• Device Information: Browser type, operating system, device identifiers
• Usage Data: Pages visited, features used, interaction patterns
• Location Data: General location based on IP address (precise location only with consent)`
  },
  {
    title: "2. How We Use Your Information",
    content: `We use collected information to:

• Provide, maintain, and improve our services
• Personalize your experience with AI-powered recommendations
• Process transactions and send related information
• Send technical notices, updates, and support messages
• Respond to your comments and questions
• Analyze usage patterns to improve our platform
• Detect, prevent, and address fraud and security issues
• Comply with legal obligations`
  },
  {
    title: "3. Information Sharing",
    content: `We do not sell your personal information. We may share information in these circumstances:

• Service Providers: With vendors who help us operate our platform
• Real Estate Professionals: When you choose to connect with agents
• Legal Requirements: When required by law or to protect rights
• Business Transfers: In connection with mergers or acquisitions
• With Consent: When you explicitly authorize sharing

All third-party providers are bound by strict confidentiality agreements.`
  },
  {
    title: "4. Data Security",
    content: `We implement robust security measures including:

• End-to-end encryption for sensitive data
• Regular security audits and penetration testing
• Multi-factor authentication options
• Secure data centers with SOC 2 Type II certification
• Employee access controls and training
• Incident response procedures

While we strive to protect your information, no method of transmission over the Internet is 100% secure.`
  },
  {
    title: "5. Your Rights and Choices",
    content: `You have the right to:

• Access: Request a copy of your personal data
• Correction: Update or correct inaccurate information
• Deletion: Request deletion of your personal data
• Portability: Receive your data in a portable format
• Opt-Out: Unsubscribe from marketing communications
• Restrict Processing: Limit how we use your data

To exercise these rights, contact privacy@haus.com or use settings in your account.`
  },
  {
    title: "6. Cookies and Tracking",
    content: `We use cookies and similar technologies to:

• Remember your preferences and settings
• Authenticate your account
• Analyze site traffic and usage
• Deliver personalized content
• Measure advertising effectiveness

You can control cookies through your browser settings. Note that disabling cookies may affect site functionality.`
  },
  {
    title: "7. Data Retention",
    content: `We retain your information for as long as:

• Your account is active
• Needed to provide services
• Required by law
• Necessary for legitimate business purposes

After account deletion, we may retain certain data for legal compliance, fraud prevention, or dispute resolution.`
  },
  {
    title: "8. International Transfers",
    content: `Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place, including:

• Standard contractual clauses
• Privacy Shield certification (where applicable)
• Adequacy decisions

These transfers are necessary to provide our global service.`
  },
  {
    title: "9. Children's Privacy",
    content: `HAUS is not intended for users under 18 years of age. We do not knowingly collect personal information from children. If we learn that we have collected information from a child, we will promptly delete it.`
  },
  {
    title: "10. Contact Us",
    content: `For privacy-related inquiries:

Privacy Officer
HAUS Group Pty Ltd
Level 12, 1 Martin Place
Sydney NSW 2000
Australia

Email: privacy@haus.com
Phone: +61 2 8000 0000`
  },
];

export default function Privacy() {
  return (
    <div className="landing-page min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 backdrop-blur-xl border-b border-white/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/landing" className="inline-flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-white/10 border border-white/10 flex items-center justify-center">
              <Sparkles className="h-3.5 w-3.5 text-white/80" />
            </div>
            <span className="text-base font-semibold tracking-tight">HAUS</span>
          </Link>
          <Link to="/landing" className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-4 h-4 text-neutral-500" />
              <span className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-white mb-4">Privacy Policy</h1>
            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <Calendar className="w-4 h-4" />
              Last updated: October 24, 2025
            </div>
          </div>

          {/* Highlights */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {highlights.map((item) => (
              <div key={item.title} className="p-4 rounded-xl border border-white/10 bg-white/5">
                <item.icon className="w-5 h-5 text-indigo-400 mb-3" />
                <h3 className="text-sm font-medium text-white mb-1">{item.title}</h3>
                <p className="text-xs text-neutral-500">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Introduction */}
          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-lg text-neutral-300 leading-relaxed">
              At HAUS, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you use our platform. We are committed to protecting your personal
              data and being transparent about our practices.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {sections.map((section) => (
              <section key={section.title} className="scroll-mt-24">
                <h2 className="text-xl font-display font-medium text-white mb-4">{section.title}</h2>
                <div className="text-neutral-400 leading-relaxed whitespace-pre-line">{section.content}</div>
              </section>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xs text-neutral-500">© 2025 HAUS Group Pty Ltd</span>
          <div className="flex items-center gap-6">
            <Link to="/terms" className="text-xs text-neutral-500 hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/austrac" className="text-xs text-neutral-500 hover:text-white transition-colors">AUSTRAC</Link>
            <Link to="/about" className="text-xs text-neutral-500 hover:text-white transition-colors">About</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
