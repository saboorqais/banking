"use client";
import { FaSignOutAlt } from "react-icons/fa";
import { BiCard, BiTransfer } from "react-icons/bi";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import Link from "next/link";

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
    <section className="flex flex-row min-h-screen overflow-y-hidden text-[#233d60] ">
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
        <navbar className="flex flex-row justify-between p-4">
          <div className="flex w-full gap-6 items-center">
            <h1 className="text-2xl text-center font-bold text-black">
              Dashbord
            </h1>
          </div>
          <div className="flex flex-row  justify-between items-center m-3">
            {" "}
            {/* Render the user icon */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-0 focus:border-0">
                  {" "}
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
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
    </section>
  );
}

export default DashboardLayout;
