import React from "react";
import { icons } from "../index";

const { SearchIcon } = icons;

function SearchBox({ isheader = true }) {
  return (
    <div
      className={`${
        isheader && "mobileRange:hidden"
      } flex items-center gap-2 bg-neutral-2 rounded-lg pl-3`}
    >
      <span className="text-xl text-neutral-8">
        <SearchIcon />
      </span>
      <input
        placeholder="Search"
        className="placeholder:text-neutral-8 focus:outline-none"
      />
    </div>
  );
}

export default SearchBox;
