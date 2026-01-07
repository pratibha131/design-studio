import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import heroImage from "@/assets/hero-warehouse.jpg";
import productPalletTruck from "@/assets/product-pallet-truck.jpg";
import productautomaticstacker from "@/assets/Fully Automatic Pallet Stackers.jpg";
import productStacker from "@/assets/product-stacker.jpg";
import productconveyor from "@/assets/conveyor-rollers.jpg";
import productScissorLift from "@/assets/product-scissor-lift.jpg";
import productmanual from "@/assets/manual_stacker.jpg";
import productFloorCrane from "@/assets/product-floor-crane.jpg";
import productDockRamp from "@/assets/product-dock-ramp.jpg";
import productDrumTrolley from "@/assets/product-drum-trolley.jpg";
import productpallet from "@/assets/hand_pallet.jpg";

const slides = [
  { image: heroImage, isBackground: true, name: "Material Handling Equipment", subtitle: "1–5 Tons Capacity" },
  { image: productpallet, isBackground: false, name: "Hand Pallet Truck", subtitle: "Durable & Efficient" },
  { image: productPalletTruck, isBackground: false, name: "Pallet Truck", subtitle: "Manual Operation" },
  { image: productautomaticstacker, isBackground: false, name: "Fully Automatic Pallet Stackers", subtitle: "Automated Efficiency" },
  { image: productStacker, isBackground: false, name: "Stackers", subtitle: "High Performance" },
  { image: productconveyor, isBackground: false, name: "Conveyor Roller Machine", subtitle: "Smooth Transport" },
  { image: productScissorLift, isBackground: false, name: "Lift Tables", subtitle: "Industrial Grade" },
  { image: productmanual, isBackground: false, name: "Manual Stacker", subtitle: "Easy Handling" },
  { image: productFloorCrane, isBackground: false, name: "Trolleys", subtitle: "Heavy Duty" },
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
      {/* Alert */}
      <div className="absolute top-4 left-4 right-4 z-30">
        <Alert>
          <AlertDescription>
            We deal with bulk and wholesale machines. Contact +91 9815175016 for getting best quotations.
          </AlertDescription>
        </Alert>
      </div>
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center pt-32 sm:pt-28 md:pt-20 lg:pt-0">
              <div className="container mx-auto px-4 h-full">
                <div className="grid lg:grid-cols-2 gap-8 h-full items-center">
                  {/* Left - Product Image (only for non-background slides) */}
                  {!slide.isBackground && (
                    <div className={`order-1 flex items-center justify-center transition-all duration-700 delay-100 ${
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
                  )}

                  {/* Right - Text */}
                  <div className={`text-center lg:text-left transition-all duration-700 delay-200 ${
                    index === currentSlide ? "translate-x-0 opacity-100" : (slide.isBackground ? "-translate-x-10 opacity-0" : "translate-x-10 opacity-0")
                  }`}>
                    <p className={`text-primary font-heading uppercase mb-2 ${slide.isBackground ? "text-lg md:text-xl tracking-widest" : "text-sm md:text-base tracking-[0.3em]"}`}>
                      {slide.subtitle}
                    </p>
                    <h1 className={`font-heading font-bold text-foreground uppercase leading-tight mb-6 ${slide.isBackground ? "text-4xl md:text-6xl lg:text-7xl" : "text-3xl md:text-5xl lg:text-6xl"}`}>
                      {slide.name}
                    </h1>
                    <div className={`h-1 bg-primary mb-6 mx-auto lg:mx-0 ${slide.isBackground ? "w-24 mt-6" : "w-20"}`} />
                    {!slide.isBackground && (
                      <button
                        className="btn-primary mt-4"
                        onClick={() => {
                          const quoteSection = document.getElementById('quote-section');
                          if (quoteSection) {
                            quoteSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        Get your Quotation
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
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
