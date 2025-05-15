const Hero = () => {
  return (
    <section 
      id="hero" 
      style={{ 
        backgroundImage: "url('/images/hero_background.jpg')",
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative' // Added for absolute positioning context
      }}
    >
      {/* Fixed position circle frame container */}
      <div className="circle-frame-container">
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
