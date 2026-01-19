/**
 * Landing Spline Page Types
 *
 * Type definitions for the Spline particles landing page
 */

export interface VoiceSearchExample {
  query: string
}

export interface VoiceSearchResult {
  recognized: string
  processing: string
  results: string
}

export interface TransparencyItem {
  label: string
  value: string
}

export interface ValuationMethod {
  label: string
  value: string
  color: string
}

export interface Property {
  id: string
  title: string
  location: string
  price: number
  beds: number
  baths: number
  sqft: number
}

export interface Testimonial {
  quote: string
  author: string
  role: string
}

export interface AdvantageFeature {
  icon: string
  title: string
  description: string
}

export interface HowItWorksStep {
  number: string
  title: string
  description: string
}

export interface ComplianceWorkflow {
  icon: string
  label: string
  status: string
}

export interface ComplianceItem {
  label: string
}

export interface DetectionMetric {
  label: string
  value: string | number
  color?: string
  icon?: string
}

export interface PlatformMetric {
  label: string
  value: string
  color?: string
}
