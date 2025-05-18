import {
  Clock,
  Info,
  MapPin,
  Phone,
  ShieldCheck,
  UsersFour,
  Wrench,
} from "@phosphor-icons/react";
import "./styles/TopSection.css";

export const TopSection = () => {
  return (
    <div className="top-section">
      <div className="hero-bg">
        {/* Navbar Top */}
        <div className="navbar">
          <div className="navbar-top">
            <div className="logo-phone">
              <a href="#">
                <div className="logo" />
              </a>
              <div className="phone">
                <Phone size={30} className="icon" />
                <a className="underline-anim" href="tel: +1 (620) 363-0432">
                  +1 (620) 363-0432
                </a>
              </div>
            </div>

            <div className="info">
              <div className="hours">
                <div className="info-title">
                  <Clock size={22} className="icon" /> Hours:
                </div>
                <div className="info-text">
                  Mon - Fri: 8:00am - 5:00pm
                  <br />
                  Sat: 9:00am - 1:00pm
                </div>
              </div>

              <a
                className="address underline-anim"
                href="https://maps.app.goo.gl/5D3yc9HptRT6by6p6"
                target="_blank"
              >
                <div className="info-title">
                  <MapPin size={22} className="icon" /> Address:
                </div>
                <div className="info-text">
                  408 N. Maple
                  <br />
                  Garnett, KS 66032
                </div>
              </a>
            </div>
          </div>

          <hr className="divider" />

          {/* Navbar Bottom */}
          <div className="navbar-bottom">
            <div className="tabs">
              <a href="#services" className="tab">
                <Wrench size={25} className="icon" />
                <p className="underline-anim">Services</p>
              </a>
              <span className="divider-vertical" />
              <a href="#promise" className="tab">
                <ShieldCheck size={25} className="icon" />
                <p className="underline-anim">Our Promise</p>
              </a>
              <span className="divider-vertical" />
              <a href="#team-members" className="tab">
                <UsersFour size={25} className="icon" />
                <p className="underline-anim">Team Members</p>
              </a>
            </div>

            <div className="veterans">
              <div className="flag" />
              <p className="veterans-text">We Honor Our Veterans</p>
              <Info size={25} fill="#fff" className="icon pointer" />
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="hero-text-wrapper">
          <h1 className="hero-text">
            Driven by Trust.
            <br />
            Powered by Precision.
          </h1>
        </div>
      </div>
    </div>
  );
};
