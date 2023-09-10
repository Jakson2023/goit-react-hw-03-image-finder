import { Overlay, Modal } from './Modal.styled';

export const ModalWindow = ({ onToggle, modalState, modalImage }) => {
  return (
    <div>
      {modalState && (
        <Overlay onClick={onToggle}>
          <Modal onClick={e => e.stopPropagation()}>
            <img src={modalImage} alt="" />
          </Modal>
        </Overlay>
      )}
    </div>
  );
};
