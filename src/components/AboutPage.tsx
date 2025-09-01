import { Play, Users, Gamepad2, Youtube, Twitch, Twitter, Instagram, Mail, Clock } from "lucide-react"

const stats = [
  { label: "Years Playing Dota", value: "8+", icon: Gamepad2 },
  { label: "Content Creator", value: "Focus", icon: Play },
  { label: "YouTube Videos", value: "50+", icon: Play },
  { label: "Main Heroes", value: "8", icon: Users },
]

const socialLinks = [
  { platform: "YouTube", url: "https://www.youtube.com/@unoobZzz", icon: Youtube, followers: "Growing" },
  { platform: "Twitch", url: "https://www.twitch.tv/unoobZzz", icon: Twitch, followers: "Live Streams" },
  { platform: "Twitter", url: "#", icon: Twitter, followers: "Coming Soon" },
  { platform: "Instagram", url: "#", icon: Instagram, followers: "Coming Soon" },
]

const favoriteGames = [
  { name: "Dota 2", genre: "MOBA", hours: "5000+", image: "/games/Dota 2.jpg" },
  { name: "War Thunder", genre: "Combat Sim", hours: "800+", image: "/games/War Thunder.png" },
  { name: "CS2", genre: "FPS", hours: "300+", image: "/games/cs2.png" },
  { name: "World of Warcraft Classic", genre: "MMORPG", hours: "200+", image: "/games/PANDARIA.png" },
]

