import TaskList from "@/components/task/TaskList";
import { Button } from "@/components/ui/Button";
import { Task } from "@/types/Task";
import { ArrowLeftIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useTasks } from "@/hooks/useTask";
import { TaskStatus } from "@/enums/TaskStatus";
import { ErrorState, LoadingState } from "@/components/ui";


export default function TaskPage(){
const {tasks, isLoading, error, isMutating, update, remove, reload} = useTasks();

const handleChangeStatus = async (task: Task, status: TaskStatus) =>{
    if(task.status === status) return;
    await update(task.id, {status});
};

const handleDelete = async (id: string) => {
    if (!confirm("Excluir esta tarefa?")) return;
    await remove(id);
  };

return(
    <main className="space-y-4">
    <div className="flex items-center justify-between gap-2">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Tarefas</h1>
        <Link to="/">
            <Button variant="neutral" className="gap-2">
                <ArrowLeftIcon className="h-4 w-4" />
                Voltar
            </Button>
        </Link>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400">
        Lista das tarefas listadas
        </p>

        {isLoading && <LoadingState message="Carregando tarefas..."/>}
        {error && <ErrorState message={error} onRetry={() => void reload()} />}
        {!isLoading && !error && (
            <TaskList
                tasks = {tasks}
                onChangeStatus ={handleChangeStatus}
                onDelete = {handleDelete}
                isBusy = {isMutating}/>)}
    </main>
    );
}