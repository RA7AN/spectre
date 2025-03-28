"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function SettingsPage() {
  const [confidenceThreshold, setConfidenceThreshold] = useState(0.5)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-1 container mx-auto px-4 py-8 bg-gray-900 text-gray-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Settings</h1>

          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="model">Model Configuration</TabsTrigger>
              <TabsTrigger value="account">Account</TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="space-y-6">
              <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
                <h2 className="text-xl font-semibold mb-4">Interface Settings</h2>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="dark-mode">Dark Mode</Label>
                      <p className="text-sm text-gray-400">Enable dark mode for the interface</p>
                    </div>
                    <Switch id="dark-mode" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="default-camera">Default Camera</Label>
                    <Select defaultValue="camera-1">
                      <SelectTrigger id="default-camera">
                        <SelectValue placeholder="Select camera" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="camera-1">Camera 1</SelectItem>
                        <SelectItem value="camera-2">Camera 2</SelectItem>
                        <SelectItem value="camera-3">Camera 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="default-time-range">Default Time Range</Label>
                    <Select defaultValue="1h">
                      <SelectTrigger id="default-time-range">
                        <SelectValue placeholder="Select time range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30m">Last 30 minutes</SelectItem>
                        <SelectItem value="1h">Last 1 hour</SelectItem>
                        <SelectItem value="6h">Last 6 hours</SelectItem>
                        <SelectItem value="24h">Last 24 hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
                <h2 className="text-xl font-semibold mb-4">Notifications</h2>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-notifications">Email Notifications</Label>
                      <p className="text-sm text-gray-400">Receive email notifications for important events</p>
                    </div>
                    <Switch id="email-notifications" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="browser-notifications">Browser Notifications</Label>
                      <p className="text-sm text-gray-400">Receive browser notifications when results are ready</p>
                    </div>
                    <Switch id="browser-notifications" />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="model" className="space-y-6">
              <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
                <h2 className="text-xl font-semibold mb-4">Model Parameters</h2>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="confidence-threshold">
                        Confidence Threshold: {(confidenceThreshold * 100).toFixed(0)}%
                      </Label>
                    </div>
                    <Slider
                      id="confidence-threshold"
                      value={[confidenceThreshold]}
                      min={0}
                      max={1}
                      step={0.01}
                      onValueChange={(value) => setConfidenceThreshold(value[0])}
                    />
                    <p className="text-sm text-gray-400">Only show results with confidence above this threshold</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="attention-layers">Cross-Modal Attention Layers</Label>
                    <Select defaultValue="4">
                      <SelectTrigger id="attention-layers">
                        <SelectValue placeholder="Select number of layers" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2">2 Layers</SelectItem>
                        <SelectItem value="4">4 Layers</SelectItem>
                        <SelectItem value="6">6 Layers</SelectItem>
                        <SelectItem value="8">8 Layers</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-gray-400">
                      More layers may improve accuracy but increase processing time
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="video-encoder">Video Encoder Model</Label>
                    <Select defaultValue="slowfast">
                      <SelectTrigger id="video-encoder">
                        <SelectValue placeholder="Select video encoder" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="slowfast">SlowFast R50</SelectItem>
                        <SelectItem value="i3d">I3D</SelectItem>
                        <SelectItem value="c3d">C3D</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="text-encoder">Text Encoder Model</Label>
                    <Select defaultValue="clip">
                      <SelectTrigger id="text-encoder">
                        <SelectValue placeholder="Select text encoder" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="clip">CLIP</SelectItem>
                        <SelectItem value="bert">BERT</SelectItem>
                        <SelectItem value="roberta">RoBERTa</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
                <h2 className="text-xl font-semibold mb-4">Advanced Settings</h2>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="use-gpu">Use GPU Acceleration</Label>
                      <p className="text-sm text-gray-400">Enable GPU acceleration for faster processing</p>
                    </div>
                    <Switch id="use-gpu" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="cache-results">Cache Results</Label>
                      <p className="text-sm text-gray-400">Store results in cache for faster retrieval</p>
                    </div>
                    <Switch id="cache-results" defaultChecked />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="account" className="space-y-6">
              <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
                <h2 className="text-xl font-semibold mb-4">Account Information</h2>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" value="demo_user" readOnly />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value="demo@example.com" />
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
                <h2 className="text-xl font-semibold mb-4">Change Password</h2>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>

                  <Button>Update Password</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  )
}

