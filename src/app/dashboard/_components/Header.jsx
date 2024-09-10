/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use-client";
import { ChevronLeft } from "lucide-react";
import React from "react";
import userpic from '../../../../public/user.svg'
import SideNavMobile from "./SideNavMobile";
import Image from "next/image";

function Header({ pic }) {
  console.log(pic)
  return (
    <div className="p-2 shadow-sm border flex items-center justify-between m-auto">
        <SideNavMobile />
        {pic?(
          <img
          src={pic}
          width={35}
          height={35}
          className="rounded-full "
        />):(
          <Image
          src={userpic}
          width={35}
          height={35}
          className="rounded-full "/>
        )}
    </div>
  );
}

export default Header;
