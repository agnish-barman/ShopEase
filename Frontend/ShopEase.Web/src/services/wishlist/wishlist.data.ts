import { shopPageData } from '../shop/shop.data';
import type { ShopProduct } from '../shop/shop.types';

/*
 * Temporary Wishlist Data
 *
 * These product IDs represent the products currently
 * saved in the user's wishlist during frontend development.
 *
 * Later, this will be replaced by the real wishlist API/state.
 */

const wishlistProductIds = [
  'product-002',
  'product-004',
  'product-007',
];

export const wishlistProducts: ShopProduct[] =
  wishlistProductIds
    .map((productId) =>
      shopPageData.products.find(
        (product) => product.id === productId
      )
    )
    .filter(
      (product): product is ShopProduct =>
        product !== undefined
    );