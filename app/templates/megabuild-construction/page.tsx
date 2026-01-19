"use client";

import React from "react";
import { Hammer, Wrench, HardHat, Paintbrush } from "lucide-react";

export default function MegabuildConstructionPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-sm text-zinc-400">
              <HardHat className="mr-2 h-4 w-4" />
              Premium Construction Services
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              MegaBuild Construction
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-zinc-400 sm:text-xl">
              Industry-leading construction solutions with precision engineering
              and sustainable practices
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button className="rounded-lg bg-zinc-100 px-8 py-3 font-semibold text-zinc-900 transition-colors hover:bg-zinc-200">
                Start Project
              </button>
              <button className="rounded-lg border border-zinc-800 px-8 py-3 font-semibold text-zinc-100 transition-colors hover:bg-zinc-900">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Our Services
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              icon={<Hammer className="h-8 w-8" />}
              title="Construction"
              description="Full-scale construction projects with expert oversight"
            />
            <ServiceCard
              icon={<Wrench className="h-8 w-8" />}
              title="Renovation"
              description="Complete renovation services for modern living"
            />
            <ServiceCard
              icon={<Paintbrush className="h-8 w-8" />}
              title="Design"
              description="Innovative design solutions tailored to your needs"
            />
            <ServiceCard
              icon={<HardHat className="h-8 w-8" />}
              title="Consulting"
              description="Expert guidance through every project phase"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-zinc-900 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard number="500+" label="Projects Completed" />
            <StatCard number="25+" label="Years Experience" />
            <StatCard number="100%" label="Client Satisfaction" />
            <StatCard number="50+" label="Expert Team Members" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Build Your Vision?
          </h2>
          <p className="mb-8 text-lg text-zinc-400">
            Contact us today to discuss your construction project and discover
            how we can bring your ideas to life.
          </p>
          <button className="rounded-lg bg-zinc-100 px-8 py-3 font-semibold text-zinc-900 transition-colors hover:bg-zinc-200">
            Get Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:bg-zinc-900">
      <div className="mb-4 text-zinc-400">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-sm text-zinc-400">{description}</p>
    </div>
  );
}

interface StatCardProps {
  number: string;
  label: string;
}

function StatCard({ number, label }: StatCardProps) {
  return (
    <div className="text-center">
      <div className="mb-2 text-4xl font-bold text-zinc-100 sm:text-5xl">
        {number}
      </div>
      <div className="text-sm text-zinc-400 sm:text-base">{label}</div>
    </div>
  );
}
