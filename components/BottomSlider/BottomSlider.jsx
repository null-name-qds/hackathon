import React from "react";
import { MdOutlineArrowUpward } from "react-icons/md";
import Chart from "../Chart/Chart";

export default function BottomSlider() {
  return (
    <>
      <div className="w-full bg-[#F3F3FE] py-4 fixed z-[999] bottom-[-150px] min-h-[200px]">
        <MdOutlineArrowUpward className="mx-auto" />
        <div className="">
            <Chart />
        </div>
      </div>
    </>
  );
}
