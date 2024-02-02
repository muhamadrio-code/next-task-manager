"use client";

import { cn } from "@/lib/utils";
import React, {
  ComponentProps,
  FC,
  Dispatch,
  useEffect,
  useState,
} from "react";
import createContext from "@/contexts/create-context";
import clsx from "clsx";
import { useRouter, useSearchParams } from "next/navigation";

export const SideBar: FC<ComponentProps<"div">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section>
      <div
        {...props}
        className={cn(
          className,
          `
          h-full
          flex
          flex-col
          justify-between
          overflow-hidden
          rounded-3xl
          min-w-[240px]
          max-w-fit
          border-border
          border-2
        `
        )}
      >
        {children}
      </div>
    </section>
  );
};

type SideBarHeaderProps = ComponentProps<"div">;

export const SideBarHeader: FC<SideBarHeaderProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className=" py-4 px-6 flex flex-[2] flex-col justify-center items-center flex-grow-[auto] flex-shrink-none bg-slate-800"
    >
      {children}
    </div>
  );
};

type SideBarMenuProps = ComponentProps<"div"> & {
  children: React.ReactNode;
};
type SideBarMenuContextValue = ComponentProps<"div"> & {
  activeMenu: string;
  setActiveMenu: Dispatch<React.SetStateAction<string>>;
};

const [SideBarMenuProvider, useSidebarMenuContext] =
  createContext<SideBarMenuContextValue>("sidebar-menu");

export const SidebarMenu = ({
  children,
  className,
  ...props
}: SideBarMenuProps) => {
  const [activeMenu, setActiveMenu] = useState("");

  return (
    <div {...props} className={cn(className, " flex flex-[8] items-center")}>
      <SideBarMenuProvider
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      >
        {children}
      </SideBarMenuProvider>
    </div>
  );
};

type SideBarMenuListProps = ComponentProps<"ul"> & {
  defaultValue: string;
};

export const SideBarMenuList: FC<SideBarMenuListProps> = ({
  defaultValue,
  className,
  children,
  ...props
}) => {
  const { setActiveMenu } = useSidebarMenuContext("sidebar-menu-list");
  useEffect(() => {
    setActiveMenu(defaultValue);
  }, []);

  return (
    <ul {...props} className={cn(className, " w-full")}>
      {children}
    </ul>
  );
};

type SideBarMenuItemProps = ComponentProps<"li"> & {
  value: string;
};

export const SideBarMenuItem: FC<SideBarMenuItemProps> = ({
  value,
  className,
  children,
  ...props
}) => {
  const { activeMenu, setActiveMenu } =
    useSidebarMenuContext("sidebar-menu-list");

  const router = useRouter();
  const setActive = () => {
    setActiveMenu(value);
    router.push(value);
  };

  return (
    <li
      {...props}
      className={cn(
        className,
        clsx(
          `
          w-full 
          py-2 px-8 
          hover:bg-primary/5
          cursor-pointer 
          after:w-1
          after:h-[100%]
          after:absolute
          after:bg-primary
          after:rounded-tl-full
          after:rounded-bl-full
          after:top-0
          after:right-0
          `,
          {
            "bg-primary/10": activeMenu === value,
            relative: activeMenu === value,
          }
        )
      )}
      onClick={setActive}
    >
      {children}
    </li>
  );
};

type SideBarFooterProps = ComponentProps<"div">;

export const SideBarFooter: FC<SideBarFooterProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className=" py-4 px-6 flex flex-col justify-end items-center bg-slate-700 flex-grow-none flex-shrink-none"
    >
      {children}
    </div>
  );
};
