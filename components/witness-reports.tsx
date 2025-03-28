"use client"

import { useEffect, useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

interface WitnessReportsProps {
  query: string
  onReportSelection: (reports: string[]) => void
  selectedReports: string[]
}

// Mock witness reports data
const mockReports = [
  {
    id: "report-1",
    summary: "Person in red shirt entered at 10:00 AM",
    content:
      "I saw a person wearing a red shirt enter through the main entrance at approximately 10:00 AM. They were carrying a black backpack.",
  },
  {
    id: "report-2",
    summary: "Individual with a backpack at 10:05 AM",
    content:
      "An individual with a black backpack was seen near the reception desk at around 10:05 AM. They appeared to be looking for someone.",
  },
  {
    id: "report-3",
    summary: "Person exited through emergency door at 10:15 AM",
    content:
      "I noticed someone exit through the emergency door at the back of the building at approximately 10:15 AM. They seemed to be in a hurry.",
  },
]

export function WitnessReports({ query, onReportSelection, selectedReports }: WitnessReportsProps) {
  const [reports, setReports] = useState<typeof mockReports>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (query) {
      setReports([])
    }
  }, [query])

  const handleRetrieveReports = () => {
    if (!query) return

    setIsLoading(true)

    // Simulate API call to retrieve witness reports
    setTimeout(() => {
      setReports(mockReports)
      setIsLoading(false)
    }, 1500)
  }

  const handleReportToggle = (reportId: string) => {
    if (selectedReports.includes(reportId)) {
      onReportSelection(selectedReports.filter((id) => id !== reportId))
    } else {
      onReportSelection([...selectedReports, reportId])
    }
  }

  return (
    <div className="space-y-4">
      <Button onClick={handleRetrieveReports} disabled={!query || isLoading} variant="outline" className="w-full">
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Retrieving Reports...
          </>
        ) : (
          "Retrieve Witness Reports"
        )}
      </Button>

      {reports.length > 0 ? (
        <div className="space-y-3 mt-4">
          <h3 className="text-sm font-medium">Available Reports:</h3>
          {reports.map((report) => (
            <div
              key={report.id}
              className="flex items-start space-x-2 border border-gray-700 bg-gray-700/50 rounded-md p-3"
            >
              <Checkbox
                id={report.id}
                checked={selectedReports.includes(report.id)}
                onCheckedChange={() => handleReportToggle(report.id)}
              />
              <div className="grid gap-1.5">
                <Label htmlFor={report.id} className="font-medium cursor-pointer">
                  {report.summary}
                </Label>
                <p className="text-sm text-gray-500">{report.content}</p>
              </div>
            </div>
          ))}
        </div>
      ) : query && !isLoading ? (
        <div className="text-center py-4 text-gray-400">
          No witness reports available. Click "Retrieve Witness Reports" to search.
        </div>
      ) : null}
    </div>
  )
}

