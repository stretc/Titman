import {
  Gear,
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
            </div>

            <div className="info">
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
          <div className="navbar-bottom max-[325px]:">
            <div className="tabs flex justify-between">
              <div className="underline-anim">
                <a href="#services" className="tab" onClick={handleScroll}>
                  <Wrench size={30} className="icon" />
                  <p className="tab-text">Services</p>
                </a>
              </div>
              <div className="divider-vertical w-[1px] h-[30px] bg-[#fff]" />
              <div className="underline-anim">
                <a href="#services" className="tab" onClick={handleScroll}>
                  <Gear size={30} className="icon" />
                  <p className="tab-text">Side By Sides</p>
                </a>
              </div>

              <div className="divider-vertical max-[490px]:hidden" />

              <div className="underline-anim">
                <a href="#promise" className="tab" onClick={handleScroll}>
                  <ShieldCheck size={30} className="icon" />
                  <p className="tab-text">Our Promise</p>
                </a>
              </div>

              <div className="divider-vertical max-[600px]:hidden" />

              <div className="underline-anim">
                <a href="#team-members" className="tab" onClick={handleScroll}>
                  <UsersFour size={30} className="icon" />
                  <p className="tab-text">Team Members</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="hero-text-wrapper flex flex-row items-center justify-between">
          <div className="">
            <h1 className="hero-text">
              Driven by Trust.
              <br />
              Powered by Precision.
            </h1>
            <div className="veterans">
              <div className="flag" />
              <p className="veterans-text tab-text-vet">
                We Honor Our Veterans
              </p>
              <Info
                fill="#fff"
                weight="bold"
                className="i-icon pointer hover:bg-[#535353] rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
