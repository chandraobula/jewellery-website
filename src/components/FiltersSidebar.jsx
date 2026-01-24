import { useState } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';

const FilterSection = ({ title, options, isOpen, onToggle }) => {
  return (
    <div className="border-b border-neutral-200 py-4">
      <button 
        className="flex items-center justify-between w-full text-left mb-2"
        onClick={onToggle}
      >
        <span className="font-primary font-semibold text-brand-dark">{title}</span>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      
      {isOpen && (
        <div className="space-y-2 mt-2 animate-fade-in">
          {options.map((option) => (
            <label key={option.id} className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center">
                <input 
                  type="checkbox" 
                  className="peer h-4 w-4 border-brand-dark/30 rounded-sm text-brand-primary focus:ring-brand-primary/50 transition-all"
                />
              </div>
              <span className="text-sm text-brand-dark/70 group-hover:text-brand-dark transition-colors">
                {option.label} <span className="text-xs text-neutral-400">({option.count})</span>
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

const FiltersSidebar = ({ isOpen, onClose }) => {
  const [openSections, setOpenSections] = useState({
    category: true,
    price: true,
    metal: false,
    stone: false,
    occasion: false
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const filters = {
    category: [
      { id: 'rings', label: 'Rings', count: 124 },
      { id: 'necklaces', label: 'Necklaces', count: 85 },
      { id: 'earrings', label: 'Earrings', count: 96 },
      { id: 'bracelets', label: 'Bracelets', count: 42 },
    ],
    price: [
      { id: 'under-100', label: 'Under $100', count: 15 },
      { id: '100-300', label: '$100 - $300', count: 45 },
      { id: '300-500', label: '$300 - $500', count: 32 },
      { id: 'over-500', label: 'Over $500', count: 28 },
    ],
    metal: [
      { id: 'gold', label: '18k Gold', count: 64 },
      { id: 'rose-gold', label: 'Rose Gold', count: 42 },
      { id: 'silver', label: 'Sterling Silver', count: 38 },
      { id: 'platinum', label: 'Platinum', count: 12 },
    ],
    stone: [
      { id: 'diamond', label: 'Diamond', count: 56 },
      { id: 'pearl', label: 'Pearl', count: 24 },
      { id: 'sapphire', label: 'Sapphire', count: 18 },
      { id: 'ruby', label: 'Ruby', count: 14 },
    ],
    occasion: [
      { id: 'wedding', label: 'Wedding', count: 34 },
      { id: 'party', label: 'Party', count: 48 },
      { id: 'office', label: 'Office Wear', count: 26 },
      { id: 'gift', label: 'Gifting', count: 52 },
    ]
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 h-full w-80 bg-white z-50 shadow-2xl transform transition-transform duration-300 overflow-y-auto lg:relative lg:transform-none lg:w-64 lg:shadow-none lg:z-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6 lg:hidden">
            <h3 className="text-xl font-primary font-bold">Filters</h3>
            <button onClick={onClose} className="text-brand-dark hover:text-brand-primary">
              <X size={24} />
            </button>
          </div>

          <div className="space-y-2">
            <FilterSection 
              title="Category" 
              options={filters.category} 
              isOpen={openSections.category} 
              onToggle={() => toggleSection('category')} 
            />
            <FilterSection 
              title="Price" 
              options={filters.price} 
              isOpen={openSections.price} 
              onToggle={() => toggleSection('price')} 
            />
            <FilterSection 
              title="Metal" 
              options={filters.metal} 
              isOpen={openSections.metal} 
              onToggle={() => toggleSection('metal')} 
            />
            <FilterSection 
              title="Gemstone" 
              options={filters.stone} 
              isOpen={openSections.stone} 
              onToggle={() => toggleSection('stone')} 
            />
            <FilterSection 
              title="Occasion" 
              options={filters.occasion} 
              isOpen={openSections.occasion} 
              onToggle={() => toggleSection('occasion')} 
            />
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-200">
            <button className="w-full btn-primary py-3 text-sm">Apply Filters</button>
            <button className="w-full mt-3 text-sm text-brand-dark/60 hover:text-brand-primary underline decoration-1 underline-offset-4">
              Clear All
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default FiltersSidebar;
