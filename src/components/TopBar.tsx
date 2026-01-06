import { Phone, Mail } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-secondary py-2 px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 text-sm">
        <a 
          href="tel:+917359465955" 
          className="flex items-center gap-2 text-primary hover:text-gold-light transition-colors"
        >
          <Phone size={14} />
          <span>+91 7359465955</span>
        </a>
        <a 
          href="tel:+919925093683" 
          className="flex items-center gap-2 text-primary hover:text-gold-light transition-colors"
        >
          <Phone size={14} />
          <span>+91 9925093683</span>
        </a>
        <a 
          href="mailto:rudraequipment73@gmail.com" 
          className="flex items-center gap-2 text-primary hover:text-gold-light transition-colors"
        >
          <Mail size={14} />
          <span>rudraequipment73@gmail.com</span>
        </a>
      </div>
    </div>
  );
};

export default TopBar;
