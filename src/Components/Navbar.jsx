import React from "react";
import { SiNike } from "react-icons/si";
import { GrNotification } from "react-icons/gr";

const Navbar = () => {
  return (
    <nav className="w-full py-1 px-16 flex justify-between items-center">
      <div className="text-[60px]">
        <SiNike />
      </div>
      
      <div className="flex items-center gap-x-32">
        <div>
          <ul className="flex gap-x-6 items-center font-Helvetica text-md">
            <li>New & Featuren</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Sale</li>
            <li>SNKRS</li>
          </ul>
        </div>

        <div className="flex gap-x-5 items-center">
          <input
            type="text"
            placeholder="search"
            className="w-40 py-1 px-4 rounded-full bg-gray-100"
          ></input>
          <div className="text-[20px]">
            <GrNotification />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
