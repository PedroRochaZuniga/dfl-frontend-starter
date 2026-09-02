import {Priority} from '../enums/Priority';
import {TaskStatus} from '../enums/TaskStatus';

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