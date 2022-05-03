import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Navbar } from "../../components";

function Layout() {
  return (
    <div id="container" className="flex flex-col">
      <Header />
      <div className="flex flex-1 mobileRange:flex-col">
        <div className="mobileRange:order-2 bg-cyan-300 ">
          <Navbar />
        </div>
        <div className="flex-1 bg-green-400 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
