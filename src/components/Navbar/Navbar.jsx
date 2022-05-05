import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { data } from "../../constants";

const { navItems } = data;

function Navbar() {
  return (
    <nav className="mobileRange:order-2 p-4 fromTab:p-6 mobileRange:bg-white  mobileRange:shadow-navContainer border-r border-neutral-2">
      <ul className="flex fromTab:flex-col mobileRange:justify-between fromTab:gap-2 fromLarge:w-[188px]">
        {navItems.map(({ title, route, icon }, index) => {
          return (
            <NavLink
              key={index}
              to={route}
              className={(navInfo) => {
                const common = "cursor-pointer p-2 pr-[9px] ";
                return navInfo.isActive
                  ? `text-primary fromTab:bg-white fromTab:rounded fromTab:shadow-menuActive ${common}`
                  : `${common}`;
              }}
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl text-neutral">{icon}</span>
                <p className="hidden fromLarge:block text-sm leading-[17px]">
                  {title}
                </p>
              </div>
            </NavLink>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
