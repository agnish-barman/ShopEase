import './VirtualConcierge.css';

function VirtualConcierge() {
  return (
    <section className="virtual-concierge">
      <div className="virtual-concierge__container">

        <div className="virtual-concierge__icon" aria-hidden="true">
          ◆
        </div>

        <div className="virtual-concierge__content">
          <p className="virtual-concierge__eyebrow">
            Private Service
          </p>

          <h2 className="virtual-concierge__title">
            Personalized Styling & Private Appointments
          </h2>

          <p className="virtual-concierge__description">
            Connect with our expert stylists from the comfort of your home
            for custom blouse fittings, color matching, and bespoke bridal
            consultations.
          </p>

          <a
            href="#"
            className="virtual-concierge__cta"
          >
            Book a Consultation
          </a>
        </div>

      </div>
    </section>
  );
}

export default VirtualConcierge;