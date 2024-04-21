import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GrShare } from "react-icons/gr";
import { BiTransfer } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward, IoMdAdd } from "react-icons/io";

export default function Page() {
  return (
    <div className="flex flex-row m-4 gap-4 max-lg:flex-col">
      <div className="flex flex-col w-2/6 max-lg:w-full gap-4">
        <h1 className="text-2xl font-semibold">Select Payer</h1>
        <Select defaultValue={"checking"}>
          <SelectTrigger className="w-full bg-balanceCard ">
            <SelectValue placeholder="Select Account"  />
          </SelectTrigger>
          <SelectContent className=" bg-balanceCard">
            <SelectItem value="checking">
              Checking Account
            </SelectItem>
            <SelectItem value="saving">
              Saving
            </SelectItem>
          </SelectContent>
        </Select>
        <div className="flex flex-col ">
          <div className="flex flex-col p-4 bg-balanceCard gap-4">
            <h1 className="text-[#233d60] text-lg font-semibold">
              Checking Account
            </h1>
            <h4 className="text-lg font-light text-[#233d60]">Balance</h4>
            <h1
              className=" text-3xl font-bold"
              style={{ color: "#51dbbd" }}
            >
              10,000 USD
            </h1>
            <hr class="h-px my-3 bg-[#233d60] border-0 dark:bg-gray-700"></hr>
            <h4 className="text-md font-thin">IBAN</h4>
            <span className="flex flex-row justify-between">
              <h4 className="text-lg">NL15</h4>
              <h4 className="text-lg ">INGB</h4>
              <h4 className="text-lg ">2301</h4>
              <h4 className="text-lg ">8972</h4>
              <h4 className="text-lg ">5221</h4>
            </span>
            <h4 className="text-md font-thin ">Account Owner</h4>
            <h2 className="text-lg">Abdul Saboor</h2>
          </div>
          <button
            className="w-full min-h-12 flex felx-row justify-center gap-2 items-center bg-[#233d60] text-white"
           
          >
            <GrShare size={20} />
            <p>Share IBAN</p>
          </button>
          <button
            className="w-full min-h-12 flex   border-[#233d60] border-2 flex-row bor justify-center items-center gap-2"
          
          >
            <BiTransfer size={20} />
            <p>Reuqest Payment</p>
          </button>
        </div>

        <div
          className="w-full flex flex-col p-4 min-h-40 flex-wrap"
          style={{
            backgroundColor: "rgb(235, 243, 249)",
          }}
        >
          <div className="flex flex-row w-full justify-between ">
            <h4 className="text-md font-semibold ">
              Saved Beneficiries
            </h4>
            <button className=" text-sm">View All</button>
          </div>
          <div className="flex flex-row p-4 gap-8 flex-wrap">
            <div className="flex flex-col gap-4 items-center">
              <button className="w-10 h-10 rounded-full flex flex-row justify-center items-center bg-black">
                <IoMdAdd color="white" size={20} />
              </button>
              <h4 className="text-center text-sm font-thin ">
                Add new
              </h4>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <img
                class="w-10 h-10 rounded-full"
                src="https://github.com/shadcn.png"
                alt="Rounded avatar"
              />
              <h4 className="text-center text-sm font-thin ">Maaz</h4>
            </div>{" "}
            <div className="flex flex-col gap-4 items-center">
              <img
                class="w-10 h-10 rounded-full"
                src="https://github.com/shadcn.png"
                alt="Rounded avatar"
              />
              <h4 className="text-center text-sm font-thin ">
                Wanoo
              </h4>
            </div>{" "}
            <div className="flex flex-col gap-4 items-center">
              <img
                class="w-10 h-10 rounded-full"
                src="https://github.com/shadcn.png"
                alt="Rounded avatar"
              />
              <h4 className="text-center text-sm font-thin ">
                Saboor
              </h4>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <img
                class="w-10 h-10 rounded-full"
                src="https://github.com/shadcn.png"
                alt="Rounded avatar"
              />
              <h4 className="text-center text-sm font-thin ">
                Saboor
              </h4>
            </div>{" "}
            <div className="flex flex-col gap-4 items-center">
              <img
                class="w-10 h-10 rounded-full"
                src="https://github.com/shadcn.png"
                alt="Rounded avatar"
              />
              <h4 className="text-center text-sm font-thin ">
                Saboor
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-7/12  max-lg:w-full gap-4">
        <h1 className="text-2xl font-semibold">Transfer to</h1>

        <div className="w-full flex flex-col gap-4">
          <h2 className="text-lg ">Beneficiries</h2>
          <div>
            <label
              for="iban"
              class="block mb-2 text-sm font-medium  dark:text-white"
            >
              IBAN
            </label>
            <input
              type="text"
              id="iban"
              class="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5 "
              placeholder="John"
              required
            />
          </div>
          <div>
            <label
              for="amount"
              class="block mb-2 text-sm font-medium  dark:text-white"
            >
              Amount
            </label>
            <input
              type="text"
              id="amount"
              class="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5 "
              placeholder="John"
              required
            />
          </div>
          <label
            for="date"
            class="block text-sm font-medium  dark:text-white"
          >
            Date
          </label>
          <input
            type="text"
            id="iban"
            class="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5 "
            placeholder="John"
            required
          />
          <h2 className="text-lg ">Other Data</h2>
          <div className="flex flex-row w-full gap-4">
            <div className="w-full">
              <label
                for="iban"
                class="block mb-2 text-sm font-medium  dark:text-white"
              >
                IBAN
              </label>
              <input
                type="text"
                id="iban"
                class="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5 "
                placeholder="John"
                required
              />
            </div>
            <div className="w-full">
              <label
                for="iban"
                class="block mb-2 text-sm font-medium  dark:text-white"
              >
                IBAN
              </label>
              <input
                type="text"
                id="iban"
                class="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5 "
                placeholder="John"
                required
              />
            </div>
          </div>
          <div className="flex flex-row w-full gap-4">
            <div className="w-full">
              <label
                for="iban"
                class="block mb-2 text-sm font-medium  dark:text-white"
              >
                IBAN
              </label>
              <input
                type="text"
                id="iban"
                class="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5 "
                placeholder="John"
                required
              />
            </div>
            <div className="w-full">
              <label
                for="iban"
                class="block mb-2 text-sm font-medium  dark:text-white"
              >
                IBAN
              </label>
              <input
                type="text"
                id="iban"
                class="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5 "
                placeholder="John"
                required
              />
            </div>
          </div>
          <div className="w-full">
            <label
              for="iban"
              class="block mb-2 text-sm font-medium  dark:text-white"
            >
              IBAN
            </label>
            <input
              type="text"
              id="iban"
              class="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5 "
              placeholder="John"
              required
            />
          </div>
        </div>
        <button className="mt-4 w-full bg-[#233d60] p-4 min-h-12 text-white text-sm">
          Continue
        </button>
      </div>
    </div>
  );
}
