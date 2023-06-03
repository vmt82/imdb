import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkMondeSwitch from "./DarkMondeSwitch";

export default function Header() {
  return (
    <div className="flex justify-between items-center mx-2 max-w-6xl sm:mx-auto py-6">
      <div className="flex">
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
        <MenuItem title="About" address="/about" Icon={BsInfoCircleFill} />
      </div>
      <div className="flex items-center space-x-5">
        <DarkMondeSwitch/>
        <Link href="/" className="">
          <span className="text-2xl font-bold bg-amber-500 rounded-lg py-1 px-2 mr-1">
            IMDb
          </span>
          <span className="text-xl font-medium hidden sm:inline">Clone</span>
        </Link>
      </div>
    </div>
  );
}
