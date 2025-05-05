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

export const TopSection = () => {
  return (
    <section>
      {/* Top Section - Change this bg image */}
      <div className="flex h-[900px] pt-[26px] flex-col items-center justify-start bg-[url('/public/opening-bg.png')] bg-cover bg-no-repeat bg-center">
        {/* Navbar Top */}
        <div className="top-section-container z-100 sticky flex w-[80%] h-auto flex-col bg-[hsla(0, 0%, 86.7%, 0)]">
          <div className="flex h-auto justify-between items-center">
            <div className="relative float-left decoration-none font-[#333333] flex mr-[30px] items-center max-sm:mr-0">
              <a href="#">
                <div className="w-[150px] h-[150px] bg-[url('/logo2.png')] bg-center bg-contain bg-no-repeat"></div>
              </a>
            </div>

            <div className="flex justify-end items-center w-full h-full info-active">
              <div className="flex gap-[30px]">
                {/* HOURS BLOCK */}
                <div className="flex flex-col justify-center items-center h-[150px] text-center mr-[25px]">
                  <div className="flex flex-col items-center mb-[10px] pointer-events-none">
                    <div className="flex mb-[10px]">
                      <Clock
                        width="24px"
                        height="24px"
                        style={{ color: "#fff" }}
                        className="mr-[5px]"
                      />
                      <p className="text-[#fff] font-[700] text-[18px]">
                        Hours:
                      </p>
                    </div>
                    <p className="text-[#fff] text-[18px] font-[700]">
                      Mon - Fri: 8:00 am - 5:00 pm
                    </p>
                    <p className="text-[#fff] text-[18px] font-[700]">
                      Sat: 9:00 am - 1:00 pm
                    </p>
                  </div>
                </div>

                {/* PHONE BLOCK */}
                <div className="flex items-center justify-center h-[150px] text-center cursor-pointer mr-[25px]">
                  <a
                    className="underline-anim flex items-center text-center mb-[10px]"
                    href="#"
                  >
                    <div className="flex flex-col items-center">
                      <div className="flex items-center">
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
                      <p className="text-[#fff] text-[18px] font-[600] mt-[25px]">
                        +1 (620) 363-0432
                      </p>
                    </div>
                  </a>
                </div>

                {/* ADDRESS BLOCK */}
                <a className="flex items-center h-[150px] text-center cursor-pointer">
                  <div className="underline-anim items-center mb-[10px]">
                    <div className="flex">
                      <MapPin
                        width="24px"
                        height="24px"
                        weight="bold"
                        fill="#fff"
                        className="mr-[5px]"
                      />
                      <p className="text-[#fff] font-[700] text-[18px]">
                        Find Us At:
                      </p>
                    </div>
                    <p className="text-[#fff] text-[18px] font-[600] mt-[25px]">
                      408 N. Maple St.
                      <br />
                      Garnett, KS 66032
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <hr className="h-[1px] bg-[#fff] border-[#fff] w-full" />

          {/* NavBar Bottom */}
          <div className="bottom-tabs-active flex h-[10px] justify-between items-center bg-transparent mt-[50px]">
            <div className="ml-[20px] flex">
              <div className="p-[20px]">
                <a
                  href="#"
                  className="relative inline-block ml-auto mr-auto text-[#fff] font-[700] text-[18px]"
                >
                  <div className="flex items-center">
                    <Wrench
                      size={25}
                      style={{
                        fill: "#fff",
                        marginRight: "5px",
                        fontWeight: "bold",
                      }}
                    />
                    <p className="underline-anim">Services</p>
                  </div>
                </a>
              </div>

              <div className="h-[50px] w-[1px] bg-white self-center ml-[15px] mr-[15px]" />

              <div className="p-[20px]">
                <a
                  href="#"
                  className="relative inline-block ml-auto mr-auto text-[#fff] font-[700] text-[18px]"
                >
                  <div className="flex items-center">
                    <ShieldCheck
                      size={25}
                      style={{
                        fill: "#fff",
                        marginRight: "5px",
                        fontWeight: "bold",
                      }}
                    />
                    <p className="underline-anim">Our Promise</p>
                  </div>
                </a>
              </div>

              <div className="h-[50px] w-[1px] bg-white self-center ml-[15px] mr-[15px]" />

              <div className="p-[20px]">
                <a
                  href="#"
                  className="relative inline-block ml-auto mr-auto text-[#fff] font-[700] text-[18px]"
                >
                  <div className="flex items-center">
                    <UsersFour
                      size={25}
                      style={{
                        fill: "#fff",
                        marginRight: "5px",
                        fontWeight: "bold",
                      }}
                    />
                    <p className="underline-anim">Team Members</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Veterans */}
            <div className="mr-[20px] relative flex items-center">
              <div className="flex w-auto">
                <div className="flex justify-between">
                  <div className="relative decoration-none font-[#333333] flex mr-[20px] items-center max-sm:mr-0">
                    <div className="w-[35px] h-[35px] bg-[url('/flag.png')] bg-center bg-contain bg-no-repeat"></div>
                  </div>

                  <div className="text-[#fff] font-[700] text-[18px] flex items-center">
                    We Honor Our Veterans
                  </div>

                  <div className="flex items-center ml-[20px]">
                    <div className="cursor-pointer">
                      <Info
                        size={25}
                        style={{
                          fill: "#fff",
                          marginRight: "5px",
                          fontWeight: "bold",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="w-[71%] h-full">
          <div className="w-[630px] h-[112px] max-sm:w-auto">
            <h1 className="hero-text mt-[126px] text-[#fff] mb-0 text-[60px] leading-[60px] font-[800]">
              Driven by Trust. Powered by Precision.
            </h1>
          </div>
          <div className="hero-btns mt-[60px] flex items-center justify-start">
            <button className="appt-btn mr-[150px] shadow-2xl">
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
            <button className="shop-btn shadow-2xl">
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
