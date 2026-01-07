import productPalletTruck from "@/assets/product-pallet-truck.jpg";
import productautomaticstacker from "@/assets/Fully Automatic Pallet Stackers.jpg";
import productStacker from "@/assets/product-stacker.jpg";
import productconveyor from "@/assets/conveyor-rollers.jpg";
import productScissorLift from "@/assets/product-scissor-lift.jpg";
import productmanual from "@/assets/manual_stacker.jpg";
import productFloorCrane from "@/assets/product-floor-crane.jpg";
import productDockRamp from "@/assets/product-dock-ramp.jpg";
import productDrumTrolley from "@/assets/product-drum-trolley.jpg";
import ProductCard from "./ProductCard";
import productpallet from "@/assets/hand_pallet.jpg";

const products = [
  {
    image: productpallet,
    name: "Hand Pallet Truck",
  },
  {
    image: productPalletTruck,
    name: "Pallet Truck",
  },
  {
    image: productautomaticstacker,
    name: "Fully Automatic Pallet Stackers",
  },
  {
    image: productStacker,
    name: "Battery Operated Stacker",
  },
  {
    image: productconveyor,
    name: "Conveyor Roller Machine",
  },
  {
    image: productScissorLift,
    name: "Hydraulic Scissor Lift",
  },
  {
    image: productmanual,
    name: "Manual Stacker",
  },
  {
    image: productFloorCrane,
    name: "Electric Floor Crane",
  },
  {
    image: productDockRamp,
    name: "Dock Ramp",
  },
  {
    image: productDrumTrolley,
    name: "Drum Trolley",
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
