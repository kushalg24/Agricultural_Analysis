import "./PipelineModal.css"
const PipelineModal = ({setPipelinemodal}) => {
    return (
        <div className="pipeline-modal-background">
            <div className="pipeline-modal">
                <div style={{width:"100%", height:"93%"}}>
                    <iframe src="https://cdn.elastic.snaplogic.com/sl/login.html#pipe_snode=6558e65c37260dda24f5b1e2" width="100%" height="100%"/>
                </div>
           <div style={{marginTop:"7px"}}>
           <button
                className="pipeline-modal-close-button"
                onClick={() => setPipelinemodal(false)}>
                Close
            </button>
           </div>
            </div>
        </div>
    )
}
export default PipelineModal;