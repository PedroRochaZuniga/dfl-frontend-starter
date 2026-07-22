import { Priority } from "@/types/Priority";
import { TaskStatus } from "@/types/TaskStatus";
import {Task} from "src/types/Task";

interface TaskProps{
    task: Task;
}


export default function TaskCard({ task } : TaskProps){
    return(
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900">
      <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100">
            Tarefa: {task.title}</h1>
            <p className="text-sm text-gray-500">{task.description}</p>
            <p className="text-sm text-gray-500">Prioridade: {Priority[task.priority]}</p>
            <p className="text-sm text-gray-500">Status: {TaskStatus[task.status]}</p>
            <p className="text-sm text-gray-500">Prazo: {task.deadline.toLocaleDateString("pt-BR")}</p>
        </div>
    );
}