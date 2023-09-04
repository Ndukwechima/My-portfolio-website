import React from "react";
import "../styles/About.css";
import Man from "../images/aboutpics.jpg";

const About = () => {
  return (
    <div id="about">
      <section className="w-screen flex justify-center items-center min-h-[70vh] id=about bg-[#FBFAFB] mt-[8rem]">
        <div className="w-[90vw] flex justify-around items-center">
          <div>
            <img src={Man} alt="About pict" width={400} />
          </div>
          <div>
            <h4 className="font-bold text-[#03045E]">ABOUT ME</h4>
            <p className="w-[30vw] mt-7 text-[#03045E]">
              I’m a dedicated junior front-end React.js developer with a passion
              for creating dynamic and user-friendly web applications.
              Experienced in collaborating with cross-functional teams to
              deliver seamless user experiences. Skilled in HTML, CSS,
              JavaScript, and modern front-end libraries. Committed to staying
              current with industry trends and best practices. Eager to
              contribute creative solutions to enhance user engagement and
              optimize performance
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
