import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./SearchBar.css";

export default function SearchBar() {
	const [search, setSearch] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	async function onSubmit(e) {
		e.preventDefault();
		// console.log(search);
		async function fetchData() {
			const response = await fetch(`/api/playlists/${search}`);
			const responseData = await response.json();
			// console.log(responseData.playlists)
			setSearchResults(responseData.playlists);
		}
		fetchData();
	}

	const playlistSearchResults = searchResults.map((playlist) => {
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

	return (
		<div className="search-container">
			<form onSubmit={onSubmit}>
				<i class="fa fa-search"></i>
				<input type="search" id="search" name="search" placeholder="Artists, songs, or playlists" onChange={(e) => setSearch(e.target.value)} />
				<button>Search</button>
			</form>
			{searchResults.length>0 && (
				<>
					<h2>Playlists: </h2>
					<div className="playlists-container">{playlistSearchResults}</div>
				</>
			)}
		</div>
	);
}
