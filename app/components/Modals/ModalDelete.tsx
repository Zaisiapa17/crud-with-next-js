import React from 'react'


interface ModalProps {
    openModal: boolean;
    setOpenModal: (open: boolean) => boolean | void;
}
const ModalDelete: React.FC<ModalProps> = ({openModal, setOpenModal}) => {
    return (
        <dialog className={`modal ${openModal ? "modal-open" : ""}`}>
            <div className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => { setOpenModal(false) }}>✕</button>
                <form method="dialog" className='text-start'>
                    <h3 className="font-bold text-lg mb-2">Add Person</h3>
                    <div className='flex'>
                        <p>Are you delete this person?</p>
                    </div>
                    <div className="modal-action">
                        <button type='submit' className="btn btn-sm btn-primary" onClick={() => { }}>Delete</button>
                        <div className="btn btn-sm" onClick={() => { setOpenModal(false) }}>Close</div>
                    </div>
                </form>
            </div>
        </dialog>
    )
}

export default ModalDelete