import { cn } from "@/lib/utils";
import { ComponentProps, FC, Suspense } from "react";
import { Tasks } from "../tasks/tasks";
import { Task } from "@/lib/types";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../button/button";
import { MdAdd } from "react-icons/md";

/**
 * ======================================================
 * TasksWrapper
 * ======================================================
 */

type TasksWrapperComponentProps = {
  title: string;
  tasks: Task[];
};

export const TasksWrapper: FC<TasksWrapperComponentProps> = ({
  title,
  tasks,
}) => {
  return (
    <TasksWrapperRoot>
      <TasksWrapperHeader>
        <TasksWrapperTitle value={title} />
        <Button text="Add Task" icon={<MdAdd size={14} />} />
      </TasksWrapperHeader>
      <ScrollArea>
        <TasksWrapperContent>
          <Suspense fallback={"Loading..."}>
            <Tasks tasks={tasks} />
          </Suspense>
        </TasksWrapperContent>
      </ScrollArea>
    </TasksWrapperRoot>
  );
};

/**
 * ======================================================
 * TasksWrapperRoot
 * ======================================================
 */

type TasksWrapperRootComponentProps = Pick<
  ComponentProps<"section">,
  "className" | "children"
>;

export const TasksWrapperRoot: FC<TasksWrapperRootComponentProps> = ({
  className,
  children,
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
      {children}
    </section>
  );
};

/**
 * ======================================================
 * TasksWrapperHeader
 * ======================================================
 */

type TasksWrapperContentComponentProps = ComponentProps<"div">;

export const TasksWrapperContent: FC<TasksWrapperContentComponentProps> = ({
  children,
}) => {
  return <div className="w-full h-full p-xl">{children}</div>;
};

/**
 * ======================================================
 * TasksWrapperHeader
 * ======================================================
 */

type TasksWrapperHeaderComponentProps = Pick<
  ComponentProps<"div">,
  "className" | "children"
>;

export const TasksWrapperHeader: FC<TasksWrapperHeaderComponentProps> = ({
  children,
}) => {
  return (
    <div className="flex justify-between items-center p-xl min-h-[74px] max-h-[74px]">
      {children}
    </div>
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
