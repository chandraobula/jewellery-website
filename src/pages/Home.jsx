import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import ReviewCard from '../components/ReviewCard';
import Button from '../components/ui/Button';
import { ArrowRight, Truck, ShieldCheck, RefreshCw } from 'lucide-react';
import { getFeaturedProducts, urlFor } from '../lib/sanity';
import { usdToInr } from '../utils/price';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getFeaturedProducts();
        setFeaturedProducts(products);
      } catch (error) {
        console.error("Error fetching products from Sanity:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = [
    { id: 1, name: 'Men\'s Collection', image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=2070&auto=format&fit=crop', link: '/men' },
    { id: 2, name: 'Women\'s Collection', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop', link: '/women' },
    { id: 3, name: 'Kids Collection', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2086&auto=format&fit=crop', link: '/kids' },
  ];

  // Fallback mock products if API fails or returns empty
  const mockProducts = [
    { id: 1, name: 'Classic White T-Shirt', price: 599, discountedPrice: 449, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop', category: 'Tops', isNew: true },
    { id: 2, name: 'Slim Fit Jeans', price: 1999, discountedPrice: 1499, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=2070&auto=format&fit=crop', category: 'Bottoms', isNew: false },
    { id: 3, name: 'Summer Dress', price: 1299, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1974&auto=format&fit=crop', category: 'Dresses', isNew: true },
    { id: 4, name: 'Denim Jacket', price: 2499, discountedPrice: 1999, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=2070&auto=format&fit=crop', category: 'Outerwear', isNew: false },
  ];

  const displayProducts = featuredProducts.length > 0 
    ? featuredProducts.map(p => ({
        id: p._id,
        name: p.title,
        price: p.discountedPrice || p.price,
        discountedPrice: p.discountedPrice ? p.price : undefined,
        image: p.images && p.images[0] ? urlFor(p.images[0]).width(600).url() : 'https://via.placeholder.com/600',
        category: p.category?.title || 'Fashion',
        isNew: p.isNew,
        isOnSale: !!p.discountedPrice,
        variants: p.variants || []
      }))
    : mockProducts;

  const reviews = [
    { 
      id: 1, 
      name: 'Sarah Mitchell', 
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop', 
      rating: 5, 
      comment: "The quality is amazing! The fabric feels so soft and the fit is perfect. I've already ordered more pieces.", 
      date: 'Oct 12, 2024',
      product: 'Classic White T-Shirt'
    },
    { 
      id: 2, 
      name: 'Emily Chen', 
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop', 
      rating: 5, 
      comment: "Love these jeans! They fit perfectly and are so comfortable. The quality is great for the price.", 
      date: 'Sep 28, 2024',
      product: 'Slim Fit Jeans'
    },
    { 
      id: 3, 
      name: 'Jessica Reynolds', 
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1974&auto=format&fit=crop', 
      rating: 4, 
      comment: "This dress is gorgeous! Perfect for summer. The material is breathable and the fit is true to size.", 
      date: 'Nov 05, 2024',
      product: 'Summer Dress'
    },
  ];

  return (
    <div className="bg-white">
      <Hero />

      {/* Features / Trust Badges */}
      <section className="py-8 sm:py-12 border-b border-neutral-100 bg-neutral-50">
        <div className="container-custom grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center px-4">
          <div className="flex flex-col items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-secondary/20 flex items-center justify-center text-brand-dark">
              <Truck size={20} className="sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-primary font-bold text-base sm:text-lg">Free Shipping</h3>
            <p className="text-xs sm:text-sm text-brand-dark/70">On orders over ₹500</p>
          </div>
          <div className="flex flex-col items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-secondary/20 flex items-center justify-center text-brand-dark">
              <ShieldCheck size={20} className="sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-primary font-bold text-base sm:text-lg">Quality Guaranteed</h3>
            <p className="text-xs sm:text-sm text-brand-dark/70">Premium fabrics & craftsmanship</p>
          </div>
          <div className="flex flex-col items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-secondary/20 flex items-center justify-center text-brand-dark">
              <RefreshCw size={20} className="sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-primary font-bold text-base sm:text-lg">Easy Returns</h3>
            <p className="text-xs sm:text-sm text-brand-dark/70">30-day money back guarantee</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32">
        <div className="container-custom px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <span className="text-xs sm:text-sm font-accent font-bold tracking-widest uppercase text-brand-primary mb-2 sm:mb-3 block">Shop</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-h2 text-brand-dark">Shop by Collection</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {categories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-neutral-50">
        <div className="container-custom px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 sm:mb-8 md:mb-12">
            <div className="mb-4 md:mb-0">
              <span className="text-xs sm:text-sm font-accent font-bold tracking-widest uppercase text-brand-primary mb-2 sm:mb-3 block">Trending Now</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-h2 text-brand-dark">Most Loved Pieces</h2>
            </div>
            <Button variant="secondary" className="hidden md:flex gap-2 group text-sm">
              View All <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {loading ? (
            <div className="text-center py-12">Loading products...</div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {displayProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          <div className="mt-8 sm:mt-12 text-center md:hidden">
            <Button variant="secondary" className="w-full text-sm">View All</Button>
          </div>
        </div>
      </section>

      {/* Brand Story / Editorial */}
      <section className="py-24 overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="aspect-[4/5] bg-neutral-200 relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop" 
                  alt="Fashion collection" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-2/3 aspect-square bg-brand-secondary/20 -z-0" />
              <div className="absolute -top-8 -left-8 w-2/3 aspect-square border border-brand-dark/10 -z-0" />
            </div>
            
            <div className="lg:w-1/2">
              <span className="text-sm font-accent font-bold tracking-widest uppercase text-brand-primary mb-3 block">Our Story</span>
              <h2 className="text-h2 text-brand-dark mb-6">Fashion for <br /><span className="italic font-light text-brand-accent">Every Style</span></h2>
              <p className="text-body-lg text-brand-dark/70 mb-6">
                At FashionHub, we believe that fashion is a form of self-expression. Our curated collections bring you the latest trends, timeless classics, and everything in between. From casual everyday wear to statement pieces, we've got you covered.
              </p>
              <p className="text-body text-brand-dark/70 mb-10">
                We source quality fabrics and work with trusted manufacturers to ensure every piece meets our standards for comfort, style, and durability. Your style journey starts here.
              </p>
              <Button variant="primary">Read Our Story</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding bg-brand-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-sm font-accent font-bold tracking-widest uppercase text-brand-primary mb-3 block">Testimonials</span>
            <h2 className="text-h2 text-brand-dark">Loved by You</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 sm:py-16 md:py-24 bg-brand-dark text-white text-center">
        <div className="container-custom max-w-3xl px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-primary mb-3 sm:mb-4">Stay in Style</h2>
          <p className="text-white/70 mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base md:text-lg">
            Subscribe to get the latest fashion trends, exclusive deals, and style tips delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 bg-transparent border border-white/30 px-4 sm:px-6 py-3 sm:py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-brand-primary transition-colors text-sm sm:text-base"
            />
            <Button variant="primary" className="!bg-white !text-brand-dark hover:!bg-brand-primary hover:!text-white text-sm sm:text-base px-6 sm:px-8">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
