import React from 'react';
import AlbumModal from '../AlbumModal';

function Albums ({songsArr}) {

    let albums = {}
    songsArr.forEach(song => {
        if(!albums[song?.album]){
            albums[song?.album] = [song]
        } else {
            albums[song?.album].push(song)
        }
    })
    console.log(albums)

    return (
        <ul id='albums'>
            {Object.keys(albums).map(album => (
                <li key={album}>
                    <AlbumModal album={album} albums={albums}/>
                </li>
            ))}
        </ul>
    )
}

export default Albums;
