import { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditSong from './EditSong';

function EditSongModal({song}) {
  console.log(EditSong)
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => {
        setShowModal(true)
        }}>
          <i className='fas fa-edit'/>
        </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditSong song={song} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default EditSongModal;
