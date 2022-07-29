import {useContext} from 'react';
import { AudioListContext } from '../../context/audioList';
import playSongButton from '../assets/play_button.png';
import addToPlaylistButton from '../assets/addtoPlaylist.png';
import circleLogo from '../assets/earfruit-kiwi-circle-logo.png';
import './Artists.css'

function Artists ({songsArr}) {


    const {audioList, setAudioList, clearAudioList, setClearAudioList} = useContext(AudioListContext)

    let artists = {}
    songsArr.forEach(song => {
        if(!artists[song?.artist]){
            artists[song?.artist] = [song]
        } else {
            artists[song?.artist].push(song)
        }
    })
    // console.log('ARTISTS', artists['Jimi Hendrix'])

    const handlePlaySong = async(e) => {
        e.preventDefault();
        setClearAudioList(true)
        const audioArr = e.target.value.split(',')
        // console.log('audioArr: ', audioArr)
        setAudioList([])
        await setAudioList([{name: audioArr[0], singer: audioArr[1], cover: circleLogo, musicSrc: audioArr[2]}])
    }

    const handleAddToQueue = async(e) => {
        e.preventDefault();
        setClearAudioList(false)
        const audioArr = e.target.value.split(',')
        // console.log('audioArr: ', audioArr)
        // console.log(audioList !== null)
        // console.log('audioListinQueueFunc: ', audioList)
        if(audioList){
            setAudioList([{name: audioArr[0], singer: audioArr[1], cover: circleLogo, musicSrc: audioArr[2]}])
        }
    }

    const handleAddListtoQueue = async(e) => {
        e.preventDefault();
        const artist = e.target.value
        const audioObj = artists[artist]
        // console.log('audioObj: ', audioObj)

        if(audioList){
            setClearAudioList(false)
            audioObj.forEach(song => {
                console.log('SONG: ', song)
                setAudioList([{name: song.name, singer: artist , cover: circleLogo, musicSrc: song.source}])
            })
        }

    }

    return (
        <ul id='artists'>
            {Object.keys(artists).map(artist => (
                <li key={artist}>
                    <h2>{artist}</h2>
                    {/* <input className='song-buttons' type='image' src={addToPlaylistButton} value={artist} onClick={handleAddListtoQueue}/> */}
                    <ul id='songs'>
                        {artists[artist].map(song => (
                        <li id='artist-song' key={song.id}>
                            <p>{song.name}</p>
                            <p>{song.artist}</p>
                            <p>{song.album}</p>
                            <p>{song.genre}</p>
                            <input className='song-buttons' id='user-profile-play-button' type='image' src={playSongButton} value={[song.name, song.artist, song.source]} onClick={handlePlaySong}/>
                            <input className='song-buttons' id='user-profile-queue-button' value={[song.name, song.artist, song.source]} type='image' src={addToPlaylistButton} onClick={handleAddToQueue}/>
                        </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    )
}

export default Artists;
