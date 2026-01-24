// Sanity Configuration
export const sanityConfig = {
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'your-project-id',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION || '2024-01-01',
  useCdn: import.meta.env.VITE_SANITY_USE_CDN === 'true' || true,
  token: import.meta.env.VITE_SANITY_TOKEN, // For private datasets
  studioUrl: import.meta.env.VITE_SANITY_STUDIO_URL || 'http://localhost:3333'
};

// Development vs Production settings
export const isDevelopment = import.meta.env.DEV;
export const isProduction = import.meta.env.PROD;
