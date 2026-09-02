import './CategoryEditorial.css';
import { categoryEditorialData } from './categoryEditorialData';

function CategoryEditorial() {
  const feature = categoryEditorialData.find(
    (item) => item.variant === 'feature'
  );

  const categories = categoryEditorialData.filter(
    (item) => item.variant === 'category'
  );

  return (
    <section className="category-editorial">
      <div className="category-editorial__container">

        {/* Large Feature */}
        {feature && (
          <article className="category-editorial__feature">
            <div className="category-editorial__image">
              {/* Editorial image will be connected later */}
            </div>

            <div className="category-editorial__content">
              <h2 className="category-editorial__title">
                {feature.title}
              </h2>

              <a
                href={feature.ctaLink}
                className="category-editorial__link"
              >
                {feature.ctaLabel}
              </a>
            </div>
          </article>
        )}

        {/* Stacked Categories */}
        <div className="category-editorial__stack">
          {categories.map((category) => (
            <article
              className="category-editorial__category"
              key={category.id}
            >
              <div className="category-editorial__image">
                {/* Editorial image will be connected later */}
              </div>

              <div className="category-editorial__content">
                <h2 className="category-editorial__title">
                  {category.title}
                </h2>

                <a
                  href={category.ctaLink}
                  className="category-editorial__link"
                >
                  {category.ctaLabel}
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CategoryEditorial;