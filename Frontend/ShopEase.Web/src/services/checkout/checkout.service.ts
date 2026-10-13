
import { shopPageData } from '../shop/shop.data';
import { getCartSnapshot } from '../cart/cart.store';

import type {
  AddressValidationResult,
  CheckoutAddress,
  CheckoutItem,
  CheckoutSummary,
  PaymentMethod,
  ShippingMethod,
} from './checkout.types';

export const getShippingMethods = (): ShippingMethod[] => [
  {
    id: 'standard',
    name: 'Standard Delivery',
    description: 'Regular delivery service',
    estimatedDelivery: 'To be confirmed',
    price: null,
  },
  {
    id: 'express',
    name: 'Express Delivery',
    description: 'Priority delivery service',
    estimatedDelivery: 'To be confirmed',
    price: null,
  },
];

export const getPaymentMethods = (): PaymentMethod[] => [
  {
    id: 'upi',
    name: 'UPI',
    description: 'Pay using a supported UPI application',
    enabled: false,
  },
  {
    id: 'card',
    name: 'Credit or Debit Card',
    description: 'Pay using a supported payment gateway',
    enabled: false,
  },
  {
    id: 'netbanking',
    name: 'Net Banking',
    description: 'Pay through a supported bank',
    enabled: false,
  },
  {
    id: 'cod',
    name: 'Cash on Delivery',
    description: 'Availability must be confirmed',
    enabled: false,
  },
];

export const getCheckoutItems = (): CheckoutItem[] => {
  const cartState = getCartSnapshot();

  return cartState.items.flatMap((cartItem) => {
    const product = shopPageData.products.find(
      (candidate) => candidate.id === cartItem.productId
    );

    if (!product) {
      return [];
    }

    return [
      {
        productId: product.id,
        name: product.name,
        imageUrl: product.imageUrl,
        unitPrice: product.price,
        quantity: cartItem.quantity,
        lineTotal: product.price * cartItem.quantity,
      },
    ];
  });
};

export const getCheckoutSummary = (): CheckoutSummary => {
  const items = getCheckoutItems();

  const itemCount = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = items.reduce(
    (total, item) => total + item.lineTotal,
    0
  );

  return {
    items,
    itemCount,
    subtotal,
    shippingCharge: null,
    tax: null,
    total: null,
  };
};

/**
 * Frontend address validation.
 * The backend must repeat all validation before accepting an order.
 */
export const validateDeliveryAddress = (
  address: CheckoutAddress
): AddressValidationResult => {
  const errors: AddressValidationResult['errors'] = {};

  const fullName = address.fullName.trim();
  const phone = address.phone.trim();
  const email = address.email.trim();
  const addressLine1 = address.addressLine1.trim();
  const city = address.city.trim();
  const state = address.state.trim();
  const postalCode = address.postalCode.trim();
  const country = address.country.trim();

  // Allow letters, spaces, apostrophes, periods and hyphens.
  // Require at least two letters.
  const namePattern =
    /^(?=.*\p{L}.*\p{L})[\p{L}][\p{L}\s.'’-]*$/u;

  if (!fullName) {
    errors.fullName = 'Enter your full name.';
  } else if (fullName.length < 2 || fullName.length > 100) {
    errors.fullName = 'Name must be between 2 and 100 characters.';
  } else if (!namePattern.test(fullName)) {
    errors.fullName =
      'Enter a valid name using letters and normal name punctuation.';
  }

  // Accept exactly 10 digits, optionally separated by spaces or hyphens.
  if (!phone) {
    errors.phone = 'Enter your phone number.';
  } else if (!/^\d(?:[\d -]*\d)?$/.test(phone) ||
             phone.replace(/[ -]/g, '').length !== 10) {
    errors.phone = 'Enter a valid 10-digit phone number.';
  }

  if (!email) {
    errors.email = 'Enter your email address.';
  } else if (
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    errors.email = 'Enter a valid email address.';
  }

  // Require a meaningful address containing letters or digits.
  if (!addressLine1) {
    errors.addressLine1 = 'Enter your delivery address.';
  } else if (addressLine1.length < 5 || addressLine1.length > 150) {
    errors.addressLine1 =
      'Address line 1 must be between 5 and 150 characters.';
  } else if (!/[\p{L}\p{N}]/u.test(addressLine1)) {
    errors.addressLine1 =
      'Address must contain letters or numbers, not only symbols.';
  }

  // Address line 2 is optional, but reject symbol-only values.
  const addressLine2 = address.addressLine2.trim();

  if (
    addressLine2 &&
    !/[\p{L}\p{N}]/u.test(addressLine2)
  ) {
    errors.addressLine2 =
      'Address line 2 must contain letters or numbers.';
  }

  // City and state must contain letters and normal name punctuation.
  const localityPattern =
    /^(?=.*\p{L})[\p{L}\s.'’-]*$/u;

  if (!city) {
    errors.city = 'Enter your city.';
  } else if (city.length < 2 || city.length > 80) {
    errors.city = 'City must be between 2 and 80 characters.';
  } else if (!localityPattern.test(city)) {
    errors.city =
      'Enter a valid city using letters and normal punctuation.';
  }

  if (!state) {
    errors.state = 'Enter your state.';
  } else if (state.length < 2 || state.length > 80) {
    errors.state = 'State must be between 2 and 80 characters.';
  } else if (!localityPattern.test(state)) {
    errors.state =
      'Enter a valid state using letters and normal punctuation.';
  }

  if (!postalCode) {
    errors.postalCode = 'Enter your PIN code.';
  } else if (!/^\d{6}$/.test(postalCode)) {
    errors.postalCode = 'Enter a valid 6-digit PIN code.';
  }

  if (!country) {
    errors.country = 'Enter your country.';
  } else if (
    country.length < 2 ||
    country.length > 80 ||
    !localityPattern.test(country)
  ) {
    errors.country = 'Enter a valid country name.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
