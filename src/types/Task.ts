import {Priority} from './Priority';
import {TaskStatus} from './TaskStatus';

export interface Task{
    id: string;
    title: string;
    description: string;
    priority: Priority;
    status: TaskStatus;
    phase: "A-fazer" | "Fazendo" | "Feito" | "Atrasada";
    deadline: Date;
    createdAt: Date;
    updatedAt: Date;
}