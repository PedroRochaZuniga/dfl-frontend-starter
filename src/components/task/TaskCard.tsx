import { useState } from "react";
import { Priority } from "@/types/Priority";
import { TaskStatus } from "@/types/TaskStatus";
import {Task} from "src/types/Task";

interface TaskProps{
    task: Task;
}


export default function TaskCard({ task } : TaskProps){
    const [phase, setPhase] = useState(task.phase);
    const [deleted, setDeleted] = useState(false);

    if (deleted) return null;

    return(
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900">
      <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100">
            Tarefa: {task.title}</h1>
            <p className="text-sm text-gray-500">{task.description}</p>
            <p className="text-sm text-gray-500">Prioridade: {Priority[task.priority]}</p>
            <p className="text-sm text-gray-500">Prazo: {task.deadline.toLocaleDateString("pt-BR")}</p>
            {phase === "A-fazer" && (<span className = "mt-2 inline-block rounded bg-yellow-100 px-2 py-0.5 text-xs text-yellow-600">A-fazer</span>)}
            {phase === "Fazendo" && (<span className = "mt-2 inline-block rounded bg-blue-100 px-2 py-0.5 text-xs text-blue-600">Fazendo</span>)}
            {phase === "Feito" && (<span className = "mt-2 inline-block rounded bg-green-100 px-2 py-0.5 text-xs text-green-600">Feito</span>)}
            {phase === "Atrasada" && (<span className = "mt-2 inline-block rounded bg-red-100 px-2 py-0.5 text-xs text-red-600">Atrasada!</span>)}

            
            {phase != "Atrasada" && (<button className="flex items-center gap-2 mt-4 rounded bg-blue-600 px-3 py-2 text-sm text-white" onClick={() => setPhase("Feito")} disabled={phase === "Feito"}>{phase === "Feito"? "Concluida" : "Concluir task"}</button>)}
            {phase === "Feito" && (<p className="mt-2 text-xs text-green-700"> Esta task já foi feita</p>)}

            {phase === "Atrasada" && (<button className=" flex items-center gap-2 mt-4 rounded bg-blue-600 px-3 py-2 text-sm text-white" onClick={() => setDeleted(true)}>Excluir Task</button>)}
            

        </div>
    );
}
