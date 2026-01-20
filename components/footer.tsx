import Link from "next/link"
import { HausLogo } from "@/components/haus-logo"
import { cn } from "@/lib/utils"
import { Github, Twitter, Linkedin, Instagram } from "lucide-react"

interface FooterProps {
  variant?: "default" | "minimal"
}

/**
 * Universal Page Footer
 * Consistent footer structure across all pages
 */
export function Footer({ variant = "default" }: FooterProps) {
  const currentYear = new Date().getFullYear()

  const footerSections = variant === "minimal" ? [] : [
    {
      title: "Platform",
      links: [
        { href: "/search", label: "Property Search" },
        { href: "/agents", label: "Find an Agent" },
        { href: "/market-intelligence", label: "Market Data" },
        { href: "/mortgage-calculator", label: "Calculators" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/about", label: "About Us" },
        { href: "/careers", label: "Careers" },
        { href: "/press", label: "Press" },
        { href: "/contact", label: "Contact" },
      ],
    },
    {
      title: "Support",
      links: [
        { href: "/help", label: "Help Center" },
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms of Service" },
        { href: "/sitemap.xml", label: "Sitemap" },
      ],
    },
  ]

  const socialLinks = [
    { href: "https://twitter.com/hausplatform", icon: Twitter, label: "Twitter" },
    { href: "https://linkedin.com/company/hausplatform", icon: Linkedin, label: "LinkedIn" },
    { href: "https://instagram.com/hausplatform", icon: Instagram, label: "Instagram" },
    { href: "https://github.com/hausplatform", icon: Github, label: "GitHub" },
  ]

  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <HausLogo className="h-8 w-8" />
              <span className="text-xl font-bold">HAUS Platform</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm">
              Luxury real estate platform powered by AI. Discover properties,
              access market intelligence, and connect with elite agents.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "rounded-full bg-muted p-2 transition-colors hover:bg-accent hover:text-accent-foreground",
                    "text-muted-foreground"
                  )}
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t pt-8 flex flex-col-reverse md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} HAUS Platform. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/sitemap.xml"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
