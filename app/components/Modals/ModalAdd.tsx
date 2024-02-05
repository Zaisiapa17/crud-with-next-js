import React from 'react'


interface ModalProps {
    openModal: boolean;
    setOpenModal:  (open: boolean) => boolean | void;
}



const ModalAdd: React.FC<ModalProps> = ({ openModal, setOpenModal }) => {
    return (
        <dialog className={`modal ${openModal ? "modal-open" : ""}`}>
            <div className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => { setOpenModal(false) }}>✕</button>
                <form method="dialog" className='text-start'>
                    <h3 className="font-bold text-lg">edit Person</h3>
                    <p className="py-4">edit person</p>
                </form>
                <div className="modal-action">
                    <button className="btn btn-sm btn-primary" onClick={() => {}}>Save</button>
                    <button className="btn btn-sm" onClick={() => { setOpenModal(false) }}>Close</button>
                </div>
            </div>
        </dialog>
    )
}

export default ModalAdd