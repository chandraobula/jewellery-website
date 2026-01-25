import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Sanity configuration
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || 'cg75sn8r';
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || '2024-01-01';
const useCdn = import.meta.env.VITE_SANITY_USE_CDN === 'true' || true;
const token = import.meta.env.VITE_SANITY_TOKEN;

// Create Sanity client
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  token,
});

// Image URL builder
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

// Get products with fashion filters
export const getProducts = async (filters = {}, pagination = {}) => {
  const { page = 0, limit = 20 } = pagination;
  const offset = page * limit;
  
  let query = `*[_type == "product"`;
  
  if (filters.category) query += ` && category->slug.current == "${filters.category}"`;
  if (filters.gender) query += ` && gender == "${filters.gender}"`;
  if (filters.subcategory) query += ` && subcategory == "${filters.subcategory}"`;
  if (filters.brand) query += ` && brand == "${filters.brand}"`;
  if (filters.fabric) query += ` && fabric == "${filters.fabric}"`;
  if (filters.fit) query += ` && fit == "${filters.fit}"`;
  if (filters.pattern) query += ` && pattern == "${filters.pattern}"`;
  if (filters.occasion?.length) query += ` && occasion[] match "${filters.occasion.join('|')}"`;
  if (filters.season) query += ` && season == "${filters.season}"`;
  if (filters.size) query += ` && variants[].sizes[].size == "${filters.size}"`;
  if (filters.color) query += ` && (variants[].color.name == "${filters.color}" || variants[].color.hex == "${filters.color}")`;
  if (filters.minPrice || filters.maxPrice) query += ` && price >= ${filters.minPrice || 0} && price <= ${filters.maxPrice || 999999}`;
  if (filters.discountMin) query += ` && defined(discountedPrice) && ((price - discountedPrice) / price * 100) >= ${filters.discountMin}`;
  if (filters.inStock !== undefined) {
    query += filters.inStock ? ` && count(variants[].sizes[?stock > 0]) > 0` : ` && count(variants[].sizes[?stock > 0]) == 0`;
  }
  if (filters.search) query += ` && (title match "*${filters.search}*" || description match "*${filters.search}*" || brand match "*${filters.search}*" || tags[] match "*${filters.search}*")`;
  
  let orderBy = '_createdAt desc';
  if (filters.sortBy === 'price-low') orderBy = 'price asc';
  else if (filters.sortBy === 'price-high') orderBy = 'price desc';
  else if (filters.sortBy === 'popular') orderBy = 'reviews desc';
  else if (filters.sortBy === 'rating') orderBy = 'rating desc';
  
  query += `] | order(${orderBy}) [${offset}...${offset + limit}] {
    _id, title, slug, brand, price, discountedPrice, currency,
    category->{_id, title, slug}, subcategory, gender,
    variants[]{color{name, hex, image}, sizes[]{size, stock, sku}, images, sku},
    images, description, fabric, fit, sleeveType, necklineType, length,
    pattern, occasion, season, careInstructions, countryOfOrigin,
    modelInfo{height, wearingSize}, isNew, isFeatured, isOnSale,
    tags, rating, reviews, _createdAt, _updatedAt
  }`;
  
  return await client.fetch(query);
};

export const getProductsCount = async (filters = {}) => {
  let query = `count(*[_type == "product"`;
  if (filters.category) query += ` && category->slug.current == "${filters.category}"`;
  if (filters.gender) query += ` && gender == "${filters.gender}"`;
  if (filters.brand) query += ` && brand == "${filters.brand}"`;
  if (filters.size) query += ` && variants[].sizes[].size == "${filters.size}"`;
  if (filters.color) query += ` && (variants[].color.name == "${filters.color}" || variants[].color.hex == "${filters.color}")`;
  if (filters.minPrice || filters.maxPrice) query += ` && price >= ${filters.minPrice || 0} && price <= ${filters.maxPrice || 999999}`;
  if (filters.search) query += ` && (title match "*${filters.search}*" || description match "*${filters.search}*" || brand match "*${filters.search}*")`;
  query += `])`;
  return await client.fetch(query);
};

export const getProductBySlug = async (slug) => {
  const query = `*[_type == "product" && slug.current == $slug][0] {
    _id, title, slug, brand, price, discountedPrice, currency,
    category->{_id, title, slug}, subcategory, gender,
    variants[]{color{name, hex, image}, sizes[]{size, stock, sku}, images, sku},
    images, description, fabric, fit, sleeveType, necklineType, length,
    pattern, occasion, season, careInstructions, countryOfOrigin,
    modelInfo{height, wearingSize}, isNew, isFeatured, isOnSale,
    tags, rating, reviews, seoTitle, seoDescription, _createdAt, _updatedAt
  }`;
  return await client.fetch(query, { slug });
};

export const getCategories = async () => {
  const query = `*[_type == "category"] | order(sortOrder asc, title asc) {
    _id, title, slug, description, image, gender, featured
  }`;
  return await client.fetch(query);
};

