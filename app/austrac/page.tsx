import Link from "next/link"
import {
  Shield, Calendar, CheckCircle, AlertTriangle, FileCheck, Users, Building, Lock, Sparkles, ArrowLeft
} from "lucide-react"

const compliance = [
  { icon: FileCheck, title: "AML/CTF Program", desc: "Comprehensive Anti-Money Laundering and Counter-Terrorism Financing program" },
  { icon: Users, title: "Customer Due Diligence", desc: "Robust KYC procedures for all platform users" },
  { icon: Building, title: "Transaction Monitoring", desc: "Real-time monitoring of all financial transactions" },
  { icon: Lock, title: "Record Keeping", desc: "Secure storage of records for 7+ years as required" },
]

const sections = [
  {
    title: "1. AUSTRAC Registration",
    content: `HAUS Group Pty Ltd is registered with AUSTRAC (Australian Transaction Reports and Analysis Centre) as a reporting entity under the Anti-Money Laundering and Counter-Terrorism Financing Act 2006 (AML/CTF Act).

Our AUSTRAC registration number is: HAUS-2023-XXXXX

As a registered entity, we are committed to:
• Complying with all AML/CTF obligations
• Maintaining robust compliance programs
• Reporting suspicious matters as required
• Cooperating with regulatory authorities`
  },
  {
    title: "2. AML/CTF Program",
    content: `Our AML/CTF Program is designed to identify, mitigate, and manage money laundering and terrorism financing risks. Key components include:

Part A - Customer Identification
• Verification of customer identity before service provision
• Collection of required identification documents
• Ongoing customer due diligence

Part B - Enhanced Customer Due Diligence
• Additional verification for high-risk customers
• Politically Exposed Persons (PEP) screening
• Source of funds verification for large transactions

We regularly review and update our program to address emerging risks and regulatory changes.`
  },
  {
    title: "3. Customer Identification Procedures",
    content: `Before using certain HAUS services, we require customers to complete identity verification:

Individual Customers:
• Full legal name
• Date of birth
• Residential address
• Government-issued photo ID (passport, driver's license)

Corporate Customers:
• Company registration documents
• Beneficial ownership information
• Director identification
• Business address verification

We use secure electronic verification systems to validate identity documents. In some cases, additional documentation may be requested.`
  },
  {
    title: "4. Transaction Monitoring",
    content: `We monitor transactions on our platform to detect suspicious activity:

• Automated systems flag unusual patterns
• Large or frequent transactions receive additional scrutiny
• Cross-border transactions are carefully monitored
• All flags are reviewed by trained compliance personnel

Our monitoring systems are regularly tested and updated to address new money laundering techniques and typologies.`
  },
  {
    title: "5. Suspicious Matter Reporting",
    content: `We are required to report suspicious matters to AUSTRAC when we:

• Suspect a transaction involves proceeds of crime
• Believe a transaction is related to terrorism financing
• Have reasonable grounds to suspect money laundering

Important: We cannot disclose whether a report has been made. Tipping off is a criminal offense.

If you have information about potential money laundering or terrorism financing, you can report directly to AUSTRAC at www.austrac.gov.au`
  },
  {
    title: "6. Record Keeping",
    content: `We maintain records as required by the AML/CTF Act:

• Customer identification records: 7 years after relationship ends
• Transaction records: 7 years from transaction date
• Correspondence and documentation: As per regulatory requirements

Records are stored securely and can be provided to AUSTRAC upon request. We use encrypted storage systems with access controls to protect this sensitive information.`
  },
  {
    title: "7. Training and Awareness",
    content: `All HAUS employees receive AML/CTF training:

• Initial training upon hiring
• Annual refresher training
• Updates when regulations or procedures change
• Specialized training for high-risk roles

Our compliance team maintains current knowledge of regulatory developments and industry best practices.`
  },
  {
    title: "8. Independent Review",
    content: `Our AML/CTF Program undergoes independent review:

• Annual internal audit of compliance procedures
• Regular risk assessments
• External audit every two years
• Immediate review following significant regulatory changes

Findings from reviews are reported to the Board and actioned promptly.`
  },
  {
    title: "9. Your Obligations",
    content: `As a HAUS user, you agree to:

• Provide accurate identification information
• Not use the platform for money laundering or terrorism financing
• Notify us of any changes to your identification information
• Cooperate with verification requests

Failure to comply may result in account suspension or termination, and we may be required to report to AUSTRAC.`
  },
  {
    title: "10. Contact Our Compliance Team",
    content: `For questions about our AML/CTF compliance:

AML Compliance Officer
HAUS Group Pty Ltd
Level 12, 1 Martin Place
Sydney NSW 2000
Australia

Email: compliance@haus.com
Phone: +61 2 8000 0001

For general AUSTRAC inquiries: www.austrac.gov.au`
  },
]

export default function AustracPage() {
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
              <Shield className="w-4 h-4 text-neutral-500" />
              <span className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Compliance</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-white mb-4">AUSTRAC Compliance</h1>
            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <Calendar className="w-4 h-4" />
              Last updated: October 24, 2025
            </div>
          </div>

          {/* Alert */}
          <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-500/10 mb-8 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-medium text-amber-200 mb-1">Regulatory Requirement</h3>
              <p className="text-xs text-amber-200/70">
                HAUS is a registered reporting entity under Australian AML/CTF legislation.
                We are required to collect and verify customer identification before providing certain services.
              </p>
            </div>
          </div>

          {/* Compliance Highlights */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {compliance.map((item) => (
              <div key={item.title} className="p-4 rounded-xl border border-white/10 bg-white/5">
                <item.icon className="w-5 h-5 text-emerald-400 mb-3" />
                <h3 className="text-sm font-medium text-white mb-1">{item.title}</h3>
                <p className="text-xs text-neutral-500">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Introduction */}
          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-lg text-neutral-300 leading-relaxed">
              HAUS Group Pty Ltd is committed to preventing money laundering and terrorism financing.
              This page outlines our compliance with Australian Anti-Money Laundering and Counter-Terrorism
              Financing (AML/CTF) regulations and our obligations as an AUSTRAC-registered entity.
            </p>
          </div>

          {/* Certification Badge */}
          <div className="p-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 mb-12 flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-emerald-500/20 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-1">AUSTRAC Registered</h3>
              <p className="text-sm text-neutral-400">HAUS maintains full compliance with Australian AML/CTF requirements</p>
            </div>
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
            <Link href="/terms" className="text-xs text-neutral-500 hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="text-xs text-neutral-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/about" className="text-xs text-neutral-500 hover:text-white transition-colors">About</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
