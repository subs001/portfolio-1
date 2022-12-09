import React from "react";

function Header({text}) {
  return (
    <div className="w-full h-4 text-center justify-center flex py-16 md:pb-24">
      <p className="text-4xl text-[#393E46] font-dancingScript">{text}</p>
    </div>
  );
}

export default Header;
