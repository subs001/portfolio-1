import React from "react";

function SmallText({ text, icon }) {
  return (
    <li className="font-satisfy text-teal-500 flex justify-center text-3xl gap-4 drop-shadow-lg shadow-gray-500 transform transition duration-100 hover:scale-150 hover:text-[#22A39F]">
      {text}
      {icon}
    </li>
  );
}

export default SmallText;
