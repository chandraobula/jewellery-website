import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, Heart, Menu, X, ChevronDown, User, LogOut, Settings, LayoutDashboard } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout, isAdmin } = useAuth();
  const isHome = location.pathname === '/';

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Clothing categories for Shop By Collection dropdown
  const shopByCollection = [
    { name: 'T-Shirts', path: '/products?subcategory=t-shirt' },
    { name: 'Shirts', path: '/products?subcategory=shirt' },
    { name: 'Jeans', path: '/products?subcategory=jeans' },
    { name: 'Kurtis', path: '/products?subcategory=kurti' },
    { name: 'Dresses', path: '/products?subcategory=dress' },
    { name: 'Hoodies', path: '/products?subcategory=hoodie' },
    { name: 'Jackets', path: '/products?subcategory=jacket' },
    { name: 'Sweaters', path: '/products?subcategory=sweater' },
    { name: 'Trousers', path: '/products?subcategory=trousers' },
    { name: 'Shorts', path: '/products?subcategory=shorts' },
    { name: 'Sarees', path: '/products?subcategory=saree' },
    { name: 'Accessories', path: '/products?subcategory=scarf' },
  ];

  const navLinks = [
    { 
      name: 'Shop By Collection', 
      path: '/products',
      submenu: shopByCollection,
      isDropdown: true
    },
    { name: 'New Launch', path: '/new-arrivals' },
    { name: 'T-Shirts', path: '/products?subcategory=t-shirt' },
    { name: 'Designer Wear', path: '/products?subcategory=dress' },
    { name: 'Best Sellers', path: '/products?sortBy=popular' },
  ];

  const secondaryLinks = [
    { name: 'Accessories', path: '/products?subcategory=scarf' },
    { name: 'Track Order', path: '/track-order' },
    { name: 'About Us', path: '/about' },
  ];

  // Text color logic
  const textColorClass = isHome && !isScrolled ? 'text-white' : 'text-brand-dark';
  const hoverColorClass = isHome && !isScrolled ? 'hover:text-brand-secondary' : 'hover:text-brand-primary';

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : isHome ? 'bg-transparent py-4' : 'bg-white shadow-sm py-3'
      }`}
    >
      <div className="container-custom">
        {/* Top Row - Logo and Icons */}
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden ${textColorClass} p-2`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link to="/" className={`text-xl sm:text-2xl md:text-3xl font-primary font-bold tracking-tight ${textColorClass} whitespace-nowrap`}>
            FashionHub
          </Link>

          {/* Icons */}
          <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-6">
            <Link to="/wishlist" className={`${textColorClass} ${hoverColorClass} transition-colors hidden sm:block`}>
              <Heart size={20} className="sm:w-5 sm:h-5" />
            </Link>
            <button className={`${textColorClass} ${hoverColorClass} transition-colors`}>
              <Search size={20} className="sm:w-5 sm:h-5" />
            </button>
            <div className="relative hidden md:block" ref={userMenuRef}>
              <button 
                className={`${textColorClass} ${hoverColorClass} transition-colors`}
                onClick={() => {
                  if (user) {
                    setUserMenuOpen(!userMenuOpen);
                  } else {
                    navigate('/login');
                  }
                }}
              >
                <User size={20} className="sm:w-5 sm:h-5" />
              </button>
              
              {user && userMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white shadow-xl rounded-lg py-2 z-50 border border-neutral-200">
                  <div className="px-4 py-2 border-b border-neutral-200">
                    <p className="text-sm font-semibold text-brand-dark">{user.name}</p>
                    <p className="text-xs text-brand-dark/60">{user.email}</p>
                  </div>
                  <Link
                    to={isAdmin ? '/admin/dashboard' : '/user/dashboard'}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-brand-dark hover:bg-brand-light transition-colors"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    <LayoutDashboard size={16} />
                    Dashboard
                  </Link>
                  <Link
                    to="/user/profile"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-brand-dark hover:bg-brand-light transition-colors"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    <Settings size={16} />
                    Settings
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setUserMenuOpen(false);
                      navigate('/');
                    }}
                    className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              )}
            </div>
            <Link to="/cart" className={`${textColorClass} ${hoverColorClass} transition-colors relative`}>
              <ShoppingBag size={20} className="sm:w-5 sm:h-5" />
              <span className="absolute -top-2 -right-2 bg-brand-primary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>

        {/* Desktop Navigation - Single Line */}
        <div className="hidden lg:flex items-center justify-between mt-3 gap-4">
          {/* Primary Navigation */}
          <div className="flex items-center gap-4 xl:gap-6 flex-1 min-w-0">
            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="relative group flex-shrink-0"
                onMouseEnter={() => link.isDropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => link.isDropdown && setActiveDropdown(null)}
              >
                <Link 
                  to={link.path}
                  className={`text-xs xl:text-sm font-medium uppercase tracking-wider ${textColorClass} ${hoverColorClass} transition-colors flex items-center gap-1 whitespace-nowrap ${
                    link.isDropdown && activeDropdown === link.name ? 'text-brand-primary' : ''
                  }`}
                >
                  {link.name}
                  {link.isDropdown && <ChevronDown size={12} className="flex-shrink-0" />}
                </Link>
                
                {/* Mega Menu / Dropdown */}
                {link.isDropdown && link.submenu && (
                  <div className={`absolute top-full left-0 w-64 bg-white shadow-xl py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 rounded-lg`}>
                    {link.submenu.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-6 py-2 text-sm text-gray-600 hover:text-brand-primary hover:bg-brand-light/50 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Secondary Links */}
          <div className="flex items-center gap-4 xl:gap-6 flex-shrink-0">
            {secondaryLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs xl:text-sm font-medium uppercase tracking-wider ${textColorClass} ${hoverColorClass} transition-colors whitespace-nowrap`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 lg:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`} style={{ top: '0' }}>
        <div className="p-4 sm:p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-6">
            <Link to="/" className="text-xl sm:text-2xl font-primary font-bold" onClick={() => setIsMobileMenuOpen(false)}>
              FashionHub
            </Link>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
              <X size={24} />
            </button>
          </div>
          
          <div className="flex flex-col space-y-4 overflow-y-auto">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link 
                  to={link.path}
                  className="text-base sm:text-lg font-medium uppercase tracking-wider block mb-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
                {link.submenu && (
                  <div className="pl-4 flex flex-col space-y-2 border-l-2 border-brand-secondary/30">
                    {link.submenu.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="text-sm text-gray-600 py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {secondaryLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-base sm:text-lg font-medium uppercase tracking-wider py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
