// Sanity Schema Example for JewelCraft
// This file shows the schema structure you should create in your Sanity Studio

export const productSchema = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
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
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: Rule => Rule.required().min(0)
    },
    {
      name: 'originalPrice',
      title: 'Original Price',
      type: 'number',
      description: 'Leave empty if not on sale'
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
          { title: 'Bangle Bracelets', value: 'bangle-bracelets' },
          { title: 'Chain Bracelets', value: 'chain-bracelets' },
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
      }
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
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }],
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Key features and benefits'
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
      title: 'Rating',
      type: 'number',
      validation: Rule => Rule.min(1).max(5)
    },
    {
      name: 'reviews',
      title: 'Number of Reviews',
      type: 'number',
      validation: Rule => Rule.min(0)
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
      title: 'Title',
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
      title: 'Category Image',
      type: 'image',
      options: {
        hotspot: true
      }
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
      validation: Rule => Rule.required()
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

