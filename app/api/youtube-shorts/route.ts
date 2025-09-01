import { NextResponse } from "next/server"

export async function GET() {
  try {
    const API_KEY = process.env.YOUTUBE_API_KEY
    const CHANNEL_HANDLE = "unoobZzz"
    
    if (!API_KEY) {
      throw new Error("YouTube API key not configured")
    }

    // First get channel ID from handle
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=id&forHandle=${CHANNEL_HANDLE}&key=${API_KEY}`,
    )
    const channelData = await channelResponse.json()

    if (!channelData.items?.[0]) {
      throw new Error("Channel not found")
    }

    const channelId = channelData.items[0].id

    // Get videos from the channel, filtering for Shorts (duration < 60 seconds)
    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=50&order=viewCount&type=video&key=${API_KEY}`,
    )
    const videosData = await videosResponse.json()

    if (!videosData.items) {
      throw new Error("No videos found")
    }

    // Get detailed info for each video to check duration
    const videoIds = videosData.items.map((item: any) => item.id.videoId).join(",")
    const detailsResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics,snippet&id=${videoIds}&key=${API_KEY}`,
    )
    const detailsData = await detailsResponse.json()

    // Filter for Shorts (videos under 60 seconds) and find most viewed
    const shorts = detailsData.items.filter((video: any) => {
      const duration = video.contentDetails.duration
      // Parse ISO 8601 duration (PT30S = 30 seconds, PT1M30S = 1 minute 30 seconds)
      const match = duration.match(/PT(?:(\d+)M)?(?:(\d+)S)?/)
      const minutes = Number.parseInt(match?.[1] || "0")
      const seconds = Number.parseInt(match?.[2] || "0")
      const totalSeconds = minutes * 60 + seconds
      return totalSeconds <= 60
    })

    if (shorts.length === 0) {
      throw new Error("No Shorts found")
    }

    // Sort by view count and get the most viewed
    const mostViewedShort = shorts.sort(
      (a: any, b: any) => Number.parseInt(b.statistics.viewCount) - Number.parseInt(a.statistics.viewCount),
    )[0]

    return NextResponse.json({
      id: mostViewedShort.id,
      title: mostViewedShort.snippet.title,
      thumbnail: mostViewedShort.snippet.thumbnails.maxres?.url || mostViewedShort.snippet.thumbnails.high.url,
      viewCount: Number.parseInt(mostViewedShort.statistics.viewCount),
      publishedAt: mostViewedShort.snippet.publishedAt,
      url: `https://www.youtube.com/watch?v=${mostViewedShort.id}`,
    })
  } catch (error) {
    console.error("Error fetching YouTube Shorts:", error)
    return NextResponse.json({ error: "Failed to fetch YouTube Shorts" }, { status: 500 })
  }
}
