import React from "react";

function MultiSectionHeader({ section, sections, setVisibleSection }) {
  return (
    <div>
      <div className="w-full h-4 text-center justify-center flex py-16 md:pb-24">
        <button
          className={`text-4xl text-[#393E46] font-dancingScript  ${
            section === sections[0]
              ? "text-teal-500 scale-110 duration-100"
              : "text-black"
          }`}
          onClick={() => {
            setVisibleSection(sections[0]);
          }}
        >
          {sections[0]}
        </button>
        <p className="text-4xl text-[#393E46] font-dancingScript px-4">&</p>
        <button
          className={`text-4xl text-[#393E46] font-dancingScript  ${
            section === sections[1]
              ? "text-teal-500 scale-110 duration-100"
              : "text-black"
          }`}
          onClick={() => {
            setVisibleSection(sections[1]);
          }}
        >
          {sections[1]}
        </button>
      </div>
    </div>
  );
}

export default MultiSectionHeader;
