export interface FeaturedMasterpiece {
  id: number;
  name: string;
  price: number;
  image: string;
  colors: {
    name: string;
    hex: string;
  }[];
}

export const featuredMasterpieces: FeaturedMasterpiece[] = [
  {
    id: 1,
    name: 'The Crimson Zardozi Silk Saree',
    price: 145000,
    image: '',
    colors: [
      {
        name: 'Deep Maroon',
        hex: '#5a1f28',
      },
      {
        name: 'Antique Gold',
        hex: '#c5a059',
      },
      {
        name: 'Emerald',
        hex: '#31543d',
      },
    ],
  },
  {
    id: 2,
    name: 'Lightweight Organza & Tissue Sarees',
    price: 85000,
    image: '',
    colors: [
      {
        name: 'Deep Maroon',
        hex: '#5a1f28',
      },
      {
        name: 'Antique Gold',
        hex: '#c5a059',
      },
      {
        name: 'Emerald',
        hex: '#31543d',
      },
    ],
  },
  {
    id: 3,
    name: 'Royal Heritage Lehenga',
    price: 165000,
    image: '',
    colors: [
      {
        name: 'Deep Maroon',
        hex: '#5a1f28',
      },
      {
        name: 'Antique Gold',
        hex: '#c5a059',
      },
      {
        name: 'Emerald',
        hex: '#31543d',
      },
    ],
  },
];