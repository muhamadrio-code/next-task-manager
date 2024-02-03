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
import { useRouter } from "next/navigation";

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
          w-[180px]
          max-w-[240px]
          min-w-0
          flex-grow-none
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
      className=" px-xl flex flex-[2] flex-col justify-center items-center flex-grow-[auto] flex-shrink-none gap-md"
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
          py-sm
          px-xl
          hover:bg-primary/5
          cursor-pointer 
          font-semibold
          text-[12px] 
          tracking-wide 
          relative
          before:w-1
          before:h-[100%]
          before:absolute
          before:bg-primary
          before:rounded-tl-full
          before:rounded-bl-full
          before:top-0
          before:right-0
          `,
          {
            "bg-primary/10": activeMenu === value,
            "before:content-none": activeMenu !== value,
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
      className="text-sm flex flex-col justify-center items-start flex-grow-none flex-shrink-none p-xl"
    >
      {children}
    </div>
  );
};
