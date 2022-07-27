import React from 'react';

function Artists ({songsArr}) {

    let artists = {}
    songsArr.forEach(song => {
        if(!artists[song?.artist]){
            artists[song?.artist] = [song]
        } else {
            artists[song?.artist].push(song)
        }
    })
    console.log(artists)

    return (
        <ul id='artists'>
            {Object.keys(artists).map(artist => (
                <li key={artist}>
                    <h3>{artist}</h3>
                    <ul id='songs'>
                        {artists[artist].map(song => (
                            <li key={song?.id}>
                                <h4>{song?.name}</h4>
                                <p>{song?.album}</p>
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    )
}

export default Artists;
