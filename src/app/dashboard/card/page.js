import { FcSimCardChip } from "react-icons/fc";
import Image from "next/image";
import mastercard from "../../../components/mc_symbol.svg";
import { FaCircle, FaCreditCard, FaFilter, FaMusic, FaSignal } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { MdSettingsSuggest } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import { SiNetflix } from "react-icons/si";
import { CgGym } from "react-icons/cg";
import { FaSpotify } from "react-icons/fa";

import { VerticalSecondBar } from "@/components/chart/verticalSecondChart";
import { BiTransfer } from "react-icons/bi";

export default function Page() {
  return (
    <div className="flex flex-col m-4 gap-4 overflow-y-auto">
      <h1 className="text-2xl font-semibold">Credit Card</h1>
      <div className="w-full flex flex-row gap-4">
        <div className="w-5/12 flex flex-row gap-4">
          <div
            className="w-1/2 rounded-2xl"
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

          <div
            className="w-1/2 flex flex-col gap-4 p-4 rounded-2xl"
            style={{
              backgroundColor: "#f8f9fa",
            }}
          >
            <div>
              <h3 className="text-lg font-semibold">Credit Cards</h3>
              <hr class="h-[4px] my-2 bg-black border-0 dark:bg-white rounded-2xl"></hr>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-md font-thin">Type</h4>
              <div className="flex flex-row gap-4 items-center">
                <h4 className="font-semibold text-lg">Physical</h4>
                <div className="flex flex-row gap-2">
                  <FaCircle size={15} color="rgb(32, 178, 170)" />
                  <p className="font-thin">Active</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-md font-thin">IBAN</h4>
              <span className="flex flex-row justify-between gap-2">
                <h4 className="text-md ">NL15</h4>
                <h4 className="text-md ">INGB</h4>
                <h4 className="text-md ">2301</h4>
                <h4 className="text-md ">8972</h4>
                <h4 className="text-md ">5221</h4>
                <button>
                  <FaEyeSlash size={20} />
                </button>
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-md font-thin">Expiration Date</h4>
              <span className="flex flex-row items-center gap-4">
                <h4 className="text-md ">12/24</h4>
                <div className="flex flex-row gap-2">
                  <FaCircle size={15} color="#d62554ff" />
                  <p className="font-semibold" style={{ color: "#d62554ff" }}>
                    1 Month Left
                  </p>
                </div>
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-md font-thin">CVC</h4>
              <span className="flex flex-row items-center gap-4">
                <h4 className="text-md ">****</h4>
                <div className="flex flex-row gap-2 items-center justify-center">
                  <FaLock size={15} />
                  <p className="font-thin">Permission Required</p>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className="w-7/12 max-w-7/12 flex flex-col gap-4">
          <h1 className=" text-2xl font-semibold">Quick Action</h1>
          <div className="flex flex-row w-full gap-4">
            <div
              className="flex flex-col w-1/3 min-h-36 justify-center items-center gap-3"
              style={{ backgroundColor: "rgb(181, 220, 242)",width:"33.333%" }}
            >
              <div className="w-20 h-20 bg-white flex flex-row justify-center items-center rounded-full">
                <FaEye size={30} />
              </div>
              <p>Show PIN</p>
            </div>
            <div
              className="flex flex-col w-1/3 min-h-36 justify-center items-center gap-3"
              style={{ backgroundColor: "rgb(181, 220, 242)",width:"33.333%" }}
            >
              <div className="w-20 h-20 bg-white flex flex-row justify-center items-center rounded-full">
                <FaLock size={30} />
              </div>
              <p>Card Blocking</p>
            </div>
            <div
              className="flex flex-col  min-h-36 justify-center items-center gap-3"
              style={{ backgroundColor: "rgb(181, 220, 242)",width:"33.333%" }}
            >
              <div className="w-20 h-20 bg-white flex flex-row justify-center items-center rounded-full">
                <MdSettingsSuggest size={30} />
              </div>
              <p>Settings</p>
            </div>
          </div>
          <div className="flex flex-row w-full gap-4">
            <div
              className="flex flex-col  min-h-36 justify-center items-center gap-3"
              style={{ backgroundColor: "rgb(181, 220, 242)",width:"33.333%" }}
            >
              <div className="w-20 h-20 bg-white flex flex-row justify-center items-center rounded-full">
                <FaSignal size={30} />
              </div>
              <p>Limit</p>
            </div>
            <div
              className="flex flex-col  min-h-36 justify-center items-center gap-3"
              style={{ backgroundColor: "rgb(181, 220, 242)",width:"33.333%" }}
            >
              <div className="w-20 h-20 bg-white flex flex-row justify-center items-center rounded-full">
                <FaRegAddressCard size={30} />
              </div>
              <p>Address</p>
            </div>
            <div
              className="flex flex-col  min-h-36 justify-center items-center gap-3"
              style={{ backgroundColor: "rgb(181, 220, 242)" ,width:"33.333%"}}
            >
              <div className="w-20 h-20 bg-white flex flex-row justify-center items-center rounded-full">
                <FaCreditCard size={30} />
              </div>
              <p>Order Card</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row gap-4">
        <div className="h-80 min-h-80" style={{width :"50%"}}>
          <VerticalSecondBar />
        </div>
        <div className="flex flex-col gap-4 bg-black p-4" style={{width :"50%"}}>
          <span className="w-full flex flex-row justify-between">
            <h3 className="text-lg font-semibold text-white">My Subsription</h3>
            <button className="text-lg font-semibold text-white">Manage</button>
          </span>
          <hr
            class="h-[4px] my-2 bg-grey border-0 dark:bg-white rounded-2xl"
            style={{ backgroundColor: "rgb(85, 89, 95)" }}
          ></hr>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row justify-between items-center gap-4">
              <div
                className="w-14 h-14 rounded-full flex flex-row justify-center items-center"
                style={{ backgroundColor: "rgb(248, 249, 250)" }}
              >
                <SiNetflix size={30} />
              </div>
              <h3 className="text-lg font-semibold text-white">Netflix</h3>
            </div>
            <h3 className="text-lg font-semibold text-white">$23/month</h3>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row justify-between items-center gap-4">
              <div
                className="w-14 h-14 rounded-full flex flex-row justify-center items-center"
                style={{ backgroundColor: "rgb(248, 249, 250)" }}
              >
                <FaMusic size={30} />
              </div>
              <h3 className="text-lg font-semibold text-white">Spotify</h3>
            </div>
            <h3 className="text-lg font-semibold text-white">$23/month</h3>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row justify-between items-center gap-4">
              <div
                className="w-14 h-14 rounded-full flex flex-row justify-center items-center"
                style={{ backgroundColor: "rgb(248, 249, 250)" }}
              >
                <CgGym size={30} />
              </div>
              <h3 className="text-lg font-semibold text-white">Gym</h3>
            </div>
            <h3 className="text-lg font-semibold text-white">$23/month</h3>
          </div>
        </div>
      </div>
      


      <div className="w-full flex flex-col gap-4">
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
