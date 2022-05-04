import React from "react";
import { icons, SearchBox } from "../../components";
import { images } from "../../constants";
import Select from "../Select/Select";

const { DownIcon, BellIcon } = icons;

function Header() {
  return (
    <div className=" bg-white text-neutral-9 flex py-3 pl-6 fromTab:px-6">
      <Select options={["Starbucks", "Lorem"]} />
      <SearchBox />
      <div className="flex ml-auto items-center gap-4">
        <span className="text-2xl">
          <BellIcon />
        </span>
        <div>
          <img src={images.Admin} />
        </div>
        <Select options={["John Doe", "Lorem"]} profile={true} />
      </div>
    </div>
  );
}

export default Header;
