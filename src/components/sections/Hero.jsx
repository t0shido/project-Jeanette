const Hero = () => {
  return (
    <section id="hero" style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      {/* Test box - bright red to see if changes work */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        height: '100px',
        backgroundColor: 'red',
        zIndex: '9999',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '24px',
        fontWeight: 'bold'
      }}>
        TEST BOX - CAN YOU SEE THIS?
      </div>
      
      {/* Original profile picture */}
      <div className="circle-frame-container">
        <div className="circle-frame animate-slide-in-right">
          <img
            src="/images/hero_image.jpg"
            alt="Professionelle virtuelle Assistentin"
            className="profile-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
