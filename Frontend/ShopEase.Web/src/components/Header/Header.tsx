import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <a href="/" className="site-header__logo">
          ShopEase
        </a>

        <nav
          className="site-header__navigation"
          aria-label="Main navigation"
        >
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/collections">Collections</a>
          <a href="/about">About</a>
        </nav>

        <div className="site-header__actions">
          <button type="button" aria-label="Search">
            Search
          </button>

          <button type="button" aria-label="Shopping cart">
            Cart
          </button>

          <button
            type="button"
            className="site-header__menu-button"
            aria-label="Open navigation menu"
          >
            Menu
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;