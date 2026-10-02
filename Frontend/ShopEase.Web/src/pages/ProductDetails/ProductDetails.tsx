import { useMemo } from 'react';
import { shopPageData } from '../../services/shop/shop.data';
import type { ShopProduct } from '../../services/shop/shop.types';
import './ProductDetails.css';

function ProductDetails() {
  const productId = window.location.pathname.split('/').pop();

  const product = useMemo<ShopProduct | undefined>(() => {
    return shopPageData.products.find(
      (item) => item.id === productId
    );
  }, [productId]);

  const handleBack = () => {
    window.history.back();
  };

  if (!product) {
    return (
      <main className="product-details">
        <section className="product-details__not-found">
          <button
            type="button"
            className="product-details__back-button"
            onClick={handleBack}
          >
            ← Back
          </button>

          <h1>Product Not Found</h1>

          <p>
            The product you are looking for is not available.
          </p>

          <button
            type="button"
            className="product-details__shop-button"
            onClick={() => {
              window.location.href = '/shop';
            }}
          >
            Back to Shop
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="product-details">
      <section className="product-details__container">

        {/* Back Navigation */}
        <button
          type="button"
          className="product-details__back-button"
          onClick={handleBack}
        >
          ← Back
        </button>

        {/* Product Image */}
        <div className="product-details__image-wrapper">
          <img
            className="product-details__image"
            src={product.imageUrl}
            alt={product.name}
          />
        </div>

        {/* Product Information */}
        <div className="product-details__content">

          <p className="product-details__eyebrow">
            ShopEase Collection
          </p>

          <h1 className="product-details__name">
            {product.name}
          </h1>

          {/* Rating */}
          {product.rating !== undefined && (
            <div className="product-details__rating">
              <span
                className="product-details__stars"
                aria-hidden="true"
              >
                ★★★★★
              </span>

              <span className="product-details__rating-value">
                {product.rating.toFixed(1)}
              </span>

              {product.reviewCount !== undefined && (
                <span className="product-details__review-count">
                  ({product.reviewCount} reviews)
                </span>
              )}
            </div>
          )}

          {/* Pricing */}
          <div className="product-details__pricing">
            <span className="product-details__price">
              ₹ {product.price.toLocaleString('en-IN')}
            </span>

            {product.originalPrice !== undefined && (
              <span className="product-details__original-price">
                ₹ {product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          {/* Colors */}
          {product.colors &&
            product.colors.length > 0 && (
              <div className="product-details__colors">
                <h2 className="product-details__section-title">
                  Available Colors
                </h2>

                <div className="product-details__swatches">
                  {product.colors.map((color) => (
                    <span
                      key={color}
                      className="product-details__swatch"
                      style={{
                        backgroundColor: color,
                      }}
                      title={color}
                      aria-label={color}
                    />
                  ))}
                </div>
              </div>
            )}

          {/* Purchase Actions */}
          <div className="product-details__actions">
            <button
              type="button"
              className="product-details__add-to-bag"
            >
              Add to Bag
            </button>

            <button
              type="button"
              className="product-details__wishlist"
            >
              Add to Wishlist
            </button>
          </div>

          {/* Product Information */}
          <div className="product-details__information">
            <div className="product-details__information-item">
              <h2>Craftsmanship</h2>

              <p>
                Crafted with attention to detail and inspired
                by timeless Indian heritage.
              </p>
            </div>

            <div className="product-details__information-item">
              <h2>Delivery</h2>

              <p>
                Complimentary shipping on orders above
                ₹25,000.
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

export default ProductDetails;