import React from "react";

function Contentheader({ title }) {
  return (
    <div className="p-4 border-b border-neutral-2  text-xl font-bold text-neutral-9">
      {title}
    </div>
  );
}

export default Contentheader;
