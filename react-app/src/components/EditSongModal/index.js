import { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditSong from './EditSong';

function EditSongModal({songId}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='edit-button' onClick={() => {
        setShowModal(true)
        }}>Edit Song</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditSong songId={songId} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default EditSongModal;
