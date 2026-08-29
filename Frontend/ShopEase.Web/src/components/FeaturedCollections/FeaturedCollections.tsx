import './FeaturedCollections.css';

function FeaturedCollections() {
  return (
    <section className="featured-collections">
      <div className="featured-collections__container">

        <div className="featured-collections__heading">
          <p className="featured-collections__eyebrow">
            Collections
          </p>

          <h2 className="featured-collections__title">
            Curated For Every Occasion
          </h2>
        </div>

        <div className="featured-collections__grid">

          <article className="collection-card">
            <div className="collection-card__image"></div>

            <div className="collection-card__content">
              <h3>Luxury Fashion</h3>
              <p>
                Timeless pieces crafted with elegance.
              </p>
            </div>
          </article>

          <article className="collection-card">
            <div className="collection-card__image"></div>

            <div className="collection-card__content">
              <h3>Home Décor</h3>
              <p>
                Sophisticated accents for modern living.
              </p>
            </div>
          </article>

          <article className="collection-card">
            <div className="collection-card__image"></div>

            <div className="collection-card__content">
              <h3>Jewelry</h3>
              <p>
                Inspired by heritage and craftsmanship.
              </p>
            </div>
          </article>

        </div>

      </div>
    </section>
  );
}

export default FeaturedCollections;