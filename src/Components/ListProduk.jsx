import axios from "axios";
import React, { useEffect, useState } from "react";
import ItemProduk from "./ItemProduk";

const ListProduk = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function getGenre() {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/discover/movie?api_key=542160c3792c7bccea78ba58cf55157a"
        );
        setMovie(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error(error);
      }
    }
    getGenre();
  }, []);

  const listGenre = movie.map((hero) => {
    return (
      <ItemProduk
        img={`https://image.tmdb.org/t/p/w500${hero.poster_path}`}
        title={hero.original_title}
        rating={hero.vote_average}
        realease={hero.release_date}
      />
    );
  });

  return (
    <div className="w-full flex justify-between flex-wrap gap-y-10">
      {listGenre}
    </div>
  );
};

export default ListProduk;
