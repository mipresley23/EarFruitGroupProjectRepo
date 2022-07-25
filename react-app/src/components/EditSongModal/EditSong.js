import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editSong } from '../../store/songs';
// import { Redirect } from 'react-router-dom';
// import { login } from '../store/session';

const EditSong = ({songId}) => {
    const [errors, setErrors] = useState([]);
    const [name, setName] = useState('');
    const [album, setAlbum] = useState('');
    const [genre, setGenre] = useState('Rock');
    const [artist, setArtist] = useState('');
    const [source, setSource] = useState(undefined);

    // const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    // console.log(songId)
    // const genres = [
    //     {value: 'Rock', label: 'Rock'},
    //     {value: 'Pop', label: 'Pop'},
    //     {value: 'Rap', label: 'Rap'},
    //     {value: 'Electronic', label: 'Electronic'},
    //     {value: 'Country', label: 'Country'},
    //     {value: 'Classical', label: 'Classical'},
    //     {value: 'Jazz', label: 'Jazz'},
    //     {value: 'Blues', label: 'Blues'},
    //     {value: 'Metal', label: 'Metal'},
    //     {value: 'Other', label: 'Other'}

    // ]

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
            name,
            album,
            genre,
            artist,
            source
        };

        // console.log(song)
        dispatch(editSong(song))
        history.push('/');
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

export default EditSong;
