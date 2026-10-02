import type { ShopPageData } from './shop.types';

export const shopPageData: ShopPageData = {
  totalCount: 8,

  promotion: {
    message: 'Complimentary shipping on orders above ₹25,000',
  },

  products: [
    {
      id: 'product-001',
      name: 'The Crimson Zardozi Silk Saree',
      imageUrl: 'https://placehold.co/600x800?text=Product+01',
      price: 145000,
      originalPrice: 165000,
      rating: 4.8,
      reviewCount: 24,
      colors: ['#6B1E2B', '#C5A059', '#1F4A3C'],
      categories: ['sarees'],
      createdAt: '2026-09-10',
    },

    {
      id: 'product-002',
      name: 'Royal Heritage Lehenga',
      imageUrl: 'https://placehold.co/600x800?text=Product+02',
      price: 165000,
      originalPrice: 185000,
      rating: 4.9,
      reviewCount: 18,
      colors: ['#5B1A28', '#D4AF37', '#234B3A'],
      categories: ['lehengas', 'bridal'],
      createdAt: '2026-09-18',
    },

    {
      id: 'product-003',
      name: 'Ivory Embroidered Anarkali',
      imageUrl: 'https://placehold.co/600x800?text=Product+03',
      price: 78500,
      originalPrice: 92000,
      rating: 4.7,
      reviewCount: 31,
      colors: ['#F3EBDD', '#C5A059', '#7A6A58'],
      categories: ['lehengas'],
      createdAt: '2026-09-14',
    },

    {
      id: 'product-004',
      name: 'Regal Banarasi Silk Saree',
      imageUrl: 'https://placehold.co/600x800?text=Product+04',
      price: 112000,
      originalPrice: 128000,
      rating: 4.9,
      reviewCount: 16,
      colors: ['#7A1F2B', '#D4AF37', '#173C3A'],
      categories: ['sarees'],
      createdAt: '2026-09-16',
    },

    {
      id: 'product-005',
      name: 'Antique Gold Bridal Lehenga',
      imageUrl: 'https://placehold.co/600x800?text=Product+05',
      price: 198000,
      rating: 4.8,
      reviewCount: 12,
      colors: ['#C5A059', '#8A6A3B', '#5B2333'],
      categories: ['lehengas', 'bridal'],
      createdAt: '2026-09-20',
    },

    {
      id: 'product-006',
      name: 'Emerald Heritage Silk Saree',
      imageUrl: 'https://placehold.co/600x800?text=Product+06',
      price: 96500,
      originalPrice: 110000,
      rating: 4.6,
      reviewCount: 27,
      colors: ['#1F4A3C', '#D4AF37', '#402A31'],
      categories: ['sarees'],
      createdAt: '2026-09-12',
    },

    {
      id: 'product-007',
      name: 'Rose Gold Handcrafted Lehenga',
      imageUrl: 'https://placehold.co/600x800?text=Product+07',
      price: 154000,
      originalPrice: 175000,
      rating: 4.8,
      reviewCount: 21,
      colors: ['#A65F68', '#C5A059', '#E8D5C4'],
      categories: ['lehengas'],
      createdAt: '2026-09-19',
    },

    {
      id: 'product-008',
      name: 'Midnight Velvet Bridal Saree',
      imageUrl: 'https://placehold.co/600x800?text=Product+08',
      price: 128000,
      rating: 4.7,
      reviewCount: 14,
      colors: ['#24242A', '#D4AF37', '#6B1E2B'],
      categories: ['sarees', 'bridal'],
      createdAt: '2026-09-17',
    },
  ],
};