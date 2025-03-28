"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { VideoGroundingInterface } from "@/components/video-grounding-interface"
import { useAuth } from "@/lib/auth-context"

export default function DashboardPage() {
  const { isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login")
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated) {
    return null // Don't render anything while redirecting
  }

  return <VideoGroundingInterface />
}

