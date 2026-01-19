"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles, ArrowLeft, Mail, Phone, MapPin, Clock, Send,
  MessageSquare, HelpCircle, Building, Users, FileText,
} from "lucide-react";
import "@/styles/landing.css";

const contactOptions = [
  { icon: MessageSquare, title: "Live Chat", desc: "Chat with our team in real-time", available: true, action: "Start Chat" },
  { icon: Mail, title: "Email Support", desc: "Get a response within 24 hours", available: true, action: "Send Email" },
  { icon: Phone, title: "Phone Support", desc: "Available Mon-Fri 9am-6pm AEST", available: true, action: "Call Now" },
  { icon: HelpCircle, title: "Help Center", desc: "Browse our knowledge base", available: true, action: "Browse FAQs" },
];

const offices = [
  { city: "Sydney", address: "Level 12, 1 Martin Place", phone: "+61 2 8000 0000", email: "sydney@haus.com" },
  { city: "Melbourne", address: "Level 8, 120 Collins Street", phone: "+61 3 9000 0000", email: "melbourne@haus.com" },
  { city: "Brisbane", address: "Level 5, 480 Queen Street", phone: "+61 7 3000 0000", email: "brisbane@haus.com" },
];

const departments = [
  { name: "General Inquiries", email: "hello@haus.com" },
  { name: "Sales", email: "sales@haus.com" },
  { name: "Support", email: "support@haus.com" },
  { name: "Press", email: "press@haus.com" },
  { name: "Partnerships", email: "partners@haus.com" },
  { name: "Careers", email: "careers@haus.com" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    department: "General Inquiries",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="landing-page min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 backdrop-blur-xl border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/landing" className="p-2 rounded-lg hover:bg-white/5 text-neutral-400 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <Link href="/landing" className="inline-flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-white/10 border border-white/10 flex items-center justify-center">
                <Sparkles className="h-3.5 w-3.5 text-white/80" />
              </div>
              <span className="text-base font-semibold tracking-tight">HAUS</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/help" className="text-sm text-neutral-400 hover:text-white transition-colors">Help Center</Link>
          </div>
        </div>
      </nav>

      <main className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-white mb-4">Get in Touch</h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Have a question or need assistance? We're here to help. Choose your preferred way to reach us.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {contactOptions.map((option) => (
            <div key={option.title} className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group">
              <option.icon className="w-8 h-8 text-indigo-400 mb-4" />
              <h3 className="font-medium text-white mb-1">{option.title}</h3>
              <p className="text-xs text-neutral-500 mb-4">{option.desc}</p>
              <button className="text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
                {option.action} →
              </button>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-xl font-display font-medium text-white mb-6">Send us a message</h2>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-400 mb-2">Your Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-white/20 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-400 mb-2">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-white/20 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-400 mb-2">Department</label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm focus:outline-none focus:border-white/20 transition-colors"
                  >
                    {departments.map((dept) => (
                      <option key={dept.name} value={dept.name} className="bg-neutral-900">{dept.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-400 mb-2">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-white/20 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-400 mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-white/20 transition-colors resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white text-black text-sm font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-medium text-white mb-2">Message Sent!</h3>
                <p className="text-neutral-400 text-sm mb-6">We'll get back to you within 24 hours.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>

          {/* Offices & Info */}
          <div className="space-y-8">
            {/* Offices */}
            <div>
              <h2 className="text-xl font-display font-medium text-white mb-6">Our Offices</h2>
              <div className="space-y-4">
                {offices.map((office) => (
                  <div key={office.city} className="p-4 rounded-xl border border-white/10 bg-white/5">
                    <div className="flex items-start gap-3">
                      <Building className="w-5 h-5 text-indigo-400 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-white">{office.city}</h3>
                        <p className="text-sm text-neutral-400 mt-1">{office.address}</p>
                        <div className="flex flex-wrap gap-4 mt-3 text-xs">
                          <a href={`tel:${office.phone}`} className="flex items-center gap-1 text-neutral-500 hover:text-white transition-colors">
                            <Phone className="w-3 h-3" />{office.phone}
                          </a>
                          <a href={`mailto:${office.email}`} className="flex items-center gap-1 text-neutral-500 hover:text-white transition-colors">
                            <Mail className="w-3 h-3" />{office.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Department Emails */}
            <div>
              <h2 className="text-xl font-display font-medium text-white mb-6">Email Departments Directly</h2>
              <div className="grid grid-cols-2 gap-2">
                {departments.map((dept) => (
                  <a
                    key={dept.name}
                    href={`mailto:${dept.email}`}
                    className="p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="text-xs text-neutral-500">{dept.name}</div>
                    <div className="text-sm text-white">{dept.email}</div>
                  </a>
                ))}
              </div>
            </div>

            {/* Hours */}
            <div className="p-6 rounded-xl border border-white/10 bg-white/5">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-amber-400" />
                <h3 className="font-medium text-white">Business Hours</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Monday - Friday</span>
                  <span className="text-white">9:00 AM - 6:00 PM AEST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Saturday</span>
                  <span className="text-white">10:00 AM - 4:00 PM AEST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Sunday</span>
                  <span className="text-neutral-500">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xs text-neutral-500">© 2025 HAUS Group Pty Ltd</span>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-xs text-neutral-500 hover:text-white transition-colors">Terms</Link>
            <Link href="/privacy" className="text-xs text-neutral-500 hover:text-white transition-colors">Privacy</Link>
            <Link href="/about" className="text-xs text-neutral-500 hover:text-white transition-colors">About</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
