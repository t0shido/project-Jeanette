const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title text-center">
          Über <span className="highlight">mich</span>
        </h2>
        
        <div className="about-container">
          <div className="about-content-wrapper">
            
            <div className="about-sections">
              <div className="about-section">
                <h3 className="about-subtitle">Meine Expertise</h3>
                <p className="about-text">
                  Als ausgebildete <strong>Speditionskauffrau</strong> mit zusätzlicher Erfahrung im <strong>Medienrechtsmanagement</strong> bringe ich wertvolle Kenntnisse aus verschiedenen Bereichen mit.
                </p>
                <ul className="about-list">
                  <li><strong>Spedition & Logistik:</strong> Organisation von Transportabläufen, Dokumentenmanagement, Abwicklung von Versandprozessen</li>
                  <li><strong>Medienrechtsmanagement:</strong> Verwaltung und Prüfung von Bildrechten, Lizenzmanagement</li>
                  <li><strong>Administration:</strong> Datenpflege, Bearbeitung von Vorgängen, Kommunikation mit verschiedenen Schnittstellen</li>
                </ul>
              </div>
              
              <div className="about-section">
                <h3 className="about-subtitle">Meine Stärken</h3>
                <ul className="about-list">
                  <li>Strukturierte Arbeitsweise</li>
                  <li>Hohes Verantwortungsbewusstsein</li>
                  <li>Schnelle Einarbeitung in neue Themen</li>
                  <li>Zuverlässige Aufgabenerfüllung</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="about-image-container">
            <div className="about-image-frame"></div>
            <img
              src="/images/hero_image.jpg"
              alt="Jeanette - Virtuelle Assistentin"
              className="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
