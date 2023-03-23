import React, { useState } from "react";
import { BsFilter } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";

const NavProduk = () => {
  const [ open, setOpen ] = useState(false);
  const openHandler = () => {
    setOpen(!open);
  }
  return (
    <section className="w-full">
      <div className="flex justify-between pb-10 items-center">
        <h1 className="text-xl font-Helvetica font-medium">Mens Shoes (121)</h1>

        <div className="flex gap-x-8">
          <div className="flex items-center font-Helvetica gap-x-2">
            <p>Hide Filters</p>
            <div className="text-[20px]">
              <BsFilter />
            </div>
          </div>

          <div className="flex items-center font-Helvetica gap-x-1">
            <p>Sort by</p>
            <div className="text-[30px] relative">
              <IoMdArrowDropdown onClick={openHandler} />
              {open && (
                <div className="absolute space-y-4 w-40 p-5 bg-white z-50 right-0 text-md rounded-xl flex flex-col items-end">
                  <p>Newest</p>
                  <p>Oldest</p>
                  <p>Top Rating</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavProduk;
