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
import { usePathname, useSearchParams } from "next/navigation";

export const MainSideBar = () => {
  const path = usePathname();

  return (
    <SideBar className=" flex-1">
      <SideBarHeader>
        <h1 className="p-2">Header</h1>
      </SideBarHeader>
      <SidebarMenu>
        <SideBarMenuList defaultValue={path ?? "/"}>
          {menu.map(({ title, path }) => {
            return (
              <SideBarMenuItem key={title} value={path}>
                {title}
              </SideBarMenuItem>
            );
          })}
        </SideBarMenuList>
      </SidebarMenu>
      <SideBarFooter>
        <button className=" p-2">Sign out</button>
      </SideBarFooter>
    </SideBar>
  );
};
