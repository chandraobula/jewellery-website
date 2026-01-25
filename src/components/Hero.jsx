import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop',
      title: 'New Collection 2025',
      heading: 'Style for Every',
      subheading: 'Occasion',
      description: 'Discover our latest fashion collection designed for the modern lifestyle. From casual wear to formal attire, find your perfect style.',
      cta: 'Shop Now',
      link: '/new-arrivals'
    },
    {
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop',
      title: 'Winter Collection',
      heading: 'Layer Up in',
      subheading: 'Style',
      description: 'Stay warm and stylish with our cozy winter collection. Premium fabrics and modern designs for every season.',
      cta: 'Explore Collection',
      link: '/products?season=winter'
    },
    {
      image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=2070&auto=format&fit=crop',
      title: 'Men\'s Fashion',
      heading: 'Elevate Your',
      subheading: 'Wardrobe',
      description: 'Curated selection of men\'s clothing that combines comfort, quality, and contemporary style.',
      cta: 'Shop Men',
      link: '/men'
    },
    {
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2086&auto=format&fit=crop',
      title: 'Women\'s Collection',
      heading: 'Express Your',
      subheading: 'Personality',
      description: 'From elegant dresses to casual wear, discover pieces that reflect your unique style and confidence.',
      cta: 'Shop Women',
      link: '/women'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Carousel Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("${slide.image}")` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
          </div>

          {/* Content */}
          <div className="relative h-full container-custom flex items-center px-4 md:px-6 lg:px-12">
            <div className="max-w-2xl text-white animate-slide-up">
              <span className="inline-block text-sm md:text-base font-accent tracking-[0.2em] uppercase mb-4 text-white font-semibold drop-shadow-lg">
                {slide.title}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-6 font-primary leading-tight drop-shadow-lg">
                {slide.heading} <br />
                <span className="italic font-light text-white">{slide.subheading}</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-10 text-white font-light max-w-lg leading-relaxed drop-shadow-md">
                {slide.description}
              </p>
              <Link 
                to={slide.link} 
                className="btn-primary inline-flex items-center justify-center gap-2 group shadow-lg"
              >
                {slide.cta}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 md:p-3 rounded-full text-white transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} className="md:w-6 md:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 md:p-3 rounded-full text-white transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={20} className="md:w-6 md:h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-8 h-2' : 'bg-white/50 hover:bg-white/75 w-2 h-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
