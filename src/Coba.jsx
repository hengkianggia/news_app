import { data } from "autoprefixer";
import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const Coba = () => {

  return (
    <div>
      {data?.data.map((popo) => {
        return <p>{popo.name}</p>;
      })}

      <button className="flex bg-orange-400 p-5" onClick={fetchHandler}>
        jajall
      </button>
    </div>
  );
};

export default Coba;
