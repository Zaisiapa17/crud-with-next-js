import { deletePerson } from '@/api';
import { useRouter } from 'next/navigation';
import React, { FormEvent, FormEventHandler } from 'react'


interface ModalProps {
    openModal: boolean;
    idPerson: string;
    setOpenModal: (open: boolean) => boolean | void;
}
const ModalDelete: React.FC<ModalProps> = ({openModal, setOpenModal, idPerson}) => {

    const router = useRouter();

    
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e: FormEvent) => {
        e.preventDefault();

        await deletePerson(idPerson);
        setOpenModal(false);
        router.refresh();
    }

    return (
        <dialog className={`modal ${openModal ? "modal-open" : ""}`}>
            <div className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => { setOpenModal(false) }}>✕</button>
                <form method="dialog" className='text-start' onSubmit={handleSubmit}>
                    <h3 className="font-bold text-lg mb-2">Add Person</h3>
                    <div className='flex'>
                        <p>Are you delete this person?</p>
                    </div>
                    <div className="modal-action">
                        <button type='submit' className="btn btn-sm btn-primary">Delete</button>
                        <div className="btn btn-sm" onClick={() => { setOpenModal(false) }}>Close</div>
                    </div>
                </form>
            </div>
        </dialog>
    )
}

export default ModalDelete