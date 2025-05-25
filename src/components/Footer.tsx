import {
  Clock,
  Envelope,
  House,
  MapPin,
  Phone,
  ShieldCheck,
  UsersFour,
  Wrench,
} from "@phosphor-icons/react";
import "./styles/Footer.css"; // ← Import the custom CSS

export const Footer = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (!href) return;
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-section logo-section">
          <a href="#top" onClick={handleScroll}>
            <div className="footer-logo"></div>
          </a>
          <p className="footer-text">Making you a better vehicle.</p>
        </div>

        <div className="footer-wrapper flex justify-between">
          {/* Navigation */}
          <div className="footer-section">
            <h3 className="footer-title">Navigation</h3>
            <hr className="footer-divider" />
            <div className="footer-links">
              <a href="#top" onClick={handleScroll}>
                <House height={25} width={25} className="footer-icon" />
                <span className="ml-[12px] underline-anim">Home</span>
              </a>
              <a href="#services" onClick={handleScroll}>
                <Wrench height={25} width={25} className="footer-icon" />
                <span className="ml-[12px] underline-anim">Services</span>
              </a>
              <a href="#promise" onClick={handleScroll}>
                <ShieldCheck height={25} width={25} className="footer-icon" />
                <span className="ml-[12px] underline-anim">Our Promise</span>
              </a>
              <a href="#team-members" onClick={handleScroll}>
                <UsersFour height={25} width={25} className="footer-icon" />
                <span className="ml-[12px] underline-anim">Team Members</span>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Contact Us</h3>
            <hr className="footer-divider" />
            <div className="footer-links">
              <a href="tel:+1 (620) 363-0432">
                <Phone height={25} width={25} className="footer-icon" />
                <span className="ml-[12px] underline-anim">
                  +1 (620) 363-0432
                </span>
              </a>
              <a
                href="https://maps.app.goo.gl/5D3yc9HptRT6by6p6"
                target="_blank"
              >
                <MapPin height={25} width={25} className="footer-icon" />
                <span className="ml-[12px] underline-anim">
                  408 N. Maple St,
                  <br />
                  Garnett Ks 66032
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
