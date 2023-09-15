import React from "react";
import First from "../images/E-commerce.jpg";
import Second from "../images/E-site.png";
import Third from "../images/Project 2.jpg";
import Fourth from "../images/ecommerce-websites.jpg";
import Five from "../images/project 1.png";
import Six from "../images/project 3.png";

const Project = () => {
  return (
    <div id="project">
      <section className="w-[100vw] flex justify-center flex-col items-center bg-slate-50 min-h-[100vh]">
        <h4 className=" font-bold text-[#03045E] mt-9">PROJECTS</h4>
        <section className="w-[80vw] mt-[2rem]">
          <div className="justify-around space-y-10 lg:flex lg:space-x-9">
            <figure className="lg:w-[23.5vw] lg:mt-9">
              <img
                src={First}
                min-width={250}
                className="lg:h-[31vh]"
                alt="First project"
              />
              <figcaption className="flex justify-between mt-4">
                <button className="bg-[#03045E] py-1 px-5 text-[11px] rounded-[3px] text-white hover:bg-[#24255c] opacity-2 transition duration-300 ease-in-out">
                  Demo
                </button>
                <button className="bg-[#03045E] py-1 px-5 text-[11px] rounded-[3px] text-white hover:bg-[#24255c] opacity-2 transition duration-300 ease-in-out">
                  Project Summary
                </button>
              </figcaption>
            </figure>
            <figure className="lg:w-[25vw]">
              <img src={Second} min-width={250} alt="First project" />
              <figcaption className="flex justify-between mt-4">
                <button className="bg-[#03045E] py-1 px-5 text-[11px] rounded-[3px] text-white hover:bg-[#24255c] opacity-2 transition duration-300 ease-in-out">
                  Demo
                </button>
                <button className="bg-[#03045E] py-1 px-5 text-[11px] rounded-[3px] text-white hover:bg-[#24255c] opacity-2 transition duration-300 ease-in-out">
                  Project Summary
                </button>
              </figcaption>
            </figure>
            <figure className="lg:w-[25vw]">
              <img src={Third} min-width={250} alt="First project" />
              <figcaption className="flex justify-between mt-5">
                <button className="bg-[#03045E] py-1 px-5 text-[11px] rounded-[3px] text-white hover:bg-[#24255c] opacity-2 transition duration-300 ease-in-out">
                  Demo
                </button>
                <button className="bg-[#03045E] py-1 px-5 text-[11px] rounded-[3px] text-white hover:bg-[#24255c] opacity-2 transition duration-300 ease-in-out">
                  Project Summary
                </button>
              </figcaption>
            </figure>
          </div>

          <div className="justify-around mt-[3rem] lg:flex  space-y-10 lg:space-x-9">
            <figure className="lg:w-[25vw] lg:mt-11">
              <img src={Fourth} min-width={250} alt="First project" />
              <figcaption className="flex justify-between mt-4">
                <button className="bg-[#03045E] py-1 px-5 text-[11px] rounded-[3px] text-white hover:bg-[#24255c] opacity-2 transition duration-300 ease-in-out">
                  Demo
                </button>
                <button className="bg-[#03045E] py-1 px-5 text-[11px] rounded-[3px] text-white hover:bg-[#24255c] opacity-2 transition duration-300 ease-in-out">
                  Project Summary
                </button>
              </figcaption>
            </figure>
            <figure className="lg:w-[25vw]">
              <img src={Five} min-width={250} alt="First project" />
              <figcaption className="flex justify-between mt-4">
                <button className="bg-[#03045E] py-1 px-5 text-[11px] rounded-[3px] text-white hover:bg-[#24255c] opacity-2 transition duration-300 ease-in-out">
                  Demo
                </button>
                <button className="bg-[#03045E] py-1 px-5 text-[11px] rounded-[3px] text-white hover:bg-[#24255c] opacity-2 transition duration-300 ease-in-out">
                  Project Summary
                </button>
              </figcaption>
            </figure>
            <figure className="lg:w-[25vw]">
              <img src={Six} min-width={250} alt="First project" />
              <figcaption className="flex justify-between mt-4">
                <button className="bg-[#03045E] py-1 px-5 text-[11px] rounded-[3px] text-white hover:bg-[#24255c] opacity-2 transition duration-300 ease-in-out">
                  Demo
                </button>
                <button className="bg-[#03045E] py-1 px-5 text-[11px] rounded-[3px] text-white hover:bg-[#24255c] opacity-2 transition duration-300 ease-in-out">
                  Project Summary
                </button>
              </figcaption>
            </figure>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Project;
