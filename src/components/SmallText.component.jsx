import React from "react";

function SmallText({ text, icon}) {
  return <li className="font-satisfy text-[#22A39F] flex justify-center text-3xl gap-4">{text}{icon}</li>;
}

export default SmallText;
