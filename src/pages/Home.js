import React from "react";
import UserImg from "../components/UserImg.component";
import Name from "../components/Name.component";
import Navbar from "../components/Navbar.component";

function Home() {
  return (
    <div className="flex">
      <Navbar></Navbar>
      <div>
        <UserImg className=""></UserImg>
        <Name></Name>
      </div>
    </div>
  );
}

export default Home;
