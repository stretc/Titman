import { Clock, Envelope, MapPin, Phone } from "@phosphor-icons/react";

export const Footer = () => {
  return (
    <footer className="bg-[#02133c] text-white pr-[30px] pl-[30px]">
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center">
          <a href="#">
            <div className="w-[150px] h-[150px] bg-[url('/logo2.png')] bg-center bg-contain bg-no-repeat"></div>
          </a>
          <p className="mt-2 text-sm text-gray-300">
            Making you a better vehicle.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-2 items-center">
          <h3 className="font-semibold text-lg">Navigation</h3>
          <a href="#" className="text-sm hover:underline">
            Home
          </a>
          <a href="#" className="text-sm hover:underline">
            Services
          </a>
          <a href="#" className="text-sm hover:underline">
            Shop
          </a>
          <a href="#" className="text-sm hover:underline">
            Our Story
          </a>
          <a href="#" className="text-sm hover:underline">
            Contact
          </a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-lg flex w-full items-center justify-center">
            Contact Us
          </h3>
          <div className="flex items-center">
            <Envelope size={18} style={{ fill: "#fff", marginRight: "5px" }} />
            <p className="text-sm">email@example.com</p>
          </div>
          <div className="flex items-center">
            <Phone size={18} style={{ fill: "#fff", marginRight: "5px" }} />
            <p className="text-sm">+1 (555) 123-4567</p>
          </div>
          <div className="flex items-center">
            <MapPin size={18} style={{ fill: "#fff", marginRight: "5px" }} />
            <p className="text-sm">408 N. Maple St. Garnett Ks 66032</p>
          </div>
          <div className="flex items-center">
            <Clock size={18} style={{ fill: "#fff", marginRight: "5px" }} />
            <div className="flex flex-col items-center">
              <p className="text-sm">Hours:</p>
              <p className="text-sm">Mon - Fri: 8am - 5pm</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
