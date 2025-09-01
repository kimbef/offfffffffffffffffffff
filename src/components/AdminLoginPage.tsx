import { Lock, Eye } from "lucide-react"

export const AdminLoginPage = () => {
  const isAuthenticated = false

  // For now, this page is hidden
  if (isAuthenticated) {
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
          <h1 style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>Already Logged In</h1>
          <p style={{ color: 'var(--text-muted)' }}>Redirecting to admin dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'var(--bg-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div className="card" style={{ 
        maxWidth: '400px', 
        width: '100%',
        padding: '32px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{
            width: '64px',
            height: '64px',
            background: 'var(--gradient-accent)',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px auto'
          }}>
            <Lock size={32} style={{ color: 'white' }} />
          </div>
          <h1 style={{ 
            fontSize: '1.5rem', 
            fontWeight: '800', 
            color: 'var(--text-primary)',
            margin: 0
          }}>
            Admin Login
          </h1>
          <p style={{ 
            color: 'var(--text-muted)', 
            margin: '8px 0 0 0',
            fontSize: '0.875rem'
          }}>
            Access your website dashboard
          </p>
        </div>

        <div style={{ textAlign: 'center', padding: '32px 0' }}>
          <Eye size={48} style={{ color: 'var(--text-muted)', margin: '0 auto 16px auto' }} />
          <h2 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>Coming Soon</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            Admin login will be available when needed
          </p>
        </div>
      </div>
    </div>
  )
}
