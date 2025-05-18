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
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const href = e.currentTarget.getAttribute("href");
    if (!href) return;

    // Get the id from the href
    const id = href.substring(1);

    // Find the element by id
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

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
              <a className="phone underline-anim" href="tel: +1 (620) 363-0432">
                <Phone
                  height={25}
                  width={25}
                  weight="bold"
                  className="phone-icon max-[1500px]:h-[20px] max-[1500px]:w-[20px]"
                />
                <div className="underline-anim phone-text">
                  +1 (620) 363-0432
                </div>
              </a>
            </div>

            <div className="info">
              <div className="hours">
                <div className="info-title">
                  <Clock size={30} weight="bold" className="info-icon" />
                  <p className="info-title-text">Hours:</p>
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
                  <MapPin size={30} weight="bold" className="info-icon" />
                  <p className="info-title-text">Address:</p>
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
              <a href="#services" className="tab" onClick={handleScroll}>
                <Wrench size={30} className="icon" />
                <p className="underline-anim tab-text">Services</p>
              </a>
              <span className="divider-vertical" />
              <a href="#promise" className="tab" onClick={handleScroll}>
                <ShieldCheck size={30} className="icon" />
                <p className="underline-anim tab-text">Our Promise</p>
              </a>
              <span className="divider-vertical" />
              <a href="#team-members" className="tab" onClick={handleScroll}>
                <UsersFour size={30} className="icon" />
                <p className="underline-anim tab-text">Team Members</p>
              </a>
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
          <div className="veterans">
            <div className="flag" />
            <p className="veterans-text tab-text-vet">We Honor Our Veterans</p>
            <Info fill="#fff" weight="bold" className="i-icon pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};
