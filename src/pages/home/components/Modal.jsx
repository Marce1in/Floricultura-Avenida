import { useEffect, useRef } from "react";

/**
 * @param {Object} props
 * @param {boolean} props.modalState - Controla a visibilidade do Modal
 * @param {Function} props.setModal - Declara se o modal é visivel ou não
 * @param {import("react").ReactNode} props.children - Conteúdo dentro do modal
 */
export default function Modal({ modalState, setModal, children }) {
    const dialogRef = useRef(null)

    useEffect(() => {
        if (modalState == true){
            dialogRef.current.showModal()
        }
        else{
            dialogRef.current.close()
        }

    }, [modalState])

    return(
        <dialog className="modal" ref={dialogRef} onCancel={() => setModal(false)}>
            <div className="modal-box w-fit min-w-96 max-w-screen-xl">
                <button 
                    onClick={() => setModal(false)} 
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                > ✕ </button>

                {children}
            </div>
        </dialog>
    )
}