export const AboutPage = () => {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      {/* Hero Section */}
      <section className="hero" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
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
                    About Me
                  </div>
                  <h1 className="hero-title">
                    Hey, I'm
                    <span>unoobZzz</span>
                  </h1>
                  <p className="hero-description">
                    Welcome to my corner of the internet! I'm a dedicated Dota 2 player and aspiring content creator
                    sharing my journey through the Ancient bracket. Join me as I create educational content, analyze
                    gameplay, and work towards building a community while chasing the YouTube Partner Program dream.
                  </p>
                </div>

                <div className="hero-buttons">
                  <button className="btn btn-primary">
                    <Mail size={20} />
                    Get In Touch
                  </button>
                  <button className="btn btn-outline">
                    <a
                      href="https://www.youtube.com/@unoobZzz"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}
                    >
                      <Play size={20} />
                      Watch Latest Video
                    </a>
                  </button>
                </div>

                {/* Quick Stats */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '32px' }}>
                  <div className="grid grid-cols-4" style={{ gap: '16px' }}>
                    {stats.map((stat, index) => {
                      const Icon = stat.icon
                      return (
                        <div key={index} style={{ textAlign: 'center' }}>
                          <Icon size={24} style={{ color: 'var(--accent-blue)', margin: '0 auto 8px auto' }} />
                          <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--text-primary)' }}>{stat.value}</div>
                          <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{stat.label}</div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div style={{ position: 'relative' }}>
              <div className="card" style={{ overflow: 'hidden', padding: 0 }}>
                <div style={{
                  aspectRatio: '1/1',
                  background: 'var(--bg-muted)',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{
                      height: '128px',
                      width: '128px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      margin: '0 auto',
                      border: '3px solid var(--accent-blue)',
                      boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)'
                    }}>
                      <img 
                        src="/logo1.png" 
                        alt="unoobZzz Logo"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />

                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                        <div style={{
                          height: '12px',
                          width: '12px',
                          background: '#22c55e',
                          borderRadius: '50%',
                          animation: 'pulse 2s ease-in-out infinite'
                        }} />
                        <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>Streaming when available</span>
                      </div>
                      <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Dota 2 Content Creator</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '896px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 className="section-title">My Dota 2 Journey</h2>
              <p className="section-subtitle">
                From casual player to content creator - sharing the grind and learning together
              </p>
            </div>

            <div className="grid grid-cols-2" style={{ gap: '32px', marginBottom: '64px' }}>
              <div className="card">
                <div style={{ padding: '32px' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '16px' }}>The Dota 2 Passion</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '16px' }}>
                    My Dota 2 journey started over 8 years ago, and despite the frustrations and challenges, I keep
                    coming back for more. There's something addictive about the complexity and depth of this game -
                    every match teaches you something new, whether it's a hero interaction, itemization choice, or team
                    fight positioning.
                  </p>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                    I've learned that improvement comes from analyzing your mistakes and understanding the game at a deeper level. That's exactly what I try to
                    share in my content - the real learning process, not just the highlights.
                  </p>
                </div>
              </div>

              <div className="card">
                <div style={{ padding: '32px' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '16px' }}>Content Creation Journey</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '16px' }}>
                    Starting my YouTube channel was both exciting and intimidating. I wanted to create content that
                    actually helps people improve, not just flashy plays. My focus is on educational content -
                    explaining decision-making, hero matchups, and the thought process behind climbing MMR.
                  </p>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                    The YouTube Partner Program is my current milestone, and every subscriber and view means the world
                    to me. On Twitch, I stream Dota 2 ranked games and occasionally War Thunder when I need a mental
                    break from the intensity of ranked matches.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Favorite Games */}
      <section className="section" style={{ background: 'rgba(45, 55, 72, 0.1)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 className="section-title">Games I Play</h2>
            <p className="section-subtitle">
              Dota 2 is my main passion, with some variety streaming on Twitch
            </p>
          </div>

          <div className="grid grid-cols-4" style={{ gap: '24px', maxWidth: '896px', margin: '0 auto' }}>
            {favoriteGames.map((game, index) => (
              <div key={index} className="card" style={{ transition: 'all 0.3s ease' }}>
                <div style={{ padding: '0', overflow: 'hidden' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                    {/* Game Thumbnail */}
                    <div style={{ 
                      height: '120px', 
                      background: 'var(--bg-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                      position: 'relative'
                    }}>
                      <img 
                        src={game.image} 
                        alt={`${game.name} thumbnail`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </div>
                    
                    {/* Game Info */}
                    <div style={{ padding: '16px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <h3 style={{ fontWeight: '800', color: 'var(--text-primary)', fontSize: '1rem', lineHeight: '1.2' }}>{game.name}</h3>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                          <div style={{
                            background: 'var(--bg-secondary)',
                            color: 'var(--text-secondary)',
                            padding: '2px 8px',
                            borderRadius: '12px',
                            fontSize: '0.75rem',
                            border: '1px solid var(--border-color)'
                          }}>
                            {game.genre}
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', color: 'var(--text-muted)' }}>
                            <Clock size={14} />
                            <span style={{ marginLeft: '4px', fontSize: '0.75rem' }}>{game.hours}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 className="section-title">Connect With Me</h2>
            <p className="section-subtitle">Follow my Dota 2 journey and gaming adventures</p>
          </div>

          <div className="grid grid-cols-4" style={{ gap: '24px', maxWidth: '896px', margin: '0 auto' }}>
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <a key={index} href={social.url} style={{ textDecoration: 'none' }}>
                  <div className="card" style={{ transition: 'all 0.3s ease', cursor: 'pointer' }}>
                    <div style={{ padding: '24px', textAlign: 'center' }}>
                      <Icon size={32} className="social-icon" style={{ color: 'var(--accent-blue)', margin: '0 auto 12px auto', transition: 'transform 0.3s ease' }} />
                      <h3 style={{ fontWeight: '800', color: 'var(--text-primary)', marginBottom: '4px' }}>{social.platform}</h3>
                      <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{social.followers} followers</p>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section style={{
        padding: '64px 0',
        background: 'linear-gradient(90deg, rgba(0, 212, 255, 0.1) 0%, rgba(124, 58, 237, 0.1) 100%)'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '672px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.875rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '16px' }}>Let's Climb Together!</h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '32px' }}>
              Have Dota 2 questions, want to discuss strategies, or just chat about the game? I love connecting with
              fellow Dota players and learning from the community. Every interaction helps me grow as both a player and
              content creator!
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'center', alignItems: 'center' }}>
              <button className="btn btn-primary">
                <Mail size={20} />
                Send Message
              </button>
              <button className="btn btn-outline">
                <a
                  href="https://www.youtube.com/@unoobZzz"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}
                >
                  <Users size={20} />
                  Subscribe on YouTube
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
