import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import ProfilePic from "../images/profile.png";
import Spin from "../images/Exclude.png";
import Spin2 from "../images/Exclude (1).png";
import Spin3 from "../images/Exclude (2).png";
import "../styles/Profile.css";

const Profile = () => {
  const [typeEffect] = useTypewriter({
    words: ["Front-End React Web", "Developer"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <div id="profile">
      <section className="flex items-center md:items-center justify-around -z-10 mt-40 w-screen h-30vh">
        <div className="absolute left-0">
          <img className="exclude" src={Spin} alt="Exclude" width={15} />
        </div>

        <div className="absolute left-1">
          <img className="exclude1" src={Spin2} alt="Exclude" width={15} />
        </div>
        <div className="absolute left-3">
          <img className="exclude2" src={Spin3} alt="Exclude" width={15} />
        </div>

        <section>
          <section>
            <div className="h-[4vh] md:h-[6vh] lg:h-[6vh]">
              <h5 className="font-bold text-[#03045E] text-[10px] md:text-[14px]">
                <br />
                <span className="text-[#FF4000]">{typeEffect}</span>
              </h5>
            </div>

            <p className="text-[10px] md:text-[14px] text-[#03045E] mt-1">
              Hi, i'm Chima Arubuike Ndukwe. A junior Front-end React <br />
              Developer based in Nigeria
            </p>
            <div className="flex justify-between items-center w-64 sm:w-[50vw] md:w-[33vw] md:space-x-7  lg:w-[30vw] lg:space-x-5 mt-5 ">
              <button className=" bg-[#03045E] w-[23vw] h-[3vh] sm:w-[23vw] sm:h-[4vh] lg:w-[12vw] sm:text-[14px]   text-white text-[10px] rounded-[3px] hover:bg-[#3b3b7c] transition duration-300 ease-in-out">
                Download my cv
              </button>
              <div className="space-x-3 md:w-[30vw]">
                <a
                  className="cursor pointer"
                  href="https://github.com/Ndukwechima/"
                >
                  <i class="bi   bi-github"></i>
                </a>

                <a
                  className="cursor pointer"
                  href="https://www.linkedin.com/in/ndukwe-chima-349198196/"
                >
                  <i class="bi  bi-linkedin"></i>
                </a>

                <a
                  className="cursor pointer"
                  href="https://twitter.com/PlutonetDesignz"
                >
                  <i class="bi  bi-twitter"></i>
                </a>

                <a
                  className="cursor pointer"
                  href="https://mail.google.com/mail/u/0/#sent?compose=new"
                >
                  <i class="bi  bi-envelope-fill"></i>
                </a>
              </div>
            </div>
          </section>
        </section>

        <section>
          <img
            className=" hidden md:flex md:w-[300px] transition-transform transform scale-100 hover:scale-105  cursor-pointer"
            src={ProfilePic}
            alt="Profile picture"
            width={200}
          />
        </section>
      </section>
    </div>
  );
};

export default Profile;
