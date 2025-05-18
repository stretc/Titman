import { CodesandboxLogo } from "@phosphor-icons/react";
import "./styles/Services.css";

export const Services = () => {
  return (
    <div>
      <div className="relative flex h-[1200px] pt-[110px] pr-[50px] pl-[50px] flex-col justify-start items-center bg-[#e9e9e9] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/public/gears.jpg')] bg-cover bg-center opacity-40 z-0"></div>
        <div className="relative z-10 w-auto h-full">
          {/* Services Container */}

          <div className="flex mb-[33px] items-center">
            <div>
              <div className="w-[25px] h-[25px] mr-[16px]">
                <CodesandboxLogo height={25} width={25} />
              </div>
            </div>
            <div className="font-[Open Sans] text-[14px] font-[700] text-[4b4b4b]">
              OUR SERVICES
            </div>
          </div>

          <div className="mb-[50px]">
            <h1 className="text-[#02133c]">What We Do Best</h1>
          </div>

          {/* Services Cards */}
          <div className="service-cards grid">
            <div className="oil-change-div grid-item">
              <div className="grid-item-container">
                <div className="oil-change-image grid-item-image"></div>
                <div className="mb-[20px]">
                  <div className="grid-item-title">Oil Change</div>
                </div>
                <div className="grid-item-description">
                  Fast, professional oil change with premium oil included.
                </div>
              </div>
            </div>

            <div className="inpection-div grid-item">
              <div className="grid-item-container">
                <div className="inpection-image grid-item-image"></div>
                <div className="mb-[20px]">
                  <div className="grid-item-title">Multi-Point Inspections</div>
                </div>
                <div className="grid-item-description">
                  Comprehensive inspections to ensure vehicle safety.
                </div>
              </div>
            </div>

            <div className="batteries-div grid-item">
              <div className="grid-item-container">
                <div className="batteries-image grid-item-image"></div>
                <div className="mb-[20px]">
                  <div className="grid-item-title">Batteries</div>
                </div>
                <div className="grid-item-description">
                  Battery testing and replacement to keep you powered.
                </div>
              </div>
            </div>

            <div className="tires-div grid-item">
              <div className="grid-item-container">
                <div className="tires-image grid-item-image"></div>
                <div className="mb-[20px]">
                  <div className="grid-item-title">Tires</div>
                </div>
                <div className="grid-item-description">
                  Tire inspection, rotation, and replacement for safe driving.
                </div>
              </div>
            </div>

            <div className="brakes-div grid-item">
              <div className="grid-item-container">
                <div className="brakes-image grid-item-image"></div>
                <div className="mb-[20px]">
                  <div className="grid-item-title">Braking System</div>
                </div>
                <div className="grid-item-description">
                  Brake inspection and service for reliable stopping power.
                </div>
              </div>
            </div>

            <div className="auto-repair-div grid-item">
              <div className="grid-item-container">
                <div className="auto-repair-image grid-item-image"></div>
                <div className="mb-[20px]">
                  <div className="grid-item-title">Light Mechanics</div>
                </div>
                <div className="grid-item-description">
                  Minor mechanical repairs to maintain vehicle performance.
                </div>
              </div>
            </div>
          </div>

          {/* Learn More */}
          {/* 
          <div className="flex w-auto mt-[66px] justify-center items-center">
            <div className="relative bg-[#c40b0b]">
              <div className="absolute left-auto top-0 right-0 bottom-auto z-1 w-[43px] h-[48px] bg-[url('/public/arrow-bg.png')] bg-[90% 90%]"></div>
              <a
                href="#"
                className="bg-[hsla(a, 0%, 100%, 0)] font-[Montserrat] text-[#fff] font-[700] spacing-[1px] text-[14px] relative z-2 flex w-[145px] h-[48px] justify-center items-center pt-0 pb-0"
              >
                LEARN MORE
              </a>
            </div>
          </div>
          */}
        </div>
      </div>
    </div>
  );
};
