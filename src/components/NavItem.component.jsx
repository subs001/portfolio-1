import React from "react";

function NavItem({navIcon, navText, navLink=""}) {
  return (
    <li className="flex justify-between items-center w-48 h-14 px-4 bg-[#263159] text-[#FFFBEB]  ml-[-130px] hover:ml-0 duration-300">
      <a href={navLink} className="flex justify-between items-center w-full text-lg">
        {navText}
      </a>
      {navIcon}
    </li>
  );
}

export default NavItem;
