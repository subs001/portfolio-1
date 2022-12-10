import React from "react";
import Header from "./Header.component";
import { TimelineLeft, TimelineRight } from "./Timeline.component";
import { work_experience } from "../assets/constants";

function Experience() {
  return (
    <div name="experience" id="experience">
      <Header text={"Experience"} />
      <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50 pt-4 pb-16 md:my-12">
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
