import React, { useState } from "react";
import { icons } from "../../components";

const { DownIcon } = icons;

function Select({ options, profile }) {
  const [selected, setSelected] = useState(options[0]);
  const [activeOptions, setActiveOptions] = useState(false);

  const handleChange = (e) => {
    setSelected(e.target.value);
    setActiveOptions(false);
  };

  return (
    <>
      <div
        className={`${
          profile && "p-0 gap-1"
        } "relative flex items-center option cursor-pointer"`}
        onClick={() => {
          setActiveOptions(!activeOptions);
        }}
      >
        <div className="">{selected}</div>
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
          {options.map((item, i) => {
            return (
              <div className="option cursor-pointer">
                <input
                  type="radio"
                  value={item}
                  checked={selected.toLowerCase() == item.toLowerCase()}
                  id={item}
                  name="category"
                  onChange={handleChange}
                />
                <label className="cursor-pointer" htmlFor={item}>
                  {item}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Select;
