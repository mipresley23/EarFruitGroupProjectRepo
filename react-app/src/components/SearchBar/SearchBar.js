import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongs } from '../../store/songs';
import { NavLink } from "react-router-dom";
import "./SearchBar.css";

export default function SearchBar() {
	const dispatch = useDispatch()
	const songs = useSelector(state => state?.songs);
	const songsArray = Object.values(songs)
	const [search, setSearch] = useState("");
	const [searchResultsArray, setSearchResultsArray] = useState([]);
	const searchSongs = songsArray.filter((song) => song.name.toUpperCase().includes(search.toUpperCase()) || song.artist.toUpperCase().includes(search.toUpperCase()))
	console.log(searchSongs)

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
	}, [search])


	const playlistSearchResults = searchResultsArray.map((playlist) => {
		// console.log(playlist);
		return (
			<NavLink className='search-playlist-link' to={`/playlists/${playlist.id}`}>
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
	const songSearchResults = searchSongs.map((song) => {
		// console.log(playlist);
		return (
			<div className="song-card" key={song.name}>
				<div className="song-card-contents">
					<p id="song-name">{song.name}</p>

					<p id="song-name">{song.artist}</p>
					<p>By {song.user_Id.username}</p>
					<button><i class="fa fa-plus"></i></button>
				</div>
				</div>

		);
	});



	return (
		<div className="search-container">
			<form className="search-bar" onSubmit={onSubmit}>
				<i class="search-icon fa fa-search"></i>
				<input type="text" id="search" name="search" placeholder="Artists, songs, or playlists" onChange={(e) => setSearch(e.target.value)} />
				{/* <button>Search</button> */}
			</form>
			{searchResultsArray.length>0 && (
				<>
					<h2>Playlists: </h2>
					<div className="playlists-container">{playlistSearchResults}</div>
				</>
			)}
			{searchSongs.length>0 && (
				<>
					<h2>Songs: </h2>
					<div className="songs-container">{songSearchResults}</div>
				</>
			)}
		</div>
	);
}
