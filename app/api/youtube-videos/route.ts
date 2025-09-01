import { NextResponse } from "next/server"

export async function GET() {
  try {
    const API_KEY = process.env.YOUTUBE_API_KEY
    const CHANNEL_HANDLE = "unoobZzz"
    
    if (!API_KEY) {
      throw new Error("YouTube API key not configured")
    }

    // First get the channel ID from the handle
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=id&forHandle=${CHANNEL_HANDLE}&key=${API_KEY}`,
    )

    if (!channelResponse.ok) {
      throw new Error("Failed to fetch channel data")
    }

    const channelData = await channelResponse.json()

    if (!channelData.items || channelData.items.length === 0) {
      throw new Error("Channel not found")
    }

    const channelId = channelData.items[0].id

    // Get recent videos from the channel
    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=6&order=date&type=video&key=${API_KEY}`,
    )

    if (!videosResponse.ok) {
      throw new Error("Failed to fetch videos")
    }

    const videosData = await videosResponse.json()

    // Get video statistics for each video
    const videoIds = videosData.items.map((item: any) => item.id.videoId).join(",")
    const statsResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=statistics,contentDetails&id=${videoIds}&key=${API_KEY}`,
    )

    const statsData = await statsResponse.json()

    // Combine video data with statistics
    const videos = videosData.items.map((item: any, index: number) => {
      const stats = statsData.items[index]
      const viewCount = Number.parseInt(stats?.statistics?.viewCount || "0")
      const duration = stats?.contentDetails?.duration || "PT0S"

      // Convert ISO 8601 duration to readable format
      const formatDuration = (isoDuration: string) => {
        const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/)
        if (!match) return "0:00"

        const hours = Number.parseInt(match[1] || "0")
        const minutes = Number.parseInt(match[2] || "0")
        const seconds = Number.parseInt(match[3] || "0")

        if (hours > 0) {
          return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
        }
        return `${minutes}:${seconds.toString().padStart(2, "0")}`
      }

      // Format view count
      const formatViews = (count: number) => {
        if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`
        if (count >= 1000) return `${(count / 1000).toFixed(1)}K`
        return count.toString()
      }

      // Calculate upload date
      const uploadDate = new Date(item.snippet.publishedAt)
      const now = new Date()
      const diffTime = Math.abs(now.getTime() - uploadDate.getTime())
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

      let timeAgo = ""
      if (diffDays === 1) timeAgo = "1 day ago"
      else if (diffDays < 7) timeAgo = `${diffDays} days ago`
      else if (diffDays < 30) timeAgo = `${Math.floor(diffDays / 7)} week${Math.floor(diffDays / 7) > 1 ? "s" : ""} ago`
      else timeAgo = `${Math.floor(diffDays / 30)} month${Math.floor(diffDays / 30) > 1 ? "s" : ""} ago`

      return {
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url,
        duration: formatDuration(duration),
        views: formatViews(viewCount),
        uploadDate: timeAgo,
        game: "Dota 2", // Since you mentioned Dota 2 is your main YouTube game
        platform: "YouTube" as const,
        url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
      }
    })

    return NextResponse.json({ videos })
  } catch (error) {
    console.error("Error fetching YouTube videos:", error)
    return NextResponse.json({ error: "Failed to fetch videos" }, { status: 500 })
  }
}
