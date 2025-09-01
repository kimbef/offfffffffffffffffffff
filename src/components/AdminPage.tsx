import { useState } from "react"
import { Settings, Eye, Lock } from "lucide-react"

export const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // For now, this page is hidden
  if (!isAuthenticated) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        background: 'var(--bg-primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ textAlign: 'center' }}>
          <Lock size={64} style={{ color: 'var(--accent-blue)', margin: '0 auto 24px auto' }} />
          <h1 style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>Admin Access</h1>
          <p style={{ color: 'var(--text-muted)' }}>This page is currently hidden</p>
        </div>
      </div>
    )
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
              <Settings size={24} style={{ color: 'white' }} />
            </div>
            <div>
              <h1 style={{ 
                fontSize: '1.875rem', 
                fontWeight: '800', 
                color: 'var(--text-primary)',
                margin: 0
              }}>
                Admin Dashboard
              </h1>
              <p style={{ 
                color: 'var(--text-muted)', 
                margin: 0,
                fontSize: '0.875rem'
              }}>
                Manage your website content and settings
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div style={{ textAlign: 'center', padding: '64px 0' }}>
          <Eye size={64} style={{ color: 'var(--text-muted)', margin: '0 auto 24px auto' }} />
          <h2 style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>Coming Soon</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Admin features will be available here when needed
          </p>
        </div>
      </div>
    </div>
  )
}
