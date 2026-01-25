// Dummy product data for different categories
// All images from Unsplash

// T-Shirts (20 items)
export const tShirts = [
  {
    id: 1,
    _id: 'tshirt-1',
    title: 'Classic White T-Shirt',
    slug: { current: 'classic-white-t-shirt' },
    brand: 'FashionHub',
    price: 599,
    discountedPrice: 449,
    images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'T-Shirts' },
    subcategory: 't-shirt',
    gender: 'unisex',
    isNew: true,
    isOnSale: true,
    rating: 4.5,
    reviews: 128,
    variants: [
      { color: { name: 'White', hex: '#FFFFFF' }, sizes: [{ size: 'S', stock: 15 }, { size: 'M', stock: 20 }, { size: 'L', stock: 18 }, { size: 'XL', stock: 12 }] },
      { color: { name: 'Black', hex: '#000000' }, sizes: [{ size: 'S', stock: 10 }, { size: 'M', stock: 15 }, { size: 'L', stock: 12 }] }
    ]
  },
  {
    id: 2,
    title: 'Premium Cotton T-Shirt',
    brand: 'FashionHub',
    price: 799,
    discountedPrice: 599,
    images: ['https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'T-Shirts' },
    subcategory: 't-shirt',
    gender: 'men',
    isNew: false,
    isOnSale: true,
    rating: 4.3,
    reviews: 89,
    variants: [
      { color: { name: 'Navy Blue', hex: '#001f3f' }, sizes: [{ size: 'M', stock: 8 }, { size: 'L', stock: 10 }, { size: 'XL', stock: 5 }] }
    ]
  },
  {
    id: 3,
    title: 'V-Neck Casual T-Shirt',
    brand: 'FashionHub',
    price: 699,
    images: ['https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'T-Shirts' },
    subcategory: 't-shirt',
    gender: 'men',
    isNew: true,
    isOnSale: false,
    rating: 4.7,
    reviews: 156,
    variants: [
      { color: { name: 'Grey', hex: '#808080' }, sizes: [{ size: 'S', stock: 12 }, { size: 'M', stock: 18 }, { size: 'L', stock: 15 }] }
    ]
  },
  {
    id: 4,
    title: 'Oversized Graphic T-Shirt',
    brand: 'FashionHub',
    price: 899,
    discountedPrice: 699,
    images: ['https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'T-Shirts' },
    subcategory: 't-shirt',
    gender: 'unisex',
    isNew: false,
    isOnSale: true,
    rating: 4.2,
    reviews: 67,
    variants: [
      { color: { name: 'Red', hex: '#FF0000' }, sizes: [{ size: 'M', stock: 6 }, { size: 'L', stock: 8 }, { size: 'XL', stock: 4 }] }
    ]
  },
  {
    id: 5,
    title: 'Slim Fit Basic T-Shirt',
    brand: 'FashionHub',
    price: 549,
    images: ['https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'T-Shirts' },
    subcategory: 't-shirt',
    gender: 'men',
    isNew: false,
    isOnSale: false,
    rating: 4.4,
    reviews: 203,
    variants: [
      { color: { name: 'Charcoal', hex: '#36454F' }, sizes: [{ size: 'S', stock: 10 }, { size: 'M', stock: 15 }, { size: 'L', stock: 12 }, { size: 'XL', stock: 8 }] }
    ]
  },
  {
    id: 6,
    title: 'Polo Style T-Shirt',
    brand: 'FashionHub',
    price: 999,
    discountedPrice: 799,
    images: ['https://images.unsplash.com/photo-1521223890152-f9c7d3250b14?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'T-Shirts' },
    subcategory: 't-shirt',
    gender: 'men',
    isNew: true,
    isOnSale: true,
    rating: 4.6,
    reviews: 94,
    variants: [
      { color: { name: 'Blue', hex: '#0000FF' }, sizes: [{ size: 'M', stock: 9 }, { size: 'L', stock: 11 }, { size: 'XL', stock: 7 }] }
    ]
  },
  {
    id: 7,
    title: 'Comfort Fit T-Shirt',
    brand: 'FashionHub',
    price: 649,
    images: ['https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'T-Shirts' },
    subcategory: 't-shirt',
    gender: 'unisex',
    isNew: false,
    isOnSale: false,
    rating: 4.1,
    reviews: 145,
    variants: [
      { color: { name: 'Olive', hex: '#808000' }, sizes: [{ size: 'S', stock: 7 }, { size: 'M', stock: 10 }, { size: 'L', stock: 9 }] }
    ]
  },
  {
    id: 8,
    title: 'Striped T-Shirt',
    brand: 'FashionHub',
    price: 749,
    discountedPrice: 599,
    images: ['https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'T-Shirts' },
    subcategory: 't-shirt',
    gender: 'unisex',
    isNew: false,
    isOnSale: true,
    rating: 4.5,
    reviews: 112,
    variants: [
      { color: { name: 'Navy Stripes', hex: '#001f3f' }, sizes: [{ size: 'M', stock: 8 }, { size: 'L', stock: 10 }, { size: 'XL', stock: 6 }] }
    ]
  },
  {
    id: 9,
    title: 'Crew Neck T-Shirt',
    brand: 'FashionHub',
    price: 599,
    images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'T-Shirts' },
    subcategory: 't-shirt',
    gender: 'men',
    isNew: true,
    isOnSale: false,
    rating: 4.3,
    reviews: 178,
    variants: [
      { color: { name: 'Beige', hex: '#F5F5DC' }, sizes: [{ size: 'S', stock: 11 }, { size: 'M', stock: 14 }, { size: 'L', stock: 13 }] }
    ]
  },
  {
    id: 10,
    title: 'Long Sleeve T-Shirt',
    brand: 'FashionHub',
    price: 899,
    discountedPrice: 699,
    images: ['https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'T-Shirts' },
    subcategory: 't-shirt',
    gender: 'men',
    isNew: false,
    isOnSale: true,
    rating: 4.4,
    reviews: 87,
    variants: [
      { color: { name: 'Burgundy', hex: '#800020' }, sizes: [{ size: 'M', stock: 7 }, { size: 'L', stock: 9 }, { size: 'XL', stock: 5 }] }
    ]
  },
  {
    id: 11,
    title: 'Henley T-Shirt',
    brand: 'FashionHub',
    price: 849,
    images: ['https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'T-Shirts' },
    subcategory: 't-shirt',
    gender: 'men',
    isNew: true,
    isOnSale: false,
    rating: 4.6,
    reviews: 134,
    variants: [
      { color: { name: 'Teal', hex: '#008080' }, sizes: [{ size: 'S', stock: 9 }, { size: 'M', stock: 12 }, { size: 'L', stock: 10 }] }
    ]
  },
  {
    id: 12,
    title: 'Raglan Sleeve T-Shirt',
    brand: 'FashionHub',
    price: 799,
    discountedPrice: 649,
    images: ['https://images.unsplash.com/photo-1521223890152-f9c7d3250b14?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'T-Shirts' },
    subcategory: 't-shirt',
    gender: 'unisex',
    isNew: false,
    isOnSale: true,
    rating: 4.2,
    reviews: 96,
    variants: [
      { color: { name: 'Maroon', hex: '#800000' }, sizes: [{ size: 'M', stock: 8 }, { size: 'L', stock: 11 }, { size: 'XL', stock: 7 }] }
    ]
  },
  {
    id: 13,
    title: 'Pocket T-Shirt',
    brand: 'FashionHub',
    price: 699,
    images: ['https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'T-Shirts' },
    subcategory: 't-shirt',
    gender: 'men',
    isNew: false,
    isOnSale: false,
    rating: 4.5,
    reviews: 167,
    variants: [
      { color: { name: 'Forest Green', hex: '#228B22' }, sizes: [{ size: 'S', stock: 10 }, { size: 'M', stock: 13 }, { size: 'L', stock: 11 }] }
    ]
  },
  {
    id: 14,
    title: 'Muscle Fit T-Shirt',
    brand: 'FashionHub',
    price: 749,
    images: ['https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'T-Shirts' },
    subcategory: 't-shirt',
    gender: 'men',
    isNew: true,
    isOnSale: false,
    rating: 4.7,
    reviews: 201,
    variants: [
      { color: { name: 'Slate Grey', hex: '#708090' }, sizes: [{ size: 'M', stock: 9 }, { size: 'L', stock: 12 }, { size: 'XL', stock: 8 }] }
    ]
  },
  {
    id: 15,
    title: 'Relaxed Fit T-Shirt',
    brand: 'FashionHub',
    price: 649,
    discountedPrice: 499,
    images: ['https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'T-Shirts' },
    subcategory: 't-shirt',
    gender: 'unisex',
    isNew: false,
    isOnSale: true,
    rating: 4.3,
    reviews: 123,
    variants: [
      { color: { name: 'Cream', hex: '#FFFDD0' }, sizes: [{ size: 'S', stock: 8 }, { size: 'M', stock: 11 }, { size: 'L', stock: 9 }] }
    ]
  },
  {
    id: 16,
    title: 'Athletic T-Shirt',
    brand: 'FashionHub',
    price: 999,
    discountedPrice: 799,
    images: ['https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'T-Shirts' },
    subcategory: 't-shirt',
    gender: 'unisex',
    isNew: true,
    isOnSale: true,
    rating: 4.8,
    reviews: 189,
    variants: [
      { color: { name: 'Orange', hex: '#FFA500' }, sizes: [{ size: 'M', stock: 7 }, { size: 'L', stock: 10 }, { size: 'XL', stock: 6 }] }
    ]
  },
  {
    id: 17,
    title: 'Classic Fit T-Shirt',
    brand: 'FashionHub',
    price: 599,
    images: ['https://images.unsplash.com/photo-1521223890152-f9c7d3250b14?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'T-Shirts' },
    subcategory: 't-shirt',
    gender: 'men',
    isNew: false,
    isOnSale: false,
    rating: 4.4,
    reviews: 156,
    variants: [
      { color: { name: 'Indigo', hex: '#4B0082' }, sizes: [{ size: 'S', stock: 9 }, { size: 'M', stock: 12 }, { size: 'L', stock: 10 }] }
    ]
  },
  {
    id: 18,
    title: 'Textured T-Shirt',
    brand: 'FashionHub',
    price: 849,
    images: ['https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'T-Shirts' },
    subcategory: 't-shirt',
    gender: 'unisex',
    isNew: true,
    isOnSale: false,
    rating: 4.5,
    reviews: 142,
    variants: [
      { color: { name: 'Khaki', hex: '#C3B091' }, sizes: [{ size: 'M', stock: 8 }, { size: 'L', stock: 11 }, { size: 'XL', stock: 7 }] }
    ]
  },
  {
    id: 19,
    title: 'Essential T-Shirt Pack',
    brand: 'FashionHub',
    price: 1999,
    discountedPrice: 1499,
    images: ['https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'T-Shirts' },
    subcategory: 't-shirt',
    gender: 'unisex',
    isNew: false,
    isOnSale: true,
    rating: 4.6,
    reviews: 234,
    variants: [
      { color: { name: 'Multi Pack', hex: '#CCCCCC' }, sizes: [{ size: 'M', stock: 5 }, { size: 'L', stock: 7 }] }
    ]
  },
  {
    id: 20,
    title: 'Premium Organic T-Shirt',
    brand: 'FashionHub',
    price: 1299,
    discountedPrice: 999,
    images: ['https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'T-Shirts' },
    subcategory: 't-shirt',
    gender: 'unisex',
    isNew: true,
    isOnSale: true,
    rating: 4.9,
    reviews: 312,
    variants: [
      { color: { name: 'Natural', hex: '#F5E6D3' }, sizes: [{ size: 'S', stock: 6 }, { size: 'M', stock: 9 }, { size: 'L', stock: 8 }, { size: 'XL', stock: 5 }] }
    ]
  }
];

// Designer Wear / Dresses (20 items)
export const designerWear = [
  {
    id: 21,
    title: 'Elegant Evening Dress',
    brand: 'FashionHub',
    price: 4999,
    discountedPrice: 3999,
    images: ['https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Dresses' },
    subcategory: 'dress',
    gender: 'women',
    isNew: true,
    isOnSale: true,
    rating: 4.8,
    reviews: 145,
    variants: [
      { color: { name: 'Black', hex: '#000000' }, sizes: [{ size: 'S', stock: 5 }, { size: 'M', stock: 8 }, { size: 'L', stock: 6 }] },
      { color: { name: 'Navy', hex: '#001f3f' }, sizes: [{ size: 'M', stock: 4 }, { size: 'L', stock: 5 }] }
    ]
  },
  {
    id: 22,
    title: 'Floral Summer Dress',
    brand: 'FashionHub',
    price: 2499,
    images: ['https://images.unsplash.com/photo-1594633313593-bab3825d0caf?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Dresses' },
    subcategory: 'dress',
    gender: 'women',
    isNew: true,
    isOnSale: false,
    rating: 4.6,
    reviews: 198,
    variants: [
      { color: { name: 'Floral Print', hex: '#FFB6C1' }, sizes: [{ size: 'S', stock: 7 }, { size: 'M', stock: 10 }, { size: 'L', stock: 8 }] }
    ]
  },
  {
    id: 23,
    title: 'Cocktail Party Dress',
    brand: 'FashionHub',
    price: 3499,
    discountedPrice: 2799,
    images: ['https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Dresses' },
    subcategory: 'dress',
    gender: 'women',
    isNew: false,
    isOnSale: true,
    rating: 4.7,
    reviews: 167,
    variants: [
      { color: { name: 'Red', hex: '#FF0000' }, sizes: [{ size: 'S', stock: 4 }, { size: 'M', stock: 6 }, { size: 'L', stock: 5 }] }
    ]
  },
  {
    id: 24,
    title: 'Maxi Floral Dress',
    brand: 'FashionHub',
    price: 2999,
    images: ['https://images.unsplash.com/photo-1594633312680-3f4f7b3b3b3b?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Dresses' },
    subcategory: 'dress',
    gender: 'women',
    isNew: true,
    isOnSale: false,
    rating: 4.5,
    reviews: 123,
    variants: [
      { color: { name: 'Blue Floral', hex: '#4169E1' }, sizes: [{ size: 'M', stock: 5 }, { size: 'L', stock: 7 }, { size: 'XL', stock: 4 }] }
    ]
  },
  {
    id: 25,
    title: 'A-Line Wedding Dress',
    brand: 'FashionHub',
    price: 8999,
    discountedPrice: 6999,
    images: ['https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Dresses' },
    subcategory: 'dress',
    gender: 'women',
    isNew: false,
    isOnSale: true,
    rating: 4.9,
    reviews: 89,
    variants: [
      { color: { name: 'Ivory', hex: '#FFFFF0' }, sizes: [{ size: 'S', stock: 2 }, { size: 'M', stock: 3 }, { size: 'L', stock: 2 }] }
    ]
  },
  {
    id: 26,
    title: 'Casual Midi Dress',
    brand: 'FashionHub',
    price: 1999,
    images: ['https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Dresses' },
    subcategory: 'dress',
    gender: 'women',
    isNew: true,
    isOnSale: false,
    rating: 4.4,
    reviews: 156,
    variants: [
      { color: { name: 'Pink', hex: '#FFC0CB' }, sizes: [{ size: 'S', stock: 6 }, { size: 'M', stock: 9 }, { size: 'L', stock: 7 }] }
    ]
  },
  {
    id: 27,
    title: 'Bodycon Party Dress',
    brand: 'FashionHub',
    price: 2799,
    discountedPrice: 2199,
    images: ['https://images.unsplash.com/photo-1594633313593-bab3825d0caf?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Dresses' },
    subcategory: 'dress',
    gender: 'women',
    isNew: false,
    isOnSale: true,
    rating: 4.6,
    reviews: 134,
    variants: [
      { color: { name: 'Burgundy', hex: '#800020' }, sizes: [{ size: 'S', stock: 5 }, { size: 'M', stock: 7 }, { size: 'L', stock: 6 }] }
    ]
  },
  {
    id: 28,
    title: 'Wrap Style Dress',
    brand: 'FashionHub',
    price: 2299,
    images: ['https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Dresses' },
    subcategory: 'dress',
    gender: 'women',
    isNew: true,
    isOnSale: false,
    rating: 4.7,
    reviews: 178,
    variants: [
      { color: { name: 'Emerald', hex: '#50C878' }, sizes: [{ size: 'M', stock: 6 }, { size: 'L', stock: 8 }, { size: 'XL', stock: 5 }] }
    ]
  },
  {
    id: 29,
    title: 'Off-Shoulder Dress',
    brand: 'FashionHub',
    price: 2699,
    images: ['https://images.unsplash.com/photo-1594633312680-3f4f7b3b3b3b?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Dresses' },
    subcategory: 'dress',
    gender: 'women',
    isNew: false,
    isOnSale: false,
    rating: 4.5,
    reviews: 145,
    variants: [
      { color: { name: 'Lavender', hex: '#E6E6FA' }, sizes: [{ size: 'S', stock: 4 }, { size: 'M', stock: 6 }, { size: 'L', stock: 5 }] }
    ]
  },
  {
    id: 30,
    title: 'Designer Silk Dress',
    brand: 'FashionHub',
    price: 5999,
    discountedPrice: 4499,
    images: ['https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Dresses' },
    subcategory: 'dress',
    gender: 'women',
    isNew: true,
    isOnSale: true,
    rating: 4.9,
    reviews: 67,
    variants: [
      { color: { name: 'Gold', hex: '#FFD700' }, sizes: [{ size: 'M', stock: 3 }, { size: 'L', stock: 4 }] }
    ]
  },
  {
    id: 31,
    title: 'Shift Dress',
    brand: 'FashionHub',
    price: 1799,
    images: ['https://images.unsplash.com/photo-1594633313593-bab3825d0caf?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Dresses' },
    subcategory: 'dress',
    gender: 'women',
    isNew: true,
    isOnSale: false,
    rating: 4.3,
    reviews: 112,
    variants: [
      { color: { name: 'Coral', hex: '#FF7F50' }, sizes: [{ size: 'S', stock: 5 }, { size: 'M', stock: 8 }, { size: 'L', stock: 6 }] }
    ]
  },
  {
    id: 32,
    title: 'Princess Ball Gown',
    brand: 'FashionHub',
    price: 7999,
    discountedPrice: 5999,
    images: ['https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Dresses' },
    subcategory: 'dress',
    gender: 'women',
    isNew: false,
    isOnSale: true,
    rating: 4.8,
    reviews: 45,
    variants: [
      { color: { name: 'White', hex: '#FFFFFF' }, sizes: [{ size: 'M', stock: 2 }, { size: 'L', stock: 3 }] }
    ]
  },
  {
    id: 33,
    title: 'Boho Chic Dress',
    brand: 'FashionHub',
    price: 2199,
    images: ['https://images.unsplash.com/photo-1594633312680-3f4f7b3b3b3b?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Dresses' },
    subcategory: 'dress',
    gender: 'women',
    isNew: true,
    isOnSale: false,
    rating: 4.6,
    reviews: 189,
    variants: [
      { color: { name: 'Sage Green', hex: '#9CAF88' }, sizes: [{ size: 'S', stock: 6 }, { size: 'M', stock: 9 }, { size: 'L', stock: 7 }] }
    ]
  },
  {
    id: 34,
    title: 'Formal Office Dress',
    brand: 'FashionHub',
    price: 2499,
    discountedPrice: 1999,
    images: ['https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Dresses' },
    subcategory: 'dress',
    gender: 'women',
    isNew: false,
    isOnSale: true,
    rating: 4.5,
    reviews: 167,
    variants: [
      { color: { name: 'Navy', hex: '#001f3f' }, sizes: [{ size: 'S', stock: 5 }, { size: 'M', stock: 7 }, { size: 'L', stock: 6 }] }
    ]
  },
  {
    id: 35,
    title: 'Sundress Collection',
    brand: 'FashionHub',
    price: 1899,
    images: ['https://images.unsplash.com/photo-1594633313593-bab3825d0caf?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Dresses' },
    subcategory: 'dress',
    gender: 'women',
    isNew: true,
    isOnSale: false,
    rating: 4.7,
    reviews: 234,
    variants: [
      { color: { name: 'Yellow', hex: '#FFFF00' }, sizes: [{ size: 'M', stock: 7 }, { size: 'L', stock: 9 }, { size: 'XL', stock: 5 }] }
    ]
  },
  {
    id: 36,
    title: 'Designer Gown',
    brand: 'FashionHub',
    price: 9999,
    discountedPrice: 7999,
    images: ['https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Dresses' },
    subcategory: 'dress',
    gender: 'women',
    isNew: true,
    isOnSale: true,
    rating: 5.0,
    reviews: 34,
    variants: [
      { color: { name: 'Royal Blue', hex: '#4169E1' }, sizes: [{ size: 'M', stock: 1 }, { size: 'L', stock: 2 }] }
    ]
  },
  {
    id: 37,
    title: 'Knee Length Dress',
    brand: 'FashionHub',
    price: 1999,
    images: ['https://images.unsplash.com/photo-1594633312680-3f4f7b3b3b3b?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Dresses' },
    subcategory: 'dress',
    gender: 'women',
    isNew: false,
    isOnSale: false,
    rating: 4.4,
    reviews: 156,
    variants: [
      { color: { name: 'Mint', hex: '#98FF98' }, sizes: [{ size: 'S', stock: 5 }, { size: 'M', stock: 8 }, { size: 'L', stock: 6 }] }
    ]
  },
  {
    id: 38,
    title: 'Vintage Style Dress',
    brand: 'FashionHub',
    price: 2799,
    discountedPrice: 2199,
    images: ['https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Dresses' },
    subcategory: 'dress',
    gender: 'women',
    isNew: false,
    isOnSale: true,
    rating: 4.6,
    reviews: 123,
    variants: [
      { color: { name: 'Rose', hex: '#FF007F' }, sizes: [{ size: 'M', stock: 6 }, { size: 'L', stock: 8 }, { size: 'XL', stock: 4 }] }
    ]
  },
  {
    id: 39,
    title: 'Cocktail Mini Dress',
    brand: 'FashionHub',
    price: 2399,
    images: ['https://images.unsplash.com/photo-1594633313593-bab3825d0caf?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Dresses' },
    subcategory: 'dress',
    gender: 'women',
    isNew: true,
    isOnSale: false,
    rating: 4.5,
    reviews: 178,
    variants: [
      { color: { name: 'Purple', hex: '#800080' }, sizes: [{ size: 'S', stock: 4 }, { size: 'M', stock: 7 }, { size: 'L', stock: 5 }] }
    ]
  },
  {
    id: 40,
    title: 'Designer Evening Gown',
    brand: 'FashionHub',
    price: 6999,
    discountedPrice: 5499,
    images: ['https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Dresses' },
    subcategory: 'dress',
    gender: 'women',
    isNew: true,
    isOnSale: true,
    rating: 4.9,
    reviews: 89,
    variants: [
      { color: { name: 'Silver', hex: '#C0C0C0' }, sizes: [{ size: 'M', stock: 3 }, { size: 'L', stock: 4 }] }
    ]
  }
];

// Best Sellers (20 items - mix of popular items)
export const bestSellers = [
  {
    id: 41,
    title: 'Classic White T-Shirt',
    brand: 'FashionHub',
    price: 599,
    discountedPrice: 449,
    images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'T-Shirts' },
    subcategory: 't-shirt',
    gender: 'unisex',
    isNew: false,
    isOnSale: true,
    rating: 4.8,
    reviews: 1245,
    variants: [
      { color: { name: 'White', hex: '#FFFFFF' }, sizes: [{ size: 'S', stock: 25 }, { size: 'M', stock: 30 }, { size: 'L', stock: 28 }, { size: 'XL', stock: 20 }] }
    ]
  },
  {
    id: 42,
    title: 'Slim Fit Jeans',
    brand: 'FashionHub',
    price: 1999,
    discountedPrice: 1499,
    images: ['https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Bottoms' },
    subcategory: 'jeans',
    gender: 'men',
    isNew: false,
    isOnSale: true,
    rating: 4.7,
    reviews: 987,
    variants: [
      { color: { name: 'Blue', hex: '#0000FF' }, sizes: [{ size: '30', stock: 15 }, { size: '32', stock: 20 }, { size: '34', stock: 18 }] }
    ]
  },
  {
    id: 43,
    title: 'Floral Summer Dress',
    brand: 'FashionHub',
    price: 2499,
    images: ['https://images.unsplash.com/photo-1594633313593-bab3825d0caf?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Dresses' },
    subcategory: 'dress',
    gender: 'women',
    isNew: false,
    isOnSale: false,
    rating: 4.9,
    reviews: 1456,
    variants: [
      { color: { name: 'Floral Print', hex: '#FFB6C1' }, sizes: [{ size: 'S', stock: 12 }, { size: 'M', stock: 18 }, { size: 'L', stock: 15 }] }
    ]
  },
  {
    id: 44,
    title: 'Denim Jacket',
    brand: 'FashionHub',
    price: 2499,
    discountedPrice: 1999,
    images: ['https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Outerwear' },
    subcategory: 'jacket',
    gender: 'unisex',
    isNew: false,
    isOnSale: true,
    rating: 4.6,
    reviews: 834,
    variants: [
      { color: { name: 'Blue', hex: '#0000FF' }, sizes: [{ size: 'M', stock: 10 }, { size: 'L', stock: 12 }, { size: 'XL', stock: 8 }] }
    ]
  },
  {
    id: 45,
    title: 'Premium Cotton T-Shirt',
    brand: 'FashionHub',
    price: 799,
    discountedPrice: 599,
    images: ['https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'T-Shirts' },
    subcategory: 't-shirt',
    gender: 'men',
    isNew: false,
    isOnSale: true,
    rating: 4.5,
    reviews: 756,
    variants: [
      { color: { name: 'Navy Blue', hex: '#001f3f' }, sizes: [{ size: 'M', stock: 15 }, { size: 'L', stock: 18 }, { size: 'XL', stock: 12 }] }
    ]
  },
  {
    id: 46,
    title: 'Elegant Evening Dress',
    brand: 'FashionHub',
    price: 4999,
    discountedPrice: 3999,
    images: ['https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Dresses' },
    subcategory: 'dress',
    gender: 'women',
    isNew: false,
    isOnSale: true,
    rating: 4.8,
    reviews: 623,
    variants: [
      { color: { name: 'Black', hex: '#000000' }, sizes: [{ size: 'S', stock: 8 }, { size: 'M', stock: 12 }, { size: 'L', stock: 10 }] }
    ]
  },
  {
    id: 47,
    title: 'Hooded Sweatshirt',
    brand: 'FashionHub',
    price: 1799,
    discountedPrice: 1399,
    images: ['https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Tops' },
    subcategory: 'hoodie',
    gender: 'unisex',
    isNew: false,
    isOnSale: true,
    rating: 4.7,
    reviews: 912,
    variants: [
      { color: { name: 'Grey', hex: '#808080' }, sizes: [{ size: 'M', stock: 14 }, { size: 'L', stock: 16 }, { size: 'XL', stock: 11 }] }
    ]
  },
  {
    id: 48,
    title: 'Formal Shirt',
    brand: 'FashionHub',
    price: 1499,
    images: ['https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Tops' },
    subcategory: 'shirt',
    gender: 'men',
    isNew: false,
    isOnSale: false,
    rating: 4.6,
    reviews: 678,
    variants: [
      { color: { name: 'White', hex: '#FFFFFF' }, sizes: [{ size: 'M', stock: 12 }, { size: 'L', stock: 15 }, { size: 'XL', stock: 10 }] }
    ]
  },
  {
    id: 49,
    title: 'Casual Midi Dress',
    brand: 'FashionHub',
    price: 1999,
    images: ['https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Dresses' },
    subcategory: 'dress',
    gender: 'women',
    isNew: false,
    isOnSale: false,
    rating: 4.5,
    reviews: 567,
    variants: [
      { color: { name: 'Pink', hex: '#FFC0CB' }, sizes: [{ size: 'S', stock: 10 }, { size: 'M', stock: 14 }, { size: 'L', stock: 12 }] }
    ]
  },
  {
    id: 50,
    title: 'Cargo Pants',
    brand: 'FashionHub',
    price: 2199,
    discountedPrice: 1799,
    images: ['https://images.unsplash.com/photo-1506629905607-4c3c8e0e0c5e?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Bottoms' },
    subcategory: 'trousers',
    gender: 'men',
    isNew: false,
    isOnSale: true,
    rating: 4.4,
    reviews: 445,
    variants: [
      { color: { name: 'Khaki', hex: '#C3B091' }, sizes: [{ size: '32', stock: 9 }, { size: '34', stock: 11 }, { size: '36', stock: 8 }] }
    ]
  },
  {
    id: 51,
    title: 'Kurti Set',
    brand: 'FashionHub',
    price: 1799,
    images: ['https://images.unsplash.com/photo-1594633312680-3f4f7b3b3b3b?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Traditional' },
    subcategory: 'kurti',
    gender: 'women',
    isNew: false,
    isOnSale: false,
    rating: 4.7,
    reviews: 789,
    variants: [
      { color: { name: 'Peach', hex: '#FFE5B4' }, sizes: [{ size: 'M', stock: 11 }, { size: 'L', stock: 13 }, { size: 'XL', stock: 9 }] }
    ]
  },
  {
    id: 52,
    title: 'Leather Jacket',
    brand: 'FashionHub',
    price: 4999,
    discountedPrice: 3999,
    images: ['https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Outerwear' },
    subcategory: 'jacket',
    gender: 'unisex',
    isNew: false,
    isOnSale: true,
    rating: 4.9,
    reviews: 523,
    variants: [
      { color: { name: 'Black', hex: '#000000' }, sizes: [{ size: 'M', stock: 7 }, { size: 'L', stock: 9 }, { size: 'XL', stock: 6 }] }
    ]
  },
  {
    id: 53,
    title: 'Athletic Shorts',
    brand: 'FashionHub',
    price: 999,
    images: ['https://images.unsplash.com/photo-1506629905607-4c3c8e0e0c5e?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Bottoms' },
    subcategory: 'shorts',
    gender: 'men',
    isNew: false,
    isOnSale: false,
    rating: 4.3,
    reviews: 634,
    variants: [
      { color: { name: 'Navy', hex: '#001f3f' }, sizes: [{ size: 'M', stock: 13 }, { size: 'L', stock: 15 }, { size: 'XL', stock: 10 }] }
    ]
  },
  {
    id: 54,
    title: 'Wrap Style Dress',
    brand: 'FashionHub',
    price: 2299,
    images: ['https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Dresses' },
    subcategory: 'dress',
    gender: 'women',
    isNew: false,
    isOnSale: false,
    rating: 4.6,
    reviews: 712,
    variants: [
      { color: { name: 'Emerald', hex: '#50C878' }, sizes: [{ size: 'M', stock: 10 }, { size: 'L', stock: 12 }, { size: 'XL', stock: 8 }] }
    ]
  },
  {
    id: 55,
    title: 'Polo T-Shirt',
    brand: 'FashionHub',
    price: 999,
    discountedPrice: 799,
    images: ['https://images.unsplash.com/photo-1521223890152-f9c7d3250b14?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'T-Shirts' },
    subcategory: 't-shirt',
    gender: 'men',
    isNew: false,
    isOnSale: true,
    rating: 4.5,
    reviews: 856,
    variants: [
      { color: { name: 'Blue', hex: '#0000FF' }, sizes: [{ size: 'M', stock: 11 }, { size: 'L', stock: 14 }, { size: 'XL', stock: 9 }] }
    ]
  },
  {
    id: 56,
    title: 'Maxi Floral Dress',
    brand: 'FashionHub',
    price: 2999,
    images: ['https://images.unsplash.com/photo-1594633312680-3f4f7b3b3b3b?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Dresses' },
    subcategory: 'dress',
    gender: 'women',
    isNew: false,
    isOnSale: false,
    rating: 4.7,
    reviews: 645,
    variants: [
      { color: { name: 'Blue Floral', hex: '#4169E1' }, sizes: [{ size: 'M', stock: 9 }, { size: 'L', stock: 11 }, { size: 'XL', stock: 7 }] }
    ]
  },
  {
    id: 57,
    title: 'Chinos',
    brand: 'FashionHub',
    price: 1899,
    discountedPrice: 1499,
    images: ['https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Bottoms' },
    subcategory: 'trousers',
    gender: 'men',
    isNew: false,
    isOnSale: true,
    rating: 4.4,
    reviews: 534,
    variants: [
      { color: { name: 'Beige', hex: '#F5F5DC' }, sizes: [{ size: '32', stock: 10 }, { size: '34', stock: 12 }, { size: '36', stock: 9 }] }
    ]
  },
  {
    id: 58,
    title: 'Bodycon Party Dress',
    brand: 'FashionHub',
    price: 2799,
    discountedPrice: 2199,
    images: ['https://images.unsplash.com/photo-1594633313593-bab3825d0caf?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Dresses' },
    subcategory: 'dress',
    gender: 'women',
    isNew: false,
    isOnSale: true,
    rating: 4.6,
    reviews: 678,
    variants: [
      { color: { name: 'Burgundy', hex: '#800020' }, sizes: [{ size: 'S', stock: 8 }, { size: 'M', stock: 10 }, { size: 'L', stock: 9 }] }
    ]
  },
  {
    id: 59,
    title: 'Hoodie',
    brand: 'FashionHub',
    price: 1799,
    images: ['https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Tops' },
    subcategory: 'hoodie',
    gender: 'unisex',
    isNew: false,
    isOnSale: false,
    rating: 4.8,
    reviews: 1023,
    variants: [
      { color: { name: 'Black', hex: '#000000' }, sizes: [{ size: 'M', stock: 16 }, { size: 'L', stock: 18 }, { size: 'XL', stock: 13 }] }
    ]
  },
  {
    id: 60,
    title: 'Designer Silk Dress',
    brand: 'FashionHub',
    price: 5999,
    discountedPrice: 4499,
    images: ['https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Dresses' },
    subcategory: 'dress',
    gender: 'women',
    isNew: false,
    isOnSale: true,
    rating: 4.9,
    reviews: 456,
    variants: [
      { color: { name: 'Gold', hex: '#FFD700' }, sizes: [{ size: 'M', stock: 5 }, { size: 'L', stock: 6 }] }
    ]
  }
];

// Accessories (20 items)
export const accessories = [
  {
    id: 61,
    title: 'Silk Scarf',
    brand: 'FashionHub',
    price: 899,
    discountedPrice: 699,
    images: ['https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Accessories' },
    subcategory: 'scarf',
    gender: 'women',
    isNew: true,
    isOnSale: true,
    rating: 4.6,
    reviews: 234,
    variants: [
      { color: { name: 'Floral Print', hex: '#FFB6C1' }, sizes: [{ size: 'One Size', stock: 25 }] }
    ]
  },
  {
    id: 62,
    title: 'Leather Belt',
    brand: 'FashionHub',
    price: 1299,
    images: ['https://images.unsplash.com/photo-1624222247344-550fb60583fd?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Accessories' },
    subcategory: 'belt',
    gender: 'unisex',
    isNew: false,
    isOnSale: false,
    rating: 4.5,
    reviews: 178,
    variants: [
      { color: { name: 'Brown', hex: '#8B4513' }, sizes: [{ size: '32', stock: 8 }, { size: '34', stock: 10 }, { size: '36', stock: 7 }] }
    ]
  },
  {
    id: 63,
    title: 'Designer Handbag',
    brand: 'FashionHub',
    price: 2999,
    discountedPrice: 2399,
    images: ['https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Accessories' },
    subcategory: 'bag',
    gender: 'women',
    isNew: true,
    isOnSale: true,
    rating: 4.8,
    reviews: 456,
    variants: [
      { color: { name: 'Black', hex: '#000000' }, sizes: [{ size: 'One Size', stock: 12 }] },
      { color: { name: 'Tan', hex: '#D2B48C' }, sizes: [{ size: 'One Size', stock: 8 }] }
    ]
  },
  {
    id: 64,
    title: 'Baseball Cap',
    brand: 'FashionHub',
    price: 599,
    images: ['https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Accessories' },
    subcategory: 'hat',
    gender: 'unisex',
    isNew: true,
    isOnSale: false,
    rating: 4.4,
    reviews: 312,
    variants: [
      { color: { name: 'Navy', hex: '#001f3f' }, sizes: [{ size: 'One Size', stock: 20 }] }
    ]
  },
  {
    id: 65,
    title: 'Leather Wallet',
    brand: 'FashionHub',
    price: 1499,
    discountedPrice: 1199,
    images: ['https://images.unsplash.com/photo-1624222247344-550fb60583fd?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Accessories' },
    subcategory: 'bag',
    gender: 'men',
    isNew: false,
    isOnSale: true,
    rating: 4.7,
    reviews: 267,
    variants: [
      { color: { name: 'Black', hex: '#000000' }, sizes: [{ size: 'One Size', stock: 15 }] }
    ]
  },
  {
    id: 66,
    title: 'Wool Scarf',
    brand: 'FashionHub',
    price: 1199,
    images: ['https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Accessories' },
    subcategory: 'scarf',
    gender: 'unisex',
    isNew: false,
    isOnSale: false,
    rating: 4.5,
    reviews: 189,
    variants: [
      { color: { name: 'Grey', hex: '#808080' }, sizes: [{ size: 'One Size', stock: 18 }] }
    ]
  },
  {
    id: 67,
    title: 'Crossbody Bag',
    brand: 'FashionHub',
    price: 1799,
    images: ['https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Accessories' },
    subcategory: 'bag',
    gender: 'women',
    isNew: true,
    isOnSale: false,
    rating: 4.6,
    reviews: 345,
    variants: [
      { color: { name: 'Brown', hex: '#8B4513' }, sizes: [{ size: 'One Size', stock: 10 }] }
    ]
  },
  {
    id: 68,
    title: 'Beanie Hat',
    brand: 'FashionHub',
    price: 499,
    discountedPrice: 399,
    images: ['https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Accessories' },
    subcategory: 'hat',
    gender: 'unisex',
    isNew: false,
    isOnSale: true,
    rating: 4.3,
    reviews: 223,
    variants: [
      { color: { name: 'Black', hex: '#000000' }, sizes: [{ size: 'One Size', stock: 22 }] }
    ]
  },
  {
    id: 69,
    title: 'Designer Tote Bag',
    brand: 'FashionHub',
    price: 2499,
    discountedPrice: 1999,
    images: ['https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Accessories' },
    subcategory: 'bag',
    gender: 'women',
    isNew: true,
    isOnSale: true,
    rating: 4.7,
    reviews: 278,
    variants: [
      { color: { name: 'Cream', hex: '#FFFDD0' }, sizes: [{ size: 'One Size', stock: 9 }] }
    ]
  },
  {
    id: 70,
    title: 'Leather Watch Strap',
    brand: 'FashionHub',
    price: 799,
    images: ['https://images.unsplash.com/photo-1624222247344-550fb60583fd?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Accessories' },
    subcategory: 'belt',
    gender: 'unisex',
    isNew: false,
    isOnSale: false,
    rating: 4.4,
    reviews: 156,
    variants: [
      { color: { name: 'Brown', hex: '#8B4513' }, sizes: [{ size: 'One Size', stock: 14 }] }
    ]
  },
  {
    id: 71,
    title: 'Pashmina Shawl',
    brand: 'FashionHub',
    price: 1999,
    images: ['https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Accessories' },
    subcategory: 'scarf',
    gender: 'women',
    isNew: true,
    isOnSale: false,
    rating: 4.8,
    reviews: 412,
    variants: [
      { color: { name: 'Pink', hex: '#FFC0CB' }, sizes: [{ size: 'One Size', stock: 11 }] }
    ]
  },
  {
    id: 72,
    title: 'Canvas Backpack',
    brand: 'FashionHub',
    price: 2199,
    discountedPrice: 1799,
    images: ['https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Accessories' },
    subcategory: 'bag',
    gender: 'unisex',
    isNew: false,
    isOnSale: true,
    rating: 4.5,
    reviews: 334,
    variants: [
      { color: { name: 'Navy', hex: '#001f3f' }, sizes: [{ size: 'One Size', stock: 13 }] }
    ]
  },
  {
    id: 73,
    title: 'Fedora Hat',
    brand: 'FashionHub',
    price: 1299,
    images: ['https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Accessories' },
    subcategory: 'hat',
    gender: 'unisex',
    isNew: true,
    isOnSale: false,
    rating: 4.6,
    reviews: 201,
    variants: [
      { color: { name: 'Beige', hex: '#F5F5DC' }, sizes: [{ size: 'One Size', stock: 16 }] }
    ]
  },
  {
    id: 74,
    title: 'Chain Belt',
    brand: 'FashionHub',
    price: 999,
    discountedPrice: 799,
    images: ['https://images.unsplash.com/photo-1624222247344-550fb60583fd?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Accessories' },
    subcategory: 'belt',
    gender: 'women',
    isNew: false,
    isOnSale: true,
    rating: 4.4,
    reviews: 167,
    variants: [
      { color: { name: 'Gold', hex: '#FFD700' }, sizes: [{ size: 'One Size', stock: 12 }] }
    ]
  },
  {
    id: 75,
    title: 'Clutch Purse',
    brand: 'FashionHub',
    price: 1499,
    images: ['https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Accessories' },
    subcategory: 'bag',
    gender: 'women',
    isNew: true,
    isOnSale: false,
    rating: 4.7,
    reviews: 289,
    variants: [
      { color: { name: 'Red', hex: '#FF0000' }, sizes: [{ size: 'One Size', stock: 8 }] }
    ]
  },
  {
    id: 76,
    title: 'Knit Scarf',
    brand: 'FashionHub',
    price: 899,
    images: ['https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Accessories' },
    subcategory: 'scarf',
    gender: 'unisex',
    isNew: false,
    isOnSale: false,
    rating: 4.3,
    reviews: 198,
    variants: [
      { color: { name: 'Multi Color', hex: '#CCCCCC' }, sizes: [{ size: 'One Size', stock: 19 }] }
    ]
  },
  {
    id: 77,
    title: 'Leather Messenger Bag',
    brand: 'FashionHub',
    price: 3499,
    discountedPrice: 2799,
    images: ['https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Accessories' },
    subcategory: 'bag',
    gender: 'men',
    isNew: false,
    isOnSale: true,
    rating: 4.8,
    reviews: 445,
    variants: [
      { color: { name: 'Brown', hex: '#8B4513' }, sizes: [{ size: 'One Size', stock: 7 }] }
    ]
  },
  {
    id: 78,
    title: 'Bucket Hat',
    brand: 'FashionHub',
    price: 699,
    images: ['https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Accessories' },
    subcategory: 'hat',
    gender: 'unisex',
    isNew: true,
    isOnSale: false,
    rating: 4.5,
    reviews: 256,
    variants: [
      { color: { name: 'Olive', hex: '#808000' }, sizes: [{ size: 'One Size', stock: 17 }] }
    ]
  },
  {
    id: 79,
    title: 'Wide Belt',
    brand: 'FashionHub',
    price: 1199,
    discountedPrice: 999,
    images: ['https://images.unsplash.com/photo-1624222247344-550fb60583fd?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Accessories' },
    subcategory: 'belt',
    gender: 'women',
    isNew: false,
    isOnSale: true,
    rating: 4.6,
    reviews: 178,
    variants: [
      { color: { name: 'Black', hex: '#000000' }, sizes: [{ size: 'One Size', stock: 11 }] }
    ]
  },
  {
    id: 80,
    title: 'Designer Clutch',
    brand: 'FashionHub',
    price: 2799,
    discountedPrice: 2199,
    images: ['https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1000&auto=format&fit=crop'],
    category: { title: 'Accessories' },
    subcategory: 'bag',
    gender: 'women',
    isNew: true,
    isOnSale: true,
    rating: 4.9,
    reviews: 367,
    variants: [
      { color: { name: 'Silver', hex: '#C0C0C0' }, sizes: [{ size: 'One Size', stock: 6 }] }
    ]
  }
];

// Helper function to generate slug from title
const generateSlug = (title) => {
  return title.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

// Helper function to ensure all products have slugs
const ensureSlugs = (products) => {
  return products.map((product, index) => ({
    ...product,
    _id: product._id || `product-${product.id || index}`,
    slug: product.slug || { current: generateSlug(product.title) }
  }));
};

// Helper function to get products by category
export const getProductsByCategory = (subcategory, sortBy = 'newest') => {
  let products = [];
  
  switch (subcategory) {
    case 't-shirt':
      products = tShirts;
      break;
    case 'dress':
      products = designerWear;
      break;
    case 'scarf':
    case 'belt':
    case 'bag':
    case 'hat':
      products = accessories;
      break;
    default:
      products = [...tShirts, ...designerWear, ...bestSellers, ...accessories];
  }
  
  // Ensure all products have slugs
  products = ensureSlugs(products);
  
  // Sort products
  if (sortBy === 'popular') {
    products = [...products].sort((a, b) => (b.reviews || 0) - (a.reviews || 0));
  } else if (sortBy === 'price-low') {
    products = [...products].sort((a, b) => (a.discountedPrice || a.price) - (b.discountedPrice || b.price));
  } else if (sortBy === 'price-high') {
    products = [...products].sort((a, b) => (b.discountedPrice || b.price) - (a.discountedPrice || a.price));
  } else if (sortBy === 'rating') {
    products = [...products].sort((a, b) => (b.rating || 0) - (a.rating || 0));
  } else {
    // newest - keep original order
    products = [...products];
  }
  
  return products;
};

// Get best sellers
export const getBestSellers = (sortBy = 'popular') => {
  const products = ensureSlugs(bestSellers);
  
  if (sortBy === 'popular') {
    return [...products].sort((a, b) => (b.reviews || 0) - (a.reviews || 0));
  } else if (sortBy === 'price-low') {
    return [...products].sort((a, b) => (a.discountedPrice || a.price) - (b.discountedPrice || b.price));
  } else if (sortBy === 'price-high') {
    return [...products].sort((a, b) => (b.discountedPrice || b.price) - (a.discountedPrice || a.price));
  } else if (sortBy === 'rating') {
    return [...products].sort((a, b) => (b.rating || 0) - (a.rating || 0));
  }
  
  return products;
};
