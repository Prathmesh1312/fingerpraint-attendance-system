/* eslint-disable @next/next/no-img-element */
"use client";

import { GraduationCap, Hand, LayoutIcon, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import logo from "../../../../public/logo.svg";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

function SideNavMobile() {
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
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Open</Button>
      </DrawerTrigger>
      <DrawerContent>
          <div className="shadow-md p-5">
            <DrawerTitle>
              <div className="flex gap-3 text-sm items-center">
                <Image src={logo} width={50} height={30} alt="logo" />
                <p> Student Attendace System</p>
              </div>
            </DrawerTitle>
            <hr className="my-5"></hr>
            <div className="grid grid-cols-2">
              {menuLists.map((menu, index) => (
                <Link href={menu.path} key={menu.id}>
                  <h2
                    className={`flex items-center gap-3 text-md p-4 m-3 text-slate-300 hover:bg-primary cursor-pointer rounded-lg my-2hover:text-slate-100 ${
                      path == menu.path && "bg-primary text-white"
                    }`}
                  >
                    <menu.icon />
                    {menu.name}
                  </h2>
                </Link>
              ))}
            </div>
            <hr className="my-5"></hr>
          </div>
      </DrawerContent>
    </Drawer>
  );
}

export default SideNavMobile;
