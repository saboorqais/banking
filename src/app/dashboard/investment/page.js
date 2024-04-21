'use client'
import { VerticalSecondBar } from "@/components/chart/verticalSecondChart";
import { BiTransfer } from "react-icons/bi";
import { AiOutlineStock } from "react-icons/ai";
import { RiArrowDropUpFill } from "react-icons/ri";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
];
export default function Page() {
  return (
    <div className="flex flex-col gap-4 px-4 overflow-y-auto">
      <div className="flex flex-row gap-4 p-4 max-sm:flex-col">
        <div
          className="w-1/3 flex flex-row justify-center items-center min-h-28 gap-4  max-sm:w-full"
          style={{ backgroundColor: "#F8F9FA" }}
        >
          <div
            className="w-14 h-14 flex flex-row justify-center items-center rounded-full "
            style={{ backgroundColor: "rgb(181, 220, 242)" }}
          >
            <AiOutlineStock size={20} />
          </div>
          <span className="flex flex-col gap-1">
            <h3 className="text-sm font-thin">Total Investment</h3>
            <h2 className="text-lg font-semibold">$10,000</h2>
          </span>
        </div>
        <div
          className="w-1/3 flex flex-row justify-center items-center min-h-28 gap-4 max-sm:w-full"
          style={{ backgroundColor: "#F8F9FA" }}
        >
          <div
            className="w-14 h-14 flex flex-row justify-center items-center rounded-full"
            style={{ backgroundColor: "rgb(181, 220, 242)" }}
          >
            <AiOutlineStock size={20} />
          </div>
          <span className="flex flex-col gap-1">
            <h3 className="text-sm font-thin">Total Investment</h3>
            <h2 className="text-lg font-semibold">$10,000</h2>
          </span>
        </div>{" "}
        <div
          className="w-1/3 flex flex-row justify-center items-center min-h-28 gap-4 max-sm:w-full"
          style={{ backgroundColor: "#F8F9FA" }}
        >
          <div
            className="w-14 h-14 flex flex-row justify-center items-center rounded-full"
            style={{ backgroundColor: "rgb(181, 220, 242)" }}
          >
            <AiOutlineStock size={20} />
          </div>
          <span className="flex flex-col gap-1">
            <h3 className="text-sm font-thin">Total Investment</h3>
            <h2 className="text-lg font-semibold">$10,000</h2>
          </span>
        </div>
     
      </div>
      <div className="flex flex-row gap-4 p-4 min-h-80 min-w-96 max-[780px]:flex-col">
        <div className="w-1/2 max-lg:w-full">
          <VerticalSecondBar />
        </div>
        <div className="w-1/2 flex flex-col gap-2 bg-black p-4 max-h-80 max-lg:w-full">
          {/* <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <h1 className="text-2xl text-white font-semibold">
                Trending Stocks
              </h1>
              <TableRow>
                <TableHead colSpan={3} className="w-2/5 text-white">
                  Name
                </TableHead>
                <TableHead colSpan={3} className="w-2/5 text-white">
                  Price
                </TableHead>
                <TableHead colSpan={3} className="text-right w-2/5 text-white">
                  Return
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell colSpan={3} className="font-medium text-white">
                    {invoice.invoice}
                  </TableCell>

                  <TableCell colSpan={3} className=" text-white">
                    {invoice.paymentMethod}
                  </TableCell>
                  <TableCell colSpan={3} className="text-right text-white">
                    <div className="flex flex-row items-center">
                      <RiArrowDropUpFill size={40} color="#20b2aaff" />
                      <h4 className="text-lg" style={{ color: "#20b2aaff" }}>
                        {invoice.totalAmount}
                      </h4>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={6} className="text-white">
                  Total
                </TableCell>

                <TableCell colSpan={2} className="text-right text-white ">
                  $2,500.00
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table> */}
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 p-4">
        <h1 className="text-2xl text-black font-semibold">My Investment</h1>
        <div className="flex flex-col w-full">
            <h3 className="text-sm font-thin my-2">Pending</h3>
          <div className="flex flex-row justify-between w-full items-center py-4">
            <div className="flex flex-row gap-4">
              <div className="rounded-full w-10 h-10 bg-[#233d60] flex flex-row justify-center items-center">
                <BiTransfer backgroundColor={"balanceCard"} color="white" size={25} />
              </div>
              <div className="flex flex-col">
                <h4 className="text-md font-semibold">Apple Market</h4>
                <h4 className="text-sm font-thin">Eccomernce Market Place</h4>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h4 className="text-md font-semibold">$2000</h4>
                <h4 className="text-sm font-thin">Investment Value</h4>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h4 className="text-lg font-semibold" style={{ color: "#20b2aaff" }}>+23%</h4>
                <h4 className="text-sm font-thin">Return Value</h4>
              </div>
          </div>
          <div className="flex flex-row justify-between w-full items-center py-4">
            <div className="flex flex-row gap-4">
              <div className="rounded-full w-10 h-10 bg-[#233d60] flex flex-row justify-center items-center">
                <BiTransfer backgroundColor={"red"} color="white" size={25} />
              </div>
              <div className="flex flex-col">
                <h4 className="text-md font-semibold">Apple Market</h4>
                <h4 className="text-sm font-thin">Eccomernce Market Place</h4>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h4 className="text-md font-semibold">$2000</h4>
                <h4 className="text-sm font-thin">Investment Value</h4>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h4 className="text-lg font-semibold" style={{ color: "#20b2aaff" }}>+23%</h4>
                <h4 className="text-sm font-thin">Return Value</h4>
              </div>
          </div>
          <div className="flex flex-row justify-between w-full items-center py-4">
            <div className="flex flex-row gap-4">
              <div className="rounded-full w-10 h-10 bg-[#233d60] flex flex-row justify-center items-center">
                <BiTransfer backgroundColor={"red"} color="white" size={25} />
              </div>
              <div className="flex flex-col">
                <h4 className="text-md font-semibold">Apple Market</h4>
                <h4 className="text-sm font-thin">Eccomernce Market Place</h4>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h4 className="text-md font-semibold">$2000</h4>
                <h4 className="text-sm font-thin">Investment Value</h4>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h4 className="text-lg font-semibold" style={{ color: "#20b2aaff" }}>+23%</h4>
                <h4 className="text-sm font-thin">Return Value</h4>
              </div>
          </div>
          <h3 className="text-sm font-thin my-2">Today</h3>
          <div className="flex flex-row justify-between w-full items-center py-4">
            <div className="flex flex-row gap-4">
              <div className="rounded-full w-10 h-10 bg-[#233d60] flex flex-row justify-center items-center">
                <BiTransfer backgroundColor={"red"} color="white" size={25} />
              </div>
              <div className="flex flex-col">
                <h4 className="text-md font-semibold">Apple Market</h4>
                <h4 className="text-sm font-thin">Eccomernce Market Place</h4>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h4 className="text-md font-semibold">$2000</h4>
                <h4 className="text-sm font-thin">Investment Value</h4>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h4 className="text-lg font-semibold" style={{ color: "#20b2aaff" }}>+23%</h4>
                <h4 className="text-sm font-thin">Return Value</h4>
              </div>
          </div> <div className="flex flex-row justify-between w-full items-center py-4">
            <div className="flex flex-row gap-4">
              <div className="rounded-full w-10 h-10 bg-[#233d60] flex flex-row justify-center items-center">
                <BiTransfer backgroundColor={"red"} color="white" size={25} />
              </div>
              <div className="flex flex-col">
                <h4 className="text-md font-semibold">Apple Market</h4>
                <h4 className="text-sm font-thin">Eccomernce Market Place</h4>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h4 className="text-md font-semibold">$2000</h4>
                <h4 className="text-sm font-thin">Investment Value</h4>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h4 className="text-lg font-semibold" style={{ color: "#20b2aaff" }}>+23%</h4>
                <h4 className="text-sm font-thin">Return Value</h4>
              </div>
          </div> <div className="flex flex-row justify-between w-full items-center py-4">
            <div className="flex flex-row gap-4">
              <div className="rounded-full w-10 h-10 bg-[#233d60] flex flex-row justify-center items-center">
                <BiTransfer backgroundColor={"red"} color="white" size={25} />
              </div>
              <div className="flex flex-col">
                <h4 className="text-md font-semibold">Apple Market</h4>
                <h4 className="text-sm font-thin">Eccomernce Market Place</h4>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h4 className="text-md font-semibold">$2000</h4>
                <h4 className="text-sm font-thin">Investment Value</h4>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h4 className="text-lg font-semibold" style={{ color: "#20b2aaff" }}>+23%</h4>
                <h4 className="text-sm font-thin">Return Value</h4>
              </div>
          </div>
          <h3 className="text-sm font-thin my-2">21 January 2024</h3>
         
          <div className="flex flex-row justify-between w-full items-center py-4">
            <div className="flex flex-row gap-4">
              <div className="rounded-full w-10 h-10 bg-[#233d60] flex flex-row justify-center items-center">
                <BiTransfer backgroundColor={"red"} color="white" size={25} />
              </div>
              <div className="flex flex-col">
                <h4 className="text-md font-semibold">Apple Market</h4>
                <h4 className="text-sm font-thin">Eccomernce Market Place</h4>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h4 className="text-md font-semibold">$2000</h4>
                <h4 className="text-sm font-thin">Investment Value</h4>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h4 className="text-lg font-semibold" style={{ color: "#20b2aaff" }}>+23%</h4>
                <h4 className="text-sm font-thin">Return Value</h4>
              </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
