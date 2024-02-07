import { ITask } from "./types/tasks";


const baseUrl = 'http://localhost:3000';

export const getAllTodos = async (): Promise<ITask[]> => {
    const res = await fetch(`${baseUrl}/biodata`, { cache: 'no-store' });
    const todos = await res.json();
    return todos;
}

export const addPerson = async (todo: ITask): Promise<ITask> => {
    const res = await fetch(`${baseUrl}/biodata`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    const newTodo = await res.json();
    return newTodo;
}

export const deletePerson = async (id: string): Promise<void> => {
    await fetch(`${baseUrl}/biodata/${id}`, {
        method: 'DELETE',
    })
}

export const editPerson = async (todo: ITask): Promise<ITask> => {
    const res = await fetch(`${baseUrl}/biodata/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    const updatedPersonName = await res.json();
    return updatedPersonName;
}