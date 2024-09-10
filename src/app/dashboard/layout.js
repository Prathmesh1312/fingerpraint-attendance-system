/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useMediaQuery } from "@uidotdev/usehooks";
import SideNavMobile from "./_components/SideNavMobile";

// const NoSSR = dynamic(() => import('../components/no-ssr'), { ssr: false })

function layout({ children }) {
  const { user } = useKindeBrowserClient();
  const [name, setname] = useState();
  const [pic, setpic] = useState();
  const isDesktop = useMediaQuery("(min-width:768px)");
  useEffect(() => {
    setname(user?.given_name);
    setpic(user?.picture);
  });

  return isDesktop ? (
    <div>
      <div className="md:w-72 fixed hidden md:block">
        <SideNav />
      </div>
      <div className="md:ml-72">
        {children}
      </div>
    </div>
  ) : (
    <div>
      <Header pic={pic}/>
      {children}
    </div>
  );
}

export default layout;
