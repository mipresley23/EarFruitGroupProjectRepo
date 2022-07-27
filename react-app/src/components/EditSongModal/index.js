import { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditSong from './EditSong';
import editButton from '../assets/edit_button.png';
import './editModal.css';

function EditSongModal({song}) {
  console.log(EditSong)
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id='edit-modal-button' onClick={() => {
        setShowModal(true)

        }}><img id='edit-song-modal-button-img' src={editButton}></img></button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditSong song={song} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default EditSongModal;
