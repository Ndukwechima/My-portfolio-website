import React from "react";
import Html from "../images/HTML.png";
import Css from "../images/CSS.png";
import Javascript from "../images/Javascript.png";
import Reac from "../images/React.png";
import Next from "../images/Next.jpeg";
import Graph from "../images/Graphql.png";
import Tail from "../images/Tailwind.png";
import Boots from "../images/bootstrap.jpg";
import Figma from "../images/Figma.png";
import Xd from "../images/XD.webp";
import Photoshop from "../images/Photoshop.jpg";
import Illustrator from "../images/Illustrator.jpg";

const Technology = () => {
  return (
    <div id="technology">
      <section className="w-screen flex justify-center  flex-col items-center bg-white min-h-[40vh]">
        <h4 className="text-center font-bold mt-10  text-[#03045E]">
          TECHNOLOGY
        </h4>
        <section className="w-[100vw] flex justify-center items-center mt-[2rem] lg:mt-[10rem]">
          <main className="w-[100vw] lg:w-[60vw] lg:h-[60vh] ">
            <div className="flex justify-around">
              <img
                className="w-[40px] h-[40px]  transition-transform transform scale-100 hover:scale-105 cursor-pointer  "
                src={Html}
                alt="Html logo"
              />
              <img
                className="w-[40px] transition-transform transform scale-100 hover:scale-105 cursor-pointer h-[40px]"
                src={Css}
                alt="Css logo"
              />
              <img
                className="w-[35px] transition-transform transform scale-100 hover:scale-105 cursor-pointer h-[35px]"
                src={Javascript}
                alt="Javascript logo"
              />
              <img
                className="w-[35px] transition-transform transform scale-100 hover:scale-105 cursor-pointer h-[35px]"
                src={Reac}
                alt="React logo"
              />
              <img
                className="w-[35px] transition-transform transform scale-100 hover:scale-105 cursor-pointer h-[35px]"
                src={Next}
                alt="Next logo"
              />
              <img
                className="w-[35px] transition-transform transform scale-100 hover:scale-105 cursor-pointer h-[35px]"
                src={Graph}
                alt="Graphql logo"
              />
            </div>
            <div className="flex justify-around mt-[3rem]">
              <img
                className="w-[40px] transition-transform transform scale-100 hover:scale-105 cursor-pointer h-[30px]"
                src={Tail}
                alt="Tailwind logo"
              />
              <img
                className="w-[40px] transition-transform transform scale-100 hover:scale-105 cursor-pointer h-[40px]"
                src={Boots}
                alt="Bootstrap logo"
              />
              <img
                className="w-[40px] transition-transform transform scale-100 hover:scale-105 cursor-pointer h-[40px]"
                src={Figma}
                alt="Figma logo"
              />
              <img
                className="w-[25px] transition-transform transform scale-100 hover:scale-105 cursor-pointer h-[28px]"
                src={Xd}
                alt="Xd logo"
              />
              <img
                className="w-[38px] transition-transform transform scale-100 hover:scale-105 cursor-pointer h-[38px]"
                src={Photoshop}
                alt="Photoshop logo"
              />
              <img
                className="w-[38px] transition-transform transform scale-100 hover:scale-105 cursor-pointer h-[38px]"
                src={Illustrator}
                alt="Illustrator logo"
              />
            </div>
          </main>
        </section>
      </section>
    </div>
  );
};

export default Technology;
