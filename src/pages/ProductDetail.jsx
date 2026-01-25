import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Heart, Share2, Truck, ShieldCheck, RefreshCw, Minus, Plus, X, Ruler } from 'lucide-react';
import Button from '../components/ui/Button';
import ReviewCard from '../components/ReviewCard';
import { getProductBySlug, getSizeGuide, urlFor } from '../lib/sanity';
import { formatPrice } from '../utils/price';

const ProductDetail = () => {
  const { slug } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [activeTab, setActiveTab] = useState('details');
  const [product, setProduct] = useState(null);
  const [sizeGuide, setSizeGuide] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductBySlug(slug);
        if (data) {
          setProduct(data);
          // Set default color and size
          if (data.variants && data.variants.length > 0) {
            setSelectedColor(data.variants[0]);
            if (data.variants[0].sizes && data.variants[0].sizes.length > 0) {
              setSelectedSize(data.variants[0].sizes[0].size);
            }
          }
          // Fetch size guide
          if (data.category?._id) {
            const guide = await getSizeGuide(data.category._id, data.gender);
            setSizeGuide(guide);
          }
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [slug]);

  // Get available sizes for selected color
  const availableSizes = selectedColor?.sizes || [];
  const isSizeInStock = (size) => {
    const sizeVariant = availableSizes.find(s => s.size === size);
    return sizeVariant && sizeVariant.stock > 0;
  };

  // Get images for selected color variant
  const displayImages = selectedColor?.images?.length > 0 
    ? selectedColor.images 
    : (product?.images || []);

  // Calculate discount percentage
  const discountPercent = product?.discountedPrice 
    ? Math.round(((product.price - product.discountedPrice) / product.price) * 100)
    : 0;

  // Get fashion specifications
  const getFashionSpecs = () => {
    if (!product) return [];
    const specs = [];
    if (product.brand) specs.push({ label: 'Brand', value: product.brand });
    if (product.fabric) specs.push({ label: 'Fabric', value: product.fabric });
    if (product.fit) specs.push({ label: 'Fit', value: product.fit });
    if (product.sleeveType) specs.push({ label: 'Sleeve', value: product.sleeveType });
    if (product.necklineType) specs.push({ label: 'Neckline', value: product.necklineType });
    if (product.pattern) specs.push({ label: 'Pattern', value: product.pattern });
    if (product.season) specs.push({ label: 'Season', value: product.season });
    if (product.countryOfOrigin) specs.push({ label: 'Origin', value: product.countryOfOrigin });
    return specs;
  };

  if (loading) {
    return (
      <div className="pt-24 pb-16 bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary mx-auto mb-4"></div>
          <p className="text-brand-dark/60">Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="pt-24 pb-16 bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Product Not Found</h2>
          <p className="text-brand-dark/60">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="container-custom">
        {/* Breadcrumbs */}
        <div className="text-sm text-brand-dark/50 mb-8">
          Home / {product.category?.title || 'Products'} / <span className="text-brand-dark">{product.title}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mb-20">
          {/* Gallery */}
          <div className="lg:w-1/2">
            <div className="aspect-square bg-neutral-100 overflow-hidden mb-4 relative group">
              <img 
                src={displayImages[selectedImage] ? urlFor(displayImages[selectedImage]).width(800).url() : 'https://via.placeholder.com/800'} 
                alt={product.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-zoom-in"
              />
              {product.isOnSale && (
                <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 text-sm font-bold">
                  {discountPercent}% OFF
                </span>
              )}
            </div>
            <div className="grid grid-cols-4 gap-4">
              {displayImages.map((img, idx) => (
                <button 
                  key={idx}
                  className={`aspect-square bg-neutral-100 overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? 'border-brand-primary' : 'border-transparent hover:border-brand-secondary'
                  }`}
                  onClick={() => setSelectedImage(idx)}
                >
                  <img 
                    src={img ? urlFor(img).width(200).url() : 'https://via.placeholder.com/200'} 
                    alt={`View ${idx + 1}`} 
                    className="w-full h-full object-cover" 
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2">
            <div className="mb-2">
              <span className="text-sm text-brand-dark/60 uppercase tracking-wider">{product.brand}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-primary font-bold text-brand-dark mb-4">{product.title}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-medium text-brand-primary">
                  {formatPrice(product.discountedPrice || product.price)}
                </span>
                {product.discountedPrice && (
                  <span className="text-lg text-brand-dark/50 line-through">
                    {formatPrice(product.price)}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1 text-sm text-brand-dark/60 border-l border-neutral-300 pl-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill={i < (product.rating || 0) ? "currentColor" : "none"} />
                  ))}
                </div>
                <span>({product.reviews || 0} Reviews)</span>
              </div>
            </div>

            {/* Model Info */}
            {product.modelInfo && (
              <div className="mb-6 p-4 bg-neutral-50 rounded-lg">
                <p className="text-sm text-brand-dark/70">
                  <span className="font-medium">Model Info:</span> Height {product.modelInfo.height}, 
                  Wearing Size {product.modelInfo.wearingSize}
                </p>
              </div>
            )}

            {/* Color Selector */}
            {product.variants && product.variants.length > 0 && (
              <div className="mb-6">
                <label className="block text-sm font-bold uppercase tracking-wider mb-3">
                  Color: <span className="normal-case font-normal text-brand-dark/70">{selectedColor?.color?.name}</span>
                </label>
                <div className="flex flex-wrap gap-3">
                  {product.variants.map((variant, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedColor(variant);
                        setSelectedSize(null);
                        setSelectedImage(0);
                      }}
                      className={`w-12 h-12 rounded-full border-2 transition-all ${
                        selectedColor === variant
                          ? 'border-brand-primary scale-110'
                          : 'border-neutral-300 hover:border-brand-dark'
                      }`}
                      style={{ backgroundColor: variant.color?.hex || '#ccc' }}
                      title={variant.color?.name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size Selector */}
            {availableSizes.length > 0 && (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <label className="block text-sm font-bold uppercase tracking-wider">Size</label>
                  <button 
                    onClick={() => setShowSizeGuide(true)}
                    className="text-xs text-brand-dark/60 underline flex items-center gap-1 hover:text-brand-primary"
                  >
                    <Ruler size={12} /> Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-3">
                  {availableSizes.map((sizeVariant, idx) => {
                    const isOutOfStock = sizeVariant.stock === 0;
                    const isSelected = selectedSize === sizeVariant.size;
                    return (
                      <button
                        key={idx}
                        disabled={isOutOfStock}
                        onClick={() => setSelectedSize(sizeVariant.size)}
                        className={`w-14 h-14 flex items-center justify-center border transition-all ${
                          isSelected
                            ? 'border-brand-primary bg-brand-primary text-white'
                            : isOutOfStock
                            ? 'border-neutral-200 text-neutral-400 cursor-not-allowed opacity-50'
                            : 'border-neutral-200 hover:border-brand-dark'
                        }`}
                      >
                        {sizeVariant.size}
                      </button>
                    );
                  })}
                </div>
                {selectedSize && (
                  <p className="text-xs text-brand-dark/60 mt-2">
                    {isSizeInStock(selectedSize) ? 'In Stock' : 'Out of Stock'}
                  </p>
                )}
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm font-bold uppercase tracking-wider mb-2">Quantity</label>
              <div className="flex items-center border border-neutral-200 w-32">
                <button 
                  className="w-10 h-10 flex items-center justify-center hover:bg-neutral-100 disabled:opacity-50"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus size={16} />
                </button>
                <span className="flex-1 text-center font-medium">{quantity}</span>
                <button 
                  className="w-10 h-10 flex items-center justify-center hover:bg-neutral-100 disabled:opacity-50"
                  onClick={() => setQuantity(quantity + 1)}
                  disabled={!selectedSize || !isSizeInStock(selectedSize) || quantity >= 10}
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-8">
              <Button 
                className="flex-1 py-4"
                disabled={!selectedSize || !selectedColor || !isSizeInStock(selectedSize)}
              >
                {!selectedSize ? 'Select Size' : !isSizeInStock(selectedSize) ? 'Out of Stock' : 'Add to Cart'}
              </Button>
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
                <span className="text-xs font-medium uppercase tracking-wide">Easy Returns</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <RefreshCw size={20} className="text-brand-primary" />
                <span className="text-xs font-medium uppercase tracking-wide">30 Day Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-20">
          <div className="flex justify-center gap-8 border-b border-neutral-200 mb-12">
            <button 
              onClick={() => setActiveTab('details')}
              className={`pb-4 border-b-2 transition-colors uppercase tracking-wider ${
                activeTab === 'details' 
                  ? 'border-brand-primary font-bold text-brand-dark' 
                  : 'border-transparent hover:border-neutral-300 font-medium text-brand-dark/50'
              }`}
            >
              Product Details
            </button>
            <button 
              onClick={() => setActiveTab('shipping')}
              className={`pb-4 border-b-2 transition-colors uppercase tracking-wider ${
                activeTab === 'shipping' 
                  ? 'border-brand-primary font-bold text-brand-dark' 
                  : 'border-transparent hover:border-neutral-300 font-medium text-brand-dark/50'
              }`}
            >
              Shipping & Returns
            </button>
            <button 
              onClick={() => setActiveTab('reviews')}
              className={`pb-4 border-b-2 transition-colors uppercase tracking-wider ${
                activeTab === 'reviews' 
                  ? 'border-brand-primary font-bold text-brand-dark' 
                  : 'border-transparent hover:border-neutral-300 font-medium text-brand-dark/50'
              }`}
            >
              Reviews ({product.reviews || 0})
            </button>
          </div>

          <div className="max-w-3xl mx-auto">
            {activeTab === 'details' && (
              <>
                <h3 className="text-xl font-primary font-bold mb-6">Product Information</h3>
                <div className="prose max-w-none mb-8">
                  {product.description && (
                    <div className="text-brand-dark/70 leading-relaxed mb-6">
                      {typeof product.description === 'string' ? product.description : 'Product description'}
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-primary font-bold mb-6">Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
                  {getFashionSpecs().map((spec, idx) => (
                    <div key={idx} className="flex justify-between py-3 border-b border-neutral-100">
                      <span className="text-brand-dark/60 capitalize">{spec.label}</span>
                      <span className="font-medium text-brand-dark capitalize">{spec.value}</span>
                    </div>
                  ))}
                </div>
                {product.careInstructions && (
                  <div className="mt-8 p-4 bg-neutral-50 rounded-lg">
                    <h4 className="font-bold mb-2">Care Instructions</h4>
                    <p className="text-sm text-brand-dark/70">{product.careInstructions}</p>
                  </div>
                )}
              </>
            )}

            {activeTab === 'shipping' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-primary font-bold mb-4">Shipping Information</h3>
                  <ul className="space-y-2 text-brand-dark/70">
                    <li>• Free shipping on orders over $50</li>
                    <li>• Standard delivery: 3-5 business days</li>
                    <li>• Express delivery: 1-2 business days (additional charge)</li>
                    <li>• International shipping available</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-primary font-bold mb-4">Returns & Exchanges</h3>
                  <ul className="space-y-2 text-brand-dark/70">
                    <li>• 30-day return policy</li>
                    <li>• Items must be unworn and in original packaging</li>
                    <li>• Free return pickup available</li>
                    <li>• Exchanges available for different sizes/colors</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="bg-neutral-50 p-12 rounded-xl">
                <h3 className="text-2xl font-primary font-bold mb-8 text-center">Customer Reviews</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Reviews will be loaded from Sanity */}
                  <p className="text-center text-brand-dark/60 col-span-2">No reviews yet. Be the first to review!</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Size Guide Modal */}
      {showSizeGuide && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-neutral-200 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold">Size Guide</h2>
              <button 
                onClick={() => setShowSizeGuide(false)}
                className="w-8 h-8 flex items-center justify-center hover:bg-neutral-100 rounded-full"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6">
              {sizeGuide ? (
                <div>
                  <p className="text-brand-dark/70 mb-6">{sizeGuide.title}</p>
                  {sizeGuide.measurements && sizeGuide.measurements.length > 0 && (
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-2">Size</th>
                            <th className="text-left p-2">Chest (in)</th>
                            <th className="text-left p-2">Waist (in)</th>
                            <th className="text-left p-2">Hips (in)</th>
                            {sizeGuide.measurements[0]?.length && <th className="text-left p-2">Length (in)</th>}
                          </tr>
                        </thead>
                        <tbody>
                          {sizeGuide.measurements.map((measurement, idx) => (
                            <tr key={idx} className="border-b">
                              <td className="p-2 font-medium">{measurement.size}</td>
                              <td className="p-2">{measurement.chest || '-'}</td>
                              <td className="p-2">{measurement.waist || '-'}</td>
                              <td className="p-2">{measurement.hips || '-'}</td>
                              {measurement.length && <td className="p-2">{measurement.length}</td>}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-brand-dark/60">Size guide not available for this product.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
