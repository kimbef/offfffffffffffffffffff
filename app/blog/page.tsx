import { Navigation } from "@/components/navigation"
import { Calendar, Clock, Search, Filter } from "lucide-react"
import Link from "next/link"
import { AdContent } from "@/components/ad-content"
import { AdSidebar } from "@/components/ad-sidebar"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  thumbnail: string
  publishDate: string
  readTime: string
  category: string
  author: string
  slug: string
}

const allPosts: BlogPost[] = []

const categories = ["All", "Gaming Tech", "Game Reviews", "Gaming Setup", "Gaming Culture", "Esports", "Game Dev"]

export default function BlogPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Navigation />

      {/* Hero Section */}
      <section className="hero" style={{ padding: '64px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '896px', margin: '0 auto' }}>
            <h1 className="hero-title">Gaming Blog</h1>
            <p className="hero-description">
              Deep insights into gaming culture, industry trends, reviews, and everything that makes gaming amazing
            </p>
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
                  className={category === "All" ? "btn btn-primary" : "btn btn-outline"}
                  style={{ padding: '8px 16px', fontSize: '0.875rem' }}
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

      {/* Blog Posts */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-4" style={{ gap: '32px' }}>
            {/* Main Content */}
            <div style={{ gridColumn: 'span 3' }}>
              {allPosts.length > 0 ? (
                <div className="grid grid-cols-3" style={{ gap: '32px' }}>
                  {allPosts.map((post) => (
                    <div
                      key={post.id}
                      className="card"
                      style={{
                        overflow: 'hidden',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <div style={{
                        position: 'relative',
                        aspectRatio: '16/9',
                        overflow: 'hidden'
                      }}>
                        <img
                          src={post.thumbnail || "/placeholder.svg"}
                          alt={post.title}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.3s ease'
                          }}
                        />
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
                          {post.category}
                        </div>
                      </div>

                      <div style={{ padding: '24px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                          <div>
                            <h3 style={{
                              fontWeight: '800',
                              fontSize: '1.125rem',
                              color: 'var(--text-primary)',
                              lineHeight: '1.4',
                              marginBottom: '8px'
                            }}>
                              <Link href={`/blog/${post.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                                {post.title}
                              </Link>
                            </h3>
                            <p style={{
                              color: 'var(--text-muted)',
                              lineHeight: '1.6',
                              display: '-webkit-box',
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden'
                            }}>
                              {post.excerpt}
                            </p>
                          </div>

                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            fontSize: '0.875rem',
                            color: 'var(--text-muted)',
                            paddingTop: '16px',
                            borderTop: '1px solid var(--border-color)'
                          }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                              <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Calendar size={16} />
                                <span style={{ marginLeft: '4px' }}>{post.publishDate}</span>
                              </div>
                              <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Clock size={16} />
                                <span style={{ marginLeft: '4px' }}>{post.readTime}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '64px 0' }}>
                  <div style={{ color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Blog Coming Soon!</h3>
                    <p>I'm working on creating valuable Dota 2 content and gaming insights.</p>
                    <p>Check back soon for strategy guides, gameplay analysis, and more!</p>
                  </div>
                </div>
              )}
            </div>

            <div style={{ gridColumn: 'span 1' }}>
              <div style={{ position: 'sticky', top: '96px' }}>
                <AdSidebar />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
