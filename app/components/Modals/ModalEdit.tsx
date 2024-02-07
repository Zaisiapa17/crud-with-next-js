import React, { FormEvent, FormEventHandler, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { editPerson } from '@/api';
import toast, { Toaster } from 'react-hot-toast';


interface ModalProps {
    openModal: boolean;
    setOpenModal: (open: boolean) => boolean | void;
    data: {
        id: string;
        name: string;
    }
}


const ModalEdit: React.FC<ModalProps> = ({ openModal, setOpenModal, data }) => {

    const router = useRouter();

    const [personName, setPersonName] = useState<string>('');
    useEffect(() => {
        setPersonName(data.name);
    }, [data.name]);
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e: FormEvent) => {
        e.preventDefault();

        const trimmedName = personName.trim();
        if (trimmedName.length === 0) {
            toast.error("name cannot be empty");
            return;
        }
        
        await editPerson({
            id: data.id,
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
                <form method="dialog" onSubmit={handleSubmit}>
                    <h3 className="font-bold text-lg">edit Person</h3>
                    <div className='flex justify-center'>
                        <input
                            value={personName}
                            onChange={(e) => setPersonName(e.target.value)}
                            type='text'
                            placeholder='Name'
                            className="input input-bordered input-md w-full"
                        />
                    </div>
                </form>
                <div className="modal-action">
                    <button className="btn btn-sm btn-primary" onClick={() => { }}>Save</button>
                    <button className="btn btn-sm" onClick={() => { setOpenModal(false) }}>Close</button>
                </div>
            </div>
            <Toaster />
        </dialog>
    )
}

export default ModalEdit