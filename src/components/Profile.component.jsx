import React from "react";
import profile_pic from "../assets/images/profile-pic.jpg";
import SmallText from "./SmallText.component";
import { GiPaintBrush, GiForkKnifeSpoon } from "react-icons/gi";
import { BsLaptop } from "react-icons/bs";
import "../styles/typewriter.css";

function Profile() {
  return (
    <div name="home" id="home">
      <div className="w-full flex justify-center pt-24">
        <img
          src={profile_pic}
          alt="User"
          className="rounded-full w-64 h-auto align-middle border-fuchsia-300 border-4 shadow-md shadow-[#FFCACA]"
        />
      </div>
      <p className="font-marckScript text-4xl md:text-5xl text-center my-16 mx-auto md:my-24 whitespace-nowrap w-[21ch] overflow-hidden line">
        Hi, I'm Shriya Rathor
      </p>
      <ul className="grid grid-rows-3 md:grid-cols-3 px-32 py-8 md:pt-8 gap-16 md:gap-4">
        <SmallText text={"Artist"} icon={<GiPaintBrush />}></SmallText>
        <SmallText text={"Engineer"} icon={<BsLaptop />}></SmallText>
        <SmallText text={"Foodie"} icon={<GiForkKnifeSpoon />}></SmallText>
      </ul>
    </div>
  );
}

export default Profile;
