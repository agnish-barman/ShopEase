
import './App.css';

import MainLayout from './layouts/MainLayout';

import Hero from './components/Hero/Hero';
import CategoryEditorial from './components/CategoryEditorial/CategoryEditorial';
import FeaturedMasterpieces from './components/FeaturedMasterpieces/FeaturedMasterpieces';
import VirtualConcierge from './components/VirtualConcierge/VirtualConcierge';
import Footer from './components/Footer/Footer';

import Shop from './pages/Shop/Shop';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Wishlist from './pages/Wishlist/Wishlist';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';

function App() {
  const currentPath = window.location.pathname;

  const isShopPage =
    currentPath === '/shop' ||
    currentPath.startsWith('/shop/');

  const isProductDetailsPage =
    currentPath.startsWith('/product/');

  const isWishlistPage =
    currentPath === '/wishlist';

  const isCartPage =
    currentPath === '/cart';

  const isCheckoutPage =
    currentPath === '/checkout';

  return (
    <MainLayout>
      {isProductDetailsPage ? (
        <>
          <ProductDetails />
          <Footer />
        </>
      ) : isWishlistPage ? (
        <>
          <Wishlist />
          <Footer />
        </>
      ) : isCheckoutPage ? (
        <>
          <Checkout />
          <Footer />
        </>
      ) : isCartPage ? (
        <>
          <Cart />
          <Footer />
        </>
      ) : isShopPage ? (
        <>
          <Shop />
          <Footer />
        </>
      ) : (
        <>
          <Hero />
          <CategoryEditorial />
          <FeaturedMasterpieces />
          <VirtualConcierge />
          <Footer />
        </>
      )}
    </MainLayout>
  );
}

export default App;
