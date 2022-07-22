import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Redirect } from 'react-router-dom';
// import { login } from '../store/session';

const SongForm = () => {
    const [errors, setErrors] = useState([]);
    const [name, setName] = useState('');
    const [album, setAlbum] = useState('');
    const [genre, setGenre] = useState('');
    const [artist, setArtist] = useState('');
    const [source, setSource] = useState(undefined);

    useEffect(() => {
        const errors = [];

        if (!name) errors.push('Name is required');
        if (!artist) errors.push('artist is required');
        if (!album) errors.push('album is required');
        if (!genre) errors.push('genre is required');
        if (!source) errors.push('No file selected');

        setErrors(errors);
    }, [name, album, genre, artist, source]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const song = {
            name,
            album,
            genre,
            artist,
            source
        };

        console.log(song)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                {errors.map((error, ind) => (
                    <div key={ind}>{error}</div>
                ))}
            </div>
            <div>
                <label htmlFor='name'>Name</label>
                <input
                    name='name'
                    type='text'
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='artist'>Artist</label>
                <input
                    name='artist'
                    type='text'
                    placeholder='Artist'
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='album'>Album</label>
                <input
                    name='album'
                    type='text'
                    placeholder='Album'
                    value={album}
                    onChange={(e) => setAlbum(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='genre'>Genre</label>
                <input
                    name='genre'
                    type='text'
                    placeholder='Genre'
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='source'>Upload</label>
                <input
                    name='source'
                    type='file'
                    placeholder='Upload'
                    // value={source}
                    onChange={(e) => setSource(e.target.files[0])}
                />
            </div>
            <button type='submit' disabled={errors.length > 0}>Submit</button>
        </form>
    );

}

export default SongForm;
