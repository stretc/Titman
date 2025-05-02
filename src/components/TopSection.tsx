import React from "react";
import {
  ArrowRight,
  Clock,
  MagnifyingGlass,
  MapPin,
  Phone,
} from "@phosphor-icons/react";

export const TopSection = () => {
  return (
    <section>
      {/* Top Section - Change this bg image */}
      <div className="flex h-[900px] pt-[26px] flex-col items-center justify-start bg-[url('https://uploads-ssl.webflow.com/6033b644793e4daa2b27e2e5/6033bc35e0be0e2ce00b4962_BG%20Image.png')] bg-cover bg-no-repeat bg-center">
        {/* Navbar Top */}
        <div className="z-100 sticky flex w-[80%] h-auto flex-col bg-[hsla(0, 0%, 86.7%, 0)]">
          <div className="flex h-auto justify-between items-center">
            <div className="relative float-left decoration-none font-[#333333] flex mr-[30px] items-center">
              <a href="#">
                <img
                  src="/public/logo2.png"
                  alt="Titman Tire & Lube"
                  height="50px"
                  width="150px"
                />
              </a>
            </div>

            <div className="flex">
              <div className="w-auto flex h-auto">
                {/* Hours */}
                <div className="flex flex-col justify-center mr-[30px] items-center">
                  <div className="flex items-center mb-[20px]">
                    <Clock
                      width="24px"
                      height="24px"
                      style={{ color: "#fff" }}
                      className="mr-[5px]"
                      weight="bold"
                    />
                    <p className="hours-text text-[#fff] font-[700] text-[18px]">
                      Hours:
                    </p>
                  </div>
                  <div className="flex h-auto flex-col">
                    <div className="hours-text text-[#fff] text-[16px] font-[600]">
                      Mon - Sat: 7:00 am - 6:00 pm
                    </div>
                  </div>
                </div>
                {/* Phone Number */}
                <div className="flex flex-col mr-[30px] items-center">
                  <div className="flex items-center mb-[20px]">
                    <Phone
                      width="24px"
                      height="24px"
                      weight="bold"
                      fill="#fff"
                      className="mr-[5px]"
                    />
                    <p className="text-[#fff] font-[700] text-[18px]">
                      Call Us:
                    </p>
                  </div>
                  <p className="text-[#fff] text-[16px] font-[600]">
                    (555) 555-5555
                  </p>
                </div>
                {/* Address */}
                <a
                  href="#"
                  className="max-w-[100%] relative flex w-[211px] pl-[15px] justify-center flex-row items-center decoration-0 h-full"
                >
                  <MapPin
                    width="24px"
                    height="24px"
                    weight="bold"
                    fill="#fff"
                    className="mr-[5px]"
                  />
                  <p className="text-[#fff] font-[700] text-[16px] flex">
                    408 N. Maple St. <br />
                    Garnett, KS 66032
                  </p>
                </a>
              </div>
            </div>
          </div>

          <hr className="h-[1px] bg-[#fff] border-[#fff]" />

          {/* NavBar Bottom */}
          <div className="flex h-[10px] justify-between items-center bg-transparent mt-[50px]">
            <div className="ml-[20px] flex">
              <div className="p-[20px]">
                <a
                  href="#"
                  className="relative inline-block ml-auto mr-auto text-[#fff] font-[700] text-[18px]"
                >
                  Services
                </a>
              </div>
              <div className="p-[20px]">
                <a
                  href="#"
                  className="relative inline-block ml-auto mr-auto text-[#fff] font-[700] text-[18px]"
                >
                  Shop
                </a>
              </div>
              <div className="p-[20px]">
                <a
                  href="#"
                  className="relative inline-block ml-auto mr-auto text-[#fff] font-[700] text-[18px]"
                >
                  Our Story
                </a>
              </div>
            </div>

            {/* Search */}
            <div className="mr-[20px] relative flex items-center">
              <div className="flex w-auto">
                <button className="w-[36px] h-[36px] cursor-pointer flex items-center justify-center">
                  <MagnifyingGlass
                    width="24px"
                    height="24px"
                    weight="bold"
                    fill="#fff"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="w-[71%] h-full">
          <div className="w-[630px] h-[112px]">
            <h1 className="hero-text mt-[126px] text-[#fff] mb-0 text-[60px] leading-[60px] font-[800]">
              Driven by Trust. Powered by Precision.
            </h1>
          </div>
          <div className="hero-btns mt-[60px] flex items-center justify-start">
            <button className="mr-[150px] shadow-2xl">
              <p>Make an Appointment</p>
              <div className="appt-arrow">
                <ArrowRight
                  width="16px"
                  height="16px"
                  weight="bold"
                  fill="#fff"
                />
              </div>
            </button>
            <button className=" shadow-2xl">
              <p>Shop</p>
              <div className="appt-arrow">
                <ArrowRight
                  width="16px"
                  height="16px"
                  weight="bold"
                  fill="#fff"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
