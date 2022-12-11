import React from "react";
import Header from "./Header.component";

function Contact() {
  return (
    <div name="contact" id="contact">
      <Header text={"Contact"} />

      <div className="w-full md:w-[50%] p-4 md:p-12 h-[35rem] float-none md:float-left">
        <p className="font-poppins w-[75%] mx-auto my-4">
          Please send me your queries, feedback or anything else you'd like to,
          here!
        </p>
        <form action="" className="flex flex-col w-full items-center">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="bg-[#411530] focus:bg-[#772658] focus:scale-105 duration-100  rounded-lg text-slate-200 placeholder:text-slate-200 px-4 py-2 w-[75%]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-[#411530] focus:bg-[#772658] focus:scale-105 duration-100  rounded-lg text-slate-200 placeholder:text-slate-200 px-4 py-2 my-4 w-[75%]"
          />
          <textarea
            name="message"
            cols="30"
            rows="5"
            placeholder="Enter your message"
            className="bg-[#411530] focus:bg-[#772658] focus:scale-105 duration-100 rounded-lg text-slate-200 placeholder:text-slate-200 px-4 py-2 w-[75%]"
          ></textarea>
          <button type="submit" className="bg-[#B68973] hover:bg-[#816151] px-4 py-1 m-6 rounded-lg text-slate-200">
            Send
          </button>
        </form>
      </div>
      <div className="w-full md:w-[50%] p-4 md:p-12 h-[35rem] float-none md:float-right">
      <p className="font-poppins w-[75%] mx-auto my-4">
          ...or on one of my Socials!
        </p>
      </div>
    </div>
  );
}

export default Contact;
