import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aga2ful",
        "template_dejcph2",
        form.current,
        "MmJgOb79ALHOPHVyo"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="contact">
      <section className="flex justify-center  flex-col w-[100vw] bg-blue-50 min-h-[100vh] mt-[4rem]">
        <div className="mt-[-40px]">
          <h4 className="text-center text-[#03045E] font-bold tracking-wider">
            CONTACT ME
          </h4>
        </div>

        <section className="flex justify-center items-center lg:w-[80vw]">
          {/* <div className=" gradient-border  min-h-[60vh]  border-[5px] border-[#03045E]"> */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="p-[50px] flex flex-col lg:w-[10vw]"
          >
            <input
              className="bg-transparent w-[70vw] lg:w-[30vw] border border-[#03045E] rounded-[3px] text-[#03045E] p-1 placeholder:text-[10px] placeholder:text-[#03045E] placeholder:px-[10px]"
              type="text"
              name="user_name"
              placeholder="Enter your full name..."
              required
            />
            <br />
            <input
              className="bg-transparent mt-3 w-[70vw] lg:w-[30vw] text-[#03045E] rounded-[3px] p-1 border border-[#03045E] placeholder:text-[10px] placeholder:text-[#03045E] placeholder:px-[10px]
            "
              type="email"
              name="user_email"
              placeholder="Enter your email..."
              required
            />
            <br />
            <textarea
              className=" w-[70vw] h-[20vh] mt-3 rounded-[3px] lg:w-[30vw] bg-transparent text-[#03045E] border border-[#03045E] py-3 placeholder:text-[10px] placeholder:text-[#03045E] placeholder:px-[10px]"
              name="message"
              cols="30"
              rows="10"
              placeholder="Write your message here..."
              required
            ></textarea>

            <button
              className=" mt-5  border border-[#03045E] tracking-widest py-2 w-[70vw] lg:w-[30vw] text-[12px] lg:text-[16px] md:text-[14px] bg-[#03045E] font-bold rounded-[4px] text-[#d4cbed]"
              type="submit"
            >
              Send Message
            </button>
          </form>
          {/* </div> */}
        </section>
      </section>
    </div>
  );
};

export default Contact;
