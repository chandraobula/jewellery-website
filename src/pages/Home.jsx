import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import ReviewCard from '../components/ReviewCard';
import Button from '../components/ui/Button';
import { ArrowRight, Truck, ShieldCheck, RefreshCw } from 'lucide-react';
import { getFeaturedProducts, urlFor } from '../lib/sanity';

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
    { id: 1, name: 'Engagement Rings', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop', link: '/rings/engagement' },
    { id: 2, name: 'Fine Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=1974&auto=format&fit=crop', link: '/necklaces' },
    { id: 3, name: 'Luxury Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1974&auto=format&fit=crop', link: '/earrings' },
  ];

  // Fallback mock products if API fails or returns empty
  const mockProducts = [
    { id: 1, name: 'Ethereal Diamond Ring', price: 1299.00, image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=2080&auto=format&fit=crop', category: 'Rings', isNew: true },
    { id: 2, name: 'Rose Gold Pendant', price: 850.00, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop', category: 'Necklaces', isNew: false },
    { id: 3, name: 'Pearl Drop Earrings', price: 450.00, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1974&auto=format&fit=crop', category: 'Earrings', isNew: true },
    { id: 4, name: 'Gold Chain Bracelet', price: 620.00, image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070&auto=format&fit=crop', category: 'Bracelets', isNew: false },
  ];

  const displayProducts = featuredProducts.length > 0 
    ? featuredProducts.map(p => ({
        id: p._id,
        name: p.title,
        price: p.price,
        image: p.images && p.images[0] ? urlFor(p.images[0]).width(600).url() : 'https://via.placeholder.com/600',
        category: p.category?.title || 'Jewellery',
        isNew: p.isNew
      }))
    : mockProducts;

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
    },
    { 
      id: 3, 
      name: 'Jessica Reynolds', 
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1974&auto=format&fit=crop', 
      rating: 4, 
      comment: "Beautiful packaging and fast delivery. The rose gold finish is exactly what I was looking for.", 
      date: 'Nov 05, 2024',
      product: 'Rose Gold Pendant'
    },
  ];

  return (
    <div className="bg-white">
      <Hero />

      {/* Features / Trust Badges */}
      <section className="py-12 border-b border-neutral-100 bg-neutral-50">
        <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-brand-secondary/20 flex items-center justify-center text-brand-dark">
              <Truck size={24} />
            </div>
            <h3 className="font-primary font-bold text-lg">Free Global Shipping</h3>
            <p className="text-sm text-brand-dark/70">On all orders over $200</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-brand-secondary/20 flex items-center justify-center text-brand-dark">
              <ShieldCheck size={24} />
            </div>
            <h3 className="font-primary font-bold text-lg">Lifetime Warranty</h3>
            <p className="text-sm text-brand-dark/70">Guaranteed quality & craftsmanship</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-brand-secondary/20 flex items-center justify-center text-brand-dark">
              <RefreshCw size={24} />
            </div>
            <h3 className="font-primary font-bold text-lg">Easy Returns</h3>
            <p className="text-sm text-brand-dark/70">30-day money back guarantee</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-sm font-accent font-bold tracking-widest uppercase text-brand-primary mb-3 block">Collections</span>
            <h2 className="text-h2 text-brand-dark">Shop by Category</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-sm font-accent font-bold tracking-widest uppercase text-brand-primary mb-3 block">Trending Now</span>
              <h2 className="text-h2 text-brand-dark">Most Loved Pieces</h2>
            </div>
            <Button variant="secondary" className="hidden md:flex gap-2 group">
              View All <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {loading ? (
            <div className="text-center py-12">Loading products...</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {displayProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          <div className="mt-12 text-center md:hidden">
            <Button variant="secondary" className="w-full">View All</Button>
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
                  src="https://images.unsplash.com/photo-1617038224558-28ad3fb558a7?q=80&w=1974&auto=format&fit=crop" 
                  alt="Artisan working on jewellery" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-2/3 aspect-square bg-brand-secondary/20 -z-0" />
              <div className="absolute -top-8 -left-8 w-2/3 aspect-square border border-brand-dark/10 -z-0" />
            </div>
            
            <div className="lg:w-1/2">
              <span className="text-sm font-accent font-bold tracking-widest uppercase text-brand-primary mb-3 block">Our Story</span>
              <h2 className="text-h2 text-brand-dark mb-6">Handcrafted with <br /><span className="italic font-light text-brand-accent">Passion & Precision</span></h2>
              <p className="text-body-lg text-brand-dark/70 mb-6">
                At Lumière, we believe that jewellery is more than just an accessory—it's an expression of your unique story. Each piece is meticulously handcrafted by our master artisans using ethically sourced materials.
              </p>
              <p className="text-body text-brand-dark/70 mb-10">
                From the initial sketch to the final polish, we ensure that every detail meets our uncompromising standards of luxury and sustainability.
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
      <section className="py-24 bg-brand-dark text-white text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-primary mb-4">Join the Lumière List</h2>
          <p className="text-white/70 mb-10 text-lg">
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 bg-transparent border border-white/30 px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-brand-primary transition-colors"
            />
            <Button variant="primary" className="!bg-white !text-brand-dark hover:!bg-brand-primary hover:!text-white">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
