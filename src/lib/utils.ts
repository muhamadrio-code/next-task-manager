import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { PiListDashesFill, PiListChecksFill } from "react-icons/pi";
import { LuFileWarning } from "react-icons/lu";
import { RiTodoFill } from "react-icons/ri";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const menu = [
  {
    id: 1,
    title: "All Tasks",
    href: "/",
    icon: PiListDashesFill,
  },
  {
    id: 2,
    title: "Important!",
    href: "/important",
    icon: LuFileWarning,
  },
  {
    id: 3,
    title: "Completed!",
    href: "/completed",
    icon: PiListChecksFill,
  },
  {
    id: 4,
    title: "Do It Now",
    href: "/incomplete",
    icon: RiTodoFill,
  },
];

export default menu;
