import React from "react";
import { Outlet } from "react-router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
