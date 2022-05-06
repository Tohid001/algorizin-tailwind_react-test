import React from "react";
import { data } from "../../constants";
import { ContentHeader, SearchBox, Checkbox, icons } from "../../components";

const { inventoryData } = data;
const { ArrowDown, ArrowTopBottom } = icons;

function Inventory() {
  return (
    <div>
      <ContentHeader title="Inventory" />
      <div className="p-2 fromLarge:p-6 fromTab:pl-6 fromTab:pr-10 fromTab:pt-11  ">
        <div className="shadow-dashCard rounded bg-white ">
          <div className="px-4 py-6 ">
            <SearchBox isheader={false} />
          </div>
          <table className="w-full">
            <thead className="  bg-warning-1   text-[13px] leading-[20px] text-neutral-9 font-medium w-full  ">
              <th className="pcell py-2.5 pl-0 hidden fromTab:table-cell">
                <Checkbox />
              </th>
              <th className="pcell py-2.5 hidden fromTab:table-cell">
                <div className="flex gap-1   items-center ">
                  <span className="text-left">Date Updated</span>
                  <span className="text-base  text-neutral-9 ">
                    <ArrowDown />
                  </span>
                </div>
              </th>
              <th className=" pcell py-2.5 text-left">
                <div className="flex gap-1   items-center ">
                  <span>Title</span>
                  <span className="text-base text-neutral-9  ">
                    <ArrowTopBottom />
                  </span>
                </div>
              </th>
              <th className="pcell py-2.5 text-left hidden fromLarge:table-cell">
                Details
              </th>
              <th className="pcell py-2.5 text-left mobileRange:text-transparent">
                Status
              </th>
              <th className="pcell py-2.5 text-right text-transparent froml  fromLarge:text-inherit">
                Quantity
              </th>
              <th className="pcell py-2.5 text-right hidden fromLarge:table-cell">
                Unit Price
              </th>
              <th className="pcell py-2.5 ">
                <div className="flex gap-1   items-center justify-end ">
                  <span className="">Amount</span>
                  <span className="text-base text-neutral-9  ">
                    <ArrowTopBottom />
                  </span>
                </div>
              </th>
            </thead>
            <tbody>
              {inventoryData.map(
                (
                  { date, details, title, status, unitPrice, quantity, Amount },
                  i
                ) => {
                  return (
                    <tr key={i} className="text-neutral-9 hover:bg-primary-1">
                      <td className="pcell hidden fromTab:table-cell">
                        <Checkbox />
                      </td>
                      <td className="pcell text-left hidden fromTab:table-cell">
                        {date}
                      </td>
                      <td className="text-left pcell">{title}</td>
                      <td className="pcell text-left hidden fromLarge:table-cell">
                        {details || "-"}
                      </td>
                      <td className="pcell text-left">
                        <div className="flex gap-2 items-center">
                          <span className="mobileRange:hidden">
                            {status.text}
                          </span>
                          <span
                            className={` w-2 h-2 rounded-full ${
                              typeof status.green === "boolean"
                                ? status.green === true
                                  ? "bg-success"
                                  : "bg-warning"
                                : "bg-error"
                            }`}
                          ></span>
                        </div>
                      </td>
                      <td className="pcell text-right">
                        <span className="font-bold text-base">
                          {quantity.split("/")[0]}
                        </span>
                        <span>/</span>
                        <span>{quantity.split("/")[1]}</span>
                      </td>
                      <td className="pcell text-right hidden fromLarge:table-cell">
                        {unitPrice}
                      </td>
                      <td className="pcell text-right">{Amount}</td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Inventory;
