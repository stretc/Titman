import { CodesandboxLogo } from "@phosphor-icons/react";
import "./styles/TeamMembers.css";

export const TeamMembers = () => {
  return (
    <div>
      <div className="flex h-[900px] flex-col justify-center items-center bg-[#f5f5f5]">
        <div className="relative mt-[-250px] flex w-[71%] h-[720px] pt-[100px] flex-col justify-start items-center bg-[#fff] shadow-2xl">
          <div className="absolute inset-0 opacity-20 bg-[url('/gears.jpg')] bg-center bg-cover bg-no-repeat z-0 pointer-events-none"></div>

          <div className="relative flex w-full h-[620px] pt-0 flex-col items-center">
            <div className="team-container w-[83%] h-full">
              <div className="team-heading mb-[33px] items-center flex">
                <div className="w-[25px] h-[25px] mr-[16px]">
                  <CodesandboxLogo width={25} height={25} />
                </div>
                <div>
                  <div className="font-[Open Sans] text-[#4b4b4b] font-[700] text-[14px]">
                    MEET OUR TEAM
                  </div>
                </div>
              </div>

              <div className="team-heading w-[640px] mb-[100px]">
                <h1 className="bg-[36px] mt-0 text-[#02133c]">
                  Our Hands Built This.
                  <br />
                  Our Hearts Keep It Running.
                </h1>
              </div>

              <div className="flex flex-row justify-center items-center">
                <div className="">
                  <div className="tommy-member team-members-img min-w-[150px] min-h-[150px] w-[856px] h-[600px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
