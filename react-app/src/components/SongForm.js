import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createSong } from '../store/songs';
// import { Redirect } from 'react-router-dom';
// import { login } from '../store/session';

const SongForm = () => {
    const [errors, setErrors] = useState([]);
    const [name, setName] = useState('');
    const [album, setAlbum] = useState('');
    const [genre, setGenre] = useState('Rock');
    const [artist, setArtist] = useState('');
    const [mp3, setMP3] = useState(null);
    const [mp3Loading, setMP3Loading] = useState(false);

    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();


    useEffect(() => {
        const errors = [];

        if (!name) errors.push('Name is required');
        if (!artist) errors.push('artist is required');
        if (!album) errors.push('album is required');
        if (!genre) errors.push('genre is required');
        if (!mp3) errors.push('song is required');

        setErrors(errors);
    }, [name, album, genre, artist, mp3]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = [];

        const formData = new FormData();
        formData.append("mp3", mp3);

        setMP3Loading(true);
        const res = await fetch('/api/songs/mp3', {
            method: "POST",
            body: formData
        });
        if (res.ok) {
            const jsonRes = await res.json();
            setMP3Loading(false);
            // console.log('------jsonRes----', jsonRes.source)

            const song = {
                name,
                album,
                genre,
                artist,
                source: jsonRes.source
            };



            // console.log('------song------', song)
            dispatch(createSong(song))
            history.push('/');
        }
        else {
            setMP3Loading(false);
            errors.push('Must be an mp3 file');
            setErrors(errors);
            // console.log("---error uploading song----", res)
        }
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
                    accept=''
                    placeholder='Upload'
                    onChange={(e) => setMP3(e.target.files[0])}
                />
            </div>
            <button type='submit' disabled={errors.length > 0}>Submit</button>
            {(mp3Loading)&& <p>Loading...</p>}
        </form>
    );

}

export default SongForm;
