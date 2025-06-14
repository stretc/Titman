import { CodesandboxLogo } from "@phosphor-icons/react";
import "./styles/Promise.css";

export const Promise = () => {
  return (
    <div className="promise-container">
      {/* Change Bg Image */}
      <div className="promise-img bg-[#02133c] bg-center bg-cover bg-no-repeat h-[600px] flex justify-center items-center">
        <div className="flex w-[80%] h-full flex-col justify-center">
          <div className="flex items-center mb-[30px]">
            <div className="w-[25px] h-[25px] mr-[16px]">
              <CodesandboxLogo height={25} width={25} fill="#fff" />
            </div>
            <div>
              <div
                className="font-[Open Sans] text-[#fff] font-[700] text-[14px]"
                style={{ fontSize: "clamp(12px, 2vw, 16px)" }}
              >
                OUR PROMISE TO YOU
              </div>
            </div>
          </div>

          <div>
            <h1 className="promise-header text-[#fff]">
              Because Your Safety Is Our Priority
            </h1>
          </div>

          {/* Grid */}
          <div className="promise-grid flex justify-between">
            <div className="promise-item">
              <div className="bg-[url('/promise/quality.png')] mr-[23px] bg-center bg-contain bg-no-repeat  w-[43px] h-[43px] z-100"></div>
              <div className="flex w-[235px] flex-col justify-around">
                <div className="promise-item-header font-[Open Sans] text-center text-[#02133c] font-[700] text-[14px]">
                  Quality Service. Every time.
                </div>
                <div className="promise-item-text font-[Montserrat] text-[$4b4b4b] font-[500] text-[14px] text-center">
                  Expert care you can trust to keep your vehicle safe, reliable,
                  and running smoothly for miles to come.
                </div>
              </div>
            </div>

            <div className="promise-item">
              <div className="bg-[url('/promise/certified.png')] mr-[23px] bg-center bg-contain bg-no-repeat  w-[43px] h-[43px] z-100"></div>
              <div className="flex w-[235px] flex-col justify-around">
                <div className="promise-item-header font-[Open Sans] text-center text-[#02133c] font-[700] text-[14px]">
                  Certifed Professional Services
                </div>
                <div className="promise-item-text font-[Montserrat] text-[$4b4b4b] font-[500] text-[14px] text-center">
                  Our certified technicians use the latest tools and techniques
                  to deliver reliable, high-quality repairs every time.
                </div>
              </div>
            </div>

            <div className="promise-item">
              <div className="bg-[url('/promise/people.png')] mr-[23px] bg-center bg-contain bg-no-repeat  w-[43px] h-[43px] z-100"></div>
              <div className="flex w-[235px] flex-col justify-around">
                <div className="promise-item-header font-[Open Sans] text-center text-[#02133c] font-[700] text-[14px]">
                  Real People. Honest Work.
                </div>
                <div className="promise-item-text font-[Montserrat] text-[$4b4b4b] font-[500] text-[14px] text-center">
                  Friendly, experienced professionals committed to transparent
                  service and quality repairs you can always trust.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
