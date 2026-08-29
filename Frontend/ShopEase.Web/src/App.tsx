import './App.css';
import MainLayout from './layouts/MainLayout';
import Hero from './components/Hero/Hero';
import CategoryEditorial from './components/CategoryEditorial/CategoryEditorial';
import FeaturedCollections from './components/FeaturedCollections/FeaturedCollections';

function App() {
  return (
    <MainLayout>
      <Hero />
      <CategoryEditorial />
      <FeaturedCollections />
    </MainLayout>
  );
}

export default App;