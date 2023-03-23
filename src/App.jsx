import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Pages/Root";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Root />, children: [] },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
