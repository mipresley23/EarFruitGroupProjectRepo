import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import AudioListProvider, { AudioListContext } from "../../context/audioList";
import { getSongs } from "../../store/songs";
import Artists from "../Artists/Artists";
import Albums from "../Albums/Albums";
import EditSongModal from "../EditSongModal";
import ConfirmDeleteModal from "../ConfirmDeleteModal";
import ReactJkMusicPlayer from "react-jinke-music-player";
import playSongButton from "../assets/play_button.png";
import addToPlaylistButton from "../assets/addtoPlaylist.png";
import circleLogo from "../assets/earfruit-kiwi-circle-logo.png";

import "./Songs.css";

function Songs({ songPage }) {
	const songs = useSelector((state) => state?.songs);
	const dispatch = useDispatch();
	const history = useHistory();
	const songsArr = Object.values(songs);
	console.log("songsArr: ", songsArr);

	const { audioList, setAudioList, clearAudioList, setClearAudioList } =
		useContext(AudioListContext);

	const sessionUser = useSelector((state) => state.session.user);

	const [playButton, setPlayButton] = useState(false);

	const [audios, setAudios] = useState([]);
	console.log("audios: ", audios);

	useEffect(() => {
		dispatch(getSongs());
	}, [dispatch]);

	useEffect(() => {
		setAudios(Object.values(songs));
	}, [songs]);

	// const handlePlaySong = async(e) => {
	//     e.preventDefault();
	//     setClearAudioList(true)
	//     const audioArr = e.target.value.split(',')
	//     console.log('audioArr: ', audioArr)
	//     console.log('new audio aws source: ', audioArr[2])
	//     setAudioList([])
	//     if (audioArr[3]){
	//         await setAudioList([{name: audioArr[0], singer: audioArr[1], cover: audioArr[3], musicSrc: audioArr[2]}])
	//     }else{
	//         await setAudioList([{name: audioArr[0], singer: audioArr[1], cover: circleLogo, musicSrc: audioArr[2]}])
	//     }
	// }
	// const handleAddToQueue = async(e) => {
	//     e.preventDefault();
	//     setClearAudioList(false)
	//     const audioArr = e.target.value.split(',')
	//     console.log('audioArr: ', audioArr)
	//     console.log(audioList !== null)
	//     console.log('audioListinQueueFunc: ', audioList)
	//     if(audioList){
	//         setAudioList([{name: audioArr[0], singer: audioArr[1], cover: audioArr[3], musicSrc: audioArr[2]}])
	//     }
	// }

	const handlePlaySong = async (value) => {
		console.log(value);
		setClearAudioList(true);
		setAudioList([]);
		if (value[3]) {
			await setAudioList([
				{
					name: value[0],
					singer: value[1],
					cover: value[3],
					musicSrc: value[2],
				},
			]);
		} else {
			await setAudioList([
				{
					name: value[0],
					singer: value[1],
					cover: circleLogo,
					musicSrc: value[2],
				},
			]);
		}
	};

	const handleAddToQueue = async (value) => {
		setClearAudioList(false);
		// const audioArr = e.target.value.split(',')
		// console.log('audioArr: ', audioArr)
		// console.log(audioList !== null)
		// console.log('audioListinQueueFunc: ', audioList)
		if (audioList) {
			setAudioList([
				{
					name: value[0],
					singer: value[1],
					cover: value[3],
					musicSrc: value[2],
				},
			]);
		}
	};
	let songNum = 0;
	const songList = songsArr.reverse().map((song) => {
		songNum++;
		return (
			<tr className="search-song-row">
				<td className="search-song-number">{songNum}</td>
				<td className="">
					<div className="search-song-name">{song.name}</div>
					<div className="search-song-artist">{song.artist}</div>
				</td>
				<td className="search-song-album">{song.album}</td>
				<td className="search-song-button-cont">
					<i onClick={() =>
							handlePlaySong([
								song.name,
								song.artist,
								song.source,
								song.albumImgUrl,
							])
						} class="search-song-button fa fa-play fa-xl"></i>
                    { sessionUser && sessionUser.id === song.user_Id.id &&
                                    <>
                                        <EditSongModal song={song} />
                                        <ConfirmDeleteModal song={song} />
                                    </>
                                    }
				</td>
			</tr>
		);
	});
	console.log("audioList:", audioList);
	return (
		<>
			{songPage === "artists" && (
				<Artists
					songsArr={songsArr}
					handlePlaySong={handlePlaySong}
					handleAddToQueue={handleAddToQueue}
				/>
			)}
			{songPage === "albums" && (
				<Albums
					songsArr={songsArr}
					handlePlaySong={handlePlaySong}
					handleAddToQueue={handleAddToQueue}
				/>
			)}
			{songPage === "" && (
				// <ul id="songs">
					<div className="song-list-cont">
						<table className="search-song-table">
							<thead>
								<tr className="border-white">
									<th className="search-song-number">#</th>
									<th className="">Title</th>
									<th className="">Album</th>
									<th className=""></th>
								</tr>
							</thead>
							<tbody>{songList}</tbody>
						</table>
					</div>
					/* {songsArr && songsArr.map(song => (

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
                                    <i onClick={() =>
                                        		handlePlaySong([
                                        			song.name,
                                        			song.artist,
                                        			song.source,
                                        			song.albumImgUrl,
                                    		])
                                    	}
                                    	class="search-song-button fa-solid fa-play fa-xl"
                                    />
                                    <i onClick={() =>
					                		handleAddToQueue([
					                			song.name,
					                			song.artist,
					                			song.source,
					                			song.albumImgUrl,
					                		])
					                	}
					                	class="search-song-button fa-solid fa-list fa-xl"
					                />
                                </li>
                            </div>

                ))} */
				// </ul>
			)}
		</>
	);
}

// (e) => console.log(e.target.value)

export default Songs;
