import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Coba from "./Coba";
import Coba2 from "./Coba2";
import Root from "./Components/Pages/Root";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Root/>, children: [] },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
