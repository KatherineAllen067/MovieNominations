import React from "react";

function Modal({ open, children, onClose }){
    if (!open) return null

    return(
        <>
        {children}
        <button className="delete" onClick={onClose}>X</button>
        </>
    );
}

export default Modal;