
import { useSyncExternalStore } from 'react';
import { shopPageData } from '../../services/shop/shop.data';
import {
  getCartSnapshot,
  subscribeToCart,
  updateCartQuantity,
  removeFromCart,
} from '../../services/cart/cart.store';
import './Cart.css';

function Cart() {
  const cartState = useSyncExternalStore(
    subscribeToCart,
    getCartSnapshot
  );

  /*
   * Resolve product details from the existing Shop data.
   * The cart store keeps only product IDs and quantities.
   */
  const cartItems = cartState.items
    .map((item) => {
      const product = shopPageData.products.find(
        (candidate) => candidate.id === item.productId
      );

      return product ? { ...item, product } : undefined;
    })
    .filter((item) => item !== undefined);

  const itemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const formatPrice = (price: number) =>
    `₹ ${price.toLocaleString('en-IN')}`;

  const handleContinueShopping = () => {
    window.location.href = '/shop';
  };

  return (
    <main className="cart-page">
      <section className="cart-page__header">
        <p className="cart-page__eyebrow">
          Your Selection
        </p>

        <h1 className="cart-page__title">
          Shopping Bag
        </h1>

        <p className="cart-page__count">
          {itemCount} {itemCount === 1 ? 'item' : 'items'}
        </p>
      </section>

      {cartItems.length > 0 ? (
        <section
          className="cart-page__content"
          aria-label="Shopping cart"
        >
          <div className="cart-page__items">
            {cartItems.map(({ product, quantity }) => (
              <article
                className="cart-item"
                key={product.id}
              >
                <a
                  className="cart-item__image-link"
                  href={`/product/${product.id}`}
                  aria-label={`View ${product.name}`}
                >
                  <img
                    className="cart-item__image"
                    src={product.imageUrl}
                    alt={product.name}
                  />
                </a>

                <div className="cart-item__details">
                  <p className="cart-item__eyebrow">
                    ShopEase Collection
                  </p>

                  <h2 className="cart-item__name">
                    <a href={`/product/${product.id}`}>
                      {product.name}
                    </a>
                  </h2>

                  <p className="cart-item__unit-price">
                    {formatPrice(product.price)}
                  </p>

                  <div className="cart-item__quantity">
                    <span className="cart-item__quantity-label">
                      Quantity
                    </span>

                    <div
                      className="cart-item__quantity-control"
                      aria-label={`Quantity for ${product.name}`}
                    >
                      <button
                        type="button"
                        className="cart-item__quantity-button"
                        aria-label={`Decrease quantity of ${product.name}`}
                        disabled={quantity <= 1}
                        onClick={() =>
                          updateCartQuantity(
                            product.id,
                            quantity - 1
                          )
                        }
                      >
                        −
                      </button>

                      <span
                        className="cart-item__quantity-value"
                        aria-live="polite"
                      >
                        {quantity}
                      </span>

                      <button
                        type="button"
                        className="cart-item__quantity-button"
                        aria-label={`Increase quantity of ${product.name}`}
                        onClick={() =>
                          updateCartQuantity(
                            product.id,
                            quantity + 1
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="cart-item__remove"
                    onClick={() => removeFromCart(product.id)}
                    aria-label={`Remove ${product.name} from cart`}
                  >
                    Remove item
                  </button>
                </div>

                <p className="cart-item__line-total">
                  {formatPrice(product.price * quantity)}
                </p>
              </article>
            ))}
          </div>

          <aside className="cart-summary">
            <p className="cart-summary__eyebrow">
              Order Overview
            </p>

            <h2 className="cart-summary__title">
              Order Summary
            </h2>

            <div className="cart-summary__row">
              <span>Subtotal ({itemCount} items)</span>
              <span>{formatPrice(subtotal)}</span>
            </div>

            <div className="cart-summary__row">
              <span>Shipping</span>
              <span>
                {subtotal >= 25000
                  ? 'Complimentary'
                  : 'Calculated at checkout'}
              </span>
            </div>

            <p className="cart-summary__note">
              Taxes and final shipping charges will be
              confirmed at checkout.
            </p>

            <div className="cart-summary__total">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>

            <p className="cart-summary__checkout-note">
              Checkout integration will be added in the
              next phase.
            </p>

            <button
              type="button"
              className="cart-summary__continue-button"
              onClick={handleContinueShopping}
            >
              Continue Shopping
            </button>
          </aside>
        </section>
      ) : (
        <section className="cart-page__empty">
          <p className="cart-page__empty-eyebrow">
            Your Collection
          </p>

          <h2 className="cart-page__empty-title">
            Your shopping bag is empty
          </h2>

          <p className="cart-page__empty-description">
            Discover timeless pieces and add your favourites
            to your shopping bag.
          </p>

          <button
            type="button"
            className="cart-page__continue-button"
            onClick={handleContinueShopping}
          >
            Explore the Collection
          </button>
        </section>
      )}
    </main>
  );
}

export default Cart;
