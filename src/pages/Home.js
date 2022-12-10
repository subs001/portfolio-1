import React from "react";
import Profile from "../components/Profile.component";
import Navbar from "../components/Navbar.component";
import About from "../components/About.component";
import Experience from "../components/Experience.component";
import Projects from "../components/Projects.component";

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Profile></Profile>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
    </div>
  );
}

export default Home;
