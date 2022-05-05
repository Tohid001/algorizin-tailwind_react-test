import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { data } from "../../constants";

const { navItems } = data;

function Navbar() {
  const [active, setActive] = useState(false);
  return (
    <nav className="p-4 fromTab:p-6 mobileRange:bg-white  mobileRange:shadow-navContainer">
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
                <span className="text-2xl">{icon}</span>
                <p className="hidden fromLarge:block text-sm leading-[17px]">
                  {title}
                </p>
              </div>
            </NavLink>
          );
        })}
        {/* Navbar */}
      </ul>
    </nav>
  );
}

export default Navbar;

{
  /* <nav className="">
  <ul className="">
    <li className="">
      <NavLink>
        <i></i>
        <p></p>
      </NavLink>
    </li>
  </ul>
</nav>; */
}

{
  /* <li
  className={`${"text-primary fromTab:bg-white fromTab:rounded fromTab:shadow-menuActive"} cursor-pointer`}
  key={index}
>
  <NavLink
    to={route}
    className={(navInfo) => {
      return navInfo.isActive
        ? `text-primary fromTab:bg-white fromTab:rounded fromTab:shadow-menuActive`
        : ``;
    }}
  >
    <div>
      <span className="text-2xl">{icon}</span>
      <p className="hidden fromLarge:block">{title}</p>
    </div>
  </NavLink>
</li>; */
}
