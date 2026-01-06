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
  { image: heroImage, isBackground: true },
  { image: productPalletTruck, isBackground: false, name: "Hydraulic Pallet Truck" },
  { image: productStacker, isBackground: false, name: "Battery Operated Stacker" },
  { image: productScissorLift, isBackground: false, name: "Hydraulic Scissor Lift" },
  { image: productFloorCrane, isBackground: false, name: "Electric Floor Crane" },
  { image: productDockRamp, isBackground: false, name: "Dock Ramp" },
  { image: productDrumTrolley, isBackground: false, name: "Drum Trolley" },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {slide.isBackground ? (
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-background/40" />
            </div>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy-lighter">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={slide.image}
                  alt={slide.name}
                  className="max-h-[60vh] max-w-[60vw] object-contain drop-shadow-2xl animate-fade-in"
                />
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground uppercase leading-tight text-shadow">
          We Are Manufacturer And Exporter
          <br />
          <span className="text-primary">Of Material Handling Equipment.</span>
        </h1>
        {!slides[currentSlide].isBackground && slides[currentSlide].name && (
          <p className="mt-6 text-xl md:text-2xl text-primary font-heading animate-fade-in">
            {slides[currentSlide].name}
          </p>
        )}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-background/50 hover:bg-primary rounded-full flex items-center justify-center text-foreground hover:text-primary-foreground transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-background/50 hover:bg-primary rounded-full flex items-center justify-center text-foreground hover:text-primary-foreground transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-primary w-8"
                : "bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
