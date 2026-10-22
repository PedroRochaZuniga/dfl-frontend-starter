import { useState } from "react";
import TaskForm from "@/components/task/TaskForm";
import TaskList from "@/components/task/TaskList";
import { Button } from "@/components/ui/Button";
import { ArrowLeftIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useCreateTask } from "@/hooks/useCreateTask";
import { useDeleteTask } from "@/hooks/useDeleteTask";
import { useGetTasks } from "@/hooks/useGetTasks";
import { useUpdateTask } from "@/hooks/useUpdateTask";
import { TaskStatus } from "@/enums/TaskStatus";
import { ErrorState, LoadingState } from "@/components/ui";
import type { CreateTaskDto, Task } from "@/types/Task";

export default function TaskPage() {
  const { data: tasks = [], isPending, isError, refetch } = useGetTasks();
  const {
    mutate: createTask,
    isPending: isCreating,
    isError: isCreateError,
    reset: resetCreate,
  } = useCreateTask();
  const { mutate: updateTask, isPending: isUpdating, isError: isUpdateError } = useUpdateTask();
  const { mutate: deleteTask, isPending: isDeleting, isError: isDeleteError } = useDeleteTask();

  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleCreate = (dto: CreateTaskDto) => {
    resetCreate();
    createTask(dto, { onSuccess: () => setShowCreateForm(false) });
  };

  const handleCancelCreate = () => {
    resetCreate();
    setShowCreateForm(false);
  };

  const handleChangeStatus = (task: Task, status: TaskStatus) => {
    if (task.status === status) return;
    updateTask({ id: task.id, dto: { status } });
  };

  const handleDelete = (id: string) => {
    if (!confirm("Excluir esta tarefa?")) return;
    deleteTask(id);
  };

  return (
    <main className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Tarefas</h1>
        <div className="flex items-center gap-2">
          {!showCreateForm && (
            <Button type="button" onClick={() => setShowCreateForm(true)}>
              Nova tarefa
            </Button>
          )}
          <Link to="/">
            <Button variant="neutral" className="gap-2">
              <ArrowLeftIcon className="h-4 w-4" />
              Voltar
            </Button>
          </Link>
        </div>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400">Lista das tarefas listadas</p>

      {showCreateForm && (
        <TaskForm
          onSubmit={handleCreate}
          onCancel={handleCancelCreate}
          isSubmitting={isCreating}
          isError={isCreateError}
        />
      )}

      {(isUpdateError || isDeleteError) && (
        <p role="alert" className="text-sm text-red-600 dark:text-red-400">
          Não foi possível salvar a alteração. Tente novamente.
        </p>
      )}

      {isPending && <LoadingState message="Carregando tarefas..." />}
      {isError && (
        <ErrorState message="Erro ao carregar as tarefas" onRetry={() => void refetch()} />
      )}
      {!isPending && !isError && (
        <TaskList
          tasks={tasks}
          onChangeStatus={handleChangeStatus}
          onDelete={handleDelete}
          isBusy={isUpdating || isDeleting}
        />
      )}
    </main>
  );
}