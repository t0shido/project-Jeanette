const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title text-center">
          About <span className="highlight">Me</span>
        </h2>
        
        <div className="about-container">
          <div className="about-content-wrapper">
            
            <div className="about-sections">
              <div className="about-section">
                <h3 className="about-subtitle">My Expertise</h3>
                <p className="about-text">
                  As a trained <strong>freight forwarding clerk</strong> with additional experience in <strong>media rights management</strong>, I bring valuable knowledge from various fields.
                </p>
                <ul className="about-list">
                  <li><strong>Freight & Logistics:</strong> Organization of transport processes, document management, handling of shipping processes</li>
                  <li><strong>Media Rights Management:</strong> Administration and verification of image rights, license management</li>
                  <li><strong>Administration:</strong> Data maintenance, processing of procedures, communication with various interfaces</li>
                </ul>
              </div>
              
              <div className="about-section">
                <h3 className="about-subtitle">My Strengths</h3>
                <ul className="about-list">
                  <li>Structured way of working</li>
                  <li>High sense of responsibility</li>
                  <li>Quick familiarization with new topics</li>
                  <li>Reliable task completion</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="about-image-container">
            <div className="about-image-frame"></div>
            <img
              src="/images/about_me.jpg"
              alt="Jeanette - Virtual Assistant"
              className="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
