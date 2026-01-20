"use client"

/**
 * Mobile Voice Assistant Component Showcase
 *
 * Demonstrates the MobileVoiceAssistant component with voice-activated AI interface.
 * Features animated pulse visualization, real-time transcription, and contextual responses.
 */

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mic, Sparkles, Code, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import MobileVoiceAssistant from "@/components/mobile-voice-assistant"

export default function MobileVoiceAssistantPage() {
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState("")
  const [response, setResponse] = useState<string | null>(null)

  const suggestions = [
    { label: "3 bedroom house", command: "Show me 3 bedroom houses" },
    { label: "Under $500k", command: "Homes under 500000 dollars" },
    { label: "Near beach", command: "Properties near the beach" },
    { label: "With pool", command: "Houses with swimming pool" },
  ]

  const handleVoiceCommand = (result: { transcript: string; confidence: number }) => {
    setTranscript(result.transcript)
    setIsListening(false)

    // Simulate AI response
    setTimeout(() => {
      setResponse(`Found 24 properties matching "${result.transcript}". Displaying top results sorted by relevance.`)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-zinc-100 to-zinc-200 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-zinc-950/70 border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="h-16 flex items-center gap-4">
            <Link href="/showcase">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-lg font-semibold">Mobile Voice Assistant</h1>
              <p className="text-sm text-zinc-500">Component Showcase</p>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
        <div className="grid lg:grid-cols-[1fr_400px] gap-8">
          {/* Main Content */}
          <div className="space-y-6">
            {/* Description */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-indigo-100 text-indigo-700 border-indigo-200">
                    Component
                  </Badge>
                  <Badge variant="outline">React 19</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                </div>
                <CardTitle>Voice-Activated AI Assistant</CardTitle>
                <CardDescription>
                  A sophisticated mobile voice assistant component with animated visual feedback,
                  real-time transcription, and contextual AI responses using Web Speech API.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <List className="h-4 w-4" />
                    Key Features
                  </h3>
                  <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <li>• Animated pulse visualization for voice activity</li>
                    <li>• Real-time speech-to-text transcription</li>
                    <li>• Contextual AI responses with typing animation</li>
                    <li>• Quick action suggestions</li>
                    <li>• Three theme variants (default, glass, minimal)</li>
                    <li>• Responsive mobile-first design</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Code className="h-4 w-4" />
                    Usage Example
                  </h3>
                  <pre className="bg-zinc-950 text-zinc-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<MobileVoiceAssistant
  isListening={isListening}
  onVoiceCommand={handleVoiceCommand}
  suggestions={[
    { label: "3 bedroom house", command: "Show 3 bedroom houses" },
    { label: "Under $500k", command: "Homes under $500k" },
  ]}
/>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            {/* Live Demo */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-indigo-600" />
                  Live Demo
                </CardTitle>
                <CardDescription>
                  Try the voice assistant by clicking the microphone button
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center p-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-xl">
                  <MobileVoiceAssistant
                    isListening={isListening}
                    onVoiceCommand={handleVoiceCommand}
                    suggestions={suggestions}
                  />
                </div>

                {transcript && (
                  <div className="mt-4 p-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">Transcript:</p>
                    <p className="font-medium">"{transcript}"</p>
                  </div>
                )}

                {response && (
                  <div className="mt-4 p-4 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg border border-indigo-200 dark:border-indigo-800">
                    <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-1">AI Response:</p>
                    <p className="font-medium">{response}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <aside className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Component Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-zinc-500">File</span>
                  <span className="font-medium font-mono text-xs">mobile-voice-assistant.tsx</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Size</span>
                  <span className="font-medium">~400 lines</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">API</span>
                  <span className="font-medium">Web Speech API</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Theme Variants</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex items-center gap-2 p-2 rounded bg-zinc-100 dark:bg-zinc-800">
                  <div className="h-4 w-4 rounded bg-gradient-to-r from-indigo-500 to-purple-500" />
                  <span>Default</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded bg-zinc-100 dark:bg-zinc-800">
                  <div className="h-4 w-4 rounded bg-white/80 border" />
                  <span>Glass</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded bg-zinc-100 dark:bg-zinc-800">
                  <div className="h-4 w-4 rounded bg-zinc-900" />
                  <span>Minimal</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Props</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-xs font-mono">
                <div className="p-2 rounded bg-zinc-100 dark:bg-zinc-800">
                  <span className="text-indigo-600">isListening</span>: boolean
                </div>
                <div className="p-2 rounded bg-zinc-100 dark:bg-zinc-800">
                  <span className="text-indigo-600">onVoiceCommand</span>: (result) =&gt; void
                </div>
                <div className="p-2 rounded bg-zinc-100 dark:bg-zinc-800">
                  <span className="text-indigo-600">suggestions</span>: SuggestionItem[]
                </div>
                <div className="p-2 rounded bg-zinc-100 dark:bg-zinc-800">
                  <span className="text-indigo-600">theme</span>?: "default" | "glass" | "minimal"
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  )
}
