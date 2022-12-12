import React from "react";
import Header from "./Header.component";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { IoDocumentTextSharp } from "react-icons/io5";
import "../styles/coinflip.css";

function Contact() {
  const iconSize = 80;
  const iconStyle = "m-4 text-[#411530] scale-[62.5%] md:scale-100 drop-shadow-lg";

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
          <button
            type="submit"
            className="bg-[#B68973] hover:bg-[#816151] px-4 py-1 m-6 rounded-lg text-slate-200 shadow-md"
          >
            Send
          </button>
        </form>
      </div>
      <div className="w-full md:w-[50%] p-4 md:p-12 h-[35rem] float-none md:float-right">
        <p className="font-poppins w-[75%] mx-auto my-4 text-center">
          ...or on one of my Socials!
        </p>
        <div className="flex flex-row w-full justify-center gap-4 md:gap-16 my-16">
          <div className="icon">
            <a href="">
              <AiFillGithub
                size={iconSize}
                className={iconStyle}
              ></AiFillGithub>
            </a>
          </div>
          <div className="icon">
            <a href="https://www.instagram.com/shriyaarathor/">
              <AiFillInstagram
                size={iconSize}
                className={iconStyle}
              ></AiFillInstagram>
            </a>
          </div>
          <div className="icon">
            <a href="https://www.linkedin.com/in/shriya-rathor-0b42851ba/">
              <AiFillLinkedin
                size={iconSize}
                className={iconStyle}
              ></AiFillLinkedin>
            </a>
          </div>
        </div>
        <p className="font-poppins w-[75%] mx-auto my-4 text-center">
          Grab a copy of my resume here!
        </p>
        <a href="https://www.instagram.com/shriyaarathor/" className="flex justify-center mt-8  drop-shadow-lg">
          <IoDocumentTextSharp
            size={50}
            className="text-[#B68973]"
          ></IoDocumentTextSharp>
        </a>
      </div>
    </div>
  );
}

export default Contact;
