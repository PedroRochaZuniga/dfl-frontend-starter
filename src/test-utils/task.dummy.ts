import { Priority } from '@/enums/Priority';
import {Task} from '../types/Task';
import { TaskStatus } from '@/enums/TaskStatus';

export const TaskData: Task[] = [
    {id: "1", title: "Trabalho de compiladores", description: "Trabalho de compiladores da faculdade", priority: Priority.Baixa, status: TaskStatus.Afazer, deadline: new Date("2026-10-30"), createdAt: new Date("2026-06-01"), updatedAt: new Date("2026-07-01")},
    {id: "2", title: "Trabalho de grafos", description: "Trabalho de grafos da faculdade", priority: Priority.Média, status: TaskStatus.Fazendo, deadline: new Date("2026-09-20"), createdAt: new Date("2026-07-21"), updatedAt: new Date("2026-09-01")},
    {id: "3", title: "Trabalho de redes", description: "Trabalho de redes da faculdade", priority: Priority.Alta, status: TaskStatus.Concluida, deadline: new Date("2026-11-17"), createdAt: new Date("2026-07-21"), updatedAt: new Date("2026-08-01")},
    {id: "4", title: "Trabalho de LCA", description: "Trabalho de Laboratório de Computação Aplicada da faculdade", priority: Priority.Urgente, status: TaskStatus.Atrasada, deadline: new Date("2026-11-17"), createdAt: new Date("2026-07-21"), updatedAt: new Date("2026-08-01")},
    {id: "5", title: "Trabalho de Computação Gráfica", description: "Trabalho de Computação Gráfica da faculdade", priority: Priority.Alta, status: TaskStatus.Atrasada, deadline: new Date("2026-11-17"), createdAt: new Date("2026-07-21"), updatedAt: new Date("2026-08-01")}
    
];