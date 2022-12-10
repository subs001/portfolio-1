import React from "react";
import '../styles/fillAnimation.css';

function Skills({ skillName, skillPercentage }) {
  return (
    <div class="w-40 h-12 bg-[#40394A] rounded-full relative m-8">
      <div class={`bg-[#7579E7] h-full ${skillPercentage>80 ? "rounded-full" : "rounded-l-full rounded-r-0"} fill`} style={{width: skillPercentage+'%'}}></div>
        <p className={`font-poppins text-slate-100 ${skillName.length>12 ? 'text-base top-[25%]' : 'text-2xl top-[15%]'} absolute left-0 right-0 mx-auto text-center`}>{skillName}</p>
    </div>
  );
}

export default Skills;
