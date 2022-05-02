import React from "react";
import { NavLink } from "react-router-dom";
import { data } from "../../constants";

const { navItems } = data;

function Navbar() {
  return (
    <nav className="flex  mobileRange:shadow-navContainer  ">
      // mobileRange:bg-white
      <ul>
        {/* {navItems.map(({ title, route, icon }, index) => {
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
        })} */}
        Navbar
      </ul>
    </nav>
  );
}

export default Navbar;
