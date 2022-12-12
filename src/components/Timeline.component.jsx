import React from "react";

function TimelineLeft({ job }) {
  return (
    <div className="flex flex-row-reverse md:contents">
      <div className="bg-[#411530] col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md w-full md:w-[45%] hover:scale-110 duration-150">
        <h3 className="font-semibold text-lg text-[#FF87CA] font-quicksand">
          {job.companyName}
        </h3>
        <p className="leading-tight text-justify font-quicksand tracking-tighter mb-2 text-xs">
          {job.duration}
        </p>
        <p className="leading-tight text-justify text-md text-[#BCE29E]">
          {job.role}
        </p>
        <p
          className={`leading-tight text-justify text-sm ${
            job.description === "" && "hidden"
          }`}
        >
          {job.description}
        </p>
      </div>
      <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
        <div className="h-full w-6 flex items-center justify-center">
          <div className="h-full w-1 bg-[#411530] pointer-events-none"></div>
        </div>
        <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#B68973] shadow"></div>
      </div>
    </div>
  );
}

function TimelineRight({ job }) {
  return (
    <div className="flex md:contents">
      <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
        <div className="h-full w-6 flex items-center justify-center">
          <div className="h-full w-1 bg-[#411530] pointer-events-none"></div>
        </div>
        <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#B68973]"></div>
      </div>
      <div className="bg-[#411530] col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md w-full md:w-[45%] hover:scale-110 duration-150">
        <h3 className="font-semibold text-lg mb-1 text-[#BCE29E] font-quicksand">
          {job.companyName}
        </h3>
        <p className="leading-tight text-justify font-quicksand tracking-tighter mb-2 text-xs">
          {job.duration}
        </p>
        <p className="leading-tight text-justify text-md text-[#FF87CA]">
          {job.role}
        </p>
        <p
          className={`leading-tight text-justify text-sm ${
            job.description === "" && "hidden"
          }`}
        >
          {job.description}
        </p>
      </div>
    </div>
  );
}

export { TimelineLeft, TimelineRight };
