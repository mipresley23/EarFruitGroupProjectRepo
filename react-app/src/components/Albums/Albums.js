import React from 'react';
import AlbumModal from '../AlbumModal';
import './Albums.css';

function Albums ({songsArr, handlePlaySong, handleAddToQueue}) {

    let albums = {}
    songsArr.forEach(song => {
        if(!albums[song?.album]){
            albums[song?.album] = [song]
        } else {
            albums[song?.album].push(song)
        }
    })

    return (
            <ul id='albums'>
                {Object.keys(albums).map(album => (
                    <li key={album} >
                        <AlbumModal album={album} albums={albums} handlePlaySong={handlePlaySong} handleAddToQueue={handleAddToQueue}/>
                    </li>
                ))}
            </ul>
    )
}

export default Albums;
