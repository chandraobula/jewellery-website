import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Heart, Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'New Arrivals', path: '/new-arrivals' },
    { 
      name: 'Rings', 
      path: '/rings',
      submenu: ['Engagement', 'Wedding', 'Cocktail', 'Everyday', 'Solitaire']
    },
    { 
      name: 'Necklaces', 
      path: '/necklaces',
      submenu: ['Pendants', 'Chokers', 'Chains', 'Statement', 'Layered']
    },
    { 
      name: 'Earrings', 
      path: '/earrings',
      submenu: ['Studs', 'Drops', 'Hoops', 'Chandeliers', 'Cuffs']
    },
    { name: 'Bracelets', path: '/bracelets' },
    { name: 'Gifts', path: '/gifts' },
  ];

  // Text color logic
  const textColorClass = isHome && !isScrolled ? 'text-white' : 'text-brand-dark';
  const hoverColorClass = isHome && !isScrolled ? 'hover:text-brand-secondary' : 'hover:text-brand-primary';

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : isHome ? 'bg-transparent py-6' : 'bg-white shadow-sm py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button 
          className={`lg:hidden ${textColorClass}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link to="/" className={`text-2xl md:text-3xl font-primary font-bold tracking-tight ${textColorClass}`}>
          LUMIÈRE
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div 
              key={link.name}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                to={link.path}
                className={`text-sm font-medium uppercase tracking-wider ${textColorClass} ${hoverColorClass} transition-colors flex items-center gap-1`}
              >
                {link.name}
                {link.submenu && <ChevronDown size={14} />}
              </Link>
              
              {/* Mega Menu / Dropdown */}
              {link.submenu && (
                <div className="absolute top-full left-0 w-48 bg-white shadow-lg py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {link.submenu.map((item) => (
                    <Link
                      key={item}
                      to={`${link.path}/${item.toLowerCase()}`}
                      className="block px-6 py-2 text-sm text-gray-600 hover:text-brand-primary hover:bg-brand-light/50 transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <button className={`${textColorClass} ${hoverColorClass} transition-colors`}>
            <Search size={20} />
          </button>
          <Link to="/wishlist" className={`${textColorClass} ${hoverColorClass} transition-colors hidden md:block`}>
            <Heart size={20} />
          </Link>
          <Link to="/cart" className={`${textColorClass} ${hoverColorClass} transition-colors relative`}>
            <ShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 bg-brand-primary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 lg:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`} style={{ top: '0' }}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="text-2xl font-primary font-bold" onClick={() => setIsMobileMenuOpen(false)}>
              LUMIÈRE
            </Link>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>
          
          <div className="flex flex-col space-y-6 overflow-y-auto">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link 
                  to={link.path}
                  className="text-lg font-medium uppercase tracking-wider block mb-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
                {link.submenu && (
                  <div className="pl-4 flex flex-col space-y-2 border-l-2 border-brand-secondary/30">
                    {link.submenu.map((item) => (
                      <Link
                        key={item}
                        to={`${link.path}/${item.toLowerCase()}`}
                        className="text-sm text-gray-600"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
