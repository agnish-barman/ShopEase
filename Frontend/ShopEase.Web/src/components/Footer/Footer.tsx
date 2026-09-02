import './Footer.css';
import { footerData } from './footerData';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">

        {/* Brand & Socials */}
        <div className="footer__column footer__brand">
          <div className="footer__logo">
            {footerData.brand.name}
          </div>

          <p className="footer__copyright">
            {footerData.brand.copyright}
          </p>

          <div className="footer__social">
            <h3 className="footer__heading">
              {footerData.brand.socialHeading}
            </h3>

            <div className="footer__social-links">
              {footerData.brand.socialLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.label}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Client Care */}
        <div className="footer__column">
          <h3 className="footer__heading">
            {footerData.clientCare.heading}
          </h3>

          <nav className="footer__links">
            {footerData.clientCare.links.map((link) => (
              <a
                href={link.href}
                key={link.label}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* The House */}
        <div className="footer__column">
          <h3 className="footer__heading">
            {footerData.theHouse.heading}
          </h3>

          <nav className="footer__links">
            {footerData.theHouse.links.map((link) => (
              <a
                href={link.href}
                key={link.label}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Newsletter */}
        <div className="footer__column footer__newsletter">
          <h3 className="footer__heading">
            {footerData.newsletter.heading}
          </h3>

          <p className="footer__newsletter-text">
            {footerData.newsletter.description}
          </p>

          <form className="footer__newsletter-form">
            <label
              htmlFor="footer-email"
              className="footer__newsletter-label"
            >
              {footerData.newsletter.label}
            </label>

            <div className="footer__newsletter-input-group">
              <input
                id="footer-email"
                type="email"
                placeholder={footerData.newsletter.placeholder}
              />

              <button type="submit">
                {footerData.newsletter.buttonLabel}
              </button>
            </div>
          </form>
        </div>

      </div>

      {/* Bottom Legal Bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-container">

          <p>
            {footerData.legal.copyright}
          </p>

          <div className="footer__legal-links">
            {footerData.legal.links.map((link) => (
              <a
                href={link.href}
                key={link.label}
              >
                {link.label}
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;