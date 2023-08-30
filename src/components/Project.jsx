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
      <section className="w-screen flex justify-center flex-col items-center bg-slate-50 h-[110vh]">
        <h4 className="mt-[10rem] font-bold text-[#03045E]">PROJECTS</h4>
        <section className="w-[70vw] mt-[5rem] border">
          <div
            className="flex justify-around
          "
          >
            <figure>
              <img src={First} width={250} alt="First project" />
              <figcaption className="flex justify-between mt-4">
                <button className="bg-[#03045E] py-1 px-5 text-[11px] rounded-[3px] text-white">
                  Demo
                </button>
                <button className="bg-[#03045E] py-1 px-5 text-[11px] rounded-[3px] text-white">
                  Project Summary
                </button>
              </figcaption>
            </figure>
            <figure>
              <img src={Second} width={250} alt="First project" />
              <figcaption className="flex justify-between mt-4">
                <button className="bg-[#03045E] py-1 px-5 text-[11px] rounded-[3px] text-white">
                  Demo
                </button>
                <button className="bg-[#03045E] py-1 px-5 text-[11px] rounded-[3px] text-white">
                  Project Summary
                </button>
              </figcaption>
            </figure>
            <figure>
              <img src={Third} width={250} alt="First project" />
              <figcaption className="flex justify-between mt-4">
                <button className="bg-[#03045E] py-1 px-5 text-[11px] rounded-[3px] text-white">
                  Demo
                </button>
                <button className="bg-[#03045E] py-1 px-5 text-[11px] rounded-[3px] text-white">
                  Project Summary
                </button>
              </figcaption>
            </figure>
          </div>

          <div
            className="flex justify-around mt-[5rem]
          "
          >
            <figure>
              <img src={Fourth} width={250} alt="First project" />
              <figcaption className="flex justify-between mt-4">
                <button className="bg-[#03045E] py-1 px-5 text-[11px] rounded-[3px] text-white">
                  Demo
                </button>
                <button className="bg-[#03045E] py-1 px-5 text-[11px] rounded-[3px] text-white">
                  Project Summary
                </button>
              </figcaption>
            </figure>
            <figure>
              <img src={Five} width={250} alt="First project" />
              <figcaption className="flex justify-between mt-4">
                <button className="bg-[#03045E] py-1 px-5 text-[11px] rounded-[3px] text-white">
                  Demo
                </button>
                <button className="bg-[#03045E] py-1 px-5 text-[11px] rounded-[3px] text-white">
                  Project Summary
                </button>
              </figcaption>
            </figure>
            <figure>
              <img src={Six} width={250} alt="First project" />
              <figcaption className="flex justify-between mt-4">
                <button className="bg-[#03045E] py-1 px-5 text-[11px] rounded-[3px] text-white">
                  Demo
                </button>
                <button className="bg-[#03045E] py-1 px-5 text-[11px] rounded-[3px] text-white">
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
