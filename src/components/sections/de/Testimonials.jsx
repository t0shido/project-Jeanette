import React, { useState, useRef, useEffect } from 'react';
import { TextReveal, FadeIn } from '../../animations/ScrollAnimations';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  const testimonials = [
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      name: "Toshi Edelmann",
      title: "Geschäftsführerin",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit.",
      name: "Toshi Edelmann",
      title: "Projektleiter",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.",
      name: "Toshi Edelmann",
      title: "Manager",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
      name: "Toshi Edelmann",
      title: "IT-Consultant",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
      name: "Toshi Edelmann",
      title: "Beraterin",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
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
    arrows: true, // Enable arrows for navigation
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: false, // Keep dots disabled to avoid duplicates with custom dots
          swipe: true, // Enable swipe on mobile
          touchMove: true, // Enable touch movement
          draggable: true // Enable dragging on mobile
        }
      }
    ]
  };

  return (
    <section id="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <FadeIn y={30} duration={0.8}>
            <TextReveal text="Kundenreferenzen" element="h2" className="section-title text-left" />
          </FadeIn>
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
                        {/* Image removed - blank space */}
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
