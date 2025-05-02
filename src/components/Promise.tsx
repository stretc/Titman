import { CodesandboxLogo } from "@phosphor-icons/react";

export const Promise = () => {
  return (
    <section>
      {/* Change Bg Image */}
      <div className="bg-[url('https://uploads-ssl.webflow.com/6033b644793e4daa2b27e2e5/6033c26a9f83996416c79a47_BG%20Image%20(1).png')] bg-center bg-cover bg-no-repeat h-[600px] flex justify-center items-center bg-[#f5f5f5]">
        <div className="flex w-[80%] h-full flex-col justify-center">
          <div className="flex items-center mb-[30px]">
            <div className="w-[25px] h-[25px] mr-[16px]">
              <CodesandboxLogo height={25} width={25} fill="#fff" />
            </div>
            <div>
              <div className="font-[Open Sans] text-[#fff] font-[700] text-[14px]">
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
          <div className="flex justify-between">
            <div className="promise-item">
              <div className="bg-[url('/public/promise/quality.png')] mr-[23px] bg-center bg-contain bg-no-repeat  w-[43px] h-[43px] z-100"></div>
              <div className="flex w-[235px] flex-col justify-around">
                <div className="font-[Open Sans] text-center text-[#02133c] font-[700] text-[14px]">
                  Quality Service. Every time.
                </div>
                <div className="font-[Montserrat] text-[$4b4b4b] font-[500] text-[14px] text-center">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium corrupti quos dolores et quas.
                </div>
              </div>
            </div>

            <div className="promise-item">
              <div className="bg-[url('/public/promise/certified.png')] mr-[23px] bg-center bg-contain bg-no-repeat  w-[43px] h-[43px] z-100"></div>
              <div className="flex w-[235px] flex-col justify-around">
                <div className="font-[Open Sans] text-center text-[#02133c] font-[700] text-[14px]">
                  Certifed Professional Services
                </div>
                <div className="font-[Montserrat] text-[$4b4b4b] font-[500] text-[14px] text-center">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium corrupti quos dolores et quas.
                </div>
              </div>
            </div>

            <div className="promise-item">
              <div className="bg-[url('/public/promise/people.png')] mr-[23px] bg-center bg-contain bg-no-repeat  w-[43px] h-[43px] z-100"></div>
              <div className="flex w-[235px] flex-col justify-around">
                <div className="font-[Open Sans] text-center text-[#02133c] font-[700] text-[14px]">
                  Real People. Honest Work.
                </div>
                <div className="font-[Montserrat] text-[$4b4b4b] font-[500] text-[14px] text-center">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium corrupti quos dolores et quas.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
