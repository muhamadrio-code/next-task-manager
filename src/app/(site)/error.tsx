"use client";

import {
  TasksWrapperContent,
  TasksWrapperHeader,
  TasksWrapperRoot,
  TasksWrapperTitle,
} from "@/components/dashboard/tasks-wrapper";
import { FC } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const error: FC<ErrorProps> = ({ error, reset }) => {
  const title = "Important";
  return (
    <TasksWrapperRoot>
      <TasksWrapperHeader>
        <TasksWrapperTitle value={title} />
      </TasksWrapperHeader>
      <TasksWrapperContent>
        <h1 className="w-full h-full bg-card border flex justify-center items-center font-bold text-xl">
          {error.message}
        </h1>
      </TasksWrapperContent>
    </TasksWrapperRoot>
  );
};

export default error;
