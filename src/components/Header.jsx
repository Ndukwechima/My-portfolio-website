import React from "react";
import Logo from "../images/My logo.png";

export const Header = () => {
  return (
    <div>
      <header className="w-screen h-[5rem] flex justify-around items-center fixed top-0 z-3 bg-[#FBFAFB]">
        <div>
          <img src={Logo} width={70} alt="My Logo" />
        </div>
        <nav className="w-screen-70vw">
          <ul className="flex text-[12px] space-x-9 text-[#03045E] font-bold tracking-wider">
            <li className="text-[#FF4000]">
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#skills">SKILLS</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#technology">TECHNOLOGY</a>
            </li>
            <li>
              <a href="#project">PROJECTS</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
