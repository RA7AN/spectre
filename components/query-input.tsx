"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Loader2 } from "lucide-react"

interface QueryInputProps {
  onSubmit: (query: string) => void
  isProcessing: boolean
}

export function QueryInput({ onSubmit, isProcessing }: QueryInputProps) {
  const [queryText, setQueryText] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (queryText.trim() && !isProcessing) {
      onSubmit(queryText.trim())
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Textarea
          placeholder="Enter your query here (e.g., 'Show me when a person entered the room')"
          value={queryText}
          onChange={(e) => setQueryText(e.target.value)}
          className="min-h-[120px] resize-none"
          maxLength={500}
        />
        <p className="text-xs text-gray-500 text-right">{queryText.length}/500 characters</p>
      </div>

      <div className="flex justify-end">
        <Button type="submit" disabled={!queryText.trim() || isProcessing}>
          {isProcessing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            "Submit Query"
          )}
        </Button>
      </div>
    </form>
  )
}

