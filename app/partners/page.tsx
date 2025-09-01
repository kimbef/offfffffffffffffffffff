"use client"

import { Navigation } from "@/components/navigation"
import { useState, useEffect } from "react"
import { Shield, Cloud, Zap, Star, ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import { contentStore } from "@/lib/content-config"

interface Partner {
  id: string
  name: string
  logo: string
  category: string
  rating: number
  isActive: boolean
  hotDeals?: string[]
  promoMaterials?: {
  affiliateLink: string
    bannerUrl: string
    type: 'text' | 'banner'
  }[]
}

// Partners data is now managed by the content store

export default function PartnersPage() {
  const [expandedPartner, setExpandedPartner] = useState<string | null>(null)
  const [partners, setPartners] = useState(contentStore.getPartners())

  useEffect(() => {
    // Listen for content updates
    const handleStorageChange = () => {
      setPartners(contentStore.getPartners())
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  const togglePartner = (partnerId: string) => {
    setExpandedPartner(expandedPartner === partnerId ? null : partnerId)
  }

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Navigation />

      {/* Hero Section */}
      <section className="hero" style={{ padding: '120px 0 80px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '672px', margin: '0 auto' }}>
            <div style={{
              background: 'var(--gradient-accent)',
              color: 'white',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '0.75rem',
              fontWeight: '600',
              display: 'inline-block',
              width: 'fit-content',
              margin: '0 auto 24px auto'
            }}>
              Partnerships
            </div>
            <h1 className="hero-title">
              Trusted
              <span>Partners</span>
            </h1>
            <p className="hero-description">
              Discover amazing products and services from our trusted partners. 
              Click on any partner to see current hot deals and exclusive offers!
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-3" style={{ gap: '32px', maxWidth: '1200px', margin: '0 auto' }}>
            {partners.map((partner) => (
              <div key={partner.id} className="card partner-card" style={{ 
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                border: expandedPartner === partner.id ? '2px solid var(--accent-blue)' : '1px solid var(--border-color)',
                height: 'fit-content',
                minHeight: '200px'
              }}>
                <div style={{ padding: '24px' }}>
                  {/* Partner Header */}
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    marginBottom: '16px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '2px solid var(--accent-blue)',
                        boxShadow: '0 0 15px rgba(0, 212, 255, 0.2)'
                      }}>
                        <img 
                          src={partner.logo} 
                          alt={`${partner.name} logo`}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                      </div>
                      <div>
                        <h3 style={{ 
                          fontWeight: '800', 
                          color: 'var(--text-primary)',
                          fontSize: '1.125rem'
                        }}>
                          {partner.name}
                        </h3>
                        <div style={{
                          background: 'var(--bg-secondary)',
                          color: 'var(--text-secondary)',
                          padding: '2px 8px',
                          borderRadius: '12px',
                          fontSize: '0.75rem',
                          border: '1px solid var(--border-color)',
                          width: 'fit-content'
                        }}>
                          {partner.category}
                        </div>
                      </div>
                        </div>
                    <button 
                      onClick={() => togglePartner(partner.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--accent-blue)',
                        cursor: 'pointer',
                        padding: '8px',
                        borderRadius: '50%',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {expandedPartner === partner.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                      </div>

                  {/* Partner Description */}
                  <p style={{ 
                    color: 'var(--text-muted)', 
                    lineHeight: '1.6',
                    marginBottom: '16px',
                    fontSize: '0.875rem'
                  }}>
                    {partner.category} Partner
                  </p>

                  {/* Rating */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', gap: '2px' }}>
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          style={{ 
                            color: i < partner.rating ? '#fbbf24' : 'var(--text-muted)',
                            fill: i < partner.rating ? '#fbbf24' : 'none'
                          }} 
                        />
                      ))}
                    </div>
                    <span style={{ fontSize: '0.75rem', fontWeight: '500', color: 'var(--text-primary)' }}>
                      {partner.rating}/5
                    </span>
                      </div>

                  {/* Expandable Content - CONTAINED */}
                  <div 
                    className="expandable-content"
                    style={{
                      maxHeight: expandedPartner === partner.id ? '200px' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 0.3s ease',
                      opacity: expandedPartner === partner.id ? 1 : 0
                    }}
                  >
                    {expandedPartner === partner.id && (
                      <>
                        {/* Hot Deals */}
                        <div style={{ marginBottom: '24px' }}>
                          <h4 style={{ 
                            fontWeight: '700', 
                            color: 'var(--text-primary)',
                            marginBottom: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                          }}>
                            <Zap size={16} style={{ color: '#fbbf24' }} />
                            Current Hot Deals
                          </h4>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {partner.hotDeals?.map((deal, index) => (
                              <div key={index} style={{
                                background: 'rgba(251, 191, 36, 0.1)',
                                border: '1px solid rgba(251, 191, 36, 0.3)',
                                borderRadius: '8px',
                                padding: '8px 12px',
                                fontSize: '0.875rem',
                                color: 'var(--text-primary)'
                              }}>
                                {deal}
        </div>
              ))}
            </div>
          </div>

                        {/* Promo Materials */}
                        <div style={{ marginBottom: '24px' }}>
                          <h4 style={{ 
                            fontWeight: '700', 
                            color: 'var(--text-primary)',
                            marginBottom: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                          }}>
                            <ExternalLink size={16} style={{ color: 'var(--accent-blue)' }} />
                            Promotional Materials
                          </h4>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {partner.promoMaterials?.map((material, index) => (
                              <div key={index} style={{
                                background: 'var(--bg-secondary)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '8px',
                                padding: '12px',
                                fontSize: '0.875rem'
                              }}>
                                <div style={{ 
                                  fontWeight: '600', 
                                  color: 'var(--text-primary)',
                                  marginBottom: '8px'
                                }}>
                                  {material.type}
                                </div>
                                
                                {/* Text Links */}
                                {material.type === 'text' && material.affiliateLink && (
                                  <a 
                                    href={material.affiliateLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                      color: 'var(--accent-blue)',
                                      textDecoration: 'none',
                                      fontWeight: '500',
                                      lineHeight: '1.4'
                                    }}
                                  >
                                    {material.affiliateLink}
                                  </a>
                                )}
                                
                                {/* Banners */}
                                {material.type === 'banner' && material.bannerUrl && material.affiliateLink && (
                                  <div style={{ textAlign: 'center' }}>
                                    <a 
                                      href={material.affiliateLink}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <img 
                                        src={material.bannerUrl}
                                        alt={`${partner.name} promotional banner`}
                                        style={{
                                          maxWidth: '100%',
                                          height: 'auto',
                                          borderRadius: '6px',
                                          border: '1px solid var(--border-color)'
                                        }}
                                      />
                                    </a>
                                    <div style={{ 
                                      fontSize: '0.75rem', 
                                      color: 'var(--text-muted)',
                                      marginTop: '4px'
                                    }}>
                                      Banner - Click to visit
                        </div>
                      </div>
                                )}
                              </div>
                            ))}
                        </div>
                      </div>

                        {/* Call to Action */}
                        <div style={{
                          padding: '16px',
                          background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(124, 58, 237, 0.1) 100%)',
                          borderRadius: '12px',
                          border: '1px solid var(--accent-blue)',
                          textAlign: 'center'
                        }}>
                          <h5 style={{
                            fontWeight: '700',
                            color: 'var(--text-primary)',
                            marginBottom: '8px'
                          }}>
                            Ready to Get Started?
                          </h5>
                          <p style={{
                            fontSize: '0.875rem',
                            color: 'var(--text-muted)',
                            marginBottom: '16px'
                          }}>
                            Choose from our secure cloud storage plans and start protecting your files today!
                          </p>
                          <a 
                            href="https://www.dpbolvw.net/click-101490481-14486389"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '8px',
                              textDecoration: 'none'
                            }}
                          >
                            <Cloud size={16} />
                            Visit pCloud
                          </a>
                        </div>
                      </>
                    )}
                      </div>
                    </div>
          </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
