import {Task} from '../types/Task';

export const TaskData: Task[] = [
    {id: "1", title: "Trabalho de compiladores", description: "Trabalho de compiladores da faculdade", priority: 1, status: 1, deadline: new Date("2026-10-30"), createdAt: new Date("2026-06-01"), updatedAt: new Date("2026-07-01")},
    {id: "2", title: "Trabalho de grafos", description: "Trabalho de grafos da faculdade", priority: 2, status: 3, deadline: new Date("2026-09-20"), createdAt: new Date("2026-07-21"), updatedAt: new Date("2026-09-01")},
    {id: "3", title: "Trabalho de redes", description: "Trabalho de redes da faculdade", priority: 3, status: 2, deadline: new Date("2026-11-17"), createdAt: new Date("2026-07-21"), updatedAt: new Date("2026-08-01")}
];