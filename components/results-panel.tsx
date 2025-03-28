"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, Clock } from "lucide-react"
import { formatTime } from "@/lib/utils"

interface ResultsPanelProps {
  results: any[]
  onClipSelect: (clip: any) => void
  isProcessing: boolean
}

export function ResultsPanel({ results, onClipSelect, isProcessing }: ResultsPanelProps) {
  const handleCameraChange = (value: string) => {
    // In a real application, this would filter results by camera
    console.log("Camera changed:", value)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Localized Moments</h3>

        <Select onValueChange={handleCameraChange} defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Camera" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Cameras</SelectItem>
            <SelectItem value="camera-1">Camera 1</SelectItem>
            <SelectItem value="camera-2">Camera 2</SelectItem>
            <SelectItem value="camera-3">Camera 3</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {isProcessing ? (
        <div className="flex flex-col items-center justify-center py-8">
          <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
          <p className="text-gray-500">Processing your query...</p>
        </div>
      ) : results.length > 0 ? (
        <div className="space-y-3">
          {results.map((result) => (
            <div
              key={result.id}
              className="border border-gray-700 bg-gray-700/50 rounded-lg p-4 hover:border-primary transition-colors cursor-pointer"
              onClick={() => onClipSelect(result)}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="font-medium">
                      {formatTime(result.start)} - {formatTime(result.end)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Duration: {formatTime(result.end - result.start)}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-primary">
                    {(result.confidence * 100).toFixed(1)}% confidence
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Camera ID: {result.cameraId || "Unknown"}</p>
                </div>
              </div>

              <div className="flex justify-end mt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    onClipSelect(result)
                  }}
                >
                  View Clip
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <p className="text-gray-400 mb-2">No results found</p>
          <p className="text-sm text-gray-500">Try refining your query or selecting different witness reports</p>
        </div>
      )}
    </div>
  )
}

