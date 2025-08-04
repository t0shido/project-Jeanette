const Hero = () => {
  return (
    <section id="hero">
      {/* White bar at bottom - same height as navigation bar */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        height: '70px',
        backgroundColor: 'white',
        zIndex: '10'
      }}></div>
      <div className="hero-background">
        <picture>
          <source srcSet="/images/hero_background.webp" type="image/webp" />
          <img 
            src="/images/hero_background.jpg" 
            alt="Jeanette - Virtual Assistant" 
            fetchpriority="high"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 0
            }}
          />
        </picture>
      </div>
      
      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1 className="hero-title">
              Your Virtual Assistant for More Efficiency in Daily Business
            </h1>
            <p className="hero-subtitle">
              Professional support that saves you time and resources
            </p>
            <a href="#contact" className="hero-cta">
              Get in Touch Now
            </a>
          </div>
        </div>
      </div>
      
      <div className="circle-frame-container">
        <div className="circle-frame">
          <picture>
            <source srcSet="/images/hero_image.webp" type="image/webp" />
            <img 
              src="/images/hero_image.jpg" 
              alt="Jeanette" 
              className="profile-image"
              loading="eager"
            />
          </picture>
        </div>
      </div>
      
      <div className="hero-divider"></div>
    </section>
  );
};

export default Hero;
