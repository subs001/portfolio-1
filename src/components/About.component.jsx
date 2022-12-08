import React from "react";
import about_pic from "../assets/images/About-pic.png";
import location_pic from "../assets/images/Location.png";

function About() {
  return (
    <div>
      <div className="w-full h-4 text-center justify-center flex py-16 md:pb-24">
        <p className="text-4xl text-[#393E46] font-dancingScript">Me !</p>
      </div>
      <div className="w-full md:flex px-8 md:px-32 py-8 md:py-16">
        <div className="w-full md:w-[45%] justify-center md:justify-start">
          <p className=" text-center text-justify md:text-justify font-poppins text-sm md:text-base">
            Born in Raipur, I spent most of my life here, embracing and taking
            part in the rich culture and traditions of my Gujarathi heritage.
            Currently in my final year pursuing my B.Tech Mechanical degree at
            VIT University, Vellore. While I've mainly specialised in simulation
            software and research, I've always had a passion for programming due
            to my amazement with the endless possibilities it provides at our
            fingertips.
            <br />
            <br />I love to travel, explore and experience new things. This of
            course applies to food as well, and I'm working hard to realise my
            dream of visiting many countries around the world and tasting all
            the delicious cusines in each of them. In my free time I enjoy
            painting, drawing and anything artsy. I find it relaxing and allows
            me to express myself in beautiful ways.
          </p>
        </div>
        <div className="md:w-[45%] flex justify-center md:justify-end py-12 md:py-0">
          <img
            src={location_pic}
            alt=""
            className="rounded-full w-24 h-24 md:w-32 md:h-32 border-purple-500 border-2 drop-shadow-md"
          />
          <img src={about_pic} alt="" className="w-40 md:w-64 h-auto drop-shadow-md" />
        </div>
      </div>
    </div>
  );
}

export default About;
