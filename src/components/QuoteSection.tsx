import { useState } from "react";
import QuoteForm from "./QuoteForm";

const QuoteSection = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  return (
    <section id="quote-section" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="section-title mb-4">Request a Quote</h2>
        <div className="section-divider mb-8" />
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Get in touch with us for personalized quotes and inquiries about our material handling equipment.
        </p>
        <button
          onClick={() => setIsQuoteFormOpen(true)}
          className="btn-primary"
        >
          Submit Enquiry
        </button>
      </div>
      <QuoteForm
        isOpen={isQuoteFormOpen}
        onClose={() => setIsQuoteFormOpen(false)}
      />
    </section>
  );
};

export default QuoteSection;
