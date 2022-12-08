import React from 'react';
import { Link } from 'react-scroll';

function NavItemMobile({ navIcon, navLink = "" }) {
  return (
    <Link to={navLink} smooth duration={500} className="flex justify-center items-center w-fit cursor-pointer">{navIcon}</Link>
  )
}

export default NavItemMobile
