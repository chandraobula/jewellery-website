// Sanity Schema Definitions for Fashion E-Commerce
// Add these to your Sanity Studio schemas folder

// Color variant schema
export const colorVariantSchema = {
  name: 'colorVariant',
  title: 'Color Variant',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Color Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'hex',
      title: 'Hex Code',
      type: 'string',
      description: 'e.g., #FF5733',
      validation: Rule => Rule.regex(/^#[0-9A-F]{6}$/i).error('Must be a valid hex color code')
    },
    {
      name: 'image',
      title: 'Color Swatch Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
};

// Size variant schema
export const sizeVariantSchema = {
  name: 'sizeVariant',
  title: 'Size Variant',
  type: 'object',
  fields: [
    {
      name: 'size',
      title: 'Size',
      type: 'string',
      options: {
        list: [
          { title: 'XS', value: 'XS' },
          { title: 'S', value: 'S' },
          { title: 'M', value: 'M' },
          { title: 'L', value: 'L' },
          { title: 'XL', value: 'XL' },
          { title: 'XXL', value: 'XXL' },
          { title: '28', value: '28' },
          { title: '30', value: '30' },
          { title: '32', value: '32' },
          { title: '34', value: '34' },
          { title: '36', value: '36' },
          { title: '38', value: '38' },
          { title: '40', value: '40' },
          { title: '42', value: '42' },
          { title: 'One Size', value: 'One Size' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'stock',
      title: 'Stock Quantity',
      type: 'number',
      validation: Rule => Rule.required().min(0)
    },
    {
      name: 'sku',
      title: 'SKU',
      type: 'string',
      description: 'Stock Keeping Unit for this size'
    }
  ]
};

// Product variant (size + color combination)
export const productVariantSchema = {
  name: 'productVariant',
  title: 'Product Variant',
  type: 'object',
  fields: [
    {
      name: 'color',
      title: 'Color',
      type: 'colorVariant',
      validation: Rule => Rule.required()
    },
    {
      name: 'sizes',
      title: 'Available Sizes',
      type: 'array',
      of: [{ type: 'sizeVariant' }],
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'images',
      title: 'Variant Images',
      type: 'array',
      of: [{
        type: 'image',
        options: {
          hotspot: true
        }
      }],
      description: 'Images specific to this color variant'
    },
    {
      name: 'sku',
      title: 'Base SKU',
      type: 'string',
      description: 'Base SKU for this color variant (size SKUs will be appended)'
    }
  ]
};

// Main Product Schema
export const productSchema = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Product Title',
      type: 'string',
      validation: Rule => Rule.required().max(100)
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'brand',
      title: 'Brand',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'price',
      title: 'Price (USD)',
      type: 'number',
      validation: Rule => Rule.required().min(0)
    },
    {
      name: 'discountedPrice',
      title: 'Discounted Price (USD)',
      type: 'number',
      description: 'Sale price if product is on discount',
      validation: Rule => Rule.min(0)
    },
    {
      name: 'currency',
      title: 'Currency',
      type: 'string',
      options: {
        list: [
          { title: 'USD', value: 'USD' },
          { title: 'EUR', value: 'EUR' },
          { title: 'GBP', value: 'GBP' },
          { title: 'INR', value: 'INR' }
        ]
      },
      initialValue: 'USD'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: { type: 'category' },
      validation: Rule => Rule.required()
    },
    {
      name: 'subcategory',
      title: 'Subcategory',
      type: 'string',
      options: {
        list: [
          // Tops
          { title: 'T-Shirt', value: 't-shirt' },
          { title: 'Shirt', value: 'shirt' },
          { title: 'Blouse', value: 'blouse' },
          { title: 'Tank Top', value: 'tank-top' },
          { title: 'Hoodie', value: 'hoodie' },
          { title: 'Sweater', value: 'sweater' },
          { title: 'Jacket', value: 'jacket' },
          { title: 'Blazer', value: 'blazer' },
          { title: 'Coat', value: 'coat' },
          // Bottoms
          { title: 'Jeans', value: 'jeans' },
          { title: 'Trousers', value: 'trousers' },
          { title: 'Shorts', value: 'shorts' },
          { title: 'Skirt', value: 'skirt' },
          { title: 'Leggings', value: 'leggings' },
          // Dresses & Traditional
          { title: 'Dress', value: 'dress' },
          { title: 'Kurti', value: 'kurti' },
          { title: 'Saree', value: 'saree' },
          { title: 'Lehenga', value: 'lehenga' },
          { title: 'Salwar Suit', value: 'salwar-suit' },
          // Accessories
          { title: 'Scarf', value: 'scarf' },
          { title: 'Hat', value: 'hat' },
          { title: 'Belt', value: 'belt' },
          { title: 'Bag', value: 'bag' },
          // Footwear
          { title: 'Shoes', value: 'shoes' },
          { title: 'Sneakers', value: 'sneakers' },
          { title: 'Sandals', value: 'sandals' },
          { title: 'Boots', value: 'boots' }
        ]
      }
    },
    {
      name: 'gender',
      title: 'Gender',
      type: 'string',
      options: {
        list: [
          { title: 'Men', value: 'men' },
          { title: 'Women', value: 'women' },
          { title: 'Kids', value: 'kids' },
          { title: 'Unisex', value: 'unisex' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'variants',
      title: 'Product Variants',
      type: 'array',
      of: [{ type: 'productVariant' }],
      description: 'Color and size combinations',
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [{ 
        type: 'image',
        options: {
          hotspot: true
        }
      }],
      description: 'Main product images (will be used if variant images not available)',
      validation: Rule => Rule.required().min(1).max(10)
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ],
      validation: Rule => Rule.required()
    },
    // Fashion-Specific Fields
    {
      name: 'fabric',
      title: 'Fabric/Material',
      type: 'string',
      options: {
        list: [
          { title: 'Cotton', value: 'cotton' },
          { title: 'Polyester', value: 'polyester' },
          { title: 'Silk', value: 'silk' },
          { title: 'Wool', value: 'wool' },
          { title: 'Linen', value: 'linen' },
          { title: 'Denim', value: 'denim' },
          { title: 'Leather', value: 'leather' },
          { title: 'Rayon', value: 'rayon' },
          { title: 'Viscose', value: 'viscose' },
          { title: 'Chiffon', value: 'chiffon' },
          { title: 'Georgette', value: 'georgette' },
          { title: 'Crepe', value: 'crepe' },
          { title: 'Blend', value: 'blend' }
        ]
      }
    },
    {
      name: 'fit',
      title: 'Fit',
      type: 'string',
      options: {
        list: [
          { title: 'Slim', value: 'slim' },
          { title: 'Regular', value: 'regular' },
          { title: 'Oversized', value: 'oversized' },
          { title: 'Relaxed', value: 'relaxed' },
          { title: 'Loose', value: 'loose' },
          { title: 'Fitted', value: 'fitted' }
        ]
      }
    },
    {
      name: 'sleeveType',
      title: 'Sleeve Type',
      type: 'string',
      options: {
        list: [
          { title: 'Full Sleeve', value: 'full-sleeve' },
          { title: 'Half Sleeve', value: 'half-sleeve' },
          { title: 'Sleeveless', value: 'sleeveless' },
          { title: 'Three Quarter', value: 'three-quarter' },
          { title: 'Cap Sleeve', value: 'cap-sleeve' }
        ]
      }
    },
    {
      name: 'necklineType',
      title: 'Neckline Type',
      type: 'string',
      options: {
        list: [
          { title: 'Round', value: 'round' },
          { title: 'V-Neck', value: 'v-neck' },
          { title: 'Collar', value: 'collar' },
          { title: 'Hood', value: 'hood' },
          { title: 'High Neck', value: 'high-neck' },
          { title: 'Off Shoulder', value: 'off-shoulder' },
          { title: 'Boat Neck', value: 'boat-neck' }
        ]
      }
    },
    {
      name: 'length',
      title: 'Length',
      type: 'string',
      description: 'e.g., Knee Length, Ankle Length, Full Length'
    },
    {
      name: 'pattern',
      title: 'Pattern',
      type: 'string',
      options: {
        list: [
          { title: 'Solid', value: 'solid' },
          { title: 'Printed', value: 'printed' },
          { title: 'Striped', value: 'striped' },
          { title: 'Polka Dot', value: 'polka-dot' },
          { title: 'Floral', value: 'floral' },
          { title: 'Geometric', value: 'geometric' },
          { title: 'Abstract', value: 'abstract' },
          { title: 'Embroidered', value: 'embroidered' }
        ]
      }
    },
    {
      name: 'occasion',
      title: 'Occasion',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Casual', value: 'casual' },
          { title: 'Formal', value: 'formal' },
          { title: 'Party', value: 'party' },
          { title: 'Festive', value: 'festive' },
          { title: 'Wedding', value: 'wedding' },
          { title: 'Office', value: 'office' },
          { title: 'Sports', value: 'sports' },
          { title: 'Beach', value: 'beach' }
        ]
      }
    },
    {
      name: 'season',
      title: 'Season',
      type: 'string',
      options: {
        list: [
          { title: 'Summer', value: 'summer' },
          { title: 'Winter', value: 'winter' },
          { title: 'Spring', value: 'spring' },
          { title: 'Fall/Autumn', value: 'fall' },
          { title: 'All Season', value: 'all-season' }
        ]
      }
    },
    {
      name: 'careInstructions',
      title: 'Care Instructions',
      type: 'text',
      description: 'Washing and care instructions'
    },
    {
      name: 'countryOfOrigin',
      title: 'Country of Origin',
      type: 'string'
    },
    {
      name: 'modelInfo',
      title: 'Model Information',
      type: 'object',
      fields: [
        {
          name: 'height',
          title: 'Model Height',
          type: 'string',
          description: 'e.g., 5\'8"'
        },
        {
          name: 'wearingSize',
          title: 'Size Model is Wearing',
          type: 'string',
          description: 'e.g., M, L'
        }
      ]
    },
    // Flags
    {
      name: 'isNew',
      title: 'New Arrival',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'isFeatured',
      title: 'Featured Product',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'isOnSale',
      title: 'On Sale',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'rating',
      title: 'Average Rating',
      type: 'number',
      validation: Rule => Rule.min(1).max(5)
    },
    {
      name: 'reviews',
      title: 'Number of Reviews',
      type: 'number',
      validation: Rule => Rule.min(0)
    },
    // SEO
    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Custom title for search engines'
    },
    {
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      description: 'Custom description for search engines'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0',
      subtitle: 'category.title'
    }
  }
};

