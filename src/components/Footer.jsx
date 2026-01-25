import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-light pt-20 pb-10 border-t border-brand-secondary/20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-primary font-bold text-brand-dark">FashionHub</h3>
            <p className="text-brand-dark/80 leading-relaxed">
              Discover the latest trends in fashion. From casual wear to formal attire, we bring you curated collections for every style and occasion.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-brand-dark/20 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-dark/20 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-dark/20 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-dark/20 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-all duration-300">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="text-lg font-primary font-bold mb-6">Shop</h4>
            <ul className="space-y-4">
              <li><Link to="/men" className="text-brand-dark/70 hover:text-brand-primary transition-colors">Men</Link></li>
              <li><Link to="/women" className="text-brand-dark/70 hover:text-brand-primary transition-colors">Women</Link></li>
              <li><Link to="/kids" className="text-brand-dark/70 hover:text-brand-primary transition-colors">Kids</Link></li>
              <li><Link to="/new-arrivals" className="text-brand-dark/70 hover:text-brand-primary transition-colors">New Arrivals</Link></li>
              <li><Link to="/sale" className="text-brand-dark/70 hover:text-brand-primary transition-colors">Sale</Link></li>
              <li><Link to="/collections" className="text-brand-dark/70 hover:text-brand-primary transition-colors">Collections</Link></li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="text-lg font-primary font-bold mb-6">Support</h4>
            <ul className="space-y-4">
              <li><Link to="/contact" className="text-brand-dark/70 hover:text-brand-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/shipping" className="text-brand-dark/70 hover:text-brand-primary transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/faq" className="text-brand-dark/70 hover:text-brand-primary transition-colors">FAQ</Link></li>
              <li><Link to="/fabric-care" className="text-brand-dark/70 hover:text-brand-primary transition-colors">Fabric Care</Link></li>
              <li><Link to="/size-guide" className="text-brand-dark/70 hover:text-brand-primary transition-colors">Size Guide</Link></li>
              <li><Link to="/returns-exchanges" className="text-brand-dark/70 hover:text-brand-primary transition-colors">Returns & Exchanges</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-primary font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-brand-dark/70">
                <MapPin size={20} className="shrink-0 mt-1" />
                <span>123 Luxury Lane, Fashion District,<br />New York, NY 10012</span>
              </li>
              <li className="flex items-center gap-3 text-brand-dark/70">
                <Phone size={20} className="shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-brand-dark/70">
                <Mail size={20} className="shrink-0" />
                <span>concierge@lumiere.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-secondary/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-brand-dark/50">
            © {new Date().getFullYear()} FashionHub. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-brand-dark/50">
            <Link to="/privacy" className="hover:text-brand-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-brand-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
