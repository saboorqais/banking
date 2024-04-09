import React from "react";
import { CircleArrowUp } from "lucide-react";
import { RiArrowDropUpFill, RiArrowDropDownFill } from "react-icons/ri";
import { VerticalBar } from "@/components/chart/verticalChart";
import { VerticalSecondBar } from "@/components/chart/verticalSecondChart";

export default function Page() {
  return (
    <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 m-6">
      <div className="col-span-2">
        <div className="flex flex-row gap-4 min-w-full max-h-48">
          <div className="flex flex-col w-1/2 bg-balanceCard  p-4 gap-4">
            <div className="flex flex-row justify-between w-full">
              <h3 className="font-semibold">Total balance</h3>
              <h3 className="text-stockInc font-semibold flex flex-row items-center gap-2">
                <CircleArrowUp size={20} color={"#5cb4ab"} />
                2,36%
              </h3>
            </div>
            <h1 className="text-2xl font-bold">USD 1,000,000</h1>
            <div className="flex flex-row gap-4 justify-between">
              <div className="flex flex-col">
                <div className="flex flex-row items-center">
                  <RiArrowDropUpFill size={40} color="#5cb4ab" />
                  <h4 className="text-sm">Income</h4>
                </div>

                <h3 className="text-sm font-bold">USD 1,000,000</h3>
              </div>
              <div class="h-60px bg-greyBorder w-[.5px]"></div>
              <div className="flex flex-col">
                <div className="flex flex-row items-center">
                  <RiArrowDropDownFill size={40} color="#D94E53" />
                  <h4 className="text-sm">Income</h4>
                </div>

                <h3 className="text-sm font-bold">USD 1,000,000</h3>
              </div>
            </div>
          </div>
          <div className="w-4/12  bg-balanceCard flex flex-col p-4">
            <div className="flex flex-row justify-between w-full">
              <h3 className="font-semibold">Total balance</h3>
              <h3 className="text-stockInc font-semibold flex flex-row items-center gap-2">
                <CircleArrowUp size={20} color={"#5cb4ab"} />
                2,36%
              </h3>
            </div>
            <h1 className="my-4 text-lg font-bold">USD 1,000,000</h1>
            <div className="min-h-12 mt-4">
              <VerticalBar />
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4 min-w-full max-h-44">
          <VerticalSecondBar/>  
        </div>
      </div>
      <div>03</div>
    </div>
  );
}
