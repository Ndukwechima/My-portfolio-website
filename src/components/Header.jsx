import React, { useState } from "react";
import { Link } from "react-scroll";
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
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="hover:border-b-2 border-[#FF4000] cursor-pointer"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="hover:border-b-2 border-[#FF4000] cursor-pointer"
              >
                SKILLS
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="hover:border-b-2 border-[#FF4000] cursor-pointer"
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to="technology"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="hover:border-b-2 border-[#FF4000] cursor-pointer"
              >
                TECHNOLOGY
              </Link>
            </li>
            <li>
              <Link
                to="project"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="hover:border-b-2 border-[#FF4000] cursor-pointer"
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="hover:border-b-2 border-[#FF4000] cursor-pointer"
              >
                CONTACT
              </Link>
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
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="text-[#FF4000] hover:border-b-2 border-[#FF4000]"
                href="#home"
                onClick={toggleMenu}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="hover:border-b-2 border-[#FF4000]"
                href="#skills"
                onClick={toggleMenu}
              >
                SKILLS
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="hover:border-b-2 border-[#FF4000]"
                href="#about"
                onClick={toggleMenu}
              >
                ABOUT ME
              </Link>
            </li>
            <li>
              <Link
                to="technology"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="hover:border-b-2 border-[#FF4000]"
                href="#technology"
                onClick={toggleMenu}
              >
                TECHNOLOGY
              </Link>
            </li>
            <li>
              <Link
                to="project"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="hover:border-b-2 border-[#FF4000]"
                href="#project"
                onClick={toggleMenu}
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="hover:border-b-2 border-[#FF4000]"
                href="#contact"
                onClick={toggleMenu}
              >
                CONTACT ME
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
