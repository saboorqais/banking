"use client";
import React from "react";
import { FaHome, FaUser, FaSignOutAlt } from "react-icons/fa";
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


function DashboardLayout({ children }) {
  return (
    <section className="flex flex-row max-h-screen overflow-y-hidden ">
      <aside className=" w-64 align-center flex flex-col justify-between bg-sidebar">
        <div>
          <h1 className="text-3xl	 mt-12 text-center font-bold text-black">
            Discover
          </h1>
          <div className="flex flex-col px-10 mt-3">
            <section>
              <div className="mt-3 flex flex-row justify-start gap-3">
                <FaHome size={20} color="black" /> {/* Render the home icon */}
                <button className="text-center text-black font-semibold	">
                  Discover
                </button>
              </div>
              <div className="mt-3 flex flex-row justify-start gap-3">
                <FaHome size={20} color="black" /> {/* Render the home icon */}
                <button className="text-center text-black font-semibold	">
                  Discover
                </button>
              </div>
              <div className="mt-3 flex flex-row justify-start gap-3">
                <FaHome size={20} color="black" /> {/* Render the home icon */}
                <button className="text-center text-black font-semibold	">
                  Search
                </button>
              </div>
              <div className="mt-3 flex flex-row justify-start gap-3">
                <FaHome size={20} color="black" /> {/* Render the home icon */}
                <button className="text-center text-black font-semibold	">
                  My Finds
                </button>
              </div>
            </section>
            <section className="mt-6">
              <div className="mt-3 flex flex-row justify-start gap-3">
                <FaHome size={20} color="black" /> {/* Render the home icon */}
                <button className="text-center text-black font-semibold	">
                  Discover
                </button>
              </div>
              <div className="mt-3 flex flex-row justify-start gap-3">
                <FaHome size={20} color="black" /> {/* Render the home icon */}
                <button className="text-center text-black font-semibold	">
                  Discover
                </button>
              </div>
              <div className="mt-3 flex flex-row justify-start gap-3">
                <FaHome size={20} color="black" /> {/* Render the home icon */}
                <button className="text-center text-black font-semibold	">
                  Search
                </button>
              </div>
            </section>
          </div>
        </div>
        <div className="flex flex-col px-10 mt-3 pb-3">
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
      <div className="w-full p-4 flex flex-col">
        <navbar className="min-w-full m-4 flex flex-row justify-between">
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
