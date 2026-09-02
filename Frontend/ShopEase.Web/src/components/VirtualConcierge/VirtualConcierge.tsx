import './VirtualConcierge.css';
import { virtualConciergeData } from './virtualConciergeData';

function VirtualConcierge() {
  return (
    <section className="virtual-concierge">
      <div className="virtual-concierge__container">

        <div
          className="virtual-concierge__icon"
          aria-hidden="true"
        >
          ◆
        </div>

        <div className="virtual-concierge__content">
          <p className="virtual-concierge__eyebrow">
            {virtualConciergeData.eyebrow}
          </p>

          <h2 className="virtual-concierge__title">
            {virtualConciergeData.title}
          </h2>

          <p className="virtual-concierge__description">
            {virtualConciergeData.description}
          </p>

          <a
            href={virtualConciergeData.ctaLink}
            className="virtual-concierge__cta"
          >
            {virtualConciergeData.ctaLabel}
          </a>
        </div>

      </div>
    </section>
  );
}

export default VirtualConcierge;