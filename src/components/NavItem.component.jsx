import React from "react";
import { Link } from "react-scroll";

function NavItem({ navIcon, navText, navLink = "" }) {
  return (
    <li className="flex justify-between items-center w-48 h-14 px-4 bg-[#263159] text-[#FFFBEB]  ml-[-130px] hover:ml-0 duration-300">
      <Link to={navLink} smooth duration={500} className="flex justify-between items-center w-full text-lg cursor-pointer">{navText}</Link>
      {navIcon}
    </li>
  );
}

export default NavItem;
