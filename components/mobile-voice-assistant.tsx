"use client"

/**
 * MobileVoiceAssistant - Voice-activated AI assistant interface for mobile devices
 *
 * @description
 * A sophisticated mobile voice assistant component with animated visual feedback,
 * real-time transcription, and contextual response display. Features include:
 * - Animated pulse visualization for voice activity
 * - Real-time speech-to-text transcription
 * - Contextual AI responses with typing animation
 * - Quick action suggestions
 * - Responsive mobile-first design with shadcn/ui components
 *
 * @example
 * ```tsx
 * <MobileVoiceAssistant
 *   onVoiceCommand={handleVoiceCommand}
 *   suggestions={["Find homes under $500k", "Show 3 bedroom houses"]}
 *   isListening={false}
 * />
 * ```
 */

import { useState, useEffect, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Mic,
  MicOff,
  X,
  Sparkles,
  Home,
  MapPin,
  DollarSign,
  BedDouble,
  Bath,
  Ruler,
  ChevronRight,
  Volume2,
  VolumeX,
} from "lucide-react"
import { cn } from "@/lib/utils"

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

/**
 * Voice command result structure
 */
export interface VoiceCommandResult {
  /** Transcribed text from voice input */
  transcript: string
  /** Structured data extracted from command */
  entities?: {
    location?: string
    priceRange?: { min?: number; max?: number }
    bedrooms?: number
    bathrooms?: number
    propertyType?: string
  }
  /** Confidence score from speech recognition */
  confidence: number
}

/**
 * Suggestion item for quick actions
 */
export interface SuggestionItem {
  /** Display text for suggestion */
  label: string
  /** Icon to display */
  icon?: React.ReactNode
  /** Command to execute */
  command: string
  /** Variant for badge styling */
  variant?: "default" | "secondary" | "outline"
}

/**
 * Response data from AI assistant
 */
export interface AssistantResponse {
  /** Response text content */
  message: string
  /** Optional properties found */
  properties?: Array<{
    id: string
    title: string
    price: number
    location: string
    imageUrl: string
  }>
  /** Follow-up suggestions */
  suggestions?: SuggestionItem[]
}

// ============================================================================
// PROPS INTERFACE
// ============================================================================

interface MobileVoiceAssistantProps {
  /** Callback when voice command is completed */
  onVoiceCommand?: (result: VoiceCommandResult) => void
  /** Predefined suggestions for quick actions */
  suggestions?: SuggestionItem[]
  /** Whether voice recognition is currently active */
  isListening?: boolean
  /** Initial greeting message */
  greeting?: string
  /** Theme variant */
  variant?: "default" | "glass" | "minimal"
  /** Custom className for styling */
  className?: string
  /** Trigger button custom label */
  triggerLabel?: string
  /** Trigger button position */
  position?: "bottom-right" | "bottom-center" | "bottom-left"
}

// ============================================================================
// HELPER COMPONENTS
// ============================================================================

/**
 * Animated pulse ring component for voice visualization
 */
function VoicePulseRing({ isActive }: { isActive: boolean }) {
  if (!isActive) return null

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" style={{ animationDuration: "1.5s" }} />
        {/* Middle ring */}
        <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" style={{ animationDuration: "1s", animationDelay: "0.2s" }} />
        {/* Inner ring */}
        <div className="absolute inset-0 rounded-full bg-primary/40 animate-ping" style={{ animationDuration: "0.8s", animationDelay: "0.4s" }} />
      </div>
    </div>
  )
}

/**
 * Audio wave visualization bars
 */
