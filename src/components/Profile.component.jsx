import React from "react";
import profile_pic from "../assets/images/profile-pic.jpg";
import SmallText from "./SmallText.component";
import {GiPaintBrush, GiForkKnifeSpoon} from 'react-icons/gi';
import {BsLaptop} from 'react-icons/bs';

function Profile() {
  return (
    <div>
      <div className="w-full flex justify-center pt-24">
        <img
          src={profile_pic}
          alt="User"
          className="rounded-full w-64 h-auto align-middle border-fuchsia-300 border-4 shadow-md shadow-[#FFCACA]"
        />
      </div>
      <p className="font-marckScript text-5xl flex justify-center py-24">Hi, I'm Shriya Rathor</p>
      <ul className="grid grid-cols-3 px-32 py-16 gap-4">
        <SmallText text={"Artist"} icon={<GiPaintBrush />}></SmallText>
        <SmallText text={"Engineer"} icon={<BsLaptop />}></SmallText>
        <SmallText text={"Foodie"} icon={<GiForkKnifeSpoon />}></SmallText>
      </ul>
    </div>
  );
}

export default Profile;
