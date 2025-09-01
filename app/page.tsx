import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { VideoShowcase } from "@/components/video-showcase"
import { BlogPreview } from "@/components/blog-preview"
import { AdContent } from "@/components/ad-content"
import { LiveStatus } from "@/components/live-status"

export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Navigation />
      <LiveStatus />
      <HeroSection />
      <AdContent position="top" />
      <VideoShowcase />
      {/* <AdContent position="middle" /> */}
      {/* <BlogPreview /> */}
      <AdContent position="bottom" />
    </main>
  )
}
