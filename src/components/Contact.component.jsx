import React from "react";
import envelope from "../assets/icons/envelope.png";
import linkedin from "../assets/icons/linkedin.png";
import instagram from "../assets/icons/instagram.png";

function Contact() {
  return (
    <div className="grid grid-cols-3 bg-slate-300 m-4 rounded-lg">
      <div className="flex justify-end align-middle">
        <img src={envelope} alt="mail" class="w-8 h-8 " />
      </div>
      <div className="flex justify-center align-middle">
        <img src={linkedin} alt="linkedin" class="w-8 h-8" />
      </div>
      <div className="flex justify-start align-middle">
        <img src={instagram} alt="instagram" class="w-8 h-8" />
      </div>
    </div>
  );
}

export default Contact;
