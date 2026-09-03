import TaskList from "@/components/task/TaskList";
import { Button } from "@/components/ui/Button";
import { TaskData } from "@/test-utils/task.dummy";
import { Task } from "@/types/Task";
import { ArrowLeftIcon, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function wait(ms: number){
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export default function TaskPage(){
const [tasks, setTask] = useState<Task[]>([]);
const [isloading, setIsloading] = useState<boolean>(true);

useEffect(() => {
    async function loadTask(){
        setIsloading(true);
        try{
            await wait(2000);
            setTask(TaskData);
        } finally{
            setIsloading(false);
        }
        }
        loadTask();
    },[]);

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

        {isloading ? (
            <div className="flex items-center gap-2 text-gray">
                <Loader2 className="h-4 w-4 animate-spin"/>
                <p>Carregando...</p>
            </div>
        ) : (
          <TaskList tasks ={tasks}/>
        )}
    </main>
    );
}