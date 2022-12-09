import React from "react";
import Profile from "../components/Profile.component";
import Navbar from "../components/Navbar.component";
import About from "../components/About.component";
import Experience from "../components/Experience.component";

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Profile></Profile>
      <About></About>
      <Experience></Experience>
    </div>
  );
}

export default Home;
