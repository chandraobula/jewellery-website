# JewelCraft - Premium Jewelry Website Setup Guide

## Overview
This is a high-performance, mobile-first jewelry website built with React.js, Vite, and Tailwind CSS, integrated with Sanity CMS for content management.

## Features
- ✨ Modern, responsive design with mobile-first approach
- 🎨 Beautiful animations and transitions using GSAP
- 🔍 Advanced filtering and search functionality
- 📱 Fully responsive across all devices
- 🛍️ Product catalog with grid/list views
- 💎 Detailed product pages with image galleries
- 📧 Newsletter subscription
- 🌟 Customer testimonials and reviews
- 📞 Contact forms and store information

## Technology Stack
- **Frontend**: React.js 19, Vite
- **Styling**: Tailwind CSS with custom jewelry-themed colors
- **Animations**: GSAP with ScrollTrigger
- **CMS**: Sanity Headless CMS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Deployment**: AWS Amplify (ready for deployment)

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Configuration
Create a `.env` file in the root directory with your Sanity configuration:

```env
VITE_SANITY_PROJECT_ID=your-project-id
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2024-01-01
VITE_SANITY_USE_CDN=true
```

### 3. Sanity CMS Setup
1. Create a new Sanity project at [sanity.io](https://sanity.io)
2. Install Sanity CLI: `npm install -g @sanity/cli`
3. Create schemas for:
   - Products
   - Categories
   - Testimonials
   - Blog posts (optional)

### 4. Development Server
```bash
npm run dev
```

### 5. Build for Production
```bash
npm run build
```

## Project Structure
```
src/
├── components/          # Reusable components
│   ├── Header.jsx      # Navigation and header
│   ├── Footer.jsx      # Footer with links and info
│   ├── Hero.jsx        # Hero section component
│   ├── Categories.jsx  # Category showcase
│   ├── FeaturedProducts.jsx
│   ├── Testimonials.jsx
│   └── Newsletter.jsx
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── Products.jsx    # Product catalog
│   ├── ProductDetail.jsx
│   ├── Categories.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── lib/                # Utilities and configurations
│   └── sanity.js       # Sanity CMS client
├── App.jsx             # Main app component
├── main.jsx            # App entry point
└── index.css           # Global styles with Tailwind
```

## Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`:
- **Gold**: Various shades for jewelry themes
- **Silver**: Neutral tones
- **Diamond**: Blue accents for premium feel

### Typography
- **Elegant**: Playfair Display for headings
- **Modern**: Inter for body text

### Animations
GSAP animations are configured for:
- Page load animations
- Scroll-triggered animations
- Hover effects
- Smooth transitions

## Deployment

### AWS Amplify
1. Connect your GitHub repository to AWS Amplify
2. Set environment variables in Amplify console
3. Configure build settings:
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
   ```

### Environment Variables for Production
Set these in your deployment platform:
- `VITE_SANITY_PROJECT_ID`
- `VITE_SANITY_DATASET`
- `VITE_SANITY_API_VERSION`
- `VITE_SANITY_USE_CDN`

## SEO Features
- Meta tags for social sharing
- Structured data for products
- Optimized images and lazy loading
- Fast loading times
- Mobile-first responsive design

## Performance Optimizations
- Code splitting with React Router
- Image optimization
- Lazy loading components
- Efficient animations with GSAP
- Tailwind CSS purging for smaller bundle size

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License
This project is proprietary software. All rights reserved.

## Support
For technical support or questions, please contact the development team.