// Category Schema (updated for fashion)
export const categorySchema = {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Category Title',
      type: 'string',
      validation: Rule => Rule.required().max(50)
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.max(200)
    },
    {
      name: 'image',
      title: 'Category Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'gender',
      title: 'Gender',
      type: 'string',
      options: {
        list: [
          { title: 'Men', value: 'men' },
          { title: 'Women', value: 'women' },
          { title: 'Kids', value: 'kids' },
          { title: 'Unisex', value: 'unisex' }
        ]
      }
    },
    {
      name: 'featured',
      title: 'Featured Category',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      description: 'Lower numbers appear first'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      subtitle: 'gender'
    }
  }
};

// Collection Schema (for seasonal/trending collections)
export const collectionSchema = {
  name: 'collection',
  title: 'Collection',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Collection Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'image',
      title: 'Collection Banner Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'type',
      title: 'Collection Type',
      type: 'string',
      options: {
        list: [
          { title: 'Seasonal', value: 'seasonal' },
          { title: 'Trending', value: 'trending' },
          { title: 'Festive', value: 'festive' },
          { title: 'New Arrivals', value: 'new-arrivals' },
          { title: 'Sale', value: 'sale' },
          { title: 'Custom', value: 'custom' }
        ]
      }
    },
    {
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'product' } }]
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      description: 'When this collection becomes active'
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      description: 'When this collection expires'
    },
    {
      name: 'featured',
      title: 'Featured Collection',
      type: 'boolean',
      initialValue: false
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      subtitle: 'type'
    }
  }
};

