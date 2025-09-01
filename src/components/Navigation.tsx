import { useState } from 'react';

interface NavigationProps {
  onPageChange: (page: string) => void
}

export const Navigation = ({ onPageChange }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page: string) => {
    onPageChange(page);
    setIsMenuOpen(false); // Close mobile menu when navigating
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        {/* Logo */}
        <button 
          onClick={() => handleNavClick('home')} 
          className="logo"
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', textDecoration: 'none' }}
        >
          <div className="logo-icon">
            <span style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>U</span>
          </div>
          <span className="logo-text">unoobZzz</span>
        </button>

        {/* Desktop Navigation */}
        <ul className="nav-menu">
          <li><button onClick={() => handleNavClick('home')} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>Home</button></li>
          <li><button onClick={() => handleNavClick('videos')} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>Videos</button></li>
          <li><button onClick={() => handleNavClick('about')} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>About</button></li>
        </ul>

        {/* CTA Button */}
        <div className="nav-cta">
          <button onClick={() => handleNavClick('videos')} className="btn btn-primary">Watch Videos</button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'rgba(10, 10, 15, 0.98)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid var(--border-color)',
          padding: '20px'
        }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '16px' }}><button onClick={() => handleNavClick('home')} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>Home</button></li>
            <li style={{ marginBottom: '16px' }}><button onClick={() => handleNavClick('videos')} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>Videos</button></li>
            <li style={{ marginBottom: '16px' }}><button onClick={() => handleNavClick('about')} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>About</button></li>
          </ul>
        </div>
      )}
    </nav>
  );
};
