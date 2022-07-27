import { useState } from 'react';
import { Modal } from '../../context/Modal';
import Album from './Album';

function AlbumModal({album, albums}) {
  console.log('SONG : ', albums[album])
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => {
        setShowModal(true)
        }}>
          <div className='album-card'>
            <img src='https://protkd.com/wp-content/uploads/2017/04/default-image.jpg' alt='album cover'/>
            <div className='album-card-info'>
              <div className='album-card-info-title'>
                <h3>{album}</h3>
                <p>{albums[album][0].artist}</p>
              </div>
              <p>{albums[album].length} songs</p>
            </div>
          </div>
        </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <Album album={album} albums={albums} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default AlbumModal;
