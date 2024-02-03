import { cn } from "@/lib/utils";
import { ComponentProps, FC, Suspense } from "react";
import { Tasks } from "../tasks/tasks";
import { Task } from "@/lib/types";
import { ScrollArea } from "../ui/scroll-area";
import { IconButton } from "../button/icon-button";
import { MdAdd } from "react-icons/md";

type TasksWrapperComponentProps = ComponentProps<"div"> & {
  title: string;
  tasks: Task[];
};

export const TasksWrapper: FC<TasksWrapperComponentProps> = ({
  title,
  className,
  children,
  tasks,
  ...props
}) => {
  return (
    <section
      {...props}
      className={cn(
        className,
        " w-full h-full flex flex-col overflow-hidden divide-y-2"
      )}
    >
      <div className="flex justify-between items-center p-xl">
        <TasksWrapperTitle value={title} />
        <IconButton text="Add Task" icon={<MdAdd size={14} />} />
      </div>
      <ScrollArea className="w-full h-full px-xl pt-xl">
        <Suspense fallback={"Loading..."}>
          <Tasks tasks={tasks} />
        </Suspense>
      </ScrollArea>
    </section>
  );
};

/**
 * ======================================================
 * TasksWrapperTitle
 * ======================================================
 */

type TasksWrapperTitleComponentProps = Pick<
  ComponentProps<"h1">,
  "className"
> & {
  value: string;
};

export const TasksWrapperTitle: FC<TasksWrapperTitleComponentProps> = ({
  value,
  className,
}) => {
  return (
    <span
      className={cn(
        `font-bold
        w-fit
        text-md
        relative
        after:absolute
        after:top-[110%]
        after:rounded-tl-full
        after:rounded-tr-full
        after:right-0
        after:left-0
        after:h-1
        after:bg-primary`,
        className
      )}
    >
      {value}
    </span>
  );
};
