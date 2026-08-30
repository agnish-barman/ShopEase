import './App.css';
import MainLayout from './layouts/MainLayout';
import Hero from './components/Hero/Hero';
import CategoryEditorial from './components/CategoryEditorial/CategoryEditorial';
//import FeaturedCollections from './components/FeaturedCollections/FeaturedCollections';
import FeaturedMasterpieces from './components/FeaturedMasterpieces/FeaturedMasterpieces';
import Heritage from './components/Heritage/Heritage';
import VirtualConcierge from './components/VirtualConcierge/VirtualConcierge';

function App() {
  return (
    <MainLayout>
      <Hero />
      <CategoryEditorial />
      <FeaturedMasterpieces />
      <Heritage />
      <VirtualConcierge />
    </MainLayout>
  );
}

export default App;