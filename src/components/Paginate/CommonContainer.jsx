import React from "react";
import { icons } from "../index";

const { PaginateIcon } = icons;
function CommonContainer({ counter, content, navigate, gap }) {
  return (
    <div
      className={`paginate ${gap} ${!counter && "first:mobileRange:hidden"}`}
    >
      {content && <p className=" text-[13px] leading-[20px]">{content}</p>}
      <span
        className={`text-2xl ${
          navigate == "right"
            ? "-rotate-90"
            : navigate == "left"
            ? "rotate-90"
            : ""
        }`}
      >
        <PaginateIcon />
      </span>
    </div>
  );
}

export default CommonContainer;
