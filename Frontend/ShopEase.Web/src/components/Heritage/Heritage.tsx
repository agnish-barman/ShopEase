import heritageArtisan from '../../assets/heritage-artisan.jpg';
import './Heritage.css';

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
            The Heritage
          </p>

          <h2 className="heritage__title">
            Preserving Centuries of Craft
          </h2>

          <p className="heritage__description">
            Every thread tells a story of heritage. Our sarees and lehengas
            are not merely garments, but heirloom pieces crafted by
            generational artisans keeping ancient Indian textile traditions
            alive.
          </p>

          <a
            href="/heritage"
            className="heritage__link"
          >
            Read Our Story
          </a>

        </div>
      </div>
    </section>
  );
}

export default Heritage;