import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        {/* BRAND */}

        <div className="footer-brand">
          <h2>
            TIM
            <br />
            HORTONS
          </h2>

          <p>
            Fresh coffee.
            <br />
            Fresh moments.
          </p>

          <span>
            Created by @Vanshika Soni ☕
          </span>
        </div>


        {/* MENU */}

        <div className="footer-column">
          <h3>MENU</h3>

          <a href="#menu">Coffee</a>
          <a href="#menu">Donuts</a>
          <a href="#menu">Breakfast</a>
          <a href="#menu">Cold Drinks</a>
          <a href="#menu">Timbits</a>
        </div>


        {/* COMPANY */}

        <div className="footer-column">
          <h3>COMPANY</h3>

          <a href="#about">Our Story</a>
          <a href="#careers">Careers</a>
          <a href="#locations">Locations</a>
          <a href="#franchise">Franchise</a>
          <a href="#catering">Catering</a>
        </div>


        {/* SUPPORT */}

        <div className="footer-column">
          <h3>SUPPORT</h3>

          <a href="#contact">Contact Us</a>
          <a href="#faq">FAQs</a>
          <a href="#help">Help Centre</a>
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </div>


        {/* SOCIAL */}

        <div className="footer-column">
          <h3>FOLLOW US</h3>

          <a href="#instagram">Instagram</a>
          <a href="#facebook">Facebook</a>
          <a href="#youtube">YouTube</a>
          <a href="#tiktok">TikTok</a>
        </div>

      </div>


      {/* BOTTOM */}

      <div className="footer-bottom">

        <p>
          © 2026 Vanshika Soni. All rights reserved.
        </p>

        <div>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;