import React from "react";

const TodoList = () => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th className="w-1"></th>
                        <th className="w-full">Name</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default TodoList;
