const Hero = () => {
  return (
    <section id="hero">
      <div className="container hero-container">
        <div className="circle-frame animate-slide-in-right">
          <img
            src="/images/hero_image.jpg"
            alt="Professionelle virtuelle Assistentin"
            className="profile-image"
          />
        </div>
      </div>
      <div className="hero-slogan">
        <p>Alles ist gut solange du wild bist</p>
      </div>
    </section>
  );
};

export default Hero;
