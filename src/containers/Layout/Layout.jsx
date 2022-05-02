import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Navbar } from "../../components";

function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <div className="">
        <Header />
      </div>
      <div className="flex overflow-hidden">
        <div className="mobileRange:fixed mobileRange:bottom-0 mobileRange:left-0 mobileRange:right-0  mobileRange:z-10 bg-orange-300">
          <Navbar />
        </div>
        <div className="relative basis-full">
          <div className="h-screen"></div>
          <div className="absolute inset-0 bg-violet-600">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
