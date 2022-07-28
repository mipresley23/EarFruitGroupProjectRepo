import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongs } from "../../store/songs";
import { NavLink } from "react-router-dom";
import addToPlaylistButton from "../assets/addtoPlaylist.png";
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
	console.log(searchSongs);

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
						<img src={playlist.cover_img_url} />
						<p id="playlist-name">{playlist.name}</p>
						<p>By {playlist.user.username}</p>
					</div>
				</div>
			</NavLink>
		);
	});
	let songNum = 0;
	const songSearchResults = searchSongs.map((song) => {
		// console.log(playlist);
		songNum++;
		return (
			<tr className="">
				<td className="search-song-number">{songNum}</td>
				<td className="">
					<div className="search-song-name">
						{song.name}
					</div>
					<div className="search-song-artist">
						{song.artist}
					</div>
				</td>
				<td className="search-song-album">{song.album}</td>
				<td className="search-song-button-cont">
					<i class="search-song-play-button fa fa-play fa-lg"></i>
					<img
						className="song-buttons song-card-queue-button"
						// value={[song.name, song.artist, song.source]}
						type="image"
						src={addToPlaylistButton}
					/>
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
								<th className="">#</th>
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
