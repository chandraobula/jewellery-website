import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import { urlFor } from '../lib/sanity';
import { formatPrice } from '../utils/price';

const ProductCard = ({ product }) => {
  // Handle both Sanity products and mock products
  const productId = product._id || product.id;
  const productSlug = product.slug?.current || product.slug || productId;
  const name = product.title || product.name;
  const price = product.discountedPrice || product.price;
  const originalPrice = product.price;
  const discountPercent = product.discountedPrice 
    ? Math.round(((product.price - product.discountedPrice) / product.price) * 100)
    : 0;
  const category = product.category?.title || product.category;
  const isNew = product.isNew;
  const isOnSale = product.isOnSale || (product.discountedPrice && product.discountedPrice < product.price);
  
  // Get first available image
  let imageUrl = '';
  if (product.images && product.images.length > 0) {
    imageUrl = typeof product.images[0] === 'string' 
      ? product.images[0] 
      : urlFor(product.images[0]).width(600).url();
  } else if (product.image) {
    imageUrl = product.image;
  } else {
    imageUrl = 'https://via.placeholder.com/600';
  }

  // Get color variants for display
  const colors = product.variants?.map(v => v.color) || [];
  
  return (
    <div className="group relative bg-white">
      {/* Image Container */}
      <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-neutral-100 mb-2 sm:mb-3 md:mb-4 rounded">
        <Link to={`/products/${productSlug}`}>
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>

        {/* Badges */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-col gap-1 sm:gap-2">
          {isNew && (
            <span className="bg-white/95 backdrop-blur-sm px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand-dark">
              New
            </span>
          )}
          {isOnSale && (
            <span className="bg-red-500 text-white px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              {discountPercent}% OFF
            </span>
          )}
        </div>

        {/* Quick Actions - Desktop Only */}
        <div className="hidden md:flex absolute bottom-4 right-4 flex-col gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-brand-primary hover:text-white transition-colors">
            <Heart size={18} />
          </button>
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-brand-primary hover:text-white transition-colors">
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="text-left sm:text-center px-1 sm:px-0">
        {product.brand && (
          <p className="text-[10px] sm:text-xs text-brand-dark/50 uppercase tracking-wider mb-0.5 sm:mb-1 truncate">{product.brand}</p>
        )}
        <h3 className="text-sm sm:text-base md:text-lg font-primary font-medium text-brand-dark mb-1 sm:mb-2 group-hover:text-brand-primary transition-colors line-clamp-2">
          <Link to={`/products/${productSlug}`} className="hover:underline">{name}</Link>
        </h3>
        <div className="flex items-center sm:justify-center gap-1.5 sm:gap-2 mb-1 sm:mb-2 flex-wrap">
          <p className="text-sm sm:text-base font-semibold text-brand-dark">
            {formatPrice(price)}
          </p>
          {originalPrice && originalPrice > price && (
            <p className="text-xs sm:text-sm text-brand-dark/50 line-through">
              {formatPrice(originalPrice)}
            </p>
          )}
        </div>
        
        {/* Color Swatches - Desktop Only */}
        {colors.length > 0 && (
          <div className="hidden sm:flex items-center justify-center gap-1.5 mt-2">
            {colors.slice(0, 5).map((color, idx) => (
              <div
                key={idx}
                className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-neutral-300"
                style={{ backgroundColor: color?.hex || '#ccc' }}
                title={color?.name}
              />
            ))}
            {colors.length > 5 && (
              <span className="text-[10px] sm:text-xs text-brand-dark/50">+{colors.length - 5}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
