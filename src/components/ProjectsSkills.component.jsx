import React from "react";
import MultiSectionHeader from "./MultiSectionHeader.component";
import ProjectCard from "./ProjectCard.component";
import Skills from "./Skills.component";
import { projects, skills } from "../assets/constants";
import { useState } from "react";

function ProjectsSkills() {
  const sections = ["Projects", "Skills"];
  const [visibleSection, setVisibleSection] = useState("Projects");

  return (
    <div name="projects" id="projects">
      <MultiSectionHeader
        section={visibleSection}
        sections={sections}
        setVisibleSection={setVisibleSection}
      />
      <div
        className={`w-full flex flex-col flex-wrap content-center md:justify-center md:flex-row overflow-hidden max-h-fit ${
          visibleSection === sections[1] && "hidden"
        }`}
      >
        <ProjectCard project={projects[0]} />
        <ProjectCard project={projects[1]} />
      </div>
      <div
        className={`w-full flex flex-row flex-wrap justify-center my-12 max-h-fit ${
          visibleSection === sections[0] && "hidden"
        }`}
      >
        {skills.map((skill, key) => {
          return (
            <Skills
              key={key}
              skillName={skill.skillName}
              skillPercentage={skill.skillPercentage}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProjectsSkills;
