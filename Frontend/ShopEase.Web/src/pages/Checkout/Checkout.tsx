
import { useState, useSyncExternalStore, type FormEvent } from 'react';
import {
  getCartSnapshot,
  subscribeToCart,
} from '../../services/cart/cart.store';
import {
  getCheckoutSummary,
  getPaymentMethods,
  getShippingMethods,
  validateDeliveryAddress,
} from '../../services/checkout/checkout.service';
import type {
  CheckoutAddress,
  PaymentMethodId,
  ShippingMethodId,
} from '../../services/checkout/checkout.types';
import './Checkout.css';

const initialAddress: CheckoutAddress = {
  fullName: '',
  phone: '',
  email: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  state: '',
  postalCode: '',
  country: 'India',
};

function Checkout() {
  const cartState = useSyncExternalStore(
    subscribeToCart,
    getCartSnapshot
  );

  // Recalculate the summary whenever the cart changes.
  const summary = getCheckoutSummary();
  const shippingMethods = getShippingMethods();
  const paymentMethods = getPaymentMethods();

  const [address, setAddress] =
    useState<CheckoutAddress>(initialAddress);

  const [shippingMethod, setShippingMethod] =
    useState<ShippingMethodId>('standard');

  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethodId | ''>('');

  const [errors, setErrors] = useState<
    Partial<Record<keyof CheckoutAddress, string>>
  >({});

  const [message, setMessage] = useState('');

  const formatPrice = (price: number) =>
    `₹ ${price.toLocaleString('en-IN')}`;

  const updateAddress = (
    field: keyof CheckoutAddress,
    value: string
  ) => {
    setAddress((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => ({
      ...current,
      [field]: undefined,
    }));

    setMessage('');
  };

  const handleContinueShopping = () => {
    window.location.href = '/shop';
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage('');

    const validation = validateDeliveryAddress(address);
    setErrors(validation.errors);

    if (!validation.isValid) {
      setMessage('Please correct the highlighted address fields.');
      return;
    }

    if (summary.items.length === 0) {
      setMessage('Your shopping bag is empty. Add a product to continue.');
      return;
    }

    if (!paymentMethod) {
      setMessage('Payment options are not available yet.');
      return;
    }

    setMessage(
      'Your address is valid. Order placement and payment will be enabled after backend integration.'
    );
  };

  if (summary.items.length === 0) {
    return (
      <main className="checkout-page">
        <header className="checkout-header">
          <p className="checkout-eyebrow">Your Selection</p>
          <h1 className="checkout-title">Checkout</h1>
        </header>

        <section className="checkout-empty">
          <h2>Your shopping bag is empty</h2>
          <p>
            Add your favourite pieces before proceeding to checkout.
          </p>
          <button
            type="button"
            className="checkout-primary-button"
            onClick={handleContinueShopping}
          >
            Explore the Collection
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="checkout-page">
      <header className="checkout-header">
        <p className="checkout-eyebrow">A Thoughtful Experience</p>
        <h1 className="checkout-title">Checkout</h1>
        <p className="checkout-subtitle">
          Confirm your delivery details and review your selection.
        </p>
      </header>

      <div className="checkout-layout">
        <form
          className="checkout-form"
          onSubmit={handleSubmit}
          noValidate
        >
          <section className="checkout-section">
            <div className="checkout-section-heading">
              <span className="checkout-step">01</span>
              <div>
                <h2>Delivery Address</h2>
                <p>Where should we deliver your order?</p>
              </div>
            </div>

            <div className="checkout-fields">
              <div className="checkout-field">
                <label htmlFor="fullName">Full name *</label>
                <input
                  id="fullName"
                  name="fullName"
                  autoComplete="name"
                  value={address.fullName}
                  onChange={(event) =>
                    updateAddress('fullName', event.target.value)
                  }
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby={
                    errors.fullName ? 'fullName-error' : undefined
                  }
                  required
                />
                {errors.fullName && (
                  <span id="fullName-error" className="checkout-error">
                    {errors.fullName}
                  </span>
                )}
              </div>

              <div className="checkout-field">
                <label htmlFor="phone">Phone number *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  value={address.phone}
                  onChange={(event) =>
                    updateAddress('phone', event.target.value)
                  }
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={
                    errors.phone ? 'phone-error' : undefined
                  }
                  required
                />
                {errors.phone && (
                  <span id="phone-error" className="checkout-error">
                    {errors.phone}
                  </span>
                )}
              </div>

              <div className="checkout-field checkout-field--full">
                <label htmlFor="email">Email address *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={address.email}
                  onChange={(event) =>
                    updateAddress('email', event.target.value)
                  }
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={
                    errors.email ? 'email-error' : undefined
                  }
                  required
                />
                {errors.email && (
                  <span id="email-error" className="checkout-error">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="checkout-field checkout-field--full">
                <label htmlFor="addressLine1">Address line 1 *</label>
                <input
                  id="addressLine1"
                  name="addressLine1"
                  autoComplete="address-line1"
                  value={address.addressLine1}
                  onChange={(event) =>
                    updateAddress('addressLine1', event.target.value)
                  }
                  aria-invalid={Boolean(errors.addressLine1)}
                  aria-describedby={
                    errors.addressLine1
                      ? 'addressLine1-error'
                      : undefined
                  }
                  required
                />
                {errors.addressLine1 && (
                  <span
                    id="addressLine1-error"
                    className="checkout-error"
                  >
                    {errors.addressLine1}
                  </span>
                )}
              </div>

              <div className="checkout-field checkout-field--full">
                <label htmlFor="addressLine2">
                  Address line 2 (optional)
                </label>
                <input
                  id="addressLine2"
                  name="addressLine2"
                  autoComplete="address-line2"
                  value={address.addressLine2}
                  onChange={(event) =>
                    updateAddress('addressLine2', event.target.value)
                  }
                />
              </div>

              <div className="checkout-field">
                <label htmlFor="city">City *</label>
                <input
                  id="city"
                  name="city"
                  autoComplete="address-level2"
                  value={address.city}
                  onChange={(event) =>
                    updateAddress('city', event.target.value)
                  }
                  aria-invalid={Boolean(errors.city)}
                  aria-describedby={
                    errors.city ? 'city-error' : undefined
                  }
                  required
                />
                {errors.city && (
                  <span id="city-error" className="checkout-error">
                    {errors.city}
                  </span>
                )}
              </div>

              <div className="checkout-field">
                <label htmlFor="state">State *</label>
                <input
                  id="state"
                  name="state"
                  autoComplete="address-level1"
                  value={address.state}
                  onChange={(event) =>
                    updateAddress('state', event.target.value)
                  }
                  aria-invalid={Boolean(errors.state)}
                  aria-describedby={
                    errors.state ? 'state-error' : undefined
                  }
                  required
                />
                {errors.state && (
                  <span id="state-error" className="checkout-error">
                    {errors.state}
                  </span>
                )}
              </div>

              <div className="checkout-field">
                <label htmlFor="postalCode">PIN code *</label>
                <input
                  id="postalCode"
                  name="postalCode"
                  inputMode="numeric"
                  autoComplete="postal-code"
                  maxLength={6}
                  value={address.postalCode}
                  onChange={(event) =>
                    updateAddress('postalCode', event.target.value)
                  }
                  aria-invalid={Boolean(errors.postalCode)}
                  aria-describedby={
                    errors.postalCode
                      ? 'postalCode-error'
                      : undefined
                  }
                  required
                />
                {errors.postalCode && (
                  <span
                    id="postalCode-error"
                    className="checkout-error"
                  >
                    {errors.postalCode}
                  </span>
                )}
              </div>

              <div className="checkout-field">
                <label htmlFor="country">Country *</label>
                <input
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  value={address.country}
                  onChange={(event) =>
                    updateAddress('country', event.target.value)
                  }
                  aria-invalid={Boolean(errors.country)}
                  aria-describedby={
                    errors.country ? 'country-error' : undefined
                  }
                  required
                />
                {errors.country && (
                  <span id="country-error" className="checkout-error">
                    {errors.country}
                  </span>
                )}
              </div>
            </div>
          </section>

          <section className="checkout-section">
            <div className="checkout-section-heading">
              <span className="checkout-step">02</span>
              <div>
                <h2>Delivery Method</h2>
                <p>Choose your preferred delivery service.</p>
              </div>
            </div>

            <div className="checkout-options">
              {shippingMethods.map((method) => (
                <label
                  className="checkout-option"
                  key={method.id}
                >
                  <input
                    type="radio"
                    name="shippingMethod"
                    value={method.id}
                    checked={shippingMethod === method.id}
                    onChange={() => setShippingMethod(method.id)}
                  />
                  <span className="checkout-option__content">
                    <strong>{method.name}</strong>
                    <span>{method.description}</span>
                    <span>{method.estimatedDelivery}</span>
                  </span>
                  <span className="checkout-option__price">
                    {method.price === null
                      ? 'To be confirmed'
                      : formatPrice(method.price)}
                  </span>
                </label>
              ))}
            </div>
            <p className="checkout-helper">
              Delivery availability, charges, and dates require confirmation.
            </p>
          </section>

          <section className="checkout-section">
            <div className="checkout-section-heading">
              <span className="checkout-step">03</span>
              <div>
                <h2>Payment Method</h2>
                <p>Payment options will be enabled after integration.</p>
              </div>
            </div>

            <div className="checkout-options">
              {paymentMethods.map((method) => (
                <label
                  className={`checkout-option ${
                    !method.enabled ? 'checkout-option--disabled' : ''
                  }`}
                  key={method.id}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method.id}
                    checked={paymentMethod === method.id}
                    disabled={!method.enabled}
                    onChange={() => setPaymentMethod(method.id)}
                  />
                  <span className="checkout-option__content">
                    <strong>{method.name}</strong>
                    <span>{method.description}</span>
                  </span>
                  {!method.enabled && (
                    <span className="checkout-option__status">
                      Coming soon
                    </span>
                  )}
                </label>
              ))}
            </div>
          </section>

          {message && (
            <p
              className="checkout-message"
              role="status"
              aria-live="polite"
            >
              {message}
            </p>
          )}

          <button
            type="submit"
            className="checkout-primary-button checkout-submit"
            disabled={cartState.items.length === 0}
          >
            Review Checkout Details
          </button>

          <p className="checkout-secure-note">
            No order will be placed and no payment will be processed at this stage.
          </p>
        </form>

        <aside className="checkout-summary">
          <p className="checkout-summary__eyebrow">Your Selection</p>
          <h2>Order Summary</h2>

          <div className="checkout-summary__items">
            {summary.items.map((item) => (
              <article
                className="checkout-summary-item"
                key={item.productId}
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="checkout-summary-item__image"
                />
                <div className="checkout-summary-item__details">
                  <h3>{item.name}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <strong>{formatPrice(item.lineTotal)}</strong>
                </div>
              </article>
            ))}
          </div>

          <div className="checkout-summary__row">
            <span>Items ({summary.itemCount})</span>
            <span>{formatPrice(summary.subtotal)}</span>
          </div>

          <div className="checkout-summary__row">
            <span>Delivery</span>
            <span>To be confirmed</span>
          </div>

          <div className="checkout-summary__row">
            <span>Taxes</span>
            <span>To be confirmed</span>
          </div>

          <div className="checkout-summary__total">
            <span>Current subtotal</span>
            <strong>{formatPrice(summary.subtotal)}</strong>
          </div>

          <p className="checkout-summary__note">
            This is a preliminary subtotal, not the final payable amount.
            Shipping and taxes have not been calculated.
          </p>

          <button
            type="button"
            className="checkout-secondary-button"
            onClick={() => {
              window.location.href = '/cart';
            }}
          >
            Return to Shopping Bag
          </button>
        </aside>
      </div>
    </main>
  );
}

export default Checkout;
