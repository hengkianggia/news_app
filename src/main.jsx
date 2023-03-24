import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";


import { QueryClientProvider, QueryClient } from "react-query";
import { Provider } from "react-redux";
import store from "./Redux/Index";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <App />
    </Provider>
  </QueryClientProvider>
);
