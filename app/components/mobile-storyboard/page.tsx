"use client"

/**
 * Mobile Storyboard Component Showcase
 *
 * Demonstrates the MobileStoryboard component for visualizing mobile UI flows.
 * Features device frames, screen connectors, and theme customization.
 */

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Smartphone, Code, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MobileStoryboard,
  type StoryboardScreen,
  type StoryboardTheme,
} from "@/components/mobile-storyboard"

// Sample screen components for demonstration
function TailorYourAgentScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center mb-4">
        <Smartphone className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-lg font-bold text-cyan-900">Tailor Your Agent</h3>
      <p className="text-sm text-cyan-700 mt-2">Customize your AI agent to match your preferences</p>
    </div>
  )
}

function ToolboxScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-4">
        <List className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-lg font-bold text-blue-900">Agent Toolbox</h3>
      <p className="text-sm text-blue-700 mt-2">Access powerful tools for property search</p>
    </div>
  )
}

function VoiceSearchScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-fuchsia-400 to-fuchsia-600 flex items-center justify-center mb-4 animate-pulse">
        <Smartphone className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-lg font-bold text-fuchsia-900">Voice Search</h3>
      <p className="text-sm text-fuchsia-700 mt-2">Speak naturally to find your dream home</p>
    </div>
  )
}

export default function MobileStoryboardPage() {
  const [theme, setTheme] = useState<StoryboardTheme>("cyan")
  const [device, setDevice] = useState<"mobile" | "tablet" | "desktop">("mobile")

  const cyanScreens: StoryboardScreen[] = [
    {
      id: "agent",
      title: "Tailor Your Agent",
      subtitle: "Step 1 of 2",
      component: <TailorYourAgentScreen />,
    },
    {
      id: "toolbox",
      title: "Toolbox",
      subtitle: "Step 2 of 2",
      component: <ToolboxScreen />,
    },
  ]

  const fuchsiaScreens: StoryboardScreen[] = [
    {
      id: "voice",
      title: "Voice Search",
      subtitle: "AI-Powered",
      component: <VoiceSearchScreen />,
    },
  ]

  const screens = theme === "cyan" ? cyanScreens : fuchsiaScreens

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
              <h1 className="text-lg font-semibold">Mobile Storyboard</h1>
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
                <CardTitle>Visual Storyboard for Mobile UI</CardTitle>
                <CardDescription>
                  Displays a mobile device frame with configurable screens, perfect for showcasing
                  user flows, onboarding sequences, or feature walkthroughs.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <List className="h-4 w-4" />
                    Key Features
                  </h3>
                  <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <li>• Device frame (mobile, tablet, desktop)</li>
                    <li>• Configurable screens with connectors</li>
                    <li>• Two theme options (cyan/blue, fuchsia/purple)</li>
                    <li>• Stepper component for progress indication</li>
                    <li>• Responsive design with shadcn/ui</li>
                    <li>• Custom screen content support</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Code className="h-4 w-4" />
                    Usage Example
                  </h3>
                  <pre className="bg-zinc-950 text-zinc-100 p-4 rounded-lg text-sm overflow-x-auto">
{`<MobileStoryboard
  screens={[
    {
      id: "screen1",
      title: "Welcome",
      component: <WelcomeScreen />,
    },
  ]}
  theme="cyan"
  device="mobile"
/>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            {/* Live Demo */}
            <Card>
              <CardHeader>
                <CardTitle>Interactive Demo</CardTitle>
                <CardDescription>
                  Switch themes and devices to see different configurations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Theme Toggle */}
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">Theme:</span>
                  <div className="flex gap-2">
                    <Button
                      variant={theme === "cyan" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setTheme("cyan")}
                    >
                      Cyan/Blue
                    </Button>
                    <Button
                      variant={theme === "fuchsia" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setTheme("fuchsia")}
                    >
                      Fuchsia/Purple
                    </Button>
                  </div>
                </div>

                {/* Device Toggle */}
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">Device:</span>
                  <div className="flex gap-2">
                    <Button
                      variant={device === "mobile" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setDevice("mobile")}
                    >
                      Mobile
                    </Button>
                    <Button
                      variant={device === "tablet" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setDevice("tablet")}
                    >
                      Tablet
                    </Button>
                    <Button
                      variant={device === "desktop" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setDevice("desktop")}
                    >
                      Desktop
                    </Button>
                  </div>
                </div>

                {/* Storyboard Display */}
                <div className="flex justify-center p-8 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 rounded-xl">
                  <MobileStoryboard
                    screens={screens}
                    theme={theme}
                    defaultDevice={device}
                    showDeviceSelector={false}
                  />
                </div>
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
                  <span className="font-medium font-mono text-xs">mobile-storyboard.tsx</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Size</span>
                  <span className="font-medium">~800 lines</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Exports</span>
                  <span className="font-medium">Multiple Types</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Theme Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex items-center gap-2 p-2 rounded bg-zinc-100 dark:bg-zinc-800">
                  <div className="h-4 w-4 rounded bg-gradient-to-r from-cyan-400 to-blue-500" />
                  <span>Cyan/Blue</span>
                  <Badge variant="secondary" className="ml-auto text-xs">Core</Badge>
                </div>
                <div className="flex items-center gap-2 p-2 rounded bg-zinc-100 dark:bg-zinc-800">
                  <div className="h-4 w-4 rounded bg-gradient-to-r from-fuchsia-400 to-purple-500" />
                  <span>Fuchsia/Purple</span>
                  <Badge variant="secondary" className="ml-auto text-xs">Voice</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Exported Types</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-xs font-mono">
                <div className="p-2 rounded bg-zinc-100 dark:bg-zinc-800">
                  <span className="text-cyan-600">StoryboardTheme</span>
                </div>
                <div className="p-2 rounded bg-zinc-100 dark:bg-zinc-800">
                  <span className="text-cyan-600">StoryboardScreen</span>
                </div>
                <div className="p-2 rounded bg-zinc-100 dark:bg-zinc-800">
                  <span className="text-cyan-600">MobileStoryboardProps</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Related Components</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/components/mobile-voice-assistant">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Smartphone className="h-4 w-4 mr-2" />
                    Voice Assistant
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  )
}
