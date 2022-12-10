import React from "react";
import Profile from "../components/Profile.component";
import Navbar from "../components/Navbar.component";
import About from "../components/About.component";
import Experience from "../components/Experience.component";
import ProjectsSkills from "../components/ProjectsSkills.component";

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Profile></Profile>
      <About></About>
      <Experience></Experience>
      <ProjectsSkills></ProjectsSkills>
    </div>
  );
}

export default Home;
