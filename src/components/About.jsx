import React from "react";
import "../styles/About.css";
import Man from "../images/aboutpics.jpg";
import "../styles/About.css";
const About = () => {
  return (
    <div id="about">
      <section className="w-screen flex justify-center items-center min-h-[100vh] id=about bg-[#FBFAFB] mt-[3rem]">
        <div className="w-[90vw] h-[100vh] md:h-[100vh] lg:w-[80vw] justify-around items-center">
          <div>
            <h4 className="font-bold text-[#03045E] text-center mt-8 lg:mt-[4rem]">
              ABOUT ME
            </h4>
            <section className="md:flex md:space-x-6 lg:space-x-[60px] lg:ml-[10rem] lg:mt-[8rem]">
              <div className="mt-9 lg:w-[40vw]">
                <img
                  className="md:w-[50vw]"
                  src={Man}
                  alt="About pict"
                  width={400}
                />
              </div>
              <div className="  w-[80vw] min-h-[20vh]">
                <p className="w-[80vw] md:w-[50vw] lg:w-[30vw] mt-7 text-[#03045E] ">
                  I’m a dedicated junior front-end React.js developer with a
                  passion for creating dynamic and user-friendly web
                  applications. Experienced in collaborating with
                  cross-functional teams to deliver seamless user experiences.
                  Skilled in HTML, CSS, JavaScript, and modern front-end
                  libraries. Committed to staying current with industry trends
                  and best practices. Eager to contribute creative solutions to
                  enhance user engagement and optimize performance.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
