import { Navigation } from "@/components/navigation"
import { Calendar, Clock, User, ArrowLeft, Share2, Heart, MessageCircle } from "lucide-react"
import Link from "next/link"
import { AdContent } from "@/components/ad-content"
import { AdSidebar } from "@/components/ad-sidebar"

interface BlogPost {
  title: string
  content: string
  thumbnail: string
  publishDate: string
  readTime: string
  category: string
  author: string
  slug: string
}

// This would typically come from a CMS or database
const getBlogPost = (slug: string): BlogPost => {
  const posts: Record<string, BlogPost> = {
    "evolution-of-gaming-graphics": {
      title: "The Evolution of Gaming: From Pixels to Ray Tracing",
      content: `
        <p>Gaming has come an incredibly long way since the early days of Pong and Pac-Man. What started as simple pixel art has evolved into photorealistic worlds that blur the line between reality and virtual experiences.</p>
        
        <h2>The Pixel Era (1970s-1980s)</h2>
        <p>In the beginning, games were limited by hardware constraints. Every pixel mattered, and developers had to be incredibly creative with limited color palettes and resolution. Games like Super Mario Bros. and The Legend of Zelda became iconic not despite their pixel art, but because of how masterfully they used it.</p>
        
        <h2>The 3D Revolution (1990s)</h2>
        <p>The introduction of 3D graphics changed everything. Games like Doom, Quake, and Super Mario 64 showed us what was possible when we moved beyond flat sprites. Suddenly, players could explore three-dimensional worlds with unprecedented freedom.</p>
        
        <h2>High Definition and Beyond (2000s-2010s)</h2>
        <p>As hardware became more powerful, games became more detailed. HD textures, advanced lighting, and complex shaders created increasingly realistic environments. Games like Crysis pushed the boundaries of what was possible, becoming benchmarks for PC performance.</p>
        
        <h2>Ray Tracing and the Future</h2>
        <p>Today, we're seeing the implementation of real-time ray tracing, bringing movie-quality lighting and reflections to games. Combined with AI upscaling technologies like DLSS, we're entering an era where the line between games and reality continues to blur.</p>
        
        <p>The future holds even more exciting possibilities: virtual reality, augmented reality, and perhaps technologies we haven't even imagined yet. One thing is certain - the evolution of gaming graphics is far from over.</p>
      `,
      thumbnail: "/placeholder.svg?key=blog1",
      publishDate: "3 days ago",
      readTime: "8 min read",
      category: "Gaming Tech",
      author: "GameHub",
      slug: "evolution-of-gaming-graphics",
    },
  }

  return posts[slug] || posts["evolution-of-gaming-graphics"]
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Navigation />

      {/* Hero Section */}
      <section style={{
        padding: '64px 0',
        background: 'var(--gradient-hero)',
        position: 'relative'
      }}>
        <div className="container">
          <div style={{ maxWidth: '896px', margin: '0 auto' }}>
            <Link href="/blog" style={{ textDecoration: 'none' }}>
              <button
                className="btn btn-outline"
                style={{ marginBottom: '24px' }}
              >
                <ArrowLeft size={16} />
                Back to Blog
              </button>
            </Link>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{
                  background: 'var(--gradient-accent)',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  display: 'inline-block',
                  width: 'fit-content'
                }}>
                  {post.category}
                </div>
                <h1 style={{
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  fontWeight: '900',
                  color: 'var(--text-primary)',
                  lineHeight: '1.1'
                }}>
                  {post.title}
                </h1>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                color: 'var(--text-muted)',
                flexWrap: 'wrap'
              }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <User size={16} />
                  <span style={{ marginLeft: '8px' }}>{post.author}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Calendar size={16} />
                  <span style={{ marginLeft: '8px' }}>{post.publishDate}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Clock size={16} />
                  <span style={{ marginLeft: '8px' }}>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section style={{ padding: '32px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '896px', margin: '0 auto' }}>
            <div style={{
              aspectRatio: '16/9',
              borderRadius: '8px',
              overflow: 'hidden'
            }}>
              <img 
                src={post.thumbnail || "/placeholder.svg"} 
                alt={post.title} 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <AdContent position="top" />

      {/* Article Content */}
      <section style={{ padding: '32px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '896px', margin: '0 auto' }}>
            <div className="grid grid-cols-4" style={{ gap: '32px' }}>
              {/* Main Content */}
              <div style={{ gridColumn: 'span 3' }}>
                <div className="card">
                  <div style={{ padding: '32px' }}>
                    <div
                      style={{
                        color: 'var(--text-primary)',
                        lineHeight: '1.7'
                      }}
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                  </div>
                </div>

                <AdContent position="middle" />

                {/* Engagement Actions */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '32px',
                  padding: '24px',
                  background: 'var(--bg-card)',
                  borderRadius: '8px',
                  border: '1px solid var(--border-color)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <button className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '0.875rem' }}>
                      <Heart size={16} />
                      Like (42)
                    </button>
                    <button className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '0.875rem' }}>
                      <MessageCircle size={16} />
                      Comment (8)
                    </button>
                  </div>
                  <button className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '0.875rem' }}>
                    <Share2 size={16} />
                    Share
                  </button>
                </div>
              </div>

              {/* Sidebar */}
              <div style={{ gridColumn: 'span 1' }}>
                <div style={{ position: 'sticky', top: '96px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <AdSidebar />

                  <div className="card">
                    <div style={{ padding: '24px' }}>
                      <h3 style={{
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                        marginBottom: '16px'
                      }}>
                        About the Author
                      </h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <div style={{
                          width: '64px',
                          height: '64px',
                          background: 'var(--gradient-accent)',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <User size={32} />
                        </div>
                        <div>
                          <p style={{
                            fontWeight: '600',
                            color: 'var(--text-primary)'
                          }}>
                            {post.author}
                          </p>
                          <p style={{
                            fontSize: '0.875rem',
                            color: 'var(--text-muted)'
                          }}>
                            Gaming enthusiast and content creator
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div style={{ padding: '24px' }}>
                      <h3 style={{
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                        marginBottom: '16px'
                      }}>
                        Related Posts
                      </h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <Link href="/blog/top-indie-games-changed-everything" style={{ textDecoration: 'none' }}>
                          <h4 style={{
                            fontWeight: '500',
                            color: 'var(--text-primary)',
                            lineHeight: '1.4',
                            transition: 'color 0.3s ease'
                          }}>
                            Top 10 Indie Games That Changed Everything
                          </h4>
                          <p style={{
                            fontSize: '0.875rem',
                            color: 'var(--text-muted)',
                            marginTop: '4px'
                          }}>
                            1 week ago
                          </p>
                        </Link>
                        <Link href="/blog/perfect-gaming-setup-any-budget" style={{ textDecoration: 'none' }}>
                          <h4 style={{
                            fontWeight: '500',
                            color: 'var(--text-primary)',
                            lineHeight: '1.4',
                            transition: 'color 0.3s ease'
                          }}>
                            Building the Perfect Gaming Setup on Any Budget
                          </h4>
                          <p style={{
                            fontSize: '0.875rem',
                            color: 'var(--text-muted)',
                            marginTop: '4px'
                          }}>
                            2 weeks ago
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
