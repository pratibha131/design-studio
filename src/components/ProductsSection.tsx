import productPalletTruck from "@/assets/product-pallet-truck.jpg";
import productStacker from "@/assets/product-stacker.jpg";
import productScissorLift from "@/assets/product-scissor-lift.jpg";
import productFloorCrane from "@/assets/product-floor-crane.jpg";
import productDockRamp from "@/assets/product-dock-ramp.jpg";
import productDrumTrolley from "@/assets/product-drum-trolley.jpg";
import ProductCard from "./ProductCard";

const products = [
  {
    image: productPalletTruck,
    name: "Mini Electric Stacker",
    price: "Rs.70,000.00",
  },
  {
    image: productStacker,
    name: "Battery Operated Stacker",
    price: "Rs.410,000.00",
  },
  {
    image: productScissorLift,
    name: "Hydraulic Scissor Lift",
    price: "Rs.45,000.00",
  },
  {
    image: productFloorCrane,
    name: "Electric Floor Crane",
    price: "Rs.95,000.00",
  },
  {
    image: productDockRamp,
    name: "Dock Ramp",
    price: "Rs.490,000.00",
  },
  {
    image: productDrumTrolley,
    name: "Drum Trolley",
    price: "Rs.7,000.00",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-4">
          Our Products
        </h2>
        <div className="section-divider mb-12" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
