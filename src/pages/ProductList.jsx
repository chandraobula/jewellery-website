import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import FiltersSidebar from '../components/FiltersSidebar';
import Marquee from '../components/Marquee';
import { Filter, ChevronDown } from 'lucide-react';
import { getProducts, getProductsCount } from '../lib/sanity';
import { getProductsByCategory, getBestSellers, tShirts, designerWear, bestSellers, accessories } from '../data/dummyProducts';

const ProductList = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sortBy, setSortBy] = useState('newest');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        // Get filters from URL params
        const subcategory = searchParams.get('subcategory');
        const sortByParam = searchParams.get('sortBy') || sortBy;
        
        // Determine which data to use
        let productsData = [];
        
        // Check if this is Best Sellers page (sortBy=popular without subcategory)
        const isBestSellers = (sortByParam === 'popular' || searchParams.get('sortBy') === 'popular') && !subcategory;
        
        if (subcategory === 't-shirt') {
          productsData = getProductsByCategory('t-shirt', sortByParam);
        } else if (subcategory === 'dress') {
          productsData = getProductsByCategory('dress', sortByParam);
        } else if (subcategory === 'scarf' || subcategory === 'belt' || subcategory === 'bag' || subcategory === 'hat') {
          // Show all accessories when any accessory subcategory is selected
          productsData = getProductsByCategory('scarf', sortByParam);
        } else if (isBestSellers) {
          productsData = getBestSellers(sortByParam);
        } else {
          // Try to fetch from Sanity, fallback to dummy data
          try {
            const urlFilters = {
              gender: searchParams.get('gender') || undefined,
              category: searchParams.get('category') || undefined,
              subcategory: subcategory || undefined,
              brand: searchParams.get('brand') || undefined,
              size: searchParams.get('size') || undefined,
              color: searchParams.get('color') || undefined,
              fabric: searchParams.get('fabric') || undefined,
              fit: searchParams.get('fit') || undefined,
              occasion: searchParams.get('occasion')?.split(',') || undefined,
              season: searchParams.get('season') || undefined,
              minPrice: searchParams.get('minPrice') ? Number(searchParams.get('minPrice')) : undefined,
              maxPrice: searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : undefined,
              discountMin: searchParams.get('discountMin') ? Number(searchParams.get('discountMin')) : undefined,
              inStock: searchParams.get('inStock') === 'true' ? true : undefined,
              search: searchParams.get('search') || undefined,
              sortBy: sortByParam,
            };
            
            const [sanityProducts, count] = await Promise.all([
              getProducts(urlFilters, { page: 0, limit: 24 }),
              getProductsCount(urlFilters)
            ]);
            
            if (sanityProducts && sanityProducts.length > 0) {
              productsData = sanityProducts;
              setTotalCount(count || 0);
            } else {
              throw new Error('No products from Sanity');
            }
          } catch (error) {
            // Use dummy data
            productsData = getProductsByCategory(subcategory || 'all', sortByParam);
          }
        }
        
        // Apply additional filters
        let filteredProducts = productsData;
        
        // Apply filters
        const gender = searchParams.get('gender');
        if (gender) {
          const genders = gender.split(',').filter(Boolean);
          filteredProducts = filteredProducts.filter(p => 
            genders.includes(p.gender) || (genders.includes('unisex') && p.gender === 'unisex')
          );
        }
        
        const category = searchParams.get('category');
        if (category) {
          const categories = category.split(',').filter(Boolean);
          filteredProducts = filteredProducts.filter(p => 
            categories.includes(p.subcategory)
          );
        }
        
        const minPrice = searchParams.get('minPrice');
        const maxPrice = searchParams.get('maxPrice');
        if (minPrice || maxPrice) {
          filteredProducts = filteredProducts.filter(p => {
            const price = p.discountedPrice || p.price;
            return (!minPrice || price >= Number(minPrice)) && (!maxPrice || price <= Number(maxPrice));
          });
        }
        
        const color = searchParams.get('color');
        if (color) {
          const colors = color.split(',').filter(Boolean);
          filteredProducts = filteredProducts.filter(p => 
            p.variants?.some(v => 
              colors.some(c => 
                v.color?.name?.toLowerCase().includes(c.toLowerCase()) || 
                v.color?.hex?.toLowerCase() === c.toLowerCase()
              )
            )
          );
        }
        
        const size = searchParams.get('size');
        if (size) {
          const sizes = size.split(',').filter(Boolean);
          filteredProducts = filteredProducts.filter(p => 
            p.variants?.some(v => 
              v.sizes?.some(s => sizes.includes(s.size) && s.stock > 0)
            )
          );
        }
        
        const brand = searchParams.get('brand');
        if (brand) {
          const brands = brand.split(',').filter(Boolean);
          filteredProducts = filteredProducts.filter(p => 
            brands.some(b => p.brand?.toLowerCase().includes(b.toLowerCase()))
          );
        }
        
        const fit = searchParams.get('fit');
        if (fit) {
          const fits = fit.split(',').filter(Boolean);
          filteredProducts = filteredProducts.filter(p => 
            fits.includes(p.fit?.toLowerCase())
          );
        }
        
        const fabric = searchParams.get('fabric');
        if (fabric) {
          const fabrics = fabric.split(',').filter(Boolean);
          filteredProducts = filteredProducts.filter(p => 
            fabrics.some(f => p.fabric?.toLowerCase().includes(f.toLowerCase()))
          );
        }
        
        const occasion = searchParams.get('occasion');
        if (occasion) {
          const occasions = occasion.split(',').filter(Boolean);
          filteredProducts = filteredProducts.filter(p => 
            occasions.includes(p.occasion?.toLowerCase())
          );
        }
        
        const discountMin = searchParams.get('discountMin');
        if (discountMin) {
          filteredProducts = filteredProducts.filter(p => {
            if (!p.discountedPrice || !p.price) return false;
            const discount = ((p.price - p.discountedPrice) / p.price) * 100;
            return discount >= Number(discountMin);
          });
        }
        
        setProducts(filteredProducts);
        setTotalCount(filteredProducts.length);
      } catch (error) {
        console.error('Error fetching products:', error);
        // Fallback to dummy data
        const subcategory = searchParams.get('subcategory');
        const productsData = getProductsByCategory(subcategory || 'all', sortBy);
        setProducts(productsData);
        setTotalCount(productsData.length);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchParams, sortBy, location.pathname]);

  const handleFilterChange = (filterType, value) => {
    if (filterType === 'apply') {
      // Apply filters logic
      const newFilters = { ...filters, ...value };
      setFilters(newFilters);
    } else if (filterType === 'clear') {
      setFilters({});
    }
  };

  const sortOptions = [
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'popular', label: 'Popular' },
    { value: 'rating', label: 'Best Rating' },
  ];

  // Determine page title based on route and params
  const getPageTitle = () => {
    const subcategory = searchParams.get('subcategory');
    const path = location.pathname;
    
    if (subcategory === 't-shirt') return 'T-Shirts';
    if (subcategory === 'dress') return 'Designer Wear';
    if (subcategory === 'scarf' || subcategory === 'belt' || subcategory === 'bag' || subcategory === 'hat') return 'Accessories';
    if (searchParams.get('sortBy') === 'popular' || path.includes('best-sellers')) return 'Best Sellers';
    if (path.includes('/men')) return 'Men\'s Collection';
    if (path.includes('/women')) return 'Women\'s Collection';
    if (path.includes('/kids')) return 'Kids Collection';
    if (path.includes('/new-arrivals')) return 'New Arrivals';
    if (path.includes('/sale')) return 'Sale';
    return 'All Products';
  };

  // Marquee items
  const marqueeItems = [
    'FLAT ₹500 OFF ON ORDERS ₹2000+',
    'FLAT ₹750 OFF ON ORDERS ₹3000+',
    'FLAT ₹500 OFF ON ORDERS ₹2000+',
    'FLAT ₹750 OFF ON ORDERS ₹3000+',
  ];
  
  // Use faster speed for marquee
  const marqueeSpeed = 15;

  return (
    <div className="pt-20 sm:pt-24 pb-16 min-h-screen bg-white">
      {/* Marquee Banner */}
      <Marquee items={marqueeItems} speed={marqueeSpeed} />

      <div className="container-custom flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 relative px-4 mt-4 sm:mt-6">
        {/* Sidebar Filters */}
        <FiltersSidebar 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)}
          filters={filters}
          onFilterChange={handleFilterChange}
        />

        {/* Product Grid */}
        <div className="flex-1">
          {/* Toolbar */}
          <div className="flex justify-between items-center mb-4 sm:mb-6 md:mb-8 pb-3 sm:pb-4 border-b border-neutral-100">
            <button 
              className="lg:hidden flex items-center gap-2 text-xs sm:text-sm font-medium uppercase tracking-wider px-3 py-2 border border-neutral-200 rounded"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Filter size={16} className="sm:w-4 sm:h-4" /> <span className="hidden xs:inline">Filters</span>
            </button>
            
            <p className="hidden lg:block text-sm text-brand-dark/60">
              Showing {totalCount || products.length} {totalCount === 1 ? 'result' : 'results'}
            </p>

            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-xs sm:text-sm text-brand-dark/60 hidden md:inline">Sort by:</span>
              <div className="relative group">
                <button className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium uppercase tracking-wider hover:text-brand-primary px-2 sm:px-3 py-1 sm:py-2 border border-neutral-200 rounded">
                  <span className="hidden sm:inline">{sortOptions.find(opt => opt.value === sortBy)?.label || 'Newest'}</span>
                  <span className="sm:hidden">Sort</span>
                  <ChevronDown size={12} className="sm:w-3 sm:h-3" />
                </button>
                <div className="absolute right-0 top-full w-40 sm:w-48 bg-white shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20 rounded-lg border border-neutral-200">
                  {sortOptions.map(opt => (
                    <button 
                      key={opt.value}
                      className="block w-full text-left px-4 py-2 text-xs sm:text-sm hover:bg-brand-light hover:text-brand-primary transition-colors"
                      onClick={() => setSortBy(opt.value)}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-[3/4] bg-neutral-200 rounded mb-2 sm:mb-4"></div>
                  <div className="h-3 sm:h-4 bg-neutral-200 rounded w-3/4 mb-2"></div>
                  <div className="h-3 sm:h-4 bg-neutral-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : products.length > 0 ? (
            <>
              {/* Grid - Mobile App Style */}
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                {products.map(product => (
                  <ProductCard key={product._id || product.id} product={product} />
                ))}
              </div>
              
              {/* Load More */}
              {products.length < totalCount && (
                <div className="mt-8 sm:mt-12 md:mt-16 text-center">
                  <button className="btn-secondary px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base">Load More Products</button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12 sm:py-16">
              <p className="text-brand-dark/60 text-base sm:text-lg mb-2 sm:mb-4">No products found</p>
              <p className="text-brand-dark/40 text-sm">Try adjusting your filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
