import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <>
      {/* Phone Button */}
      <a
        href="tel:+919815175016"
        className="floating-btn top-1/3 bg-phone-blue hover:w-14"
        aria-label="Call us"
      >
        <Phone size={20} />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919815175016"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn top-1/3 mt-14 bg-whatsapp hover:w-14"
        aria-label="WhatsApp"
      >
        <MessageCircle size={20} />
      </a>
    </>
  );
};

export default FloatingButtons;
