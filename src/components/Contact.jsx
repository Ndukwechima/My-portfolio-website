import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <section className="w-screen bg-blue-50 h-[110vh] mt-[8rem]">
        <h4 className="text-center text-[#03045E] font-bold tracking-wider">
          CONTACT ME
        </h4>

        <section className="flex justify-center items-center mt-[5rem]">
          <form action="post" className="p-[50px] flex flex-col  ">
            <input
              className="bg-transparent w-[20vw] border border-[#03045E] rounded-[3px] text-[#03045E] p-1 placeholder:text-[10px] placeholder:text-[#03045E] placeholder:px-[10px]"
              type="text"
              name="post"
              id="name"
              placeholder="Enter your full name..."
            />
            <br />
            <input
              className="bg-transparent mt-3 w-[20vw] text-[#03045E] rounded-[3px] p-1 border border-[#03045E] placeholder:text-[10px] placeholder:text-[#03045E] placeholder:px-[10px]
            "
              type="text"
              name="post"
              id="name"
              placeholder="Enter your email..."
            />
            <br />
            <textarea
              className=" mt-3 rounded-[3px] bg-transparent text-[#03045E] border border-[#03045E] py-3 placeholder:text-[10px] placeholder:text-[#03045E] placeholder:px-[10px]"
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Write your message here..."
            ></textarea>

            <button
              className="bg-transparent mt-5 ml-[102px] border border-[#03045E]  w-[80px] text-[12px] font-bold tracking-wider py-1 px-4 rounded-[3px] text-[#03045E]"
              type="submit"
            >
              SEND
            </button>
          </form>
        </section>
      </section>
    </div>
  );
};

export default Contact;
