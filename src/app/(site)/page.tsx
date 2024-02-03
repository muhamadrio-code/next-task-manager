import { getTasksByUserIdActions } from "@/actions/getTaskActions";
import { TasksWrapper } from "@/components/dashboard/tasks-wrapper";
import React from "react";

async function DashboardPage() {
  const tasks = await getTasksByUserIdActions("");
  return <TasksWrapper tasks={tasks} title="All Task" />;
}

export default DashboardPage;
