"use client"

import { useState, useEffect } from "react"
import { Settings, Eye, EyeOff } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AdminLoginPage() {
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  // Check if already logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("adminLoggedIn")
    if (isLoggedIn === "true") {
      router.push("/admin")
    }
  }, [router])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simple password check (in production, use proper authentication)
    if (password === "K9#mP$vL2@nX8&qR5!") {
      localStorage.setItem("adminLoggedIn", "true")
      localStorage.setItem("adminLoginTime", Date.now().toString())
      router.push("/admin")
    } else {
      setError("Incorrect password")
      setIsLoading(false)
    }
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
      <div style={{ 
        background: 'var(--bg-secondary)', 
        padding: '40px', 
        borderRadius: '16px',
        border: '1px solid var(--border-color)',
        maxWidth: '400px',
        width: '100%'
      }}>
        {/* Header */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '16px',
          marginBottom: '32px',
          justifyContent: 'center'
        }}>
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
              fontSize: '1.75rem', 
              fontWeight: '700', 
              color: 'white',
              margin: '0 0 4px 0'
            }}>
              Admin Login
            </h1>
            <p style={{ 
              color: 'var(--text-muted)', 
              margin: '0',
              fontSize: '0.875rem'
            }}>
              Enter your password to access the admin panel
            </p>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ 
              display: 'block', 
              color: 'var(--text-muted)', 
              marginBottom: '8px',
              fontSize: '0.875rem',
              fontWeight: '500'
            }}>
              Admin Password
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  paddingRight: '48px',
                  background: 'var(--bg-muted)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  color: 'white',
                  fontSize: '1rem',
                  outline: 'none'
                }}
                placeholder="Enter admin password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  padding: '4px'
                }}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {error && (
            <div style={{
              padding: '12px',
              background: 'var(--accent-red)',
              color: 'white',
              borderRadius: '6px',
              fontSize: '0.875rem',
              textAlign: 'center'
            }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            style={{
              padding: '14px',
              background: 'var(--accent-blue)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              fontSize: '1rem',
              fontWeight: '600',
              opacity: isLoading ? 0.7 : 1,
              transition: 'opacity 0.2s ease'
            }}
          >
            {isLoading ? "Logging in..." : "Login to Admin Panel"}
          </button>
        </form>

        {/* Return to Site Link */}
        <div style={{ 
          marginTop: '24px', 
          textAlign: 'center' 
        }}>
          <a
            href="/"
            style={{
              color: 'var(--text-muted)',
              textDecoration: 'none',
              fontSize: '0.875rem',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-blue)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            ← Return to main site
          </a>
        </div>
      </div>
    </div>
  )
}
