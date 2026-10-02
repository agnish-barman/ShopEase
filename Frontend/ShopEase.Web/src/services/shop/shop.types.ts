export type ShopCategory =
  | 'lehengas'
  | 'sarees'
  | 'bridal'
  | 'jewellery';

export interface ShopProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  reviewCount?: number;
  colors?: string[];
  categories: ShopCategory[];
  createdAt: string;
}

export interface ShopPromotion {
  message: string;
}

export interface ShopPageData {
  products: ShopProduct[];
  totalCount: number;
  promotion?: ShopPromotion;
}