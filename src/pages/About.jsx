import Button from '../components/ui/Button';

const About = () => {
  return (
    <div className="pt-24 pb-16 bg-white">
      {/* Hero */}
      <div className="relative h-[60vh] w-full overflow-hidden mb-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=2070&auto=format&fit=crop")',
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative h-full container-custom flex items-center justify-center text-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-display font-primary mb-6">Our Story</h1>
            <p className="text-xl font-light leading-relaxed">
              Crafting timeless elegance for the modern muse.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom">
        {/* Mission */}
        <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
          <div className="md:w-1/2">
            <span className="text-sm font-accent font-bold tracking-widest uppercase text-brand-primary mb-3 block">The Beginning</span>
            <h2 className="text-h2 mb-6 text-brand-dark">Born from a Passion for <span className="italic font-light text-brand-accent">Beauty</span></h2>
            <p className="text-brand-dark/70 leading-relaxed mb-6">
              FashionHub was founded with a simple yet ambitious vision: to create fashion that transcends trends and becomes a part of your personal style. We believe that true style lies in the details—the perfect fit, quality fabrics, and designs that make you feel confident and comfortable.
            </p>
            <p className="text-brand-dark/70 leading-relaxed">
              Our journey began with a passion for bringing you the latest fashion trends at accessible prices. Today, we continue that tradition of excellence, curating collections from trusted manufacturers to create a wardrobe that is both timeless and contemporary.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1531995811006-35cb42e1a022?q=80&w=2070&auto=format&fit=crop" 
              alt="Fashion Design" 
              className="w-full h-auto rounded-sm shadow-lg"
            />
          </div>
        </div>

        {/* Values */}
        <div className="bg-neutral-50 p-16 mb-24">
          <div className="text-center mb-16">
            <span className="text-sm font-accent font-bold tracking-widest uppercase text-brand-primary mb-3 block">Our Values</span>
            <h2 className="text-h2 text-brand-dark">The Lumière Standard</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="text-xl font-primary font-bold mb-4">Quality Materials</h3>
              <p className="text-brand-dark/70 leading-relaxed">
                We are committed to using quality fabrics and materials. All our products are made from premium materials that ensure comfort, durability, and style.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-primary font-bold mb-4">Expert Curation</h3>
              <p className="text-brand-dark/70 leading-relaxed">
                Every piece is carefully selected by our fashion experts who understand style and quality. We refuse to compromise on the fit, fabric, or finish of our products.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-primary font-bold mb-4">Transparent Pricing</h3>
              <p className="text-brand-dark/70 leading-relaxed">
                By selling directly to you, we eliminate the middleman markup. You get the highest quality fashion at a fair price, without the traditional retail premium.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-h2 mb-6">Experience the Difference</h2>
          <p className="text-brand-dark/70 mb-8">
            Discover our latest collection and find the perfect piece to tell your story.
          </p>
          <Button variant="primary">Shop Now</Button>
        </div>
      </div>
    </div>
  );
};

export default About;
