import {useContext} from 'react';
import { AudioListContext } from '../../context/audioList';
import playSongButton from '../assets/play_button.png';
import addToPlaylistButton from '../assets/addtoPlaylist.png';
import circleLogo from '../assets/earfruit-kiwi-circle-logo.png';
import './Artists.css'

function Artists ({songsArr, handlePlaySong, handleAddToQueue}) {


    const {audioList, setAudioList, clearAudioList, setClearAudioList} = useContext(AudioListContext)

    let artists = {}
    songsArr.forEach(song => {
        if(!artists[song?.artist]){
            artists[song?.artist] = [song]
        } else {
            artists[song?.artist].push(song)
        }
    })


    const handleAddListtoQueue = async(e) => {
        e.preventDefault();
        const artist = e.target.value
        const audioObj = artists[artist]


        if(audioList){
            setClearAudioList(false)
            audioObj.forEach(song => {
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
                        <li className='artist-song' key={song.id}>
                            <p>{song.name}</p>
                            <p>{song.artist}</p>
                            <p>{song.album}</p>
                            <p>{song.genre}</p>
                            <i onClick={() => handlePlaySong([
                                song.name,
                                song.artist,
                                song.source,
                                song.albumImgUrl,
                            ])}
                            class="search-song-button fa-solid fa-play fa-xl"
                            />
                            {/* <i onClick={() => handleAddToQueue([
					        	song.name,
					        	song.artist,
					        	song.source,
					        	song.albumImgUrl,
					        ])}
					        class="search-song-button fa-solid fa-list fa-xl"
					        /> */}
                        </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    )
}

export default Artists;
