"use client"

import { ITask } from '@/types/tasks';
import { useState } from 'react';
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import ModalEdit from './Modals/ModalEdit';
import ModalDelete from './Modals/ModalDelete';

interface TaskProps {
    biodatas: ITask;
}



const Biodata: React.FC<TaskProps> = ({ biodatas }) => {
    const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
    const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
    const [idPerson, setIdPerson] = useState<string>('');
    const [dataEdit, setDataEdit] = useState<{ id: string; name: string }>({
        id: '',
        name: '',
    });

    const changeEdit = (id: string, name: string) => {
        setDataEdit(prevDataEdit => ({
            ...prevDataEdit,
            id: id,
            name: name,
        }));
        setOpenModalEdit(true);
    }

    const changeDelete = (id: string) => {
        setIdPerson(id);
        setOpenModalDelete(true);
    }

    return (
        <tr key={biodatas.id}>
            <td>{biodatas.name}</td>
            <td className='flex gap-2'>
                <div className="tooltip" data-tip="edit">
                    <FiEdit
                        cursor='pointer'
                        className='text-blue-400'
                        onClick={() => changeEdit(biodatas.id, biodatas.name)}
                    />
                </div>
                <div className="tooltip" data-tip="delete">
                    <RiDeleteBin6Line
                        cursor='pointer'
                        className='text-red-400'
                        onClick={() => changeDelete(biodatas.id)}
                    />
                </div>
            </td>
            <ModalEdit openModal={openModalEdit} setOpenModal={setOpenModalEdit} data={dataEdit}/>
            <ModalDelete openModal={openModalDelete} setOpenModal={setOpenModalDelete} idPerson={idPerson}/>
        </tr>
    )
}

export default Biodata