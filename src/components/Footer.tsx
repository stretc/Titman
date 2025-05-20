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

export const Footer = () => {
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
    <footer className="bg-[#02133c] text-white">
      <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center">
          <a href="#top" onClick={handleScroll}>
            <div className="w-[150px] h-[150px] bg-[url('/logo2.png')] bg-center bg-contain bg-no-repeat"></div>
          </a>
          <p className="mt-2 text-sm text-gray-300">
            Making you a better vehicle.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-5">
          <h3 className="font-semibold text-lg flex w-full items-center justify-center">
            Navigation
          </h3>
          <hr className="w-full h-[1px] bg-gray-300" />
          <div className="flex">
            <div className="flex flex-col space-y-5">
              <a
                className="flex items-center cursor-pointer footer-link"
                href="#top"
                onClick={handleScroll}
              >
                <House
                  size={20}
                  style={{ fill: "#fff", marginRight: "25px" }}
                />
                <span className="underline-anim text-m">Home</span>
              </a>
              <a
                className="flex items-center cursor-pointer footer-link"
                href="#services"
                onClick={handleScroll}
              >
                <Wrench
                  size={20}
                  style={{ fill: "#fff", marginRight: "25px" }}
                />
                <span className="underline-anim text-m">Services</span>
              </a>
              <a
                className="flex items-center cursor-pointer footer-link"
                href="#promise"
                onClick={handleScroll}
              >
                <ShieldCheck
                  size={20}
                  style={{ fill: "#fff", marginRight: "25px" }}
                />
                <span className="underline-anim text-m">Our Promise</span>
              </a>
              <a
                className="flex items-center cursor-pointer footer-link"
                href="#team-members"
                onClick={handleScroll}
              >
                <UsersFour
                  size={20}
                  style={{ fill: "#fff", marginRight: "25px" }}
                />
                <span className="underline-anim text-m">Team Members</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-5">
          <h3 className="font-semibold text-lg flex w-full items-center justify-center">
            Contact Us
          </h3>
          <hr className="w-full h-[1px] bg-gray-300" />
          <a className="flex items-center cursor-pointer footer-link">
            <Envelope size={20} style={{ fill: "#fff", marginRight: "25px" }} />
            <span className="underline-anim text-m">email@example.com</span>
          </a>
          <a
            className="flex items-center cursor-pointer footer-link"
            href="tel: +1 (620) 363-0432"
          >
            <Phone size={20} style={{ fill: "#fff", marginRight: "25px" }} />
            <span className="underline-anim text-m">+1 (620) 363-0432</span>
          </a>
          <a
            className="flex items-center cursor-pointer footer-link"
            href="https://maps.app.goo.gl/5D3yc9HptRT6by6p6"
          >
            <MapPin size={20} style={{ fill: "#fff", marginRight: "25px" }} />
            <span className="underline-anim text-m">
              408 N. Maple St,
              <br />
              Garnett Ks 66032
            </span>
          </a>
          <div className="flex items-center">
            <Clock size={20} style={{ fill: "#fff", marginRight: "25px" }} />
            <div className="flex flex-col items-center">
              <p className="text-m">Mon - Fri: 8 am - 5 pm</p>
              <p className="text-m">Sat: 9 am - 1 pm</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
