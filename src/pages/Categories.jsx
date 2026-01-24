import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

const Categories = () => {
  const categoriesRef = useRef(null);

  useEffect(() => {
    if (categoriesRef.current) {
      gsap.fromTo(categoriesRef.current.children, 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.15, 
          ease: 'power2.out',
          scrollTrigger: {
            trigger: categoriesRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }, []);

  const categories = [
    {
      id: 1,
      name: 'Rings',
      slug: 'rings',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'From engagement rings to statement pieces, our ring collection offers timeless elegance for every occasion.',
      count: '120+ pieces',
      featured: true
    },
    {
      id: 2,
      name: 'Necklaces',
      slug: 'necklaces',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Discover our stunning collection of necklaces and pendants, perfect for adding elegance to any outfit.',
      count: '85+ pieces',
      featured: true
    },
    {
      id: 3,
      name: 'Earrings',
      slug: 'earrings',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'From delicate studs to dramatic drops, our earring collection complements every style and personality.',
      count: '95+ pieces',
      featured: true
    },
    {
      id: 4,
      name: 'Bracelets',
      slug: 'bracelets',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Add a touch of sophistication with our curated selection of bracelets and bangles.',
      count: '70+ pieces',
      featured: false
    },
    {
      id: 5,
      name: 'Watches',
      slug: 'watches',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Luxury timepieces that combine precision engineering with exquisite design.',
      count: '45+ pieces',
      featured: false
    },
    {
      id: 6,
      name: 'Sets',
      slug: 'sets',
      image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Complete jewelry sets designed to coordinate perfectly for a cohesive, elegant look.',
      count: '35+ pieces',
      featured: false
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-gold-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-elegant text-5xl font-semibold text-gray-900 mb-6">
              Jewelry Categories
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore our carefully curated collections of fine jewelry. Each category 
              offers unique pieces designed to celebrate life's precious moments.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div ref={categoriesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/categories/${category.slug}`}
                className="block"
              >
                <div className="jewellery-card group h-full">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-64 object-cover card-image"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Featured Badge */}
                    {category.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-gold-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                          Featured
                        </span>
                      </div>
                    )}
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-4">
                        <ArrowRight className="w-6 h-6 text-gray-900" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-semibold text-2xl text-gray-900 mb-3 group-hover:text-gold-600 transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gold-600 font-medium">
                        {category.count}
                      </span>
                      <span className="text-sm text-gray-500 group-hover:text-gold-600 transition-colors duration-300 flex items-center">
                        Explore Collection
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-elegant text-4xl font-semibold text-gray-900 mb-4">
              Featured Collections
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our most popular jewelry categories, each offering unique 
              styles and designs for every occasion.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categories.filter(cat => cat.featured).slice(0, 2).map((category) => (
              <Link
                key={category.id}
                to={`/categories/${category.slug}`}
                className="group block"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-gold-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                          Featured Collection
                        </span>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <h3 className="font-elegant text-3xl font-semibold text-gray-900 mb-4">
                        {category.name}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {category.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-gold-600 font-semibold text-lg">
                          {category.count}
                        </span>
                        <span className="text-gold-600 font-medium group-hover:translate-x-1 transition-transform duration-300 flex items-center">
                          Shop Now
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-gold-600 to-gold-800">
        <div className="container-custom text-center">
          <h2 className="font-elegant text-4xl font-semibold text-white mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-gold-100 text-lg mb-8 max-w-2xl mx-auto">
            Our expert team can help you find the perfect piece or create something 
            custom just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-gold-800 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              Contact Our Experts
            </Link>
            <Link 
              to="/products" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-gold-800 transition-colors duration-300"
            >
              Browse All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
