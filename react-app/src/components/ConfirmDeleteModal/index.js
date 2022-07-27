import { useState } from 'react';
import { Modal } from '../../context/Modal';
import ConfirmDelete from './ConfirmDelete';
import deleteButton from '../assets/delete_button.png';
function ConfirmDeleteModal({song}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id='delete-modal-button' onClick={() => {
        setShowModal(true)
        }}><img id='delete-song-modal-img' src={deleteButton}></img></button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ConfirmDelete song={song} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default ConfirmDeleteModal;
