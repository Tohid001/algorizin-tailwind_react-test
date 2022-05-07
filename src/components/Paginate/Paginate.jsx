import React from "react";
import CommonContainer from "./CommonContainer";
function Paginate() {
  return (
    <div className="flex px-4 justify-between">
      <CommonContainer content="10 Items per page" gap="gap-11" />
      <div className="flex gap-4">
        <CommonContainer content="Page 1 of 5" gap="gap-12" />
        <CommonContainer navigate="left" />
        <CommonContainer navigate="right" />
      </div>
    </div>
  );
}

export default Paginate;
