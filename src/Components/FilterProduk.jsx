import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

const FilterProduk = () => {

  return (
    <div className="w-[20%] flex flex-col">
      <div>
        <ul className="flex flex-col gap-y-3 font-Helvetica text-md">
          <li>Action</li>
          <li>Adventure</li>
          <li>Animation</li>
          <li>Comedy</li>
          <li>Crime</li>
          <li>Documentary</li>
          <li>Drama</li>
          <li>Family</li>
          <li>Fantasy</li>
          <li>History</li>
          <li>Horror</li>
          <li>Music</li>
          <li>Mystery</li>
          <li>Romance</li>
          <li>Science Fiction</li>
          <li>TV Movie</li>
          <li>Thriller</li>
          <li>War</li>
          <li>Western</li>
        </ul>
      </div>
    </div>
  );
};

export default FilterProduk;
