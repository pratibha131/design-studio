import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-warehouse.jpg";
import productPalletTruck from "@/assets/product-pallet-truck.jpg";
import productStacker from "@/assets/product-stacker.jpg";
import productScissorLift from "@/assets/product-scissor-lift.jpg";
import productFloorCrane from "@/assets/product-floor-crane.jpg";
import productDockRamp from "@/assets/product-dock-ramp.jpg";
import productDrumTrolley from "@/assets/product-drum-trolley.jpg";

const slides = [
  { image: heroImage, isBackground: true, name: "Material Handling Equipment", subtitle: "Manufacturer & Exporter" },
  { image: productPalletTruck, isBackground: false, name: "Hydraulic Pallet Truck", subtitle: "Premium Quality" },
  { image: productStacker, isBackground: false, name: "Battery Operated Stacker", subtitle: "High Performance" },
  { image: productScissorLift, isBackground: false, name: "Hydraulic Scissor Lift", subtitle: "Industrial Grade" },
  { image: productFloorCrane, isBackground: false, name: "Electric Floor Crane", subtitle: "Heavy Duty" },
  { image: productDockRamp, isBackground: false, name: "Dock Ramp", subtitle: "Loading Solutions" },
  { image: productDrumTrolley, isBackground: false, name: "Drum Trolley", subtitle: "Easy Transport" },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative h-[85vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          {slide.isBackground ? (
            // First slide - warehouse background
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-xl">
                    <p className="text-primary font-heading text-lg md:text-xl tracking-widest uppercase mb-2">
                      {slide.subtitle}
                    </p>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground uppercase leading-tight">
                      {slide.name}
                    </h1>
                    <div className="w-24 h-1 bg-primary mt-6" />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Product slides - split layout
            <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-secondary">
              <div className="container mx-auto px-4 h-full">
                <div className="grid lg:grid-cols-2 gap-8 h-full items-center">
                  {/* Left - Product Info */}
                  <div className={`order-2 lg:order-1 text-center lg:text-left transition-all duration-700 delay-200 ${
                    index === currentSlide ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                  }`}>
                    <p className="text-primary font-heading text-sm md:text-base tracking-[0.3em] uppercase mb-3">
                      {slide.subtitle}
                    </p>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground uppercase leading-tight mb-6">
                      {slide.name}
                    </h2>
                    <div className="w-20 h-1 bg-primary mb-6 mx-auto lg:mx-0" />
                    <button className="btn-primary mt-4">
                      View Details
                    </button>
                  </div>

                  {/* Right - Product Image */}
                  <div className={`order-1 lg:order-2 flex items-center justify-center transition-all duration-700 delay-100 ${
                    index === currentSlide ? "translate-x-0 opacity-100 scale-100" : "translate-x-10 opacity-0 scale-95"
                  }`}>
                    <div className="relative">
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75" />
                      <img
                        src={slide.image}
                        alt={slide.name}
                        className="relative z-10 max-h-[55vh] w-auto object-contain drop-shadow-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-background/30 backdrop-blur-sm border border-foreground/20 hover:bg-primary hover:border-primary rounded-full flex items-center justify-center text-foreground hover:text-primary-foreground transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-background/30 backdrop-blur-sm border border-foreground/20 hover:bg-primary hover:border-primary rounded-full flex items-center justify-center text-foreground hover:text-primary-foreground transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="flex">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="flex-1 h-1 relative group"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className="absolute inset-0 bg-foreground/20" />
              <div 
                className={`absolute inset-0 bg-primary transition-all duration-300 origin-left ${
                  index === currentSlide ? "scale-x-100" : "scale-x-0 group-hover:scale-x-50"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 z-20 text-foreground/60 font-heading">
        <span className="text-primary text-2xl font-bold">{String(currentSlide + 1).padStart(2, '0')}</span>
        <span className="mx-2">/</span>
        <span>{String(slides.length).padStart(2, '0')}</span>
      </div>
    </section>
  );
};

export default HeroSection;
