import React from "react";

const Skills = () => {
  return (
    <div id="skills">
      <section className="flex justify-center  flex-col w-[100vw]  bg-blue-50 h-[70vh]">
        <div>
          <h4 className="text-center font-bold text-[#03045E] tracking-widest">
            SKILLS
          </h4>
        </div>
        <section className="flex ml-[10rem] justify-around items-center w-[80vw] h-[30vh] mt-[10vh]">
          <div className="w-[13vw] h-[10vw] bg-white flex items-center justify-center  ">
            <p className="text-[#03045E] font-[14px] font-bold">
              FRONT-END WEB <br />
              DEVELOPMENT
            </p>
          </div>
          <div className="w-[13vw] h-[10vw] bg-white flex items-center justify-center  ">
            <p className="text-[#03045E] font-[14px] font-bold">
              UI/UX <br />
              DESIGN
            </p>
          </div>
          <div className="w-[13vw] h-[10vw] bg-white flex items-center justify-center  ">
            <p className="text-[#03045E] font-[14px] font-bold">
              GRAPHIC <br /> DESIGN
            </p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Skills;
