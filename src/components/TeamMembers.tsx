import { CodesandboxLogo } from "@phosphor-icons/react";
import "./styles/TeamMembers.css";

export const TeamMembers = () => {
  return (
    <div>
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
                    MEET OUR TEAM
                  </div>
                </div>
              </div>

              <div className="W-[640px] mb-[100px]">
                <h1 className="bg-[36px] mt-0 text-[#02133c]">
                  Our Hands Built This.
                  <br />
                  Our Hearts Keep It Running.
                </h1>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex w-auto h-auto justify-center">
                  <div className="team-members-img bg-[url('public/tommy.JPG')] bg-center bg-cover bg-no-repeat w-[846px] h-[420px] mt-0 z-10 shadow-2xl"></div>
                </div>
                <div className="flex w-auto h-auto justify-center">
                  <div className="team-members-img bg-[url('/public/tommy.JPG')] bg-no-repeat w-[846px] h-[420px] mt-0 z-10 shadow-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
