import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editSong, getSongs } from '../../store/songs';
// import { Redirect } from 'react-router-dom';
// import { login } from '../store/session';

const EditSong = ({song, setShowModal}) => {
    console.log(song)
    const [errors, setErrors] = useState([]);
    const [name, setName] = useState(song?.name);
    const [album, setAlbum] = useState(song?.album);
    const [genre, setGenre] = useState(song?.genre);
    const [artist, setArtist] = useState(song?.artist);
    const [source, setSource] = useState(song?.source);

    // const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        setName(song?.name);
        setAlbum(song?.album);
        setGenre(song?.genre);
        setArtist(song?.artist);
        setSource(song?.source);
        console.log({name, album, genre, artist, source})
    });

    useEffect(() => {
        const errors = [];

        if (!name) errors.push('Name is required');
        if (!artist) errors.push('artist is required');
        if (!album) errors.push('album is required');
        if (!genre) errors.push('genre is required');

        setErrors(errors);
    }, [name, album, genre, artist, source]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const song = {
            id: song?.id,
            name,
            album,
            genre,
            artist,
            source
        };

        // console.log(song)
        dispatch(editSong(song)).then(() => {
            dispatch(getSongs());
            setShowModal(false);
        })
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
                    placeholder={song?.name}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='artist'>Artist</label>
                <input
                    name='artist'
                    type='text'
                    placeholder={song?.artist}
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='album'>Album</label>
                <input
                    name='album'
                    type='text'
                    placeholder={song?.album}
                    value={album}
                    onChange={(e) => setAlbum(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='genre'>Genre</label>
                <select
                    name='genre'
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                >
                    <option value='Rock'>Rock</option>
                    <option value='Pop'>Pop</option>
                    <option value='Rap'>Rap</option>
                    <option value='Electronic'>Electronic</option>
                    <option value='Country'>Country</option>
                    <option value='Classical'>Classical</option>
                    <option value='Jazz'>Jazz</option>
                    <option value='Blues'>Blues</option>
                    <option value='Metal'>Metal</option>
                    <option value='Other'>Other</option>
                </select>
            </div>
            <div>
                <label htmlFor='source'>Upload</label>
                <input
                    name='source'
                    hidden='hidden'
                    type='file'
                    placeholder='Upload'
                    value={source}
                    onChange={(e) => setSource(e.target.files[0])}
                />
            </div>
            <button type='submit' disabled={errors.length > 0}>Submit</button>
        </form>
    );

}

export default EditSong;
