const clients = [
  "TATA",
  "Adani",
  "Reliance",
  "L&T",
  "Godrej",
  "Mahindra",
  "Bajaj",
  "JSW",
  "Hindalco",
  "UltraTech",
];

const ClientsSection = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-4">Our Clients</h2>
        <div className="section-divider mb-12" />

        <div className="overflow-hidden">
          <div className="flex animate-slide-left">
            {/* First set of logos */}
            {clients.concat(clients).map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 md:w-40 h-20 mx-4 bg-card rounded-lg flex items-center justify-center"
              >
                <span className="font-heading font-bold text-foreground/60 text-lg">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
