import React from "react";
import Biodata from "./Biodata";
import { ITask } from "@/types/tasks";


interface TodoListProps {
    biodatas: ITask[];
}


const TodoList: React.FC<TodoListProps> = ({ biodatas }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th className="w-5/6">Name</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {biodatas.map((biodata) => (
                        <Biodata key={biodata.id} biodatas={biodata} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TodoList;
