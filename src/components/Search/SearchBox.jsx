import React from "react";
import { icons } from "../index";

const { SearchIcon } = icons;

function SearchBox({ isheader = true }) {
  return (
    <div
      className={`${
        isheader ? "mobileRange:hidden fromLarge:ml-32 " : "mobileRange:w-full"
      } py-2 flex w-[392px] items-center gap-2 bg-neutral-2 rounded-lg px-3 `}
    >
      <span className="text-xl text-neutral-8">
        <SearchIcon />
      </span>
      <input
        type="text"
        placeholder="Search"
        className="placeholder:text-neutral-8 focus:outline-none w-full "
      />
    </div>
  );
}

export default SearchBox;
