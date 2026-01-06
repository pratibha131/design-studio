import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">About us</h2>
          <div className="section-divider mb-8" />
          
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            We are <span className="text-primary font-semibold">Rudra Equipment</span> and we love what we do. 
            We are located in Ahmedabad. Established as Sole Proprietorship firm in the year 2015 
            at Ahmedabad (Gujarat, India), we "Rudra Equipment" are a renowned Manufacturer of 
            premium quality range of <span className="text-foreground">Hydraulic Hand Pallet Truck, Stacker, ETO Crane, 
            Scissor Lift, etc.</span> We provide these products at reasonable prices and deliver these 
            within the assured time-frame. Under the headship of "Mr. Chirag Patel" (Owner), 
            we have achieved a noteworthy position in the market.
          </p>

          <div className="section-divider mb-8" />

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary">
              Learn more about us
            </Button>
            <Button variant="outline" className="btn-outline">
              Contact with us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
