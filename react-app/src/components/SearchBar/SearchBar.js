import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongs } from "../../store/songs";
import { NavLink } from "react-router-dom";
import AudioListProvider, { AudioListContext } from '../../context/audioList';
import circleLogo from '../assets/earfruit-kiwi-circle-logo.png';
import defaultPlaylistImage from "../assets/my-playlist-img.png";
import "./SearchBar.css";

export default function SearchBar() {
	const dispatch = useDispatch();
	const songs = useSelector((state) => state?.songs);
	const songsArray = Object.values(songs);
	const [search, setSearch] = useState("");
	const [searchResultsArray, setSearchResultsArray] = useState([]);
	const searchSongs = songsArray.filter(
		(song) =>
			song.name.toUpperCase().includes(search.toUpperCase()) ||
			song.artist.toUpperCase().includes(search.toUpperCase())
	);
	// console.log(searchSongs);
	const { audioList, setAudioList, clearAudioList, setClearAudioList } =
		useContext(AudioListContext);

	async function onSubmit(e) {
		e.preventDefault();
		// console.log(search);
		async function fetchData() {
			const response = await fetch(`/api/playlists/${search}`);
			const responseData = await response.json();
			setSearchResultsArray(responseData.playlists);
		}
		fetchData();
	}

	useEffect(() => {
		dispatch(getSongs());
	}, [dispatch]);

	useEffect(() => {
		// console.log(search);
		async function fetchData() {
			const response = await fetch(`/api/playlists/${search}`);
			const responseData = await response.json();
			// console.log(responseData.playlists)
			setSearchResultsArray(responseData.playlists);
		}
		fetchData();
	}, [search]);

	const playlistSearchResults = searchResultsArray.map((playlist) => {
		// console.log(playlist);
		return (
			<NavLink
				className="search-playlist-link"
				to={`/playlists/${playlist.id}`}
			>
				<div className="playlist-card" key={playlist.name}>
					<div className="playlist-card-contents">
						<img src={playlist.cover_img_url?playlist.cover_img_url:defaultPlaylistImage} alt=''/>
						<p id="playlist-name">{playlist.name}</p>
						<p>By {playlist.user.username}</p>
					</div>
				</div>
			</NavLink>
		);
	});

	const handlePlaySong = async (value) => {
		// console.log(value);
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
	const songSearchResults = searchSongs.map((song) => {
		// console.log(playlist);
		// console.log(song);
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
					<i
						onClick={() =>
							handlePlaySong([
								song.name,
								song.artist,
								song.source,
								song.albumImgUrl,
							])
						}
						class="search-song-button fa-solid fa-play fa-lg"
					/>
					{/* <i
						onClick={() =>
							handleAddToQueue([
								song.name,
								song.artist,
								song.source,
								song.albumImgUrl,
							])
						}
						class="search-song-button fa-solid fa-list fa-lg"
					></i> */}
				</td>
			</tr>

			/* <div className="song-card-contents">
					<p>{songNum}</p>
					<p id="song-name">{song.name}</p>

					<p id="song-name">{song.artist}</p>
					<p>By {song.user_Id.username}</p>
				</div>
				<div className="song-card-buttons">
					<i class="fa fa-play fa-lg"></i>
					<img className='song-buttons song-card-queue-button' value={[song.name, song.artist, song.source]} type='image' src={addToPlaylistButton}/>
				</div> */
		);
	});

	return (
		<div className="search-container">
			<form className="search-bar" onSubmit={onSubmit}>
				<i class="search-icon fa fa-search"></i>
				<input
					type="text"
					id="search"
					name="search"
					placeholder="Artists, songs, or playlists"
					onChange={(e) => setSearch(e.target.value)}
				/>
				{/* <button>Search</button> */}
			</form>
			{searchResultsArray.length > 0 && (
				<>
					<h2>Playlists: </h2>
					<div className="playlists-container">{playlistSearchResults}</div>
				</>
			)}
			{searchSongs.length > 0 && (
				<>
					<h2>Songs: </h2>
					<table className="search-song-table">
						<thead>
							<tr className="border-white">
								<th className="search-song-number">#</th>
								<th className="">Title</th>
								<th className="">Album</th>
								<th className=""></th>
							</tr>
						</thead>
						<tbody>{songSearchResults}</tbody>
					</table>
				</>
			)}
		</div>
	);
}
