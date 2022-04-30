import React from "react";
import { NavLink } from "react-router-dom";
import { data } from "../../constants";

const { navItems } = data;

function Navbar() {
  return (
    <nav className=" fixed left-0 right-0 bottom-0 flex mobileRange:bg-white mobileRange:shadow-navContainer  ">
      <ul>
        {navItems.map(({ title, route, icon }, index) => {
          return (
            <li key={index}>
              <NavLink
                to={route}
                className={(navInfo) => {
                  return navInfo.isActive
                    ? `text-primary fromTab:bg-white fromTab:rounded fromTab:shadow-menuActive p-2`
                    : ``;
                }}
              >
                <span className="text-2xl">{icon}</span>
                <p className="hidden fromLarge:block">{title}</p>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
