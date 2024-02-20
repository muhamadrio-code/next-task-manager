import { getTasks } from "@/actions/getTaskActions";
import { TasksWrapper } from "@/components/dashboard/tasks-wrapper";

export default async function ImportantPage() {
  await getTasks();
  return <TasksWrapper tasks={[]} title="Important Page" />;
}
