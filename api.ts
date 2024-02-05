import { ITask } from "./types/tasks";


const baseUrl = 'http://localhost:3000';

export const getAllTodos = async (): Promise<ITask[]> => {
    const res = await fetch(`${baseUrl}/biodata`, { cache: 'no-store' });
    const todos = await res.json();
    return todos;
  }