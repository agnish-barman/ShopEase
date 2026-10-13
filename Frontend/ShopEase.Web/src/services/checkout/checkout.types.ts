
export interface CheckoutAddress {
  fullName: string;
  phone: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export type ShippingMethodId = 'standard' | 'express';

export interface ShippingMethod {
  id: ShippingMethodId;
  name: string;
  description: string;
  estimatedDelivery: string;
  price: number | null;
}

export type PaymentMethodId =
  | 'upi'
  | 'card'
  | 'netbanking'
  | 'cod';

export interface PaymentMethod {
  id: PaymentMethodId;
  name: string;
  description: string;
  enabled: boolean;
}

export interface CheckoutItem {
  productId: string;
  name: string;
  imageUrl: string;
  unitPrice: number;
  quantity: number;
  lineTotal: number;
}

export interface CheckoutSummary {
  items: CheckoutItem[];
  itemCount: number;
  subtotal: number;
  shippingCharge: number | null;
  tax: number | null;
  total: number | null;
}

export interface CheckoutDraft {
  address: CheckoutAddress;
  shippingMethodId: ShippingMethodId;
  paymentMethodId: PaymentMethodId;
}

export interface AddressValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof CheckoutAddress, string>>;
}
