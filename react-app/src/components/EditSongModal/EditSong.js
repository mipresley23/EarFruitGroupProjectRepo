import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editSong, getSongs } from '../../store/songs';
import '../songForm.css'
// import { Redirect } from 'react-router-dom';
// import { login } from '../store/session';

const EditSong = ({song, setShowModal}) => {
    // console.log(song)

    const dispatch = useDispatch();
    const history = useHistory();

    const [errors, setErrors] = useState([]);
    const [name, setName] = useState(song?.name);
    const [album, setAlbum] = useState(song?.album);
    const [albumImgUrl, setAlbumImgUrl] = useState(song?.albumImgUrl);
    const [genre, setGenre] = useState(song?.genre);
    const [artist, setArtist] = useState(song?.artist);
    const [source, setSource] = useState(song?.source);
    const [firstSubmit, setFirstSubmit] = useState(false);

    const validateImg = (url) => {
        let re = /(http[s]*:\/\/)([a-z\-_0-9\/.]+)\.([a-z.]{2,3})\/([a-z0-9\-_\/._~:?#\[\]@!$&'()*+,;=%]*)([a-z0-9]+\.)(jpg|jpeg|png)/i;
        return re.test(url);
    }
    
    useEffect(() => {
        const errors = [];

        if (!name) errors.push('Name is required.');
        if (!artist) errors.push('Artist is required.');
        if (!album) errors.push('Album is required.');
        if (albumImgUrl.length > 0 && !(validateImg(albumImgUrl))) errors.push('Image url must be a url to a png, jpg, or jpeg.');
        if (!genre) errors.push('Genre is required.');

        setErrors(errors);
    }, [name, album, genre, artist, source, albumImgUrl]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFirstSubmit(true);

        if (!errors.length) {
            const Editedsong = {
                id: song.id,
                name,
                album,
                albumImgUrl,
                genre,
                artist,
                source
            };

            // console.log(song)
            dispatch(editSong(Editedsong)).then(() => {
                dispatch(getSongs());
                setShowModal(false);
            })
        }
    }

    return (
        <form onSubmit={handleSubmit} className='song_form'>
        { (errors.length > 0 && firstSubmit) && <div className='song_form_errors'>
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
            <div>
                <input
                    name='source'
                    hidden='hidden'
                    type='text'
                    // placeholder='Upload'
                    value={source}
                    onChange={(e) => setSource(e.target.files[0])}
                />
            </div>
            <button type='submit' className='song_form_divs sf_submit'>Submit</button>
        </form>
    );

}

export default EditSong;
