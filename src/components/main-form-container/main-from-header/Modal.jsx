import React, { useEffect,useContext} from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import AppContext from "../../../context/AppContext/AppContext";
const Modal = ({ showModal, setShowModal }) => {
  const modalRoot = document.getElementById('modal-root');
  const modalContainer = document.createElement('div');
  const {showLoading}=useContext(AppContext)
  useEffect(() => {
    modalRoot.appendChild(modalContainer);

    return () => {
      modalRoot.removeChild(modalContainer);
    };
  }, [modalContainer, modalRoot]);

  return ReactDOM.createPortal(
    showLoading ? (
      <div className="modal1">
        <div className="modal-content1">
          <img src="https://cdn.elastic.snaplogic.com/sl/img/common/logobusy.svg" alt=""  height={150} width={150}/>
        </div>
      </div>
    ) : null,
    modalContainer
  );
};

export default Modal;
