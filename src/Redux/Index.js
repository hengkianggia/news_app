import { configureStore } from "@reduxjs/toolkit";

import genreReducer from "./Genre";

const store = configureStore({
  reducer: { genre: genreReducer },
});

export default store;
