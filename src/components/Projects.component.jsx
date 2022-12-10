import React from "react";
import Header from "./Header.component";
import ProjectCard from "./ProjectCard.component";

function Projects() {
    const projects = [
        {
            "title": "Validation of Computational Fluid Dynamics Approach of Lateral Velocity Profile Due to Curvature Effect on Floodplain Levee of Two-stage Meandering Channel",
            "dop": "Sep 2022",
            "link": "https://www.researchgate.net/publication/363613190_Validation_of_Computational_Fluid_Dynamics_Approach_of_Lateral_Velocity_Profile_Due_to_Curvature_Effect_on_Floodplain_Levee_of_Two-stage_Meandering_Channel",
            "img-link": "https://www.researchgate.net/publication/363613190/figure/fig2/AS:11431281092181239@1666751371560/Plan-Geometry-of-the-Experimental-Setup.png",
        },
        {
            "title": "Heat transfer analysis on different pin fin types using Solid Works",
            "dop": "Nov 2021" ,
            "link": "https://www.researchgate.net/publication/356175978_Heat_transfer_analysis_on_different_pin_fin_types_using_Solid_Works",
            "img-link": "https://www.researchgate.net/publication/356175978/figure/fig5/AS:1089479351762946@1636763527593/Cylindrical-pin-fins.ppm",
        },
    ];
  return (
    <div name="projects" id="projects">
      <Header text={"Projects & Skills"} />
        <div className="w-full flex flex-col flex-wrap content-center md:justify-center md:flex-row overflow-hidden max-h-fit">
        <ProjectCard project={projects[0]} />
        <ProjectCard project={projects[1]} />
        </div>
    </div>
  );
}

export default Projects;
