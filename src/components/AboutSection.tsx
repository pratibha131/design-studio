import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">About us</h2>
          <div className="section-divider mb-8" />
          
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            We are <span className="text-primary font-semibold">MetalHand Industrial Equipment</span> and we specialize in manufacturing high-quality material handling equipment.
            Located at <span className="text-foreground">Asha Stores Ludhiana</span>, our products are designed with load capacities from 1 to 5 tons, including <span className="text-foreground">pallet jacks, lift tables, trolleys, and stackers</span>.
            We are committed to providing reliable industrial solutions that meet the highest standards of quality and performance.
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
