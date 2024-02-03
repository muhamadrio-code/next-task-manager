import { cn } from "@/lib/utils";
import { ComponentProps, FC, ReactElement } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva(
  "flex flex-row gap-md items-center justify-evenly rounded-sm font-semibold focus:outline-none",
  {
    variants: {
      variant: {
        default: ["bg-foreground", "text-background", "hover:bg-foreground/90"],
        iconOnly: ["text-foreground", "hover:bg-foreground/5", "p-2"],
        custom: ["text-white", "hover:opacity-90", "bg-accent"],
      },
      size: {
        small: ["text-[10px]", "py-1", "px-2"],
        medium: ["text-[12px]", "py-sm", "px-md"],
      },
    },
    defaultVariants: {
      variant: "default",
      size: "medium",
    },
  }
);

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof button> & {
    text?: string;
    icon?: ReactElement;
  };

export const Button: FC<ButtonProps> = ({
  className,
  text,
  icon,
  variant,
  size,
  ...props
}) => {
  return (
    <button {...props} className={cn(button({ variant, size, className }))}>
      {text && <span className="line-clamp-1">{text}</span>}
      {icon}
    </button>
  );
};
