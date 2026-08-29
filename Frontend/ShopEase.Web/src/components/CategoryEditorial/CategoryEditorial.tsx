import './CategoryEditorial.css';

function CategoryEditorial() {
  return (
    <section className="category-editorial">
      <div className="category-editorial__container">

        {/* Large Feature — Bridal Lehengas */}
        <article className="category-editorial__feature">
          <div className="category-editorial__image">
            {/* Editorial image will be added during styling */}
          </div>

          <div className="category-editorial__content">
            <h2 className="category-editorial__title">
              Bridal Lehengas
            </h2>

            <a
              href="/shop"
              className="category-editorial__link"
            >
              Discover
            </a>
          </div>
        </article>

        {/* Stacked Categories */}
        <div className="category-editorial__stack">

          {/* Sarees */}
          <article className="category-editorial__category">
            <div className="category-editorial__image">
              {/* Saree image will be added during styling */}
            </div>

            <div className="category-editorial__content">
              <h2 className="category-editorial__title">
                Handcrafted Banarasi & Kanjeevaram Sarees
              </h2>

              <a
                href="/shop"
                className="category-editorial__link"
              >
                Explore Sarees
              </a>
            </div>
          </article>

          {/* Drape */}
          <article className="category-editorial__category">
            <div className="category-editorial__image">
              {/* Drape image will be added during styling */}
            </div>

            <div className="category-editorial__content">
              <h2 className="category-editorial__title">
                Lightweight Organza & Organza Drape
              </h2>

              <a
                href="/shop"
                className="category-editorial__link"
              >
                Explore Drape
              </a>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}

export default CategoryEditorial;