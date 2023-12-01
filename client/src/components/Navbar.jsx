import React from "react";
import {
  BellIcon,
  EnvelopeIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
const Navbar = ({ user }) => {
  return (
    <div className="flex h-10 bg-green-600 text-white sticky top-0 shadow-md  w-96 border-b items-center px-2 justify-between">
      <span className="text-slate-900 font-bold text-lg">{user}</span>
      <div className="icons flex gap-2">
        <div className="relative">
          <BellIcon className="h-5 w-5 cursor-pointer" />
          <span className="absolute text-[9px] h-4 w-4 font-semibold bg-red-500 text-center rounded-full -top-2 -right-2 animate-pulse">
            2
          </span>
        </div>
        <div className="relative">
          <EnvelopeIcon className="h-5 w-5 cursor-pointer" />
          <span className="absolute text-[9px] h-4 w-4 font-semibold bg-red-500 text-center rounded-full -top-2 -right-2 animate-pulse">
            2
          </span>
        </div>
        <div className="relative">
          <Cog6ToothIcon className="h-5 w-5 cursor-pointer" />
          <span className="absolute text-[9px] h-4 w-4 font-semibold bg-red-500 text-center rounded-full -top-2 -right-2 animate-pulse">
            2
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
