const Hero = () => {
  return (
    <section id="hero" style={{ position: 'relative', height: '100vh', overflow: 'hidden', backgroundColor: 'white' }}>
      {/* Background image div */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 'calc(100vh - 60px)', /* Gap matches approximate navbar height */
        backgroundImage: "url('/images/hero_background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 1
      }}></div>
      
      {/* Fixed position circle frame container - using original class without style override */}
      <div className="circle-frame-container">
        <div className="circle-frame animate-slide-in-right">
          <img
            src="/images/hero_image.jpg"
            alt="Professionelle virtuelle Assistentin"
            className="profile-image"
          />
        </div>
      </div>
      
      {/* White line at bottom */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '5px',
        backgroundColor: 'white',
        zIndex: 10 /* Make sure it's above other elements */
      }}></div>
    </section>
  );
};

export default Hero;
