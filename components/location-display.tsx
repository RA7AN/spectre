"use client"

import { useState, useEffect } from "react"
import { MapPin } from "lucide-react"

export function LocationDisplay() {
  const [location, setLocation] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching location data
    setTimeout(() => {
      setLocation("Hyderabad, TG")
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <div className="flex items-center text-sm text-gray-400">
      <MapPin className="h-4 w-4 mr-1" />
      {loading ? <span>Detecting location...</span> : <span>{location}</span>}
    </div>
  )
}

