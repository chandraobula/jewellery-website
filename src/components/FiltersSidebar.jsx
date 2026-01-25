import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp, X } from 'lucide-react';
import { getBrands, getColors, getSizes } from '../lib/sanity';

const FilterSection = ({ title, options, isOpen, onToggle, type = 'checkbox', filterKey, selectedValues = [], onValueChange }) => {
  const isSingleSelect = filterKey === 'price' || filterKey === 'discount';
  
  const handleChange = (value, checked) => {
    if (onValueChange) {
      if (isSingleSelect) {
        // For single select (price, discount), replace the selection
        if (checked) {
          onValueChange(filterKey, [value]);
        } else {
          onValueChange(filterKey, []);
        }
      } else {
        // For multi-select, add/remove from array
        if (checked) {
          onValueChange(filterKey, [...selectedValues, value]);
        } else {
          onValueChange(filterKey, selectedValues.filter(v => {
            // Handle array comparison for price ranges
            if (Array.isArray(v) && Array.isArray(value)) {
              return v[0] !== value[0] || v[1] !== value[1];
            }
            return v !== value;
          }));
        }
      }
    }
  };
  
  const isValueSelected = (optionValue) => {
    if (isSingleSelect) {
      if (Array.isArray(optionValue) && Array.isArray(selectedValues[0])) {
        return selectedValues.length > 0 && 
               selectedValues[0][0] === optionValue[0] && 
               selectedValues[0][1] === optionValue[1];
      }
      return selectedValues.includes(optionValue);
    }
    if (Array.isArray(optionValue)) {
      return selectedValues.some(sv => 
        Array.isArray(sv) && sv[0] === optionValue[0] && sv[1] === optionValue[1]
      );
    }
    return selectedValues.includes(optionValue);
  };

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
          {options.map((option) => {
            const optionValue = typeof option === 'string' ? option : (option.value || option.id || option.name || option.label);
            const isChecked = selectedValues.includes(optionValue);
            
            return (
              <label key={option.id || option.value || (typeof option === 'string' ? option : option.name || option.label)} className="flex items-center gap-3 cursor-pointer group">
                {type === 'checkbox' || type === 'radio' ? (
                  <>
                    <input 
                      type={isSingleSelect ? 'radio' : 'checkbox'}
                      name={isSingleSelect ? filterKey : undefined}
                      checked={isChecked}
                      onChange={(e) => handleChange(optionValue, e.target.checked)}
                      className="peer h-4 w-4 border-brand-dark/30 rounded-sm text-brand-primary focus:ring-brand-primary/50 transition-all"
                    />
                    <span className="text-sm text-brand-dark/70 group-hover:text-brand-dark transition-colors">
                      {typeof option === 'string' ? option : (option.label || option.name || String(option))} 
                      {option.count && <span className="text-xs text-brand-dark/40"> ({option.count})</span>}
                    </span>
                  </>
                ) : type === 'color' ? (
                  <>
                    <input 
                      type="checkbox" 
                      checked={isChecked}
                      onChange={(e) => handleChange(optionValue, e.target.checked)}
                      className="peer h-4 w-4 border-brand-dark/30 rounded-sm text-brand-primary focus:ring-brand-primary/50 transition-all"
                    />
                    <div 
                      className="w-6 h-6 rounded-full border border-neutral-300"
                      style={{ backgroundColor: option.hex || '#ccc' }}
                      title={typeof option === 'string' ? option : (option.name || String(option))}
                    />
                    <span className="text-sm text-brand-dark/70 group-hover:text-brand-dark transition-colors">
                      {typeof option === 'string' ? option : (option.name || String(option))}
                    </span>
                  </>
                ) : null}
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
};

const FiltersSidebar = ({ isOpen, onClose, filters = {}, onFilterChange }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const [openSections, setOpenSections] = useState({
    gender: true,
    category: true,
    price: true,
    size: false,
    color: false,
    brand: false,
    fit: false,
    fabric: false,
    occasion: false,
    discount: false
  });

  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    const fetchFilterData = async () => {
      try {
        const [brandsData, colorsData, sizesData] = await Promise.all([
          getBrands(),
          getColors(),
          getSizes()
        ]);
        setBrands(brandsData || []);
        setColors(colorsData || []);
        setSizes(sizesData || []);
      } catch (error) {
        console.error('Error fetching filter data:', error);
        // Fallback to dummy data
        setBrands(['FashionHub', 'Premium', 'Classic', 'Designer']);
        setColors([
          { name: 'White', hex: '#FFFFFF' },
          { name: 'Black', hex: '#000000' },
          { name: 'Navy', hex: '#001f3f' },
          { name: 'Red', hex: '#FF0000' },
          { name: 'Blue', hex: '#0000FF' },
          { name: 'Grey', hex: '#808080' },
          { name: 'Pink', hex: '#FFC0CB' },
        ]);
        setSizes(['XS', 'S', 'M', 'L', 'XL', 'XXL', '30', '32', '34', '36', 'One Size']);
      }
    };
    fetchFilterData();
  }, []);

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleValueChange = (filterKey, values) => {
    const newParams = new URLSearchParams(searchParams);
    
    if (values.length === 0) {
      if (filterKey === 'price') {
        newParams.delete('minPrice');
        newParams.delete('maxPrice');
      } else {
        newParams.delete(filterKey);
      }
    } else if (filterKey === 'price') {
      // Price is a range, only allow one selection
      const range = values[values.length - 1]; // Get the last selected (most recent)
      newParams.set('minPrice', range[0]);
      newParams.set('maxPrice', range[1]);
    } else if (filterKey === 'discount') {
      // Discount only allows one selection
      newParams.set('discountMin', values[values.length - 1]);
    } else {
      newParams.set(filterKey, values.join(','));
    }
    
    setSearchParams(newParams);
  };

  const getSelectedValues = (filterKey) => {
    if (filterKey === 'price') {
      const minPrice = searchParams.get('minPrice');
      const maxPrice = searchParams.get('maxPrice');
      if (minPrice && maxPrice) {
        return [[Number(minPrice), Number(maxPrice)]];
      }
      return [];
    }
    
    if (filterKey === 'discount') {
      const discountMin = searchParams.get('discountMin');
      return discountMin ? [Number(discountMin)] : [];
    }
    
    const param = searchParams.get(filterKey);
    return param ? param.split(',').filter(Boolean) : [];
  };

  const clearAllFilters = () => {
    const newParams = new URLSearchParams();
    // Keep subcategory and sortBy if they exist
    const subcategory = searchParams.get('subcategory');
    const sortBy = searchParams.get('sortBy');
    if (subcategory) newParams.set('subcategory', subcategory);
    if (sortBy) newParams.set('sortBy', sortBy);
    setSearchParams(newParams);
  };

  const filterOptions = {
    gender: [
      { id: 'men', label: 'Men', value: 'men' },
      { id: 'women', label: 'Women', value: 'women' },
      { id: 'kids', label: 'Kids', value: 'kids' },
      { id: 'unisex', label: 'Unisex', value: 'unisex' },
    ],
    category: [
      { id: 't-shirt', label: 'T-Shirts', value: 't-shirt' },
      { id: 'shirt', label: 'Shirts', value: 'shirt' },
      { id: 'jeans', label: 'Jeans', value: 'jeans' },
      { id: 'dress', label: 'Dresses', value: 'dress' },
      { id: 'jacket', label: 'Jackets', value: 'jacket' },
      { id: 'hoodie', label: 'Hoodies', value: 'hoodie' },
      { id: 'kurti', label: 'Kurtis', value: 'kurti' },
      { id: 'saree', label: 'Sarees', value: 'saree' },
    ],
    price: [
      { id: 'under-500', label: 'Under ₹500', value: [0, 500] },
      { id: '500-1000', label: '₹500 - ₹1,000', value: [500, 1000] },
      { id: '1000-2000', label: '₹1,000 - ₹2,000', value: [1000, 2000] },
      { id: '2000-5000', label: '₹2,000 - ₹5,000', value: [2000, 5000] },
      { id: 'over-5000', label: 'Over ₹5,000', value: [5000, 99999] },
    ],
    size: sizes.filter(Boolean).map(size => ({ id: String(size), label: String(size), value: String(size) })),
    color: colors.filter(Boolean).map(color => {
      if (typeof color === 'object' && color.hex) {
        return color;
      }
      return { id: String(color), name: String(color), value: String(color), hex: '#ccc' };
    }),
    brand: brands.filter(Boolean).map(brand => ({ id: String(brand), label: String(brand), value: String(brand) })),
    fit: [
      { id: 'slim', label: 'Slim', value: 'slim' },
      { id: 'regular', label: 'Regular', value: 'regular' },
      { id: 'oversized', label: 'Oversized', value: 'oversized' },
      { id: 'relaxed', label: 'Relaxed', value: 'relaxed' },
    ],
    fabric: [
      { id: 'cotton', label: 'Cotton', value: 'cotton' },
      { id: 'polyester', label: 'Polyester', value: 'polyester' },
      { id: 'silk', label: 'Silk', value: 'silk' },
      { id: 'denim', label: 'Denim', value: 'denim' },
      { id: 'wool', label: 'Wool', value: 'wool' },
    ],
    occasion: [
      { id: 'casual', label: 'Casual', value: 'casual' },
      { id: 'formal', label: 'Formal', value: 'formal' },
      { id: 'party', label: 'Party', value: 'party' },
      { id: 'festive', label: 'Festive', value: 'festive' },
      { id: 'office', label: 'Office', value: 'office' },
    ],
    discount: [
      { id: '10', label: '10% & above', value: 10 },
      { id: '20', label: '20% & above', value: 20 },
      { id: '30', label: '30% & above', value: 30 },
      { id: '50', label: '50% & above', value: 50 },
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
            <h3 className="text-xl font-primary font-bold text-brand-dark">Filters</h3>
            <button onClick={onClose} className="text-brand-dark hover:text-brand-primary">
              <X size={24} />
            </button>
          </div>

          <div className="space-y-2">
            <FilterSection 
              title="Gender" 
              options={filterOptions.gender} 
              isOpen={openSections.gender} 
              onToggle={() => toggleSection('gender')}
              filterKey="gender"
              selectedValues={getSelectedValues('gender')}
              onValueChange={handleValueChange}
            />
            <FilterSection 
              title="Category" 
              options={filterOptions.category} 
              isOpen={openSections.category} 
              onToggle={() => toggleSection('category')}
              filterKey="category"
              selectedValues={getSelectedValues('category')}
              onValueChange={handleValueChange}
            />
            <FilterSection 
              title="Price" 
              options={filterOptions.price} 
              isOpen={openSections.price} 
              onToggle={() => toggleSection('price')}
              type="radio"
              filterKey="price"
              selectedValues={getSelectedValues('price')}
              onValueChange={handleValueChange}
            />
            <FilterSection 
              title="Size" 
              options={filterOptions.size} 
              isOpen={openSections.size} 
              onToggle={() => toggleSection('size')}
              filterKey="size"
              selectedValues={getSelectedValues('size')}
              onValueChange={handleValueChange}
            />
            <FilterSection 
              title="Color" 
              options={filterOptions.color} 
              isOpen={openSections.color} 
              onToggle={() => toggleSection('color')}
              type="color"
              filterKey="color"
              selectedValues={getSelectedValues('color')}
              onValueChange={handleValueChange}
            />
            <FilterSection 
              title="Brand" 
              options={filterOptions.brand} 
              isOpen={openSections.brand} 
              onToggle={() => toggleSection('brand')}
              filterKey="brand"
              selectedValues={getSelectedValues('brand')}
              onValueChange={handleValueChange}
            />
            <FilterSection 
              title="Fit" 
              options={filterOptions.fit} 
              isOpen={openSections.fit} 
              onToggle={() => toggleSection('fit')}
              filterKey="fit"
              selectedValues={getSelectedValues('fit')}
              onValueChange={handleValueChange}
            />
            <FilterSection 
              title="Fabric" 
              options={filterOptions.fabric} 
              isOpen={openSections.fabric} 
              onToggle={() => toggleSection('fabric')}
              filterKey="fabric"
              selectedValues={getSelectedValues('fabric')}
              onValueChange={handleValueChange}
            />
            <FilterSection 
              title="Occasion" 
              options={filterOptions.occasion} 
              isOpen={openSections.occasion} 
              onToggle={() => toggleSection('occasion')}
              filterKey="occasion"
              selectedValues={getSelectedValues('occasion')}
              onValueChange={handleValueChange}
            />
            <FilterSection 
              title="Discount" 
              options={filterOptions.discount} 
              isOpen={openSections.discount} 
              onToggle={() => toggleSection('discount')}
              type="radio"
              filterKey="discount"
              selectedValues={getSelectedValues('discount')}
              onValueChange={handleValueChange}
            />
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-200">
            <button 
              className="w-full mt-3 text-sm text-brand-dark/60 hover:text-brand-primary underline decoration-1 underline-offset-4"
              onClick={clearAllFilters}
            >
              Clear All
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default FiltersSidebar;
