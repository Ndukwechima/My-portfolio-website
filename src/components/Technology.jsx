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
      <section className="w-screen flex justify-center  flex-col items-center bg-white h-[70vh]">
        <h4 className="text-center font-bold mt-10 text-[#03045E]">
          TECHNOLOGY
        </h4>
        <section className="w-[70vw] flex justify-center items-center mt-[7rem]">
          <main className="w-[90vw]">
            <div
              className="flex justify-around
          "
            >
              <img src={Html} alt="Html logo" width={100} height={50} />
              <img src={Css} alt="Css logo" width={100} />
              <img src={Javascript} alt="Javascript logo" width={100} />
              <img src={Reac} alt="React logo" width={100} />
              <img src={Next} alt="Next logo" width={100} />
              <img src={Graph} alt="Graphql logo" width={100} />
            </div>
            <div className="flex justify-around mt-[6rem]">
              <img src={Tail} alt="Tailwind logo" width={100} />
              <img src={Boots} alt="Bootstrap logo" width={100} />
              <img src={Figma} alt="Figma logo" width={100} />
              <img src={Xd} alt="Xd logo" width={100} />
              <img src={Photoshop} alt="Photoshop logo" width={100} />
              <img src={Illustrator} alt="Illustrator logo" width={100} />
            </div>
          </main>
        </section>
      </section>
    </div>
  );
};

export default Technology;
