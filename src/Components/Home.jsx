import React from "react";
import Sidebar from "./templates/Sidebar";
import Topnav from "./templates/Topnav";

const Home = () => {
  document.title = "Cinefy | Home Page";
  return (
    <>
      <Sidebar />
      <div className="w-[80%] h-full">
        <Topnav />
      </div>
    </>
  );
};

export default Home;
