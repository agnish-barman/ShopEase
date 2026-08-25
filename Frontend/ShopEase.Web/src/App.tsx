import './App.css';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <MainLayout>
      <section className="section section-padding">
        <div className="container">
          <p className="design-test__eyebrow">
            SHOPEASE
          </p>

          <h1 className="responsive-heading">
            The Royal Tapestry
          </h1>

          <p className="responsive-subheading">
            A luxury e-commerce experience inspired by India's timeless
            craftsmanship and heritage.
          </p>

          <button className="design-test__button">
            Explore the Collection
          </button>
        </div>
      </section>
    </MainLayout>
  );
}

export default App;