import {Priority} from './Priority';
import {TaskStatus} from './TaskStatus';

export interface Task{
    id: string;
    title: string;
    description: string;
    priority: Priority;
    status: TaskStatus;
    deadline: Date;
    createdAt: Date;
    updatedAt: Date;
}