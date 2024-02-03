import { cn } from "@/lib/utils";
import React, { ComponentProps } from "react";
import { Task } from "@/lib/types";
import { FaTrash, FaEdit } from "react-icons/fa";
import clsx from "clsx";
import { IconButton } from "../button/icon-button";

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
  const { title, description, date, isCompleted, isImportant } = task;
  return (
    <li
      className={cn(
        clsx(" border border-border bg-card h-[150px] p-md overflow-hidden", {
          "border-important": isImportant,
        })
      )}
      {...props}
    >
      <div className="flex flex-col text-[12px] justify-between items-stretch h-full">
        <h1 className="text-[16px] font-semibold line-clamp-1">{title}</h1>
        <p>{description}</p>
        <p className="text-card-foreground/80 mt-auto font-semibold text-[10px] line-clamp-3">
          {date}
        </p>
        <div className=" flex gap-1 justify-between items-center text-[10px]">
          <button
            className={cn(
              clsx(
                " rounded-full px-2 py-1 font-semibold bg-destructive focus:outline-none tracking-wider",
                {
                  "bg-green-600": isCompleted,
                }
              )
            )}
          >
            {isCompleted ? "Completed" : "Incomplete"}
          </button>
          {isImportant && (
            <button className=" rounded-full px-2 py-1 font-semibold bg-orange-400 focus:outline-none tracking-wider">
              Important
            </button>
          )}
          <IconButton
            className="bg-transparent ml-auto text-foreground"
            icon={<FaEdit size={14} />}
          />
          <IconButton
            className="bg-transparent text-foreground"
            icon={<FaTrash size={14} />}
          />
        </div>
      </div>
    </li>
  );
}
