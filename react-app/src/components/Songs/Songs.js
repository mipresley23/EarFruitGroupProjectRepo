import React, {useEffect, useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AudioListProvider, {AudioListContext} from '../../context/audioList';
import { getSongs } from '../../store/songs';
import Artists from '../Artists/Artists';
import Albums from '../Albums/Albums';
import EditSongModal from '../EditSongModal';
import ConfirmDeleteModal from '../ConfirmDeleteModal';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import playSongButton from '../assets/play_button.png';
import addToPlaylistButton from '../assets/addtoPlaylist.png';
import circleLogo from '../assets/circleLogo.jpeg';

import './Songs.css'

function Songs({songPage}) {
    const songs = useSelector(state => state?.songs);
    const dispatch = useDispatch();
    const history = useHistory();
    const songsArr = Object.values(songs);
    console.log('songsArr: ', songsArr)

    const {audioList, setAudioList, clearAudioList, setClearAudioList} = useContext(AudioListContext)

    const sessionUser = useSelector((state) => state.session.user);

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
        setClearAudioList(true)
        const audioArr = e.target.value.split(',')
        console.log('audioArr: ', audioArr)
        console.log('new audio aws source: ', audioArr[2])
        setAudioList([])
        if (audioArr[3]){
            await setAudioList([{name: audioArr[0], singer: audioArr[1], cover: audioArr[3], musicSrc: audioArr[2]}])
        }else{
            await setAudioList([{name: audioArr[0], singer: audioArr[1], cover: circleLogo, musicSrc: audioArr[2]}])
        }
    }
    const handleAddToQueue = async(e) => {
        e.preventDefault();
        setClearAudioList(false)
        const audioArr = e.target.value.split(',')
        console.log('audioArr: ', audioArr)
        console.log(audioList !== null)
        console.log('audioListinQueueFunc: ', audioList)
        if(audioList){
            setAudioList([{name: audioArr[0], singer: audioArr[1], cover: audioArr[3], musicSrc: audioArr[2]}])
        }
    }

    console.log('audioList:', audioList)
    return (
        <>
            {songPage === 'artists' && <Artists songsArr={songsArr}/>}
            {songPage === 'albums' && <Albums songsArr={songsArr}/>}
            {songPage === '' && <ul id='songs'>
                {songsArr && songsArr.map(song => (

                            <div id='song-page-song-info-container'>
                                <li id='song' key={song.id}>
                                    { sessionUser && sessionUser.id === song.user_Id.id &&
                                    <>
                                        <EditSongModal song={song} />
                                        <ConfirmDeleteModal song={song} />
                                    </>
                                    }
                                    { sessionUser && sessionUser.id !== song.user_Id.id &&
                                    <>
                                        <div />
                                        <div />
                                    </>
                                    }

                                    <p>{song.name}</p>
                                    <p>{song.artist}</p>
                                    <p>{song.album}</p>
                                    <p>{song.genre}</p>
                                    <input className='song-buttons' id='user-profile-play-button' type='image' src={playSongButton} value={[song.name, song.artist, song.source, song.albumImgUrl]} onClick={handlePlaySong}/>
                                    <input className='song-buttons' id='user-profile-queue-button' value={[song.name, song.artist, song.source, song.albumImgUrl]} type='image' src={addToPlaylistButton} onClick={handleAddToQueue}/>
                                </li>
                            </div>

                ))}
            </ul>}

        </>
    )
}

// (e) => console.log(e.target.value)

export default Songs;
