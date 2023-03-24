import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { genreActions } from "../Redux/Genre";

const FilterProduk = () => {
  const [genre, setGenre] = useState([]);
  useEffect(() => {
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
          setGenre(response.data.genres);
          // console.log(genre);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    fetchHandler();
  }, []);

  const dispatch = useDispatch();

  const actionHandler = () => {
    dispatch(genreActions.Action("28"));
  };

  return (
    <div className="w-[20%] flex flex-col">
      <div>
        <ul className="flex flex-col gap-y-3 font-Helvetica text-md">
          {genre.map((item) => {
            return (
              <li
                className="cursor-pointer"
                key={item.id}
                value={item.id}
                onClick={actionHandler}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FilterProduk;
