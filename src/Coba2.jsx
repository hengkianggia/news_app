import axios from "axios";
import React, { useState } from "react";

const Coba2 = () => {
  const [movie, setMovie] = useState([]);
  const fetchHandler = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=542160c3792c7bccea78ba58cf55157a"
        // {
        //   params: {
        //     with_genres: "28",
        //   },
        // }
      )
      .then(function (response) {
        // console.log(response);
        setMovie(response.data.genres);
        console.log(movie);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="w-full h-[100vh] flex flex-col justify-center p-5">
      <button
        className="w-20 h-20 bg-orange-400 grid place-items-center"
        onClick={fetchHandler}
      >
        coba
      </button>
      <div className="w-full h-full mt-5 bg-red-400">
        <ul className="flex gap-x-4">
          {movie.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Coba2;
