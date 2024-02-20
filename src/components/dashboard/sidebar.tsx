"use client";

import React from "react";
import {
  SideBarRoot,
  SideBarFooter,
  SideBarHeader,
  SideBarMenuLink,
  SideBarMenuList,
  SidebarMenu,
} from "../sidebar/sidebar";
import menus from "@/lib/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Button } from "../button/button";

export const SideBar = () => {
  const path = usePathname();

  return (
    <SideBarRoot>
      <SideBarHeader>
        <div className="flex gap-sm w-full text-sm font-semibold">
          <div className=" min-w-[45px] min-h-[45px] max-h-[45px] rounded-full overflow-clip">
            <Image src="/monalisa.jpg" alt="profile" width={45} height={45} />
          </div>
          <h5 className="">Monalisa Lorem</h5>
        </div>
      </SideBarHeader>
      <SidebarMenu>
        <SideBarMenuList>
          {menus.map((menu) => {
            return (
              <SideBarMenuLink
                key={menu.title}
                href={menu.href}
                className=" flex gap-sm items-center"
              >
                <menu.icon size={18} />
                {menu.title}
              </SideBarMenuLink>
            );
          })}
        </SideBarMenuList>
      </SidebarMenu>
      <SideBarFooter>
        <Button
          text="Sign Out"
          icon={<FaLongArrowAltLeft size={14} />}
          className="w-full"
          onClick={async () => {
            const resp = await fetch("/api/v1/tasks");
            const data = await resp.json();
            console.log(data);
          }}
        />
      </SideBarFooter>
    </SideBarRoot>
  );
};
