import { FcSimCardChip } from "react-icons/fc";
import Image from "next/image";
import mastercard from "../../../components/mc_symbol.svg";
import { FaCircle } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";

export default function Page() {
  return (
    <div className="flex flex-col m-4 gap-4 px-4 overflow-y-auto">
      <h1 className="text-2xl font-semibold">Accounts</h1>
      <div className="flex flex-row w-full gap-4 ">
        <div className="flex flex-col w-2/6 gap-4">
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
              <p>See Details</p>
            </button>
          </div>
        </div>
        <div className="flex flex-col w-2/6 gap-4">
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
              <p>See Details</p>
            </button>
          </div>
        </div>
        <div className="flex flex-col w-2/6 gap-4">
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
              <p>See Details</p>
            </button>
          </div>
        </div>
        <div></div>
      </div>
      <h1 className="text-2xl font-semibold">My Cards</h1>
      <div className="flex flex-row gap-4 ">
        <div
          className="w-1/2 flex flex-col gap-4"
          style={{
            backgroundColor: "#f8f9fa",
          }}
        >
       <div className="w-full flex flex-row gap-4 p-4">
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

          <div className="w-1/2 flex flex-col gap-8">
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
                <button><FaEyeSlash size={20}/></button>
              </span>
            </div>
            <div className="flex flex-col gap-2">
            <h4 className="text-md font-thin">Expiration Date</h4>
              <span className="flex flex-row items-center gap-4">
                <h4 className="text-md ">12/24</h4>
                <div className="flex flex-row gap-2">
                  <FaCircle size={15} color="#d62554ff" />
                  <p className="font-semibold" style={{color:"#d62554ff"}}>1 Month Left</p>
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
       <button
              className="w-full min-h-12 flex felx-row justify-center gap-2 items-center"
              style={{
                backgroundColor: "rgb(198, 181, 242)",
              }}
            >
              <p>See Details</p>
            </button>
        </div>
        <div
          className="w-1/2 flex flex-col gap-4"
          style={{
            backgroundColor: "#f8f9fa",
          }}
        >
       <div className="w-full flex flex-row gap-4 p-4">
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

          <div className="w-1/2 flex flex-col gap-8">
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
                <button><FaEyeSlash size={20}/></button>
              </span>
            </div>
            <div className="flex flex-col gap-2">
            <h4 className="text-md font-thin">Expiration Date</h4>
              <span className="flex flex-row items-center gap-4">
                <h4 className="text-md ">12/24</h4>
                <div className="flex flex-row gap-2">
                  <FaCircle size={15} color="#d62554ff" />
                  <p className="font-semibold" style={{color:"#d62554ff"}}>1 Month Left</p>
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
       <button
              className="w-full min-h-12 flex felx-row justify-center gap-2 items-center"
              style={{
                backgroundColor: "rgb(198, 181, 242)",
              }}
            >
              <p>See Details</p>
            </button>
        </div>
        <div></div>
      </div>
    </div>
  );
}
