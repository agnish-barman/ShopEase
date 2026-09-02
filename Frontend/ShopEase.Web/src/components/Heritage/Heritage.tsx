import heritageArtisan from '../../assets/heritage-artisan.jpg';
import './Heritage.css';
import { heritageData } from './heritageData';

function Heritage() {
  return (
    <section className="heritage">
      <div className="heritage__container">

        {/* Documentary Image */}
        <div className="heritage__image">
          <img
            src={heritageArtisan}
            alt="Artisan working on a traditional textile loom"
          />
        </div>

        {/* Story Content */}
        <div className="heritage__content">

          <p className="heritage__eyebrow">
            {heritageData.eyebrow}
          </p>

          <h2 className="heritage__title">
            {heritageData.title}
          </h2>

          <p className="heritage__description">
            {heritageData.description}
          </p>

          <a
            href={heritageData.ctaLink}
            className="heritage__link"
          >
            {heritageData.ctaLabel}
          </a>

        </div>
      </div>
    </section>
  );
}

export default Heritage;