import { Button } from "@/components/ui/button";
import React from "react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

function page() {
  return (
    <div className="p-5 items-center justify-center m-auto">
      <h2 className="font-bold text-2xl ">Settings</h2>
      <hr className="my-5"></hr>
      <div className="p-10">
        <LogoutLink>
          <Button variant={"destructive"}>Log Out</Button>
        </LogoutLink>
      </div>
    </div>
  );
}

export default page;
