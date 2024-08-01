import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="w-[20%] h-full bg-zinc-900 border-r-[1px] border-zinc-700 p-3">
        <h1 className="font-[Montserrat] font-bold text-[#d2d2d2] text-3xl">
          <i className="ri-movie-2-fill text-[#e74c3c] mr-2 text-3xl"></i>
          <span>Cinefy</span>
        </h1>
        <nav className="flex flex-col gap-3">
          <h1 className="text-white text-center font-semibold text-[1.5vw] mt-10 mb-4">
            New Feeds
          </h1>
          <Link className="hover:bg-[#e74c3c] hover:text-white rounded-full duration-300 px-5 py-3 ">
            <i className="ri-fire-fill mr-2"></i> Trending
          </Link>
          <Link className="hover:bg-[#e74c3c] hover:text-white rounded-full duration-300 px-5 py-3 ">
            <i className="ri-bard-fill mr-2"></i> Popular
          </Link>
          <Link className="hover:bg-[#e74c3c] hover:text-white rounded-full duration-300 px-5 py-3 ">
            <i className="ri-film-fill mr-2"></i> Movies
          </Link>
          <Link className="hover:bg-[#e74c3c] hover:text-white rounded-full duration-300 px-5 py-3 ">
            <i className="ri-tv-fill mr-2"></i> TV Shows
          </Link>
          <Link className="hover:bg-[#e74c3c] hover:text-white rounded-full duration-300 px-5 py-3">
            <i className="ri-team-fill mr-2"></i> People
          </Link>
        </nav>
        <hr className="border-none h-[1px] mt-3 bg-zinc-500" />
        <nav className="flex flex-col gap-3">
          <h1 className="text-white text-center  font-semibold text-[1.5vw] mt-5 mb-5">
            Website Informarion
          </h1>
          <Link className="hover:bg-[#e74c3c] hover:text-white rounded-full duration-300 px-5 py-3 ">
            <i className="ri-information-fill mr-2"></i> About Us
          </Link>
          <Link className="hover:bg-[#e74c3c] hover:text-white rounded-full duration-300 px-5 py-3 ">
            <i className="ri-phone-fill  mr-2"></i> Contact Us
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
