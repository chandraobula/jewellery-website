import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2075&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative h-full container-custom flex items-center">
        <div className="max-w-2xl text-white animate-slide-up">
          <span className="inline-block text-sm font-accent tracking-[0.2em] uppercase mb-4 text-brand-secondary">
            New Collection 2025
          </span>
          <h1 className="text-display mb-6 font-primary leading-tight">
            Elegance in <br />
            <span className="italic font-light text-brand-secondary">Every Detail</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 text-white/90 font-light max-w-lg leading-relaxed">
            Discover our handcrafted collection of sustainable luxury jewellery, designed to illuminate your unique style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/new-arrivals" className="btn-primary inline-flex items-center justify-center gap-2 group">
              Shop Collection
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/about" className="btn-outline inline-flex items-center justify-center">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
