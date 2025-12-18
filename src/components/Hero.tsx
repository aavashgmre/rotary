import { useState } from "react";
import "./Hero.css";

interface Slide {
  image: string;
  subtitle: string;
  title: string;
}

const slides: Slide[] = [
  {
    image: "/hero1.jpg",
    subtitle: "LEAD The Change",
    title: "Youth For a Better Tomorrow",
  },
  {
      image: "/hero2.jpg",
      subtitle: "  ",
      title: "Service Above Self",

  },
];

const Hero = () => {
  const [current, setCurrent] = useState<number>(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="hero">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === current ? "active" : ""} `}
        >
          <img src={slide.image} alt="Hero" />
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <p className="hero-subtitle">{slide.subtitle}</p>
            <h1 className="hero-title">
             {slide.title.split("Tommorow")[0]} 
            </h1>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button className="hero-arrow left" onClick={prevSlide}>
        ←
      </button>
      <button className="hero-arrow right" onClick={nextSlide}>
        →
      </button>

      {/* Scroll to Top */}
      <button
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </section>
  );
};

export default Hero;
