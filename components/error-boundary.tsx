"use client"

import { Component, ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

/**
 * Universal Error Boundary
 * Catches JavaScript errors anywhere in the child component tree
 * Displays fallback UI instead of crashing the entire app
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo)

    // Log to error reporting service (e.g., Sentry, LogRocket)
    if (typeof window !== "undefined" && (window as any).Sentry) {
      (window as any).Sentry.captureException(error)
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <section className="flex min-h-[400px] items-center justify-center bg-background px-4">
            <div className="max-w-md text-center">
              <div className="mb-6 flex justify-center">
                <div className="rounded-full bg-destructive/10 p-4">
                  <AlertCircle className="h-12 w-12 text-destructive" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Something went wrong
              </h2>
              <p className="text-muted-foreground mb-6">
                {this.state.error?.message || "An unexpected error occurred"}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  onClick={() => window.location.reload()}
                  variant="default"
                >
                  Reload Page
                </Button>
                <Button
                  onClick={() => (window.location.href = "/")}
                  variant="outline"
                >
                  Go Home
                </Button>
              </div>
            </div>
          </section>
        )
      )
    }

    return this.props.children
  }
}
