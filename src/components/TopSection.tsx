import {
  ArrowRight,
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

    const id = href.substring(1);

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
            <div className="logo-container">
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
                href="https://maps.app.goo.gl/ofMsuyQhZaUzRQkR6"
                target="_blank"
              >
                <div className="flex flex-row items-center">
                  <div className="info-title">
                    <MapPin
                      size={30}
                      weight="bold"
                      className="info-icon max-[1500px]:h-[20px] max-[1500px]:w-[20px]"
                    />
                  </div>
                  <div className="info-text">
                    408 N. Maple
                    <br />
                    Garnett, KS 66032
                  </div>
                </div>
              </a>
            </div>
          </div>

          <hr className="divider" />

          {/* Navbar Bottom */}
          <div className="navbar-bottom max-[325px]:">
            <div className="tabs">
              <div className="underline-anim tab1">
                <a href="#services" className="tab" onClick={handleScroll}>
                  <Wrench size={30} className="icon" />
                  <p className="tab-text">Services</p>
                </a>
              </div>
              <div className="underline-anim tab2">
                <a href="#promise" className="tab" onClick={handleScroll}>
                  <ShieldCheck size={30} className="icon" />
                  <p className="tab-text">Our Promise</p>
                </a>
              </div>
              <div className="underline-anim tab3">
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

          <div className="">
            <div className="walk-ins mr-[35px] p-[25px] rounded-lg items-center flex flex-row">
              <Clock
                size={30}
                weight="bold"
                className="info-icon mr-[15px]"
                fill="#fff"
              />

              <div className="">
                <div className="flex flex-col items-center justify-center">
                  <span className="text-2xl text-white font-[500] font-[Montserrat]">
                    Walks-Ins Welcomed!
                  </span>

                  <div className="text-[20px] text-[#fff] flex justify-center flex-col text-center">
                    <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
                    <p>Sat: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-[25px] text-[#fff]">
              <div className="">Ready to Get Started?</div>
              <a href="tel: +1 (620) 363-0432" className="hero-link mt-[20px]">
                <div className="call-today-container bg-[#c40b0b] w-[194px] h-[40px] pl-[15px] flex relative justify-between items-center">
                  <div className="w-full flex items-center">
                    <Phone
                      height={"18px"}
                      width={"18px"}
                      weight="bold"
                      className="mr-[5px]"
                    />
                    <div className="text-[14px] font-[700] leading-[24px]">
                      CALL TODAY
                    </div>
                  </div>

                  <div className="appt-arr-div absolute right-0 top-0 left-auto bottom-auto z-0 flex w-[43px] h-[43px] justify-center items-center">
                    <div className="w-auto h-auto ml-[14px] items-center flex justify-center">
                      <ArrowRight
                        height={"18px"}
                        width={"18px"}
                        weight="bold"
                      />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
