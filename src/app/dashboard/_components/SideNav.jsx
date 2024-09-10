/* eslint-disable @next/next/no-img-element */
"use client";

import { GraduationCap, Hand, LayoutIcon, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import userpic from "../../../../public/user.svg";
import logo from "../../../../public/logo.svg";
import { usePathname } from "next/navigation";


function SideNav() {
  const menuLists = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutIcon,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Students",
      icon: GraduationCap,
      path: "/dashboard/students",
    },
    {
      id: 3,
      name: "Attendace",
      icon: Hand,
      path: "/dashboard/attendance",
    },
    {
      id: 4,
      name: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];
  const { user } = useKindeBrowserClient();
  const path = usePathname();
  const pic = user?.picture;

  useEffect(() => {}, [path]);
  return (
    <div className="border shadow-md h-screen p-5">
      <div className="flex gap-3 text-sm items-center">
        <Image src={logo} width={50} height={30} alt="logo" />
        <p> Student Attendace System</p>
      </div>

      <hr className="my-5"></hr>

      {menuLists.map((menu, index) => (
        <Link href={menu.path} key={menu.id}>
          <h2
            className={`flex items-center gap-3 text-md p-4 m-3 text-slate-300 hover:bg-primary cursor-pointer rounded-lg my-2hover:text-slate-100 
            ${path == menu.path && "bg-primary text-white"}`}
          >
            <menu.icon />
            {menu.name}
          </h2>
        </Link>
      ))}

      <hr className="my-5"></hr>

      <div className="flex gap-2 items-center bottom-5 fixed p-4">
      {pic?(
          <img
          src={pic}
          width={35}
          height={35}
          alt="user-img"
          className="rounded-full "
        />):(
          <Image
          src={userpic}
          width={35}
          height={35}
          alt="user-img"
          className="rounded-full "/>
        )}
        <div>
          <h2 className="text-sm font-bold">
            {user?.given_name} {user?.family_name}
          </h2>
          <h2 className="text-xs text-slate-400">{user?.email}</h2>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
