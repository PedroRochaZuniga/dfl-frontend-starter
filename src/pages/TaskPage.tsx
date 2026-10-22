import TaskList from "@/components/task/TaskList";
import { Button } from "@/components/ui/Button";
import { ArrowLeftIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useGetTasks } from "@/hooks/useGetTasks";
import { ErrorState, LoadingState } from "@/components/ui";

export default function TaskPage() {
  const { data: tasks = [], isPending, isError, refetch } = useGetTasks();
  const empty = () => {};

  return (
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

      <p className="text-sm text-gray-600 dark:text-gray-400">Lista das tarefas listadas</p>

      {isPending && <LoadingState message="Carregando tarefas..." />}
      {isError && (
        <ErrorState message="Erro ao carregar as tarefas" onRetry={() => void refetch()} />
      )}
      {!isPending && !isError && (
        <TaskList tasks={tasks} onChangeStatus={empty} onDelete={empty} isBusy />
      )}
    </main>
  );
}