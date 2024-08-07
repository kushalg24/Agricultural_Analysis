import React, { useEffect,useContext} from 'react';
import ReactDOM from 'react-dom';
import AppContext from '../context/AppContext/AppContext';
const CallToAction = ({ showModal, setShowModal }) => {
  const modalRoot = document.getElementById('modal-root');
  const modalContainer = document.createElement('div');
  const {showLoading1,setShowLoading1}=useContext(AppContext);
  useEffect(() => {
    modalRoot.appendChild(modalContainer);

    return () => {
      modalRoot.removeChild(modalContainer);
    };
  }, [modalContainer, modalRoot]);
  return ReactDOM.createPortal(
    showLoading1?(<div className="graph_modal">
    <div className="graph-modal-content">
      <h5 style={{textAlign:"center"}}>Call To Action</h5>
      <div style={{paddingLeft:"15px"}}>
        <div style={{display:"flex",justifyContent:"flex-start",alignItems:'center',gap:"5px"}}>
            <input type="radio"/> <label>Disable the Service</label>
       </div>
      </div>
      <div className="btnGroups">
      <span className='closebtn1' onClick={() => { setShowLoading1(false) }}>close</span>
      <button className='actionbtn1'>Action</button>
  </div>
    </div>
  </div>):null,
    modalContainer
  );
};

export default CallToAction;
