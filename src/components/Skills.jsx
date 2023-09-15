import React from "react";
import "../styles/Skills.css";

const Skills = () => {
  return (
    <div className=" w-[100%]" id="skills">
      <section className="flex justify-around mt-[30px]  items-center flex-col w-[100vw] -z-3 bg-blue-50 min-h-[70vh] ">
        <div className=" mt-[4rem]">
          <h4 className="text-center font-bold text-[#03045E] text-[16px] tracking-widest">
            SKILLS
          </h4>
        </div>
        <section className="justify-around items-center h-[70vh] md:flex md:w-[90vw] md:space-x-6 lg:w-[60vw] lg:space-x-14 mt-[3vh]">
          <div className=" developement bg-[#03045E] w-[60vw] h-[20vh] md:mt-4 md:w-[40vw] sm:h-[20vh] md:h-[30vh]   hover:opacity-[0.9] transition-transform transform scale-100 hover:scale-105  cursor-pointer  rounded-md shadow-md flex items-center justify-center">
            <p className="text-[#fff] font-[9px] font-600">
              FRONT-END WEB <br />
              DEVELOPMENT
            </p>
          </div>
          <div className="w-[60vw]  h-[20vh]  hover:opacity-[0.9] bg-[#03045E] md:w-[40vw] sm:h-[20vh] md:h-[30vh]  mt-[17px] transition-transform transform scale-100 hover:scale-105 cursor-pointer rounded-md shadow-md flex items-center justify-center">
            <p className="text-[#fff] font-[9px] font-600">UI/UX DESIGN</p>
          </div>
          <div className="w-[60vw] h-[20vh] hover:opacity-[0.9] bg-[#03045E] md:w-[40vw] sm:h-[20vh] md:h-[30vh]  mt-[18px] transition-transform transform scale-100 hover:scale-105  cursor-pointer  rounded-md shadow-md flex items-center justify-center">
            <p className="text-[#fff] font-[9px] font-600">GRAPHIC DESIGN</p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Skills;
