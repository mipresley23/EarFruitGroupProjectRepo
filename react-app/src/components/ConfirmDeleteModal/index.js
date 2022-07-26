import { useState } from 'react';
import { Modal } from '../../context/Modal';
import ConfirmDelete from './ConfirmDelete';

function ConfirmDeleteModal({songId}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => {
        setShowModal(true)
        }}><i class="fa fa-trash"></i></button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ConfirmDelete songId={songId} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default ConfirmDeleteModal;
