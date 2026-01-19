import Link from "next/link";
import { Sparkles, ArrowLeft, FileText, Calendar } from "lucide-react";
import "@/styles/landing.css";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing and using the HAUS platform ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this Service.

HAUS reserves the right to update these Terms of Service at any time without prior notice. Your continued use of the Service following any changes indicates your acceptance of the new terms.`
  },
  {
    title: "2. Description of Service",
    content: `HAUS provides an AI-powered real estate platform that includes property search, market analytics, agent matching, and investment tools. The Service is provided "as is" and we make no warranties regarding accuracy, completeness, or reliability of any information.

Our platform integrates multiple data sources including public records, MLS feeds, and proprietary algorithms to deliver market intelligence. While we strive for accuracy, real estate data is inherently complex and may contain errors.`
  },
  {
    title: "3. User Accounts",
    content: `To access certain features, you must register for an account. You agree to:

• Provide accurate, current, and complete information
• Maintain the security of your password and account
• Accept responsibility for all activities under your account
• Notify us immediately of any unauthorized use

We reserve the right to suspend or terminate accounts that violate these terms or engage in fraudulent activity.`
  },
  {
    title: "4. Intellectual Property",
    content: `All content on HAUS, including but not limited to text, graphics, logos, algorithms, and software, is the property of HAUS Group Pty Ltd and protected by international copyright laws.

You may not reproduce, distribute, modify, or create derivative works from any content without explicit written permission. The HAUS name, logo, and all related marks are trademarks of HAUS Group Pty Ltd.`
  },
  {
    title: "5. User Conduct",
    content: `You agree not to:

• Use the Service for any unlawful purpose
• Attempt to gain unauthorized access to any systems
• Interfere with or disrupt the Service
• Scrape, harvest, or collect data without permission
• Impersonate any person or entity
• Upload malicious code or content

Violation of these provisions may result in immediate termination of your account.`
  },
  {
    title: "6. Financial Disclaimers",
    content: `HAUS provides market data and analytics for informational purposes only. This information does not constitute financial, investment, legal, or tax advice.

Property valuations and market forecasts are estimates based on available data and should not be relied upon as accurate predictions. Always conduct independent due diligence and consult qualified professionals before making investment decisions.`
  },
  {
    title: "7. Limitation of Liability",
    content: `To the maximum extent permitted by law, HAUS and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service.

Our total liability for any claims shall not exceed the amount paid by you for the Service in the twelve months preceding the claim.`
  },
  {
    title: "8. Privacy",
    content: `Your privacy is important to us. Please review our Privacy Policy, which explains how we collect, use, and protect your personal information. By using the Service, you consent to our data practices as described in the Privacy Policy.`
  },
  {
    title: "9. Governing Law",
    content: `These Terms shall be governed by and construed in accordance with the laws of New South Wales, Australia, without regard to conflict of law principles.

Any disputes arising from these Terms shall be resolved exclusively in the courts of New South Wales, and you consent to the personal jurisdiction of such courts.`
  },
  {
    title: "10. Contact",
    content: `For questions about these Terms of Service, please contact us at:

HAUS Group Pty Ltd
Level 12, 1 Martin Place
Sydney NSW 2000
Australia

Email: legal@haus.com`
  },
];

export default function Terms() {
  return (
    <div className="landing-page min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 backdrop-blur-xl border-b border-white/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/landing" className="inline-flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-white/10 border border-white/10 flex items-center justify-center">
              <Sparkles className="h-3.5 w-3.5 text-white/80" />
            </div>
            <span className="text-base font-semibold tracking-tight">HAUS</span>
          </Link>
          <Link href="/landing" className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors">
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
              <FileText className="w-4 h-4 text-neutral-500" />
              <span className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-white mb-4">Terms of Service</h1>
            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <Calendar className="w-4 h-4" />
              Last updated: October 24, 2025
            </div>
          </div>

          {/* Introduction */}
          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-lg text-neutral-300 leading-relaxed">
              Welcome to HAUS. These Terms of Service ("Terms") govern your access to and use of the HAUS platform,
              including our website, mobile applications, and all related services. Please read these Terms carefully
              before using our Service.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {sections.map((section) => (
              <section key={section.title} className="scroll-mt-24" id={section.title.toLowerCase().replace(/\s+/g, '-')}>
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
            <Link href="/privacy" className="text-xs text-neutral-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/austrac" className="text-xs text-neutral-500 hover:text-white transition-colors">AUSTRAC</Link>
            <Link href="/about" className="text-xs text-neutral-500 hover:text-white transition-colors">About</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
