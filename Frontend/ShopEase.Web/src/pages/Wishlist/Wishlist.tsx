import { useSyncExternalStore } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { shopPageData } from '../../services/shop/shop.data';
import {
  getWishlistSnapshot,
  subscribeToWishlist,
} from '../../services/wishlist/wishlist.store';
import './Wishlist.css';

function Wishlist() {
  const wishlistIds = useSyncExternalStore(
    subscribeToWishlist,
    getWishlistSnapshot
  );

  const products = wishlistIds
    .map((productId) =>
      shopPageData.products.find(
        (product) => product.id === productId
      )
    )
    .filter((product) => product !== undefined);

  return (
    <main className="wishlist-page">

      {/* =====================================================
          WISHLIST HEADER
          ===================================================== */}

      <section className="wishlist-page__header">
        <p className="wishlist-page__eyebrow">
          Your Collection
        </p>

        <h1 className="wishlist-page__title">
          Wishlist
        </h1>

        <p className="wishlist-page__count">
          {products.length}{' '}
          {products.length === 1 ? 'item' : 'items'}
        </p>
      </section>


      {/* =====================================================
          WISHLIST PRODUCTS
          ===================================================== */}

      <section
        className="wishlist-page__products"
        aria-label="Wishlist products"
      >

        {products.length > 0 ? (
          <div className="wishlist-page__grid">

            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>
        ) : (

          /* =================================================
             EMPTY WISHLIST
             ================================================= */

          <div className="wishlist-page__empty">

            <p className="wishlist-page__empty-eyebrow">
              Your Collection
            </p>

            <h2 className="wishlist-page__empty-title">
              Your wishlist is empty
            </h2>

            <p className="wishlist-page__empty-description">
              Save pieces you love and return to them
              whenever you are ready.
            </p>

            <button
              type="button"
              className="wishlist-page__shop-button"
              onClick={() => {
                window.location.href = '/shop';
              }}
            >
              Explore the Collection
            </button>

          </div>
        )}

      </section>

    </main>
  );
}

export default Wishlist;