import { cn } from "@/lib/utils";
import { ComponentProps, FC, ReactElement } from "react";
import { cva } from "class-variance-authority";

const buttonStyle = cva("");

type IconButtonProps = ComponentProps<"button"> & {
  text?: string;
  icon: ReactElement;
};

export const IconButton: FC<IconButtonProps> = ({
  className,
  text,
  icon,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        "flex flex-row gap-md items-center justify-evenly py-sm px-md bg-foreground text-background rounded-md font-semibold text-[12px] hover:bg-foreground/90 focus:outline-none",
        className
      )}
    >
      {text && <span className="line-clamp-1">{text}</span>}
      {icon}
    </button>
  );
};
