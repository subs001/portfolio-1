import React from "react";
import NavItem from "./NavItem.component";
import NavItemMobile from "./NavItemMobile.component";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import {
  BsFillBriefcaseFill,
  BsFillTelephoneFill,
  BsTelephoneFill,
} from "react-icons/bs";
import { FaLayerGroup } from "react-icons/fa";

function Navbar() {
  return (
    <div>
      <div className="flex flex-col top-[35%] left-0 fixed hidden md:block">
        <ul>
          <NavItem
            navIcon={<AiFillHome size={40} />}
            navText={"Home"}
            navLink={"home"}
          />
          <NavItem
            navIcon={<AiFillInfoCircle size={40} />}
            navText={"About"}
            navLink={"about"}
          />
          <NavItem
            navIcon={<BsFillBriefcaseFill size={40} />}
            navText={"Experience"}
            navLink={"experience"}
          />
          <NavItem
            navIcon={<FaLayerGroup size={40} />}
            navText={"Projects"}
            navLink={"projects"}
          />
          <NavItem
            navIcon={<BsFillTelephoneFill size={40} />}
            navText={"Contact"}
            navLink={"contact"}
          />
        </ul>
      </div>
      <div className="flex flex-row md:hidden justify-center gap-10 mx-auto bg-gradient-to-r from-teal-500 to-pink-500 text-[#FFFBEB] w-full h-12 fixed z-10">
        <NavItemMobile navIcon={<AiFillHome size={30} />} navLink="home" />
        <NavItemMobile
          navIcon={<AiFillInfoCircle size={30} />}
          navLink="about"
        />
        <NavItemMobile
          navIcon={<BsFillBriefcaseFill size={30} />}
          navLink="experience"
        />
        <NavItemMobile
          navIcon={<FaLayerGroup size={30} />}
          navLink="projects"
        />
        <NavItemMobile navIcon={<BsFillTelephoneFill size={30} />} navLink="" />
      </div>
    </div>
  );
}

export default Navbar;
