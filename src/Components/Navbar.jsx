import React from "react";
import { SiNike } from "react-icons/si";
import { GrNotification } from "react-icons/gr";
import { MdFavoriteBorder } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className=" w-full py-4 px-16 flex justify-between items-center">
      <div className="text-[60px]">
        <SiNike />
      </div>

      <div className="flex items-center gap-x-32">
        <div className="h-full">
          <ul className="flex gap-x-6 items-center font-Helvetica text-md">
            <li>Trending</li>
            <li>Popular</li>
            <li>Newest</li>
            <li>Movie</li>
            <li>TV Series</li>
            <li>Top Rating</li>
          </ul>
        </div>

        <div className="flex gap-x-5 items-center">
          <input
            type="text"
            placeholder="search"
            className="w-40 py-2 px-4 rounded-full bg-gray-100 text-md"
          ></input>
          <div className="text-[24px]">
            <MdFavoriteBorder />
          </div>
          <div className="text-[20px]">
            <GrNotification />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
