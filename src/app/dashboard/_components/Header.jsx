"use-client";
import { ChevronLeft } from "lucide-react";
import React from "react";

function Header({ name, pic }) {


  return (
    <div className="p-5 shadow-sm border flex justify-between">
      <div className=" text-xl">Welcome, {name}</div>
      <div >
        <div className=" m-auto md:hidden">
        <img
          src={pic}
          width={35}
          height={35}
          alt="user-img"
          className="rounded-full"
        />
        </div>
      </div>
    </div>
  );
}

export default Header;
