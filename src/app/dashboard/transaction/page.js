import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CircleArrowUp } from "lucide-react";
import { GrShare } from "react-icons/gr";
import { BiTransfer } from "react-icons/bi";
import mastercard from "../../../components/mc_symbol.svg";
import Image from "next/image";
import { FcSimCardChip } from "react-icons/fc";
import { RiArrowDropDownFill, RiArrowDropUpFill } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward, IoMdAdd } from "react-icons/io";
import { VerticalSecondBar } from "@/components/chart/verticalSecondChart";
import { FaFilter } from "react-icons/fa";
import { PieChart } from "@/components/chart/pieChart";
import { VerticalBar } from "@/components/chart/verticalChart";
import { TopCategoriesChart } from "@/components/chart/topCategoriesChart";

export default function Page() {
  return (
    <div className="flex flex-row m-4 gap-4 overflow-y-auto p-4">
      <div className="flex flex-col w-3/5 gap-4">
        <h1 className="text-2xl font-semibold">Select Payer</h1>
        <Select defaultValue={"checking"}>
          <SelectTrigger className="w-1/4 bg-black text-white">
            <SelectValue placeholder="Select Account" className="text-white" />
          </SelectTrigger>
          <SelectContent className="text-white bg-black">
            <SelectItem className="text-white" value="checking">
              Checking Account
            </SelectItem>
            <SelectItem className="text-white" value="saving">
              Saving
            </SelectItem>
          </SelectContent>
        </Select>
        <div className="flex flex-row gap-4 ">
          <div className="flex flex-col w-3/4 p-4 bg-black gap-4">
            <div className="flex flex-row justify-between">
              <h1 className="text-white text-lg font-semibold">
                Checking Account
              </h1>
              <div className="flex flex-row items-center">
                <h3 className="text-stockInc font-semibold flex flex-row items-center gap-2">
                  <CircleArrowUp size={20} color={"#5cb4ab"} />
                  2,36%
                </h3>
              </div>
            </div>
            <div>
              <h4 className="text-md font-thin text-white">Balance</h4>
              <h1
                className="text-white text-3xl font-semibold"
                style={{ color: "#b5f2e5ff" }}
              >
                10,000 USD
              </h1>
              Ï
            </div>

            <div>
              <h4 className="text-md font-thin text-white">Available</h4>
              <h1
                className="text-white text-lg font-semibold"
                style={{ color: "#b5f2e5ff" }}
              >
                80,000 USD
              </h1>
            </div>

            <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"></hr>

            <div className="flex flex-row gap-4 justify-between">
              <div className="flex flex-col">
                <div className="flex flex-row items-center">
                  <RiArrowDropUpFill size={40} color="#5cb4ab" />
                  <h4 className="text-lg text-white">Income</h4>
                </div>

                <h3 className="font-bold text-1xl text-white">USD 1,000,000</h3>
              </div>
              <div class="h-60px bg-white w-[2px]"></div>
              <div className="flex flex-col">
                <div className="flex flex-row items-center">
                  <RiArrowDropDownFill size={40} color="#D94E53" />
                  <h4 className="text-lg text-white">Expenses</h4>
                </div>

                <h3 className="text-white text-1xl font-bold">USD 1,000,000</h3>
              </div>
            </div>
          </div>
          <div
            className="w-2/5 rounded-2xl"
            style={{
              backgroundColor: "rgb(254, 192, 167)",
            }}
          >
            <div className="flex flex-row p-4 justify-between items-center">
              <Image
                className="w-20 h-20"
                src={mastercard}
                alt="Rounded avatar"
              />
              <FcSimCardChip size={60} />
            </div>
            <div className="flex flex-col gap-2 p-6">
              <h4 className="text-black">Available Balance</h4>
              <h2 className="text-black text-2xl font-bold">USD 100,000.00</h2>
            </div>
            <div className="flex flex-col p-6">
              <div className="flex flex-row gap-2">
                <span>1111</span>
                <span>****</span>
                <span>****</span>
                <span>0000</span>
              </div>
              <div className="flex flex-row justify-between mt-12">
                <p>Nocile Rah</p>
                <p>12/14</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <h1 className="text-2xl font-semibold">Spending Overview</h1>
          <div className="flex flex-row items-center">
            <IoIosArrowBack size={20} />
            <IoIosArrowForward size={20} />
          </div>
        </div>
        <div className="flex flex-row gap-4  h-80 min-h-80">
          <VerticalSecondBar />
        </div>
      </div>

      <div className="w-3/6 flex flex-col gap-4 p-4">
        <div className="flex flex-row justify-between w-full">
          <h1 className="text-2xl text-black font-semibold">Transactions</h1>
          <button className="text-sm font-thin">
            <FaFilter size={20} />
          </button>
        </div>
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:placeholder-gray-400 dark:text-white"
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
          style={{backgroundColor:"rgb(112, 112, 113)"}}
            type="submit"
            class="text-white absolute end-2.5 bottom-2.5 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
          >
            Search
          </button>
        </div>
        <div className="flex flex-row gap-4">
          <button className="text-sm font-thin">All</button>
          <button className="text-sm font-thin">Expenses</button>
          <button className="text-sm font-thin">Income</button>
        </div>
        <div className="flex flex-col w-full ">
            <h3 className="text-sm font-thin my-2">Pending</h3>
          <div className="flex flex-row justify-between w-full items-center py-4">
            <div className="flex flex-row gap-4">
              <div className="rounded-full w-10 h-10 bg-black flex flex-row justify-center items-center">
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
              <div className="rounded-full w-10 h-10 bg-black flex flex-row justify-center items-center">
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
              <div className="rounded-full w-10 h-10 bg-black flex flex-row justify-center items-center">
                <BiTransfer backgroundColor={"red"} color="white" size={25} />
              </div>
              <div className="flex flex-col">
                <h4 className="text-md font-semibold">Goals</h4>
                <h4 className="text-sm font-thin">Spending Overview</h4>
              </div>
            </div>
            <h1 className="text-lg font-bold ">+1,000,000</h1>
          </div>
          <h3 className="text-sm font-thin my-2">Today</h3>
          <div className="flex flex-row justify-between w-full items-center py-4">
            <div className="flex flex-row gap-4">
              <div className="rounded-full w-10 h-10 bg-black flex flex-row justify-center items-center">
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
              <div className="rounded-full w-10 h-10 bg-black flex flex-row justify-center items-center">
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
              <div className="rounded-full w-10 h-10 bg-black flex flex-row justify-center items-center">
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
          <h3 className="text-sm font-thin my-2">21 January 2024</h3>
          <div className="flex flex-row justify-between w-full py-4 items-center">
            <div className="flex flex-row gap-4">
              <div className="rounded-full w-10 h-10 bg-black flex flex-row justify-center items-center">
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
          <div className="flex flex-row justify-between w-full py-4 items-center">
            <div className="flex flex-row gap-4">
              <div className="rounded-full w-10 h-10 bg-black flex flex-row justify-center items-center">
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
      </div>
    </div>
  );
}
