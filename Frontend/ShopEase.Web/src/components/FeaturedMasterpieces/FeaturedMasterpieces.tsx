import './FeaturedMasterpieces.css';
import heritageArtisan from '../../assets/heritage-artisan.jpg';

function FeaturedMasterpieces() {
  return (
    <section className="featured-masterpieces">
      <div className="featured-masterpieces__container">

        {/* Section Header */}
        <header className="featured-masterpieces__header">
          <p className="featured-masterpieces__eyebrow">
            Curated Showcase
          </p>

          <h2 className="featured-masterpieces__title">
            Featured Masterpieces
          </h2>

          <p className="featured-masterpieces__subtitle">
            Handcrafted by master artisans over hundreds of hours.
          </p>
        </header>

        {/* Featured Grid */}
        <div className="featured-masterpieces__grid">

          {/* Product 1 */}
          <article className="masterpiece-card masterpiece-card--product">
            <div className="masterpiece-card__image">
              {/* Product image will be added later */}
              <div className="masterpiece-card__placeholder" />

              {/* Product information overlay */}
              <div className="masterpiece-card__details">
                <h3 className="masterpiece-card__name">
                  The Crimson Zardozi Silk Saree
                </h3>

                <p className="masterpiece-card__price">
                  ₹ 1,45,000
                </p>

                <div className="masterpiece-card__swatches">
                  <span
                    aria-label="Deep Maroon"
                    title="Deep Maroon"
                  />
                  <span
                    aria-label="Antique Gold"
                    title="Antique Gold"
                  />
                  <span
                    aria-label="Emerald"
                    title="Emerald"
                  />
                </div>
              </div>
            </div>
          </article>

          {/* Heritage Visual */}
          <article className="masterpiece-card masterpiece-card--heritage">
            <div className="masterpiece-card__image masterpiece-card__image--heritage">
              <img
                src={heritageArtisan}
                alt="Artisan working on a traditional textile loom"
              />
            </div>
          </article>

          {/* Product 2 */}
          <article className="masterpiece-card masterpiece-card--product">
            <div className="masterpiece-card__image">
              {/* Product image will be added later */}
              <div className="masterpiece-card__placeholder" />

              {/* Product information overlay */}
              <div className="masterpiece-card__details">
                <h3 className="masterpiece-card__name">
                  Royal Heritage Lehenga
                </h3>

                <p className="masterpiece-card__price">
                  ₹ 1,65,000
                </p>

                <div className="masterpiece-card__swatches">
                  <span
                    aria-label="Deep Maroon"
                    title="Deep Maroon"
                  />
                  <span
                    aria-label="Antique Gold"
                    title="Antique Gold"
                  />
                  <span
                    aria-label="Emerald"
                    title="Emerald"
                  />
                </div>
              </div>
            </div>
          </article>

        </div>

        {/* Heritage Story */}
        <div className="featured-masterpieces__heritage">
          <h2 className="featured-masterpieces__heritage-title">
            Preserving Centuries of Craft
          </h2>

          <p className="featured-masterpieces__heritage-description">
            Every thread tells a story of heritage. Our sarees and lehengas
            are not merely garments, but heirloom pieces crafted by
            generational artisans keeping ancient Indian textile traditions
            alive.
          </p>

          <a
            href="/heritage"
            className="featured-masterpieces__heritage-link"
          >
            Read Our Story
          </a>
        </div>

      </div>
    </section>
  );
}

export default FeaturedMasterpieces;