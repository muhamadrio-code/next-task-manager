"use client";

import { cn } from "@/lib/utils";
import React, { ComponentProps, FC } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link, { LinkProps } from "next/link";

/**
 * ======================================================
 * SideBar
 * ======================================================
 */

export const SideBarRoot: FC<ComponentProps<"div">> = ({
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

/**
 * ======================================================
 * SideBarHeader
 * ======================================================
 */

type SideBarHeaderProps = ComponentProps<"div">;

export const SideBarHeader: FC<SideBarHeaderProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className=" p-xl flex flex-[2] flex-col justify-start items-start flex-grow-[auto] gap-md"
    >
      {children}
    </div>
  );
};

/**
 * ======================================================
 * SidebarMenu
 * ======================================================
 */

type SideBarMenuProps = ComponentProps<"div"> & {
  children: React.ReactNode;
};

export const SidebarMenu = ({
  children,
  className,
  ...props
}: SideBarMenuProps) => {
  return (
    <div {...props} className={cn(className, " flex flex-[8] items-center")}>
      {children}
    </div>
  );
};

/**
 * ======================================================
 * SideBarMenuList
 * ======================================================
 */

type SideBarMenuListProps = ComponentProps<"ul">;

export const SideBarMenuList: FC<SideBarMenuListProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <ul {...props} className={cn(className, " w-full")}>
      {children}
    </ul>
  );
};

/**
 * ======================================================
 * SideBarMenuItem
 * ======================================================
 */

type SideBarMenuLinkProps = LinkProps & {
  children: React.ReactNode;
  className: string;
};

export const SideBarMenuLink: FC<SideBarMenuLinkProps> = ({
  className,
  children,
  href,
  ...props
}) => {
  const path = usePathname();

  return (
    <li>
      <Link
        {...props}
        href={href}
        className={cn(
          className,
          clsx(
            `
            w-full h-full py-sm
          px-xl
          hover:bg-primary/5
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
              "bg-primary/10": path === href,
              "before:content-none": path !== href,
            }
          )
        )}
      >
        {children}
      </Link>
    </li>
  );
};

/**
 * ======================================================
 * SideBarFooter
 * ======================================================
 */

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
