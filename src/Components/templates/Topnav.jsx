import React, { useState } from "react";
import { Link } from "react-router-dom";

const Topnav = () => {
  const [query, setquery] = useState("");

  return (
    <div className="w-full h-[10vh] relative flex justify-start items-center ml-[15%]">
      <i className="text-zinc-400 ri-search-2-line text-3xl"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-[40%] mx-10 px-4 py-2 text-xl outline-none border-none bg-transparent"
        type="text"
        placeholder="search titles, people"
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="text-zinc-400 ri-close-fill text-3xl"
        ></i>
      )}

      {/* <div className="w-[50%] max-h-[50vh] bg-zinc-800 rounded absolute top-[90%] overflow-auto border-[1px] border-zinc-700">
        <Link className="w-full p-10 flex justify-start items-center border-b-2 border-zinc-400 font-semibold hover:bg-zinc-900 text-zinc-400 hover:text-white duration-300">
          <img src="" alt="" />
          <span>Hello</span>
        </Link>
      </div> */}
    </div>
  );
};

export default Topnav;
