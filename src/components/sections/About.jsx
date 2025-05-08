const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about-container">
          <div className="about-image-container">
            <div className="about-image-frame"></div>
            <img
              src="/images/hero_image.jpg" // Using the same image for now
              alt="Jeanette - Virtuelle Assistentin"
              className="about-image"
            />
          </div>
          
          <div className="about-content">
            <h2 className="section-title">
              Über <span className="highlight">Mich</span>
            </h2>
            
            <p className="about-text">
              Hallo! Ich bin Jeanette, eine engagierte virtuelle Assistentin mit über 5 Jahren Erfahrung in der Unterstützung von Unternehmern, kleinen Unternehmen und vielbeschäftigten Fachleuten.
            </p>
            
            <p className="about-text">
              Ich bin spezialisiert auf administrative Unterstützung, E-Mail-Management, Terminplanung und Recherche - damit Sie sich auf das Wachstum Ihres Unternehmens und das konzentrieren können, was Sie lieben.
            </p>
            
            <div className="skills-grid">
              <div className="skill-card">
                <div className="skill-header">
                  <svg xmlns="http://www.w3.org/2000/svg" className="skill-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <h3 className="skill-title">Organisiert</h3>
                </div>
                <p className="skill-description">
                  Akribische Liebe zum Detail und hervorragende Organisationsfähigkeiten
                </p>
              </div>
              
              <div className="skill-card">
                <div className="skill-header">
                  <svg xmlns="http://www.w3.org/2000/svg" className="skill-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <h3 className="skill-title">Technikaffin</h3>
                </div>
                <p className="skill-description">
                  Versiert im Umgang mit modernen Tools und Software zur Optimierung Ihrer Arbeitsabläufe
                </p>
              </div>
              
              <div className="skill-card">
                <div className="skill-header">
                  <svg xmlns="http://www.w3.org/2000/svg" className="skill-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <h3 className="skill-title">Zuverlässig</h3>
                </div>
                <p className="skill-description">
                  Konstante, verlässliche Unterstützung, auf die Sie zählen können
                </p>
              </div>
              
              <div className="skill-card">
                <div className="skill-header">
                  <svg xmlns="http://www.w3.org/2000/svg" className="skill-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <h3 className="skill-title">Proaktiv</h3>
                </div>
                <p className="skill-description">
                  Bedürfnisse vorausahnen und Probleme lösen, bevor sie entstehen
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
