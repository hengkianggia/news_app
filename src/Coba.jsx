import React from "react";

const Coba = () => {
  const fetchHandler = async () => {
    const response = await fetch("http://www.omdbapi.com/?apikey=48196632&");
    const data = await response.json();
    console.log(data)
  };

  return (
    <div>
      <h1>coba</h1>
      <button className="flex bg-orange-400 p-5" onClick={fetchHandler}>jajall</button>
    </div>
  );
};

export default Coba;
