  import 'components/Modal/style.css'


export const ModalWindow = ({onToggle, modalState, img}) =>{
  

    return (
    

      <div className="App">
        
        
        {modalState && (
          <div className="modal-overlay" onClick={
            onToggle()}>
          
            <div className="modal" onClick={(e) => e.stopPropagation()}>
            <img src="" alt="" />
            </div>
          </div>
        )}
      </div>
    );
  }