// Size Guide Schema
export const sizeGuideSchema = {
  name: 'sizeGuide',
  title: 'Size Guide',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Size Guide Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: { type: 'category' }
    },
    {
      name: 'gender',
      title: 'Gender',
      type: 'string',
      options: {
        list: [
          { title: 'Men', value: 'men' },
          { title: 'Women', value: 'women' },
          { title: 'Kids', value: 'kids' },
          { title: 'Unisex', value: 'unisex' }
        ]
      }
    },
    {
      name: 'measurements',
      title: 'Size Measurements',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'size',
            title: 'Size',
            type: 'string'
          },
          {
            name: 'chest',
            title: 'Chest (inches)',
            type: 'number'
          },
          {
            name: 'waist',
            title: 'Waist (inches)',
            type: 'number'
          },
          {
            name: 'hips',
            title: 'Hips (inches)',
            type: 'number'
          },
          {
            name: 'length',
            title: 'Length (inches)',
            type: 'number'
          }
        ]
      }]
    },
    {
      name: 'internationalSizes',
      title: 'International Size Mapping',
      type: 'object',
      fields: [
        {
          name: 'us',
          title: 'US Sizes',
          type: 'array',
          of: [{ type: 'string' }]
        },
        {
          name: 'uk',
          title: 'UK Sizes',
          type: 'array',
          of: [{ type: 'string' }]
        },
        {
          name: 'eu',
          title: 'EU Sizes',
          type: 'array',
          of: [{ type: 'string' }]
        }
      ]
    }
  ]
};

