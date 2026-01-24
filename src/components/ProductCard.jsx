import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { id, name, price, image, category, isNew } = product;
  
  return (
    <div className="group relative">
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100 mb-4">
        <Link to={`/products/${id}`}>
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>

        {/* Badges */}
        {isNew && (
          <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-dark">
            New
          </span>
        )}

        {/* Quick Actions */}
        <div className="absolute bottom-4 right-4 flex flex-col gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-brand-primary hover:text-white transition-colors">
            <Heart size={18} />
          </button>
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-brand-primary hover:text-white transition-colors">
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="text-center">
        <p className="text-xs text-brand-dark/50 uppercase tracking-wider mb-1">{category}</p>
        <h3 className="text-lg font-primary font-medium text-brand-dark mb-2 group-hover:text-brand-primary transition-colors">
          <Link to={`/products/${id}`}>{name}</Link>
        </h3>
        <p className="text-brand-dark font-medium">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
