import './FeaturedMasterpieces.css';

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

        {/* Product Grid */}
        <div className="featured-masterpieces__grid">

          {/* Product 1 */}
          <article className="masterpiece-card">
            <div className="masterpiece-card__image">
              {/* Product image will be added during styling */}
            </div>

            <div className="masterpiece-card__details">
              <h3 className="masterpiece-card__name">
                The Crimson Zardozi Silk Saree
              </h3>

              <p className="masterpiece-card__price">
                ₹ 1,45,000
              </p>

              <div className="masterpiece-card__swatches">
                <span aria-label="Deep Maroon"></span>
                <span aria-label="Antique Gold"></span>
                <span aria-label="Emerald"></span>
              </div>
            </div>
          </article>

          {/* Product 2 */}
          <article className="masterpiece-card">
            <div className="masterpiece-card__image">
              {/* Product image will be added during styling */}
            </div>

            <div className="masterpiece-card__details">
              <h3 className="masterpiece-card__name">
                Lightweight Organza & Tissue Sarees
              </h3>

              <p className="masterpiece-card__price">
                ₹ 85,000
              </p>

              <div className="masterpiece-card__swatches">
                <span aria-label="Deep Maroon"></span>
                <span aria-label="Antique Gold"></span>
                <span aria-label="Emerald"></span>
              </div>
            </div>
          </article>

          {/* Product 3 */}
          <article className="masterpiece-card">
            <div className="masterpiece-card__image">
              {/* Product image will be added during styling */}
            </div>

            <div className="masterpiece-card__details">
              <h3 className="masterpiece-card__name">
                Royal Heritage Lehenga
              </h3>

              <p className="masterpiece-card__price">
                ₹ 1,65,000
              </p>

              <div className="masterpiece-card__swatches">
                <span aria-label="Deep Maroon"></span>
                <span aria-label="Antique Gold"></span>
                <span aria-label="Emerald"></span>
              </div>
            </div>
          </article>

        </div>

      </div>
    </section>
  );
}

export default FeaturedMasterpieces;