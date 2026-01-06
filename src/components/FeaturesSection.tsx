import { Award, Wrench, Package } from "lucide-react";
import heroImage from "@/assets/hero-warehouse.jpg";

const features = [
  {
    icon: Award,
    title: "Quality Product",
    description: "Rudra Equipment is built on a strong foundation of integrity, and our reputation for quality.",
  },
  {
    icon: Wrench,
    title: "Annual Repair Agreement",
    description: "Annual Repair Agreement makes it easier to forecast spending and helps lower your everyday costs.",
  },
  {
    icon: Package,
    title: "Spare Parts",
    description: "All the parts are stocked at our service centers and can be shipped anywhere in the world within 24 hours of order receipt.",
  },
];

const FeaturesSection = () => {
  return (
    <section 
      id="services"
      className="relative py-20"
    >
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <h2 className="section-title text-center mb-4">
          Leading Manufacturer of Pallet Truck
        </h2>
        <div className="section-divider mb-12" />

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card bg-card/50 backdrop-blur-sm rounded-lg"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <feature.icon size={40} className="text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
