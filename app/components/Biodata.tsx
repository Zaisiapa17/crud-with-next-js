import { ITask } from '@/types/tasks';
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

interface TaskProps {
    biodatas: ITask;
}



const Biodata: React.FC<TaskProps> = ({ biodatas }) => {

    return (
        <tr key={biodatas.id}>
            <td>{biodatas.name}</td>
            <th className='flex gap-2'>
                <div className="tooltip" data-tip="edit">
                    <FiEdit
                        cursor='pointer'
                        className='text-blue-400'
                    />
                </div>
                <div className="tooltip" data-tip="delete">
                    <RiDeleteBin6Line
                        cursor='pointer'
                        className='text-red-400'
                    />
                </div>
            </th>
        </tr>
    )
}

export default Biodata