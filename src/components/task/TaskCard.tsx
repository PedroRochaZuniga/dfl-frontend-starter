import { Priority } from "@/enums/Priority";
import { TaskStatus } from "@/enums/TaskStatus";
import {Task} from "src/types/Task";
import { Button, formFieldClass } from "../ui";


interface TaskProps{
    task: Task;
    onChangeStatus: (task: Task, status: TaskStatus) => void;
    onDelete: (id: string) => void;
    isBusy?: boolean;
}


export default function TaskCard({ task, onChangeStatus, onDelete, isBusy } : TaskProps){
    const {status} = task

    return(
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900">
      <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100">
            Tarefa: {task.title}</h1>
            <p className="text-sm text-gray-500">{task.description}</p>
            <p className="text-sm text-gray-500">Prioridade: {Priority[task.priority]}</p>
            <p className="text-sm text-gray-500">Prazo: {task.deadline.toLocaleDateString("pt-BR")}</p>
            {status === TaskStatus.Afazer && (<span className = "mt-2 inline-block rounded bg-yellow-100 px-2 py-0.5 text-xs text-yellow-600">A-fazer</span>)}
            {status === TaskStatus.Fazendo && (<span className = "mt-2 inline-block rounded bg-blue-100 px-2 py-0.5 text-xs text-blue-600">Fazendo</span>)}
            {status === TaskStatus.Concluida && (<span className = "mt-2 inline-block rounded bg-green-100 px-2 py-0.5 text-xs text-green-600">Feito</span>)}
            {status === TaskStatus.Atrasada && (<span className = "mt-2 inline-block rounded bg-red-100 px-2 py-0.5 text-xs text-red-600">Atrasada!</span>)}

            <div className="mt-4 flex flex-wrap items-center gap-2">
                <label htmlFor={`status-${task.id}`} className="sr-only">
                    Status da tarefa
                </label>
                <select
                    id={`status-${task.id}`}
                    value={status}
                    disabled={isBusy}
                    onChange={(e) => onChangeStatus(task, e.target.value as TaskStatus)}
                    className={formFieldClass}>
          
                    {Object.values(TaskStatus).map((s) => (
                    <option key={s} value={s}>
                    {s}
                    </option>
                ))}
                </select>
                <Button type="button" size="sm" variant="danger" disabled={isBusy} onClick={() => onDelete(task.id)}>Excluir</Button>
            </div>
    </div>
  );
}