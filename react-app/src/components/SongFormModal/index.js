import { useState } from 'react';
import { Modal } from '../../context/Modal';
import SongForm from './SongForm';
import editButton from '../assets/edit_button.png';
import '../songForm.css';
import '../SideBar/SideBar.css'

function SongFormModal() {
  // console.log(SongForm)
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <div id='song-modal-div' className='sidebar-link' onClick={() => {setShowModal(true)
        }}>
        <i className="fa fa-plus" id='add-song' />
        Add Song
    </div>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SongForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default SongFormModal;
