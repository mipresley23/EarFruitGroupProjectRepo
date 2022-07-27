import React, {useEffect, useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AudioListProvider, {AudioListContext} from '../../context/audioList';
import { getSongs } from '../../store/songs';
import EditSongModal from '../EditSongModal';
import ConfirmDeleteModal from '../ConfirmDeleteModal';
import ReactJkMusicPlayer from 'react-jinke-music-player'

function Songs() {



    const songs = useSelector(state => state?.songs);
    const dispatch = useDispatch();
    const history = useHistory();
    const songsArr = Object.values(songs);
    console.log('songs: ', songs)
    const {audioList, setAudioList} = useContext(AudioListContext)
    const [playButton, setPlayButton] = useState(false);

    const [audios, setAudios] = useState([])
    console.log('audios: ', audios)

    useEffect(() => {
        dispatch(getSongs());
    }, [dispatch]);

    useEffect(() => {
        setAudios(Object.values(songs))
    }, [songs])

    const handlePlaySong = async(e) => {
        e.preventDefault();
        const audioArr = e.target.value.split(',')
        console.log('audioArr: ', audioArr)
        setAudioList([])
        await setAudioList([{name: audioArr[0], artist: audioArr[1], musicSrc: audioArr[2]}])
    }
    const handleAddToQueue = async(e) => {
        e.preventDefault();
        const audioArr = e.target.value.split(',')
        console.log('audioArr: ', audioArr)
        console.log(audioList !== null)
        if(audioList !== null){
            setAudioList([...audioList], [{name: audioArr[0], artist: audioArr[1], musicSrc: audioArr[2]}])
        }
        setAudioList([{name: audioArr[0], artist: audioArr[1], musicSrc: audioArr[2]}])
    }

    console.log('audioList:', audioList)
    return (
        <div>
            <NavLink to='/add-song' >Add Song</NavLink>
            <ul>
                {songsArr && songsArr.map(song => (
                    <div>

                    <li key={song.id}>
                        <EditSongModal songId={song.id} onClick={console.log('click!')}/>
                        <ConfirmDeleteModal song={song} />
                        <p>{song.name}</p>
                        <p>{song.artist}</p>
                        <p>{song.album}</p>
                        <p>{song.genre}</p>
                        <p>{song.source}</p>
                        <button value={[song.name, song.artist, song.source]} type='button' onClick={handlePlaySong}>play</button>
                        <button value={[song.name, song.artist, song.source]} type='button' onClick={handleAddToQueue}>Add to Queue</button>
                    </li>
                    </div>
                ))}
            </ul>
        </div>
    )
}

// (e) => console.log(e.target.value)

export default Songs;
