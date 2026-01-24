import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Heart, Share2, Truck, ShieldCheck, RefreshCw, Minus, Plus } from 'lucide-react';
import Button from '../components/ui/Button';
import ReviewCard from '../components/ReviewCard';

const ProductDetail = () => {
  const { slug } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('6');

  // Mock product data
  const product = {
    id: 1,
    name: 'Ethereal Diamond Ring',
    price: 1299.00,
    description: "A stunning masterpiece of craftsmanship, this Ethereal Diamond Ring features a brilliant-cut center stone surrounded by a halo of smaller diamonds. Set in 18k white gold, it captures the light from every angle, creating a mesmerizing sparkle that symbolizes eternal love.",
    images: [
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=2080&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070&auto=format&fit=crop',
    ],
    rating: 5,
    reviews: 12,
    sizes: ['5', '6', '7', '8', '9'],
    specs: [
      { label: 'Metal', value: '18k White Gold' },
      { label: 'Stone', value: 'Natural Diamond' },
      { label: 'Carat', value: '1.2 ct' },
      { label: 'Clarity', value: 'VVS1' },
    ]
  };

  const reviews = [
    { 
      id: 1, 
      name: 'Sarah Mitchell', 
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop', 
      rating: 5, 
      comment: "The craftsmanship is absolutely stunning. My engagement ring sparkles from every angle. Truly a masterpiece.", 
      date: 'Oct 12, 2024',
      product: 'Ethereal Diamond Ring'
    },
    { 
      id: 2, 
      name: 'Emily Chen', 
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop', 
      rating: 5, 
      comment: "I bought the pearl earrings for my wedding and they were perfect. Elegant, lightweight, and timeless.", 
      date: 'Sep 28, 2024',
      product: 'Pearl Drop Earrings'
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="container-custom">
        {/* Breadcrumbs */}
        <div className="text-sm text-brand-dark/50 mb-8">
          Home / Rings / <span className="text-brand-dark">{product.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mb-20">
          {/* Gallery */}
          <div className="lg:w-1/2">
            <div className="aspect-square bg-neutral-100 overflow-hidden mb-4 relative group">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-zoom-in"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  className={`aspect-square bg-neutral-100 overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? 'border-brand-primary' : 'border-transparent hover:border-brand-secondary'
                  }`}
                  onClick={() => setSelectedImage(idx)}
                >
                  <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2">
            <h1 className="text-3xl md:text-4xl font-primary font-bold text-brand-dark mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl font-medium text-brand-primary">${product.price.toFixed(2)}</span>
              <div className="flex items-center gap-1 text-sm text-brand-dark/60 border-l border-neutral-300 pl-4">
                <div className="flex text-brand-warning">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill={i < product.rating ? "currentColor" : "none"} />
                  ))}
                </div>
                <span>({product.reviews} Reviews)</span>
              </div>
            </div>

            <p className="text-brand-dark/70 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Selectors */}
            <div className="space-y-6 mb-8">
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider mb-2">Size</label>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map(size => (
                    <button 
                      key={size}
                      className={`w-12 h-12 flex items-center justify-center border transition-all ${
                        selectedSize === size 
                          ? 'border-brand-primary bg-brand-primary text-white' 
                          : 'border-neutral-200 hover:border-brand-dark'
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <button className="text-xs text-brand-dark/60 underline mt-2">Size Guide</button>
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-wider mb-2">Quantity</label>
                <div className="flex items-center border border-neutral-200 w-32">
                  <button 
                    className="w-10 h-10 flex items-center justify-center hover:bg-neutral-100"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="flex-1 text-center font-medium">{quantity}</span>
                  <button 
                    className="w-10 h-10 flex items-center justify-center hover:bg-neutral-100"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-8">
              <Button className="flex-1 py-4">Add to Cart</Button>
              <button className="w-14 h-14 border border-brand-dark flex items-center justify-center hover:bg-brand-dark hover:text-white transition-colors">
                <Heart size={20} />
              </button>
              <button className="w-14 h-14 border border-brand-dark flex items-center justify-center hover:bg-brand-dark hover:text-white transition-colors">
                <Share2 size={20} />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-neutral-200">
              <div className="flex flex-col items-center text-center gap-2">
                <Truck size={20} className="text-brand-primary" />
                <span className="text-xs font-medium uppercase tracking-wide">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <ShieldCheck size={20} className="text-brand-primary" />
                <span className="text-xs font-medium uppercase tracking-wide">Lifetime Warranty</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <RefreshCw size={20} className="text-brand-primary" />
                <span className="text-xs font-medium uppercase tracking-wide">Easy Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-20">
          <div className="flex justify-center gap-8 border-b border-neutral-200 mb-12">
            <button className="pb-4 border-b-2 border-brand-primary font-bold uppercase tracking-wider text-brand-dark">
              Product Details
            </button>
            <button className="pb-4 border-b-2 border-transparent hover:border-neutral-300 font-medium uppercase tracking-wider text-brand-dark/50 transition-colors">
              Shipping & Returns
            </button>
            <button className="pb-4 border-b-2 border-transparent hover:border-neutral-300 font-medium uppercase tracking-wider text-brand-dark/50 transition-colors">
              Reviews ({product.reviews})
            </button>
          </div>

          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-primary font-bold mb-6">Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
              {product.specs.map((spec, idx) => (
                <div key={idx} className="flex justify-between py-3 border-b border-neutral-100">
                  <span className="text-brand-dark/60">{spec.label}</span>
                  <span className="font-medium text-brand-dark">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-neutral-50 p-12 rounded-xl">
          <h3 className="text-2xl font-primary font-bold mb-8 text-center">Customer Reviews</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
