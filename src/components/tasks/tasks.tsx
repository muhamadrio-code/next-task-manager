import { cn } from "@/lib/utils";
import React, { ComponentProps } from "react";
import { Task } from "@/lib/types";
import { FaTrash, FaEdit } from "react-icons/fa";
import clsx from "clsx";
import { Button } from "../button/icon-button";
import Link from "next/link";

/**
 * ======================================================
 * Tasks
 * ======================================================
 */

type TasksComponentProps = ComponentProps<"ul"> & {
  tasks: Task[];
};

export async function Tasks({
  tasks,
  className,
  ...props
}: TasksComponentProps) {
  return (
    <ul {...props} className={cn(className, "w-full grid grid-cols-3 gap-2")}>
      {tasks.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </ul>
  );
}

/**
 * ======================================================
 * Task
 * ======================================================
 */

type TaskComponentProps = ComponentProps<"li"> & {
  task: Task;
};

export async function Task({ task, className, ...props }: TaskComponentProps) {
  const { title, description, date, isCompleted, isImportant, id } = task;
  return (
    <li
      className={cn(
        clsx(" border border-border bg-card h-[170px] overflow-hidden", {
          "border-important": isImportant,
        })
      )}
      {...props}
    >
      <Link
        href={`/task/${id}`}
        className="flex flex-col text-[12px] justify-between items-stretch h-full p-md"
      >
        <h1 className="text-[16px] font-semibold line-clamp-1">{title}</h1>
        <p className="line-clamp-3">{description}</p>
        <p className="text-card-foreground/80 mt-auto font-semibold text-[10px]">
          {date}
        </p>
        <div className=" flex gap-1 justify-between items-center text-[10px]">
          <Button
            className={isCompleted ? "bg-green-600" : "bg-destructive"}
            size={"small"}
            variant={"custom"}
            text={isCompleted ? "Completed" : "Incomplete"}
          />
          {isImportant && (
            <Button
              className="bg-orange-400"
              variant={"custom"}
              text="Important"
              size={"small"}
            />
          )}
          <Button
            className="ml-auto"
            variant={"iconOnly"}
            icon={<FaEdit size={14} />}
          />
          <Button variant={"iconOnly"} icon={<FaTrash size={14} />} />
        </div>
      </Link>
    </li>
  );
}
