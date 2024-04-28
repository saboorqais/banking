"use client";

import { BiCard, BiTransfer } from "react-icons/bi";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import Link from "next/link";
import { CiLogout } from "react-icons/ci";
import { TiThMenu } from "react-icons/ti";

import { FaSignOutAlt } from "react-icons/fa";

import { IoIosSettings } from "react-icons/io";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuPortal,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaInvision } from "react-icons/fa6";

function DashboardLayout({ children }) {
  return (
    <section className="flex flex-row min-h-scree overflow-hidden  text-[#233d60] mb-16">
      <aside className=" w-64 max-w-72 align-center flex flex-col justify-between bg-sidebar max-[1050px]:hidden">
        <div className="flex flex-col  w-full items-left px-6">
          <Link href={"/dashboard"}>
            <h1 className="text-3xl	 mt-6 w-3/6 font-bold text-black">
              Dashboard
            </h1>
          </Link>

          <section className="flex flex-col items-left w-full">
            <div className="mt-3 flex flex-row justify-start gap-3">
              <BiTransfer size={20} color="black" />{" "}
              {/* Render the home icon */}
              <Link href={"/dashboard/transfer"}>
                <button className="text-center text-black ">Transfer</button>
              </Link>
            </div>
            <div className="mt-3 flex flex-row justify-start gap-3">
              <FaInvision size={20} color="black" /> {/* Render the home icon */}
              <Link href={"/dashboard/investment"}>

              <button className="text-center text-black 	">Investment</button>
              </Link>
            
            </div>
            <div className="mt-3 flex flex-row justify-start gap-3">
              <MdOutlineAccountBalanceWallet size={20} color="black" />{" "}
              {/* Render the home icon */}
              <Link href={"/dashboard/transaction"}>
                <button className="text-center text-black 	">Transaction</button>
              </Link>
            </div>
            <div className="mt-3 flex flex-row justify-start gap-3">
              <BiCard size={20} color="black" /> {/* Render the home icon */}
              <Link href={"/dashboard/cards"}>
                <button className="text-center text-black 	">
                  Cards
                </button>
              </Link>
            </div>
            <div className="mt-3 flex flex-row justify-start gap-3">
              <BiCard size={20} color="black" /> {/* Render the home icon */}
              <Link href={"/dashboard/card"}>
                <button className="text-center text-black 	">
                  My Card
                </button>
              </Link>
            </div>

      
          </section>
        </div>
        <div className="flex flex-col px-6 mt-3 pb-3">
          <section className="mt-6">
            <div className="mt-3 flex flex-row justify-start gap-3">
              <IoIosSettings size={20} color="black" />{" "}
              {/* Render the home icon */}
              <button className="text-center text-black font-semibold	">
                Settings
              </button>
            </div>
            <div className="mt-3 flex flex-row justify-start gap-3">
              <FaSignOutAlt size={20} color="black" />{" "}
              {/* Render the home icon */}
              <button className="text-center text-black font-semibold	">
                Sign Out
              </button>
            </div>
          </section>
        </div>
      </aside>
      <div className="w-full flex flex-col">
        <navbar className="flex flex-row justify-around p-4">
          <div className="flex w-full  items-center">
            <h1 className="text-2xl text-center font-bold text-black">
              Dashbord
            </h1>
          </div>
          <div className="flex flex-row  justify-between items-center ">
            {" "}
            {/* Render the user icon */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-0 focus:border-0">
                
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent >
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    Profile
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Billing
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Settings
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Keyboard shortcuts
                    <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      Invite users
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>Email</DropdownMenuItem>
                        <DropdownMenuItem>Message</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>More...</DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuItem>
                    New Team
                    <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>GitHub</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuItem disabled>API</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Log out
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </navbar>
        {children}

      </div>
       <div className="h-16 w-full  overflow-x-scroll overflow-y-scroll fixed bottom-0 bg-[#f1f2f4] max-[1050px]:flex hidden flex-row ">

    <div className="h-16 w-3/5 max-[555px]:hidden  overflow-x-scroll overflow-y-scroll fixed bottom-0 bg-[#f1f2f4] max-[1050px]:flex hidden flex-row">
    <button className="hover:border-[#233d60]  border-[3px] rounded-xl m-3 bg-white text-[#233d60] min-w-48 text-lg " >Transfer</button>
        <button className="border-[#233d60] rounded-xl m-3 bg-[#233d60] text-white min-w-48  text-lg " >Transfer</button>
        <button className="border-[#233d60] rounded-xl m-3 bg-white text-[#233d60] min-w-48  text-lg " >Transfer</button>
        <button className="border-[#233d60] rounded-xl m-3 bg-white text-[#233d60] min-w-48  text-lg " >Transfer</button>
          <button className="border-[#233d60] rounded-xl m-3 bg-white text-[#233d60] min-w-48  text-lg " >Transfer</button>
          <button className="border-[#233d60] rounded-xl m-3 bg-white text-[#233d60] min-w-48  text-lg " >Transfer</button>       
    </div>
       <div className="h-16 w-2/5 max-[555px]:w-full fixed right-0 flex flex-row z-50 " style={{
   WebkitBoxShadow: "-51px 68px 115px 8px rgba(0,0,0,0.9)",
   MozBoxShadow: "-51px 68px 115px 8px rgba(0,0,0,9)",
   boxShadow: "-51px 68px 115px 8px rgba(0,0,0,0.9)"
       }}>
       
        <button className="flex max-[555px]:w-1/3 min-[555px]:hidden flex-row gap-2 justify-center items-center bg-[#233d60]  h-16 w-1/2  text-white text-lg " >Menu <TiThMenu size={25} color={"white"} /></button>
          <button className="flex flex-row gap-2 max-[555px]:w-1/3 justify-center items-center bg-[#233d60] h-16 w-1/2     text-white  text-lg " >Settings<IoIosSettings size={30} color="white" /></button>       
       <button className="flex flex-row gap-2 max-[555px]:w-1/3 justify-center items-center bg-[#c33d3d]  h-16 w-1/2  text-white text-lg " >SignOut <FaSignOutAlt size={25} color={"#233d60"} /></button>
       </div>
      </div>
    </section>
  );
}

export default DashboardLayout;
