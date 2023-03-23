import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Produk from "../Produk";
import Footer from "../Footer";

const Root = () => {
  return (
    <>
      <Navbar />
      <Produk/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default Root;
