import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
		console.log(playlist);
		return (
			<div className="playlist-card" key={playlist.name}>
				<div className="playlist-card-contents">
					<img src={playlist.cover_img_url} />
					<p id="playlist-name">{playlist.name}</p>
					<p>By {playlist.user.username}</p>
				</div>
			</div>
		);
	});

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					type="search"
					id="search"
					name="search"
					onChange={(e) => setSearch(e.target.value)}
				/>
				<button>Search</button>
			</form>
			{searchResults.length>1 && (
				<>
					<h2>Playlists: </h2>
					<div className="playlists-container">{playlistSearchResults}</div>
				</>
			)}
		</div>
	);
}
