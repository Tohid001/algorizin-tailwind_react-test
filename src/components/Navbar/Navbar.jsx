import React from "react";
import { NavLink } from "react-router-dom";
import { data } from "../../constants";

const { navItems } = data;

function Navbar() {
  return (
    <div className="fixed left-0 right-0 bottom-0 flex">
      {navItems.map(({ title, route, icon }, index) => {
        return (
          <NavLink
            to={route}
            className={(navInfo) => {
              return navInfo.isActive ? `text-primary` : ``;
            }}
          >
            <span className="text-2xl">{icon}</span>
            <p>{title}</p>
          </NavLink>
        );
      })}
    </div>
  );
}

export default Navbar;
