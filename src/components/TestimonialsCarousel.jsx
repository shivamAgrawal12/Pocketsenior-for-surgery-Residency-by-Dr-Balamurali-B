import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import { Carousel } from "react-responsive-carousel";
import right from '../assets/right.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Style.css";
import testimonialsData from "./testimonials";

const TestimonialsCarousel = ({ testimonials = [] }) => {
  const [visibleTestimonials, setVisibleTestimonials] = useState([]);
  const [slidePercentage, setSlidePercentage] = useState(40);
  const navigate = useNavigate(); 

  const handleResize = useCallback(() => {
    if (window.innerWidth <= 500) { 
      setSlidePercentage(100);
    } else if (window.innerWidth <= 600) {
      setSlidePercentage(70);
    } else if (window.innerWidth <= 705) {
      setSlidePercentage(60);
    } else if (window.innerWidth <= 795) {
      setSlidePercentage(55);
    } else if (window.innerWidth <= 940) {
      setSlidePercentage(50);
    } else if (window.innerWidth <= 1060) {
      setSlidePercentage(46);
    } else if (window.innerWidth <= 1300) {
      setSlidePercentage(42);
    } else if (window.innerWidth <= 1560) {
      setSlidePercentage(40);
    } else if (window.innerWidth <= 1750) {
      setSlidePercentage(35);
    } else {
      setSlidePercentage(30);
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  useEffect(() => {
    setVisibleTestimonials(testimonials.length > 0 ? testimonials : testimonialsData);
  }, [testimonials]);

  const handleNavigation = (chapterId) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/chapter/${chapterId}`);
  };

  if (visibleTestimonials.length === 0) {
    return <div className="error-message">No testimonials available</div>;
  }

  return (
    <div className="container-chap">
      <Carousel
        showArrows
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        autoPlay
        infiniteLoop
        interval={3500}
        transitionTime={500}
        centerMode
        centerSlidePercentage={slidePercentage}
      >
        {visibleTestimonials.map((testimonial, index) => (
          <div
            className="testimonial-item"
            key={index}
            onClick={() => handleNavigation(testimonial.chapterId)}
          >
            <div className="shadow-effect">
              {testimonial.image && (
                <img className="img-circle" src={testimonial.image} alt={testimonial.name || "User"} />
              )}
              <h1 className="chap-name">{testimonial.name}</h1>
              <p className="chap-des">{testimonial.text}</p>
              <div className="chap-button">
                {testimonial.chapter}
                <img src={right} alt="Right Arrow" className="chap-num" />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialsCarousel;
