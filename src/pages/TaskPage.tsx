import TaskList from "@/components/task/TaskList";
import { Button } from "@/components/ui/Button";
import { TaskData } from "@/test-utils/task.dummy";
import { Task } from "@/types/Task";
import { ArrowLeftIcon, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const delay = () => new Promise((resolve)=> setTimeout(resolve, 2000))


export default function TaskPage(){
const [task, setTask] = useState<Task[]>([]);
const [isloading, setIsloading] = useState<boolean>(true);

const loadTask = async() =>{
    try{
        setIsloading(true);
        await delay();
        setTask([...TaskData]);
    } catch (error){
        console.log(error)

    }finally{
        setIsloading(false)
    }
};

useEffect(() => {void loadTask();},[]);

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
            <div>
                <p>Carregando...</p>
            </div>
        ): task.length == 0? (
            <div>
                <p>Nenhuma tarefa encontrada!</p>
            </div>
        ): (
            <TaskList task ={task}/>
        )}
    </main>
    );
}