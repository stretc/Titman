import { useState, useEffect } from "react";
import { ArrowUp } from "@phosphor-icons/react";

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.pageYOffset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`z-1000 fixed bg-[#fff] p-[10px] rounded-full bottom-[150px] shadow-xl cursor-pointer transition-transform duration-300
        ${
          visible
            ? "left-[150px] translate-x-0"
            : "left-[-100px] translate-x-[-100%]"
        }
        hover:scale-110 hover:duration-300 hover:ease-in-out`}
    >
      <a href="#top" onClick={scrollToTop} className="back-to-top">
        <ArrowUp size={32} weight="bold" fill="#000" />
      </a>
    </div>
  );
};
