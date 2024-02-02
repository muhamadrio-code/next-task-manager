import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const menu = [
  {
    id: 1,
    title: "All Tasks",
    path: "/",
    // icon: home,
  },
  {
    id: 2,
    title: "Important!",
    path: "/important",
    // icon: list,
  },
  {
    id: 3,
    title: "Completed!",
    path: "/completed",
    // icon: check,
  },
  {
    id: 4,
    title: "Do It Now",
    path: "/incomplete",
    // icon: todo,
  },
];

export default menu;
