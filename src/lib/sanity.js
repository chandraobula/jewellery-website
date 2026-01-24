import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Sanity configuration
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || 'cg75sn8r';
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || '2024-01-01';
const useCdn = import.meta.env.VITE_SANITY_USE_CDN === 'true' || true;
const token = import.meta.env.VITE_SANITY_TOKEN; // For private datasets

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

// Helper function to generate image URLs
export const urlFor = (source) => builder.image(source);

// Query functions for jewellery products
export const getProducts = async (filters = {}, pagination = {}) => {
  const { page = 0, limit = 20 } = pagination;
  const offset = page * limit;
  
  let query = `*[_type == "product"`;
  
  // Add filters
  if (filters.category) {
    query += ` && category->slug.current == "${filters.category}"`;
  }
  
  if (filters.material) {
    query += ` && material == "${filters.material}"`;
  }
  
  if (filters.gemstone) {
    query += ` && gemstone == "${filters.gemstone}"`;
  }
  
  if (filters.minPrice || filters.maxPrice) {
    query += ` && price >= ${filters.minPrice || 0} && price <= ${filters.maxPrice || 999999}`;
  }
  
  if (filters.search) {
    query += ` && (title match "*${filters.search}*" || description match "*${filters.search}*" || tags[] match "*${filters.search}*")`;
  }
  
  query += `] | order(_createdAt desc) [${offset}...${offset + limit}] {
    _id,
    title,
    slug,
    price,
    originalPrice,
    category->{
      _id,
      title,
      slug
    },
    subcategory,
    material,
    gemstone,
    weight,
    size,
    images[0...3],
    description,
    features,
    isNew,
    isFeatured,
    isOnSale,
    stock,
    tags,
    rating,
    reviews,
    _createdAt,
    _updatedAt
  }`;
  
  return await client.fetch(query);
};

// Get total count for pagination
export const getProductsCount = async (filters = {}) => {
  let query = `count(*[_type == "product"`;
  
  // Add same filters as getProducts
  if (filters.category) {
    query += ` && category->slug.current == "${filters.category}"`;
  }
  
  if (filters.material) {
    query += ` && material == "${filters.material}"`;
  }
  
  if (filters.gemstone) {
    query += ` && gemstone == "${filters.gemstone}"`;
  }
  
  if (filters.minPrice || filters.maxPrice) {
    query += ` && price >= ${filters.minPrice || 0} && price <= ${filters.maxPrice || 999999}`;
  }
  
  if (filters.search) {
    query += ` && (title match "*${filters.search}*" || description match "*${filters.search}*" || tags[] match "*${filters.search}*")`;
  }
  
  query += `])`;
  
  return await client.fetch(query);
};

export const getProductBySlug = async (slug) => {
  const query = `
    *[_type == "product" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      price,
      originalPrice,
      category->{
        _id,
        title,
        slug
      },
      subcategory,
      material,
      gemstone,
      weight,
      size,
      images,
      description,
      features,
      isNew,
      isFeatured,
      isOnSale,
      stock,
      tags,
      _createdAt,
      _updatedAt
    }
  `;
  
  return await client.fetch(query, { slug });
};

export const getCategories = async () => {
  const query = `
    *[_type == "category"] | order(title asc) {
      _id,
      title,
      slug,
      description,
      image
    }
  `;
  
  return await client.fetch(query);
};

export const getFeaturedProducts = async () => {
  const query = `
    *[_type == "product" && isFeatured == true] | order(_createdAt desc) [0...8] {
      _id,
      title,
      slug,
      price,
      originalPrice,
      category->{
        _id,
        title,
        slug
      },
      images,
      isNew,
      isOnSale,
      stock
    }
  `;
  
  return await client.fetch(query);
};

// Get static content pages
export const getPageContent = async (slug) => {
  const query = `
    *[_type == "page" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      content,
      metaDescription,
      _createdAt,
      _updatedAt
    }
  `;
  
  return await client.fetch(query, { slug });
};

// Get testimonials
export const getTestimonials = async () => {
  const query = `
    *[_type == "testimonial"] | order(_createdAt desc) {
      _id,
      name,
      role,
      image,
      rating,
      text,
      isFeatured
    }
  `;
  
  return await client.fetch(query);
};

// Get site settings
export const getSiteSettings = async () => {
  const query = `
    *[_type == "siteSettings"][0] {
      _id,
      siteName,
      siteDescription,
      logo,
      contactEmail,
      contactPhone,
      address,
      socialLinks,
      _createdAt,
      _updatedAt
    }
  `;
  
  return await client.fetch(query);
};

// Search products with advanced filtering
export const searchProducts = async (searchTerm, filters = {}, pagination = {}) => {
  const { page = 0, limit = 20 } = pagination;
  const offset = page * limit;
  
  let query = `*[_type == "product"`;
  
  // Add search term
  if (searchTerm) {
    query += ` && (title match "*${searchTerm}*" || description match "*${searchTerm}*" || material match "*${searchTerm}*" || gemstone match "*${searchTerm}*" || tags[] match "*${searchTerm}*")`;
  }
  
  // Add filters
  if (filters.category) {
    query += ` && category->slug.current == "${filters.category}"`;
  }
  
  if (filters.material) {
    query += ` && material == "${filters.material}"`;
  }
  
  if (filters.gemstone) {
    query += ` && gemstone == "${filters.gemstone}"`;
  }
  
  if (filters.minPrice || filters.maxPrice) {
    query += ` && price >= ${filters.minPrice || 0} && price <= ${filters.maxPrice || 999999}`;
  }
  
  query += `] | order(_createdAt desc) [${offset}...${offset + limit}] {
    _id,
    title,
    slug,
    price,
    originalPrice,
    category->{
      _id,
      title,
      slug
    },
    images[0...3],
    isNew,
    isOnSale,
    stock,
    rating,
    reviews
  }`;
  
  return await client.fetch(query);
};