export const testimonialSchema = {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Customer Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'role',
      title: 'Role/Title',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Customer Photo',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: Rule => Rule.required().min(1).max(5)
    },
    {
      name: 'text',
      title: 'Testimonial Text',
      type: 'text',
      validation: Rule => Rule.required().min(50)
    },
    {
      name: 'product',
      title: 'Product Reviewed',
      type: 'reference',
      to: { type: 'product' }
    },
    {
      name: 'sizeFeedback',
      title: 'Size Feedback',
      type: 'string',
      options: {
        list: [
          { title: 'Runs Small', value: 'runs-small' },
          { title: 'True to Size', value: 'true-to-size' },
          { title: 'Runs Large', value: 'runs-large' }
        ]
      }
    },
    {
      name: 'fitRating',
      title: 'Fit Rating',
      type: 'number',
      validation: Rule => Rule.min(1).max(5)
    },
    {
      name: 'customerPhotos',
      title: 'Customer Photos',
      type: 'array',
      of: [{
        type: 'image',
        options: {
          hotspot: true
        }
      }]
    },
    {
      name: 'isFeatured',
      title: 'Featured Testimonial',
      type: 'boolean',
      initialValue: false
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image'
    }
  }
};

export const pageSchema = {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'content',
      title: 'Page Content',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      validation: Rule => Rule.max(160)
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current'
    }
  }
};

export const siteSettingsSchema = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text'
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      validation: Rule => Rule.email()
    },
    {
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'text'
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        {
          name: 'facebook',
          title: 'Facebook URL',
          type: 'url'
        },
        {
          name: 'instagram',
          title: 'Instagram URL',
          type: 'url'
        },
        {
          name: 'twitter',
          title: 'Twitter URL',
          type: 'url'
        },
        {
          name: 'youtube',
          title: 'YouTube URL',
          type: 'url'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'siteName',
      media: 'logo'
    }
  }
};
