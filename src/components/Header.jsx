import React from "react";
import Logo from "../images/My logo.png";

export const Header = () => {
  return (
    <div>
      <header className="w-screen h-[5rem] flex justify-around items-center fixed top-0 z-3 bg-[#FBFAFB] bg-white shadow-sm">
        <div>
          <img className="animate-pulse" src={Logo} width={70} alt="My Logo" />
        </div>
        <nav className="w-screen-70vw">
          <ul className="flex text-[12px] space-x-9 text-[#03045E] font-bold tracking-wider">
            <li className="text-[#FF4000]">
              <a className="hover:border-b-2 border-[#FF4000] " href="#home">
                HOME
              </a>
            </li>
            <li>
              <a className="hover:border-b-2 border-[#FF4000] " href="#skills">
                SKILLS
              </a>
            </li>
            <li>
              <a className="hover:border-b-2 border-[#FF4000] " href="#about">
                ABOUT
              </a>
            </li>
            <li>
              <a
                className="hover:border-b-2 border-[#FF4000] "
                href="#technology"
              >
                TECHNOLOGY
              </a>
            </li>
            <li>
              <a className="hover:border-b-2 border-[#FF4000] " href="#project">
                PROJECTS
              </a>
            </li>
            <li>
              <a className="hover:border-b-2 border-[#FF4000] " href="#contact">
                CONTACT
              </a>
            </li>
            <button>
              <i class="bi bi-list text-[30px] xs:block md:hidden"></i>
            </button>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
