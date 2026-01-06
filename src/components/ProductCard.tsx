interface ProductCardProps {
  image: string;
  name: string;
}

const ProductCard = ({ image, name }: ProductCardProps) => {
  return (
    <div className="product-card bg-card group cursor-pointer">
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <h3 className="font-heading font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default ProductCard;
