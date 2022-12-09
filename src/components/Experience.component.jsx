import React from "react";
import Header from "./Header.component";
import { TimelineLeft, TimelineRight } from "./Timeline.component";

function Experience() {
  const work_experience = [
    {
      companyName: "Citi Bank",
      duration: "June 2023 - ",
      role: "Software Engineer",
      description: "Contributing to CSC department",
      left: true,
    },
    {
      companyName: "Schneider Electric",
      duration: "May 2022 - Jul 2022",
      role: "R&D Intern",
      description: "Worked on cell simulation using Ansys Fluent",
      left: true,
    },
    {
      companyName: "Utkal Samaj",
      duration: "Apr 2021 - May 2022",
      role: "Operations Manager",
      description:
        "Organisation to spread Odisha culture throughout the country",
      left: false,
    },
  ];

  return (
    <div name="experience" id="experience">
      <Header text={"Experience"} />
      <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50 pt-4 pb-16 md:py-16">
        {work_experience.map((job, key) => {
          return job.left ? (
            <TimelineLeft job={job} key={key} />
          ) : (
            <TimelineRight job={job} key={key} />
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
