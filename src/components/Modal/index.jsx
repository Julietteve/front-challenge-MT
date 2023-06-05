import React from 'react';
import { createPortal } from 'react-dom';
import "./styles.css"

const Modal = (props) => {

    const {children,handleModalClose} = props

    return createPortal(
        <div className="modal">
            <div className="modal-content">
                <span onClick={handleModalClose} className="close">&times;</span>
                {children}
            </div>
        </div>,
        document.getElementById('modal')
    )
};

export default Modal;