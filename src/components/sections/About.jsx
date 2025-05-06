const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about-container">
          <div className="about-image-container">
            <div className="about-image-frame"></div>
            <img
              src="/images/hero_image.jpg" // Using the same image for now
              alt="Jeanette - Virtual Assistant"
              className="about-image"
            />
          </div>
          
          <div className="about-content">
            <h2 className="section-title">
              About <span className="highlight">Me</span>
            </h2>
            
            <p className="about-text">
              Hello! I'm Jeanette, a dedicated virtual assistant with over 5 years of experience supporting entrepreneurs, small businesses, and busy professionals.
            </p>
            
            <p className="about-text">
              I specialize in administrative support, email management, scheduling, and research - allowing you to focus on growing your business and doing what you love.
            </p>
            
            <div className="skills-grid">
              <div className="skill-card">
                <div className="skill-header">
                  <svg xmlns="http://www.w3.org/2000/svg" className="skill-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <h3 className="skill-title">Organized</h3>
                </div>
                <p className="skill-description">
                  Meticulous attention to detail and excellent organizational skills
                </p>
              </div>
              
              <div className="skill-card">
                <div className="skill-header">
                  <svg xmlns="http://www.w3.org/2000/svg" className="skill-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <h3 className="skill-title">Tech-Savvy</h3>
                </div>
                <p className="skill-description">
                  Proficient with modern tools and software to streamline your workflow
                </p>
              </div>
              
              <div className="skill-card">
                <div className="skill-header">
                  <svg xmlns="http://www.w3.org/2000/svg" className="skill-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <h3 className="skill-title">Reliable</h3>
                </div>
                <p className="skill-description">
                  Consistent, dependable support you can count on
                </p>
              </div>
              
              <div className="skill-card">
                <div className="skill-header">
                  <svg xmlns="http://www.w3.org/2000/svg" className="skill-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <h3 className="skill-title">Proactive</h3>
                </div>
                <p className="skill-description">
                  Anticipating needs and solving problems before they arise
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
