import { cn } from "@/lib/utils";
import React, { ComponentProps, FC } from "react";

const Tasks: FC<ComponentProps<"div">> = ({ className, ...props }) => {
  return (
    <section {...props} className={cn(className)}>
      <h1 className=" text-primary">Home</h1>
      <h1>Contact</h1>
      <h1>Important</h1>
    </section>
  );
};

export default Tasks;
