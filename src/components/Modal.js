import React from "react";

function Modal(props) {
  return (
    <div className="modal">
        <div className="modal-overlay">        
        </div>
        <div className="modal-container">
            <button className="close-button" onClick={() => {props.setOpenModal(false)}}>
                ✕
            </button>
            <div className="modal-subcontainer-1">
                <img className="modal-avatar" src={props.avatar}/>
                <div className="modal-subcontainer-2">
                    <div className="modal-title">{props.title}</div>
                    <div className="modal-year">{props.year}</div>
                </div>
            </div>
            <img className="modal-image" src={props.image} />
        </div>
    </div>
  );
}

export default Modal;