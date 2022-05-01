import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Navbar } from "../../components";

function Layout() {
  return (
    <div className="flex flex-wrap">
      <Header />
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
