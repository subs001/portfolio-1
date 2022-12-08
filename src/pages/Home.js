import React from "react";
import Profile from "../components/Profile.component";
import Navbar from "../components/Navbar.component";
import About from "../components/About.component";

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Profile></Profile>
      <About></About>
    </div>
  );
}

export default Home;
