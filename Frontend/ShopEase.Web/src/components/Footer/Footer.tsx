import './Footer.css';

function Footer() {
  return (
    <footer className="footer">

      <div className="footer__container">

        {/* Brand & Socials */}
        <div className="footer__column footer__brand">
          <div className="footer__logo">
            ShopEase
          </div>

          <p className="footer__copyright">
            © 2026 ShopEase. All rights reserved.
          </p>

          <div className="footer__social">
            <h3 className="footer__heading">
              Follow Us
            </h3>

            <div className="footer__social-links">
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">TikTok</a>
              <a href="#">YouTube</a>
            </div>
          </div>
        </div>

        {/* Client Care */}
        <div className="footer__column">
          <h3 className="footer__heading">
            Client Care
          </h3>

          <nav className="footer__links">
            <a href="#">FAQ</a>
            <a href="#">Shipping & Returns</a>
            <a href="#">Track Order</a>
            <a href="#">Private Appointments</a>
          </nav>
        </div>

        {/* The House */}
        <div className="footer__column">
          <h3 className="footer__heading">
            The House
          </h3>

          <nav className="footer__links">
            <a href="#">Sustainability</a>
            <a href="#">Careers</a>
            <a href="#">Customer Reviews</a>
          </nav>
        </div>

        {/* Newsletter */}
        <div className="footer__column footer__newsletter">
          <h3 className="footer__heading">
            Join the Inner Circle
          </h3>

          <p className="footer__newsletter-text">
            Receive private collection drops and updates from ShopEase.
          </p>

          <form className="footer__newsletter-form">
            <label
              htmlFor="footer-email"
              className="footer__newsletter-label"
            >
              Email Address
            </label>

            <div className="footer__newsletter-input-group">
              <input
                id="footer-email"
                type="email"
                placeholder="Enter your email"
              />

              <button type="submit">
                Subscribe
              </button>
            </div>
          </form>
        </div>

      </div>

      {/* Bottom Legal Bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-container">

          <p>
            © 2026 ShopEase
          </p>

          <div className="footer__legal-links">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
          </div>

        </div>
      </div>

    </footer>
  );
}

export default Footer;