export const getFeaturedProducts = async () => {
  const query = `*[_type == "product" && isFeatured == true] | order(_createdAt desc) [0...8] {
    _id, title, slug, brand, price, discountedPrice, currency,
    category->{_id, title, slug}, gender,
    variants[]{color{name, hex, image}, sizes[]{size, stock}, images},
    images, isNew, isOnSale, rating, reviews
  }`;
  return await client.fetch(query);
};

export const getCollections = async () => {
  const query = `*[_type == "collection" && (!defined(startDate) || startDate <= now()) && (!defined(endDate) || endDate >= now())] | order(featured desc, _createdAt desc) {
    _id, title, slug, description, image, type,
    products[]->{_id, title, slug, price, discountedPrice, images, variants[].color{name, hex}},
    featured
  }`;
  return await client.fetch(query);
};

export const getCollectionBySlug = async (slug) => {
  const query = `*[_type == "collection" && slug.current == $slug][0] {
    _id, title, slug, description, image, type,
    products[]->{
      _id, title, slug, brand, price, discountedPrice, currency,
      category->{_id, title, slug}, gender,
      variants[]{color{name, hex, image}, sizes[]{size, stock}, images},
      images, isNew, isOnSale, rating, reviews
    },
    startDate, endDate, featured
  }`;
  return await client.fetch(query, { slug });
};

export const getSizeGuide = async (categoryId, gender) => {
  let query = `*[_type == "sizeGuide"`;
  if (categoryId) query += ` && category._ref == "${categoryId}"`;
  if (gender) query += ` && gender == "${gender}"`;
  query += `][0] {_id, title, category->{_id, title}, gender, measurements, internationalSizes}`;
  return await client.fetch(query);
};

export const getBrands = async () => {
  return await client.fetch(`array::unique(*[_type == "product"].brand) | order(@ asc)`);
};

export const getColors = async () => {
  return await client.fetch(`array::unique(*[_type == "product"].variants[].color.name) | order(@ asc)`);
};

export const getSizes = async () => {
  return await client.fetch(`array::unique(*[_type == "product"].variants[].sizes[].size) | order(@ asc)`);
};

export const getPageContent = async (slug) => {
  const query = `*[_type == "page" && slug.current == $slug][0] {
    _id, title, slug, content, metaDescription, _createdAt, _updatedAt
  }`;
  return await client.fetch(query, { slug });
};

export const getTestimonials = async (productId = null) => {
  let query = `*[_type == "testimonial"`;
  if (productId) query += ` && product._ref == "${productId}"`;
  query += `] | order(_createdAt desc) {
    _id, name, role, image, rating, text,
    product->{_id, title, slug}, sizeFeedback, fitRating,
    customerPhotos, isFeatured, _createdAt
  }`;
  return await client.fetch(query);
};

export const getSiteSettings = async () => {
  const query = `*[_type == "siteSettings"][0] {
    _id, siteName, siteDescription, logo, contactEmail, contactPhone, address, socialLinks, _createdAt, _updatedAt
  }`;
  return await client.fetch(query);
};

export const searchProducts = async (searchTerm, filters = {}, pagination = {}) => {
  const { page = 0, limit = 20 } = pagination;
  const offset = page * limit;
  
  let query = `*[_type == "product"`;
  if (searchTerm) query += ` && (title match "*${searchTerm}*" || description match "*${searchTerm}*" || brand match "*${searchTerm}*" || fabric match "*${searchTerm}*" || tags[] match "*${searchTerm}*")`;
  if (filters.category) query += ` && category->slug.current == "${filters.category}"`;
  if (filters.gender) query += ` && gender == "${filters.gender}"`;
  if (filters.brand) query += ` && brand == "${filters.brand}"`;
  if (filters.size) query += ` && variants[].sizes[].size == "${filters.size}"`;
  if (filters.color) query += ` && (variants[].color.name == "${filters.color}" || variants[].color.hex == "${filters.color}")`;
  if (filters.minPrice || filters.maxPrice) query += ` && price >= ${filters.minPrice || 0} && price <= ${filters.maxPrice || 999999}`;
  
  let orderBy = '_createdAt desc';
  if (filters.sortBy === 'price-low') orderBy = 'price asc';
  else if (filters.sortBy === 'price-high') orderBy = 'price desc';
  else if (filters.sortBy === 'popular') orderBy = 'reviews desc';
  else if (filters.sortBy === 'rating') orderBy = 'rating desc';
  
  query += `] | order(${orderBy}) [${offset}...${offset + limit}] {
    _id, title, slug, brand, price, discountedPrice, currency,
    category->{_id, title, slug}, gender,
    variants[]{color{name, hex, image}, sizes[]{size, stock}, images},
    images, isNew, isOnSale, rating, reviews
  }`;
  return await client.fetch(query);
};

export const getSimilarProducts = async (productId, categoryId, limit = 4) => {
  const query = `*[_type == "product" && _id != $productId && category._ref == $categoryId] | order(_createdAt desc) [0...$limit] {
    _id, title, slug, brand, price, discountedPrice, currency,
    category->{_id, title, slug}, gender,
    variants[]{color{name, hex, image}, sizes[]{size, stock}, images},
    images, isNew, isOnSale, rating, reviews
  }`;
  return await client.fetch(query, { productId, categoryId, limit });
};
