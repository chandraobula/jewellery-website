import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import FiltersSidebar from '../components/FiltersSidebar';
import { Filter, ChevronDown } from 'lucide-react';

const ProductList = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  // Mock products data
  const products = [
    { id: 1, name: 'Ethereal Diamond Ring', price: 1299.00, image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=2080&auto=format&fit=crop', category: 'Rings', isNew: true },
    { id: 2, name: 'Rose Gold Pendant', price: 850.00, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop', category: 'Necklaces', isNew: false },
    { id: 3, name: 'Pearl Drop Earrings', price: 450.00, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1974&auto=format&fit=crop', category: 'Earrings', isNew: true },
    { id: 4, name: 'Gold Chain Bracelet', price: 620.00, image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070&auto=format&fit=crop', category: 'Bracelets', isNew: false },
    { id: 5, name: 'Sapphire Studs', price: 890.00, image: 'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=1974&auto=format&fit=crop', category: 'Earrings', isNew: false },
    { id: 6, name: 'Vintage Gold Band', price: 550.00, image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop', category: 'Rings', isNew: false },
    { id: 7, name: 'Emerald Necklace', price: 1450.00, image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1974&auto=format&fit=crop', category: 'Necklaces', isNew: true },
    { id: 8, name: 'Diamond Tennis Bracelet', price: 2200.00, image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2075&auto=format&fit=crop', category: 'Bracelets', isNew: false },
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-white">
      {/* Header */}
      <div className="bg-brand-light py-12 mb-8">
        <div className="container-custom text-center">
          <h1 className="text-h2 mb-4">All Collections</h1>
          <p className="text-brand-dark/70 max-w-2xl mx-auto">
            Explore our curated selection of fine jewellery, designed to celebrate life's most precious moments.
          </p>
        </div>
      </div>

      <div className="container-custom flex gap-8 relative">
        {/* Sidebar Filters */}
        <FiltersSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        {/* Product Grid */}
        <div className="flex-1">
          {/* Toolbar */}
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-neutral-100">
            <button 
              className="lg:hidden flex items-center gap-2 text-sm font-medium uppercase tracking-wider"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Filter size={18} /> Filters
            </button>
            
            <p className="hidden lg:block text-sm text-brand-dark/60">
              Showing {products.length} results
            </p>

            <div className="flex items-center gap-3">
              <span className="text-sm text-brand-dark/60 hidden sm:inline">Sort by:</span>
              <div className="relative group">
                <button className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider hover:text-brand-primary">
                  {sortBy === 'featured' ? 'Featured' : sortBy} <ChevronDown size={14} />
                </button>
                <div className="absolute right-0 top-full w-40 bg-white shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
                  {['Featured', 'Newest', 'Price: Low to High', 'Price: High to Low'].map(opt => (
                    <button 
                      key={opt}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-brand-light hover:text-brand-primary"
                      onClick={() => setSortBy(opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {/* Load More */}
          <div className="mt-16 text-center">
            <button className="btn-secondary">Load More Products</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
