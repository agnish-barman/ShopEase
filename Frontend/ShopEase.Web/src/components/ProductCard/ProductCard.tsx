import type { ShopProduct } from '../../services/shop/shop.types';
import './ProductCard.css';

interface ProductCardProps {
  product: ShopProduct;
}

function ProductCard({ product }: ProductCardProps) {
  const handleProductClick = () => {
    window.location.href = `/product/${product.id}`;
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLElement>
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleProductClick();
    }
  };

  return (
    <article
      className="product-card"
      role="link"
      tabIndex={0}
      onClick={handleProductClick}
      onKeyDown={handleKeyDown}
      aria-label={`View ${product.name}`}
    >
      {/* Product Image */}
      <div className="product-card__image">
        <img
          src={product.imageUrl}
          alt={product.name}
        />
      </div>

      {/* Product Information */}
      <div className="product-card__info">

        <h2 className="product-card__name">
          {product.name}
        </h2>

        {/* Pricing */}
        <div className="product-card__pricing">
          <span className="product-card__price">
            ₹ {product.price.toLocaleString('en-IN')}
          </span>

          {product.originalPrice !== undefined && (
            <span className="product-card__original-price">
              ₹ {product.originalPrice.toLocaleString('en-IN')}
            </span>
          )}
        </div>

        {/* Rating */}
        {product.rating !== undefined && (
          <div className="product-card__rating">
            <span
              className="product-card__stars"
              aria-hidden="true"
            >
              ★★★★★
            </span>

            <span className="product-card__rating-value">
              {product.rating.toFixed(1)}
            </span>

            {product.reviewCount !== undefined && (
              <span className="product-card__review-count">
                ({product.reviewCount})
              </span>
            )}
          </div>
        )}

        {/* Color Swatches */}
        {product.colors &&
          product.colors.length > 0 && (
            <div
              className="product-card__swatches"
              aria-label="Available colors"
            >
              {product.colors.map((color) => (
                <span
                  key={color}
                  className="product-card__swatch"
                  style={{
                    backgroundColor: color,
                  }}
                  title={color}
                  aria-label={color}
                />
              ))}
            </div>
          )}

      </div>
    </article>
  );
}

export default ProductCard;