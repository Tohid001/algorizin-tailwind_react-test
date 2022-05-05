import React from "react";
import { data } from "../../constants";
import { ContentHeader } from "../../components";

const { dashBoardData } = data;

function Dashboard() {
  return (
    <div>
      <ContentHeader title="Inventory" />
      <div className="p-4 fromTab:p-6 flex flex-wrap gap-4">
        {dashBoardData.map(({ title, icon, text_1, text_2 }, i) => {
          return (
            <div
              key={i}
              className={`bg-white py-8 pl-6 pr-2 rounded shadow-dashCard basis-full fromTab:even:basis-0 fromTab:last:basis-0 fromLarge:basis-0  flex-1 `}
            >
              <div className="flex  gap-2">
                <span
                  className={`block rounded-full grid place-items-center w-12 h-12 text-2xl leading-[0px] ${
                    i == 0
                      ? "bg-primary-1 text-primary"
                      : i == 2
                      ? "bg-error-1 text-error"
                      : "bg-warning-1 text-warning"
                  }`}
                >
                  {icon}
                </span>
                <div className="text-[13px] leading-[20px] font-medium text-neutral-8">
                  <p className="">{title}</p>
                  <p className="flex gap-2 items-center">
                    <span className="text-neutral-9 font-bold text-xl leading-[32px]">
                      {text_1}
                    </span>
                    {text_2 && (
                      <span className="inline-block py-.5 px-2 rounded-[32px]  bg-[#F2F2F3]">
                        {text_2}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
