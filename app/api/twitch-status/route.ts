import { NextResponse } from "next/server"

export async function GET() {
  try {
    const CLIENT_ID = process.env.TWITCH_CLIENT_ID
    const CLIENT_SECRET = process.env.TWITCH_CLIENT_SECRET
    const USERNAME = "unoobZzz" // Your Twitch username

    if (!CLIENT_ID || !CLIENT_SECRET) {
      return NextResponse.json({ 
        isLive: false, 
        error: "Twitch API not configured" 
      })
    }

    // Get access token
    const tokenResponse = await fetch("https://id.twitch.tv/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: "client_credentials",
      }),
    })

    if (!tokenResponse.ok) {
      throw new Error("Failed to get Twitch access token")
    }

    const tokenData = await tokenResponse.json()
    const accessToken = tokenData.access_token

    // Get user ID
    const userResponse = await fetch(`https://api.twitch.tv/helix/users?login=${USERNAME}`, {
      headers: {
        "Client-ID": CLIENT_ID,
        "Authorization": `Bearer ${accessToken}`,
      },
    })

    if (!userResponse.ok) {
      throw new Error("Failed to get Twitch user")
    }

    const userData = await userResponse.json()
    const userId = userData.data[0]?.id

    if (!userId) {
      throw new Error("Twitch user not found")
    }

    // Check if user is live
    const streamResponse = await fetch(`https://api.twitch.tv/helix/streams?user_id=${userId}`, {
      headers: {
        "Client-ID": CLIENT_ID,
        "Authorization": `Bearer ${accessToken}`,
      },
    })

    if (!streamResponse.ok) {
      throw new Error("Failed to get stream status")
    }

    const streamData = await streamResponse.json()
    const isLive = streamData.data.length > 0

    if (isLive) {
      const stream = streamData.data[0]
      return NextResponse.json({
        isLive: true,
        title: stream.title,
        game: stream.game_name,
        viewerCount: stream.viewer_count,
        startedAt: stream.started_at,
        thumbnail: stream.thumbnail_url.replace("{width}", "320").replace("{height}", "180"),
        url: `https://www.twitch.tv/${USERNAME}`,
      })
    }

    return NextResponse.json({
      isLive: false,
      url: `https://www.twitch.tv/${USERNAME}`,
    })

  } catch (error) {
    console.error("Twitch API error:", error)
    return NextResponse.json({
      isLive: false,
      error: "Failed to check Twitch status",
      url: "https://www.twitch.tv/unoobZzz",
    })
  }
}
