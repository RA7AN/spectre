"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useAuth } from "@/lib/auth-context"

export default function Home() {
  const router = useRouter()
  const { isAuthenticated } = useAuth()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  const handleGetStarted = () => {
    if (isAuthenticated) {
      router.push("/dashboard")
    } else {
      router.push("/register")
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <main className="flex-1 relative overflow-hidden">
        {/* Background CCTV Images */}
        <div className="absolute inset-0 z-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 h-full opacity-60 dark:opacity-20">
            <div
              className="bg-cover bg-center bg-black/25 dark:bg-black/40"
              style={{ backgroundImage: "url('/placeholder.svg?height=600&width=800')" }}
            ></div>
            <div
              className="bg-cover bg-center bg-black/25 dark:bg-black/40"
              style={{ backgroundImage: "url('/placeholder.svg?height=600&width=800')" }}
            ></div>
            <div
              className="bg-cover bg-center bg-black/25 dark:bg-black/40"
              style={{ backgroundImage: "url('/placeholder.svg?height=600&width=800')" }}
            ></div>
            <div
              className="bg-cover bg-center bg-black/25 dark:bg-black/40"
              style={{ backgroundImage: "url('/placeholder.svg?height=600&width=800')" }}
            ></div>
            <div
              className="bg-cover bg-center bg-black/25 dark:bg-black/40"
              style={{ backgroundImage: "url('/placeholder.svg?height=600&width=800')" }}
            ></div>
            <div
              className="bg-cover bg-center bg-black/25 dark:bg-black/40"
              style={{ backgroundImage: "url('/placeholder.svg?height=600&width=800')" }}
            ></div>
            <div
              className="bg-cover bg-center bg-black/25 dark:bg-black/40"
              style={{ backgroundImage: "url('/placeholder.svg?height=600&width=800')" }}
            ></div>
            <div
              className="bg-cover bg-center bg-black/25 dark:bg-black/40"
              style={{ backgroundImage: "url('/placeholder.svg?height=600&width=800')" }}
            ></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background/90"></div>
        </div>

        {/* Hero Content */}
        <div className="relative container mx-auto px-6 py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Temporal Video Grounding
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Locate specific moments in video footage using natural language queries and witness reports
          </p>
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              onClick={handleGetStarted}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Get Started
            </Button>
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-border">
                Learn More
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="bg-card/60 backdrop-blur-sm p-6 rounded-lg border border-border">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 text-center">Natural Language Queries</h3>
              <p className="text-muted-foreground text-center">
                Search video footage using everyday language instead of complex parameters
              </p>
            </div>

            <div className="bg-card/60 backdrop-blur-sm p-6 rounded-lg border border-border">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 text-center">Precise Timestamp Prediction</h3>
              <p className="text-muted-foreground text-center">Accurately locate specific moments in hours of video footage</p>
            </div>

            <div className="bg-card/60 backdrop-blur-sm p-6 rounded-lg border border-border">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 text-center">Witness Report Integration</h3>
              <p className="text-muted-foreground text-center">Enhance search accuracy by incorporating witness testimonies</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

