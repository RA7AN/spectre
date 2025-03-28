import { NextResponse } from "next/server"

// This would be replaced with actual CCTV image URLs from your database or storage
const cctvImages = [
  {
    url: "/cctv-1.jpg",
    alt: "CCTV footage of a parking lot",
  },
  {
    url: "/cctv-2.jpg",
    alt: "CCTV footage of a building entrance",
  },
  {
    url: "/cctv-3.jpg",
    alt: "CCTV footage of a street corner",
  },
  {
    url: "/cctv-4.jpg",
    alt: "CCTV footage of a hallway",
  },
  {
    url: "/cctv-5.jpg",
    alt: "CCTV footage of a retail store",
  },
  {
    url: "/cctv-6.jpg",
    alt: "CCTV footage of a warehouse",
  },
  {
    url: "/cctv-7.jpg",
    alt: "CCTV footage of an office space",
  },
  {
    url: "/cctv-8.jpg",
    alt: "CCTV footage of a residential area",
  },
]

export async function GET() {
  return NextResponse.json({ images: cctvImages })
}

