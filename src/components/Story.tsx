import { CodesandboxLogo } from "@phosphor-icons/react";

export const Story = () => {
  return (
    <section>
      <div className="flex h-[900px] flex-col justify-center items-center bg-[#f5f5f5]">
        <div className="relative mt-[-250px] flex w-[71%] h-[720px] pt-[100px] flex-col justify-start items-center bg-[#fff] shadow-2xl">
          <div className="bg-[url('/public/gears.jpg')] bg-center bg-cover bg-no-repeat opacity-20 absolute left-0 top-0 right-auto bottom-auto z-1 w-full h-full shadow-2xl pointer-events-none"></div>

          <div className="relative flex w-full h-[820px] pt-0 flex-col items-center">
            <div className="w-[83%] h-full">
              <div className="mb-[33px] items-center flex">
                <div className="w-[25px] h-[25px] mr-[16px]">
                  <CodesandboxLogo width={25} height={25} />
                </div>
                <div>
                  <div className="font-[Open Sans] text-[#4b4b4b] font-[700] text-[14px]">
                    OUR STORY
                  </div>
                </div>
              </div>

              <div className="W-[640px] mb-[36px]">
                <h1 className="bg-[36px] mt-0 text-[#02133c]">
                  Our Hands Built This.
                  <br />
                  Our Hearts Keep It Running.
                </h1>
              </div>

              <div className="mb-[40px]">
                <div className="font-[Montserrat] leading-[25px] text-[21px] tracking-[2px]">
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                  consequatur. Quis autem vel eum iure reprehenderit qui in ea
                  voluptate velit esse quam nihil molestiae consequatur, vel
                  illum qui dolorem eum fugiat quo voluptas nulla pariatur.
                </div>
              </div>

              <div className="flex w-auto h-auto justify-center">
                <div className="bg-[url('https://uploads-ssl.webflow.com/6033b644793e4daa2b27e2e5/6033bf6f8f1a9c5980412bcf_Image.png')] bg-center bg-cover bg-no-repeat w-[846px] h-[420px] mt-0 z-10 shadow-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
