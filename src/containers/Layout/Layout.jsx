import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Navbar } from "../../components";

function Layout() {
  return (
    <>
      <div>Layout</div>
      <Outlet />
    </>
  );
}

export default Layout;
