import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  const testimonials = [
    {
      quote: "Jeanette war eine absolute Bereicherung für mein Unternehmen. Ihre organisatorischen Fähigkeiten und ihre Liebe zum Detail haben mir jede Woche mehrere Stunden Zeit erspart.",
      name: "Sarah Johnson",
      title: "Inhaberin einer Marketingagentur",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "Ich bin in E-Mails und administrativen Aufgaben versunken, bis ich Jeanette eingestellt habe. Sie ist zuverlässig, proaktiv und hat ein gutes Auge fürs Detail. Sehr empfehlenswert!",
      name: "Michael Chen",
      title: "Gründer eines Tech-Startups",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "Die Zusammenarbeit mit Jeanette war wie ein frischer Wind. Sie ist unglaublich effizient und hat mir geholfen, meinen gesamten Geschäftsbetrieb zu optimieren.",
      name: "Emma Rodriguez",
      title: "E-Commerce-Unternehmerin",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "Seit ich mit Jeanette zusammenarbeite, kann ich mich auf das Wachstum meines Unternehmens konzentrieren, anstatt in administrativen Aufgaben zu versinken. Sie war eine Rettung!",
      name: "David Wilson",
      title: "Finanzberater",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "Jeanettes Liebe zum Detail und ihr proaktiver Ansatz haben die Arbeitsweise meines Unternehmens verändert. Ich kann mir nicht vorstellen, mein Unternehmen ohne ihre Unterstützung zu führen.",
      name: "Sophia Martinez",
      title: "Innenarchitektin",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    fade: true,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  };

  return (
    <section id="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="section-title testimonials-title">
            Kunden<span className="highlight">referenzen</span>
          </h2>
          {/* Testimonials subtitle removed as requested */}
        </div>

        <div className="testimonials-container">
          <div className="testimonial-slider-wrapper">
            <button 
              className="slider-nav-button prev" 
              onClick={() => sliderRef.current.slickPrev()}
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            
            <Slider ref={sliderRef} {...settings} className="testimonial-slider">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-slide">
                  <div className="testimonial-content">
                    <div className="testimonial-quote-icon">
                      <svg viewBox="0 0 32 32" fill="currentColor">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                    </div>
                    <p className="testimonial-text">
                      "{testimonial.quote}"
                    </p>
                    <div className="testimonial-author">
                      <div className="testimonial-author-image">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://via.placeholder.com/150";
                          }}
                        />
                      </div>
                      <div className="testimonial-author-info">
                        <h4>{testimonial.name}</h4>
                        <p>{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            
            <button 
              className="slider-nav-button next" 
              onClick={() => sliderRef.current.slickNext()}
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
            
            <div className="testimonial-nav">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  className={`testimonial-dot ${index === activeSlide ? 'active' : ''}`}
                  onClick={() => sliderRef.current.slickGoTo(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
