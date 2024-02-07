import { addPerson } from '@/api';
import { useRouter } from 'next/navigation';
import React, { FormEvent, FormEventHandler, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';


interface ModalProps {
    openModal: boolean;
    setOpenModal: (open: boolean) => boolean | void;
}



const ModalAdd: React.FC<ModalProps> = ({ openModal, setOpenModal }) => {

    const router = useRouter();
    const [personName, setPersonName] = useState<string>("");

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e: FormEvent) => {
        e.preventDefault();

        const trimmedName = personName.trim();
        if (trimmedName.length === 0) {
            toast.error("name cannot be empty");
            return;
        }

        await addPerson({
            id: uuidv4(),
            name: personName,
        });
        
        setOpenModal(false);
        setPersonName("");
        router.refresh();
    }

    return (
        <dialog className={`modal ${openModal ? "modal-open" : ""}`}>
            <div className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => { setOpenModal(false) }}>✕</button>
                <form method="dialog" className='text-start' onSubmit={handleSubmit}>
                    <h3 className="font-bold text-lg mb-2">Add Person</h3>
                    <div className='flex justify-center'>
                        <input
                            value={personName}
                            onChange={(e) => setPersonName(e.target.value)}
                            type='text'
                            placeholder='Name'
                            className="input input-bordered input-md w-full"
                        />
                    </div>
                    <div className="modal-action">
                        <button type='submit' className="btn btn-sm btn-primary" onClick={() => { }}>Save</button>
                        <div className="btn btn-sm" onClick={() => { setOpenModal(false) }}>Close</div>
                    </div>
                </form>
            </div>
            <Toaster />
        </dialog>
    )
}

export default ModalAdd