import { CreateTaskDto, UpdateTaskDto, Task } from "@/types/Task";
import { TaskData } from "@/test-utils/task.dummy";


const delay = () => new Promise((resolve) => setTimeout(resolve, 200));

export async function getTasks(): Promise<Task[]> {
  await delay();
  return [...TaskData];
}

export async function getTaskById(id: string): Promise<Task> {
  await delay();
  const task = TaskData.find((t) => t.id === id);
  if (!task) throw new Error(`Task ${id} não encontrada`);
  return { ...task };
}

export async function createTasks(dto: CreateTaskDto): Promise<Task> {
  await delay();
  const now = new Date();
  const task: Task = {
  id: String(Date.now()),
  title: dto.title,
  description: dto.description,
  priority: dto.priority,
  status: dto.status,
  deadline: dto.deadline,
  createdAt: now,
  updatedAt: now,
};
  TaskData.unshift(task);
  return { ...task };
}

export async function updateTasks(id: string, dto: UpdateTaskDto): Promise<Task> {
  await delay();
  const index = TaskData.findIndex((t) => t.id === id);
  if (index === -1) throw new Error(`Task ${id} não encontrada`);

  TaskData[index] = { ...TaskData[index], ...dto, updatedAt: new Date() };
  return { ...TaskData[index] };
}

export async function deleteTasks(id: string): Promise<void> {
  await delay();
  const index = TaskData.findIndex((t) => t.id === id);
  if (index === -1) throw new Error(`Task ${id} não encontrada`);
  TaskData.splice(index, 1);
}