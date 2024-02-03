"use client";

import React from "react";
import {
  SideBar,
  SideBarFooter,
  SideBarHeader,
  SideBarMenuItem,
  SideBarMenuList,
  SidebarMenu,
} from "../sidebar/sidebar";
import menu from "@/lib/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Button } from "../button/icon-button";

export const MainSideBar = () => {
  const path = usePathname();

  return (
    <SideBar className=" flex-1">
      <SideBarHeader>
        <div className="flex gap-sm w-full h-full text-sm font-semibold justify-center items-center">
          <div className=" min-w-[45px] min-h-[45px] max-h-[45px] rounded-full overflow-clip">
            <Image src="/monalisa.jpg" alt="profile" width={45} height={45} />
          </div>
          <h5 className="">Monalisa Lorem</h5>
        </div>
      </SideBarHeader>
      <SidebarMenu>
        <SideBarMenuList defaultValue={path ?? "/"}>
          {menu.map((me) => {
            return (
              <SideBarMenuItem
                key={me.title}
                value={me.path}
                className=" flex gap-sm items-center"
              >
                <me.icon size={18} />
                {me.title}
              </SideBarMenuItem>
            );
          })}
        </SideBarMenuList>
      </SidebarMenu>
      <SideBarFooter>
        <Button
          text="Sign Out"
          icon={<FaLongArrowAltLeft size={14} />}
          className="w-full"
        />
      </SideBarFooter>
    </SideBar>
  );
};
