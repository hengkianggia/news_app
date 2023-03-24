import axios from "axios";
import React, { useState } from "react";

const Coba = () => {
  const [movie, setMovie] = useState([]);
  const fetchHandler = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=542160c3792c7bccea78ba58cf55157a",
        {
          params: {
            with_genres: "28",
          },
        }
      )
      .then(function (response) {
        // console.log(response);
        setMovie(response.data.results);
        console.log(movie);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const list = movie.map((item) => {});

  return (
    <div className="w-full h-[100vh] flex justify-center">
      <button
        className="bg-orange-400 w-20 h-10 grid place-items-center"
        value={"28"}
        onClick={fetchHandler}
      >
        jajall
      </button>
      {movie.map((item) => {
        return (
          <div>
            <h1>{item.original_title}</h1>
            <h1>{item.release_date}</h1>
            <h1>{item.overview}</h1>
            <h1>{item.original_title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Coba;
