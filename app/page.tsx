import AddTask from "./components/AddTask";

export default function Home() {
    return (
        <main className="w-10/12 mx-auto mt-4">
            <div className='text-center my-5 flex flex-col gap-4'>
                <h1 className='text-2xl font-bold'>Todo List App</h1>
                <AddTask />
            </div>
            {/* <TodoList tasks={tasks} /> */}
        </main>
    );
}
