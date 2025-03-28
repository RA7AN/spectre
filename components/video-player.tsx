"use client"

import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Play, Pause, Volume2, VolumeX, Download, SkipBack, SkipForward } from "lucide-react"
import { formatTime } from "@/lib/utils"

interface VideoPlayerProps {
  clip: {
    start: number
    end: number
    url: string
    confidence?: number
  } | null
}

export function VideoPlayer({ clip }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    if (clip && videoRef.current) {
      videoRef.current.currentTime = clip.start
      setCurrentTime(clip.start)
    }
  }, [clip])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime)

      // If we reach the end of the clip, pause the video
      if (clip && video.currentTime >= clip.end) {
        video.pause()
        setIsPlaying(false)
      }
    }

    const handleDurationChange = () => {
      setDuration(video.duration)
    }

    const handleEnded = () => {
      setIsPlaying(false)
    }

    video.addEventListener("timeupdate", handleTimeUpdate)
    video.addEventListener("durationchange", handleDurationChange)
    video.addEventListener("ended", handleEnded)

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate)
      video.removeEventListener("durationchange", handleDurationChange)
      video.removeEventListener("ended", handleEnded)
    }
  }, [clip])

  const togglePlay = () => {
    if (!videoRef.current) return

    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }

    setIsPlaying(!isPlaying)
  }

  const handleSeek = (value: number[]) => {
    if (!videoRef.current) return

    const newTime = value[0]
    videoRef.current.currentTime = newTime
    setCurrentTime(newTime)
  }

  const toggleMute = () => {
    if (!videoRef.current) return

    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const handleVolumeChange = (value: number[]) => {
    if (!videoRef.current) return

    const newVolume = value[0]
    videoRef.current.volume = newVolume
    setVolume(newVolume)

    if (newVolume === 0) {
      setIsMuted(true)
    } else if (isMuted) {
      setIsMuted(false)
    }
  }

  const skipBackward = () => {
    if (!videoRef.current) return

    const newTime = Math.max(currentTime - 5, 0)
    videoRef.current.currentTime = newTime
    setCurrentTime(newTime)
  }

  const skipForward = () => {
    if (!videoRef.current) return

    const newTime = Math.min(currentTime + 5, duration)
    videoRef.current.currentTime = newTime
    setCurrentTime(newTime)
  }

  const downloadClip = () => {
    if (!clip) return

    // In a real application, you would implement a proper download mechanism
    // This is just a placeholder that opens the video in a new tab
    window.open(clip.url, "_blank")
  }

  return (
    <div className="space-y-4">
      <div className="relative aspect-video bg-gray-700 rounded-md overflow-hidden">
        {clip ? (
          <video
            ref={videoRef}
            src={clip.url}
            className="w-full h-full object-contain"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-400">No video selected</p>
          </div>
        )}
      </div>

      {clip && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">{formatTime(currentTime)}</span>
            <span className="text-sm text-gray-500">{formatTime(duration)}</span>
          </div>

          <Slider
            value={[currentTime]}
            min={0}
            max={duration || 100}
            step={0.1}
            onValueChange={handleSeek}
            disabled={!clip}
          />

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" onClick={skipBackward} disabled={!clip}>
                <SkipBack className="h-5 w-5" />
              </Button>

              <Button variant="ghost" size="icon" onClick={togglePlay} disabled={!clip}>
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </Button>

              <Button variant="ghost" size="icon" onClick={skipForward} disabled={!clip}>
                <SkipForward className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" onClick={toggleMute} disabled={!clip}>
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </Button>

              <div className="w-24">
                <Slider
                  value={[isMuted ? 0 : volume]}
                  min={0}
                  max={1}
                  step={0.01}
                  onValueChange={handleVolumeChange}
                  disabled={!clip}
                />
              </div>

              <Button variant="outline" size="sm" onClick={downloadClip} disabled={!clip}>
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </div>

          {clip.confidence !== undefined && (
            <div className="text-sm text-gray-500 mt-2">Confidence: {(clip.confidence * 100).toFixed(1)}%</div>
          )}
        </div>
      )}
    </div>
  )
}

