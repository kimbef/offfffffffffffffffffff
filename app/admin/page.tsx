"use client"

import { useState, useEffect } from "react"
import { Edit3, Save, X, Plus, Trash2, Eye, Settings, RotateCcw } from "lucide-react"
import { contentStore, defaultFeaturedShort, defaultPartners, type FeaturedShort, type Partner } from "../../lib/content-config"

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [featuredShort, setFeaturedShort] = useState<FeaturedShort>(contentStore.getFeaturedShort())
  const [partners, setPartners] = useState<Partner[]>(contentStore.getPartners())

  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState<any>({})
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Check authentication on mount
  useEffect(() => {
    const checkAuth = () => {
      const isLoggedIn = localStorage.getItem("adminLoggedIn")
      if (isLoggedIn !== "true") {
        window.location.href = "/admin/login"
        return
      }
      setIsAuthenticated(true)
    }
    
    checkAuth()
  }, [])

  // Don't render anything until authenticated
  if (!isAuthenticated) {
    return null
  }

  const handleSaveFeaturedShort = () => {
    const updatedShort = { ...editData, thumbnail: `https://img.youtube.com/vi/${editData.id}/maxresdefault.jpg` }
    setFeaturedShort(updatedShort)
    contentStore.updateFeaturedShort(updatedShort)
    setIsEditing(false)
    console.log("Featured short updated and saved:", updatedShort)
  }

  const handleSavePartners = () => {
    setPartners(editData)
    contentStore.updatePartners(editData)
    setIsEditing(false)
    console.log("Partners updated and saved:", editData)
  }

  const addPartner = () => {
    const newPartner: Partner = {
      id: `partner-${Date.now()}`,
      name: "New Partner",
      logo: "/placeholder-logo.png",
      category: "Category",
      rating: 5,
      isActive: true
    }
    setPartners([...partners, newPartner])
  }

  const removePartner = (id: string) => {
    const updatedPartners = partners.filter(p => p.id !== id)
    setPartners(updatedPartners)
    contentStore.updatePartners(updatedPartners)
  }

  const resetToDefaults = () => {
    contentStore.resetToDefaults()
    setFeaturedShort(contentStore.getFeaturedShort())
    setPartners(contentStore.getPartners())
    console.log("Reset to default content")
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'var(--bg-primary)',
      padding: '20px'
    }}>
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ 
          background: 'var(--bg-secondary)', 
          padding: '24px', 
          borderRadius: '12px',
          marginBottom: '24px',
          border: '1px solid var(--border-color)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: 'var(--gradient-accent)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Settings size={24} color="white" />
            </div>
            <div>
              <h1 style={{ 
                fontSize: '2rem', 
                fontWeight: '700', 
                color: 'white',
                margin: '0 0 4px 0'
              }}>
                Admin Dashboard
              </h1>
              <p style={{ 
                color: 'var(--text-muted)', 
                margin: '0',
                fontSize: '1rem'
              }}>
                Manage your website content and partners
              </p>
            </div>
            <button
              onClick={resetToDefaults}
              style={{
                padding: '8px 16px',
                background: 'var(--accent-purple)',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
              title="Reset all content to defaults"
            >
              <RotateCcw size={16} />
              Reset to Defaults
            </button>
            <a
              href="/"
              style={{
                padding: '8px 16px',
                background: 'var(--accent-blue)',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                textDecoration: 'none',
                marginLeft: '8px'
              }}
              title="Return to main site"
            >
              ← Return to Site
            </a>
            <button
              onClick={() => {
                localStorage.removeItem("adminLoggedIn")
                localStorage.removeItem("adminLoginTime")
                window.location.href = "/admin/login"
              }}
              style={{
                padding: '8px 16px',
                background: 'var(--accent-red)',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                marginLeft: '8px'
              }}
              title="Logout from admin panel"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div style={{ 
          display: 'flex', 
          gap: '8px', 
          marginBottom: '24px',
          background: 'var(--bg-secondary)',
          padding: '8px',
          borderRadius: '12px',
          border: '1px solid var(--border-color)'
        }}>
          {[
            { id: "dashboard", label: "Dashboard", icon: Eye },
            { id: "featured", label: "Featured Short", icon: Edit3 },
            { id: "partners", label: "Partners", icon: Settings }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '12px 20px',
                background: activeTab === tab.id ? 'var(--accent-blue)' : 'transparent',
                color: activeTab === tab.id ? 'white' : 'var(--text-muted)',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.875rem',
                fontWeight: '500',
                transition: 'all 0.2s ease'
              }}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dashboard Tab */}
        {activeTab === "dashboard" && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {/* Featured Short Card */}
            <div style={{ 
              background: 'var(--bg-secondary)', 
              padding: '24px', 
              borderRadius: '12px',
              border: '1px solid var(--border-color)'
            }}>
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: '600', 
                color: 'white',
                margin: '0 0 16px 0'
              }}>
                Current Featured Short
              </h3>
              <div style={{ 
                background: 'var(--bg-muted)', 
                padding: '16px', 
                borderRadius: '8px',
                marginBottom: '16px'
              }}>
                <img 
                  src={featuredShort.thumbnail} 
                  alt={featuredShort.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                    marginBottom: '12px'
                  }}
                />
                <h4 style={{ 
                  fontSize: '1rem', 
                  fontWeight: '600', 
                  color: 'white',
                  margin: '0 0 8px 0'
                }}>
                  {featuredShort.title}
                </h4>
                <p style={{ 
                  color: 'var(--text-muted)', 
                  margin: '0 0 8px 0',
                  fontSize: '0.875rem'
                }}>
                  {featuredShort.views} views
                </p>
                <a 
                  href={featuredShort.shortUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--accent-blue)',
                    textDecoration: 'none',
                    fontSize: '0.875rem'
                  }}
                >
                  View on YouTube →
                </a>
              </div>
              <button
                onClick={() => {
                  setEditData(featuredShort)
                  setIsEditing(true)
                  setActiveTab("featured")
                }}
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'var(--accent-blue)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}
              >
                Edit Featured Short
              </button>
            </div>

            {/* Partners Summary */}
            <div style={{ 
              background: 'var(--bg-secondary)', 
              padding: '24px', 
              borderRadius: '12px',
              border: '1px solid var(--border-color)'
            }}>
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: '600', 
                color: 'white',
                margin: '0 0 16px 0'
              }}>
                Partners Overview
              </h3>
              <div style={{ marginBottom: '16px' }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  marginBottom: '8px'
                }}>
                  <span style={{ color: 'var(--text-muted)' }}>Total Partners:</span>
                  <span style={{ color: 'white', fontWeight: '600' }}>{partners.length}</span>
                </div>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  marginBottom: '8px'
                }}>
                  <span style={{ color: 'var(--text-muted)' }}>Active Partners:</span>
                  <span style={{ color: 'white', fontWeight: '600' }}>
                    {partners.filter(p => p.isActive).length}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setActiveTab("partners")}
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'var(--accent-blue)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}
              >
                Manage Partners
              </button>
            </div>

            {/* Quick Actions */}
            <div style={{ 
              background: 'var(--bg-secondary)', 
              padding: '24px', 
              borderRadius: '12px',
              border: '1px solid var(--border-color)'
            }}>
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: '600', 
                color: 'white',
                margin: '0 0 16px 0'
              }}>
                Quick Actions
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <button
                  onClick={() => setActiveTab("featured")}
                  style={{
                    padding: '12px',
                    background: 'var(--bg-muted)',
                    color: 'white',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  <Edit3 size={16} />
                  Update Featured Content
                </button>
                <button
                  onClick={() => setActiveTab("partners")}
                  style={{
                    padding: '12px',
                    background: 'var(--bg-muted)',
                    color: 'white',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  <Settings size={16} />
                  Manage Partnerships
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Featured Short Tab */}
        {activeTab === "featured" && (
          <div style={{ 
            background: 'var(--bg-secondary)', 
            padding: '24px', 
            borderRadius: '12px',
            border: '1px solid var(--border-color)'
          }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '24px'
            }}>
              <h2 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                color: 'white',
                margin: '0'
              }}>
                Edit Featured Short
              </h2>
              {isEditing && (
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    onClick={handleSaveFeaturedShort}
                    style={{
                      padding: '8px 16px',
                      background: 'var(--accent-green)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <Save size={16} />
                    Save Changes
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    style={{
                      padding: '8px 16px',
                      background: 'var(--bg-muted)',
                      color: 'white',
                      border: '1px solid var(--border-color)',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <X size={16} />
                    Cancel
                  </button>
                </div>
              )}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              {/* Edit Form */}
              <div>
                <h3 style={{ 
                  fontSize: '1.125rem', 
                  fontWeight: '600', 
                  color: 'white',
                  margin: '0 0 16px 0'
                }}>
                  Short Details
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{ 
                      display: 'block', 
                      color: 'var(--text-muted)', 
                      marginBottom: '6px',
                      fontSize: '0.875rem'
                    }}>
                      YouTube Short ID
                    </label>
                    <input
                      type="text"
                      value={isEditing ? editData.id : featuredShort.id}
                      onChange={(e) => isEditing && setEditData({...editData, id: e.target.value})}
                      disabled={!isEditing}
                      style={{
                        width: '100%',
                        padding: '12px',
                        background: 'var(--bg-muted)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '6px',
                        color: 'white',
                        fontSize: '0.875rem'
                      }}
                      placeholder="e.g., 7eVU5JTfDHs"
                    />
                  </div>
                  <div>
                    <label style={{ 
                      display: 'block', 
                      color: 'var(--text-muted)', 
                      marginBottom: '6px',
                      fontSize: '0.875rem'
                    }}>
                      Title
                    </label>
                    <input
                      type="text"
                      value={isEditing ? editData.title : featuredShort.title}
                      onChange={(e) => isEditing && setEditData({...editData, title: e.target.value})}
                      disabled={!isEditing}
                      style={{
                        width: '100%',
                        padding: '12px',
                        background: 'var(--bg-muted)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '6px',
                        color: 'white',
                        fontSize: '0.875rem'
                      }}
                      placeholder="Enter short title"
                    />
                  </div>
                  <div>
                    <label style={{ 
                      display: 'block', 
                      color: 'var(--text-muted)', 
                      marginBottom: '6px',
                      fontSize: '0.875rem'
                    }}>
                      Views
                    </label>
                    <input
                      type="text"
                      value={isEditing ? editData.views : featuredShort.views}
                      onChange={(e) => isEditing && setEditData({...editData, views: e.target.value})}
                      disabled={!isEditing}
                      style={{
                        width: '100%',
                        padding: '12px',
                        background: 'var(--bg-muted)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '6px',
                        color: 'white',
                        fontSize: '0.875rem'
                      }}
                      placeholder="e.g., 11.1K"
                    />
                  </div>
                  <div>
                    <label style={{ 
                      display: 'block', 
                      color: 'var(--text-muted)', 
                      marginBottom: '6px',
                      fontSize: '0.875rem'
                    }}>
                      Short URL
                    </label>
                    <input
                      type="text"
                      value={isEditing ? editData.shortUrl : featuredShort.shortUrl}
                      onChange={(e) => isEditing && setEditData({...editData, shortUrl: e.target.value})}
                      disabled={!isEditing}
                      style={{
                        width: '100%',
                        padding: '12px',
                        background: 'var(--bg-muted)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '6px',
                        color: 'white',
                        fontSize: '0.875rem'
                      }}
                      placeholder="https://www.youtube.com/shorts/..."
                    />
                  </div>
                </div>
              </div>

              {/* Preview */}
              <div>
                <h3 style={{ 
                  fontSize: '1.125rem', 
                  fontWeight: '600', 
                  color: 'white',
                  margin: '0 0 16px 0'
                }}>
                  Preview
                </h3>
                <div style={{ 
                  background: 'var(--bg-muted)', 
                  padding: '16px', 
                  borderRadius: '8px'
                }}>
                  <img 
                    src={isEditing ? `https://img.youtube.com/vi/${editData.id}/maxresdefault.jpg` : featuredShort.thumbnail} 
                    alt="Preview"
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '8px',
                      marginBottom: '12px'
                    }}
                  />
                  <h4 style={{ 
                    fontSize: '1rem', 
                    fontWeight: '600', 
                    color: 'white',
                    margin: '0 0 8px 0'
                  }}>
                    {isEditing ? editData.title : featuredShort.title}
                  </h4>
                  <p style={{ 
                    color: 'var(--text-muted)', 
                    margin: '0 0 8px 0',
                    fontSize: '0.875rem'
                  }}>
                    {isEditing ? editData.views : featuredShort.views} views
                  </p>
                  <a 
                    href={isEditing ? editData.shortUrl : featuredShort.shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'var(--accent-blue)',
                      textDecoration: 'none',
                      fontSize: '0.875rem'
                    }}
                  >
                    View on YouTube →
                  </a>
                </div>
              </div>
            </div>

            {!isEditing && (
              <button
                onClick={() => {
                  setEditData(featuredShort)
                  setIsEditing(true)
                }}
                style={{
                  marginTop: '24px',
                  padding: '12px 24px',
                  background: 'var(--accent-blue)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <Edit3 size={16} />
                Edit Featured Short
              </button>
            )}
          </div>
        )}

        {/* Partners Tab */}
        {activeTab === "partners" && (
          <div style={{ 
            background: 'var(--bg-secondary)', 
            padding: '24px', 
            borderRadius: '12px',
            border: '1px solid var(--border-color)'
          }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '24px'
            }}>
              <h2 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                color: 'white',
                margin: '0'
              }}>
                Manage Partners
              </h2>
              <button
                onClick={addPartner}
                style={{
                  padding: '12px 20px',
                  background: 'var(--accent-green)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <Plus size={16} />
                Add Partner
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
              {partners.map((partner, index) => (
                <div key={partner.id} style={{ 
                  background: 'var(--bg-muted)', 
                  padding: '20px', 
                  borderRadius: '8px',
                  border: '1px solid var(--border-color)'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-start',
                    marginBottom: '16px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '8px',
                          objectFit: 'cover'
                        }}
                      />
                      <div>
                        <h3 style={{ 
                          fontSize: '1.125rem', 
                          fontWeight: '600', 
                          color: 'white',
                          margin: '0 0 4px 0'
                        }}>
                          {partner.name}
                        </h3>
                        <p style={{ 
                          color: 'var(--text-muted)', 
                          margin: '0',
                          fontSize: '0.875rem'
                        }}>
                          {partner.category}
                        </p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button
                        onClick={() => removePartner(partner.id)}
                        style={{
                          padding: '6px',
                          background: 'var(--accent-red)',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                  
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center'
                  }}>
                    <div style={{ display: 'flex', gap: '4px' }}>
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          style={{
                            width: '16px',
                            height: '16px',
                            background: i < partner.rating ? 'var(--accent-yellow)' : 'var(--bg-secondary)',
                            borderRadius: '2px'
                          }}
                        />
                      ))}
                    </div>
                    <div style={{ 
                      padding: '4px 8px',
                      background: partner.isActive ? 'var(--accent-green)' : 'var(--bg-secondary)',
                      color: partner.isActive ? 'white' : 'var(--text-muted)',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: '500'
                    }}>
                      {partner.isActive ? 'Active' : 'Inactive'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
