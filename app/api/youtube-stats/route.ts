import { NextResponse } from "next/server"
import { cache, CACHE_KEYS } from "@/lib/cache"

export async function GET() {
  try {
    // Check cache first
    const cachedData = cache.get(CACHE_KEYS.YOUTUBE_STATS)
    if (cachedData) {
      return NextResponse.json(cachedData)
    }

    const API_KEY = process.env.YOUTUBE_API_KEY
    const CHANNEL_HANDLE = "unoobZzz" // Using channel handle instead of ID
    
    if (!API_KEY) {
      throw new Error("YouTube API key not configured")
    }

    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&forHandle=${CHANNEL_HANDLE}&key=${API_KEY}`,
    )

    if (!response.ok) {
      console.error("YouTube API response not ok:", response.status, response.statusText)
      throw new Error("Failed to fetch YouTube data")
    }

    const data = await response.json()
    const stats = data.items[0]?.statistics

    if (!stats) {
      console.error("No statistics found in response:", data)
      throw new Error("No statistics found")
    }

    const result = {
      subscriberCount: Number.parseInt(stats.subscriberCount).toLocaleString(),
      viewCount: Number.parseInt(stats.viewCount).toLocaleString(),
      videoCount: Number.parseInt(stats.videoCount).toLocaleString(),
    }

    // Cache the result for 5 minutes
    cache.set(CACHE_KEYS.YOUTUBE_STATS, result, 5 * 60 * 1000)

    return NextResponse.json(result)
  } catch (error) {
    console.error("YouTube API error:", error)
    return NextResponse.json({
      subscriberCount: "Loading...",
      viewCount: "Loading...",
      videoCount: "Loading...",
    })
  }
}
