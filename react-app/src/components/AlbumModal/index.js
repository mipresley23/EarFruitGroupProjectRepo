import { useState, useEffect } from 'react';
import { Modal } from '../../context/Modal';
import Album from './Album';

function AlbumModal({album, albums, handlePlaySong, handleAddToQueue}) {

  const [showModal, setShowModal] = useState(false);
  const [albumArt, setAlbumArt] = useState();
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    albums[album].forEach(song => {
      if(song.albumImgUrl){
        setAlbumArt(song.albumImgUrl)
      }else{
        setAlbumArt('https://protkd.com/wp-content/uploads/2017/04/default-image.jpg')
      }
    })
  }, [albums, album])




  // function checkImage(url) {
  //   var image = new Image();
  //   image.src = url
  //   return image.width
  //   }


		// image.onload = function () {
    // }
  //   //     // setImageError(false);
  //   //     return true

	// 	// 	}
  //   //   return false
	// 	// };
	// 	// // image.onerror = function () {
	// 	// 	setImageError(true)
  //   //   return false
	// 	// };
  //   // return url;
	// }

  // useEffect(() => {
  //   checkImage(albumArt);
  // }, []);
  return (
    <>
      <button onClick={() => {
        setShowModal(true)
        }}>
          <div className='album-card'>
            <img src={albumArt} alt='album cover'/>
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
          <Album album={album} albums={albums} setShowModal={setShowModal} handlePlaySong={handlePlaySong} handleAddToQueue={handleAddToQueue} albumArt={albumArt}/>
        </Modal>
      )}
    </>
  );
}

export default AlbumModal;
