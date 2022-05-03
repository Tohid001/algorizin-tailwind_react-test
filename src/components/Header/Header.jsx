import React from "react";
import { icons, SearchBox } from "../../components";
import { images } from "../../constants";

const { DownIcon, BellIcon } = icons;

function Header() {
  return (
    <div className=" bg-white text-neutral-9 flex">
      <div>
        <p>Lorem</p>
        <span>
          <DownIcon />
        </span>
      </div>
      <SearchBox />
      <div className="flex">
        <span>
          <BellIcon />
        </span>
        <img src={images.Admin} />
        <div>
          <p>Lorem</p>
          <span>
            <DownIcon />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
