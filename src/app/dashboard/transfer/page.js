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
    <div className="flex flex-row m-4 gap-4 px-4">
      <div className="flex flex-col w-2/6 gap-4">
        <h1 className="text-2xl font-semibold">Select Payer</h1>
        <Select defaultValue={"checking"}>
          <SelectTrigger className="w-full bg-black text-white">
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
        <div className="flex flex-col">
          <div className="flex flex-col p-4 bg-black gap-4">
            <h1 className="text-white text-lg font-semibold">
              Checking Account
            </h1>
            <h4 className="text-md font-thin text-white">Balance</h4>
            <h1
              className="text-white text-3xl font-semibold"
              style={{ color: "#b5f2e5ff" }}
            >
              10,000 USD
            </h1>
            <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <h4 className="text-md font-thin text-white">IBAN</h4>
            <span className="flex flex-row justify-between">
              <h4 className="text-lg text-white">NL15</h4>
              <h4 className="text-lg text-white">INGB</h4>
              <h4 className="text-lg text-white">2301</h4>
              <h4 className="text-lg text-white">8972</h4>
              <h4 className="text-lg text-white">5221</h4>
            </span>
            <h4 className="text-md font-thin text-white">Account Owner</h4>
            <h2 className="text-lg text-white">Abdul Saboor</h2>
          </div>
          <button
            className="w-full min-h-12 flex felx-row justify-center gap-2 items-center"
            style={{
              backgroundColor: "rgb(198, 181, 242)",
            }}
          >
            <GrShare size={20} />
            <p>Share IBAN</p>
          </button>
          <button
            className="w-full min-h-12 flex flex-row justify-center items-center gap-2"
            style={{
              backgroundColor: "rgb(254, 192, 167)",
            }}
          >
            <BiTransfer size={20} />
            <p>Reuqest Payment</p>
          </button>
        </div>

        <div
          className="w-full flex flex-col p-4 min-h-40 max-h-40"
          style={{
            backgroundColor: "rgb(235, 243, 249)",
          }}
        >
          <div className="flex flex-row w-full justify-between ">
            <h4 className="text-md font-semibold text-black">
              Saved Beneficiries
            </h4>
            <button className="text-black text-sm">View All</button>
          </div>
          <div className="flex flex-row p-4 gap-8">
            <div className="flex flex-col gap-4 items-center">
              <button className="w-10 h-10 rounded-full flex flex-row justify-center items-center bg-black">
                <IoMdAdd color="white" size={20} />
              </button>
              <h4 className="text-center text-sm font-thin text-black">
                Add new
              </h4>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <img
                class="w-10 h-10 rounded-full"
                src="https://github.com/shadcn.png"
                alt="Rounded avatar"
              />
              <h4 className="text-center text-sm font-thin text-black">Maaz</h4>
            </div>{" "}
            <div className="flex flex-col gap-4 items-center">
              <img
                class="w-10 h-10 rounded-full"
                src="https://github.com/shadcn.png"
                alt="Rounded avatar"
              />
              <h4 className="text-center text-sm font-thin text-black">
                Wanoo
              </h4>
            </div>{" "}
            <div className="flex flex-col gap-4 items-center">
              <img
                class="w-10 h-10 rounded-full"
                src="https://github.com/shadcn.png"
                alt="Rounded avatar"
              />
              <h4 className="text-center text-sm font-thin text-black">
                Saboor
              </h4>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <img
                class="w-10 h-10 rounded-full"
                src="https://github.com/shadcn.png"
                alt="Rounded avatar"
              />
              <h4 className="text-center text-sm font-thin text-black">
                Saboor
              </h4>
            </div>{" "}
            <div className="flex flex-col gap-4 items-center">
              <img
                class="w-10 h-10 rounded-full"
                src="https://github.com/shadcn.png"
                alt="Rounded avatar"
              />
              <h4 className="text-center text-sm font-thin text-black">
                Saboor
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-7/12 gap-4">
        <h1 className="text-2xl font-semibold">Transfer to</h1>

        <div className="w-full flex flex-col gap-4">
          <h2 className="text-lg text-black">Beneficiries</h2>
          <div>
            <label
              for="iban"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              IBAN
            </label>
            <input
              type="text"
              id="iban"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label
              for="amount"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Amount
            </label>
            <input
              type="text"
              id="amount"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>
          <label
            for="date"
            class="block text-sm font-medium text-gray-900 dark:text-white"
          >
            Date
          </label>
          <input
            type="text"
            id="iban"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            required
          />
          <h2 className="text-lg text-black">Other Data</h2>
          <div className="flex flex-row w-full gap-4">
            <div className="w-full">
              <label
                for="iban"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                IBAN
              </label>
              <input
                type="text"
                id="iban"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              />
            </div>
            <div className="w-full">
              <label
                for="iban"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                IBAN
              </label>
              <input
                type="text"
                id="iban"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              />
            </div>
          </div>
          <div className="flex flex-row w-full gap-4">
            <div className="w-full">
              <label
                for="iban"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                IBAN
              </label>
              <input
                type="text"
                id="iban"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              />
            </div>
            <div className="w-full">
              <label
                for="iban"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                IBAN
              </label>
              <input
                type="text"
                id="iban"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              />
            </div>
          </div>
          <div className="w-full">
            <label
              for="iban"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              IBAN
            </label>
            <input
              type="text"
              id="iban"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>
        </div>
        <button className="mt-2 w-full bg-black p-4 min-h-12 text-white text-sm">
          Continue
        </button>
      </div>
    </div>
  );
}
