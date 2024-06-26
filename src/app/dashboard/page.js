import React from "react";
import { CircleArrowUp } from "lucide-react";
import { RiArrowDropUpFill, RiArrowDropDownFill } from "react-icons/ri";
import { VerticalBar } from "@/components/chart/verticalChart";
import { VerticalSecondBar } from "@/components/chart/verticalSecondChart";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { BsGraphUpArrow } from "react-icons/bs";
import { BiTransfer } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";

export default function Page() {
  return (
    <div className="flex flex-row max-lg:flex-col m-4 gap-4 ">
      <div className="flex flex-col w-3/5 max-lg:w-full gap-4">
        <div className="flex flex-row gap-4 w-full min-h-48 max-h-48 max-sm:flex-col ">
          <div className="flex flex-col w-3/4 max-sm:w-full bg-balanceCard  p-4 gap-4">
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
          <div className="w-5/12 max-sm:w-full bg-balanceCard flex flex-col p-4">
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
        <div className="flex flex-row gap-4 h-80 min-h-80">
          <VerticalSecondBar />
        </div>
        <div className=" flex flex-row max-sm:flex-col gap-4">
          <div
            className="flex flex-col p-4 w-1/2 max-sm:w-full bg-balanceCard rounded-xl"
          >
            <div className="flex flex-row w-full justify-between ">
              <h4 className="text-xl text-[#233d60] font-bold">Goals</h4>
              <div className="flex flex-row">
                <IoIosArrowBack size={18} color={"#233d60"} />
                <IoIosArrowForward size={18} color={"#233d60"} />
              </div>
            </div>
            <p className="text-sm text-[#233d60]/60">Summer Vacation</p>
            <div className="flex flex-row gap-4 w-full mt-4 items-center">
              <BsGraphUpArrow size={50} color={"#233d60"} />
              <div className="w-full flex flex-col gap-1">
                <h2 className="text-lg text-[#233d60] font-semibold">62% Reached</h2>
                <div className="w-full bg-[#a9c2d5]/40 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-[#233d60] h-2.5 rounded-full"
                    style={{ width: "45%" }}
                  ></div>
                </div>
                <p className="text-sm text-[#233d60]/60">$1,234 out of $2,435</p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col p-4 w-1/2 max-sm:w-full gap-2 bg-balanceCard rounded-xl"
          >
            <h4 className="text-md font-bold text-[#233d60]">Spending Overview</h4>
            <div className="flex flex-row gap-4 items-center">
              <div className="w-7/12 bg-[#a9c2d5]/40 rounded-full  h-2.5 dark:bg-gray-700">
                <div className="bg-[#233d60] h-2.5 rounded-full" style={{ width: "45%" }}></div>
              </div>
              <span className="text-sm text-[#233d60]/60">68% Groceries</span>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <div className="w-7/12 bg-[#a9c2d5]/40 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-[#233d60] h-2.5 rounded-full" style={{ width: "45%" }}></div>
              </div>
              <span className="text-sm text-[#233d60]/60">68% Groceries</span>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <div className="w-7/12 bg-[#a9c2d5]/40 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-[#233d60] h-2.5 rounded-full" style={{ width: "45%" }}></div>
              </div>
              <span className="text-sm text-[#233d60]/60">68% Groceries</span>
            </div>{" "}
            <div className="flex flex-row gap-4 items-center">
              <div className="w-7/12 bg-[#a9c2d5]/40 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-[#233d60] h-2.5 rounded-full " style={{ width: "45%" }}></div>
              </div>
              <span className="text-sm text-[#233d60]/60">68% Groceries</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-2/5 max-lg:w-full gap-4 pr-4">
        <div className="flex flex-row justify-between w-full">
          <h1 className="text-2xl font-semibold">Transactions</h1>
          <button className="text-sm font-thin">View All</button>
        </div>
        <div className="flex flex-row gap-4">
          <button className="text-sm font-thin">All</button>
          <button className="text-sm font-thin">Expenses</button>
          <button className="text-sm font-thin">Income</button>
        </div>
        <div className="flex flex-col w-full mt-3">
          <div className="flex flex-row justify-between w-full items-center py-4">
            <div className="flex flex-row gap-4">
              <div className="rounded-full w-10 h-10 bg-[#233d60] flex flex-row justify-center items-center">
                <BiTransfer backgroundColor={"#233d60"} color="white" size={25} />
              </div>
              <div className="flex flex-col">
                <h4 className="text-md font-semibold">Goals</h4>
                <h4 className="text-sm font-thin">Spending Overview</h4>
              </div>
            </div>
            <h1 className="text-lg font-bold ">+1,000,000</h1>
          </div>
          <div className="flex flex-row justify-between w-full items-center py-4">
            <div className="flex flex-row gap-4">
              <div className="rounded-full w-10 h-10 bg-[#233d60] flex flex-row justify-center items-center">
                <BiTransfer backgroundColor={"#233d60"} color="white" size={25} />
              </div>
              <div className="flex flex-col">
                <h4 className="text-md font-semibold">Goals</h4>
                <h4 className="text-sm font-thin">Spending Overview</h4>
              </div>
            </div>
            <h1 className="text-lg font-bold ">+1,000,000</h1>
          </div>
          <div className="flex flex-row justify-between w-full items-center py-4">
            <div className="flex flex-row gap-4">
              <div className="rounded-full w-10 h-10 bg-[#233d60] flex flex-row justify-center items-center">
                <BiTransfer backgroundColor={"red"} color="white" size={25} />
              </div>
              <div className="flex flex-col">
                <h4 className="text-md font-semibold">Goals</h4>
                <h4 className="text-sm font-thin">Spending Overview</h4>
              </div>
            </div>
            <h1 className="text-lg font-bold ">+1,000,000</h1>
          </div>
          <div className="flex flex-row justify-between w-full items-center py-4">
            <div className="flex flex-row gap-4">
              <div className="rounded-full w-10 h-10 bg-[#233d60] flex flex-row justify-center items-center">
                <BiTransfer backgroundColor={"red"} color="white" size={25} />
              </div>
              <div className="flex flex-col">
                <h4 className="text-md font-semibold">Goals</h4>
                <h4 className="text-sm font-thin">Spending Overview</h4>
              </div>
            </div>
            <h1 className="text-lg font-bold ">+1,000,000</h1>
          </div>
          <div className="flex flex-row justify-between w-full items-center py-4">
            <div className="flex flex-row gap-4">
              <div className="rounded-full w-10 h-10 bg-[#233d60] flex flex-row justify-center items-center">
                <BiTransfer backgroundColor={"red"} color="white" size={25} />
              </div>
              <div className="flex flex-col">
                <h4 className="text-md font-semibold">Goals</h4>
                <h4 className="text-sm font-thin">Spending Overview</h4>
              </div>
            </div>
            <h1 className="text-lg font-bold ">+1,000,000</h1>
          </div>
          <div className="flex flex-row justify-between w-full py-4 items-center">
            <div className="flex flex-row gap-4">
              <div className="rounded-full w-10 h-10 bg-[#233d60] flex flex-row justify-center items-center">
                <BiTransfer backgroundColor={"red"} color="white" size={25} />
              </div>
              <div className="flex flex-col">
                <h4 className="text-md font-semibold">Goals</h4>
                <h4 className="text-sm font-thin">Spending Overview</h4>
              </div>
            </div>
            <h1 style={{ color: "#20b2aaff" }} className="text-lg font-bold ">
              +1,000,000
            </h1>
          </div>
        </div>
        <div
          className="w-full flex flex-col p-4 min-h-40 bg-balanceCard">
          <div className="flex flex-row w-full justify-between ">
            <h4 className="text-md font-semibold text-[#233d60]">Quick Transfer</h4>
            <div className="flex flex-row">
              <IoIosArrowBack size={10} color="white" />
              <IoIosArrowForward size={10} color="white" />
            </div>
          </div>
          <div className="flex flex-row flex-wrap p-4 gap-8 rounded-xl ">
        

            <div className="flex flex-col gap-4 items-center">
              <button
                className=" bg-[#233d60] w-10 h-10 rounded-full flex flex-row justify-center items-center"
                
              >
                <IoMdAdd size={20}  color="white"/>
              </button>
              <h4 className="text-center text-sm font-thin text-[#233d60]">Add new</h4>
            </div>
            <div className="flex flex-col gap-4 items-center">
            <img class="w-10 h-10 rounded-full" src="https://github.com/shadcn.png" alt="Rounded avatar"/>
              <h4 className="text-center text-sm font-thin text-[#233d60]">Maaz</h4>
            </div> <div className="flex flex-col gap-4 items-center">
            <img class="w-10 h-10 rounded-full" src="https://github.com/shadcn.png" alt="Rounded avatar"/>
              <h4 className="text-center text-sm font-thin text-[#233d60]">Wanoo</h4>
            </div> <div className="flex flex-col gap-4 items-center ">
            <img class="w-10 h-10 rounded-full" src="https://github.com/shadcn.png" alt="Rounded avatar"/>
              <h4 className="text-center text-sm font-thin text-[#233d60]">Saboor</h4>
            </div> 
            <div className="flex flex-col gap-4 items-center ">
            <img class="w-10 h-10 rounded-full" src="https://github.com/shadcn.png" alt="Rounded avatar"/>
              <h4 className="text-center text-sm font-thin text-[#233d60]">Sufi</h4>
            </div>
            <div className="hidden flex-col gap-4 items-center xl:flex ">
            <img class="w-10 h-10 rounded-full" src="https://github.com/shadcn.png" alt="Rounded avatar"/>
              <h4 className="text-center text-sm font-thin text-[#233d60]">Boota</h4>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}
