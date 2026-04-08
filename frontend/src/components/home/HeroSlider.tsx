import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, GraduationCap, Globe } from "lucide-react";
import heroStudyAbroad from "@/assets/hero-study-abroad.webp";
import heroMbbs from "@/assets/hero-mbbs.webp";
import heroLanguage from "@/assets/hero-language.webp";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
  link: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Study Abroad",
    subtitle: "Your Gateway to World-Class Education",
    description:
      "Explore top universities in USA, UK, Canada, Australia & Europe with expert guidance.",
    image: heroStudyAbroad,
    badge: "USA • UK • Canada • Australia",
    link: "/study-abroad",
  },
  {
    id: 2,
    title: "MBBS Abroad",
    subtitle: "Pursue Your Medical Dreams Globally",
    description:
      "Affordable MBBS programs in Russia, Georgia, Philippines & Kazakhstan with MCI recognized universities.",
    image: heroMbbs,
    badge: "MCI Recognized Universities",
    link: "/mbbs-abroad",
  },
 {
  id: 3,
  title: "Courses Abroad",
  subtitle: "Choose the Right Program for Your Future",
  description:
    "Explore Bachelor’s, Master’s, PhD, Diploma & Professional Certification programs at top international universities.",
  image: heroLanguage,
  badge: "Bachelor’s • Master’s • PhD • Diploma",
  link: "/courses",
},

];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[72vh] sm:h-[85vh] lg:h-[90vh] min-h-[480px] sm:min-h-[520px] overflow-hidden">
      <h2 className="sr-only">
  Study Abroad & MBBS Abroad Consultants – Optimus Overseas Educational Consultants
</h2>

      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={`${slide.title} - Optimus Overseas Educational Consultants`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-overlay-gradient" />
          </div>

          {/* Content */}
          <div className="relative h-full container-custom flex items-center">
            <div className="max-w-2xl text-center sm:text-left px-2 sm:px-0">
              <div
                className={`transition-all duration-700 delay-200 ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                <span className="inline-block px-3 py-1.5 bg-accent text-primary font-semibold rounded-full text-xs sm:text-sm mb-4">
                  {slide.badge}
                </span>

                <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold text-primary-foreground mb-3 leading-tight">
  {slide.title}
</h2>


                <p className="text-base sm:text-xl lg:text-2xl text-primary-foreground/90 mb-3">
                  {slide.subtitle}
                </p>

                <p className="text-sm sm:text-lg text-primary-foreground/80 mb-6 max-w-xl mx-auto sm:mx-0">
                  {slide.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-start">
                  <Link to={slide.link} className="btn-hero text-sm sm:text-base">
                    Learn More
                  </Link>
                  <Link
                    to="/contact"
                    className="btn-outline-hero text-sm sm:text-base"
                  >
                    Book Free Counselling
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Floating badges – HIDDEN ON MOBILE */}
          <div
            className={`hidden md:flex floating-badge md:right-4 lg:right-4 xl:right-20 md:top-[31%] lg:top-[24%] xl:top-1/4 md:p-2 lg:p-3 xl:p-4 animate-float transition-all duration-700 delay-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="w-9 h-9 lg:w-10 lg:h-10 xl:w-12 xl:h-12 rounded-full bg-accent flex items-center justify-center">
              <GraduationCap className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-xs lg:text-sm xl:text-base text-foreground">10,000+</p>
              <p className="text-[11px] lg:text-xs xl:text-sm text-muted-foreground">Students Placed</p>
            </div>
          </div>

          <div
            className={`hidden md:flex floating-badge md:right-4 lg:right-4 xl:right-40 md:bottom-[31%] lg:bottom-[24%] xl:bottom-1/4 md:p-2 lg:p-3 xl:p-4 animate-float transition-all duration-700 delay-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="w-9 h-9 lg:w-10 lg:h-10 xl:w-12 xl:h-12 rounded-full bg-primary flex items-center justify-center">
              <Globe className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-primary-foreground" />
            </div>
            <div>
              <p className="font-semibold text-xs lg:text-sm xl:text-base text-foreground">50+ Countries</p>
              <p className="text-[11px] lg:text-xs xl:text-sm text-muted-foreground">
                Worldwide Network
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows – smaller on mobile */}
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center text-primary-foreground"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev + 1) % slides.length)
        }
        className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center text-primary-foreground"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`slider-dot ${
              index === currentSlide ? "active" : ""
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
