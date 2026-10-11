
import type { CartItem, CartState } from './cart.types';

/* =========================================================
   CART CONFIGURATION
   ========================================================= */

const STORAGE_KEY = 'shopease-cart';

type CartListener = () => void;


/* =========================================================
   CART STORE
   ========================================================= */

let cartItems: CartItem[] = [];
let snapshot: CartState = { items: [] };

const listeners = new Set<CartListener>();


/* =========================================================
   SNAPSHOT
   ========================================================= */

const createSnapshot = (items: CartItem[]): CartState => ({
  items: items.map((item) => ({ ...item })),
});


/* =========================================================
   LOAD CART FROM LOCAL STORAGE
   ========================================================= */

const loadCart = (): CartItem[] => {
  try {
    const storedCart = window.localStorage.getItem(STORAGE_KEY);

    if (!storedCart) {
      return [];
    }

    const parsedCart: unknown = JSON.parse(storedCart);

    if (
      !parsedCart ||
      typeof parsedCart !== 'object' ||
      !('items' in parsedCart) ||
      !Array.isArray(parsedCart.items)
    ) {
      return [];
    }

    const validItems = parsedCart.items.filter(
      (item: unknown): item is CartItem => {
        if (!item || typeof item !== 'object') {
          return false;
        }

        const candidate = item as Record<string, unknown>;

        return (
          typeof candidate.productId === 'string' &&
          candidate.productId.length > 0 &&
          typeof candidate.quantity === 'number' &&
          Number.isInteger(candidate.quantity) &&
          candidate.quantity >= 1
        );
      }
    );

    // Combine duplicate product IDs defensively.
    const mergedItems = new Map<string, number>();

    validItems.forEach((item) => {
      mergedItems.set(
        item.productId,
        (mergedItems.get(item.productId) ?? 0) + item.quantity
      );
    });

    return Array.from(mergedItems, ([productId, quantity]) => ({
      productId,
      quantity,
    }));
  } catch {
    // Ignore malformed or inaccessible stored data.
    return [];
  }
};


/* =========================================================
   INITIALIZE STORE
   ========================================================= */

cartItems = loadCart();
snapshot = createSnapshot(cartItems);


/* =========================================================
   SUBSCRIPTIONS
   ========================================================= */

const notifyListeners = (): void => {
  listeners.forEach((listener) => {
    listener();
  });
};


const saveCart = (): void => {
  window.localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ items: cartItems })
  );

  snapshot = createSnapshot(cartItems);

  window.dispatchEvent(
    new CustomEvent('shopease:cart-changed')
  );

  notifyListeners();
};


export const subscribeToCart = (
  listener: CartListener
): (() => void) => {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
};


export const getCartSnapshot = (): CartState => snapshot;


/* =========================================================
   CART READ OPERATIONS
   ========================================================= */

export const getCartItems = (): CartItem[] => {
  return cartItems.map((item) => ({ ...item }));
};


export const getCartCount = (): number => {
  return cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
};


export const getCartSubtotal = (
  getPrice: (productId: string) => number | undefined
): number => {
  return cartItems.reduce((subtotal, item) => {
    const price = getPrice(item.productId);

    if (price === undefined || !Number.isFinite(price)) {
      return subtotal;
    }

    return subtotal + price * item.quantity;
  }, 0);
};


/* =========================================================
   ADD TO CART
   ========================================================= */

export const addToCart = (
  productId: string,
  quantity = 1
): void => {
  if (
    !productId ||
    !Number.isInteger(quantity) ||
    quantity < 1
  ) {
    return;
  }

  const existingItem = cartItems.find(
    (item) => item.productId === productId
  );

  if (existingItem) {
    cartItems = cartItems.map((item) =>
      item.productId === productId
        ? { ...item, quantity: item.quantity + quantity }
        : item
    );
  } else {
    cartItems = [
      ...cartItems,
      { productId, quantity },
    ];
  }

  saveCart();
};


/* =========================================================
   UPDATE QUANTITY
   ========================================================= */

export const updateCartQuantity = (
  productId: string,
  quantity: number
): void => {
  if (
    !productId ||
    !Number.isInteger(quantity) ||
    quantity < 1
  ) {
    return;
  }

  const exists = cartItems.some(
    (item) => item.productId === productId
  );

  if (!exists) {
    return;
  }

  cartItems = cartItems.map((item) =>
    item.productId === productId
      ? { ...item, quantity }
      : item
  );

  saveCart();
};


/* =========================================================
   REMOVE FROM CART
   ========================================================= */

export const removeFromCart = (
  productId: string
): void => {
  const updatedItems = cartItems.filter(
    (item) => item.productId !== productId
  );

  if (updatedItems.length === cartItems.length) {
    return;
  }

  cartItems = updatedItems;

  saveCart();
};


/* =========================================================
   CLEAR CART
   ========================================================= */

export const clearCart = (): void => {
  if (cartItems.length === 0) {
    return;
  }

  cartItems = [];

  saveCart();
};
