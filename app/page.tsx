import { getAllTodos } from "@/api";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

export default async function Home() {
    const biodata = await getAllTodos();
    return (
        <main className="w-10/12 mx-auto mt-4">
            <div className='text-center my-5 flex flex-col gap-4'>
                <h1 className='text-2xl font-bold'>Todo List App</h1>
                <AddTask />
            </div>
            <TodoList biodatas={biodata} />
        </main>
    );
}
