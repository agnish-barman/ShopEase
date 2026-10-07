const STORAGE_KEY = 'shopease-wishlist';

type WishlistListener = () => void;

let wishlistIds: string[] = [];
let snapshot: string[] = [];
const listeners = new Set<WishlistListener>();

const createSnapshot = (ids: string[]): string[] => {
  return [...ids];
};

const loadWishlist = (): string[] => {
  const storedWishlist = window.localStorage.getItem(STORAGE_KEY);

  if (!storedWishlist) {
    return [];
  }

  try {
    const parsedWishlist: unknown = JSON.parse(storedWishlist);

    if (Array.isArray(parsedWishlist)) {
      return parsedWishlist.filter(
        (item): item is string => typeof item === 'string'
      );
    }
  } catch {
    // Ignore invalid stored data.
  }

  return [];
};

wishlistIds = loadWishlist();
snapshot = createSnapshot(wishlistIds);

const notifyListeners = () => {
  listeners.forEach((listener) => {
    listener();
  });
};

const saveWishlist = () => {
  window.localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(wishlistIds)
  );

  snapshot = createSnapshot(wishlistIds);

  window.dispatchEvent(
    new CustomEvent('shopease:wishlist-changed')
  );

  notifyListeners();
};

export const subscribeToWishlist = (
  listener: WishlistListener
): (() => void) => {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
};

export const getWishlistSnapshot = (): string[] => {
  return snapshot;
};

export const getWishlistIds = (): string[] => {
  return [...wishlistIds];
};

export const isInWishlist = (
  productId: string
): boolean => {
  return wishlistIds.includes(productId);
};

export const addToWishlist = (
  productId: string
): void => {
  if (isInWishlist(productId)) {
    return;
  }

  wishlistIds = [...wishlistIds, productId];

  saveWishlist();
};

export const removeFromWishlist = (
  productId: string
): void => {
  wishlistIds = wishlistIds.filter(
    (id) => id !== productId
  );

  saveWishlist();
};

export const getWishlistCount = (): number => {
  return wishlistIds.length;
};