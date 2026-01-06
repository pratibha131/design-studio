import { useState } from "react";
import { Menu, X, ShoppingCart, Search } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Scroll to products section
      const productsSection = document.getElementById('products');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
      }

      // Simple search logic - check if product name contains search query
      const products = [
        "Mini Electric Stacker",
        "Hand Pallet Truck",
        "Fully Automatic Pallet Stackers",
        "Battery Operated Stacker",
        "Hydraulic Scissor Lift",
        "Electric Floor Crane",
        "Dock Ramp",
        "Drum Trolley"
      ];

      const foundProduct = products.find(product =>
        product.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (foundProduct) {
        alert(`Found product: ${foundProduct}`);
      } else {
        alert(`No product found matching: ${searchQuery}`);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const navItems = [
    { label: "Home", href: "#" },
    { label: "About us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Products", href: "#products" },
    { label: "Enquiry", href: "#enquiry" },
    { label: "Contact", href: "#contact" },
    { label: "Download", href: "#download" },
  ];

  return (
    <header className="bg-background/95 backdrop-blur-sm sticky top-0 z-40 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-heading font-bold">
              <span className="text-primary">MetalHand</span>
              <span className="text-foreground block text-sm font-normal tracking-wider">Industrial equipment</span>
            </h1>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium text-sm uppercase tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <div className="relative">
              {isSearchOpen && (
                <div className="absolute right-0 top-0 flex items-center">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="w-64 px-4 py-2 bg-background border border-border rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button
                    onClick={handleSearch}
                    className="ml-2 p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Search size={16} />
                  </button>
                </div>
              )}
              <button
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => {
                  setIsSearchOpen(!isSearchOpen);
                  if (!isSearchOpen) {
                    setSearchQuery("");
                  }
                }}
              >
                <Search size={22} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium text-sm uppercase tracking-wide py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
