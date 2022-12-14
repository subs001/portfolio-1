import React from "react";

function ProjectCard({ project }) {
  return (
    <div className="w-80 md:w-80 h-[32rem] rounded-lg overflow-hidden shadow-lg shadow-slate-900 scale-75 md:scale-75 bg-[#411530]">
      <img
        className="w-full h-60 scale-90 border-4 rounded-lg border-[#B68973]"
        src={project["img-link"]}
        alt="Project"
      />
      <div className="px-6 py-4 bg-[#411530]">
        <div className="font-bold text-lg mb-2 text-[#F7F7F7] max-w-[50ch] line-clamp-3">
          {project.title}
        </div>
        <p className="text-[#fec1a2] text-lg font-poppins">{project.dop}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[#ff7728] text-lg">
          Link
        </a>
      </div>
      <div className="px-6 pt-4 pb-2">
        {project.keywords.map((keyword, key) => {
          return (
            <span key={key} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {keyword}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectCard;
