import React from "react";
import ProfilePic from "../images/profile.png";

const Profile = () => {
  return (
    <div id="profile">
      <section className="flex items-center justify-around -z-10 mt-40 w-screen h-30vh">
        <section>
          <h5 className="font-bold text-[#03045E]">
            Front-End React Web <br />
            <span className="text-[#FF4000]">Developer</span>
          </h5>
          <p className="text-[12px] text-[#03045E] mt-1">
            Hi, i'm Chima Arubuike Ndukwe. A junior Front-end React <br />
            Developer based in Nigeria
          </p>
          <div className="flex justify-between items-center w-64 mt-5 ">
            <button className="bg-[#03045E] pt-2 px-5 pb-2 text-white font-500 text-[12px] font-600 rounded-[3px]">
              Download My CV
            </button>
            <div className="space-x-3">
              <i class="bi   bi-github"></i>
              <i class="bi  bi-linkedin"></i>
              <i class="bi  bi-twitter"></i>
              <i class="bi  bi-envelope-fill"></i>
            </div>
          </div>
        </section>
        <section>
          <img src={ProfilePic} alt="Profile picture" width={300} />
        </section>
      </section>
    </div>
  );
};

export default Profile;
