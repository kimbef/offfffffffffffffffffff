"use client"

import { Navigation } from "@/components/navigation"
import { Play, Eye, Clock, Calendar, Filter, Search, TrendingUp, Clock3, ExternalLink } from "lucide-react"
import { AdContent } from "@/components/ad-content"
import { useState } from "react"

interface Video {
  id: string
  title: string
  embedCode: string
  category: string
  game: string
  platform: "YouTube" | "Twitch"
  url: string
  description: string
  featured?: boolean
  thumbnail?: string
}

const categories = ["All", "Dota 2", "Gameplay", "Strategy", "Ranked", "Highlights", "Tutorials"]

const allVideos: Video[] = [
  {
    id: "7eVU5JTfDHs",
    title: "Why Earth Spirit is the Coolest Hero (1.0)",
    embedCode: '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/7eVU5JTfDHs?si=JQAKseoqxksfLhws" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    category: "Gaming",
    game: "Dota 2",
    platform: "YouTube",
    url: "https://www.youtube.com/watch?v=7eVU5JTfDHs",
    description: "",
    featured: true,
    thumbnail: "https://img.youtube.com/vi/7eVU5JTfDHs/maxresdefault.jpg"
  }
]

export default function VideosPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)

  const filteredVideos = selectedCategory === "All" 
    ? allVideos 
    : allVideos.filter(video => video.category === selectedCategory)

  const openVideo = (video: Video) => {
    setSelectedVideo(video)
  }

  const closeVideo = () => {
    setSelectedVideo(null)
  }

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Navigation />

      {/* Hero Section */}
      <section className="hero" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '896px', margin: '0 auto' }}>
            <h1 className="hero-title">Dota 2 Videos</h1>
            <p className="hero-description">
              Watch my latest Dota 2 gameplay, strategy guides, and ranked matches. From Ancient bracket climbs to 
              hero tutorials, there's something for every Dota 2 player looking to improve their skills.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginTop: '24px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                <TrendingUp size={16} />
                <span>Featured Content</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                <Clock3 size={16} />
                <span>Regular Uploads</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                <Play size={16} />
                <span>Educational Content</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdContent position="top" />

      {/* Filters and Search */}
      <section style={{ padding: '32px 0', background: 'rgba(45, 55, 72, 0.1)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
              {categories.map((category) => (
                <button
                  key={category}
                  className={category === selectedCategory ? "btn btn-primary" : "btn btn-outline"}
                  style={{ padding: '8px 16px', fontSize: '0.875rem' }}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '0.875rem' }}>
                <Search size={16} />
                Search
              </button>
              <button className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '0.875rem' }}>
                <Filter size={16} />
                Filter
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="section">
        <div className="container">
          {filteredVideos.length > 0 ? (
            <div className="grid grid-cols-3" style={{ gap: '32px' }}>
              {filteredVideos.map((video) => (
                <div
                  key={video.id}
                  className="card video-card"
                  style={{
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => openVideo(video)}
                >
                  <div style={{
                    position: 'relative',
                    aspectRatio: '16/9',
                    overflow: 'hidden',
                    background: 'var(--bg-muted)'
                  }}>
                    {/* Real Video Thumbnail */}
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                    
                    {/* Category Badge */}
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'var(--gradient-accent)',
                      color: 'white',
                      padding: '4px 8px',
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      fontWeight: '600'
                    }}>
                      {video.category}
                    </div>
                    
                    {/* Featured Badge */}
                    {video.featured && (
                      <div style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        background: '#fbbf24',
                        color: 'black',
                        padding: '4px 8px',
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                        fontWeight: '600'
                      }}>
                        Featured
                      </div>
                    )}
                    
                    {/* Hover Overlay */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(0, 0, 0, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s ease'
                    }} className="video-overlay">
                      <div
                        className="play-button"
                        style={{ 
                          width: '64px', 
                          height: '64px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'rgba(0, 0, 0, 0.8)',
                          borderRadius: '50%',
                          color: 'white',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <Play size={32} />
                      </div>
                    </div>
                  </div>

                  <div style={{ padding: '16px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div>
                        <h3 style={{
                          fontWeight: '700',
                          fontSize: '1rem',
                          color: 'var(--text-primary)',
                          lineHeight: '1.4',
                          marginBottom: '8px'
                        }}>
                          {video.title}
                        </h3>
                        <p style={{ 
                          fontSize: '0.875rem', 
                          color: 'var(--text-muted)',
                          lineHeight: '1.4',
                          marginBottom: '8px'
                        }}>
                          {video.description}
                        </p>
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{video.game}</p>
                      </div>

                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        fontSize: '0.875rem',
                        color: 'var(--text-muted)',
                        paddingTop: '12px',
                        borderTop: '1px solid var(--border-color)'
                      }}>
                        <div style={{
                          background: '#dc2626',
                          color: 'white',
                          padding: '2px 8px',
                          borderRadius: '8px',
                          fontSize: '0.75rem',
                          fontWeight: '600'
                        }}>
                          {video.platform}
                        </div>
                        <a
                          href={video.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            color: 'var(--accent-blue)',
                            textDecoration: 'none',
                            fontSize: '0.75rem'
                          }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={12} />
                          Watch on YouTube
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '64px 0' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem' }}>
                No videos found in the "{selectedCategory}" category.
              </p>
              <button 
                onClick={() => setSelectedCategory("All")} 
                className="btn btn-primary"
                style={{ marginTop: '16px' }}
              >
                Show All Videos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <div style={{
            background: 'var(--bg-primary)',
            borderRadius: '16px',
            maxWidth: '90vw',
            maxHeight: '90vh',
            overflow: 'hidden',
            position: 'relative'
          }}>
            {/* Close Button */}
            <button
              onClick={closeVideo}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(0, 0, 0, 0.8)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10
              }}
            >
              ✕
            </button>
            
            {/* Video Content */}
            <div style={{ padding: '24px' }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '800',
                color: 'var(--text-primary)',
                marginBottom: '16px'
              }}>
                {selectedVideo.title}
              </h3>
              
              {/* Embedded Video */}
              <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                <div 
                  dangerouslySetInnerHTML={{ __html: selectedVideo.embedCode }}
                  style={{
                    width: '100%',
                    aspectRatio: '16/9',
                    borderRadius: '12px',
                    overflow: 'hidden'
                  }}
                />
              </div>
              
              <p style={{
                color: 'var(--text-muted)',
                marginTop: '16px',
                lineHeight: '1.6'
              }}>
                {selectedVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section style={{
        padding: '64px 0',
        background: 'linear-gradient(90deg, rgba(0, 212, 255, 0.1) 0%, rgba(124, 58, 237, 0.1) 100%)'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '672px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.875rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '16px' }}>
              Want More Dota 2 Content?
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '32px' }}>
              Subscribe to my YouTube channel for more Dota 2 strategy guides, ranked gameplay, and hero tutorials. 
              Join the community and improve your MMR together!
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://www.youtube.com/@unoobZzz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Play size={20} />
                Subscribe on YouTube
              </a>
              <a
                href="https://www.twitch.tv/unoobZzz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <Play size={20} />
                Follow on Twitch
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
