import { useState } from 'react';
import { Modal } from '../../context/Modal';
import ConfirmDelete from './ConfirmDelete';
import deleteButton from '../assets/delete_button.png';


function ConfirmDeleteModal({song}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <i className="fas fa-trash fa-lg" onClick={() => {
        setShowModal(true)
        }}></i>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ConfirmDelete song={song} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default ConfirmDeleteModal;
