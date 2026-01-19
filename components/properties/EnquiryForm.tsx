/**
 * Enquiry Form Component
 *
 * Property enquiry form with validation and submission to Convex.
 * Handles:
 * - Lead capture
 * - Form validation
 * - Spam protection (honeypot)
 * - Success/error states
 */

"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2, CheckCircle2, AlertCircle, Mail } from "lucide-react"
import { useSubmitEnquiry } from "@/hooks/useConvex"
import type { Id } from "@/lib/convex"

// Form validation schema
const enquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().optional(),
  honeypot: z.string().optional(), // For spam protection
})

type EnquiryFormData = z.infer<typeof enquirySchema>

interface EnquiryFormProps {
  propertyId: Id<"properties">
  propertyTitle: string
  userId?: Id<"users">
  onSuccess?: () => void
}

export function EnquiryForm({ propertyId, propertyTitle, userId, onSuccess }: EnquiryFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { submitEnquiry, isSubmitting } = useSubmitEnquiry()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      honeypot: "",
    },
  })

  const onSubmit = async (data: EnquiryFormData) => {
    setError(null)

    // Honeypot check - if filled, it's a bot
    if (data.honeypot) {
      console.warn("Bot detected via honeypot")
      return
    }

    try {
      const result = await submitEnquiry({
        propertyId,
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message || `Hi, I'm interested in ${propertyTitle}`,
        userId,
      })

      if (result.success) {
        setIsSubmitted(true)
        reset()
        onSuccess?.()

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        setError("Failed to submit enquiry. Please try again.")
      }
    } catch (err) {
      console.error("Enquiry submission error:", err)
      setError("An unexpected error occurred. Please try again.")
    }
  }

  if (isSubmitted) {
    return (
      <Card className="border-green-200 dark:border-green-800">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 text-green-700 dark:text-green-400">
            <CheckCircle2 className="w-5 h-5" />
            <div>
              <p className="font-semibold">Enquiry Submitted!</p>
              <p className="text-sm text-green-600 dark:text-green-500">
                The agent will contact you shortly.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {error && (
        <Card className="border-red-200 dark:border-red-800">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 text-red-700 dark:text-red-400 text-sm">
              <AlertCircle className="w-4 h-4" />
              <p>{error}</p>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="space-y-2">
        <Label htmlFor="name">Name *</Label>
        <Input
          id="name"
          placeholder="Your full name"
          {...register("name")}
          disabled={isSubmitting}
          className={errors.name ? "border-red-500" : ""}
        />
        {errors.name && (
          <p className="text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          type="email"
          placeholder="your@email.com"
          {...register("email")}
          disabled={isSubmitting}
          className={errors.email ? "border-red-500" : ""}
        />
        {errors.email && (
          <p className="text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="0412 345 678"
          {...register("phone")}
          disabled={isSubmitting}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message (Optional)</Label>
        <Textarea
          id="message"
          placeholder="I'd like to arrange an inspection..."
          rows={4}
          {...register("message")}
          disabled={isSubmitting}
        />
      </div>

      {/* Honeypot field - hidden from users, bots will fill it */}
      <div className="hidden">
        <label htmlFor="honeypot">Keep this field blank</label>
        <input
          id="honeypot"
          type="text"
          {...register("honeypot")}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <p className="text-xs text-zinc-600 dark:text-zinc-400">
        By submitting this form, you agree to be contacted by the listing agent.
      </p>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Mail className="w-4 h-4 mr-2" />
            Send Enquiry
          </>
        )}
      </Button>
    </form>
  )
}
