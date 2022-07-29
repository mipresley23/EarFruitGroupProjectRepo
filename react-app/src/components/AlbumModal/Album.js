

function Album ({album, albums, handlePlaySong, handleAddToQueue, albumArt}) {
    return (
        <>
        <div className='album-header'>
            <img src={albumArt} className='album-art'/>
            <div className="album-info">
                <h1>{album}</h1>
                <h2>{albums[album][0]?.artist}</h2>
            </div>
        </div>
        <ul id='album-songs'>
            {albums[album].map((song, i) => (
                <li key={song?.id} className='album-song'>
                    <p>{i}</p>
                    <p>{song?.name}</p>
                    <i onClick={() => handlePlaySong([
                    	song.name,
                    	song.artist,
                    	song.source,
                    	song.albumImgUrl,
                    ])}
                    class="search-song-button fa-solid fa-play fa-xl"
                     />
                     <i onClick={() => handleAddToQueue([
						song.name,
						song.artist,
						song.source,
						song.albumImgUrl,
					])}
					class="search-song-button fa-solid fa-list fa-xl"
					 />
                </li>
            ))}
        </ul>
        </>
    )
}

export default Album;
