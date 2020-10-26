import React from "react";

function Modal({ open, children, onClose }){
    if (!open) return null
    return(
        <>
            <div className="modal__overlay"/>
            <div className="modal">
            {children}
            <button className="delete" onClick={onClose}>X</button>
            </div>
        </>
    );
}

export default Modal;