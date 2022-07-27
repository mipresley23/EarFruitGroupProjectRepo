import React from 'react';

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
                    <h3>{album}</h3>
                    <ul id='songs'>
                        {albums[album].map(song => (
                            <li key={song?.id}>
                                <p>{song?.name}</p>
                                <p>{song?.album}</p>
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    )
}

export default Albums;
