import React from "react";
import { icons, SearchBox } from "../../components";
import { images } from "../../constants";
import Select from "../Select/Select";

const { DownIcon, BellIcon } = icons;

function Header() {
  return (
    <div className=" bg-white text-neutral-9 flex">
      <Select />
      <SearchBox />
      <div className="flex">
        <span>
          <BellIcon />
        </span>
        <div>
          <img src={images.Admin} />
        </div>
        <Select />
      </div>
    </div>
  );
}

export default Header;
