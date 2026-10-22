import { useState, type FormEvent } from "react";
import { Button, Input } from "@/components/ui";
import { Priority } from "@/enums/Priority";
import { TaskStatus } from "@/enums/TaskStatus";
import type { CreateTaskDto } from "@/types/Task";

interface TaskFormProps {
  onSubmit: (dto: CreateTaskDto) => void;
  onCancel: () => void;
  isSubmitting?: boolean;
  isError?: boolean;
}

export default function TaskForm({ onSubmit, onCancel, isSubmitting, isError }: TaskFormProps) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit({
      title: title.trim(),
      description: "",
      priority: Priority.Baixa,
      status: TaskStatus.Afazer,
      deadline: new Date(),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900"
    >
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Nova tarefa</h2>

      <div>
        <label
          htmlFor="task-title"
          className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Título
        </label>
        <Input id="task-title" required value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>

      {isError && (
        <p role="alert" className="text-sm text-red-600 dark:text-red-400">
          Não foi possível criar a tarefa. Tente novamente.
        </p>
      )}

      <div className="flex gap-2">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Salvando..." : "Salvar"}
        </Button>
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancelar
        </Button>
      </div>
    </form>
  );
}