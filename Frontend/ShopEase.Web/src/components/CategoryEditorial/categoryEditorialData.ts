export interface CategoryEditorialItem {
  id: number;
  title: string;
  ctaLabel: string;
  ctaLink: string;
  image: string;
  variant: 'feature' | 'category';
}

export const categoryEditorialData: CategoryEditorialItem[] = [
  {
    id: 1,
    title: 'Bridal Lehengas',
    ctaLabel: 'Discover',
    ctaLink: '/shop',
    image: '',
    variant: 'feature',
  },
  {
    id: 2,
    title: 'Handcrafted Banarasi & Kanjeevaram Sarees',
    ctaLabel: 'Explore Sarees',
    ctaLink: '/shop',
    image: '',
    variant: 'category',
  },
  {
    id: 3,
    title: 'Lightweight Organza & Organza Drape',
    ctaLabel: 'Explore Drape',
    ctaLink: '/shop',
    image: '',
    variant: 'category',
  },
];