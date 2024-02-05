"use client"

import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import ModalAdd from './Modals/ModalAdd';


const AddTask = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const closeAndDelete = () => {
        setOpenModal(true);
        
    }
    
    return (
        <>
            <button className="btn btn-neutral btn-sm" onClick={closeAndDelete}>Add Task <FaPlus size={12} /></button>
            <ModalAdd openModal={openModal} setOpenModal={setOpenModal}/>
        </>
    )
}

export default AddTask