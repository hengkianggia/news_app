import React from "react";
import { BsFilter } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";

const NavProduk = () => {
  return (
    <section className="w-full">
      <div className="flex justify-between pb-10">
        <h1 className="text-xl font-Helvetica font-medium">Mens Shoes (121)</h1>

        <div className="flex gap-x-5">
          <div className="flex items-center font-Helvetica gap-x-2">
            <p>Hide Filters</p>
            <div className="text-[20px]">
              <BsFilter />
            </div>
          </div>

          <div className="flex items-center font-Helvetica gap-x-1">
            <p>Sort by</p>
            <div className="text-[30px]">
              <IoMdArrowDropdown />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavProduk;
