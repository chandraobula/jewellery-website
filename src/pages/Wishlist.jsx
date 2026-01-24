import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag } from 'lucide-react';
import Button from '../components/ui/Button';

const Wishlist = () => {
  // Mock wishlist data
  const wishlistItems = [
    {
      id: 2,
      name: 'Rose Gold Pendant',
      price: 850.00,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop',
      inStock: true
    },
    {
      id: 4,
      name: 'Gold Chain Bracelet',
      price: 620.00,
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070&auto=format&fit=crop',
      inStock: false
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="container-custom">
        <h1 className="text-h2 mb-12 text-center">My Wishlist</h1>

        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlistItems.map(item => (
              <div key={item.id} className="group relative bg-white border border-neutral-100 hover:shadow-lg transition-all duration-300">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-brand-dark hover:text-brand-error transition-colors shadow-sm">
                    <Trash2 size={18} />
                  </button>
                  
                  {!item.inStock && (
                    <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
                      <span className="bg-brand-dark text-white px-4 py-2 text-sm font-bold uppercase tracking-wider">Out of Stock</span>
                    </div>
                  )}
                </div>
                
                <div className="p-6 text-center">
                  <h3 className="text-lg font-primary font-medium mb-2">
                    <Link to={`/products/${item.id}`} className="hover:text-brand-primary transition-colors">
                      {item.name}
                    </Link>
                  </h3>
                  <p className="font-medium mb-4">${item.price.toFixed(2)}</p>
                  
                  <Button 
                    variant="secondary" 
                    className="w-full text-sm py-3"
                    disabled={!item.inStock}
                  >
                    {item.inStock ? (
                      <span className="flex items-center justify-center gap-2">
                        <ShoppingBag size={16} /> Add to Cart
                      </span>
                    ) : (
                      'Notify Me'
                    )}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-brand-dark/60 mb-8">Your wishlist is empty.</p>
            <Link to="/new-arrivals">
              <Button variant="primary">Explore Collection</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
