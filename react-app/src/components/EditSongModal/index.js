import { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditSong from './EditSong';

import './editModal.css';

function EditSongModal({song}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <i className="fas fa-edit fa-lg" onClick={() => {
        setShowModal(true)

        }}></i>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditSong song={song} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default EditSongModal;
