import React from 'react'


interface ModalProps {
    openModal: boolean;
    setOpenModal:  (open: boolean) => boolean | void;
}



const ModalAdd: React.FC<ModalProps> = ({ openModal, setOpenModal }) => {
    return (
        <dialog className={`modal ${openModal ? "modal-open" : ""}`}>
            <div className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => {setOpenModal(false)}}>✕</button>
                <form method="dialog">
                <h3 className="font-bold text-lg">Add Person</h3>
                <p className="py-4">add person</p>
                </form>
            </div>
        </dialog>
    )
}

export default ModalAdd