# Complete Sanity CMS Integration Guide for JewelCraft

## 🎯 Overview
This guide will help you complete the integration between your JewelCraft frontend and Sanity CMS, enabling dynamic content management and automatic deployments.

## 📋 Prerequisites
- ✅ Sanity Studio running on `localhost:3333`
- ✅ Frontend application with Sanity client configured
- ✅ AWS Amplify hosting setup

## 🔧 Step 1: Environment Configuration

### Create `.env.local` file in your project root:
```env
# Sanity Configuration
VITE_SANITY_PROJECT_ID=cg75sn8r
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2024-01-01
VITE_SANITY_USE_CDN=true
VITE_SANITY_TOKEN=your-read-token-if-needed

# Sanity Studio URL (for development)
VITE_SANITY_STUDIO_URL=http://localhost:3333
```

### For Production (AWS Amplify):
Add these environment variables in your AWS Amplify console:
1. Go to "App settings" → "Environment variables"
2. Add the same variables as above

## 📊 Step 2: Sanity Schema Setup

### Add these schemas to your Sanity Studio:

1. **Navigate to your Sanity Studio folder**
2. **Add the schemas** from `sanity-schemas/index.js` to your schemas folder
3. **Update your `sanity.config.js`**:

```javascript
import { createConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Import your schemas
import { 
  productSchema, 
  categorySchema, 
  testimonialSchema, 
  pageSchema, 
  siteSettingsSchema 
} from './schemas';

export default createConfig({
  name: 'jewelcraft-cms',
  title: 'JewelCraft CMS',
  projectId: 'cg75sn8r', // Your project ID
  dataset: 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Products')
              .child(S.documentTypeList('product').title('Products')),
            S.listItem()
              .title('Categories')
              .child(S.documentTypeList('category').title('Categories')),
            S.listItem()
              .title('Testimonials')
              .child(S.documentTypeList('testimonial').title('Testimonials')),
            S.listItem()
              .title('Pages')
              .child(S.documentTypeList('page').title('Pages')),
            S.listItem()
              .title('Site Settings')
              .child(S.documentTypeList('siteSettings').title('Site Settings')),
          ]),
    }),
  ],
  schema: {
    types: [
      productSchema,
      categorySchema,
      testimonialSchema,
      pageSchema,
      siteSettingsSchema,
    ],
  },
});
```

## 🏗️ Step 3: Content Structure Setup

### Create Initial Content:

1. **Categories** (Create these first):
   - Rings
   - Necklaces
   - Earrings
   - Bracelets
   - Watches
   - Sets

2. **Site Settings**:
   - Create one siteSettings document with your store information

3. **Sample Products**:
   - Create a few products to test the integration
   - Make sure to mark some as "Featured" for the homepage

4. **Testimonials**:
   - Add a few customer testimonials

## 🔄 Step 4: Webhook Configuration

### AWS Amplify Webhook Setup:

1. **Get Webhook URL**:
   - Go to AWS Amplify Console
   - Select your app
   - Go to "App settings" → "Build settings"
   - Scroll to "Build webhooks"
   - Click "Create webhook"
   - Name: "Sanity Content Update"
   - Branch: `main` (or your production branch)
   - Copy the webhook URL

2. **Configure Sanity Webhook**:
   - Go to your Sanity project dashboard
   - Navigate to "API" → "Webhooks"
   - Click "Create webhook"
   - **Name**: AWS Amplify Deploy
   - **URL**: Paste the Amplify webhook URL
   - **Dataset**: production
   - **Trigger on**: Create, Update, Delete
   - **Filter**: 
     ```
     _type in ["product", "category", "testimonial", "page", "siteSettings"]
     ```
   - **HTTP method**: POST

## 🧪 Step 5: Testing the Integration

### Test Frontend Connection:
1. **Start your development server**:
   ```bash
   npm run dev
   ```

2. **Check the browser console** for any Sanity connection errors

3. **Visit the Products page** to see if data loads from Sanity

4. **Test filtering and pagination** functionality

### Test Webhook:
1. **Make a change** to a product in Sanity Studio
2. **Publish the change**
3. **Check AWS Amplify** for a new build trigger
4. **Verify the changes** appear on your live site

## 📈 Step 6: Performance Optimization

### For 400+ Products:

The frontend is already optimized with:
- ✅ **Pagination**: 20 products per page
- ✅ **Image optimization**: Automatic resizing via Sanity
- ✅ **Lazy loading**: Images load as needed
- ✅ **Efficient queries**: Only fetch required fields
- ✅ **Caching**: Sanity CDN for fast delivery

### Additional Optimizations:

1. **Image Optimization**:
   ```javascript
   // In your Sanity queries, limit images
   images[0...3] // Only fetch first 3 images
   ```

2. **Query Optimization**:
   ```javascript
   // Use specific field selection
   {
     _id,
     title,
     slug,
     price,
     images[0],
     category->{title, slug}
   }
   ```

## 🚀 Step 7: Production Deployment

### Build Configuration:

Your `amplify.yml` should be:
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

### Environment Variables for Production:
```
VITE_SANITY_PROJECT_ID=cg75sn8r
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2024-01-01
VITE_SANITY_USE_CDN=true
```

## 🔍 Step 8: Monitoring & Maintenance

### Monitor:
- Webhook delivery success rates
- Build completion times
- Content update frequency
- Error rates

### Maintenance:
- Regular content audits
- Image optimization
- Query performance monitoring
- Backup strategies

## 🆘 Troubleshooting

### Common Issues:

1. **Products not loading**:
   - Check environment variables
   - Verify Sanity project ID
   - Check browser console for errors

2. **Webhook not triggering**:
   - Verify webhook URL is correct
   - Check Sanity webhook logs
   - Ensure filter is set correctly

3. **Build failures**:
   - Check environment variables in Amplify
   - Verify all dependencies are installed
   - Check build logs for specific errors

4. **Images not displaying**:
   - Check image URLs in Sanity
   - Verify image optimization settings
   - Check CORS settings if needed

### Debug Commands:
```bash
# Check Sanity connection
npm run dev
# Open browser console and look for Sanity errors

# Test Sanity queries
# Use Sanity Vision plugin in your studio
```

## 📚 Additional Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [AWS Amplify Documentation](https://docs.amplify.aws/)
- [React Query for better data fetching](https://tanstack.com/query/latest)

## ✅ Success Checklist

- [ ] Sanity Studio configured with schemas
- [ ] Frontend connected to Sanity
- [ ] Sample content created
- [ ] Webhook configured and tested
- [ ] Environment variables set
- [ ] Build and deployment working
- [ ] Performance optimized for 400+ products
- [ ] Monitoring in place

## 🎉 You're All Set!

Your JewelCraft website is now fully integrated with Sanity CMS. Your clients can:

- ✅ Add/edit products through Sanity Studio
- ✅ Update prices and inventory
- ✅ Manage categories and content
- ✅ See changes live automatically via webhooks
- ✅ Handle 400+ products with smooth performance

The system will automatically rebuild and deploy whenever content is updated in Sanity!
