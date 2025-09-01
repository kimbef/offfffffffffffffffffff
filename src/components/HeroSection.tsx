export const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Master Dota 2
              <span>with unoobZzz</span>
            </h1>
            <p className="hero-description">
              Dota 2 Veteran with 15+ years of experience sharing gameplay, cool mechanics, 
              strategies, and epic matches. From veteran insights to pro-level tips.
            </p>
            <div className="hero-buttons">
              <a href="/videos" className="btn btn-primary">
                Watch Videos
              </a>
              <a href="/about" className="btn btn-outline">
                Learn More
              </a>
            </div>
          </div>
          
          {/* Hero Image/Visual */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '400px',
              height: '400px',
              background: 'linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '120px',
              fontWeight: 'bold',
              color: 'white',
              animation: 'float 3s ease-in-out infinite'
            }}>
              U
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
