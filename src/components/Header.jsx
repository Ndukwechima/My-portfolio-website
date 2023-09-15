import React, { useState } from "react";
import "../styles/Header.css";
import Logo from "../images/My logo.png";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="w-[100%] h-[5rem] flex justify-around items-center fixed top-0 z-3 bg-white">
        <div className="flex items-center">
          <img className="animate-pulse" src={Logo} width={70} alt="My Logo" />
        </div>

        <nav className="hidden md:flex ">
          <ul className="flex text-[12px] space-x-9 text-[#03045E] font-bold tracking-wider">
            <li className="text-[#FF4000]">
              <a className="hover:border-b-2 border-[#FF4000]" href="#home">
                HOME
              </a>
            </li>
            <li>
              <a className="hover:border-b-2 border-[#FF4000]" href="#skills">
                SKILLS
              </a>
            </li>
            <li>
              <a className="hover:border-b-2 border-[#FF4000]" href="#about">
                ABOUT
              </a>
            </li>
            <li>
              <a
                className="hover:border-b-2 border-[#FF4000]"
                href="#technology"
              >
                TECHNOLOGY
              </a>
            </li>
            <li>
              <a className="hover:border-b-2 border-[#FF4000]" href="#project">
                PROJECTS
              </a>
            </li>
            <li>
              <a className="hover:border-b-2 border-[#FF4000]" href="#contact">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>

        <div className="md:hidden lg:hidden flex items-center space-x-4">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <i className="bi bi-x text-[30px] text-[#FF4000]" />
            ) : (
              <i className="bi bi-list text-[30px] text-[#FF4000]" />
            )}
          </button>
        </div>
      </header>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="md:hidden lg:hidden p-[40px] h-[50vh] max-w-[50vw]flex-col justify-around
         bg-[#03045e] text-white absolute top-[5rem] text-[12px] right-4 rounded-sm"
        >
          <ul className="list-none space-y-6">
            <li>
              <a
                className="text-[#FF4000] hover:border-b-2 border-[#FF4000]"
                href="#home"
                onClick={toggleMenu}
              >
                HOME
              </a>
            </li>
            <li>
              <a
                className="hover:border-b-2 border-[#FF4000]"
                href="#skills"
                onClick={toggleMenu}
              >
                SKILLS
              </a>
            </li>
            <li>
              <a
                className="hover:border-b-2 border-[#FF4000]"
                href="#about"
                onClick={toggleMenu}
              >
                ABOUT ME
              </a>
            </li>
            <li>
              <a
                className="hover:border-b-2 border-[#FF4000]"
                href="#technology"
                onClick={toggleMenu}
              >
                TECHNOLOGY
              </a>
            </li>
            <li>
              <a
                className="hover:border-b-2 border-[#FF4000]"
                href="#project"
                onClick={toggleMenu}
              >
                PROJECTS
              </a>
            </li>
            <li>
              <a
                className="hover:border-b-2 border-[#FF4000]"
                href="#contact"
                onClick={toggleMenu}
              >
                CONTACT ME
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
