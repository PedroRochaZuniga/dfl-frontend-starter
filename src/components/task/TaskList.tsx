import {Task} from "@/types/Task";
import TaskCard from "./TaskCard";
import { TaskStatus } from "@/enums/TaskStatus";


interface TaskListProps{
    tasks: Task[]
    onChangeStatus: (task: Task, status: TaskStatus) => void;
    onDelete: (id:string) => void;
    isBusy?: boolean;
}

export default function TaskList({tasks, onChangeStatus, onDelete, isBusy }: TaskListProps){
    if (tasks.length === 0){
        return(
            <p className="text-lg font-semibold text-gray-500" role="status">Não existem Tasks!</p>
        );
    }
    return (
    <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900">
      <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">Lista de Tarefas</h2>
    
    <div className="grid gap-4 sm:grid-cols-2">
        {tasks.map((task)=> (<TaskCard 
        key={task.id} 
        task={task}
        onChangeStatus={onChangeStatus}
        onDelete={onDelete}
        isBusy={isBusy}
        />))
        }
    </div>
    </div>
    );
}