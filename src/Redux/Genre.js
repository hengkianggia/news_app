import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { genre: "", movie: [] };

const genreSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {
    Action(state, action) {
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
            state.movie(response.data.results);
            console.log(movie);
          })
          .catch(function (error) {
            console.log(error);
          });
    },
    Adventure(state, action) {
      state.genre = `${action.payload}`;
    },
    Animation(state, action) {
      state.genre = `${action.payload}`;
    },
    Comedy(state, action) {
      state.genre = `${action.payload}`;
    },
    Crime(state, action) {
      state.genre = `${action.payload}`;
    },
    Documentary(state, action) {
      state.genre = `${action.payload}`;
    },
    Drama(state, action) {
      state.genre = `${action.payload}`;
    },
    Family(state, action) {
      state.genre = `${action.payload}`;
    },
    Fantasy(state, action) {
      state.genre = `${action.payload}`;
    },
    History(state, action) {
      state.genre = `${action.payload}`;
    },
    Horror(state, action) {
      state.genre = `${action.payload}`;
    },
    Music(state, action) {
      state.genre = `${action.payload}`;
    },
    Mystery(state, action) {
      state.genre = `${action.payload}`;
    },
    Romance(state, action) {
      state.genre = `${action.payload}`;
    },
    scienceFiction(state, action) {
      state.genre = `${action.payload}`;
    },
    tvMovie(state, action) {
      state.genre = `${action.payload}`;
    },
    Thriller(state, action) {
      state.genre = `${action.payload}`;
    },
    War(state, action) {
      state.genre = `${action.payload}`;
    },
    Western(state, action) {
      state.genre = `${action.payload}`;
    },
  },
});

export const genreActions = genreSlice.actions;

export default genreSlice.reducer;
