import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">SHOPEASE</p>

        <h1 className="hero__title">
          The Royal Tapestry
        </h1>

        <p className="hero__description">
          A luxury e-commerce experience inspired by India's timeless
          craftsmanship and heritage.
        </p>

        <button className="hero__button">
          Explore the Collection
        </button>
      </div>
    </section>
  );
}

export default Hero;