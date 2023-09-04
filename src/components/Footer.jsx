import React from "react";

const Footer = () => {
  return (
    <div>
      <section className="w-screen flex justify-center items-center bg-[#03045E] mt-[10rem] min-h-[40vh]">
        <section className="w-screen flex justify-around">
          <div>
            <div class="animate-bounce duration-1000">
              <a href="#home">
                <i class="bi  text-white  bi-arrow-up-circle-fill "></i>
              </a>
            </div>
          </div>

          <div className="w-[30vw] flex justify-between flex-col">
            <div className="my-10 w-[20vw] flex justify-between ">
              <i class="bi text-white bi-github"></i>
              <i class="bi text-white bi-linkedin"></i>
              <i class="bi text-white bi-twitter"></i>
              <i class="bi text-white bi-facebook"></i>
              <i class="bi text-white bi-whatsapp"></i>
            </div>
            <div>
              <p className="text-white text-[12px] mx-[30px] tracking-widest">
                &copy;2023 Aruby. <span className="text-[#FF4000]">Dev</span>{" "}
                All Right Reserved
              </p>
            </div>
          </div>
          <div>
            <div class="animate-bounce duration-1000">
              <a href="#home">
                <i class="bi  text-white  bi-arrow-up-circle-fill "></i>
              </a>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Footer;
