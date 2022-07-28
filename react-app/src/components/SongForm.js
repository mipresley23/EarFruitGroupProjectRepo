import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createSong } from '../store/songs';
import './songForm.css'
// import { Redirect } from 'react-router-dom';
// import { login } from '../store/session';

const SongForm = () => {
    const hiddenFileInput = useRef(null);
    const [errors, setErrors] = useState([]);
    const [name, setName] = useState('');
    const [album, setAlbum] = useState('');
    const [albumImgUrl, setAlbumImgUrl] = useState('');
    const [genre, setGenre] = useState('Rock');
    const [artist, setArtist] = useState('');
    const [mp3, setMP3] = useState(null);
    const [mp3Loading, setMP3Loading] = useState(false);

    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        const errors = [];

        if (!name) errors.push('The song name is required.');
        if (!artist) errors.push('The artist is required.');
        if (!album) errors.push('The album is required.');
        if (!genre) errors.push('The genre is required.');
        if (!mp3) errors.push('The song mp3 is required.');

        setErrors(errors);
    }, [name, album, genre, artist, mp3]);

    const handleClick = e => {
        e.preventDefault();
        hiddenFileInput.current.click();
      };

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
                albumImgUrl,
                genre,
                artist,
                source: jsonRes.source
            };

            // console.log('------song------', song)
            const response = await dispatch(createSong(song));

            if (response === 'Song Uploaded') {
                history.push('/');
            }

        }
        else {
            setMP3Loading(false);
            errors.push('The file must be an mp3.');
            setErrors(errors);
            // console.log("---error uploading song----", res)
        }
    }

    return (
        <div className='song_form_div'>
            <form onSubmit={handleSubmit} className='song_form'>
                { errors.length > 0 && <div className='song_form_errors'>
                    {errors.map((error, ind) => (
                        <div key={ind} className='song_form_error'>{error}</div>
                    ))}
                </div> }

                <div className='song_form_divs'>
                    <div className='sf_label'><label htmlFor='name'>Name</label></div>
                    <input
                        name='name'
                        type='text'
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='song_form_divs'>
                <div className='sf_label'><label htmlFor='artist'>Artist</label></div>
                    <input
                        name='artist'
                        type='text'
                        placeholder='Artist'
                        value={artist}
                        onChange={(e) => setArtist(e.target.value)}
                    />
                </div>
                <div className='song_form_divs'>
                    <div className='sf_label'><label htmlFor='album'>Album</label></div>
                    <input
                        name='album'
                        type='text'
                        placeholder='Album'
                        value={album}
                        onChange={(e) => setAlbum(e.target.value)}
                    />
                </div>
                <div className='song_form_divs'>
                    <div className='sf_label'><label htmlFor='albumImgUrl'>Album Art URL</label></div>
                    <input
                        name='albumImgUrl'
                        type='text'
                        placeholder='(Optional) Album Art URL'
                        value={albumImgUrl}
                        onChange={(e) => setAlbumImgUrl(e.target.value)}
                    />
                </div>
                <div className='song_form_divs'>
                    <div className='sf_label'><label htmlFor='genre'>Genre</label></div>
                    <select
                        name='genre'
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                    >
                        <option className='sf_option' value='Rock'>Rock</option>
                        <option className='sf_option' value='Pop'>Pop</option>
                        <option className='sf_option' value='Rap'>Rap</option>
                        <option className='sf_option' value='Electronic'>Electronic</option>
                        <option className='sf_option' value='Country'>Country</option>
                        <option className='sf_option' value='Classical'>Classical</option>
                        <option className='sf_option' value='Jazz'>Jazz</option>
                        <option className='sf_option' value='Blues'>Blues</option>
                        <option className='sf_option' value='Metal'>Metal</option>
                        <option className='sf_option' value='Other'>Other</option>
                    </select>
                </div>
                <div className='song_form_divs'>
                    <div className='sf_label'><label htmlFor='source'>Upload</label></div>
                        <button onClick={(e)=> handleClick(e)}>
                            Upload mp3
                        </button>
                        <input
                            name='source'
                            type='file'
                            accept=''
                            ref={hiddenFileInput}
                            style={{ display: 'none' }}
                            onChange={(e) => setMP3(e.target.files[0])}
                        />
                </div>
                {mp3 && <p className='song_form_p'>{mp3.name}</p>}
                <button type='submit' disabled={errors.length > 0} className='song_form_divs sf_submit'>Submit</button>
                {(mp3Loading)&& <p className='song_form_divs'>Uploading   <img src='https://i.gifer.com/ZZ5H.gif' alt='Uploading' className='uploading_img'></img></p>}
            </form>
        </div>
    );

}

export default SongForm;
