import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Navbar } from "../../components";

function Layout() {
  return (
    <div id="container" className="flex flex-col">
      <Header />
      <div className="flex flex-1 mobileRange:flex-col overflow-hidden">
        <Navbar />
        <div className="flex-1 overflow-auto ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