function AudioWaveform({ isActive }: { isActive: boolean }) {
  if (!isActive) return null

  return (
    <div className="flex items-center justify-center gap-1 h-8">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={cn(
            "w-1 bg-primary rounded-full transition-all duration-150",
            isActive && "animate-pulse"
          )}
          style={{
            height: isActive ? `${Math.random() * 24 + 8}px` : "8px",
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
    </div>
  )
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export function MobileVoiceAssistant({
  onVoiceCommand,
  suggestions: externalSuggestions,
  isListening: externalIsListening = false,
  greeting = "Hi! I'm your AI assistant. How can I help you find your perfect home today?",
  variant = "default",
  className,
  triggerLabel,
  position = "bottom-right",
}: MobileVoiceAssistantProps) {
  // ==========================================================================
  // STATE
  // ==========================================================================
  const [isOpen, setIsOpen] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [response, setResponse] = useState<AssistantResponse | null>(null)
  const [isMuted, setIsMuted] = useState(false)
  const [showGreeting, setShowGreeting] = useState(true)

  // Internal suggestions state
  const [suggestions] = useState<SuggestionItem[]>(externalSuggestions || [
    { label: "Find homes under $500k", icon: <DollarSign className="h-3 w-3" />, command: "show homes under 500000" },
    { label: "3 bedroom houses", icon: <BedDouble className="h-3 w-3" />, command: "show 3 bedroom houses" },
    { label: "Near downtown", icon: <MapPin className="h-3 w-3" />, command: "show properties near downtown" },
    { label: "Recently listed", icon: <Sparkles className="h-3 w-3" />, command: "show recently listed properties", variant: "outline" },
  ])

  // Refs
  const recognitionRef = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // ==========================================================================
  // EFFECTS
  // ==========================================================================

  // Initialize speech recognition on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition

      if (SpeechRecognition) {
        const recognition = new SpeechRecognition()
        recognition.continuous = false
        recognition.interimResults = true
        recognition.lang = "en-US"

        recognition.onstart = () => {
          setIsListening(true)
          setShowGreeting(false)
        }

        recognition.onresult = (event: any) => {
          let interimTranscript = ""
          let finalTranscript = ""

          for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript
            if (event.results[i].isFinal) {
              finalTranscript += transcript
            } else {
              interimTranscript += transcript
            }
          }

          setTranscript(finalTranscript || interimTranscript)

          if (finalTranscript) {
            handleVoiceResult(finalTranscript, event.results[event.results.length - 1][0].confidence)
          }
        }

        recognition.onerror = (event: any) => {
          console.error("Speech recognition error:", event.error)
          setIsListening(false)
          setIsProcessing(false)
        }

        recognition.onend = () => {
          setIsListening(false)
          setIsProcessing(false)
        }

        recognitionRef.current = recognition
      }
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop()
      }
    }
  }, [])

  // Sync external isListening prop
  useEffect(() => {
    if (externalIsListening && !isListening) {
      startListening()
    } else if (!externalIsListening && isListening) {
      stopListening()
    }
  }, [externalIsListening])

  // ==========================================================================
  // EVENT HANDLERS
  // ==========================================================================

  const startListening = useCallback(() => {
    if (recognitionRef.current && !isListening) {
      setTranscript("")
      setResponse(null)
      setIsProcessing(true)
      recognitionRef.current.start()
    }
  }, [isListening])

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop()
    }
  }, [])

  const handleVoiceResult = useCallback((text: string, confidence: number) => {
    const result: VoiceCommandResult = {
      transcript: text,
      confidence,
    }

    // Extract basic entities (simplified)
    const priceMatch = text.match(/under \$?(\d+(?:k|m)?)/i)
    if (priceMatch) {
      result.entities = {
        ...result.entities,
        priceRange: { max: parsePrice(priceMatch[1]) },
      }
    }

    const bedMatch = text.match(/(\d+)\s*bedroom/i)
    if (bedMatch) {
      result.entities = {
        ...result.entities,
        bedrooms: parseInt(bedMatch[1]),
      }
    }

    onVoiceCommand?.(result)

    // Simulate AI response
    setTimeout(() => {
      setResponse({
        message: `I found several properties matching "${text}". Would you like me to show you the top results?`,
        suggestions: [
          { label: "Show results", icon: <Home className="h-3 w-3" />, command: "show results" },
          { label: "Refine search", icon: <Sparkles className="h-3 w-3" />, command: "refine search" },
        ],
      })
      setIsProcessing(false)
    }, 1000)
  }, [onVoiceCommand])

  const handleSuggestionClick = useCallback((suggestion: SuggestionItem) => {
    setTranscript(suggestion.label)
    handleVoiceResult(suggestion.command, 1.0)
  }, [handleVoiceResult])

  const handleClose = useCallback(() => {
    setIsOpen(false)
    stopListening()
    setTranscript("")
    setResponse(null)
    setShowGreeting(true)
  }, [stopListening])

  const parsePrice = (priceStr: string): number => {
    const normalized = priceStr.toLowerCase()
    if (normalized.includes("k")) {
      return parseInt(normalized.replace("k", "")) * 1000
    }
    if (normalized.includes("m")) {
      return parseInt(normalized.replace("m", "")) * 1000000
    }
    return parseInt(normalized.replace(/[^0-9]/g, ""))
  }

  // ==========================================================================
  // RENDER
  // ==========================================================================

  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-center": "bottom-6 left-1/2 -translate-x-1/2",
    "bottom-left": "bottom-6 left-6",
  }

  const variantClasses = {
    default: "bg-zinc-950 border-zinc-800/60",
    glass: "bg-zinc-950/80 backdrop-blur-xl border-zinc-800/40",
    minimal: "bg-zinc-900 border-zinc-800",
  }

  return (
    <>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <Button
          size="lg"
          className={cn(
            "fixed z-50 rounded-full shadow-2xl shadow-primary/30 h-16 w-16 p-0",
            "transition-all duration-300 hover:scale-110 active:scale-95",
            "bg-primary text-primary-foreground hover:bg-primary/90",
            positionClasses[position]
          )}
          onClick={() => setIsOpen(true)}
        >
          <Mic className="h-7 w-7" />
        </Button>
      )}

      {/* Voice Assistant Sheet */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent
          side="bottom"
          className={cn(
            "h-[85vh] rounded-t-3xl border-t-0 p-0",
            variantClasses[variant],
            "bg-gradient-to-b from-zinc-950 to-zinc-900"
          )}
        >
          {/* Drag Handle */}
          <div className="flex justify-center pt-3 pb-2">
            <div className="h-1.5 w-12 rounded-full bg-zinc-700" />
          </div>

          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/60">
            <div className="flex items-center gap-3">
              <div className={cn(
                "flex items-center justify-center rounded-full",
                isListening ? "bg-primary/20 p-3" : "bg-zinc-800/60 p-3"
              )}>
                {isListening ? (
                  <Mic className="h-5 w-5 text-primary animate-pulse" />
                ) : (
                  <MicOff className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
              <div>
                <h2 className="font-semibold text-foreground">Voice Assistant</h2>
                <p className="text-sm text-muted-foreground">
                  {isListening ? "Listening..." : "Tap microphone to start"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                onClick={() => setIsMuted(!isMuted)}
              >
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                onClick={handleClose}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6" ref={containerRef}>
            {/* Greeting */}
            {showGreeting && !transcript && !response && (
              <Card className="border-zinc-800/60 bg-zinc-900/50">
                <CardContent className="p-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20">
                        <Sparkles className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <p className="text-sm text-foreground leading-relaxed">{greeting}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Transcript Display */}
            {(transcript || isListening) && (
              <Card className={cn(
                "border-2 transition-all duration-300",
                isListening ? "border-primary/60 bg-primary/5" : "border-zinc-800/60 bg-zinc-900/50"
              )}>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    {/* Voice activity indicator */}
                    <div className="flex items-center gap-2">
                      {isListening && (
                        <>
                          <div className="flex gap-1">
                            <span className="w-1 h-2 bg-primary rounded-full animate-pulse" />
                            <span className="w-1 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.1s" }} />
                            <span className="w-1 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
                          </div>
                          <span className="text-xs text-primary font-medium">Listening...</span>
                        </>
                      )}
                    </div>

                    {/* Transcribed text */}
                    {transcript && (
                      <div className="bg-zinc-950/50 rounded-lg p-3 border border-zinc-800/60">
                        <p className="text-sm text-foreground leading-relaxed">
                          {transcript}
                        </p>
                      </div>
                    )}

                    {/* Audio waveform */}
                    <AudioWaveform isActive={isListening} />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* AI Response */}
            {response && (
              <Card className="border-zinc-800/60 bg-zinc-900/50">
                <CardContent className="p-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary/40 to-primary/20">
                        <Sparkles className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-3">
                      <p className="text-sm text-foreground leading-relaxed">
                        {response.message}
                      </p>

                      {/* Response suggestions */}
                      {response.suggestions && response.suggestions.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {response.suggestions.map((suggestion, index) => (
                            <Button
                              key={index}
                              variant="outline"
                              size="sm"
                              className="h-7 text-xs rounded-full"
                              onClick={() => handleSuggestionClick(suggestion)}
                            >
                              {suggestion.icon}
                              <span className="ml-1">{suggestion.label}</span>
                              <ChevronRight className="ml-1 h-3 w-3" />
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Processing indicator */}
            {isProcessing && !isListening && (
              <div className="flex items-center justify-center py-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                  <p className="text-sm text-muted-foreground">Processing your request...</p>
                </div>
              </div>
            )}

            {/* Quick Suggestions */}
            {!isListening && !transcript && !response && (
              <div className="space-y-3">
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                  Quick Actions
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {suggestions.map((suggestion, index) => (
                    <Badge
                      key={index}
                      variant={suggestion.variant || "secondary"}
                      className={cn(
                        "h-auto py-3 px-4 rounded-xl cursor-pointer",
                        "hover:bg-accent hover:text-accent-foreground",
                        "transition-colors duration-200",
                        "flex items-center gap-2 text-sm justify-start"
                      )}
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion.icon && <span className="flex-shrink-0">{suggestion.icon}</span>}
                      <span className="line-clamp-2 text-left">{suggestion.label}</span>
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="border-t border-zinc-800/60 px-6 py-4 space-y-3">
            {/* Main mic button */}
            <Button
              size="lg"
              className={cn(
                "w-full h-14 rounded-2xl text-base font-semibold",
                "transition-all duration-300",
                isListening
                  ? "bg-destructive hover:bg-destructive/90"
                  : "bg-primary hover:bg-primary/90",
                "shadow-lg shadow-primary/20"
              )}
              onClick={isListening ? stopListening : startListening}
              disabled={isProcessing}
            >
              {isListening ? (
                <>
                  <MicOff className="mr-2 h-5 w-5" />
                  Stop Listening
                </>
              ) : (
                <>
                  <Mic className="mr-2 h-5 w-5" />
                  {isProcessing ? "Processing..." : "Tap to Speak"}
                </>
              )}
            </Button>

            {/* Helper text */}
            <p className="text-xs text-center text-muted-foreground">
              {isListening
                ? "Speak clearly into your microphone"
                : "Tap the button or try a quick action above"}
            </p>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}

// ============================================================================
// EXPORTS
// ============================================================================

export default MobileVoiceAssistant
