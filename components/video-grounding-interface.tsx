"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { QueryInput } from "@/components/query-input"
import { VideoPlayer } from "@/components/video-player"
import { WitnessReports } from "@/components/witness-reports"
import { ResultsPanel } from "@/components/results-panel"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export function VideoGroundingInterface() {
  const [query, setQuery] = useState("")
  const [refinedQuery, setRefinedQuery] = useState("")
  const [selectedReports, setSelectedReports] = useState<string[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const [results, setResults] = useState<any[]>([])
  const [selectedClip, setSelectedClip] = useState<{
    start: number
    end: number
    url: string
    confidence: number
  } | null>(null)

  const handleQuerySubmit = (queryText: string) => {
    setQuery(queryText)
    setIsProcessing(true)

    // Simulate API call to process query
    setTimeout(() => {
      setRefinedQuery(queryText)
      setIsProcessing(false)

      // Mock results
      if (queryText.toLowerCase().includes("enter")) {
        setResults([
          {
            id: 1,
            start: 120, // in seconds
            end: 135,
            confidence: 0.89,
            url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
          },
          {
            id: 2,
            start: 240,
            end: 255,
            confidence: 0.76,
            url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
          },
        ])
      } else {
        setResults([])
      }
    }, 2000)
  }

  const handleReportSelection = (reports: string[]) => {
    setSelectedReports(reports)

    if (reports.length > 0) {
      // Simulate refining the query based on selected reports
      setRefinedQuery(`${query} (refined with ${reports.length} witness reports)`)
    } else {
      setRefinedQuery(query)
    }
  }

  const handleClipSelect = (clip: any) => {
    setSelectedClip(clip)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <Header />

      <div className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Video Grounding Dashboard</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
              <h2 className="text-xl font-semibold mb-4 text-gray-100">Query Input</h2>
              <QueryInput onSubmit={handleQuerySubmit} isProcessing={isProcessing} />
            </div>

            <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
              <h2 className="text-xl font-semibold mb-4 text-gray-100">Witness Reports</h2>
              <WitnessReports
                query={query}
                onReportSelection={handleReportSelection}
                selectedReports={selectedReports}
              />

              {refinedQuery && (
                <div className="mt-4 p-3 bg-red-900 border border-red-700 rounded-md">
                  <h3 className="text-sm font-medium text-red-200">Refined Query:</h3>
                  <p className="text-red-100">{refinedQuery}</p>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
              <h2 className="text-xl font-semibold mb-4 text-gray-100">Video Analysis</h2>

              <Tabs defaultValue="player" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="player">Video Player</TabsTrigger>
                  <TabsTrigger value="results">Results</TabsTrigger>
                </TabsList>
                <TabsContent value="player" className="pt-4">
                  <VideoPlayer clip={selectedClip} />
                </TabsContent>
                <TabsContent value="results" className="pt-4">
                  <ResultsPanel results={results} onClipSelect={handleClipSelect} isProcessing={isProcessing} />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

