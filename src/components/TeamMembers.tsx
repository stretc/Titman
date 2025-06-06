import { CodesandboxLogo } from "@phosphor-icons/react";
import "./styles/TeamMembers.css";

export const TeamMembers = () => {
  return (
    <div>
      <div className="team-members-wrapper flex h-[1000px] flex-col justify-center items-center bg-[#f5f5f5]">
        <div className="team-members-container relative mt-[-350px] flex w-[71%] h-[720px] pt-[75px] flex-col justify-start items-center bg-[#fff] shadow-2xl">
          <div className="absolute inset-0 opacity-20 bg-[url('/gears.jpg')] bg-center bg-cover bg-no-repeat z-0 pointer-events-none"></div>

          <div className="back-team relative flex w-full h-[620px] pt-0 flex-col items-center">
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

              <div className="team-heading w-full mb-[0px] flex justify-center text-center">
                <h1 className="text-[8vw] sm:text-[6vw] md:text-[4vw] lg:text-[36px] font-bold text-[#02133c] mt-0">
                  Our Hands Built This.
                  <br />
                  Our Hearts Keep It Running.
                </h1>
              </div>

              <div className="team-images-wrapper">
                <div
                  className="chris-member team-members-img group transition-transform duration-300 ease-out hover:-translate-y-4 relative overflow-hidden"
                  tabIndex={0}
                >
                  <div className="member-name bg-gradient-to-t from-black/85 to-transparent absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end space-y-0.5 p-4 pt-10">
                    <div className="team-member-info flex justify-between text-center">
                      <h4 className="line-clamp-2 font-[600]">Chris Titman</h4>
                    </div>
                    <div className="member-description max-h-0 opacity-0 transition-all duration-300 ease-out group-hover:max-h-40 group-hover:opacity-100 group-focus:max-h-40 group-focus:opacity-100 overflow-hidden text-[16px] font-[500] text-[#fff] mt-2">
                      Chris is the owner/operator of Titman Tire & Lube and
                      enjoys helping the local community. He’s practical,
                      hardworking, and always ready to jump in and help wherever
                      needed.
                    </div>
                  </div>
                </div>
                <div
                  className="tommy-member team-members-img group transition-transform duration-300 ease-out hover:-translate-y-4 relative overflow-hidden"
                  tabIndex={0}
                >
                  <div className="member-name bg-gradient-to-t from-black/85 to-transparent absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end space-y-0.5 p-4 pt-10">
                    <div className="team-member-info flex justify-between">
                      <h4 className="line-clamp-2 font-[600]">Tommy Harris</h4>
                    </div>
                    <div className="member-description max-h-0 opacity-0 transition-all duration-300 ease-out group-hover:max-h-40 group-hover:opacity-100 group-focus:max-h-40 group-focus:opacity-100 overflow-hidden text-[16px] font-[500] text-[#fff] mt-2">
                      Tommy’s the kind of guy who’s always up for a challenge.
                      Dependable and quick to learn, he brings energy and a
                      positive attitude to everything he does.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
