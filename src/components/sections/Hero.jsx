const Hero = () => {
  return (
    <section 
      id="hero" 
      style={{ 
        backgroundImage: "url('/images/hero_background.jpg')",
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container hero-container">
        <div className="circle-frame animate-slide-in-right">
          <img
            src="/images/hero_image.jpg"
            alt="Professionelle virtuelle Assistentin"
            className="profile-image"
          />
        </div>
      </div>

      <div className="hero-bottom-line"></div>
    </section>
  );
};

export default Hero;
