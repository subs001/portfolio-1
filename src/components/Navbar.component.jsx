import React from "react";
import NavItem from "./NavItem.component";
import {AiFillHome, AiFillInfoCircle} from 'react-icons/ai';
import {BsFillBriefcaseFill, BsFillTelephoneFill} from 'react-icons/bs';


function Navbar() {
  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
      <ul>
        <NavItem navIcon={<AiFillHome size={40}/>} navText={"Home"} navLink={""} />
        <NavItem navIcon={<AiFillInfoCircle size={40}/>} navText={"About"} navLink={""} />
        <NavItem navIcon={<BsFillBriefcaseFill size={40}/>} navText={"Experience"} navLink={""} />
        <NavItem navIcon={<BsFillTelephoneFill size={40}/>} navText={"Contact"} navLink={""} />

      </ul>
    </div>
  );
}

export default Navbar;
