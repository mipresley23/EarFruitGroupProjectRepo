import { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditSong from './EditSong';

function EditSongModal({song}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => {
        setShowModal(true)
        }}><i class="fa fa-edit"></i></button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditSong song={song} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default EditSongModal;
