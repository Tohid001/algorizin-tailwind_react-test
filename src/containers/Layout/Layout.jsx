import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Navbar } from "../../components";

function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 mobileRange:flex-col">
        <div className="mobileRange:order-2">
          <Navbar />
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
