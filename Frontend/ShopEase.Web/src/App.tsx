import './App.css';
import MainLayout from './layouts/MainLayout';
import Hero from './components/Hero/Hero';
import CategoryEditorial from './components/CategoryEditorial/CategoryEditorial';
import FeaturedMasterpieces from './components/FeaturedMasterpieces/FeaturedMasterpieces';
import VirtualConcierge from './components/VirtualConcierge/VirtualConcierge';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <MainLayout>
      <Hero />
      <CategoryEditorial />
      <FeaturedMasterpieces />
      <VirtualConcierge />
      <Footer />
    </MainLayout>
  );
}

export default App;