import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import video1 from "@/assets/video1.mp4";
import video2 from "@/assets/video2.mp4";
import video3 from "@/assets/video3.mp4";
import videomain from "@/assets/main.mp4";
import videocon from "@/assets/conveyor.mp4";
import videoscissor from "@/assets/scissor.mp4";

const AboutSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const videos = [videomain, video1,videocon, videoscissor , video2, video3];

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-8">About us</h2>
          <div className="section-divider mb-12" />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Video Section */}
            <div className="order-1 lg:order-1">
              <div className="relative">
                <Carousel setApi={setApi} className="w-full">
                  <CarouselContent>
                    {videos.map((video, index) => (
                      <CarouselItem key={index}>
                        <video
                          className="w-full h-auto rounded-lg shadow-lg"
                          controls
                          poster="/placeholder.svg"
                          autoPlay
                          muted
                          loop
                        >
                          <source src={video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            </div>

            {/* Text Section */}
            <div className="order-2 lg:order-2 text-center lg:text-left">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We are <span className="text-primary font-semibold">MetalHand Industrial Equipment</span> and we specialize in manufacturing high-quality material handling equipment.
                Located at <span className="text-foreground">Asha Stores Ludhiana</span>, our products are designed with load capacities from 1 to 5 tons, including <span className="text-foreground">pallet jacks, lift tables, trolleys, and stackers</span>.
                We are committed to providing reliable industrial solutions that meet the highest standards of quality and performance.
              </p>

              <p className="text-primary font-semibold text-xl mb-2">ISO CERTIFIED</p>
              <p className="text-muted-foreground text-lg mb-8">Quality Assured , 24/7 Support Available</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button className="btn-primary">
                  Learn more about us
                </Button>
                <Button
                  variant="outline"
                  className="btn-outline"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Contact with us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;  