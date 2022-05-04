import React, { useState } from "react";
import { icons } from "../../components";

const { DownIcon } = icons;

function Select() {
  const [selected, setSelected] = useState("starbucks");
  const [activeOptions, setActiveOptions] = useState(false);

  const handleChange = (e) => {
    setSelected(e.target.value);
    setActiveOptions(false);
  };

  return (
    <div>
      <div
        className="relative flex items-center option cursor-pointer"
        onClick={() => {
          setActiveOptions(!activeOptions);
        }}
      >
        <div>{selected}</div>
        <span className="text-2xl pointer-events-none">
          <DownIcon />
        </span>
        <div
          className={`${
            !activeOptions
              ? "hidden"
              : " absolute left-0 -bottom-20 bg-slate-400"
          } `}
        >
          <div className="option cursor-pointer">
            <input
              type="radio"
              value="Starbucks"
              checked={selected.toLowerCase() == "Tutorials".toLowerCase()}
              id="Starbucks"
              name="category"
              onChange={handleChange}
            />
            <label className="cursor-pointer" htmlFor="Starbucks">
              Starbucks
            </label>
          </div>

          <div className="option cursor-pointer">
            <input
              type="radio"
              value="lorem"
              checked={selected.toLowerCase() == "Tutorials".toLowerCase()}
              id="lorem"
              name="category"
              onChange={handleChange}
            />
            <label className="cursor-pointer" htmlFor="lorem">
              lorem
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Select;
