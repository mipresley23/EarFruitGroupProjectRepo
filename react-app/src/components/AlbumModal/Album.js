

function Album ({album, albums}) {
    return (
        <>
        <h3>{album}</h3>
        <ul id='songs'>
            {albums[album].map(song => (
                <li key={song?.id}>
                    <p>{song?.name}</p>
                    <p>{song?.artist}</p>
                </li>
            ))}
        </ul>
        </>
    )
}

export default Album;
