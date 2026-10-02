import './App.css';
import MainLayout from './layouts/MainLayout';
import Hero from './components/Hero/Hero';
import CategoryEditorial from './components/CategoryEditorial/CategoryEditorial';
import FeaturedMasterpieces from './components/FeaturedMasterpieces/FeaturedMasterpieces';
import VirtualConcierge from './components/VirtualConcierge/VirtualConcierge';
import Footer from './components/Footer/Footer';
import Shop from './pages/Shop/Shop';
import ProductDetails from './pages/ProductDetails/ProductDetails';

function App() {
  const currentPath = window.location.pathname;

  const isShopPage =
    currentPath === '/shop' ||
    currentPath.startsWith('/shop/');

  const isProductDetailsPage =
    currentPath.startsWith('/product/');

  return (
    <MainLayout>

      {isProductDetailsPage ? (
        <>
          <ProductDetails />
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