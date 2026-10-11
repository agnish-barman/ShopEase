
import { useSyncExternalStore } from 'react';
import './Header.css';

import {
  getWishlistSnapshot,
  subscribeToWishlist,
} from '../../services/wishlist/wishlist.store';

import {
  getCartSnapshot,
  subscribeToCart,
} from '../../services/cart/cart.store';

/* =========================================================
   HEADER DATA CONTRACT
   ========================================================= */

export interface HeaderData {
  wishlistCount: number;
  cartCount: number;
}


/* =========================================================
   HEADER PROPS
   ========================================================= */

interface HeaderProps {
  data?: HeaderData;
}


/* =========================================================
   HEADER COMPONENT
   ========================================================= */

function Header({ data }: HeaderProps) {
  /* =======================================================
     WISHLIST STORE
     ======================================================= */

  const wishlistIds = useSyncExternalStore(
    subscribeToWishlist,
    getWishlistSnapshot
  );

  const wishlistCount =
    data?.wishlistCount ?? wishlistIds.length;


  /* =======================================================
     CART STORE
     ======================================================= */

  const cartState = useSyncExternalStore(
    subscribeToCart,
    getCartSnapshot
  );

  const liveCartCount = cartState.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartCount = data?.cartCount ?? liveCartCount;


  /* =======================================================
     ACTIVE CATEGORY
     ======================================================= */

  const currentPath = window.location.pathname;

  const currentSearch = new URLSearchParams(
    window.location.search
  );

  const currentCategory = currentSearch.get('category');

  const isShopPage = currentPath === '/shop';

  const isProductDetailsPage =
    currentPath.startsWith('/product/');

  const isActiveCategory = (category: string) => {
    return (
      (isShopPage || isProductDetailsPage) &&
      currentCategory === category
    );
  };

  const isHeritageActive =
    currentPath === '/heritage' ||
    currentPath.startsWith('/heritage/');

  const categoryLinkClass = (category: string) =>
    isActiveCategory(category)
      ? 'site-header__category-link site-header__category-link--active'
      : 'site-header__category-link';


  /* =======================================================
     RENDER
     ======================================================= */

  return (
    <header className="site-header">

      {/* MAIN HEADER */}

      <div className="site-header__main">
        <div className="site-header__container">

          {/* LEFT CONTROLS */}

          <div className="site-header__left">

            <button
              type="button"
              className="site-header__menu-button"
              aria-label="Open navigation menu"
            >
              <span />
              <span />
              <span />
            </button>

            <button
              type="button"
              className="site-header__currency"
              aria-label="Select currency"
            >
              INR

              <span
                className="site-header__currency-arrow"
                aria-hidden="true"
              >
                ▾
              </span>
            </button>

          </div>


          {/* CENTERED LOGO */}

          <a
            href="/"
            className="site-header__logo"
            aria-label="ShopEase home"
          >
            SHOPEASE
          </a>


          {/* RIGHT ACTIONS */}

          <div className="site-header__actions">

            {/* SEARCH */}

            <button
              type="button"
              className="site-header__action"
              aria-label="Search"
            >
              <svg
                className="site-header__icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle cx="10.5" cy="10.5" r="6.5" />
                <path d="M16 16L21 21" />
              </svg>

              <span className="site-header__action-label">
                Search
              </span>
            </button>


            {/* WISHLIST */}

            <button
              type="button"
              className="site-header__wishlist"
              aria-label={`Wishlist (${wishlistCount} items)`}
              onClick={() => {
                window.location.href = '/wishlist';
              }}
            >
              <span className="site-header__wishlist-content">

                <svg
                  className="site-header__wishlist-icon"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="
                      M12 20.5
                      C11.7 20.25 4 15.2 3.2 9.5
                      C2.8 6.6 4.7 4.2 7.5 4.2
                      C9.4 4.2 10.9 5.2 12 6.7
                      C13.1 5.2 14.6 4.2 16.5 4.2
                      C19.3 4.2 21.2 6.6 20.8 9.5
                      C20 15.2 12.3 20.25 12 20.5
                      Z
                    "
                  />
                </svg>

                <span className="site-header__wishlist-count">
                  {wishlistCount}
                </span>

              </span>
            </button>


            {/* SHOPPING BAG */}

            <button
              type="button"
              className="site-header__action site-header__bag"
              aria-label={`Shopping bag (${cartCount} items)`}
              onClick={() => {
                window.location.href = '/cart';
              }}
            >
              <svg
                className="site-header__icon site-header__bag-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M6 8h12l1 13H5L6 8Z" />
                <path d="M9 8V6a3 3 0 0 1 6 0v2" />
              </svg>

              <span className="site-header__action-label">
                Bag
              </span>

              <span className="site-header__count">
                {cartCount}
              </span>
            </button>

          </div>
        </div>
      </div>


      {/* CATEGORY NAVIGATION */}

      <nav
        className="site-header__category-navigation"
        aria-label="Shop categories"
      >
        <a
          href="/shop?category=lehengas"
          className={categoryLinkClass('lehengas')}
          aria-current={
            isActiveCategory('lehengas') ? 'page' : undefined
          }
        >
          LEHENGAS
        </a>

        <a
          href="/shop?category=sarees"
          className={categoryLinkClass('sarees')}
          aria-current={
            isActiveCategory('sarees') ? 'page' : undefined
          }
        >
          SAREES
        </a>

        <a
          href="/shop?category=bridal"
          className={categoryLinkClass('bridal')}
          aria-current={
            isActiveCategory('bridal') ? 'page' : undefined
          }
        >
          BRIDAL
        </a>

        <a
          href="/heritage"
          className={
            isHeritageActive
              ? 'site-header__category-link site-header__category-link--active'
              : 'site-header__category-link'
          }
          aria-current={
            isHeritageActive ? 'page' : undefined
          }
        >
          THE HERITAGE
        </a>

        <a
          href="/shop?category=jewellery"
          className={categoryLinkClass('jewellery')}
          aria-current={
            isActiveCategory('jewellery') ? 'page' : undefined
          }
        >
          JEWELLERY
        </a>
      </nav>

    </header>
  );
}

export default Header;
