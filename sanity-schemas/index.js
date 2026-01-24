// Sanity Schema Definitions for JewelCraft
// Add these to your Sanity Studio schemas folder

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
      name: 'price',
      title: 'Price (USD)',
      type: 'number',
      validation: Rule => Rule.required().min(0)
    },
    {
      name: 'originalPrice',
      title: 'Original Price (USD)',
      type: 'number',
      description: 'Leave empty if not on sale',
      validation: Rule => Rule.min(0)
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
          { title: 'Engagement Rings', value: 'engagement-rings' },
          { title: 'Wedding Bands', value: 'wedding-bands' },
          { title: 'Fashion Rings', value: 'fashion-rings' },
          { title: 'Pendants', value: 'pendants' },
          { title: 'Chains', value: 'chains' },
          { title: 'Stud Earrings', value: 'stud-earrings' },
          { title: 'Drop Earrings', value: 'drop-earrings' },
          { title: 'Hoop Earrings', value: 'hoop-earrings' },
          { title: 'Bangle Bracelets', value: 'bangle-bracelets' },
          { title: 'Chain Bracelets', value: 'chain-bracelets' },
          { title: 'Charm Bracelets', value: 'charm-bracelets' },
          { title: 'Luxury Watches', value: 'luxury-watches' },
          { title: 'Smart Watches', value: 'smart-watches' },
          { title: 'Jewelry Sets', value: 'jewelry-sets' }
        ]
      }
    },
    {
      name: 'material',
      title: 'Material',
      type: 'string',
      options: {
        list: [
          { title: 'Gold', value: 'Gold' },
          { title: 'Silver', value: 'Silver' },
          { title: 'Platinum', value: 'Platinum' },
          { title: 'Rose Gold', value: 'Rose Gold' },
          { title: 'White Gold', value: 'White Gold' },
          { title: 'Stainless Steel', value: 'Stainless Steel' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'gemstone',
      title: 'Gemstone',
      type: 'string',
      options: {
        list: [
          { title: 'Diamond', value: 'Diamond' },
          { title: 'Ruby', value: 'Ruby' },
          { title: 'Sapphire', value: 'Sapphire' },
          { title: 'Emerald', value: 'Emerald' },
          { title: 'Pearl', value: 'Pearl' },
          { title: 'Amethyst', value: 'Amethyst' },
          { title: 'Topaz', value: 'Topaz' },
          { title: 'Garnet', value: 'Garnet' },
          { title: 'Opal', value: 'Opal' },
          { title: 'None', value: 'None' }
        ]
      }
    },
    {
      name: 'weight',
      title: 'Weight',
      type: 'string',
      description: 'e.g., 2.5g, 5.2g'
    },
    {
      name: 'size',
      title: 'Size',
      type: 'string',
      description: 'e.g., 6.5, 7, 8, One Size'
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
      validation: Rule => Rule.required().min(1).max(10)
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required().min(50).max(500)
    },
    {
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Key features and benefits of the product'
    },
    {
      name: 'isNew',
      title: 'New Product',
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
      name: 'stock',
      title: 'Stock Quantity',
      type: 'number',
      validation: Rule => Rule.required().min(0)
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
      media: 'image'
    }
  }
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
